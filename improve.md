# Front-end improvement implementation plan

This document turns the UI/UX review into an ordered plan. Scope is front-end only (React, layout, i18n, styling, routing). Adjust order if backend or content work is scheduled in parallel.

---

## Goals

- Fix broken navigation and inconsistent bilingual UX.
- Align mobile and desktop shells so the brand and key actions are always discoverable.
- Reduce “template” signals (placeholders, non-links, mixed languages).
- Keep changes incremental; ship in small PRs where possible.

---

## Phase 1 — Navigation and routing (high priority)

| Task | Description | Acceptance criteria |
|------|-------------|---------------------|
| 1.1 Profile destination | Either add a real `/profile` route (account placeholder, sign-in CTA, or order lookup stub) or remove/replace the bottom-nav item until it exists. | Tapping Profile never lands on 404; copy matches FR/AR. |
| 1.2 Footer category links | Link each footer category to `/products?category=<id>` (or equivalent) so destinations match labels. | Each category opens the filtered listing. |
| 1.3 Footer help links | Turn help rows into `Link` targets to real routes (`/faq`, `/returns`, `/track-order`) or a single `/help` hub with anchors. | Keyboard and screen-reader users can activate every item; no dead `span`-only rows. |
| 1.4 Social links | Replace `href="#"` with real URLs or hide icons until URLs exist. | No inert social icons in production build. |

**Dependencies:** Product category `id` values must match `categories` in data. New pages can be minimal static content at first.

---

## Phase 2 — Mobile shell (high priority)

| Task | Description | Acceptance criteria |
|------|-------------|---------------------|
| 2.1 Mobile header | Add a compact bar below `PromoBar` for `md` hidden: logo (home), optional cart icon, language toggle. Keep search accessible via bottom nav or header icon—pick one primary pattern and document it. | First paint on phone shows brand; cart/language reachable without opening drawer-only flows if that is the chosen pattern. |
| 2.2 Sticky behavior | Decide what sticks: promo only, or promo + header; avoid double shadows or jumpy layout. | Scroll on iOS/Android feels stable; safe-area insets respected. |

**Dependencies:** Reuse `DesktopHeader` patterns (cart count, `SearchOverlay`, `setLocale`) to avoid duplicated logic; extract shared pieces if needed.

---

## Phase 3 — Internationalization and RTL (high priority)

| Task | Description | Acceptance criteria |
|------|-------------|---------------------|
| 3.1 Promo bar | Move rotating and static promo strings into `translations` (FR + AR). | Switching locale updates promo text; RTL layout still readable. |
| 3.2 Product card strings | Localize low-stock and any other hardcoded UI strings (e.g. discount labels if not already keyed). | No French-only strings when locale is Arabic. |
| 3.3 Directional icons | Mirror or swap icons that imply direction (e.g. CTA chevrons, back links) using `dir` or logical CSS. | Arabic UI does not show “backward” arrows on primary actions. |
| 3.4 Marquee | Ensure `BrandMarquee` uses the RTL animation variant when `dir="rtl"`. | Marquee scroll direction feels natural in Arabic. |

**Dependencies:** Extend `TranslationKey` and both locale objects together to satisfy TypeScript.

---

## Phase 4 — Trust and polish (medium priority)

| Task | Description | Acceptance criteria |
|------|-------------|---------------------|
| 4.1 Payment badges | Replace text chips with accessible SVG or image logos (Visa, Mastercard, CMI) plus `alt` text; maintain contrast on dark footer. | Legible at small sizes; documented license for assets. |
| 4.2 Notifications | Choose Sonner **or** shadcn Toaster as the single user-facing toast system; remove or isolate the other for dev-only if needed. | One consistent style for add-to-cart, errors, and success. |
| 4.3 Reduced motion | Respect `prefers-reduced-motion` for Framer Motion (and optional marquee) per section or globally. | With OS “reduce motion” on, no distracting continuous animation. |

---

## Phase 5 — Product discovery and checkout UX (medium priority)

| Task | Description | Acceptance criteria |
|------|-------------|---------------------|
| 5.1 Filters | Add filters that match catalog needs (e.g. price range, brand) with a mobile-friendly surface (sheet or full-width panel). | Filters compose with existing category query params; URL reflects state where useful. |
| 5.2 Checkout layout variant | Optional `AppLayout` variant: minimal chrome (logo + back link, slim footer) for `/checkout`. | Fewer competing CTAs during checkout; cart drawer behavior defined (e.g. still available or suppressed). |
| 5.3 Checkout steps | Visual steps (Cart → Details → Payment) even if payment is still placeholder. | User always knows where they are in the flow. |

---

## Phase 6 — Design system hygiene (lower priority)

| Task | Description | Acceptance criteria |
|------|-------------|---------------------|
| 6.1 Section pattern | Document or extract a shared “section” wrapper: consistent vertical padding, optional title slot, `container` usage. | New home sections match existing rhythm without one-off `py-*` values. |
| 6.2 Dark mode | Either expose theme toggle using existing `next-themes` + `.dark` tokens or remove unused dependency and document light-only. | No half-implemented dark styles in production. |
| 6.3 Hero tone | A/B or incremental copy/design pass: fewer decorative emoji if positioning is “premium”; single clear promise above the fold. | Stakeholder-approved copy in both locales. |

---

## Suggested PR breakdown

1. **PR A:** Phase 1 (routing + footer links + social).
2. **PR B:** Phase 2 (mobile header + sticky tweaks).
3. **PR C:** Phase 3 (i18n + RTL + marquee).
4. **PR D:** Phase 4 (trust assets + toasts + motion).
5. **PR E:** Phase 5 (filters + checkout UX).
6. **PR F:** Phase 6 (docs/patterns + theme decision).

---

## Verification checklist (each PR)

- [ ] `npm run build` passes.
- [ ] Manual pass in FR and AR: home, products, product detail, cart, checkout.
- [ ] Keyboard: focus visible on new controls; no trap in overlays.
- [ ] No new dead links or `href="#" ` in user-visible chrome.

---

## Out of scope (for this plan)

- Payment provider integration, real auth, inventory APIs.
- SEO and server rendering strategy (unless you add a separate doc).
- Content photography and legal copy (privacy, terms)—can stub routes with placeholders.

---

*Last updated: aligned with current codebase layout (`AppLayout`, `DesktopHeader`, `BottomNav`, `Footer`, `LanguageContext`, product pages).*
