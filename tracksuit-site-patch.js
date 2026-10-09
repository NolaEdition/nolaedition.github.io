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
