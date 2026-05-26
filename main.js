import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './style.css';
import './components.js';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

const heroFile = "slides/01_hero.html";
const outroFile = "slides/99_outro.html";

const templateFiles = [
    "slide-templates/module_title.html",
    "slide-templates/feature_overview_grid.html",
    "slide-templates/two_column_cards.html",
    "slide-templates/visual_context.html",
    "slide-templates/comparison_table.html",
    "slide-templates/module_title_with_links.html",
    "slide-templates/five_item_grid.html",
    "slide-templates/numbered_steps.html",
    "slide-templates/four_column_comparison.html",
    "slide-templates/hands_on_steps.html",
    "slide-templates/call_to_action.html",
    "slide-templates/background_image.html",
];

const slideFiles = [
    heroFile,
    ...templateFiles,
    outroFile
];

async function loadSlides() {
    const slidesContainer = document.querySelector(".slides");

    for (const file of slideFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const html = await response.text();
            slidesContainer.innerHTML += html + "\n";
        } catch (e) {
            console.error(e);
            slidesContainer.innerHTML += `<section><h1>Error loading ${file}</h1></section>`;
        }
    }

    // Fixed A4-landscape canvas (ratio 1:√2). Reveal scales this canvas
    // uniformly to fit the window: same ratio scales 1:1, a different ratio
    // is letterboxed so the layout is preserved and always fully visible.
    Reveal.initialize({
        hash: true,
        slideNumber: false,
        center: false,
        width: 1414,
        height: 1000,
        margin: 0,
        minScale: 0.05,
        maxScale: 5,
        navigationMode: 'default',
        plugins: [RevealHighlight, RevealNotes],
    });

    window.Reveal = Reveal;

    const updateSlideNumber = () => {
        const indices = Reveal.getIndices();
        const slideNumberStr = `${indices.h + 1}.${indices.v + 1}`;
        document.querySelector('.custom-slide-number').innerText = slideNumberStr;
    };

    // The overlay (header + slide-number) lives outside .slides, so reveal's
    // scale transform doesn't reach it. Mirror .slides' position and transform
    // onto the overlay so it scales and aligns with the A4 canvas at any window
    // size/ratio.
    const slidesEl = document.querySelector('.slides');
    const overlay = document.querySelector('.canvas-overlay');
    const syncOverlayTransform = () => {
        const cs = getComputedStyle(slidesEl);
        overlay.style.top = cs.top;
        overlay.style.left = cs.left;
        overlay.style.transformOrigin = cs.transformOrigin;
        overlay.style.transform = cs.transform === 'none' ? '' : cs.transform;
    };

    Reveal.on('ready', updateSlideNumber);
    Reveal.on('slidechanged', updateSlideNumber);
    Reveal.on('ready', syncOverlayTransform);
    Reveal.on('resize', syncOverlayTransform);

    // Slide 1 (hero) keeps its pre-fixed-canvas look: it fills the whole
    // window edge-to-edge regardless of ratio, so the image always touches the
    // top/right/bottom corners. The other slides stay on the letterboxed fixed
    // canvas. Reveal scales .slides by S and positions the canvas inside the
    // window; here we counter that for the hero section so it spans the real
    // viewport: size it in canvas units = viewport / S, and shift its top-left
    // (in canvas units) to cancel the canvas's on-screen offset.
    const hero = document.querySelector('.slides > section.hero-slide');
    const syncHeroFullBleed = () => {
        if (!hero) return;
        const rect = slidesEl.getBoundingClientRect();
        const scale = rect.width / slidesEl.offsetWidth;
        if (!scale || !isFinite(scale)) return;
        hero.style.width = `${window.innerWidth / scale}px`;
        hero.style.height = `${window.innerHeight / scale}px`;
        // rect.left/top are the canvas origin in viewport px; convert to canvas
        // units (/scale) and move the section up/left by that much so it lands
        // at the viewport's (0,0).
        hero.style.left = `${-rect.left / scale}px`;
        hero.style.top = `${-rect.top / scale}px`;
    };

    Reveal.on('ready', syncHeroFullBleed);
    Reveal.on('resize', syncHeroFullBleed);
}

loadSlides();
