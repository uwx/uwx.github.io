import { Vector4 } from 'three';

// Liquid glass drawn in the background shader instead of via backdrop-filter: the background is a static texture we
// already own, so refraction is just a displaced lookup around each card's rounded-rect distance field.
// Inspired by https://github.com/nikdelvin/liquid-glass (MIT), which does the same with SVG displacement maps.

export const MAX_RECTS = 64;

type GlassStyle = {
    selector: string;
    /** max inward sampling shift at the rim in px; keep <= edge / 2 so the mapping stays monotonic */
    strength: number;
    /** blur radius in px applied to everything behind the glass */
    blur: number;
    /** width in px of the refracting/highlighted rim */
    edge: number;
};

// Order matters: later entries are drawn on top of (and refract through) earlier ones.
const STYLES: GlassStyle[] = [
    { selector: '.glass-panel', strength: 0, blur: 8, edge: 1 },
    { selector: '.project-card, .skill-card', strength: 10, blur: 14, edge: 28 },
];

/** Glass rects overlapping the canvas, relative to it, in CSS px (y down), as uniform data for the shader. */
export function collectGlass(canvas: HTMLCanvasElement, canvasHeight: number) {
    const origin = canvas.getBoundingClientRect();
    const rects: Vector4[] = [];
    const styles: Vector4[] = [];

    for (const style of STYLES) {
        document.querySelectorAll<HTMLElement>(style.selector).forEach((el) => {
            const r = el.getBoundingClientRect();
            if (!r.width || !r.height || rects.length >= MAX_RECTS) return;
            // Contents of a closed <details> are not rendered but can still report a stale rect over other content
            if (el.closest('details:not([open])')) return;
            const top = r.top - origin.top;
            if (top > canvasHeight || top + r.height < 0) return; // off the rendered window
            const radius = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
            rects.push(new Vector4(r.left - origin.left, top, r.width, r.height));
            styles.push(new Vector4(radius, style.strength, style.blur, style.edge));
        });
    }
    return { rects, styles };
}

export const glassElements = () => document.querySelectorAll<HTMLElement>(STYLES.map((s) => s.selector).join(','));

export const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

export const fragmentShader = /* glsl */ `
#define MAX_RECTS ${MAX_RECTS}

uniform sampler2D uTex;
uniform vec2 uSize;        // canvas size in CSS px
uniform int uCount;
uniform vec4 uRects[MAX_RECTS];   // x, y, w, h
uniform vec4 uStyles[MAX_RECTS];  // radius, strength, blur, edge
varying vec2 vUv;

const vec2 LIGHT = vec2(-0.6, -0.8); // top-left, y down
const float ABERRATION = 0.08;       // red/blue split relative to the displacement

float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

vec3 fetch(vec2 p) {
    return texture2D(uTex, vec2(p.x / uSize.x, 1.0 - p.y / uSize.y)).rgb;
}

// Vogel disc: 32 taps keep the blur smooth enough at the radii used behind the panel and cards
vec3 blurred(vec2 c, float r) {
    if (r < 0.5) return fetch(c);
    vec3 sum = fetch(c);
    for (int i = 0; i < 32; i++) {
        float a = float(i) * 2.399963;
        float d = r * sqrt((float(i) + 0.5) / 32.0);
        sum += fetch(c + d * vec2(cos(a), sin(a)));
    }
    return sum / 33.0;
}

void main() {
    vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uSize;
    vec2 q = p;
    float blur = 0.0;
    float rim = 0.0;
    float refracted = 0.0;
    float inside = 0.0;

    for (int i = 0; i < MAX_RECTS; i++) {
        if (i >= uCount) break;
        vec4 rect = uRects[i];
        vec4 style = uStyles[i];
        vec2 h = rect.zw * 0.5;
        vec2 l = p - (rect.xy + h);
        float radius = min(style.x, min(h.x, h.y));
        float sd = sdRoundBox(l, h, radius);
        float m = clamp(0.5 - sd, 0.0, 1.0); // 1px antialiased mask
        if (m <= 0.0) continue;

        vec2 e = vec2(1.0, 0.0);
        vec2 n = vec2(
            sdRoundBox(l + e.xy, h, radius) - sdRoundBox(l - e.xy, h, radius),
            sdRoundBox(l + e.yx, h, radius) - sdRoundBox(l - e.yx, h, radius));
        float len = length(n);
        n = len > 1e-4 ? n / len : vec2(0.0);

        float edge = min(style.w, min(h.x, h.y));
        float t = clamp(-sd / edge, 0.0, 1.0);
        float shift = style.y * pow(1.0 - t, 2.0) * m;
        q -= n * shift; // sample from further in: content at the rim is magnified
        refracted = max(refracted, shift);
        blur = max(blur, style.z * m);
        inside = max(inside, m);

        if (style.y > 0.0) {
            float facing = 0.3 + 0.7 * abs(dot(n, LIGHT));
            float line = 1.0 - smoothstep(0.0, 1.2, -sd);
            rim += (pow(1.0 - t, 3.0) * 0.25 + line * 0.4) * facing * m;
        }
    }

    vec3 col;
    if (refracted > 0.5) {
        vec2 off = q - p;
        col = vec3(blurred(p + off * (1.0 + ABERRATION), blur).r, blurred(q, blur).g, blurred(p + off * (1.0 - ABERRATION), blur).b);
    } else {
        col = blurred(q, blur);
    }

    float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(vec3(luma), col, mix(1.0, 1.35, inside)) * mix(1.0, 1.05, inside);
    col += rim;

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
}`;
