# NOLA EDITION Website

Official GitHub Pages site for https://nolaedition.com.

## Current collection structure

- **Archive 002 (featured)**: `archive-002.html`. Six-garment prelaunch editorial page. Product photos, sample signoff, individual Square product URLs, and launch date have not yet been supplied, so no product purchases or preorders are advertised here.
- **Archive 001 (numbered collection):** `archive-001.html`. Separate placeholder for the genuine original Archive 001 release. No unverified product imagery, links, or Florida P references. Not indexed until proper content is available.
- **Custom NOLA EDITION Designs:** `custom-designs.html`. Standalone showcase for the Florida P neighborhood reunion custom project with its four distinct product images and Square checkout URLs.
- **NOLA EDITION CUSTOM services:** `custom.html`. Custom print/order quote service, now featuring a link to the project portfolio.
- **Current shop**: `shop.html` routes into the main website. Currently shows six other confirmed image-backed and individually Square-linked pieces.
- **Archive index**: `archive.html` routes into the main website, placing Archive 002 ahead of Archive 001.

## Website implementation

- `index.html` includes the primary homepage, style rules, and an embedded route/content map for dynamic page transitions. **Homepage content occurs twice:** as initial static markup and again as `pages["index.html"].content` in the embedded script. Update both or navigation may revert a change.
- `archive-launch.css` is the shared responsive stylesheet for the dedicated numbered archive and custom-design landing pages.
- `archive-001.html`, `archive-002.html`, and `custom-designs.html` are standalone pages. Archive 001 is noindex until its authentic collection is ready. Main-site links to these pages leave the embedded SPA router and load the standalone page.
- `sitemap.xml` indexes the homepage, Archive 002 and Custom Designs. The unready Archive 001 page is noindex.
- Do not treat older `nola-preview.html` or `index-backup-20261014.html` as the active website.

## Merchandising requirements

A shoppable product card requires **both** real/approved product imagery and a direct, product-specific Square purchase link. Do not substitute an unrelated Square store URL for a product-specific checkout, invent pricing or availability, or publish unapproved mockups as finished garment photography. Archive 002's six garments remain an **editorial preview**, separate from the buyable shop grid, until these requirements are met.

## Archive 002 lineup

1. Men's all-over-print T-shirt
2. Men's all-over-print joggers
3. Women's cropped windbreaker
4. Women's long-sleeve crop top
5. Unisex recycled hoodie
6. Women's yoga leggings

Visual direction: deep black, flat muted antique gold, city-grid/river graphics, precise NOLA EDITION lettering and consistent archive language. No metallic rendering.

## Deploy

GitHub Pages deploys from the connected `main` branch. Check the latest **pages build and deployment** GitHub Actions run after publishing changes. Verify the Archive 002 and custom-design URLs and Square checkout destinations before advertising a public launch.

## Florida P Custom Design Square links

- Design 01 Black: https://square.link/u/RCs5xeCo
- Design 01 White: https://square.link/u/8X0ESb5H
- Design 02 Black: https://square.link/u/T8C6QdXZ
- Design 02 White: https://square.link/u/F3k9kdfu
