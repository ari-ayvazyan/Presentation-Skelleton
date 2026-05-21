import { chromium } from 'playwright-chromium';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const URL = 'http://localhost:5173/?print-pdf';
const OUTPUT = resolve(dirname(fileURLToPath(import.meta.url)), 'presentation.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();

page.on('console', (msg) => {
  if (msg.type() === 'error') console.error('PAGE ERROR:', msg.text());
});

await page.goto(URL, { waitUntil: 'load' });

await page.waitForFunction(() => {
  return new Promise((resolve) => {
    const reveal = document.querySelector('.reveal');
    if (!reveal) return;
    if (document.querySelector('.pdf-page')) return resolve(true);
    reveal.addEventListener('pdf-ready', () => resolve(true), { once: true });
  });
}, null, { timeout: 30000 });

await page.evaluate(() => document.fonts.ready);

await page.pdf({
  path: OUTPUT,
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`PDF written to ${OUTPUT}`);
