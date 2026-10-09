/* NOLA EDITION: add the $225 New Orleans Archive Tracksuit to existing shop/home cards.
   Load AFTER script.js near the end of index.html and shop.html. */
(() => {
  'use strict';
  const destination = 'new-orleans-archive-tracksuit.html';
  const picture = 'assets/new-orleans-archive-tracksuit.webp';
  const displayName = 'New Orleans Archive Tracksuit';
  const oldName = 'Archive Tracksuit';
  const cards = document.querySelectorAll('.rail-card, .shop-product');
  cards.forEach(card => {
    const title = card.querySelector('h3');
    if (!title || title.textContent.trim() !== oldName) return;
    if (card.classList.contains('shop-product')) {
      const titleLink = document.createElement('a');
      titleLink.href = destination;
      titleLink.textContent = displayName;
      title.replaceChildren(titleLink);
    } else {
      title.textContent = displayName;
    }
    const image = card.querySelector('img');
    if (image) {
      image.src = picture;
      image.alt = 'NOLA EDITION New Orleans Archive Tracksuit in black and antique gold';
    }
    const media = card.querySelector('.rail-media, .shop-image');
    if (media && media.classList.contains('rail-media')) media.classList.add('contain');
    const wrap = card.querySelector('.shop-image > a');
    if (wrap) wrap.href = destination;
    const desc = card.querySelector('.shop-info > p:not(.stock-note)');
    if (desc) desc.textContent = 'Black pullover hoodie and tapered joggers with antique-gold New Orleans street-map graphics and signature NOLA EDITION detailing.';
    const label = card.querySelector('.kicker, .rail-card span');
    if (label) label.textContent = "Men's · Made to Order · $225";
    const btn = card.querySelector('.shop-info a.btn');
    if (btn) { btn.href = destination; btn.target = '_self'; btn.removeAttribute('rel'); btn.textContent = 'View Set · $225'; }
    const note = card.querySelector('.stock-note');
    if (note) note.textContent = 'Complete hoodie + jogger set · $225 · Made to order';
    const topLink = card.matches('a.rail-card') ? card : null;
    if (topLink) { topLink.href = destination; topLink.removeAttribute('target'); topLink.removeAttribute('rel'); }
  });
})();

/* Women's Archive Track Set | DTF-friendly design replacement.
   This code is appended after the existing men's tracksuit patch.
   It changes ONLY the women's set on the shop card, home feature and detail page.
   The Square checkout link remains controlled by script.js and is unchanged. */
(() => {
  'use strict';
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  const photoUrl = 'assets/womens-archive-dtf-set.jpg';
  const alt = "NOLA EDITION women's black cropped track jacket and matching leggings with antique-gold fleur-de-lis and New Orleans map DTF artwork";
  const designDescription = 'A fitted black cropped zip jacket with matching high-waisted leggings, decorated with antique-gold New Orleans street-map artwork, fleur-de-lis sleeve graphics and NOLA EDITION branding. Designed for small-run, made-to-order DTF production.';

  function changeImage(img) {
    if (!img) return;
    img.src = photoUrl;
    img.alt = alt;
    // No fallback to the old design: this must show the new DTF version only.
    img.onerror = function () { this.onerror = null; this.alt = 'NOLA EDITION DTF image awaiting upload'; };
  }

  // Featured women's set on homepage.
  if (filename === 'index.html') {
    const feature = document.querySelector('.nd-feature');
    if (feature) {
      changeImage(feature.querySelector('.nd-feature-image img'));
      const kicker = feature.querySelector('.nd-kicker');
      if (kicker) kicker.textContent = "Women's Archive · Made to Order";
      const paragraph = feature.querySelector('.nd-feature-copy > p');
      if (paragraph) paragraph.textContent = "A black cropped jacket and matching high-waisted leggings, finished with NOLA EDITION's antique-gold street-map and fleur-de-lis artwork.";
      const note = feature.querySelector('.nd-note');
      if (note) note.textContent = 'Made to order · Black and antique-gold DTF decoration · Checkout via Square.';
    }
  }

  if (filename !== 'shop.html') return;
  const productId = new URLSearchParams(window.location.search).get('product');

  // Women's set in the shop collection grid.
  if (!productId) {
    const card = document.querySelector('.nd-womens-listing');
    if (card) {
      changeImage(card.querySelector('.shop-image img'));
      const label = card.querySelector('.kicker');
      if (label) label.textContent = "Women's · Archive Collection · Made to Order";
      const desc = card.querySelector('.shop-info > p:not(.stock-note)');
      if (desc) desc.textContent = 'Black cropped zip jacket and matching high-waisted leggings with antique-gold New Orleans DTF artwork and fleur-de-lis accents.';
      const note = card.querySelector('.stock-note');
      if (note) note.textContent = 'DTF-designed set · Secure checkout through Square';
    }
    return;
  }

  // Existing single product page, preserving Square checkout link and its size options.
  if (productId === 'womens-track-set') {
    changeImage(document.querySelector('#nd-main-photo'));
    // Remove ALL old gallery views; they depict an unmanufacturable earlier version.
    const oldGallery = document.querySelector('.nd-product-detail .nd-photos');
    if (oldGallery) oldGallery.remove();
    const description = document.querySelector('.nd-product-desc');
    if (description) description.textContent = designDescription;
    const kicker = document.querySelector('.nd-product-detail .nd-kicker');
    if (kicker) kicker.textContent = "Women's · Archive Collection · Made to Order";
    const note = document.querySelector('.nd-product-detail .nd-legal');
    if (note) note.textContent = 'Product image is a design visualization of the proposed DTF-decorated set; actual appearance is subject to sample approval. Review sizing, final price and delivery details on Square.';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "NOLA EDITION Women's Archive Track Set: black cropped zip jacket and leggings with antique-gold New Orleans DTF designs. Made to order.";
  }
})();
