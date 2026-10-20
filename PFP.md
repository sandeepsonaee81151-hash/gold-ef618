# PFP — Project Functional Plan
## Sanjay Jewellery — Home Page

| Field | Value |
|-------|-------|
| **Project** | Sanjay Jewellery E-Commerce Website |
| **Document** | PFP.md (Project Functional Plan) |
| **Module** | Home Page (`index.html`) |
| **Live URL** | https://sanjay123-5b4c8.web.app/ |
| **Hosting** | Firebase Hosting (`sanjay123-5b4c8`) |
| **Tech Stack** | HTML5, CSS3, Vanilla JS, Google Fonts (Playfair Display + Inter) |
| **Source File** | `index.html` |
| **Shared Modules** | `js/app.js` (header/footer/lang), `js/products.js` (catalog), `js/cart.js` (cart/wishlist) |
| **Style Sheet** | `css/style.css` |
| **Version** | v1.0 |
| **Date** | 20 Oct 2026 |
| **Owner** | Sanjay Jewellery |

---

## 1. Purpose

Home page is the **primary landing page** of the jewellery store. Its goal is to:
- Establish brand identity (Sanjay Jewellery, BIS-hallmarked premium store)
- Show live gold & silver rates (trust + urgency for buyers)
- Drive traffic to Shop / About pages
- Showcase category entry points and featured products
- Build trust via certifications, testimonials and a rate calculator
- Support **bilingual** operation (Hindi / English)

---

## 2. Functional Requirements

### FR-01 — Global Header (injected by `js/app.js`)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01.1 | Sticky top bar with free-shipping message; clicking it routes to **Orders** page | Must |
| FR-01.2 | Top bar shows **live gold & silver rate** (per gram, INR) | Must |
| FR-01.3 | Language toggle button (EN / हिं) in top bar | Must |
| FR-01.4 | Brand logo (संजय ज्वैलरी) links to Home | Must |
| FR-01.5 | Mobile number `+91 81151 50061` visible next to logo, on **single line (no wrap)** | Must |
| FR-01.6 | "New Collection 2026" badge next to logo, links to Shop | Must |
| FR-01.7 | Nav links: Home, Shop, Orders, About, Contact | Must |
| FR-01.8 | Social icons (WhatsApp, Instagram, Facebook) as real SVG brand icons, header right | Must |
| FR-01.9 | Header is sticky, frosted-glass (blur) background | Should |
| FR-01.10 | Hamburger menu on mobile (<900px) | Must |

### FR-02 — Hero Section

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-02.1 | Full-bleed **background photo** (woman wearing necklace) with dark overlay + gold radial glow | Must |
| FR-02.2 | Badge "New Collection 2026" | Must |
| FR-02.3 | H1 headline — "Timeless Elegance in Every Piece" (Devanagari in Hindi mode) | Must |
| FR-02.4 | Supporting paragraph (BIS hallmarked, certified diamonds, pure gold & silver) | Must |
| FR-02.5 | CTA buttons: "Shop Collection" (gold, → shop.html) and "Our Story" (outline, → about.html) | Must |
| FR-02.6 | **Live gold & silver rate** line inside hero | Must |
| FR-02.7 | Hero image/box card (the old square diamond card) **must NOT** be present | Must |
| FR-02.8 | Text must be white/gold with shadow for contrast over photo | Must |

### FR-03 — Shop by Category

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-03.1 | 6 category cards — Rings, Necklaces, Earrings, Bracelets, Pendants, View All | Must |
| FR-03.2 | Each card routes to `shop.html?cat=<category>` | Must |
| FR-03.3 | Each card has icon, title and one-line description | Must |
| FR-03.4 | Grid = 3 columns desktop / 2 tablet / 1 mobile | Should |

### FR-04 — Featured Pieces

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-04.1 | Renders products where `featured === true` from `js/products.js` | Must |
| FR-04.2 | Card shows image, category·metal·purity, name, weight, making %, price (incl. GST) | Must |
| FR-04.3 | Actions: "View" (→ product.html?id=) and "Add to Cart" | Must |
| FR-04.4 | Wishlist (heart) toggle on card; state persists in localStorage | Must |
| FR-04.5 | Clicking image or name opens **Quick View modal** with description, price, specs | Must |
| FR-04.6 | Grid = 4 columns desktop / 2 tablet / 1 mobile | Should |

### FR-05 — Why Sanjay Jewellery (Trust Bar)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-05.1 | 4 trust points: BIS Hallmarked, Certified Diamonds, Lifetime Exchange, Free Shipping | Must |
| FR-05.2 | Each with icon + title + supporting line | Must |

### FR-06 — Testimonials

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-06.1 | 3 customer review cards with 5-star rating, quote and customer name + city | Must |
| FR-06.2 | Grid = 3 columns desktop, stacks on mobile | Should |

### FR-07 — Gold Rate Calculator

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-07.1 | Input: weight in grams (number, min 0.1) | Must |
| FR-07.2 | Input: purity select — 24K / 22K / 18K | Must |
| FR-07.3 | Input: today's gold rate ₹/gram | Must |
| FR-07.4 | Output: Estimated Price = weight × rate × (purity ÷ 24), formatted ₹ with Indian grouping | Must |
| FR-07.5 | Recalculates live on `input` event (weight, purity, rate) | Must |
| FR-07.6 | Disclaimer that making charges & GST are extra | Should |

### FR-08 — Footer (injected by `js/app.js`)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-08.1 | 4 columns — brand+description, Shop links, Help links, Contact details | Must |
| FR-08.2 | Help column links: FAQ, Shipping, Returns, Size Guide, Privacy Policy, Terms, Contact | Must |
| FR-08.3 | Contact: phone, email, city, WhatsApp | Must |
| FR-08.4 | Bottom bar: copyright + Privacy / Terms / Size Guide links | Must |

### FR-09 — Bilingual Engine (EN ⇄ हिं)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-09.1 | Every visible text on home page has `data-hi` / `data-en` attributes | Must |
| FR-09.2 | Toggle switches **all** text, page `<title>`, `<html lang>`, product names/descriptions | Must |
| FR-09.3 | Choice persists in `localStorage` (`jk_lang`) across pages & reloads | Must |
| FR-09.4 | Default language = Hindi | Must |
| FR-09.5 | Quick View modal and Gold Calculator re-render on language change | Must |

### FR-10 — Live Rates Engine

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-10.1 | Fetches USD spot price for gold (XAU) and silver (XAG) | Must |
| FR-10.2 | Fetches USD→INR exchange rate | Must |
| FR-10.3 | Converts USD/oz → INR/gram (÷ 31.1035) | Must |
| FR-10.4 | Multi-API fallback chain (gold-api.com → metals.live → open.er-api → exchangerate-api) | Must |
| FR-10.5 | 10-second timeout via `AbortController` | Must |
| FR-10.6 | Successful rates cached in `localStorage` (`jk_rates`) with timestamp | Should |
| FR-10.7 | On failure, shows last cached rate with "last update" time | Should |
| FR-10.8 | Refreshes automatically every 60 seconds | Must |

### FR-11 — Footer Actions & Navigation

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-11.1 | Top-bar shipping message routes to Orders page | Must |
| FR-11.2 | Orders page lists order history (id, date, items, total, status) | Must |
| FR-11.3 | Placing an order in checkout saves it to `jk_orders` and redirects to Orders | Must |

---

## 3. Non-Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-01 | Mobile-first responsive: breakpoints at 900px and 560px | Must |
| NFR-02 | Zero JavaScript console errors on load | Must |
| NFR-03 | Accessibility: semantic landmarks, alt text on images, aria-labels on icon buttons | Should |
| NFR-04 | Performance: no framework, total page weight < 300 KB excluding fonts/images | Should |
| NFR-05 | Browser cache disabled for HTML/CSS/JS via Firebase Hosting `Cache-Control: no-cache` | Should |
| NFR-06 | SEO: unique `<title>`, meta viewport, `lang` attribute updated with language | Must |
| NFR-07 | Works on Chrome, Edge, Firefox, Safari (desktop + mobile) | Must |

---

## 4. Page Structure / Block Order

```
┌─────────────────────────────────────────────┐
│ TOPBAR  free-shipping(→Orders) | live rate | EN/हिं │
├─────────────────────────────────────────────┤
│ HEADER  logo | phone | NewCollection | nav | socials │
├─────────────────────────────────────────────┤
│ HERO    bg photo + badge + H1 + para + CTAs + live rate │
├─────────────────────────────────────────────┤
│ SECTION  Shop by Category (6 cards)          │
├─────────────────────────────────────────────┤
│ SECTION  Featured Pieces (4 product cards)   │
├─────────────────────────────────────────────┤
│ SECTION  Why Sanjay Jewellery (4 trust pts)  │
├─────────────────────────────────────────────┤
│ SECTION  What Our Customers Say (3 reviews)  │
├─────────────────────────────────────────────┤
│ SECTION  Gold Rate Calculator                │
├─────────────────────────────────────────────┤
│ FOOTER  brand | shop | help | contact | legal │
└─────────────────────────────────────────────┘
```

---

## 5. Data Sources

| Data | Source | Storage |
|------|--------|---------|
| Product catalog (12 items) | `js/products.js` | Static JS array |
| Cart | `js/cart.js` | `localStorage → jk_cart` |
| Wishlist | `js/cart.js` | `localStorage → jk_wish` |
| Orders | `checkout.html` | `localStorage → jk_orders` |
| Language | `js/products.js` | `localStorage → jk_lang` |
| Cached live rates | `js/app.js` | `localStorage → jk_rates` |

---

## 6. Out of Scope (Home Page)

- Razorpay payment gateway (planned — needs backend / Cloud Functions)
- Real user authentication (Customer login / signup)
- CMS-driven product management (Admin panel is a demo)
- Custom domain (planned — connect later, `sanjayjewellery.com`)

---

## 7. Acceptance Criteria

Home Page is **ACCEPTED** when:

1. All Must-have FRs are implemented and pass test cases in `TESTCASES.md`
2. Zero console errors on page load
3. Language toggle switches every visible string, both directions
4. Live rate renders (or falls back to cached value) without breaking layout
5. Gold Rate Calculator returns mathematically correct results
6. All CTAs route to the correct destination pages
7. Layout is usable at 375 px (mobile), 768 px (tablet) and 1440 px (desktop)
