# 📋 Phase 2: NutriMaroc Conversion & Social Proof Plan

## 1. Home Architecture Re-Ordering (`Index.tsx`)
We will restructure the homepage to prioritize offers and high-intent products immediately after the Hero.
*   **Target Order**:
    1.  `HeroSection` (The Brand Authority)
    2.  `FlashSales` (The "Buy Now" Hook)
    3.  `BuildYourStack` (The Aspirational Goal)
    4.  `TrendingGrid` (Social Proof: Best Sellers)
    5.  `CategoryPills` (Discovery Path)
    6.  `BrandMarquee` (Logistical Trust)
    7.  **New Section: `PerformanceVideoFeed`** (Immersive Social Proof)
    8.  `HomeValueCards` (The Closing Proof / "Why NutriMaroc")

## 2. Component Overhaul: `PerformanceVideoFeed`
We will create a new high-end component that showcases user reviews and expert unboxing in a TikTok/Reels inspired layout.
*   **Layout**: Vertical aspect-ratio cards (9:16) in a grid (Desktop: 4 columns, Mobile: Horizontal Swiping Marquee).
*   **Interactions**:
    *   Silent auto-play loops on hover/view.
    *   Glassmorphism detail overlay (Username, Label, Star Rating).
    *   "Play" icon with ripple animation when active.
*   **Content Strategy**: Placeholders for unboxing, lab tests, and result testimonials.

## 3. Component Refinement: `HomeValueCards` (The Closing Seal)
Since this section moves to the bottom, its role changes from "Introduction" to "Reassurance."
*   **Design Shift**: Simplify the vertical visual weight to make it feel like a "pre-footer" trust block.
*   **Copy Alignment**: Adjust headings (if needed) to feel like a "Commitment to Quality" rather than a discovery step.

## 4. Internationalization (i18n) Updates
Add new keys to `translations.ts` to support the video section and any refined headings:
*   `videoSectionTitle`: "Performance en Action" / "الأداء في الواقع"
*   `videoSectionSubtitle`: "Découvrez pourquoi nos athlètes nous font confiance" / "اكتشف لماذا يثق بنا رياضيونا"
*   `videoWatchNow`: "Regarder" / "مشاهدة"

## 5. Technical Polish (Stability & Performance)
*   **Lazy Loading**: Ensure video assets only load when the section enters the viewport to maintain a 90+ Lighthouse score.
*   **Z-Index Audit**: Verify the transition from the `BrandMarquee` to the `VideoFeed` is seamless and visually consistent with the dark theme.

---

> [!IMPORTANT]
> **Conversion Strategy**: By putting `FlashSales` and `BuildYourStack` first, we capture users who are ready to buy or looking for a deal immediately. Moving `HomeValueCards` to the bottom ensures that users who are still "on the fence" after browsing products get the final trust push they need near the contact info.
