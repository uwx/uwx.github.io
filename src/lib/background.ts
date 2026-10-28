import {
    AmbientLight,
    BackSide,
    Box3,
    BufferAttribute,
    BufferGeometry,
    CatmullRomCurve3,
    Color,
    DirectionalLight,
    DoubleSide,
    Mesh,
    MeshBasicMaterial,
    MeshPhysicalMaterial,
    OrthographicCamera,
    PlaneGeometry,
    PMREMGenerator,
    Scene,
    ShaderMaterial,
    Sphere,
    SphereGeometry,
    SRGBColorSpace,
    Texture,
    Vector2,
    Vector3,
    Vector4,
    WebGLRenderer,
    WebGLRenderTarget,
} from 'three';
import { collectGlass, fragmentShader, glassElements, MAX_RECTS, vertexShader } from './liquid-glass';

// Change to get a different (but still reproducible) composition.
const SEED = 0x5eed5;

const COLORS = ['#ff5fa8', '#7fd8ff', '#ffe45c'];
// Ribbons are generated per horizontal band of the page, each from its own seed, so the existing background never
// changes when the page grows or shrinks (e.g. a <details> opening); only bands at the bottom are added or dropped.
const BAND = 1400;
const PER_BAND = 7;
// How far ribbon paths wander sideways, as a fraction of the spacing between their control points; lower for straighter
const CURVE_WOBBLE = 0.35;
// Ribbon twist: one 180deg turn per this many px of length (times a seeded 0.6-1.6); raise for gentler twisting
const PX_PER_HALF_TURN = 1400;
const MAX_CANVAS_PX = 8192;
// Pixel budget for the offscreen target + canvas; huge viewports render below devicePixelRatio
const MAX_TOTAL_PX = 16e6;

function mulberry32(a: number) {
    return () => {
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const ACROSS = 5; // vertices across the ribbon: enough for the bulge to give the highlights something to roll over

/** Satin ribbon along `curve`: slightly bulged across its width, cross-section rotating `halfTurns` * 180deg around the tangent. */
function ribbonGeometry(curve: CatmullRomCurve3, width: number, halfTurns: number, phase: number) {
    const samples = 240;
    const positions = new Float32Array((samples + 1) * ACROSS * 3);
    const indices: number[] = [];
    const up = new Vector3(0, 0, 1);
    const side = new Vector3();
    const normal = new Vector3();
    const across = new Vector3();
    const face = new Vector3();

    for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const p = curve.getPointAt(t);
        const tangent = curve.getTangentAt(t);
        // shortcut: fixed reference axis, degenerate where the tangent is parallel to z (control points keep z-spread small vs xy)
        normal.crossVectors(tangent, up).normalize();
        side.crossVectors(tangent, normal).normalize();
        const a = phase + t * halfTurns * Math.PI;
        across.set(0, 0, 0).addScaledVector(normal, Math.cos(a)).addScaledVector(side, Math.sin(a));
        face.set(0, 0, 0).addScaledVector(normal, -Math.sin(a)).addScaledVector(side, Math.cos(a));

        for (let k = 0; k < ACROSS; k++) {
            const u = (k / (ACROSS - 1)) * 2 - 1;
            const v = (i * ACROSS + k) * 3;
            const bulge = width * 0.14 * (1 - u * u);
            positions[v] = p.x + across.x * u * (width / 2) + face.x * bulge;
            positions[v + 1] = p.y + across.y * u * (width / 2) + face.y * bulge;
            positions[v + 2] = p.z + across.z * u * (width / 2) + face.z * bulge;
        }
        if (i < samples) {
            for (let k = 0; k < ACROSS - 1; k++) {
                const o = i * ACROSS + k;
                indices.push(o, o + 1, o + ACROSS, o + 1, o + ACROSS + 1, o + ACROSS);
            }
        }
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
}

/** Procedural studio for reflections: a purple dome lit by pink, blue and yellow softboxes. Built once, reused by every scene. */
function environment(renderer: WebGLRenderer) {
    const studio = new Scene();

    const dome = new Mesh(new SphereGeometry(50, 32, 16), new MeshBasicMaterial({ side: BackSide, vertexColors: true }));
    const positions = dome.geometry.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    const top = new Color('#fff1fb').multiplyScalar(0.8);
    const bottom = new Color('#a98ad6').multiplyScalar(0.8);
    const c = new Color();
    for (let i = 0; i < positions.count; i++) c.lerpColors(bottom, top, (positions.getY(i) / 50 + 1) / 2).toArray(colors, i * 3);
    dome.geometry.setAttribute('color', new BufferAttribute(colors, 3));
    studio.add(dome);

    // colour, position x/y/z, size w/h, brightness (HDR: > 1)
    const softboxes: [string, number, number, number, number, number, number][] = [
        ['#ff5fa8', -28, 14, 16, 24, 9, 9],
        ['#7fd8ff', 30, 4, 12, 9, 26, 8],
        ['#ffe45c', 4, -24, 22, 28, 6, 4],
        ['#ffffff', 0, 36, -8, 34, 12, 6],
    ];
    for (const [hex, x, y, z, w, h, k] of softboxes) {
        const box = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(hex).multiplyScalar(k), side: DoubleSide }));
        box.position.set(x, y, z);
        box.lookAt(0, 0, 0);
        studio.add(box);
    }

    const pmrem = new PMREMGenerator(renderer);
    const texture = pmrem.fromScene(studio, 0.03).texture;
    pmrem.dispose();
    return texture;
}

function buildScene(W: number, H: number, env: Texture) {
    const scene = new Scene();

    scene.environment = env;
    scene.add(new AmbientLight('#ffffff', 0.2));
    // Coloured rim lights: only the direction matters. The shadow-casting key light is placed once the ribbons exist.
    const rimBlue = new DirectionalLight('#7fd8ff', 0.3);
    rimBlue.position.set(0.8, -0.4, 0.5);
    const rimPink = new DirectionalLight('#ff5fa8', 0.3);
    rimPink.position.set(-0.7, -0.6, 0.4);
    scene.add(rimBlue, rimPink);

    const scale = Math.min(W, 1200) / 1200;
    const depth = W * 0.6;

    for (let band = -1; band <= Math.ceil(H / BAND); band++) {
        const rnd = mulberry32((SEED + band * 0x9e3779b1) | 0);
        const between = (a: number, b: number) => a + (b - a) * rnd();

        for (let n = 0; n < PER_BAND; n++) {
            const startY = band * BAND + between(0, BAND);
            const start = new Vector3(between(-0.2 * W, 1.2 * W), -startY, between(-depth, depth));
            const end = new Vector3(between(-0.2 * W, 1.2 * W), -(startY + between(-0.8, 2.2) * BAND), between(-depth, depth));
            const length = start.distanceTo(end);
            const segments = 2 + Math.floor(length / 900);
            // Sideways wander of the intermediate points is a fraction of their spacing, so the path bends gently
            const wobble = (length / segments) * CURVE_WOBBLE;

            const points = [start];
            for (let k = 1; k < segments; k++) {
                const p = start.clone().lerp(end, k / segments);
                p.x += between(-1, 1) * wobble;
                p.y += between(-1, 1) * wobble;
                p.z += between(-1, 1) * Math.min(wobble, depth);
                points.push(p);
            }
            points.push(end);

            const color = new Color(COLORS[(((band * PER_BAND + n) % 3) + 3) % 3]).offsetHSL(0, 0, between(-0.05, 0.05));
            const curve = new CatmullRomCurve3(points, false, 'centripetal');
            const width = between(50, 140) * scale;
            // Twist is spread over the ribbon's length, so short ribbons don't wring themselves tight
            const halfTurns = curve.getLength() / (PX_PER_HALF_TURN * between(0.6, 1.6));
            const mesh = new Mesh(
                ribbonGeometry(curve, width, halfTurns, between(0, Math.PI)),
                new MeshPhysicalMaterial({ color, side: DoubleSide, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.12 }),
            );
            mesh.castShadow = mesh.receiveShadow = true;
            scene.add(mesh);
        }
    }

    // Key light with one soft shadow map covering all ribbons: crossings read as depth. Page-sized, so rendered once per scene.
    const key = new DirectionalLight('#ffffff', 2.6);
    const bounds = new Box3().setFromObject(scene);
    const sphere = bounds.getBoundingSphere(new Sphere());
    key.position.copy(sphere.center).addScaledVector(new Vector3(-0.35, 0.55, 0.75).normalize(), sphere.radius * 1.2);
    key.target.position.copy(sphere.center);
    scene.add(key, key.target);
    key.updateMatrixWorld();
    key.target.updateMatrixWorld();

    const shadowCamera = key.shadow.camera;
    shadowCamera.position.copy(key.position);
    shadowCamera.lookAt(sphere.center);
    shadowCamera.updateMatrixWorld();
    const toLight = shadowCamera.matrixWorld.clone().invert();
    const lightBox = new Box3();
    for (const x of [bounds.min.x, bounds.max.x])
        for (const y of [bounds.min.y, bounds.max.y])
            for (const z of [bounds.min.z, bounds.max.z]) lightBox.expandByPoint(new Vector3(x, y, z).applyMatrix4(toLight));
    Object.assign(shadowCamera, { left: lightBox.min.x, right: lightBox.max.x, bottom: lightBox.min.y, top: lightBox.max.y, near: -lightBox.max.z, far: -lightBox.min.z });
    shadowCamera.updateProjectionMatrix();

    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.radius = 4;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 2;
    return scene;
}

/**
 * The ribbons live in page coordinates (seeded, static), but only a window of about two viewports around the scroll
 * position is rendered, at full resolution, into a canvas that scrolls natively with the page. The window is re-rendered
 * only when scrolling nears its edge, so scrolling stays in sync with the content and costs nothing per frame.
 * Each render goes to a texture first, which the liquid-glass shader then composites onto the canvas.
 */
export function renderBackground(canvas: HTMLCanvasElement) {
    let renderer: WebGLRenderer;
    try {
        renderer = new WebGLRenderer({ canvas, antialias: true });
    } catch {
        return; // no WebGL: the CSS background stays
    }
    renderer.setClearColor(matchMedia('(prefers-color-scheme: dark)').matches ? '#1d1220' : '#f0dcec');
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.autoUpdate = false; // the shadow map is static: refreshed only when the scene is rebuilt
    const env = environment(renderer);

    // sRGB target: stored encoded (8 bit) but sampled linear, so the glass maths happens in linear light
    const target = new WebGLRenderTarget(1, 1, { samples: 4, colorSpace: SRGBColorSpace });
    const uniforms = {
        uTex: { value: target.texture },
        uSize: { value: new Vector2() },
        uCount: { value: 0 },
        uRects: { value: Array.from({ length: MAX_RECTS }, () => new Vector4()) },
        uStyles: { value: Array.from({ length: MAX_RECTS }, () => new Vector4()) },
    };
    const quad = new Scene();
    const quadMesh = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ uniforms, vertexShader, fragmentShader, depthTest: false }));
    quadMesh.frustumCulled = false;
    quad.add(quadMesh);
    const quadCamera = new OrthographicCamera();

    let pageKey = '';
    let scene: Scene | undefined;
    let camera: OrthographicCamera;
    let winKey = '';
    let winTop = 0;
    let winH = 0;
    let lastGlass = '';

    const draw = () => {
        const W = Math.round(document.body.clientWidth);
        const H = Math.round(document.body.clientHeight);
        const vh = window.innerHeight;
        if (!W || !H) return;

        const h = Math.min(H, vh * 2);
        const scroll = -document.body.getBoundingClientRect().top; // viewport top in body coordinates
        const ratio = Math.min(window.devicePixelRatio, 2, MAX_CANVAS_PX / Math.max(W, h), Math.sqrt(MAX_TOTAL_PX / (W * h)));

        // Page changed: new composition for the new size
        if (pageKey !== `${W}x${H}`) {
            pageKey = `${W}x${H}`;
            scene?.traverse((o) => {
                if (o instanceof Mesh) {
                    o.geometry.dispose();
                    (o.material as MeshPhysicalMaterial).dispose();
                }
            });
            scene = buildScene(W, H, env);
            renderer.shadowMap.needsUpdate = true;
            // Orthographic, 1 unit = 1 CSS px, y grows downwards on the page so the scene uses -y. The frustum is set per
            // window below. No perspective keeps the composition independent of the page height.
            camera = new OrthographicCamera(0, W, 0, -H, 1, 20000);
            camera.position.set(0, 0, 10000);
            winKey = '';
        }

        // Window out of date: wrong size, or the viewport is within 15% of its edge
        const margin = vh * 0.15;
        const stale =
            winKey !== `${W}x${h}x${ratio}` ||
            (winTop > 0 && scroll < winTop + margin) ||
            (winTop + winH < H && scroll + vh > winTop + winH - margin);

        if (stale) {
            if (winKey !== `${W}x${h}x${ratio}`) {
                winKey = `${W}x${h}x${ratio}`;
                winH = h;
                renderer.setPixelRatio(ratio);
                renderer.setSize(W, h, false);
                // At 2x the aliasing is hardly visible, so skip the (memory hungry) multisampling
                const samples = ratio >= 2 ? 0 : 4;
                if (target.samples !== samples) {
                    target.dispose();
                    target.samples = samples;
                }
                target.setSize(Math.round(W * ratio), Math.round(h * ratio));
                uniforms.uSize.value.set(W, h);
            }
            winTop = Math.round(Math.max(0, Math.min(H - h, scroll - (h - vh) / 2)));
            canvas.style.top = `${winTop}px`;
            canvas.style.height = `${h}px`;

            camera.top = -winTop;
            camera.bottom = -(winTop + h);
            camera.updateProjectionMatrix();
            renderer.setRenderTarget(target);
            renderer.render(scene!, camera);
            renderer.setRenderTarget(null);
            lastGlass = '';
        }

        const glass = collectGlass(canvas, h);
        const key = glass.rects.map((r, i) => `${r.toArray()}${glass.styles[i].x}`).join(';');
        if (key === lastGlass) return;
        lastGlass = key;

        uniforms.uCount.value = glass.rects.length;
        glass.rects.forEach((r, i) => uniforms.uRects.value[i].copy(r));
        glass.styles.forEach((s, i) => uniforms.uStyles.value[i].copy(s));
        renderer.render(quad, quadCamera);
        // Fade in once something has been drawn (a frame later, so the transition starts from opacity 0)
        requestAnimationFrame(() => canvas.classList.add('ready'));
    };

    let frame = 0;
    const schedule = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
    };

    const start = () => {
        const observer = new ResizeObserver(schedule);
        observer.observe(document.body);
        glassElements().forEach((el) => observer.observe(el));
        addEventListener('scroll', schedule, { passive: true });
        document.addEventListener('toggle', schedule, true); // <details> opening/closing changes which glass is visible (toggle doesn't bubble)
        draw();
    };
    // Wait for layout to settle (CSS, fonts) so the first glass pass doesn't use stale rects
    const ready = () => document.fonts.ready.then(start);
    if (document.readyState === 'complete') ready();
    else addEventListener('load', ready, { once: true });
}
