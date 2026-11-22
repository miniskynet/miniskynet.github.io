# Portfolio redesign — staged files

This package is a safe first pass. It does **not** overwrite your existing `index.html`.

## Files
- `assets/portfolio.css` — shared design system and navigation styling.
- `technical-overrides.css` — optional visual overhaul for the current technical page; it restyles existing selectors rather than replacing your case-study content.
- `navigation.html` — shared navigation snippet to add to the existing technical page.
- `photography/index.html` — editorial gallery page wired to the Cloudflare Worker endpoint.
- `videography/index.html` — cinematic videography page scaffold with clearly marked project placeholders.

## Before publishing
1. Add `assets/portfolio.css` to the repository.
2. Add the navigation header from `navigation.html` immediately after `<body>` in the existing `index.html`.
3. Add this inside the existing `<head>` in `index.html`: `<link rel="stylesheet" href="/technical-overrides.css">`. The override file imports the shared design system automatically.
4. Add the `photography/` and `videography/` folders.
5. The photography page expects `https://desira-instagram-gallery.desirasenal.workers.dev/api/gallery` to return JSON shaped like `{ "items": [{ "url": "...", "caption": "..." }] }`.
6. Replace the videography placeholders with your actual video URLs, thumbnails, project titles and descriptions.

The gallery feed will show a helpful connection message until the Worker endpoint is deployed. No Instagram access token is included in these files.
