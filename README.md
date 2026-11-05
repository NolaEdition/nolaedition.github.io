# NOLA EDITION Website

Official GitHub Pages site for https://nolaedition.com.

## Current collection structure

- **Archive 002 (featured and shoppable)**: `archive-002.html`. Seven product-specific Square checkout links are displayed on the Archive 002 page, homepage gallery, and primary Shop page. The No. 27 jersey remains a preview without a purchase link. Artwork boards are creative presentations, and the crop top uses its own dedicated garment design board. The two-model campaign photo is reserved for the homepage, Shop and collection headings.
- **Archive 001 (available now):** `archive-001.html`. Six currently listed products are all Archive 001: Women\'s Signature Varsity, Archive Polo, Women\'s Archive Track Set, New Orleans Archive Sweatsuit, Girls\' Heritage Ensemble, and Boys\' Heritage Set. The collection page includes existing website imagery and six product-specific Square links. Florida P remains a separate custom project.\n- **Custom NOLA EDITION Designs:** `custom-designs.html`. Standalone showcase for the Florida P neighborhood reunion custom project with its four distinct product images and Square checkout URLs.
- **NOLA EDITION CUSTOM services:** `custom.html`. Custom print/order quote service, now featuring a link to the project portfolio.
- **Current shop**: `shop.html` routes into the main website. Archive 002 appears first with seven individually linked products, followed by the six original Archive 001 listings in their own section.
- **Archive index**: `archive.html` routes into the main website, placing Archive 002 ahead of Archive 001.

## Website implementation

- `index.html` includes the primary homepage, style rules, and an embedded route/content map for dynamic page transitions. **Homepage content occurs twice:** as initial static markup and again as `pages["index.html"].content` in the embedded script. Update both or navigation may revert a change.
- `archive-launch.css` is the shared responsive stylesheet for the dedicated numbered archive and custom-design landing pages.
- `archive-001.html`, `archive-002.html`, and `custom-designs.html` are standalone pages. Archive 001 is now indexable because the owner confirmed the six current products are its authentic collection. Main-site links to these pages leave the embedded SPA router and load the standalone page.
- `sitemap.xml` indexes the homepage, Archive 002, Archive 001, and Custom Designs. Archive 001 has been added back to the sitemap.
- Do not treat older `nola-preview.html` or `index-backup-20261014.html` as the active website.

## Merchandising requirements

A shoppable product card requires **both** an appropriate image and a direct, product-specific Square purchase link. Archive 002 uses five individual design-board images shared across six presentations and one campaign image for the crop top. The men's and women's T-shirts share a combined design board but have distinct checkouts. Do not present design boards as finished production photographs, invent prices or stock availability, or assign a generic checkout to the jersey.

## Archive 002 checkout links

1. Hoodie: https://square.link/u/BP1uq24s
2. Crop top: https://square.link/u/eJJF9HhO
3. Leggings: https://square.link/u/JMF0GvDw
4. Joggers: https://square.link/u/0ZosJg8W
5. Men's T-shirt: https://square.link/u/pw66vscv
6. Women's T-shirt: https://square.link/u/4YoIxVJW
7. Cropped windbreaker: https://square.link/u/QCyPqOFn
8. Jersey No. 27: design preview, no checkout link supplied

Visual direction: deep black, flat muted antique gold, city-grid/river graphics, precise NOLA EDITION lettering and consistent archive language. No metallic rendering.

## Deploy

GitHub Pages deploys from the connected `main` branch. Check the latest **pages build and deployment** GitHub Actions run after publishing changes. Verify the Archive 002 and custom-design URLs and Square checkout destinations before advertising a public launch.

## Florida P Custom Design Square links

- Design 01 Black: https://square.link/u/RCs5xeCo
- Design 01 White: https://square.link/u/8X0ESb5H
- Design 02 Black: https://square.link/u/T8C6QdXZ
- Design 02 White: https://square.link/u/F3k9kdfu
