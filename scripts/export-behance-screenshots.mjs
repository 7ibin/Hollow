/**
 * Export mobile screenshots for Behance portfolio upload.
 * Requires: npm i playwright (dev) and serve.ps1 on port 8080.
 *
 * Usage: node scripts/export-behance-screenshots.mjs
 */
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { prepareHomeSplit } from './prepare-behance-screen-frames.mjs';
import {
  BEHANCE_FRAME_SCREENS,
  captureBehanceFramePng,
  forceBehanceFrameLayout,
} from './export-behance-frame.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'portfolio', 'behance', 'screens');
const baseUrl = process.env.BEHANCE_BASE_URL || 'http://localhost:8080';

async function captureAppPng(page, shot, filePath) {
  const app = page.locator('#app');
  await app.waitFor({ state: 'visible', timeout: 15000 });
  if (BEHANCE_FRAME_SCREENS.has(shot.screen)) {
    await forceBehanceFrameLayout(page, shot.screen);
    await page.waitForTimeout(450);
    await captureBehanceFramePng(page, filePath);
  } else {
    await app.screenshot({ path: filePath });
  }
}

/** Order matches BEHANCE_PROJECT.md gallery slides */
const SHOTS = [
  { file: '01-cover-health-results-compare', screen: 'health-results-compare-exact', waitMs: 2500 },
  { file: '02-home', screen: 'home', waitMs: 1200 },
  { file: '02-home-top', screen: 'home-behance-top', waitMs: 2200 },
  { file: '02-home-mid', screen: 'home-behance-mid', waitMs: 2200 },
  { file: '02-home-bottom', screen: 'home-behance-bottom', waitMs: 2200 },
  { file: '03-health-members', screen: 'health-1', waitMs: 1500 },
  { file: '04-health-medical', screen: 'health-2', waitMs: 1500 },
  { file: '03b-health-sum-insured', screen: 'health-3', waitMs: 1500 },
  { file: '05-health-plan-results', screen: 'health-results', waitMs: 2000 },
  { file: '05b-health-addons', screen: 'health-addons', waitMs: 1500 },
  { file: '06-compare-table-health', screen: 'compare-health-all', waitMs: 2500 },
  { file: '07a-motor-quote', screen: 'motor-1', waitMs: 1500 },
  { file: '07-motor-results', screen: 'motor-results', waitMs: 2000 },
  { file: '07b-motor-pay', screen: 'motor-pay', waitMs: 1500 },
  { file: '08-health-checkout', screen: 'health-pay', waitMs: 1500 },
  { file: '09-signup', screen: 'signup', waitMs: 1200 },
  { file: '09-signup-otp', screen: 'signup-otp', waitMs: 1200 },
  { file: '09-signup-profile', screen: 'signup-profile', waitMs: 1200 },
  { file: '09-signup-success', screen: 'signup-success', waitMs: 1200 },
  { file: '10-policy-doctor', screen: 'policy-doctor', waitMs: 1500 },
  { file: '10b-policy-pick', screen: 'policy-doctor-pick-behance', waitMs: 2200 },
  { file: '10d-policy-clauses', screen: 'policy-doctor-clauses-pick', waitMs: 2400 },
  { file: '10c-policy-clause', screen: 'policy-doctor-clause-behance', waitMs: 2200 },
  { file: '11-claim-start', screen: 'claim-start', waitMs: 1500 },
  { file: '11b-claim-type', screen: 'claim-start-type', waitMs: 1500 },
  { file: '11c-claim-docs', screen: 'claim-start-docs', waitMs: 1500 },
  { file: '12-cover-guide', screen: 'cover-guide', waitMs: 1500 },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  channel: process.env.PLAYWRIGHT_CHROME_CHANNEL || 'chrome',
});
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();
const manifest = [];

for (const shot of SHOTS) {
  const url = `${baseUrl}/?nosplash=1&screen=${encodeURIComponent(shot.screen)}`;
  const path = join(outDir, `${shot.file}.png`);
  process.stdout.write(`Capture ${shot.file} … `);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForTimeout(shot.waitMs);
    await captureAppPng(page, shot, path);
    manifest.push({ ...shot, url, path: `screens/${shot.file}.png`, ok: true });
    console.log('ok');
  } catch (err) {
    manifest.push({ ...shot, url, ok: false, error: err.message });
    console.log(`fail (${err.message})`);
  }
}

await browser.close();

try {
  await prepareHomeSplit();
  console.log('Home split: 02-home-top.png, 02-home-bottom.png');
} catch (err) {
  console.warn('Home split skipped:', err.message);
}

writeFileSync(join(root, 'portfolio', 'behance', 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`\nWrote ${manifest.filter((m) => m.ok).length}/${SHOTS.length} PNGs to portfolio/behance/screens/`);
