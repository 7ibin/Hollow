/**
 * Renders every Behance upload as a cover-style slide (2800×2190).
 * Output: portfolio/behance/uploads/
 *
 * Usage: node portfolio/behance/generate-behance-slides.mjs
 */
import { mkdirSync, writeFileSync, unlinkSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { chromium } from 'playwright';
import sharp from 'sharp';
import {
  prepareHomeSplit,
  SHOT_W,
  VIEWPORT_H,
} from '../../scripts/prepare-behance-screen-frames.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'uploads');
const coverTemplate = join(__dirname, 'cover-template.html');
const overviewTemplateSimple = join(__dirname, 'overview-template-simple.html');
const overviewTemplateCards = join(__dirname, 'overview-template-cards.html');
const overviewTemplateEditorial = join(__dirname, 'overview-template-editorial.html');
const screensDir = join(__dirname, 'screens');

const W = 2800;
const H = 2190;

/** One Behance slide per product flow (all steps on a single page — like sign-up). */
const FLOW_GALLERY = [
  {
    file: '02-gallery-home',
    section: 'Home',
    caption: 'Three real 390px viewports — scroll through home: hero, buy grid, post-purchase & tab bar.',
    phones: [
      { label: 'Home · top', img: '02-home-top.png' },
      { label: 'Home · middle', img: '02-home-mid.png' },
      { label: 'Home · bottom', img: '02-home-bottom.png' },
    ],
  },
  {
    file: '03-gallery-health-quote',
    section: 'Health quote wizard',
    caption: 'Members, medical history, sum insured, then priced plan results.',
    phones: [
      { label: 'Members', img: '03-health-members.png' },
      { label: 'Medical', img: '04-health-medical.png' },
      { label: 'Sum insured', img: '03b-health-sum-insured.png' },
      { label: 'Plan results', img: '05-health-plan-results.png' },
    ],
  },
  {
    file: '04-gallery-health-buy',
    section: 'Shortlist, compare & pay',
    caption: 'Compare tray, full feature table, add-ons, and checkout.',
    phones: [
      { label: 'Results + tray', img: '01-cover-health-results-compare.png', scrollY: 'health-results-tray' },
      { label: 'Compare', img: '06-compare-table-health.png', scrollY: 'bottom' },
      { label: 'Add-ons', img: '05b-health-addons.png', scrollY: 'bottom' },
      { label: 'Checkout', img: '08-health-checkout.png', scrollY: 'bottom' },
    ],
  },
  {
    file: '05-gallery-motor',
    section: 'Motor quote & pay',
    caption: 'Vehicle details, priced results, and payment.',
    phones: [
      { label: 'Vehicle', img: '07a-motor-quote.png' },
      { label: 'Results', img: '07-motor-results.png' },
      { label: 'Payment', img: '07b-motor-pay.png', scrollY: 'bottom' },
    ],
  },
  {
    file: '06-gallery-claim',
    section: 'Health claim intake',
    caption: 'Start a claim, pick type, and submit documents.',
    phones: [
      { label: 'Start', img: '11-claim-start.png' },
      { label: 'Claim type', img: '11b-claim-type.png' },
      { label: 'Documents', img: '11c-claim-docs.png' },
    ],
  },
  {
    file: '07-gallery-policy-doctor',
    section: 'Policy doctor',
    caption: 'Choose a policy, pick a clause, read it in plain language.',
    phones: [
      { label: 'Policies', img: '10b-policy-pick.png' },
      { label: 'Pick clause', img: '10d-policy-clauses.png' },
      { label: 'Explanation', img: '10c-policy-clause.png' },
    ],
  },
  {
    file: '08-gallery-signup',
    section: 'Sign-in flow',
    caption: 'Mobile number, OTP verification, profile, and welcome.',
    phones: [
      { label: 'Mobile number', img: '09-signup.png' },
      { label: 'Verify OTP', img: '09-signup-otp.png' },
      { label: 'Profile', img: '09-signup-profile.png' },
      { label: 'Welcome', img: '09-signup-success.png' },
    ],
  },
];

/** Set BEHANCE_GALLERY=singles to render one screen per slide (02–13). Default: composite. */
const galleryMode = process.env.BEHANCE_GALLERY === 'singles' ? 'singles' : 'composite';

const SINGLE_SLIDES = [
  {
    file: '02-health-results-tray',
    screen: 'Health results + tray',
    caption: 'Shortlist plans and open full compare without losing context.',
    img: '01-cover-health-results-compare.png',
  },
  {
    file: '03-home',
    screen: 'Home',
    caption: 'Entry to products, renewals, and help.',
    img: '02-home.png',
  },
  {
    file: '04-health-members',
    screen: 'Health — members',
    caption: 'Individual vs family floater, ages, and gender where it matters.',
    img: '03-health-members.png',
  },
  {
    file: '05-health-medical',
    screen: 'Health — medical',
    caption: 'Per-member PED and lifestyle questions with progress across lives.',
    img: '04-health-medical.png',
  },
  {
    file: '06-health-plan-results',
    screen: 'Health — plan results',
    caption: 'Premiums and sum insured for the quoted profile.',
    img: '05-health-plan-results.png',
  },
  {
    file: '07-compare-table',
    screen: 'Compare — all details',
    caption: 'Sectioned feature table with plan rail and sticky actions.',
    img: '06-compare-table-health.png',
  },
  {
    file: '08-motor-results',
    screen: 'Motor — results',
    caption: 'Parallel pattern for own-damage and third-party journeys.',
    img: '07-motor-results.png',
  },
  {
    file: '09-health-checkout',
    screen: 'Health — checkout',
    caption: 'Proposer details and payment step.',
    img: '08-health-checkout.png',
  },
  {
    file: '10-signup',
    screen: 'Sign-in',
    caption: 'OTP-first entry with trust cues.',
    img: '09-signup.png',
  },
  {
    file: '11-policy-doctor',
    screen: 'Policy doctor',
    caption: 'Plain-language clause exploration on an active policy.',
    img: '10-policy-doctor.png',
  },
  {
    file: '12-claim-start',
    screen: 'Claim start',
    caption: 'Guided intake by product type.',
    img: '11-claim-start.png',
  },
  {
    file: '13-cover-guide',
    screen: 'Cover guide',
    caption: 'Lightweight recommendation wizard.',
    img: '12-cover-guide.png',
  },
];

const SLIDES = [
  {
    file: '00-cover',
    type: 'cover',
    caption: 'Mobile insurance for India — quote, compare plans, checkout & post-purchase care',
    screen: 'Overview',
  },
  {
    file: '01-overview',
    type: 'overview',
    variant: 'simple',
    caption: 'Mobile insurance prototype — quote, compare, and post-purchase care.',
    screen: 'Overview',
  },
  {
    file: '01-overview-cards',
    type: 'overview',
    variant: 'cards',
    galleryOptional: true,
    caption: 'Alternate overview layout (three insight cards + scope bar).',
    screen: 'Overview',
  },
  ...FLOW_GALLERY.map((p) => ({ ...p, type: 'composite' })),
  ...(galleryMode === 'singles' ? SINGLE_SLIDES : []),
];

/** Equal phone width per slide (2–4 devices); height = one 390px viewport. */
const FLOW_DEVICE_W = { 2: 358, 3: 298, 4: 262 };

const COMPOSITE_CSS = `
  #slide.slide--flow .brand { flex: 0 0 580px; padding: 0 40px 0 112px; }
  #slide.slide--flow .brand__title { font-size: 108px; margin-bottom: 20px; }
  #slide.slide--flow .brand__section {
    font-size: 26px; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: #0d4f8b; margin-bottom: 16px;
  }
  #slide.slide--flow .brand__desc { font-size: 30px; margin-bottom: 32px; line-height: 1.42; }
  #slide.slide--flow .brand__tags { margin-top: 28px; }
  #slide.slide--flow .brand__meta { margin-top: 36px; font-size: 22px; }
  .showcase--multi {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    padding: 0 40px 0 8px;
  }
  .screen__device--flow {
    width: var(--flow-dw);
    height: var(--flow-dh);
    border-radius: 34px;
    overflow: hidden;
    background: #f4f7fb;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.85) inset,
      0 8px 22px rgba(15, 23, 42, 0.06),
      0 22px 48px -12px rgba(13, 79, 139, 0.14);
  }
  .screen__device--flow .screen__viewport {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .screen__device--flow img.screen__shot {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: var(--img-pos, top center);
  }
  .screen__device--flow img.screen__shot--scroll {
    display: block;
    width: 100%;
    height: auto;
    object-fit: unset;
    transform: translateY(var(--scroll-ty, 0px));
  }
  .showcase--multi .screen { gap: 14px; }
  .showcase--multi .screen__label {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #94a3b8;
    max-width: var(--flow-dw);
    text-align: center;
    line-height: 1.25;
  }
`;

const SLIDE_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: ${W}px; height: ${H}px; overflow: hidden;
    font-family: 'DM Sans', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  #slide {
    width: ${W}px; height: ${H}px;
    display: flex; align-items: center;
    background:
      radial-gradient(ellipse 90% 70% at 92% 18%, rgba(13, 79, 139, 0.07) 0%, transparent 55%),
      radial-gradient(ellipse 70% 60% at 8% 92%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
      linear-gradient(168deg, #fafbfc 0%, #f4f6f9 42%, #eef2f7 100%);
  }
  .brand { flex: 0 0 1020px; padding: 0 80px 0 140px; }
  .brand__kicker {
    display: flex; align-items: center; gap: 16px;
    margin-bottom: 40px;
    font-size: 22px; font-weight: 700; letter-spacing: 0.28em;
    text-transform: uppercase; color: #64748b;
  }
  .brand__kicker::before {
    content: ''; width: 56px; height: 3px;
    background: linear-gradient(90deg, #0d4f8b, #5eb8ff); border-radius: 2px;
  }
  .brand__title {
    font-size: 168px; font-weight: 800; letter-spacing: -0.055em;
    line-height: 0.9; color: #062d52; margin-bottom: 32px;
  }
  .brand__desc {
    font-size: 38px; font-weight: 600; line-height: 1.45;
    color: #334155; max-width: 820px; margin-bottom: 48px;
  }
  .showcase {
    flex: 1; display: flex; align-items: center; justify-content: center;
    gap: 64px; padding: 0 80px 0 20px;
  }
  .showcase--duo { gap: 64px; }
  .screen { display: flex; flex-direction: column; align-items: center; gap: 20px; }
  .screen__label {
    font-size: 20px; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: #94a3b8;
  }
  .screen__device {
    --shot-w: 780;
    --crop-h: 1864;
    width: 430px;
    height: calc(430px * var(--crop-h) / var(--shot-w));
    border-radius: 40px;
    overflow: hidden;
    background: #f4f7fb;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.8) inset,
      0 1px 2px rgba(15, 23, 42, 0.04),
      0 8px 24px rgba(15, 23, 42, 0.06),
      0 32px 64px -8px rgba(13, 79, 139, 0.14),
      0 48px 96px -24px rgba(15, 23, 42, 0.12);
  }
  .screen__device img {
    display: block; width: 430px; height: auto;
  }
  .brand__tags { display: flex; flex-wrap: wrap; gap: 14px; }
  .brand__tags span {
    font-size: 22px; font-weight: 700; padding: 14px 26px; border-radius: 999px;
    color: #0d4f8b; background: #fff; border: 1px solid #e2e8f0;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }
  .brand__meta { margin-top: 56px; font-size: 24px; font-weight: 500; color: #94a3b8; }
`;

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

function flowDevicePx(phoneCount) {
  const dw = FLOW_DEVICE_W[phoneCount] ?? FLOW_DEVICE_W[4];
  const dh = Math.round((dw * VIEWPORT_H) / SHOT_W);
  return { dw, dh };
}

function viewportScrollBottom(img, screenHeights, homeScrollBottom) {
  if (img === '02-home.png') return homeScrollBottom;
  const h = screenHeights.get(img) ?? VIEWPORT_H;
  return Math.max(0, h - VIEWPORT_H);
}

function healthBuyResultsScroll(img, screenHeights) {
  const h = screenHeights.get(img) ?? VIEWPORT_H;
  if (h <= VIEWPORT_H) return 0;
  if (h <= VIEWPORT_H + 64) return 0;
  return Math.max(0, h - VIEWPORT_H);
}

function resolvePhoneScrollY(ph, screenHeights, homeScrollBottom) {
  if (ph.scrollY === 'bottom') {
    return viewportScrollBottom(ph.img, screenHeights, homeScrollBottom);
  }
  if (ph.scrollY === 'health-results-tray') {
    return healthBuyResultsScroll(ph.img, screenHeights);
  }
  if (ph.scrollY !== undefined) return Number(ph.scrollY);
  return 0;
}

function compositeSlideHtml(page, homeScrollBottom, screenHeights) {
  const n = page.phones.length;
  const { dw, dh } = flowDevicePx(n);
  const scale = dw / SHOT_W;
  const figures = page.phones
    .map((ph) => {
      const imgUrl = pathToFileURL(join(screensDir, ph.img)).href;
      const srcY = resolvePhoneScrollY(ph, screenHeights, homeScrollBottom);
      const ty = Math.round(-srcY * scale);
      const inner = `<div class="screen__viewport"><img class="screen__shot--scroll" style="--scroll-ty: ${ty}px" src="${imgUrl}" alt="" /></div>`;
      return `<figure class="screen">
        <figcaption class="screen__label">${esc(ph.label)}</figcaption>
        <div class="screen__device screen__device--flow" style="--flow-dw: ${dw}px; --flow-dh: ${dh}px">
          ${inner}
        </div>
      </figure>`;
    })
    .join('\n');
  return `<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="utf-8" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet" />
  <style>${SLIDE_CSS}${COMPOSITE_CSS}</style>
</head><body>
  <div id="slide" class="slide--flow">
    <div class="brand">
      <p class="brand__kicker">UI / UX Case Study</p>
      <h1 class="brand__title">Hollow</h1>
      <p class="brand__section">${esc(page.section)}</p>
      <p class="brand__desc">${esc(page.caption)}</p>
      <div class="brand__tags">
        <span>Health</span><span>Motor</span><span>Term</span><span>Home</span>
      </div>
      <p class="brand__meta">${page.phones.length} screens · 390px prototype</p>
    </div>
    <div class="showcase showcase--multi">${figures}</div>
  </div>
</body></html>`;
}

function singleSlideHtml(slide) {
  const imgUrl = pathToFileURL(join(screensDir, slide.img)).href;
  const cropH = slide.cropH ?? 1864;
  return `<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="utf-8" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet" />
  <style>${SLIDE_CSS}</style>
</head><body>
  <div id="slide">
    <div class="brand">
      <p class="brand__kicker">UI / UX Case Study</p>
      <h1 class="brand__title">Hollow</h1>
      <p class="brand__desc">${esc(slide.caption)}</p>
      <div class="brand__tags">
        <span>Health</span><span>Motor</span><span>Term</span><span>Home</span>
      </div>
      <p class="brand__meta">390px prototype · Design system · End-to-end flows</p>
    </div>
    <div class="showcase">
      <figure class="screen">
        <figcaption class="screen__label">${esc(slide.screen)}</figcaption>
        <div class="screen__device" style="--crop-h: ${cropH}">
          <img src="${imgUrl}" alt="" />
        </div>
      </figure>
    </div>
  </div>
</body></html>`;
}

mkdirSync(outDir, { recursive: true });

let homeScrollBottom = 3506;
const screenHeights = new Map();
try {
  await prepareHomeSplit();
  const homeMeta = await sharp(join(screensDir, '02-home.png')).metadata();
  homeScrollBottom = Math.max(0, homeMeta.height - VIEWPORT_H);
} catch (err) {
  console.warn('Home split:', err.message);
}

const flowImages = new Set();
for (const flow of FLOW_GALLERY) {
  for (const ph of flow.phones) flowImages.add(ph.img);
}
for (const img of flowImages) {
  try {
    const m = await sharp(join(screensDir, img)).metadata();
    screenHeights.set(img, m.height);
  } catch {
  }
}

const browser = await chromium.launch({
  headless: true,
  channel: process.env.PLAYWRIGHT_CHROME_CHANNEL || 'chrome',
});
const context = await browser.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

const manifest = [];
for (const slide of SLIDES) {
  const outPng = join(outDir, `${slide.file}.png`);
  const outWeb = join(outDir, `${slide.file}-1616x1264.png`);
  process.stdout.write(`${slide.file} … `);

  if (slide.type === 'cover') {
    await page.goto(pathToFileURL(coverTemplate).href, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(2500);
    await page.locator('#cover').screenshot({ path: outPng });
  } else if (slide.type === 'overview') {
    const overviewByVariant = {
      simple: [overviewTemplateSimple, '#overview-simple'],
      cards: [overviewTemplateCards, '#overview'],
      editorial: [overviewTemplateEditorial, '#overview-editorial'],
    };
    const [tpl, root] = overviewByVariant[slide.variant] ?? overviewByVariant.simple;
    await page.goto(pathToFileURL(tpl).href, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(2000);
    await page.locator(root).screenshot({ path: outPng });
  } else if (slide.type === 'composite') {
    const html = compositeSlideHtml(slide, homeScrollBottom, screenHeights);
    await page.setContent(html, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(2500);
    await page.locator('#slide').screenshot({ path: outPng });
  } else {
    const html = singleSlideHtml(slide);
    await page.setContent(html, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(2000);
    await page.locator('#slide').screenshot({ path: outPng });
  }

  const webBuf = await sharp(outPng)
    .resize(1616, 1264, { fit: 'fill' })
    .png({ compressionLevel: 9 })
    .toBuffer();
  try {
    unlinkSync(outWeb);
  } catch {
    /* missing */
  }
  writeFileSync(outWeb, webBuf);

  manifest.push({
    behanceCover: slide.file === '00-cover',
    uploadFile: `${slide.file}-1616x1264.png`,
    caption: slide.caption || slide.screen,
    fullRes: `${slide.file}.png`,
  });
  console.log('ok');
}

await browser.close();
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`\n${manifest.length} slides in portfolio/behance/uploads/`);
