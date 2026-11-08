import { chromium } from 'playwright';

const screens = [
  ['policy-doctor', '10-policy-doctor'],
  ['policy-doctor-pick', '10b-policy-pick'],
  ['policy-doctor-clause', '10c-policy-clause'],
];
const VIEWPORT_H = 1688;
const base = process.env.BEHANCE_BASE_URL || 'http://localhost:8080';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });

for (const [screen, name] of screens) {
  await page.goto(`${base}/?nosplash=1&screen=${encodeURIComponent(screen)}`, {
    waitUntil: 'networkidle',
    timeout: 20000,
  });
  await page.waitForTimeout(1000);
  const data = await page.evaluate(() => {
    const app = document.getElementById('app');
    const appH = Math.round(app.scrollHeight * 2);
    const y = (el) => {
      if (!el) return null;
      const b = el.getBoundingClientRect();
      const appTop = app.getBoundingClientRect().top;
      return Math.round((b.top - appTop + (app.scrollTop || 0)) * 2);
    };
    const nav = app.querySelector('.bottom-nav, nav.bottom-nav, .app-bottom-nav');
    const upload = app.querySelector('.doctor-upload, .doctor-pick-upload, [class*="upload"]');
    const clauses = app.querySelector('.doctor-card--clauses, .doctor-clause-link');
    const cards = [...app.querySelectorAll('.doctor-card, .doctor-pick-card')].slice(0, 8);
    return {
      appH,
      navTop: y(nav),
      navBottom: nav ? y(nav) + Math.round(nav.getBoundingClientRect().height * 2) : null,
      uploadTop: y(upload),
      uploadBottom: upload ? y(upload) + Math.round(upload.getBoundingClientRect().height * 2) : null,
      clausesTop: y(clauses),
      clausesSectionTop: y(app.querySelector('.doctor-card--clauses')),
      cards: cards.map((el) => ({
        top: y(el),
        h: Math.round(el.getBoundingClientRect().height * 2),
      })),
    };
  });
  const bottomScroll = Math.max(0, data.appH - VIEWPORT_H);
  console.log(name, 'appH', data.appH, 'bottomScroll', bottomScroll);
  console.log('  nav', data.navTop, '-', data.navBottom);
  console.log('  upload', data.uploadTop, '-', data.uploadBottom);
  console.log('  cards', data.cards);
  console.log('  clausesSectionTop', data.clausesSectionTop, 'clausesTop', data.clausesTop);
}

await browser.close();
