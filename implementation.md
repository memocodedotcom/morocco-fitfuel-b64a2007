# 🚀 NutriMaroc: Performance Luxury Overhaul - Implementation Plan

This plan outlines the transformation of the current prototype into a world-class, authority-driven supplement brand: **NutriMaroc**. We will shift from a generic aggregator to a premium, research-backed Moroccan brand.

---

## 🏗️ 1. Brand Identity & "Fake Company" Definition
We will establish **NutriMaroc** as the "Elite Standard" for Moroccan athletes.

*   **Brand Name**: NutriMaroc.
*   **Tagline**: "La Performance au Sommet" (Performance at the Peak).
*   **Core Value**: "L'Excellence Scientifique au Service de l'Athlète" (Scientific Excellence at the Service of the Athlete).
*   **Visual Direction**: High-contrast dark mode, Electric Lime (`#D4FF00`) accents for energy, and Metallic Silver for premium quality.
*   **Assets**: We will use AI-generated imagery featuring Moroccan sports environments (Casablanca coast workouts, high-end Atlas gyms) and sleek, minimalist supplement packaging.

---

## 🛍️ 2. Product Expansion (Signature Line)
We will add a "NutriMaroc Signature Series" to the database in `src/data/products.ts`.

*   **NutriMaroc Whey Isolate**: Ultra-filtered, local flavors (e.g., Amlou, Mint Tea - limited editions).
*   **NutriMaroc Pure Creatine**: 200 Mesh micronized for maximum absorption.
*   **NutriMaroc Extreme Gainer**: 1500+ calories for the Moroccan "hardgainer."
*   **Enhanced Metadata**: Add "Laboratory Tested" badges, Batch Numbers, and specific goal tags for each.

---

## 🧭 3. Navigation & UX Overhaul
Current navigation is too simple. We will upgrade the `DesktopHeader` and `MobileHeader`.

*   **Mega Menu**: Implement a dropdown that categorizes products by **Category** (Proteins, Vitamins) and **Goal** (Build Muscle, Burn Fat, Endurance).
*   **The "Goal Selector"**: A prominent "Trouvez votre Stack" (Find your Stack) CTA in the nav to guide beginners.
*   **Visual Polish**: Use full-width glassmorphism, subtle blur transitions, and animated underlines for active links.
*   **Visibility**: Move the Search bar to a more prominent position or make it an expandable search for better clarity.

---

## 🏆 4. New Section: "Histoires de Succès" (Case Studies)
This section will be the "Social Proof Engine" located between the Products and the Video Feed.

*   **Component**: `SuccessStories.tsx`.
*   **Content**: 3-4 featurettes of local athletes.
*   **Interactions**:
    *   **Interactive Sliders**: "Before/After" image comparison.
    *   **"What they use"**: A small product list linked directly to the cart next to each story.
    *   **Results Grid**: Key stats (e.g., +5kg muscle in 3 months).

---

## ✨ 5. Missing Required Sections (Innovation)
To compete with global brands, we need these missing components:

1.  **Science & Quality Vault**: A dedicated section/page explaining our 3rd-party testing, COA (Certificate of Analysis) access, and ingredient transparency.
2.  **NutriMaroc Academy (Blog/Vault)**: Educational cards on the homepage (e.g., "Combien de Créatine ?" or "Planning Repas Ramadan").
3.  **Loyalty Club (NutriMaroc Elite)**: A small interactive block showing rewards and early access benefits.
4.  **Local Trust Bridge**: "Livraison Express Partout au Maroc" (Next-day delivery in major cities).

---

## 📅 6. Execution Roadmap

### Phase A: Brand & Content Foundation
*   [ ] Generate 5+ high-end product/lifestyle images.
*   [ ] Update `products.ts` with the "NutriMaroc Signature" line.
*   [ ] Rewrite localized descriptions (FR/AR) to be more persuasive and authoritative.

### Phase B: Navigation & Layout
*   [ ] Implement the Mega Menu in `src/components/layout/DesktopHeader.tsx`.
*   [ ] Redesign the Mobile Menu for better hierarchy of categories vs. information.
*   [ ] Polish the `PromoBar` with rotating offers (e.g., "Free Shaker over 500 DH").

### Phase C: Social Proof & Case Studies
*   [ ] Create the `SuccessStories.tsx` component.
*   [ ] Update `Index.tsx` to include the Case Study section as a bridge between the store and the community.
*   [ ] Enrich the `PerformanceVideoFeed` with specific "NutriMaroc" branded content placeholders.

### Phase D: Trust & Authority
*   [ ] Add the `QualitySeal.tsx` component to the homepage.
*   [ ] Implement the "Education/Blog" preview section.
*   [ ] Final design pass: Hover effects, custom cursors for products, and scroll-triggered animations.

---

### Suggested Order for Homepage (`Index.tsx`):
1.  `HeroSection` (Modernized)
2.  `GoalSelector` (New: Quick path)
3.  `FlashSales` (The Hook)
4.  `SuccessStories` (New: Trust/Case Study)
5.  `TrendingGrid` (Best Sellers)
6.  `PerformanceVideoFeed` (Reel-style Social Proof)
7.  `QualitySeal` (New: Scientific Trust)
8.  `HomeValueCards` (Closing Seal)
