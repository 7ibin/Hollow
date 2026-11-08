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

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'portfolio', 'behance', 'screens');
const baseUrl = process.env.BEHANCE_BASE_URL || 'http://localhost:8080';

/** Order matches BEHANCE_PROJECT.md gallery slides */
const SHOTS = [
  { file: '01-cover-health-results-compare', screen: 'health-results-compare-exact', waitMs: 2500 },
  { file: '02-home', screen: 'home', waitMs: 1200 },
  { file: '03-health-members', screen: 'health-1', waitMs: 1500 },
  { file: '04-health-medical', screen: 'health-2', waitMs: 1500 },
  { file: '05-health-plan-results', screen: 'health-results', waitMs: 2000 },
  { file: '06-compare-table-health', screen: 'compare-health-all', waitMs: 2500 },
  { file: '07-motor-results', screen: 'motor-results', waitMs: 2000 },
  { file: '08-health-checkout', screen: 'health-pay', waitMs: 1500 },
  { file: '09-signup', screen: 'signup', waitMs: 1200 },
  { file: '10-policy-doctor', screen: 'policy-doctor', waitMs: 1500 },
  { file: '11-claim-start', screen: 'claim-start', waitMs: 1500 },
  { file: '12-cover-guide', screen: 'cover-guide', waitMs: 1500 },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
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
    const app = page.locator('#app');
    await app.waitFor({ state: 'visible', timeout: 15000 });
    await app.screenshot({ path });
    manifest.push({ ...shot, url, path: `screens/${shot.file}.png`, ok: true });
    console.log('ok');
  } catch (err) {
    manifest.push({ ...shot, url, ok: false, error: err.message });
    console.log(`fail (${err.message})`);
  }
}

await browser.close();
writeFileSync(join(root, 'portfolio', 'behance', 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`\nWrote ${manifest.filter((m) => m.ok).length}/${SHOTS.length} PNGs to portfolio/behance/screens/`);
