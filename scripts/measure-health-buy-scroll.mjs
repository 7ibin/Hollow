import { chromium } from 'playwright';

const screens = [
  ['health-results-compare-exact', '01-cover-health-results-compare'],
  ['compare-health-all', '06-compare-table-health'],
  ['health-addons', '05b-health-addons'],
  ['health-pay', '08-health-checkout'],
];
const VIEWPORT_H = 1688;
const base = process.env.BEHANCE_BASE_URL || 'http://localhost:8080';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });

for (const [screen, name] of screens) {
  await page.goto(`${base}/?nosplash=1&screen=${encodeURIComponent(screen)}`, {
    waitUntil: 'networkidle',
    timeout: 30000,
  });
  await page.waitForTimeout(1500);
  const data = await page.evaluate(() => {
    const app = document.getElementById('app');
    const main = document.getElementById('mainContent');
    const appH = Math.round(app.scrollHeight * 2);
    const y = (el) => {
      if (!el) return null;
      const b = el.getBoundingClientRect();
      const appTop = app.getBoundingClientRect().top;
      return Math.round((b.top - appTop + (app.scrollTop || 0)) * 2);
    };
    const h = (el) => (el ? Math.round(el.getBoundingClientRect().height * 2) : null);
    const nav = app.querySelector('.bottom-nav, nav.bottom-nav, .app-bottom-nav');
    const bar = document.getElementById('compareBar');
    const primaryBtn = app.querySelector(
      '.compare-bar .btn--primary, #compareBtn, .compare-buy-row .btn--primary, .addons-bar .btn--primary, .checkout-pay .btn--primary, .pay-cta .btn--primary, .btn--block.btn--primary',
    );
    const sticky = app.querySelector('.compare-bar, .addons-sticky, .checkout-sticky, .pay-footer');
    return {
      appH,
      navTop: y(nav),
      navBottom: nav ? y(nav) + h(nav) : null,
      compareBarTop: y(bar),
      compareBarBottom: bar ? y(bar) + h(bar) : null,
      windowScroll: Math.round(window.scrollY * 2),
      mainScroll: main ? Math.round(main.scrollTop * 2) : 0,
      btnTop: y(primaryBtn),
      btnBottom: primaryBtn ? y(primaryBtn) + h(primaryBtn) : null,
      stickyTop: y(sticky),
      stickyBottom: sticky ? y(sticky) + h(sticky) : null,
    };
  });
  const bottomScroll = Math.max(0, data.appH - VIEWPORT_H);
  console.log(name, 'appH', data.appH, 'bottomScroll', bottomScroll);
  console.log('  compareBar', data.compareBarTop, '-', data.compareBarBottom, 'winScroll', data.windowScroll, 'mainScroll', data.mainScroll);
  console.log('  sticky', data.stickyTop, '-', data.stickyBottom);
  console.log('  btn', data.btnTop, '-', data.btnBottom);
  console.log('  nav', data.navTop, '-', data.navBottom);
  const actionBottom = 1721;
  if (name === '06-compare-table-health') {
    console.log('  suggestedCompareScroll', Math.max(0, actionBottom - VIEWPORT_H + 40));
  }
}

await browser.close();
