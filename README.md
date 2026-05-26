# Presentation Template

A professional, modern presentation template built with [reveal.js](https://revealjs.com/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). This template provides a sleek, brand-consistent layout for technical and corporate presentations.

## Features

- **Responsive Design**: Optimized for various screen sizes using reveal.js.
- **Brand Consistency**: Fixed header for brand name and presentation title across all slides.
- **Dynamic Slide Loading**: Slides are modularly stored in `slides/` and injected dynamically.
- **Rich Layouts**: Includes Hero, Feature Grid, Vertical List, Visual Context, and Comparison Table layouts.
- **Styling**: Leverages Tailwind CSS for utility classes and custom CSS for presentation-specific components.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- npm (comes with Node.js)
- For image generation and usae of the image skill, install and setup the gemini nanobanana extension: https://github.com/gemini-cli-extensions/nanobanana

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173/` to view the presentation.

### Production

Build for production:
```bash
npm run build
```

### Presentation

- Use npm run presentation rather than npm run dev on the day — no HMR overhead, no dev warnings, behaves like the deployed version.
- Press F for fullscreen, S for speaker notes (opens a second window — handy with a projector/extended display).
- Have npm run export-pdf output (presentation.pdf) on hand as a backup in case the browser misbehaves.

```bash
npm run presentation
```

## Slide Previews

### Slide 1: Hero Slide
![Hero Slide](assets/slide_1.webp)

### Module 02: Core Features
#### 2.1: Module Title
![Module Title](assets/slide_1_0.webp)

#### 2.2: Feature Overview Grid
![Feature Overview Grid](assets/slide_1_1.webp)

#### 2.3: Two-Column Card Layout
![Two-Column Card Layout](assets/slide_1_2.webp)

#### 2.4: Vertical Feature List
![Vertical Feature List](assets/slide_1_3.webp)

#### 2.5: Visual Context Layout
![Visual Context Layout](assets/slide_1_4.webp)

#### 2.6: Comparison Table Layout
![Comparison Table Layout](assets/slide_1_5.webp)

### Module 03: Additional Layout Patterns
#### 3.1: Module Title With Links
![Module Title With Links](assets/slide_2_0.webp)

#### 3.2: Four-Quadrant Overview
![Four-Quadrant Overview](assets/slide_2_1.webp)

#### 3.3: Five-Item Grid With Wide Row
![Five-Item Grid With Wide Row](assets/slide_2_2.webp)

#### 3.4: Numbered Process Steps
![Numbered Process Steps](assets/slide_2_4.webp)

#### 3.5: Four-Column Comparison
![Four-Column Comparison](assets/slide_2_5.webp)

### Slide 3: Additional Patterns (Extras)
![Extras Slide](assets/slide_3.webp)

### Slide 4: Conclusion Slide
![Conclusion Slide](assets/slide_4.webp)

## License

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE](LICENSE) file for details.
