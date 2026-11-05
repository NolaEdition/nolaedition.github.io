# NOLA EDITION Website

Official GitHub Pages site for https://nolaedition.com.

## Current collection structure

- **Archive 002 (featured)**: `archive-002.html`. Six-garment prelaunch editorial page. Product photos, sample signoff, individual Square product URLs, and launch date have not yet been supplied, so no product purchases or preorders are advertised here.
- **Archive 001 (Florida P)**: `archive-001.html`. Dedicated Reunion edition story and four image-backed Square-linked variants. Archive 001 is intentionally separated from the general shop.
- **Current shop**: `shop.html` routes into the main website. Currently shows six other confirmed image-backed and individually Square-linked pieces.
- **Archive index**: `archive.html` routes into the main website, placing Archive 002 ahead of Archive 001.

## Website implementation

- `index.html` includes the primary homepage, style rules, and an embedded route/content map for dynamic page transitions. **Homepage content occurs twice:** as initial static markup and again as `pages["index.html"].content` in the embedded script. Update both or navigation may revert a change.
- `archive-launch.css` is the shared responsive stylesheet for the two dedicated archive landing pages.
- `archive-001.html` and `archive-002.html` are standalone, indexable pages. Main-site links to these pages leave the embedded SPA router and load the standalone page.
- `sitemap.xml` indexes the homepage and both archive landing pages.
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

GitHub Pages deploys from the connected `main` branch. Check the latest **pages build and deployment** GitHub Actions run after publishing changes. Verify both archive URLs and Square checkout destinations before advertising a public launch.

## Existing Archive 001 Square links

- Design 01 Black: https://square.link/u/RCs5xeCo
- Design 01 White: https://square.link/u/8X0ESb5H
- Design 02 Black: https://square.link/u/T8C6QdXZ
- Design 02 White: https://square.link/u/F3k9kdfu
