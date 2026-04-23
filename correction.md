# 🛠️ Correction Plan: Balanced Sizing & Mobile Optimization

This document outlines the steps to normalize the scale of the Morocco FitFuel application and optimize it for a professional, "app-like" mobile experience.

---

## 📐 1. Global Sizing & Typography
**Goal**: Remove "ultra-large" elements and ensure consistent scaling across all devices.

- [ ] **Hero Section Normalization**:
    - Reduce `HeroSection` title from `text-[10rem]` to `text-5xl md:text-7xl`.
    - Reduce "Emphasis" text from `text-[11rem]` to `text-6xl md:text-8xl`.
    - Adjust parallax background text from `text-[20vw]` to `text-[15vw]`.
- [ ] **Typography Audit**:
    - Replace hardcoded massive sizes (e.g., `text-6xl`, `text-8xl`) with standardized fluid variables.
    - Ensure `h1`, `h2`, `h3` follow a logical hierarchy:
        - `h1`: `text-huge` (clamped)
        - `h2`: `text-3xl`
        - `h3`: `text-2xl`
- [ ] **Spacing Standardization**:
    - Change vertical section padding from `py-24/32` to `py-12 md:py-20`.
    - Reduce oversized negative margins (e.g., `-mt-32`) to `-mt-12 md:-mt-16`.

---

## 📱 2. "App-Like" Mobile UX
**Goal**: Implement smooth, swipable rows instead of stacking content vertically on mobile.

- [ ] **Horizontal Scroll Utilities**:
    - Add `.hide-scrollbar` utility to `index.css`.
    - Ensure smooth momentum scrolling on iOS/Android.
- [ ] **Category Pills**:
    - Convert `flex-wrap` to a single horizontal row with `overflow-x-auto`.
- [ ] **Product Grids (Flash Sales / Trending)**:
    - On mobile, show products in a horizontal row.
    - Use partial visibility (e.g., `w-[85vw]`) to hint at more content.
- [ ] **Touch Target Optimization**:
    - Ensure all interactive elements (buttons, pills, icons) have a minimum clickable area of `44px`.

---

## 🧭 3. Navigation & Header Fixes
**Goal**: Resolve layout conflicts and improve usability.

- [ ] **Header Visibility**:
    - `DesktopHeader`: Add `hidden md:block`.
    - `MobileHeader`: Refine height to `h-14` for more screen real estate.
- [ ] **Bottom Navigation**:
    - Refine icon sizing and spacing to feel balanced.
    - Ensure it is only visible on mobile (`md:hidden`).
- [ ] **Promo Bar**:
    - Reduce height and font size to be a subtle notice rather than a large banner.

---

## 📦 4. Component Refinement
**Goal**: Consistency in UI elements.

- [ ] **Cards**:
    - Standardize `ProductCard` padding and image aspect ratios.
    - Reduce card title sizes to `text-sm` or `text-base`.
- [ ] **Buttons**:
    - Audit "huge" button sizes; ensure they don't dominate the screen on mobile.
- [ ] **Footer**:
    - Optimize the footer grid for mobile to avoid long vertical stacks of links.

---

## ✅ Success Criteria
- No horizontal overflow (no side-scrolling on the body).
- All text is readable without being overwhelming.
- Mobile experience feels like a native app (swipeable, touch-friendly).
- Consistent spacing across all sections.
