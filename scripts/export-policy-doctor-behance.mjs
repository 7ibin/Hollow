/**
 * Quick export: policy doctor Behance frames only + regenerate gallery slide 07.
 * Usage: node scripts/export-policy-doctor-behance.mjs
 */
import { spawnSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { captureBehanceFramePng, forceBehanceFrameLayout } from './export-behance-frame.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'portfolio', 'behance', 'screens');
const baseUrl = process.env.BEHANCE_BASE_URL || 'http://localhost:8080';

const SHOTS = [
  { file: '10b-policy-pick', screen: 'policy-doctor-pick-behance', waitMs: 2600 },
  { file: '10d-policy-clauses', screen: 'policy-doctor-clauses-pick', waitMs: 2800 },
  { file: '10c-policy-clause', screen: 'policy-doctor-clause-behance', waitMs: 2600 },
];

const browser = await chromium.launch({
  headless: true,
  channel: process.env.PLAYWRIGHT_CHROME_CHANNEL || 'chrome',
});
const page = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
}).then((c) => c.newPage());

for (const shot of SHOTS) {
  const path = join(outDir, `${shot.file}.png`);
  process.stdout.write(`${shot.file} … `);
  try {
    await page.goto(`${baseUrl}/?nosplash=1&screen=${encodeURIComponent(shot.screen)}`, {
      waitUntil: 'networkidle',
      timeout: 90000,
    });
    await page.waitForTimeout(shot.waitMs);
    await forceBehanceFrameLayout(page, shot.screen);
    await page.waitForTimeout(450);
    await captureBehanceFramePng(page, path);
    console.log('ok');
  } catch (err) {
    console.log(`fail (${err.message})`);
    process.exitCode = 1;
  }
}
await browser.close();

if (!process.exitCode) {
  const slidesScript = join(root, 'portfolio', 'behance', 'generate-behance-slides.mjs');
  spawnSync(process.execPath, [slidesScript], { cwd: root, stdio: 'inherit' });
}
