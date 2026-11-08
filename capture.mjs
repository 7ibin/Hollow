import { chromium } from 'playwright';
import fs from 'fs';

const BASE = 'https://hollow-flax.vercel.app/';
const OUT = 'behance-screens';
const screens = [
  'home','explore','signup','signup-otp','signup-success',
  'health-1','health-results','compare-health-all','health-addons','health-pay','success',
  'motor-results','term-results','home-results',
  'policies','policy-detail','policy-doctor','claim-start','claim-detail','help',
  'ai-panel','expert-modal','health-results-error'
];
const themes = ['light','dark'];

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const page = await ctx.newPage();

for (const theme of themes) {
  for (const s of screens) {
    const url = `${BASE}?nosplash=1&screen=${s}${theme === 'dark' ? '&theme=dark' : ''}`;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${OUT}/${theme}-${s}.png` });
    console.log('saved', theme, s);
  }
}
await browser.close();