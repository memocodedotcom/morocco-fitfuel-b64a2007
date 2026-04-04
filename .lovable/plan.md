
# Supplement E-Commerce Website — Morocco 🇲🇦

## Overview
A mobile-first, app-like supplement store with bilingual FR/AR support, static product data, WhatsApp + card checkout, and world-class UX.

---

## Phase 1: Foundation & Layout

### App Shell & Navigation
- **Sticky bottom nav bar** (mobile): Home, Search, Cart, Profile icons — thumb-friendly, always visible
- **Desktop header**: Logo, smart search bar, category mega-menu with icons, cart icon with counter, language toggle (FR/AR)
- **Promo top bar**: "🚚 Livraison gratuite à partir de 500 MAD | 🛡️ 100% Authentique"
- **RTL support** for Arabic with a language switcher component

### Design System
- Clean, modern palette — dark accents for urgency zones, green for trust badges
- Skeleton loaders for all data-driven sections
- Micro-interactions: scale-up on tap, checkmark animation on add-to-cart
- Optimistic UI updates for cart actions

---

## Phase 2: Homepage — The Marketplace Hub

- **Hero section**: Single high-impact static banner with CTA (e.g., "Ramadan Stack — Économisez 20%")
- **Brand marquee**: Scrolling logos (ON, Dymatize, etc.) + trust signals
- **Category pills**: Horizontal scroll — Protéines, Créatine, Vitamines, Pré-Workout, Perte de Poids
- **Flash Sales zone**: Dark-themed section with countdown timer and 3-4 discounted products
- **"Construis ton Stack"**: Goal selector (Perdre du poids / Gagner du muscle) → dynamic 3-product bundle suggestion
- **Trending / Best Sellers grid**: Product cards with prices in MAD, ratings, and quick-add button

---

## Phase 3: Product Listing & Detail Pages

### Product Listing Page
- Grid/list toggle, filter sidebar (category, price range, brand, goal)
- Sort by: popularity, price, newest
- Quick-view modal on hover/tap

### Product Detail Page (PDP)
- **Above fold**: HD swipeable image gallery (5 images), product title, price in MAD, "Vérifié Authentique" badge, expiration date, flavor/size selector, Add to Cart button
- **Sticky bottom CTA bar**: Price + "Ajouter au panier" button that stays visible on scroll
- **Below fold accordions**:
  - Ingrédients & Composition
  - Utilisation suggérée
  - Livraison & Garantie d'authenticité
- **"Fréquemment achetés ensemble"**: Current product + complementary item with "Ajouter les 2" button
- **Reviews section**: Star ratings with customer photo display priority
- **Scarcity indicator**: "Plus que 3 en stock — Commandez vite !"

---

## Phase 4: Cart & Checkout

### Slide-Out Cart Drawer
- Slides in from right, no page redirect
- **Gamified free shipping bar**: Progress bar showing distance to 500 MAD threshold
- Line items with quantity +/- controls, remove button
- **In-cart upsells**: Low-ticket items (barres protéinées, shakers) with 1-click add
- Cart total in MAD

### Dual Checkout
- **Button 1 (Primary green)**: "Commander via WhatsApp" — generates pre-formatted message with order details and opens wa.me link
- **Button 2 (Secondary)**: "Paiement Sécurisé" — standard checkout form (name, phone, address, city) with Stripe card payment integration

---

## Phase 5: Search & Smart States

- **Predictive search**: Visual dropdown with product thumbnails, prices as user types
- **Empty search state**: "Nous n'avons pas [terme], mais ces alternatives populaires vous donneront les mêmes résultats" + relevant product grid
- **Empty cart state**: Friendly illustration + "Découvrez nos best-sellers" CTA

---

## Phase 6: Bilingual Support (FR/AR)

- i18n system with French as default, Arabic toggle
- RTL layout switching for Arabic
- All UI strings, product descriptions, and CTAs translated

---

## Data Architecture
- Static product data stored in a local JSON/TypeScript file (brands, categories, prices in MAD, images, descriptions in FR/AR)
- Cart state managed with React context + localStorage persistence
- Stripe integration for card payments (will enable separately)

---

## Pages
1. `/` — Homepage
2. `/products` — Product listing with filters
3. `/products/:slug` — Product detail page
4. `/checkout` — Checkout form (for card payment flow)
5. `/cart` — Cart drawer (accessible from any page)
