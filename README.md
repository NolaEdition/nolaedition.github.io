# NOLA EDITION Website

Official GitHub Pages site for https://nolaedition.com.

## Current collection structure

- **Archive 002 (featured)**: `archive-002.html`. Six-garment prelaunch editorial page. Product photos, sample signoff, individual Square product URLs, and launch date have not yet been supplied, so no product purchases or preorders are advertised here.
- **Archive 001 (available now):** `archive-001.html`. Six currently listed products are all Archive 001: Women\'s Signature Varsity, Archive Polo, Women\'s Archive Track Set, New Orleans Archive Sweatsuit, Girls\' Heritage Ensemble, and Boys\' Heritage Set. The collection page includes existing website imagery and six product-specific Square links. Florida P remains a separate custom project.\n- **Custom NOLA EDITION Designs:** `custom-designs.html`. Standalone showcase for the Florida P neighborhood reunion custom project with its four distinct product images and Square checkout URLs.
- **NOLA EDITION CUSTOM services:** `custom.html`. Custom print/order quote service, now featuring a link to the project portfolio.
- **Current shop**: `shop.html` routes into the main website. Currently displays the six Archive 001 products with image-backed Square checkout links, labeled as Archive 001.
- **Archive index**: `archive.html` routes into the main website, placing Archive 002 ahead of Archive 001.

## Website implementation

- `index.html` includes the primary homepage, style rules, and an embedded route/content map for dynamic page transitions. **Homepage content occurs twice:** as initial static markup and again as `pages["index.html"].content` in the embedded script. Update both or navigation may revert a change.
- `archive-launch.css` is the shared responsive stylesheet for the dedicated numbered archive and custom-design landing pages.
- `archive-001.html`, `archive-002.html`, and `custom-designs.html` are standalone pages. Archive 001 is now indexable because the owner confirmed the six current products are its authentic collection. Main-site links to these pages leave the embedded SPA router and load the standalone page.
- `sitemap.xml` indexes the homepage, Archive 002, Archive 001, and Custom Designs. Archive 001 has been added back to the sitemap.
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
