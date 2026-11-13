/* Hollow icon API — Material Symbols Rounded (see index.html font link). */

const MATERIAL_ICONS = {
  health: 'health_and_safety',
  term: 'shield_with_heart',
  motor: 'directions_car',
  bike: 'two_wheeler',
  home: 'home',
  renew: 'autorenew',
  policy: 'description',
  claim: 'assignment_turned_in',
  advisor: 'support_agent',
  compare: 'compare_arrows',
  award: 'emoji_events',
  shield: 'verified_user',
  zap: 'bolt',
  search: 'search',
  chat: 'chat_bubble',
  folder: 'folder_open',
  book: 'menu_book',
  doctor: 'article',
  user: 'person',
  family: 'family_restroom',
  senior: 'elderly',
  money: 'currency_rupee',
  lock: 'lock',
  sparkles: 'auto_awesome',
  bank: 'account_balance',
  card: 'credit_card',
  calendar: 'event',
  smartphone: 'smartphone',
  wallet: 'account_balance_wallet',
  repeat: 'sync',
  hospital: 'local_hospital',
  mapPin: 'location_on',
  file: 'article',
  port: 'swap_horiz',
  grievance: 'gavel',
  support: 'chat_bubble',
  wrench: 'car_repair',
  back: 'arrow_back',
  chevronRight: 'chevron_right',
  chevronDown: 'expand_more',
  forward: 'arrow_forward',
  phone: 'call',
  send: 'send',
  navHome: 'cottage',
  navExplore: 'travel_explore',
  navPolicies: 'policy',
  navClaims: 'receipt_long',
  navHelp: 'contact_support',
  check: 'check',
  logout: 'logout',
  notifications: 'notifications',
  settings: 'settings',
  campaign: 'campaign',
  info: 'info',
  mail: 'mail',
  edit: 'edit',
};

const ICON_OUTLINE = new Set([
  'compare', 'search', 'chat', 'grievance', 'navHelp',
  'navHome', 'navExplore', 'navPolicies', 'navClaims',
  'back', 'chevronDown',
]);

const ICON_SIZE = Object.freeze({ sm: 16, md: 20, lg: 24, xl: 32, x2: 48 });
window.ICON_SIZE = ICON_SIZE;

const PRODUCT_GRADIENTS = {
  health: 'linear-gradient(145deg, #ff6b6b 0%, #e63946 55%, #c1121f 100%)',
  term: 'linear-gradient(145deg, #4a7fd4 0%, #1e5bb8 55%, #0d3d7a 100%)',
  motor: 'linear-gradient(145deg, #2dd4bf 0%, #0d9488 55%, #0f766e 100%)',
  bike: 'linear-gradient(145deg, #5eead4 0%, #14b8a6 55%, #0d9488 100%)',
  home: 'linear-gradient(145deg, #a78bfa 0%, #7c3aed 55%, #5b21b6 100%)',
};

function resolveIconSize(size) {
  if (size == null) return ICON_SIZE.lg;
  if (typeof size === 'number') return size;
  return ICON_SIZE[size] ?? ICON_SIZE.lg;
}

function icon(name, size = ICON_SIZE.lg, className = 'hollow-icon') {
  const glyph = MATERIAL_ICONS[name];
  if (!glyph) {
    console.warn(`[Hollow icons] Unknown icon name: ${name}`);
    return '';
  }
  const px = resolveIconSize(size);
  const tone = ICON_OUTLINE.has(name) ? 'hollow-icon--outline' : 'hollow-icon--filled';
  const extra = className.includes('hollow-icon--outline') || className.includes('hollow-icon--filled') ? '' : ` ${tone}`;
  return `<span class="${className}${extra}" style="font-size:${px}px" aria-hidden="true">${glyph}</span>`;
}

function iconProduct(name, color, size = ICON_SIZE.lg) {
  const bg = PRODUCT_GRADIENTS[name] || `linear-gradient(145deg, ${color} 0%, ${color}cc 100%)`;
  return `<span class="icon-product icon-product--${name}" style="background:${bg}">${icon(name, size, 'hollow-icon hollow-icon--product')}</span>`;
}

function iconBox(name, color, size = ICON_SIZE.lg, boxClass = 'icon-box') {
  const bg = `color-mix(in srgb, ${color} 10%, transparent)`;
  return `<span class="${boxClass}" style="background:${bg};color:${color}">${icon(name, size)}</span>`;
}

function iconBack(size = ICON_SIZE.lg) {
  return icon('back', size, 'hollow-icon hollow-icon--back');
}

function successBadge() {
  return `<div class="success-badge" aria-hidden="true">
    <div class="success-badge__ring"></div>
    <div class="success-badge__ring success-badge__ring--delay"></div>
    <div class="success-badge__circle">
      ${icon('check', ICON_SIZE.x2, 'hollow-icon success-badge__glyph')}
    </div>
  </div>`;
}

const NAV_GLYPH_SVGS = {
  navHome: `<svg class="bottom-nav__glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path class="bottom-nav__path bottom-nav__path--solid" d="M5 11.2 12 5.5l7 5.7V19a1 1 0 0 1-1 1h-4.5v-5.5H10.5V20H6a1 1 0 0 1-1-1v-7.8Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
  </svg>`,
  navExplore: `<svg class="bottom-nav__glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="bottom-nav__path bottom-nav__path--solid" cx="10.5" cy="10.5" r="6.25" stroke="currentColor" stroke-width="1.75"/>
    <path class="bottom-nav__path bottom-nav__path--line" d="M15.4 15.4 20 20" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
  </svg>`,
  navPolicies: `<svg class="bottom-nav__glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path class="bottom-nav__path bottom-nav__path--solid" d="M12 3 5 6v6c0 4.1 3 7.9 7 9 4-1.1 7-4.9 7-9V6l-7-3Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
  </svg>`,
  navClaims: `<svg class="bottom-nav__glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path class="bottom-nav__path bottom-nav__path--solid" d="M9 4h6v3H9V4ZM8 7h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
    <path class="bottom-nav__path bottom-nav__path--line" d="M10 11h4M10 14h4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
  </svg>`,
  navHelp: `<svg class="bottom-nav__glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="bottom-nav__path bottom-nav__path--solid" cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.75"/>
    <path class="bottom-nav__path bottom-nav__path--line" d="M9.6 9.25A2.4 2.4 0 0 1 14.2 10c0 1.5-2.2 2-2.2 3.6v.15M12 16.75h.01" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
  </svg>`,
};

function navIcon(name) {
  return NAV_GLYPH_SVGS[name] || '';
}

function iconHeroRenewChip() {
  return `<svg class="home-hero__chip-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="18" height="18">
    <path d="M9.5 5.5 7.25 7.75M9.5 5.5H13M9.5 5.5V9" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.5 18.5l2.25-2.25M14.5 18.5H11M14.5 18.5v-3.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 10.5a5 5 0 0 1 7.8-1.2M16.5 13.5a5 5 0 0 1-7.8 1.2" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
  </svg>`;
}

function iconHeroPolicyChip() {
  return `<svg class="home-hero__chip-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="18" height="18">
    <path d="M12 3.25 5.75 5.75v5.85c0 3.55 2.7 6.85 6.25 7.9 3.55-1.05 6.25-4.35 6.25-7.9V5.75L12 3.25Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
  </svg>`;
}

function iconHeroQuoteGo() {
  /* Single bold chevron — reads cleaner in the small hero chip (PB / ID default) */
  return `<svg class="quote-card__btn-go-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M9 7.25 15.25 12 9 16.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function hydrateShellIcons() {
  const map = {
    callExpert: 'phone',
    aiFab: 'sparkles',
    aiSend: 'send',
  };
  Object.entries(map).forEach(([id, name]) => {
    const el = document.getElementById(id);
    if (!el) return;
    const size = id === 'callExpert' ? ICON_SIZE.sm : id === 'aiSend' ? ICON_SIZE.md : ICON_SIZE.lg;
    el.insertAdjacentHTML('afterbegin', icon(name, size, 'hollow-icon hollow-icon--shell'));
  });

  const navMap = {
    home: 'navHome',
    explore: 'navExplore',
    policies: 'navPolicies',
    claims: 'navClaims',
    help: 'navHelp',
  };
  document.querySelectorAll('.bottom-nav__item').forEach((btn) => {
    const key = navMap[btn.dataset.view];
    if (!key) return;
    const slot = btn.querySelector('.bottom-nav__icon-slot');
    const target = slot || btn.querySelector('.bottom-nav__icon-wrap') || btn;
    const existing = target.querySelector('.hollow-icon, svg');
    if (existing) existing.remove();
    const html = navIcon(key);
    if (slot) slot.innerHTML = html;
    else target.insertAdjacentHTML('afterbegin', html);
  });
}

document.addEventListener('DOMContentLoaded', hydrateShellIcons);
