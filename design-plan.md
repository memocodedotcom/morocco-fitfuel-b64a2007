# Design improvement implementation plan

Scope: **visual and interaction design only** (typography, color, layout, imagery, motion, component polish). Excludes backend, payments, and new product features unless they surface as UI patterns.

---

## Design principles (lock these first)

1. **Premium but approachable** — gym supplements skew “serious”; avoid cold clinical UI and avoid gimmicky neon unless it matches brand.
2. **Scannable** — shoppers compare price, brand, and trust in seconds; hierarchy beats decoration.
3. **Bilingual parity** — French and Arabic should feel equally intentional (line length, rhythm, RTL mirroring, not just translated strings).
4. **One accent system** — primary green + accent orange already exist; define when each is used so the UI doesn’t feel random.

**Exit:** A one-page internal “brand UI cheatsheet” (colors, type scale, radius, elevation, button hierarchy) agreed by stakeholder.

---

## Phase D1 — Foundations (tokens & type)

| Task | Outcome |
|------|---------|
| **Type scale** | Define explicit `text` steps for: display (hero), H1–H3, body, small, caption. Limit arbitrary `text-sm` / `text-xs` sprawl. |
| **Font loading** | Ensure Cairo / Plus Jakarta load with `font-display: swap` and minimal layout shift; define fallback stack. |
| **Line length** | Max readable width for long policy/product copy (`prose` or `max-w-prose` pattern) on PDP and legal pages. |
| **Spacing scale** | Standardize section vertical rhythm (e.g. multiples of 4 or 8) for home blocks, PDP sections, checkout. |

**Exit:** Tailwind theme or CSS variables document that maps “marketing section” → padding and title size.

---

## Phase D2 — Color, contrast, and dark mode

| Task | Outcome |
|------|---------|
| **Contrast audit** | Check primary on white, accent on dark sections (flash sales, footer), muted text on `bg-muted`. Target WCAG AA where text is primary content. |
| **Semantic colors** | Reserve red/destructive for errors and urgent stock; avoid overusing on marketing cards. |
| **Dark mode polish** | If theme toggle stays: tune `card`, `border`, `muted` for dark; fix hero/flash sections so they don’t look “washed” or illegible. |
| **Focus rings** | Consistent `ring` / focus-visible for keyboard users on buttons, links, pills, sheet triggers. |

**Exit:** Short checklist run on home, PLP, PDP, checkout, and one legal page in both themes and both locales.

---

## Phase D3 — Layout and grid

| Task | Outcome |
|------|---------|
| **Container consistency** | Same max-width and horizontal padding on home, PLP, PDP, legal; avoid full-bleed chaos on large screens. |
| **PLP density** | Tune column breakpoints (2 / 3 / 4) and gap so cards breathe; align toolbar (sort, filters) with grid. |
| **PDP gallery** | Desktop: clear primary image + thumbnails; mobile: swipe or sticky gallery pattern; avoid tiny thumbs. |
| **Checkout** | Single-column flow on mobile with summary either sticky or collapsible; reduce visual competition with header/footer. |

**Exit:** Redlines or screenshots annotated for breakpoints `sm`, `md`, `lg`, `xl`.

---

## Phase D4 — Components and patterns

| Task | Outcome |
|------|---------|
| **Buttons** | One primary CTA per viewport region; ghost/outline for secondary; consistent height and radius (full vs `rounded-lg`). |
| **Cards** | Unified card language: radius, border, shadow on hover, image aspect ratio across product cards and bundles. |
| **Pills & chips** | Category and filter pills: selected vs default states clearly distinct; touch targets ≥ 44px height on mobile. |
| **Badges** | Discount, “low stock,” and trust badges: size, color, and placement rules so they don’t fight the product title. |
| **Forms** | Labels, error states, and helper text pattern for checkout; optional inline validation styling. |
| **Navigation** | Desktop header vs mobile header/bottom nav: no duplicate confusing icons; active state visible. |

**Exit:** Small “component gallery” page or Storybook (optional) showing approved variants.

---

## Phase D5 — Imagery and brand assets

| Task | Outcome |
|------|---------|
| **Product photography** | Prefer consistent crop, background, and lighting; placeholder Unsplash mix reads as demo — plan real packshots. |
| **Logo mark** | Replace or refine “N” block if brand has a real mark; ensure it works on dark promo and light header. |
| **Empty & error states** | Illustration or icon + copy for empty cart, empty search, 404 — on-brand, not generic. |
| **Payment / trust** | Replace abstract SVG marks with approved assets when available; keep alignment and size consistent in footer. |

**Exit:** Image guidelines doc (aspect ratio, min resolution, file format).

---

## Phase D6 — Motion and micro-interactions

| Task | Outcome |
|------|---------|
| **Reduce motion** | Already partially supported; extend to any new animations (sheet, drawer, toast). |
| **Purposeful motion** | Page enter, hover on cards, add-to-cart feedback: short durations (150–250ms), ease-out; avoid marquee fatigue on small screens. |
| **Loading** | Skeletons for product grid and PDP gallery where content is async in future; shimmer discipline. |

**Exit:** Motion tokens (duration, easing) in the cheatsheet.

---

## Phase D7 — Polish passes (high-visibility pages)

| Order | Page | Design focus |
|-------|------|----------------|
| 1 | **Home** | Hero hierarchy, value cards, marquee density, section titles, spacing between blocks. |
| 2 | **PLP** | Filter sheet UX, empty filtered state, sort control affordance. |
| 3 | **PDP** | Compliance block vs. buy box balance, accordion typography, sticky mobile CTA vs bottom nav. |
| 4 | **Cart drawer** | Line items, quantities, subtotal scan path, CTA prominence. |
| 5 | **Checkout** | Step indicator clarity, payment info card, dialog readability. |
| 6 | **Legal / trust** | Long-form readability (headings, lists, table of contents optional). |

**Exit:** Sign-off per page after mobile + desktop review in FR and AR.

---

## Dependencies and sequencing

- **D1 → D2 → D3** first (foundations prevent rework).
- **D4** in parallel with **D7** once tokens exist.
- **D5** can run on content/creative track independently.
- **D6** last pass before release candidate.

---

## Success metrics (design-only)

- Stakeholder **“looks like a real brand”** sign-off on home + PDP.
- No **accessibility** regressions on contrast or focus.
- **Consistent** card/button/pill styles across PLP, home, and recommendations.
- Arabic layout **mirrors** confidently (icons, chevrons, alignment).

---

## Explicitly out of scope

- New business features, SEO implementation, performance engineering (unless visual, e.g. LCP image priority).
- Copywriting strategy beyond tone alignment with design.

---

*This plan is design-only. Implementation can follow the same phases in small PRs (tokens → layout → components → pages → motion → assets).*
