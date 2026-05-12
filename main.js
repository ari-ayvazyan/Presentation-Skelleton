import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './style.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

const slideFiles = [
  "slides/01_hero.html",
  "slides/02_content.html",
  "slides/03_outro.html",
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
    width: '100%',
    height: '100%',
    margin: 0,
    minScale: 1,
    maxScale: 1,
    navigationMode: 'grid', // Supports 2D navigation (left, right, top, bottom)
    plugins: [RevealHighlight, RevealNotes],
  });

  const updateSlideNumber = () => {
    const indices = Reveal.getIndices();
    const slideNumberStr = `${indices.h + 1}.${indices.v + 1}`;
    document.querySelector('.custom-slide-number').innerText = slideNumberStr;
  };

  Reveal.on('ready', updateSlideNumber);
  Reveal.on('slidechanged', updateSlideNumber);
}

loadSlides();
