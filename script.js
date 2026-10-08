/* NOLA EDITION | premium storefront with Square-hosted track-set checkout.
 * Replace only script.js. Keeps existing homepage, CSS and Florida P links.
 * Before publishing, configure the checkout link below with the real Square item URL.
 */
'use strict';
// REQUIRED before publishing: create Women's Archive Track Set in Square with
// Jacket size / Leggings size variations, then paste its real item purchase URL.
// Never use the general Square storefront URL in place of a product checkout.
const TRACK_SET_SQUARE_ITEM_URL = 'PASTE_REAL_SQUARE_TRACK_SET_PRODUCT_URL_HERE';
const TRACK_SET_RETAIL_PRICE = 325; // Set to the EXACT price in Square, or change BOTH.
// Display a realistic, supplier-confirmed dispatch window on the Square item.
// This link intentionally keeps payments and size selection entirely in Square.
const trackSetCheckoutReady = (() => {
  try {
    const url = new URL(TRACK_SET_SQUARE_ITEM_URL);
    return url.protocol === 'https:' && (
      url.hostname === 'square.link' || url.hostname.endsWith('.square.site') ||
      url.hostname === 'squareup.com' || url.hostname.endsWith('.squareup.com')
    );
  } catch { return false; }
})();
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 40);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

const countdown = document.querySelector('[data-countdown]');
if (countdown) {
  const target = new Date('2026-11-17T00:00:00-06:00').getTime();
  const labels = ['days','hours','minutes','seconds'];
  const render = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      countdown.innerHTML = '<div class="count-unit" style="grid-column:1/-1"><strong>Archive 001</strong><span>Reunion day has arrived</span></div>';
      return;
    }
    const values = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000)
    ];
    countdown.innerHTML = values.map((value, i) => `<div class="count-unit"><strong>${String(value).padStart(2,'0')}</strong><span>${labels[i]}</span></div>`).join('');
  };
  render();
  setInterval(render, 1000);
}

// Keep Florida P shopping links working. All other catalogue pieces are previews
// until their own actual SKU, stock, pricing and Square checkout are approved.
const catalog = {
  'archive-tank': { name: 'Archive Tank', type: "Women's · Archive Wear", image: 'assets/archive-tank.webp', description: 'Fitted racerback with New Orleans map, coordinates and archive branding.' },
  'archive-maxi': { name: 'Archive Maxi', type: "Women's · Full Length", image: 'assets/archive-maxi.webp', description: 'Body-skimming maxi dress with a restrained New Orleans map treatment.' },
  'archive-hoodie': { name: 'Archive Hoodie', type: 'Unisex · Heavyweight', image: 'assets/archive-hoodie.webp', description: 'A heavyweight black hoodie carrying the archive language of New Orleans.' },
  'embroidered-polo': { name: 'Embroidered Polo', type: "Men's · Piqué", image: 'assets/archive-polo.webp', description: 'Classic polo with restrained embroidery and NOLA EDITION identity.' },
  'archive-cap': { name: 'Archive Cap', type: 'Embroidered · Washed Black', image: 'assets/archive-cap.webp', description: 'Washed black cap with antique-gold New Orleans heritage artwork.' },
  'new-orleans-jersey': { name: 'New Orleans Jersey', type: 'Limited Edition · Mesh', image: 'assets/archive-jersey.webp', description: 'Football-inspired mesh jersey featuring architectural New Orleans artwork.' },
  'archive-one-piece': { name: 'Archive One-Piece', type: "Women's · Swim", image: 'assets/swim-onepiece.webp', description: 'A one-piece swimsuit inspired by the archive of New Orleans.' },
  'archive-bikini': { name: 'Archive Bikini', type: "Women's · Swim", image: 'assets/swim-bikini.webp', description: 'Two-piece swimwear with a New Orleans map-based design.' },
  'swim-shorts': { name: 'Swim Shorts', type: "Men's · Swim", image: 'assets/swim-shorts.webp', description: 'Black swim shorts with the archive map treatment.' },
  'sweatshorts': { name: 'Sweatshorts', type: 'Premium Fleece', image: 'assets/sweatshorts.webp', description: 'Fleece shorts with restrained NOLA EDITION branding.' },
  'archive-sweatpants': { name: 'Archive Sweatpants', type: 'Slim Fit · Fleece', image: 'assets/sweatpants.webp', description: 'Slim-fit sweatpants with map placement and archival branding.' },
  'archive-tracksuit': { name: 'Archive Tracksuit', type: 'Coordinated Set · Concept Preview', image: 'assets/tracksuit.webp', description: 'Coordinated trackwear carrying NOLA EDITION’s neighborhood archive design language.' },
  'womens-track-set': {
    name: "Women's Archive Track Set", type: "Women's · Coordinated Set", image: 'assets/womens-track-set-look.webp',
    gallery: ['assets/womens-track-set-look.webp','assets/womens-track-set-jacket.webp','assets/womens-track-set-leggings.webp'],
    description: 'A fitted black zip jacket and matching high-waisted leggings with antique-gold New Orleans street-map artwork, refined fleur-de-lis details and tailored athletic styling.',
    special: true
  }
};
const nameToId = Object.fromEntries(Object.entries(catalog).map(([id, data]) => [data.name.toLowerCase(), id]));
const path = window.location.pathname.split('/').pop() || 'index.html';
const detailUrl = id => `shop.html?product=${encodeURIComponent(id)}`;

const css = `
/* NOLA EDITION storefront repair: override mobile 'hidden buttons' rule */
@media(max-width:640px){
 .brand-shop .shop-product .btn{display:inline-flex!important;width:100%;min-height:43px!important;font-size:9px!important;margin-top:14px!important}
 .brand-shop .shop-product .shop-info::after{display:none!important}
}
.shop-product .shop-image>a{display:block;width:100%;height:100%}
.shop-product .shop-image>a>img{width:100%;height:100%;object-fit:inherit}
.shop-product .shop-info h3 a:hover{text-decoration:underline;text-decoration-color:#b59658;text-underline-offset:5px}
.shop-product .stock-note{font-size:10px;letter-spacing:.04em;line-height:1.5;color:#847154;margin:12px 0 0}
.brand-shop .dark .shop-product .stock-note{color:#ccb27f}
.nd-feature{background:#0d0d0c;color:#f4efe5;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);min-height:430px;border-top:1px solid rgba(181,150,88,.35)}
.nd-feature-image{min-height:430px;overflow:hidden;background:#161514}
.nd-feature-image img{width:100%;height:100%;object-fit:cover;object-position:50% 42%}
.nd-feature-copy{align-self:center;padding:clamp(36px,6vw,90px)}
.nd-kicker{font-size:10px;text-transform:uppercase;letter-spacing:.20em;color:#c9ab76}
.nd-feature h2,.nd-product-title{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(43px,6vw,82px);font-weight:400;line-height:.94;margin:14px 0 23px}
.nd-feature p{color:#c3b9ac;line-height:1.8;max-width:490px;font-size:14px}
.nd-note{display:block;font-size:11px;line-height:1.7;color:#b3a693;margin-top:18px}
.nd-shop-new{display:flex;flex-wrap:wrap;gap:14px;align-items:center;padding:32px 0 4px}
.nd-shop-new .btn{margin:0}
.nd-product-detail{background:#f7f2e9;color:#151411;padding:50px 5vw 110px}
.nd-product-inner{max-width:1250px;margin:auto}
.nd-breadcrumb{font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:#75664b;margin-bottom:28px}
.nd-breadcrumb a{text-decoration:underline;text-underline-offset:4px}
.nd-product-grid{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(0,.94fr);gap:clamp(32px,5vw,90px)}
.nd-main-image{aspect-ratio:4/5;max-height:760px;background:#ede6db;overflow:hidden}
.nd-main-image img{width:100%;height:100%;object-fit:contain}
.nd-photos{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
.nd-photo{padding:0;border:1px solid #cfc6b7;background:#eee7dc;cursor:pointer;aspect-ratio:4/5;overflow:hidden}
.nd-photo[aria-pressed="true"]{border:2px solid #8b6a35}
.nd-photo img{width:100%;height:100%;object-fit:cover}
.nd-product-title{font-size:clamp(48px,5vw,72px);margin:15px 0 20px}
.nd-product-desc{color:#574f46;line-height:1.9;margin-bottom:24px}
.nd-status{font-size:11px;line-height:1.6;text-transform:uppercase;letter-spacing:.13em;color:#835d29;border-block:1px solid #d8ccb9;padding:14px 0;margin:20px 0}
.nd-availability{padding:20px 22px;background:#eee5d8;border:1px solid #dfd1b9;color:#4b453d;margin:22px 0}
.nd-availability h3{font-family:'Cormorant Garamond',Georgia,serif;font-size:30px;font-weight:500;margin:0 0 6px}
.nd-availability p{font-size:12px;line-height:1.7;margin:0}
.nd-selectors{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:24px 0}
.nd-selectors label{display:flex;flex-direction:column;gap:8px;font-size:11px;text-transform:uppercase;letter-spacing:.13em}
.nd-selectors select{min-height:48px;border:1px solid #a9a08f;background:white;color:#151411;padding:0 12px;border-radius:0}
.nd-primary{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;background:#161411;color:#f5efe5!important;border:1px solid #161411;cursor:pointer;text-transform:uppercase;font:500 11px Montserrat,Arial,sans-serif;letter-spacing:.12em}
.nd-primary:hover{background:#51412b;border-color:#51412b}
.nd-sale-price{font:500 clamp(27px,3vw,37px) 'Cormorant Garamond',Georgia,serif; color:#151411;margin:0 0 12px}
.nd-purchase-note{font-size:12px;line-height:1.8;color:#5f5649;margin:14px 0 20px}
.nd-purchase-btn{display:flex;text-decoration:none;width:100%;font-weight:600}
.nd-purchase-btn:focus-visible{outline:3px solid #b59658;outline-offset:3px}
.nd-inquiry-result{margin-top:12px;font-size:12px;color:#4a422e;white-space:pre-wrap;line-height:1.7}
.nd-inquiry-result textarea{width:100%;min-height:120px;background:white;border:1px solid #c4b8a6;padding:12px;font:12px/1.7 Arial,sans-serif}
.nd-legal{font-size:11px;color:#716a60;line-height:1.8;margin-top:22px}
.nd-footer-note{border-top:1px solid #b99c68;padding-top:18px;margin-top:20px;font-size:11px;line-height:1.7;color:#bbb2a6}
@media(max-width:800px){.nd-product-grid,.nd-feature{grid-template-columns:1fr}.nd-feature-image{min-height:0;aspect-ratio:4/3}.nd-feature-copy{padding:40px 6vw 50px}.nd-product-detail{padding:32px 5vw 70px}}
@media(max-width:500px){.nd-selectors{grid-template-columns:1fr}.nd-photos{gap:5px}.nd-product-title{font-size:48px}.nd-feature h2{font-size:52px}}
`;
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// Repair stale anchored links: there is no #reunion section in the current HTML.
document.querySelectorAll('a[href="index.html#reunion"]').forEach(a => { a.href = 'index.html#archive-001'; });

// Upgrade catalogue cards to genuine item-specific product previews rather than
// taking customers to an unrelated Square landing page. Florida P links stay intact.
if (path === 'shop.html' && !new URLSearchParams(location.search).has('product')) {
  document.querySelectorAll('.shop-product').forEach(card => {
    const title = card.querySelector('.shop-info h3');
    if (!title) return;
    const id = nameToId[title.textContent.trim().toLowerCase()];
    if (!id) return;
    const link = detailUrl(id);
    const imageBox = card.querySelector('.shop-image');
    if (imageBox && !imageBox.querySelector('a')) {
      const img = imageBox.querySelector('img');
      if (img) {
        const imageLink = document.createElement('a');
        imageLink.href = link;
        imageLink.setAttribute('aria-label', `View ${catalog[id].name} details`);
        img.replaceWith(imageLink);
        imageLink.appendChild(img);
      }
    }
    const titleLink = document.createElement('a');
    titleLink.href = link;
    titleLink.textContent = title.textContent;
    title.replaceChildren(titleLink);
    const btn = card.querySelector('.shop-info a.btn');
    if (btn) { btn.href = link; btn.target = '_self'; btn.removeAttribute('rel'); btn.textContent = 'View details'; }
    const note = document.createElement('p');
    note.className = 'stock-note';
    note.textContent = 'Explore details and availability';
    card.querySelector('.shop-info')?.appendChild(note);
  });

  const grid = document.querySelector('.shop-category.dark .shop-product-grid');
  if (grid) {
    const newCard = document.createElement('article');
    newCard.className = 'shop-product contain nd-womens-listing';
    newCard.innerHTML = `<div class="shop-image"><a href="${detailUrl('womens-track-set')}" aria-label="View women's track set details"><img src="assets/womens-track-set-look.webp" loading="lazy" alt="Women's NOLA EDITION jacket and matching leggings, concept reference"></a></div>
      <div class="shop-info"><span class="kicker">Women's · Archive Collection</span><h3><a href="${detailUrl('womens-track-set')}">Women's Archive Track Set</a></h3>
      <p>Fitted zip jacket + matching high-waisted leggings in the signature map design.</p>
      <a class="btn" href="${detailUrl('womens-track-set')}">View details</a>
      <p class="stock-note">Women's made-to-order track set</p></div>`;
    grid.prepend(newCard);
  }
}

// Home page: keep all original cards and Florida P feature, but give each
// catalogue preview a dedicated destination and surface the requested track set.
if (path === 'index.html') {
  document.querySelectorAll('.featured-card,.rail-card').forEach(card => {
    const title = card.querySelector('h3')?.textContent.trim().toLowerCase();
    const id = nameToId[title];
    if (!id) return;
    card.href = detailUrl(id);
    card.target = '_self';
    card.removeAttribute('rel');
  });
  const featured = document.querySelector('.editorial-featured');
  if (featured) {
    const section = document.createElement('section');
    section.className = 'nd-feature';
    section.setAttribute('aria-labelledby', 'nd-track-title');
    section.innerHTML = `<div class="nd-feature-image"><img src="assets/womens-track-set-look.webp" loading="lazy" alt="NOLA EDITION women's track set concept showing a fitted jacket and leggings"></div>
      <div class="nd-feature-copy"><div class="nd-kicker">Women's Archive · Made to Order</div>
      <h2 id="nd-track-title">A set with<br>the city in it.</h2>
      <p>The women's Archive Track Set brings New Orleans' streets to a black-and-antique-gold zip jacket and matching leggings.</p>
      <div class="nd-shop-new"><a class="btn" href="${detailUrl('womens-track-set')}">Shop the Set</a></div>
      <small class="nd-note">Made-to-order. Select your sizing securely when placing an order.</small></div>`;
    featured.insertAdjacentElement('afterend', section);
  }
}

// Individual product detail route; no unconfirmed items can be bought here.
if (path === 'shop.html') {
  const productId = new URLSearchParams(location.search).get('product');
  if (productId) {
    const main = document.querySelector('main');
    const product = catalog[productId];
    if (main && product) {
      const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
      const gallery = product.gallery || [product.image];
      const isTrackSet = productId === 'womens-track-set';
      document.title = `${product.name} | NOLA EDITION`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = `${product.name}. ${product.description}${isTrackSet ? ' Made to order.' : ''}`;
      const purchaseMarkup = isTrackSet ? `
        <p class="nd-sale-price">$${TRACK_SET_RETAIL_PRICE.toFixed(2)}</p>
        <p class="nd-purchase-note">Made to order. Choose your jacket size and leggings size at secure checkout. The expected dispatch timeframe is stated on the Square product before payment.</p>
        ${trackSetCheckoutReady
          ? `<a class="nd-primary nd-purchase-btn" href="${escapeHtml(TRACK_SET_SQUARE_ITEM_URL)}" target="_blank" rel="noopener noreferrer">Buy Now · Secure Checkout ↗</a>`
          : `<p class="nd-purchase-note">Ordering will open when the secure checkout link is connected.</p>`}
        <p class="nd-legal">Please review the sizing and made-to-order shipping details in checkout before purchasing. Garment photographs are design renderings.</p>
      ` : `<div class="nd-status">Explore the design</div>
          <p class="nd-purchase-note">Browse available pieces and purchase links in our <a href="https://nolaedition.square.site" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Square storefront</a>.</p>`;
      main.innerHTML = `<section class="nd-product-detail" aria-labelledby="nd-product-title"><div class="nd-product-inner">
        <div class="nd-breadcrumb"><a href="shop.html">Shop</a> / ${escapeHtml(product.name)}</div>
        <div class="nd-product-grid"><div>
          <div class="nd-main-image"><img id="nd-main-photo" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} product design reference"></div>
          <div class="nd-photos" aria-label="Product imagery">${gallery.map((src,i)=>`<button type="button" class="nd-photo" data-src="${escapeHtml(src)}" aria-pressed="${i===0}" aria-label="Show product image ${i+1}"><img src="${escapeHtml(src)}" alt="${escapeHtml(product.name)} view ${i+1}"></button>`).join('')}</div>
        </div><div>
          <div class="nd-kicker">${escapeHtml(product.type)}</div><h1 id="nd-product-title" class="nd-product-title">${escapeHtml(product.name)}</h1>
          <p class="nd-product-desc">${escapeHtml(product.description)}</p>
          ${purchaseMarkup}
        </div></div></div></section>`;
      main.querySelectorAll('.nd-photo').forEach(button => button.addEventListener('click', () => {
        const mainPhoto = document.getElementById('nd-main-photo');
        mainPhoto.src = button.dataset.src;
        main.querySelectorAll('.nd-photo').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      }));
    } else if (main) {
      document.title = 'Product Not Found | NOLA EDITION';
      main.innerHTML = '<section class="nd-product-detail"><div class="nd-product-inner"><h1 class="nd-product-title">Piece not found.</h1><p><a href="shop.html" style="text-decoration:underline">Return to the shop</a></p></div></section>';
    }
  }
}
