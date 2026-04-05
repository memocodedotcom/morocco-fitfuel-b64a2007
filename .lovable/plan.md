

# Improvement Plan for NutriMaroc

## Issues Found

1. **Broken product images** — All product images show broken `<img>` tags (placeholder alt text visible). The product data uses placeholder URLs that don't resolve.
2. **No footer** — The page ends abruptly after the trending grid. No footer with contact info, social links, legal pages, or trust signals.
3. **"Build Your Stack" section missing from homepage** — The plan calls for it but it's not visible on the page scroll.
4. **Product Detail Page has broken gallery** — Images fail to load; thumbnails are broken. The page feels sparse.
5. **No "Add to Cart" button on product cards** — Cards in the grid/listing have no quick-add button; users must navigate to PDP to add items.
6. **No page transition animations** — Navigating between pages feels static, not "app-like."
7. **Category pills use emoji icons** — Look unprofessional; should use proper SVG icons or styled icon components.
8. **Promo bar wraps awkwardly on mobile** — Shows on two lines, taking too much vertical space.
9. **No "Frequently Bought Together" on PDP** — Listed in plan but not implemented.
10. **No reviews section on PDP** — No visual UGC or star rating breakdown.

---

## Implementation Plan

### Step 1: Fix Product Images with Real Unsplash/Placeholder URLs
Replace all broken image URLs in `src/data/products.ts` with working high-quality supplement images from Unsplash or use a reliable placeholder service. Each product needs 3-5 images for the gallery.

### Step 2: Add Quick-Add Button to Product Cards
Add a floating "+" button or "Ajouter" button on each `ProductCard.tsx` that triggers `addItem` from CartContext with a scale-up micro-interaction and a checkmark animation on success.

### Step 3: Add Site Footer
Create a `Footer.tsx` component with: brand info, category links, contact (WhatsApp, email), social media icons, payment method badges, and "100% Authentique" trust strip. Bilingual FR/AR.

### Step 4: Polish Category Pills
Replace emoji icons with proper styled SVG icons or Lucide icons inside colored circular backgrounds. Make them feel like a native app's quick-filter bar.

### Step 5: Complete the PDP
- Wire up the swipeable image gallery with working images
- Add "Fréquemment achetés ensemble" cross-sell module
- Add a basic reviews section with star breakdown and placeholder customer reviews
- Add scarcity indicator ("Plus que X en stock")
- Add flavor/size selector UI

### Step 6: Add Page Transitions & Micro-Interactions
- Add `framer-motion` page transition wrapper for route changes (fade/slide)
- Add scale-up hover/tap effect on product cards
- Add checkmark animation on "Add to Cart" success

### Step 7: Improve Promo Bar for Mobile
Condense promo bar to a single scrolling line on mobile, or rotate messages with a fade animation to save vertical space.

### Step 8: Ensure "Build Your Stack" Section Renders on Homepage
Verify the component is included in `Index.tsx` and renders correctly with working product images and goal selection logic.

---

## Priority Order
1. Fix images (everything looks broken without them)
2. Quick-add buttons on cards (core conversion feature)
3. Complete PDP (cross-sell, reviews, selectors)
4. Footer
5. Micro-interactions & transitions
6. Polish category pills & promo bar

## Technical Notes
- All changes are frontend-only — static data in `src/data/products.ts`
- `framer-motion` will be added as a dependency for animations
- Images will use Unsplash URLs with reliable CDN paths
- All new UI strings added to `src/i18n/translations.ts` for FR/AR

