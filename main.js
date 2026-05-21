import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './style.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

const heroFile = "slides/01_hero.html";
const outroFile = "slides/99_outro.html";

const templateFiles = [
    "slide-templates/module_title.html",
    "slide-templates/feature_overview_grid.html",
    "slide-templates/two_column_cards.html",
    "slide-templates/vertical_feature_list.html",
    "slide-templates/visual_context.html",
    "slide-templates/comparison_table.html",
    "slide-templates/module_title_with_links.html",
    "slide-templates/four_quadrant.html",
    "slide-templates/five_item_grid.html",
    "slide-templates/cards_with_lists.html",
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

    // Initialize Reveal after content is loaded
    Reveal.initialize({
        hash: true,
        slideNumber: false,
        center: false,
        width: 1200,
        height: 800,
        margin: 0,
        minScale: 0.2,
        maxScale: 2.0,
        navigationMode: 'default',
        plugins: [RevealHighlight, RevealNotes],
    });

    window.Reveal = Reveal;

    const updateSlideNumber = () => {
        const indices = Reveal.getIndices();
        const slideNumberStr = `${indices.h + 1}.${indices.v + 1}`;
        document.querySelector('.custom-slide-number').innerText = slideNumberStr;
    };

    Reveal.on('ready', updateSlideNumber);
    Reveal.on('slidechanged', updateSlideNumber);
}

loadSlides();
