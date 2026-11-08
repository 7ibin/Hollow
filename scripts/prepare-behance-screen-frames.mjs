/**
 * Prepare home slices for Behance composites (3 balanced parts).
 * Run after behance:export (or automatically from generate-behance-slides).
 */
import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const screensDir = join(__dirname, '..', 'portfolio', 'behance', 'screens');

export const SHOT_W = 780;
/** One 390×844 viewport at 2× deviceScaleFactor. */
export const VIEWPORT_H = 1688;

/** 2× PNG Y: “Buy insurance” block; top of quick-action icon row (measured on #app home). */
export const HOME_SPLIT_1 = 1196;
export const HOME_SPLIT_2 = 1841;

/** Gallery scroll: frame 1 ends where buy grid ends; frame 2 starts on full quick icons. */
export const HOME_GALLERY_SCROLL_TOP = Math.max(0, HOME_SPLIT_2 - VIEWPORT_H);
export const HOME_GALLERY_SCROLL_MID = HOME_SPLIT_2;

/** Health buy gallery — compare Buy row ends ~1721px on 2× compare capture. */
export const HEALTH_BUY_COMPARE_SCROLL = 340;

export async function prepareHomeSplit() {
  const homePath = join(screensDir, '02-home.png');
  const { height, width } = await sharp(homePath).metadata();
  const y1 = HOME_SPLIT_1;
  const y2 = HOME_SPLIT_2;

  await sharp(homePath)
    .extract({ left: 0, top: 0, width, height: y1 })
    .png()
    .toFile(join(screensDir, '02-home-part1.png'));

  await sharp(homePath)
    .extract({ left: 0, top: y1, width, height: y2 - y1 })
    .png()
    .toFile(join(screensDir, '02-home-part2.png'));

  await sharp(homePath)
    .extract({ left: 0, top: y2, width, height: height - y2 })
    .png()
    .toFile(join(screensDir, '02-home-part3.png'));

  // Legacy names (part1/part3) for any old refs
  await sharp(join(screensDir, '02-home-part1.png'))
    .png()
    .toFile(join(screensDir, '02-home-top.png'));
  await sharp(join(screensDir, '02-home-part3.png'))
    .png()
    .toFile(join(screensDir, '02-home-bottom.png'));

  return { y1, y2, height };
}

if (process.argv[1] && process.argv[1].includes('prepare-behance-screen-frames')) {
  const { y1, y2, height } = await prepareHomeSplit();
  console.log(`Home 3-part: 0–${y1}, ${y1}–${y2}, ${y2}–${height}`);
}
