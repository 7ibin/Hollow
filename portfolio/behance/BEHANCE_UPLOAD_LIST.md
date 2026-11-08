# Behance — upload these images

**Folder:** `portfolio/behance/uploads/` · Use **`*-1616x1264.png`**

```powershell
npm run behance:export
npm run behance:slides
```

Each gallery slide = **one user flow**, all steps on the same page (like sign-up).

---

## Cover + gallery

| Step | File | Flow (screens on page) |
|------|------|-------------------------|
| **Cover** | `00-cover-1616x1264.png` | Behance cover (step 2) |
| 1 | `01-overview-1616x1264.png` | Text overview |
| 2 | `02-gallery-home-1616x1264.png` | **Home × 3** — top (hero) · middle (buy grid) · bottom (after buy + nav) |
| 3 | `03-gallery-health-quote-1616x1264.png` | Members · Medical · Sum insured · Plan results |
| 4 | `04-gallery-health-buy-1616x1264.png` | Results+tray · Compare · Add-ons · Checkout |
| 5 | `05-gallery-motor-1616x1264.png` | Vehicle · Results · Payment |
| 6 | `06-gallery-claim-1616x1264.png` | Start · Claim type · Documents |
| 7 | `07-gallery-policy-doctor-1616x1264.png` | Policies · Pick clause · Explanation |
| 8 | `08-gallery-signup-1616x1264.png` | Mobile · OTP · Profile · Welcome |

**8 gallery images** after overview.

Edit flows in `generate-behance-slides.mjs` → `FLOW_GALLERY`.  
Raw PNGs: `portfolio/behance/screens/`.

Project copy: **`BEHANCE_PROJECT.md`** · **https://github.com/7ibin/Hollow**
