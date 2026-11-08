# Hollow — Behance project kit

Use this file when creating a project at [behance.net](https://www.behance.net). Upload images from `screens/` in order. Copy sections below into Behance fields.

---

## Project title

**Hollow — Mobile insurance quote, compare & post-purchase UX**

## Subtitle (optional)

End-to-end UI for health, motor, term & home insurance on mobile (390px)

## Cover image

**Upload this on Behance (step 2 — Edit cover image):**

`behance-cover-1616x1264.png` — professional landscape cover (Hollow title, case study, device mockup)

Full resolution: `behance-cover.png` (2800×2190). Device preview uses `screens/02-home.png`. Regenerate: `npm run behance:cover`

Gallery slides still use `screens/01` … `screens/12` (do not use the phone screenshot as Behance cover).

---

## Description (paste into Behance project description)

**Hollow** is a mobile-first insurance experience prototype: quote wizards, plan comparison, checkout, claims, renewals, and AI-assisted help. The goal was clarity under time pressure—accurate premiums, honest comparison, and journeys that still work after purchase.

### Challenge

Indian insurance shoppers juggle **family floater vs individual**, medical disclosures per member, and **multi-plan compare** on a small screen. Many flows bury differences in dense tables or marketing copy.

### Approach

- **Product breadth:** Health, motor, term life, and home in one shell with shared patterns (progress, sticky CTAs, compare tray).
- **Quote wizards:** Member selection with role-aware rules (implicit gender for Son/Daughter/Parents, floater minimum two members on continue, scroll preserved on toggles).
- **Compare:** Plan rail, “All details / Key differences”, sectioned table, row-level “best in row”, readable insurer headers—tuned for 390px capture, not a pixel clone of aggregators.
- **Post-purchase:** Policies, claims start, policy doctor, cases, renewals, roadside/garage help.
- **Design system:** Hollow tokens (primary, ink, touch targets)—reference layout, original visual language.

### Outcome

A cohesive **clickable prototype** (static HTML/JS) suitable for usability review, Figma capture, and portfolio storytelling. Code: `https://github.com/7ibin/hollow`

### Tools

Figma · Cursor · HTML/CSS/JS · Playwright (screen export)

### Tags (Behance)

UI/UX · UX Design · Mobile App · Insurance · Product Design · Interaction Design · Web Design · Case Study · Fintech · User Interface

### Project URL

https://github.com/7ibin/hollow

---

## Gallery — caption per image

Upload each PNG and paste the matching caption under the image (Behance supports text blocks between images).

| File | Caption |
|------|---------|
| `01-cover-health-results-compare.png` | **Health results + compare tray** — Shortlist plans and open full compare without losing context. |
| `02-home.png` | **Home hub** — Entry to products, renewals, and help. |
| `03-health-members.png` | **Health quote — members** — Individual vs family floater, ages, and gender where it matters. |
| `04-health-medical.png` | **Medical history** — Per-member PED and lifestyle questions with progress across insured lives. |
| `05-health-plan-results.png` | **Plan results** — Premiums and sum insured for the quoted profile. |
| `06-compare-table-health.png` | **Compare — all details** — Sectioned feature table with plan rail and sticky actions. |
| `07-motor-results.png` | **Motor results** — Parallel pattern for own-damage / third-party journeys. |
| `08-health-checkout.png` | **Checkout** — Proposer details and payment step. |
| `09-signup.png` | **Sign-in** — OTP-first entry with trust cues. |
| `10-policy-doctor.png` | **Policy doctor** — Plain-language clause exploration on an active policy. |
| `11-claim-start.png` | **Claim start** — Guided intake by product type. |
| `12-cover-guide.png` | **Cover guide** — Lightweight recommendation wizard. |

---

## Optional: video

Record a 60–90s screen recording (390×844) scrolling: Home → Health members → Results → Compare → Checkout. Upload as Behance video asset.

---

## Regenerate screenshots

```powershell
# Terminal 1 — from repo root
powershell -ExecutionPolicy Bypass -File serve.ps1

# Terminal 2
npm run behance:export
npm run behance:cover
```

Requires `playwright` (see root `package.json` devDependencies).

---

## Publish checklist

1. Log in at [behance.net](https://www.behance.net) (Adobe account).
2. Click your profile → **Share work** / **Create a project** (or go to your profile and **Add project**).
3. Upload **cover** (`behance-cover-1616x1264.png`).
4. Add remaining images from `portfolio/behance/screens/` in order; paste captions from the table.
5. Paste **Description** and set **Tags** / **Tools** / **Project URL**.
6. Publish and share the Behance link.

**Local folder (Windows):** `C:\Cursor\Insurace_app\portfolio\behance\`
