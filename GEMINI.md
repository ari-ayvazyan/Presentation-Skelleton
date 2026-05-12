# Project Instructions

## Skills
- **image-style-novel**: Automatically applies a consistent modern graphic novel style to all image generation tasks. It triggers when using `nanobanana` image tools.

## Visual Verification Workflow
Whenever you make visual changes to the UI (HTML, CSS, layout, etc.), you **MUST** visually verify your changes using the Playwright MCP server.

1. **Serve the Application**: Ensure the local development server is running (or start it in the background) so the page is accessible via a local URL.
2. **Navigate and Capture**: Use the Playwright MCP server tools to navigate to the page and take a screenshot.
3. **Analyze and Compare**: Visually analyze the screenshot and compare it against the target design, screenshots, or user instructions. Pay strict attention to spacing, colors, typography, borders, and layout details.
4. **Iterate Until Target is Met**: If the visual output does not accurately match the target expectations, you must iterate on the codebase, capture a new screenshot, and re-verify. Continue this iteration loop autonomously until the visual target is fully met before concluding the task.
