/**
 * Batch Figma html-to-design capture helper.
 * Agent: for each screen, call generate_figma_design (no captureId), then open buildUrl(screen, captureId) in browser and poll.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(readFileSync(join(__dirname, 'figma-capture-screens.json'), 'utf8'));

const FILE_KEY = config.fileKey;
const SESSION_ID = process.env.FIGMA_SESSION_ID || 'ce58e0ad-65ee-42d9-abd5-5246412ddb7a';
const PROGRESS_PATH = join(__dirname, 'figma-capture-progress.json');

const CAPTURE_SELECTOR = config.captureSelector || '#app';
const CAPTURE_WIDTH = config.viewport?.width ?? 390;

export function buildCaptureUrl(screen, captureId, delayMs = 3500) {
  const endpoint = encodeURIComponent(
    `https://mcp.figma.com/mcp/capture/${captureId}/submit?bindVariables=true`,
  );
  const captureTarget = config.screenSelectors?.[screen] || CAPTURE_SELECTOR;
  const selector = encodeURIComponent(captureTarget);
  const q = new URLSearchParams({ nosplash: '1', screen });
  return `${config.baseUrl}/?${q}#figmacapture=${captureId}&figmaendpoint=${endpoint}&figmadelay=${delayMs}&figmaselector=${selector}`;
}

export { CAPTURE_SELECTOR, CAPTURE_WIDTH };

export function loadProgress() {
  if (!existsSync(PROGRESS_PATH)) {
    return { fileKey: FILE_KEY, sessionId: SESSION_ID, completed: {}, pending: {} };
  }
  return JSON.parse(readFileSync(PROGRESS_PATH, 'utf8'));
}

export function saveProgress(progress) {
  writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
}

export function screensToCapture() {
  const done = new Set(Object.keys(loadProgress().completed));
  return config.screens.filter((s) => !done.has(s));
}

if (process.argv[1] && process.argv[1].endsWith('batch-figma-capture.mjs')) {
  const cmd = process.argv[2];
  if (cmd === 'list') {
    const remaining = screensToCapture();
    console.log(JSON.stringify({ remaining, count: remaining.length }, null, 2));
  } else if (cmd === 'mark' && process.argv[3] && process.argv[4]) {
    const p = loadProgress();
    p.completed[process.argv[3]] = process.argv[4];
    delete p.pending[process.argv[3]];
    saveProgress(p);
    console.log('ok');
  } else if (cmd === 'url' && process.argv[3] && process.argv[4]) {
    console.log(buildCaptureUrl(process.argv[3], process.argv[4]));
  } else {
    console.log(`Usage:
  node scripts/batch-figma-capture.mjs list
  node scripts/batch-figma-capture.mjs url <screen> <captureId>
  node scripts/batch-figma-capture.mjs mark <screen> <figmaNodeUrl>`);
  }
}
