# Phase A — Trust, compliance, and “why buy here”

Implementation plan only (no code in this document). Goal: every serious shopper can answer **“Is this real?”** and **“What if something goes wrong?”** without leaving the product or checkout journey, in a way that is honest, legally defensible, and aligned with real operations.

---

## Objectives

- Reduce perceived fraud risk (counterfeits, grey-market ambiguity) for supplement buyers in Morocco.
- Surface **only** claims you can back with documents, suppliers, or policy.
- Align on-site copy and flows with **actual** payment methods, returns, and support channels.
- Define clear **exit criteria** so Phase A can be signed off before building Phase B content depth.

---

## A1 — Authenticity and sourcing narrative

### Scope

- One dedicated **“Why shop with us” / Authenticity”** destination (or prominent homepage + footer entry).
- Optional short **authenticity module** on high-trust PDPs (link out to full page).

### Deliverables

- **Sourcing model** described in plain language: authorized distributor, direct import, official retailer—whichever is true; avoid vague “100% original” without substance.
- **How to verify** (if applicable): batch or lot number, link to manufacturer verification page, or “contact us with photos of seal and lot” process—only what you will actually honor.
- **What you do not do**: e.g. no parallel imports if that is false; no manufacturer claims you cannot cite.

### Dependencies

- Legal/commercial confirmation of what you are allowed to say about brands and supply chain.
- Internal SOP for handling authenticity questions (who responds, within what time).

### Acceptance criteria

- Stakeholders approve final copy in **French and Arabic** (and English if you add it later).
- No statement on the live site contradicts contracts, invoices, or brand guidelines.

---

## A2 — Certificates, testing, and product-level proof

### Scope

- **Data model / content checklist** for each product (even if stored in CMS or spreadsheets first): COA availability, third-party programs (e.g. Informed Choice), organic/halal/kosher if relevant, country of origin, manufacturer name.
- **PDP display rules**: show a field only when asset or text is approved and current.

### Deliverables

- Template for “**What’s on the label**” vs “**Extra verification**” (testing badges, PDF links, or “available on request”).
- **Expiry / lot** policy: if shown on PDP, define update process (who updates when new stock arrives).

### Dependencies

- Access to real certificates or letters from suppliers; storage and versioning (even as PDFs behind CDN or secure links).
- Decision on whether expired COAs are removed or marked “historical batch only.”

### Acceptance criteria

- Every live PDP either has a complete **proof block** or an explicit **honest fallback** (“Certificate available on request”)—no empty placeholders that look broken.
- Legal review of any health-adjacent or certification wording.

---

## A3 — Legal, health, and product-risk copy

### Scope

- **Global disclaimer**: dietary supplements are not intended to diagnose, treat, cure, or prevent disease; not a substitute for professional medical advice—adapt to MA/EU-style norms with counsel.
- **Allergens and warnings** pattern: where to show on PDP (above fold vs dedicated accordion); consistency with label.
- **Age restrictions** if you sell categories that require them (e.g. high-stim pre-workouts)—per local law and platform policy.
- **Return and refund** summary visible before payment (link to full policy).

### Deliverables

- Approved **short** disclaimer component (site-wide footer or checkout).
- **Return policy** page: eligibility, time window, unopened vs opened, who pays return shipping, refund method, exceptions (perishables, hygiene).
- **Privacy** touchpoints: what you collect at checkout, WhatsApp use, marketing opt-in language.

### Dependencies

- Local counsel or qualified advisor for Morocco-relevant consumer and health-advertising rules.
- Locked business rules for returns (what CS is allowed to promise).

### Acceptance criteria

- Checkout and PDP link to policies that match **actual** CS behavior.
- No absolute medical claims (“cures,” “burns fat guaranteed”) without substantiation.

---

## A4 — Payment, checkout trust, and post-purchase confirmation

### Scope

- **Real** payment methods: CMI, cards, COD, or others—only what is integrated and tested.
- **Order confirmation**: email and/or SMS and/or WhatsApp template with order id, summary, support link, and expected next step.

### Deliverables

- Checkout copy that names **exactly** the payment options available in production.
- Trust strip aligned with reality: “Secure payment” only if TLS and PSP terms support the claim.
- **Post-order** message template(s) in FR/AR with variables (name, order ref, total).

### Dependencies

- Payment provider onboarding complete; test transactions in staging and production.
- Operational owner for sending confirmations (automated vs manual at MVP).

### Acceptance criteria

- A test order in production receives a confirmation that matches the order and does not promise unavailable services.
- No placeholder PSP names or “coming soon” in primary checkout path unless clearly labeled as beta.

---

## Cross-cutting: content and localization

- All Phase A user-facing strings exist in **French and Arabic** with the same legal meaning (not literal-only translation where nuance matters—use reviewed legal/marketing translation if needed).
- **Single source of truth** for policy URLs (footer, checkout, emails).

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Over-claiming authenticity | Tie every sentence to a document or process; remove superlatives. |
| Stale certificates | Version COAs by batch; hide or update when stock turns. |
| WhatsApp as informal support | Publish expected response hours; use templates to avoid contradictory promises. |
| COD disputes | Policy states when payment is collected and what happens on refusal or partial delivery. |

---

## Recommended work order

1. **Lock** sourcing and return rules with operations and legal.  
2. **Draft** authenticity page + PDP proof checklist (content only).  
3. **Draft** disclaimers, allergen pattern, and policy pages; bilingual review.  
4. **Align** checkout and emails with live payment and confirmation flow.  
5. **QA pass**: random PDPs + full checkout + policy links + FR/AR toggle.

---

## Phase A exit gate (sign-off checklist)

- [x] Authenticity / “why us” narrative approved and live (or intentionally deferred with dated ticket). — *Page `/authenticity` + PDP module; copy must still be validated by counsel.*
- [x] PDP proof rules documented; no misleading empty badges. — *`ProductComplianceSection` + optional product fields; fallback link when no metadata.*
- [x] Disclaimers and returns/privacy pages live and linked from checkout and footer. — *`/privacy`, `/returns` (full policy), supplement disclaimer component.*
- [x] Payments and confirmations match production behavior. — *Checkout states WhatsApp handoff + TLS note; WhatsApp template dialog; align COD/CMI copy with ops before launch.*
- [x] Bilingual parity reviewed for all Phase A surfaces. — *FR/AR keys added; legal review recommended before production.*

---

*This plan implements **Phase A** from the broader “world-class supplement site” roadmap. Downstream phases (B–G) should not block on perfect creative, but should not contradict Phase A once signed off.*
