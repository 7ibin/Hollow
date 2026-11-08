export const BEHANCE_FRAME_H = 844;

export const BEHANCE_FRAME_SCREENS = new Set([
  'home-behance-top',
  'home-behance-mid',
  'home-behance-bottom',
  'policy-doctor-pick-behance',
  'policy-doctor-clauses-pick',
  'policy-doctor-clause-behance',
  'health-results-compare-exact',
]);

export async function forceBehanceFrameLayout(page, screen) {
  await page.evaluate((name) => {
    const app = document.getElementById('app');
    const main = document.getElementById('mainContent');
    const nav = document.getElementById('bottomNav');
    const header = document.querySelector('.site-header');
    if (!app || !main) return;

    document.body.style.height = '844px';
    document.body.style.maxHeight = '844px';
    document.body.style.overflow = 'hidden';
    app.style.width = '390px';
    app.style.height = '844px';
    app.style.maxHeight = '844px';
    app.style.minHeight = '844px';
    app.style.overflow = 'hidden';
    app.style.display = 'flex';
    app.style.flexDirection = 'column';
    app.style.boxSizing = 'border-box';

    if (header) header.style.flexShrink = '0';
    const headerH = header?.getBoundingClientRect().height || 0;
    const navH = nav?.getBoundingClientRect().height || 56;
    main.style.flex = '1 1 auto';
    main.style.minHeight = '0';
    main.style.maxHeight = `${Math.max(200, 844 - headerH - navH)}px`;
    main.style.overflowY = 'auto';
    main.style.overflowX = 'hidden';

    if (nav) {
      nav.style.position = 'relative';
      nav.style.flexShrink = '0';
      nav.style.marginTop = 'auto';
      nav.style.transform = 'none';
      nav.style.width = '100%';
      nav.style.maxWidth = '390px';
      nav.style.left = 'auto';
      nav.style.bottom = 'auto';
    }

    const scrollMainTo = (anchor, pad) => {
      if (!anchor) return;
      const top = anchor.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop;
      main.scrollTop = Math.max(0, top - pad);
    };

    if (name === 'policy-doctor-clauses-pick') {
      scrollMainTo(
        document.querySelector('.doctor-alert') || document.querySelector('.doctor-card--clauses'),
        108,
      );
    } else if (name === 'home-behance-mid') {
      scrollMainTo(
        document.querySelector('.customer-tools') || document.querySelector('.quick-actions--v2'),
        200,
      );
    } else if (name === 'home-behance-bottom') {
      main.scrollTop = Math.max(0, main.scrollHeight - main.clientHeight);
    } else {
      main.scrollTop = 0;
    }
  }, screen);
}

export async function captureBehanceFramePng(page, filePath) {
  const app = page.locator('#app');
  await app.waitFor({ state: 'visible', timeout: 15000 });
  const box = await app.boundingBox();
  if (!box) throw new Error('#app has no bounding box');
  await page.screenshot({
    path: filePath,
    clip: { x: box.x, y: box.y, width: 390, height: BEHANCE_FRAME_H },
  });
}
