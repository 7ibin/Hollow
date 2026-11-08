/**
 * Renders portfolio/behance/behance-cover.png (2800×2190, Behance-safe landscape).
 * Usage: node portfolio/behance/generate-cover.mjs
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, 'cover-template.html');
const outMain = join(__dirname, 'behance-cover.png');
const outRetina = join(__dirname, 'behance-cover-1616x1264.png');

const W = 2800;
const H = 2190;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 2,
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2500);
await page.locator('#cover').screenshot({ path: outMain });

await browser.close();

await sharp(outMain)
  .resize(1616, 1264, { fit: 'fill' })
  .png({ compressionLevel: 9 })
  .toFile(outRetina);

writeFileSync(
  join(__dirname, 'cover-meta.json'),
  JSON.stringify(
    {
      uploadRecommended: 'behance-cover-1616x1264.png',
      fullRes: { file: 'behance-cover.png', width: W, height: H },
      retina: { file: 'behance-cover-1616x1264.png', width: 1616, height: 1264 },
      behanceMin: '808×632 px minimum; 1616×1264 recommended for retina',
    },
    null,
    2,
  ),
);
console.log('Wrote behance-cover.png + behance-cover-1616x1264.png (use retina file on Behance)');
