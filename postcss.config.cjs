module.exports = {
    plugins: [
      require('postcss-lightningcss')({
        // Use a browserslist query that will inform which browsers are supported
        // Will add or remove vendor prefixes that are needed or not anymore
        browsers: ">= .01%",
      }),
    ],
  };
  