# miniskynet.github.io

Personal portfolio of Desira Wijesundara, technical writer. Live at <https://miniskynet.github.io>.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Technical portfolio, styled like an API reference |
| `photography/index.html` | Photo gallery, fed by a Cloudflare Worker that proxies Instagram |
| `site.css` | The one shared stylesheet: design tokens, light/dark themes, all components |
| `site.js` | Shared behaviour: theme toggle, section highlighting, scroll reveal, stat count-up |
| `og-image.png` | 1200x630 social preview image |

## Local preview

Open `index.html` directly in a browser. Everything works except the photography feed, which only answers requests from `https://miniskynet.github.io`.

## Notes

- Colours are set as CSS variables at the top of `site.css`. Every text/background pair meets WCAG AA contrast in both themes.
- The gallery endpoint returns `{ "items": [{ "id", "parentId", "caption", "mediaType", "mediaUrl", "permalink", "timestamp" }] }`. No Instagram token is stored in this repo.
