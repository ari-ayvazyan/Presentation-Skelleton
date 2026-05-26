# Project Instructions

## Skills

- **image-style-novel**: Automatically applies a consistent modern graphic novel style to all image generation tasks. It triggers when using image generation tools.

## Visual Verification Workflow

After Analysis but **Before** doing any visual change that will affect the UI, use the Playwright MCP server to capture and store a Screenshot of the before state. Put and keep before/after screenshots in the verification folder. The before/after screenshots should be suffixed with -before and -after.
Whenever you make visual changes to the UI (HTML, CSS, layout, etc.), you **MUST** visually verify your changes using the Playwright MCP server.
**Compare** the before and after picture and check if your change affected the layout of the application negatively. Consider UI/UX best practices like too small texts, spacing, too crowded screens etc.

1. **Serve the Application**: Ensure the local development server is running (or start it in the background) so the page is accessible via a local URL.
2. **Navigate and Capture**: Use the Playwright MCP server tools to navigate to the page and take a screenshot.
   - **Reveal.js Navigation**: To navigate directly to a specific Reveal.js slide, append the hash fragment `#/h/v` to the URL in `mcp_playwright_playwright_navigate` (e.g., `http://localhost:5173/#/1/2` where `h` is the horizontal index and `v` is the vertical index).
3. **Analyze and Compare**: Visually analyze the screenshot and compare it against the target design, screenshots, or user instructions. Pay strict attention to spacing, colors, typography, borders, and layout details.
   - **Troubleshooting Layouts**: If a layout appears visually unbalanced, broken, or stacked incorrectly, immediately cross-reference the HTML with the CSS stylesheet (e.g., `style.css`). Verify that all CSS classes used for structure and styling actually exist and are correctly defined.
4. **Iterate Until Target is Met**: If the visual output does not accurately match the target expectations, you must iterate on the codebase, capture a new screenshot, and re-verify. Fix the issues and continue this loop autonomously until the visual target is fully met and also acceptable from a UX/UI perspective before concluding the task.
5. ** Check if the dev server is already running on the system before starting a new dev server with `npm run dev`
6. When working through a list of tasks, start by verifying that your method works for the first element, once verified, you may batch the rest.
7. To create screenshots, use the mcp playwright tool
8. When inserting images, make sure to verify that they are displayed correctly in different screen resolutions AND in the pdf print.
9. ALL images that are used in the presentation have to be converted to webp.

## Styling Rules

- **Category Badge**: The `<div class="category-badge"></div>` element must ALWAYS be empty. Do not add text or content inside it.
- **Lists**: NEVER use manual bullet point symbols (e.g., "•", "-") inside `<li>` elements. Rely on CSS styling for list markers or use clean `<li>` elements for a minimalist look.
