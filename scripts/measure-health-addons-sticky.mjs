import { chromium } from 'playwright';

const VIEWPORT_H = 1688;
const base = process.env.BEHANCE_BASE_URL || 'http://localhost:8080';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await page.goto(`${base}/?nosplash=1&screen=health-addons`, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1500);
const data = await page.evaluate(() => {
  const app = document.getElementById('app');
  const y = (el) => {
    if (!el) return null;
    const b = el.getBoundingClientRect();
    const t = app.getBoundingClientRect().top;
    return Math.round((b.top - t + (app.scrollTop || 0)) * 2);
  };
  const h = (el) => (el ? Math.round(el.getBoundingClientRect().height * 2) : 0);
  const sticky = document.querySelector('.sticky-bar');
  const continueBtn = [...document.querySelectorAll('.btn--primary')].find((b) =>
    /continue|review/i.test(b.textContent || ''),
  );
  return {
    appH: Math.round(app.scrollHeight * 2),
    stickyTop: y(sticky),
    stickyBottom: sticky ? y(sticky) + h(sticky) : null,
    continueTop: y(continueBtn),
    continueBottom: continueBtn ? y(continueBtn) + h(continueBtn) : null,
  };
});
console.log(data, 'bottomScroll', Math.max(0, data.appH - VIEWPORT_H));
console.log('scroll for sticky bottom', data.stickyBottom ? Math.max(0, data.stickyBottom - VIEWPORT_H) : 0);
await browser.close();
