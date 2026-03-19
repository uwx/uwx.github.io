// @ts-check

const postcssPresetEnv = /** @type {typeof import('postcss-preset-env').default} */ (/** @type {unknown} */ (require('postcss-preset-env')));

const selectorParser = require('postcss-selector-parser');

/**
 * In a compound selector, type/universal selectors must come first per the CSS spec.
 * After unwrapping :where(), they can end up in the wrong position.
 * @param {selectorParser.Selector} selector
 */
function reorderCompoundSelectors(selector) {
  // Split nodes into compound groups separated by combinators
  /** @type {(selectorParser.Node[] | selectorParser.Node)[]} */
  const groups = [[]];

  for (const node of selector.nodes) {
    if (node.type === 'combinator') {
      groups.push(node);
      groups.push([]);
    } else {
      /** @type {selectorParser.Node[]} */ (groups[groups.length - 1]).push(node);
    }
  }

  for (const group of groups) {
    if (!Array.isArray(group) || group.length <= 1) continue;
    const tagIdx = group.findIndex(n => n.type === 'tag' || n.type === 'universal');
    if (tagIdx > 0) {
      const tag = group[tagIdx];
      const first = group[0];
      // Swap leading whitespace so the compound group's leading space stays at the front
      const savedBefore = tag.spaces.before;
      tag.spaces = { ...tag.spaces, before: first.spaces.before };
      first.spaces = { ...first.spaces, before: savedBefore };
      group.splice(tagIdx, 1);
      group.unshift(tag);
    }
  }

  const reordered = groups.flat();
  selector.removeAll();
  for (const node of reordered) {
    // TODO eventually check the node type here and throw if it's unexpected, but for now just trust the logic above
    selector.append(/** @type {selectorParser.String | selectorParser.Tag | selectorParser.Root | selectorParser.Pseudo | selectorParser.Nesting | selectorParser.Identifier | selectorParser.Comment | selectorParser.Combinator | selectorParser.ClassName | selectorParser.Attribute | selectorParser.Universal} */ (node));
  }
}

/**
 * @param {selectorParser.Selector} selector
 * @returns {selectorParser.Selector[]}
 */
function expandWhere(selector) {
  /** @type {selectorParser.Pseudo | null} */
  let whereNode = null;
  selector.walkPseudos(pseudo => {
    if (pseudo.value === ':where' && !whereNode) {
      whereNode = pseudo;
      return false;
    }
  });

  if (!whereNode) {
    const result = selector.clone();
    reorderCompoundSelectors(result);
    return [result];
  }

  const results = [];
  for (const innerSelector of /** @type {selectorParser.Pseudo} */ (whereNode).nodes) {
    const cloned = selector.clone();
    /** @type {selectorParser.Pseudo | null} */
    let clonedWhere = null;
    cloned.walkPseudos(pseudo => {
      if (pseudo.value === ':where' && !clonedWhere) {
        clonedWhere = pseudo;
        return false;
      }
    });
    /** @type {selectorParser.Pseudo} */ (/** @type {unknown} */ (clonedWhere)).replaceWith(...innerSelector.nodes.map(n => n.clone()));
    results.push(...expandWhere(cloned));
  }
  return results;
}

function postcssWhereFallback() {
  return {
    postcssPlugin: 'postcss-where-fallback',
    /**
     * @param {import('postcss').Rule} rule
     */
    Rule(rule) {
      const root = selectorParser().astSync(rule);
      /** @type {selectorParser.Selector[]} */
      const fallbackSelectors = [];

      root.each(selector => {
        let hasWhere = false;
        selector.walkPseudos(pseudo => {
          if (pseudo.value === ':where') {
            hasWhere = true;
          }
        });
        if (hasWhere) {
          fallbackSelectors.push(...expandWhere(selector));
        }
      });

      if (fallbackSelectors.length > 0) {
        rule.cloneAfter({
          selectors: ['_:-ms-lang(x)', ...fallbackSelectors.map(String)],
        });
      }
    },
  };
}
postcssWhereFallback.postcss = true;

function postcssWhereRootToHtml() {
  return {
    postcssPlugin: 'postcss-where-root-to-html',
    /**
     * @param {import('postcss').Rule} rule
     */
    Rule(rule) {
      if (rule.selectors.some(s => s.includes(':where(:root)'))) {
        const newSelectors = rule.selectors
          .filter(s => s.includes(':where(:root)'))
          .map(s => s.replace(':where(:root)', 'html'));

        if (newSelectors.length > 0) {
          const clone = rule.cloneAfter({
            selectors: newSelectors,
          });
        }
      }
    },
  };
}
postcssWhereRootToHtml.postcss = true;

module.exports = {
    plugins: [
      postcssWhereRootToHtml(),
      postcssPresetEnv({
        browsers: ">= .01%, ie>=7",
        stage: 0,
      }),
      postcssWhereFallback()
    ],
  };
  