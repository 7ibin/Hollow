/* Hollow — India insurance aggregator */

/** Customer helpline — change this before launch */
const PHONE_NUMBER = '1800-123-4567';

function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function chipBtnContent(line, sub = '') {
  if (sub) {
    return `<span class="chip__line">${line}</span><span class="chip__sub">${sub}</span>`;
  }
  return `<span class="chip__line">${line}</span>`;
}

/** Segmented choice row (2–4 equal options). Use variant `wrap` for many / long labels. */
function quoteChoiceGroup(buttonsHtml, variant = 'segmented') {
  if (variant === 'wrap') {
    return `<div class="chip-group chip-group--wrap chip-group--choice">${buttonsHtml}</div>`;
  }
  if (variant === 'multi') {
    return `<div class="chip-group chip-group--segmented chip-group--prominent chip-group--multi">${buttonsHtml}</div>`;
  }
  return `<div class="chip-group chip-group--segmented chip-group--prominent">${buttonsHtml}</div>`;
}

function quoteContinueBtn(label, sub = '', action = 'wizard-next', extraAttrs = '') {
  const subHtml = sub ? `<span class="quote-form__continue-sub">${sub}</span>` : '';
  return `<button type="button" class="btn btn--primary btn--block btn--lg quote-form__continue" data-action="${action}" ${extraAttrs}>
    <span class="quote-form__continue-label">${label}</span>${subHtml}
  </button>`;
}

const i18n = {
  en: {
    'nav.home': 'Home', 'nav.explore': 'Explore', 'nav.policies': 'Policies', 'nav.claims': 'Claims', 'nav.help': 'Help',
    'ai.title': 'Ask Hollow',
    'ai.subtitle': 'Find the right policy for you',
    'ai.subtitleFinder': 'Pick a product to get a personalised match',
    'ai.placeholder': 'Ask about plans or coverage…',
    'ai.searchPrompt': 'Ask AI — find policy, compare, explain, claim, renew',
    'ai.powered': 'AI-powered plan guidance',
    'pay.title': 'Choose payment method', 'pay.upi': 'UPI', 'pay.card': 'Card', 'pay.netbank': 'Net banking',
    'pay.emi': 'EMI', 'pay.wallet': 'Wallet', 'pay.enach': 'Auto-pay',
    'btn.pay': 'Pay now',
    'btn.viewCard': 'View health card',
    'btn.viewPolicy': 'View policy',
    'btn.viewPolicyMotor': 'View policy & RC',
    'auth.login': 'Login', 'auth.account': 'Account', 'auth.loginAria': 'Login',
    'auth.loggedInAria': '{name} — My account',
    'header.expertCall': 'Call expert — {phone}',
    'header.expert': 'Expert',
    'checkout.mobileLabel': 'Mobile number for policy & OTP',
    'checkout.mobileHint': 'Required to pay — browse quotes without logging in',
    'signup.loginTab': 'Login', 'signup.signupTab': 'Sign up',
    'signup.heroTitle': 'Login or Sign up',
    'signup.heroSub': 'Browse quotes freely. Sign in with your mobile when you pay.',
    'signup.phoneLabel': 'Enter mobile number',
    'signup.getOtp': 'Get OTP',
    'signup.continueWhatsapp': 'Get OTP on WhatsApp',
    'signup.termsLine': 'By continuing, you agree to our Terms of Use & Privacy Policy',
    'signup.verifyTitle': 'Enter OTP',
    'signup.verifySub': 'We sent a 6-digit code to',
    'signup.verify': 'Verify & proceed',
    'signup.resend': 'Resend OTP',
    'signup.resendIn': 'Resend in',
    'signup.changePhone': 'Edit number',
    'signup.profileTitle': 'Almost there!',
    'signup.profileSub': 'Tell us your name to personalise quotes',
    'signup.profileCta': 'Start comparing quotes',
    'signup.demoOtp': 'Your OTP:',
    'signup.trust1': 'Compare plans', 'signup.trust2': '256-bit secure', 'signup.trust3': 'No spam calls',
    'account.title': 'My account', 'account.logout': 'Log out', 'account.phone': 'Mobile', 'account.policies': 'My policies',
    'account.email': 'Email', 'account.emailHint': 'Policy PDF, renewal & payment receipts', 'account.saveEmail': 'Save email',
    'account.emailSaved': 'Email updated', 'account.emailInvalid': 'Enter a valid email address',
    'signup.emailLabel': 'Email (optional)', 'signup.emailPlaceholder': 'you@email.com',
    'account.settings': 'App settings',
    'account.renewalReminders': 'Renewal reminders',
    'account.renewalRemindersHint': 'SMS & push before policy expiry',
    'account.offerAlerts': 'Offers & tips',
    'account.offerAlertsHint': 'Deals, coupons and plan suggestions',
    'account.whatsapp': 'WhatsApp updates',
    'account.whatsappHint': 'Policy docs, OTP and renewal nudges',
    'account.sms': 'SMS alerts',
    'account.smsHint': 'Payment and claim status',
    'account.language': 'App language',
    'account.version': 'App version',
    'account.privacy': 'Privacy policy',
    'splash.tagline': 'Smart cover for every family',
    'product.health': 'Health',
    'product.motor': 'Motor',
    'product.term': 'Term Life',
    'product.home': 'Home',
    'explore.title': 'Insurance products',
    'explore.subtitle': 'Health, Motor, Term Life and Home — compare plans in one place',
    'explore.buy': 'Compare & buy',
    'explore.categories': 'Popular categories',
    'explore.family': 'Family floater',
    'explore.senior': 'Senior citizen',
    'explore.car': 'Car insurance',
    'explore.bike': 'Bike insurance',
    'explore.termCr': '₹1 Cr term plan',
    'explore.homeStructure': 'Home structure',
    'expert.title': 'Talk to an insurance expert',
    'expert.subtitle': 'Free, unbiased advice — no spam calls',
    'expert.nameLabel': 'Your name',
    'expert.phoneLabel': 'Mobile number',
    'expert.productLabel': 'Looking for',
    'expert.productHealth': 'Health insurance',
    'expert.productMotor': 'Motor insurance',
    'expert.productTerm': 'Term Life insurance',
    'expert.productHome': 'Home insurance',
    'expert.cta': 'Request callback',
    'expert.ctaNow': 'Request callback now',
    'expert.consentHint': 'We use your number only for this one call. See our Privacy Policy in Account settings.',
    'expert.submitError': 'Something went wrong. Check the fields below and try again.',
    'expert.close': 'Close',
    'expert.closeAria': 'Close expert callback form',
    'expert.namePlaceholder': 'e.g. Priya Sharma',
    'expert.phonePlaceholder': '10-digit mobile number',
    'expert.timeLabel': 'Preferred call time',
    'expert.timeNow': 'Now',
    'expert.timeMorning': 'Morning (9am–12pm)',
    'expert.timeAfternoon': 'Afternoon (12pm–5pm)',
    'expert.timeEvening': 'Evening (5pm–8pm)',
    'expert.consent': 'I agree to be called once on this number by a Hollow expert. No spam, no resale of my number.',
    'expert.nameRequired': 'Please enter your name',
    'expert.phoneRequired': 'Please enter your mobile number',
    'expert.phoneInvalid': 'Enter a valid 10-digit Indian mobile number',
    'expert.consentRequired': 'Please agree so we can call you once',
    'expert.successTitle': 'Request received',
    'expert.successSub': "We'll call you as soon as an expert is available (9am–8pm IST).",
    'expert.successSubSlot': "We'll call you in the {slot} window",
    'ai.suggest.health': 'Health insurance',
    'ai.suggest.motor': 'Motor insurance',
    'ai.suggest.term': 'Term life',
    'ai.suggest.home': 'Home insurance',
    'ai.suggest.finderHealth': 'Health insurance',
    'ai.suggest.finderMotor': 'Motor insurance',
    'ai.suggest.finderTerm': 'Term Life',
    'ai.suggest.finderHome': 'Home insurance',
    'ai.disclaimer': 'General guidance only — confirm in your policy or with an expert.',
    'ai.welcomeTitle': 'How can Hollow help?',
    'ai.welcomeHint': 'Plain-language answers on plans, coverage, claims, and renewals.',
    'ai.expertHandoff': 'Talk to an expert',
    'ai.sourceLabel': 'Based on',
    'ai.cannotConfirm': 'I can\'t confirm this from policy documents available in the app. Please check your policy wording or talk to an expert.',
    'ai.quickTopics': 'Try asking',
    'ai.pickProduct': 'Choose a product',
    'plan.plainSummary': 'Plain-language summary',
    'plan.notCovered': "What's NOT covered",
    'plan.waiting': 'Waiting periods',
    'plan.perMonth': '/mo',
    'compare.limit': 'You can compare up to 3 plans. Remove one to add another.',
    'compare.countZero': '0 plans selected',
    'compare.countOne': '{n} plan selected',
    'compare.countMany': '{n} plans selected',
    'compare.now': 'Compare now',
    'compare.hideEqual': 'Show only rows that differ',
    'compare.viewLabel': 'Comparison view',
    'compare.viewAll': 'All details',
    'compare.viewDiff': 'Key differences',
    'compare.legendShort': 'Bold values differ · Green = strongest in that row',
    'compare.legendDiffMode': 'Only rows that differ between plans',
    'compare.notCovered': 'Not covered',
    'compare.indicative': 'Premiums are indicative for your quote inputs — final price is on the insurer checkout.',
    'compare.groupPremium': 'Premium',
    'compare.tableFeatureCol': 'Feature',
    'compare.groupCoverage': 'Coverage & network',
    'compare.groupBenefits': 'Benefits & limits',
    'compare.monthly': 'Premium/mo',
    'footer.tagline': 'Compare & buy insurance online',
    'footer.colProducts': 'Insurance',
    'footer.colSupport': 'Support',
    'footer.about': 'About us',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of use',
    'footer.helplineLabel': '24×7 helpline',
    'footer.grievance': 'Grievance',
    'footer.copyright': '© 2026 Hollow Insurance Services Pvt. Ltd. · GST as applicable',
    'results.loading': 'Finding plans...',
    'results.error.health': 'We could not load health plans right now.',
    'results.error.motor': 'We could not load motor quotes right now.',
    'results.error.term': 'We could not load term plans right now.',
    'results.error.home': 'We could not load home plans right now.',
    'results.retry': 'Try again',
    'footer.disclaimer': 'Insurance is the subject matter of solicitation.',
    'footer.copyrightShort': '© 2026 Hollow Insurance Services Pvt. Ltd.',
    'home.heroTitle': 'Find the right insurance, faster',
    'home.heroSub': 'Compare Health, Motor, Term Life & Home without the jargon — AI guidance and licensed experts when you need help.',
    'home.heroCta': 'Find the Right Insurance',
    'home.heroCtaVisible': 'Find the right insurance',
    'home.quoteLabel': 'What do you need cover for?',
    'home.supportTitle': 'Need help choosing?',
    'home.supportAi': 'Ask Hollow AI',
    'home.supportExpert': 'Talk to an expert',
    'home.whyTitle': 'Why people use Hollow',
    'home.why1.title': 'Compare in one place',
    'home.why1.desc': 'See plan options for four products without jumping between sites.',
    'home.why2.title': 'Plain-language guidance',
    'home.why2.desc': 'AI and cover guides explain terms before you commit.',
    'home.why3.title': 'Support after you buy',
    'home.why3.desc': 'Keep policies, renewals and claims in one app.',
    'home.keyFeaturesTitle': 'After you buy',
    'home.keyFeaturesIntro': 'Understand your policy, motor help, and cashless hospitals',
    'home.keyFeaturesIntroOpen': 'Understand your policy, motor help, and cashless hospitals',
    'guide.title': 'How much cover do you need?',
    'guide.subtitle': '4 quick questions — no jargon',
    'guide.heroCta': 'Find the right cover amount',
    'guide.heroHint': '4 quick questions · health or term · ~2 min',
    'guide.health': 'Health insurance',
    'guide.term': 'Term life insurance',
    'guide.pick': 'Choose a guide',
    'guide.progress': 'Question {n} of 4',
    'guide.continue': 'Continue',
    'guide.seePlans': 'See plans for this cover',
    'guide.health.age': 'Your age',
    'guide.health.city': 'City type',
    'guide.health.city.metro': 'Metro (e.g. Delhi, Mumbai)',
    'guide.health.city.tier2': 'Tier 2 city',
    'guide.health.city.tier3': 'Town / Tier 3',
    'guide.health.family': 'Family members to cover',
    'guide.health.family.1': 'Just me',
    'guide.health.family.2': '2 people',
    'guide.health.family.3': '3 people',
    'guide.health.family.4plus': '4 or more',
    'guide.health.conditions': 'Any existing health conditions?',
    'guide.health.conditions.hint': 'Diabetes, BP, etc. — helps us suggest the right sum insured',
    'guide.yes': 'Yes',
    'guide.no': 'No',
    'guide.result.health': 'Suggested health cover',
    'guide.result.term': 'Suggested life cover',
    'guide.term.age': 'Your age',
    'term.agePlaceholder': '32',
    'term.ageGuide': 'Enter your current age.',
    'term.ageHintEmpty': 'Must be 18–65 years',
    'term.ageHintPartial': 'Use a complete age from 18 to 65.',
    'term.ageHintOk': 'We’ll show plans for this age.',
    'term.ageYears': 'Years',
    'home.pincodePlaceholder': '110001',
    'home.pincodeGuide': 'Enter your property pincode.',
    'home.pincodeHintEmpty': 'Must be 6 digits',
    'home.pincodeHintPartial': 'Enter all 6 digits',
    'home.pincodeHintOk': 'We’ll match plans for this area.',
    'home.pincodeSuffix': 'PIN',
    'home.areaPlaceholder': '1200',
    'home.areaGuide': 'Total carpet + wall area you want covered.',
    'home.areaHintEmpty': 'Required — 100 to 50,000',
    'home.areaHintPartial': 'Enter area between 100 and 50,000 sq ft',
    'home.areaHintOk': 'Used to size structure cover.',
    'home.areaSuffix': 'Sq ft',
    'home.structurePlaceholder': '50',
    'home.structureGuide': 'Rebuilding cost of the structure (not contents).',
    'home.structureHintEmpty': 'Required — ₹5L to ₹500L',
    'home.structureHintPartial': 'Enter value between 5 and 500 (lakhs)',
    'home.structureHintOk': 'Used for building cover premium.',
    'home.structureSuffix': '₹L',
    'guide.term.income': 'Annual income (approx.)',
    'guide.term.dependents': 'Financial dependents',
    'guide.term.dependents.0': 'None',
    'guide.term.dependents.1': '1',
    'guide.term.dependents.2': '2',
    'guide.term.dependents.3plus': '3 or more',
    'guide.term.loans': 'Outstanding loans (home, personal, etc.)',
    'guide.term.loans.0': 'None',
    'guide.term.loans.25': 'Up to ₹25L',
    'guide.term.loans.50': '₹25–50L',
    'guide.term.loans.100': '₹50L–1 Cr',
    'guide.term.assumptions': 'Assumption: {low}–{high}× your annual income (₹{income}L) plus loans (₹{loans}L). Actual need may vary — read policy terms.',
    'guide.income.6': 'Below ₹6L',
    'guide.income.12': '₹6–12L',
    'guide.income.24': '₹12–24L',
    'guide.income.50': '₹24–50L',
    'guide.income.50plus': 'Above ₹50L',
    'help.helpline': '24×7 Helpline',
    'help.igms': 'Insurer grievance portal (IGMS)',
    'a11y.skip': 'Skip to main content',
    'a11y.splash': 'Welcome to Hollow',
    'a11y.home': 'Hollow home',
    'a11y.language': 'Language',
    'a11y.aiOpen': 'Open AI assistant',
    'a11y.close': 'Close',
    'a11y.send': 'Send',
    'a11y.nav': 'Main navigation',
  }
};


let currentView = 'home';
let wizardState = null;
let suppressHistory = false;
let lastFocusEl = null;
let selectedPayment = 'upi';
let selectedBankOffer = 'paytm';
let policySearchQuery = '';
let hospitalSearchQuery = '';
let claimStartState = null;
let policyTab = 'active';
let aiMessages = [];
let aiMode = null;
let aiFinderStep = 'protect';
let aiFinderData = {};
let aiClaimStep = 0;
let aiClaimData = {};
let renewalAlerts = { h1: true, m1: true };

const DEFAULT_APP_SETTINGS = {
  renewalReminders: true,
  offerAlerts: true,
  whatsappUpdates: true,
  smsUpdates: true,
  preferredLang: 'en',
  policyReminders: null,
};

let appSettings = { ...DEFAULT_APP_SETTINGS };
let compareList = [];
let compareHideEqualRows = false;

const COMPARE_PRODUCTS = ['health', 'motor', 'term', 'home'];

function plansForCompareProduct(product) {
  return PLAN_DATA[product] || healthPlans;
}

function compareContextProduct() {
  if (wizardState?.type === 'compare' && wizardState.compareProduct) return wizardState.compareProduct;
  if (COMPARE_PRODUCTS.includes(wizardState?.type) && wizardState.step === PRODUCT_CONFIG[wizardState.type]?.resultsStep) {
    return wizardState.type;
  }
  if (COMPARE_PRODUCTS.includes(activeProduct)) return activeProduct;
  return 'health';
}

function isOnCompareableResults() {
  const type = wizardState?.type;
  if (!COMPARE_PRODUCTS.includes(type)) return false;
  return wizardState.step === PRODUCT_CONFIG[type].resultsStep;
}

/** Quote steps with inner scroll + docked footer (health 0–2, term/home details). */
function usesWizardDockedStepLayout() {
  if (!wizardState?.type) return false;
  const step = wizardState.step ?? 0;
  if (wizardState.type === 'health' && step >= 0 && step <= 2) return true;
  if ((wizardState.type === 'term' || wizardState.type === 'home') && step === 0) return true;
  if (wizardState.type === 'motor' && step === 0) return true;
  return false;
}

/** Review & pay — dock declaration + primary CTA at bottom. */
function usesWizardCheckoutDock() {
  const ws = wizardState;
  if (!ws || ws.type === 'signup' || ws.type === 'compare') return false;
  const cfg = PRODUCT_CONFIG[ws.type];
  if (!cfg || ws.step !== cfg.maxStep) return false;
  return checkoutPhase === 'review' || checkoutPhase === 'payment' || checkoutPhase === 'failed';
}

function syncCheckoutReviewCta() {
  const btn = document.querySelector('[data-action="checkout-to-payment"]');
  if (!btn) return;
  const product = btn.dataset.product || wizardState?.type || activeProduct || 'health';
  captureCheckoutFormFromDOM();
  const ready = !validateCheckoutReviewState(product);
  btn.disabled = !ready;
  btn.setAttribute('aria-disabled', ready ? 'false' : 'true');
  btn.classList.toggle('quote-form__continue--ready', ready);
}

function resolveComparePlans(product) {
  const catalog = plansForCompareProduct(product);
  return compareList.map((id) => catalog.find((p) => p.id === id)).filter(Boolean);
}

function compareRowGroupsForProduct(product) {
  if (product === 'motor') {
    return [
      { titleKey: 'compare.groupPremium', labels: [t('compare.monthly'), 'Premium/yr'] },
      { titleKey: 'compare.groupCoverage', labels: ['IDV', 'Your NCB', 'Zero depreciation', 'Claim settlement', 'Rating'] },
    ];
  }
  if (product === 'term') {
    return [
      { titleKey: 'compare.groupPremium', labels: [t('compare.monthly'), 'Premium/yr'] },
      { titleKey: 'compare.groupCoverage', labels: ['Life cover', 'Tenure', 'Claim settlement', 'Rating'] },
    ];
  }
  if (product === 'home') {
    return [
      { titleKey: 'compare.groupPremium', labels: [t('compare.monthly'), 'Premium/yr'] },
      { titleKey: 'compare.groupCoverage', labels: ['Structure', 'Contents', 'Perils', 'Earthquake', 'Rating'] },
    ];
  }
  return [
    { titleKey: 'compare.groupPremium', labels: [t('compare.monthly'), 'Premium/yr'] },
    { titleKey: 'compare.groupCoverage', labels: ['Sum insured', 'Claim settlement', 'Hospitals', 'Room rent'] },
    { titleKey: 'compare.groupBenefits', labels: ['Restoration', 'OPD', 'Maternity', 'Co-pay'] },
  ];
}

function compareRowIconName(label) {
  const monthly = t('compare.monthly');
  const map = {
    [monthly]: 'wallet',
    'Premium/yr': 'money',
    'Sum insured': 'shield',
    'Claim settlement': 'award',
    'Hospitals': 'hospital',
    'Room rent': 'home',
    'Restoration': 'repeat',
    'OPD': 'health',
    'Maternity': 'family',
    'Co-pay': 'money',
    'IDV': 'motor',
    'Your NCB': 'award',
    'Zero depreciation': 'shield',
    'Rating': 'award',
    'Life cover': 'shield',
    'Tenure': 'calendar',
    'Structure': 'home',
    'Contents': 'home',
    'Perils': 'info',
    'Earthquake': 'info',
  };
  return map[label] || 'info';
}

function parseCompareMetric(value) {
  if (value === '✓' || value === '✗' || value === '—') return null;
  const n = parseFloat(String(value).replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : null;
}

function bestCompareCellIndices(vals, label) {
  const lowerBetter = new Set([t('compare.monthly'), 'Premium/yr', 'Co-pay']);
  const higherBetter = new Set(['Claim settlement', 'Hospitals', 'Rating', 'Sum insured', 'Life cover']);
  const nums = vals.map((v) => parseCompareMetric(v));
  if (nums.some((n) => n === null)) return new Set();
  let target;
  if (lowerBetter.has(label)) target = Math.min(...nums);
  else if (higherBetter.has(label)) target = Math.max(...nums);
  else return new Set();
  const out = new Set();
  nums.forEach((n, i) => { if (n === target) out.add(i); });
  return out;
}

function compareGroupSectionClass(titleKey) {
  if (titleKey === 'compare.groupPremium') return 'compare-table__group--premium';
  if (titleKey === 'compare.groupCoverage') return 'compare-table__group--coverage';
  if (titleKey === 'compare.groupBenefits') return 'compare-table__group--benefits';
  return '';
}

function formatCompareCellValue(value, { emphasize = false, best = false } = {}) {
  if (value === '✓') {
    return '<span class="compare-table__bool compare-table__bool--yes" aria-label="Included">✓</span>';
  }
  if (value === '✗') {
    return `<span class="compare-table__status compare-table__status--no">${t('compare.notCovered')}</span>`;
  }
  let inner = value;
  if (best) {
    return `<span class="compare-table__value compare-table__value--best">${inner}</span>`;
  }
  if (emphasize) {
    return `<span class="compare-table__value compare-table__value--diff">${inner}</span>`;
  }
  return inner;
}

function renderComparePlanRail(product, plans) {
  return `<div class="compare-plan-rail" role="group" aria-label="Plans compared">
    ${plans.map((p, i) => {
      const premium = quotePremiumForPlan(p, product);
      const monthly = formatPremium(yearlyToMonthly(premium));
      const featured = p.featured || p.badge;
      return `<div class="compare-plan-rail__col compare-plan-rail__col--${i}${featured ? ' compare-plan-rail__col--pick' : ''}">
        <p class="compare-plan-rail__insurer">${p.insurer}</p>
        <p class="compare-plan-rail__meta">${p.plan}</p>
        <p class="compare-plan-rail__price">${monthly}<span>/mo</span></p>
        ${p.badge ? `<span class="compare-plan-rail__badge">${p.badge}</span>` : ''}
      </div>`;
    }).join('')}
  </div>`;
}

function renderCompareTableBody(product, plans) {
  const rows = compareRowsForProduct(product);
  const groups = compareRowGroupsForProduct(product);
  const span = plans.length + 1;
  let html = '';
  groups.forEach((group) => {
    const sectionCls = compareGroupSectionClass(group.titleKey);
    html += `<tr class="compare-table__group ${sectionCls}"><td colspan="${span}"><span class="compare-table__group-label">${t(group.titleKey)}</span></td></tr>`;
    group.labels.forEach((label) => {
      const r = rows.find((row) => row.label === label);
      if (!r) return;
      const vals = plans.map((p) => r.key(p));
      const allSame = vals.every((v) => v === vals[0]);
      if (compareHideEqualRows && allSame) return;
      const rowDiff = compareValuesDiffer(vals);
      const bestCells = bestCompareCellIndices(vals, label);
      const iconName = compareRowIconName(label);
      const featureCls = 'compare-table__feature';
      const cells = plans.map((_, i) => {
        const v = vals[i];
        const cellDiff = rowDiff && compareCellDiffers(vals, i);
        const isBest = bestCells.has(i);
        const parts = [];
        if (isBest) parts.push('compare-table__cell--best');
        else if (cellDiff) parts.push('compare-table__cell--diff');
        return `<td class="${parts.join(' ')}">${formatCompareCellValue(v, { emphasize: cellDiff && !isBest, best: isBest })}</td>`;
      }).join('');
      html += `<tr class="compare-table__row">
        <td class="${featureCls}">
          <span class="compare-table__feature-inner">
            <span class="compare-table__feature-icon" aria-hidden="true">${icon(iconName, ICON_SIZE.sm, 'hollow-icon')}</span>
            <span class="compare-table__feature-label">${r.label}</span>
          </span>
        </td>${cells}</tr>`;
    });
  });
  return html;
}

function renderCompareActionRow(product, plans) {
  return plans.map((p, i) => {
    const pick = !!(p.featured || p.badge);
    const cls = pick ? 'btn btn--primary btn--sm btn--compare-buy btn--compare-buy--pick' : 'btn btn--primary btn--sm btn--compare-buy';
    return `<td><button type="button" class="${cls}" data-action="buy-product" data-plan-id="${p.id}" data-product="${product}">Buy</button></td>`;
  }).join('');
}

function renderComparePremiumSummary(product, plans) {
  const cards = plans.map((p) => {
    const premium = quotePremiumForPlan(p, product);
    const monthly = formatPremium(yearlyToMonthly(premium));
    const yearly = formatPremium(premium);
    const sub = product === 'health'
      ? `${p.plan} · ₹${p.si}L SI`
      : product === 'motor'
        ? `${p.plan || 'Comprehensive'} · IDV ${formatPremium(p.idv)}`
        : product === 'term'
          ? `₹${p.cover}L cover · ${p.tenure} yrs`
          : `${p.plan || 'Home'} · Structure ₹${p.structure}L`;
    return `<div class="compare-summary__card">
      <div class="compare-summary__insurer">${p.insurer}</div>
      <div class="compare-summary__meta">${sub}</div>
      <div class="compare-summary__price">${monthly}<span>/mo</span></div>
      <div class="compare-summary__yr">${yearly}/yr</div>
    </div>`;
  }).join('');
  return `<div class="compare-summary" role="region" aria-label="Plan premiums">${cards}</div>`;
}

function renderHomeWhyHollow() {
  return `<section class="home-why-hollow" aria-labelledby="homeWhyTitle">
    <h2 id="homeWhyTitle" class="home-why-hollow__title">${t('home.whyTitle')}</h2>
    <div class="why-hollow-panel">
      <div class="why-hollow-item why-hollow-item--divider">
        <div class="why-hollow-item__icon why-hollow-item__icon--compare" aria-hidden="true">${icon('compare', ICON_SIZE.md)}</div>
        <div class="why-hollow-item__text">
          <p class="why-hollow-item__title">${t('home.why1.title')}</p>
          <p class="why-hollow-item__desc">${t('home.why1.desc')}</p>
        </div>
      </div>
      <div class="why-hollow-item why-hollow-item--divider">
        <div class="why-hollow-item__icon why-hollow-item__icon--guide" aria-hidden="true">${icon('sparkles', ICON_SIZE.md)}</div>
        <div class="why-hollow-item__text">
          <p class="why-hollow-item__title">${t('home.why2.title')}</p>
          <p class="why-hollow-item__desc">${t('home.why2.desc')}</p>
        </div>
      </div>
      <div class="why-hollow-item">
        <div class="why-hollow-item__icon why-hollow-item__icon--support" aria-hidden="true">${icon('advisor', ICON_SIZE.md)}</div>
        <div class="why-hollow-item__text">
          <p class="why-hollow-item__title">${t('home.why3.title')}</p>
          <p class="why-hollow-item__desc">${t('home.why3.desc')}</p>
        </div>
      </div>
    </div>
  </section>`;
}

function expertSubmitLabel() {
  const slot = document.getElementById('expertTime')?.value;
  if (slot === 'now' && isExpertCallbackNowOpen()) return t('expert.ctaNow');
  return t('expert.cta');
}

function syncExpertSubmitLabel() {
  const btn = document.getElementById('expertSubmit');
  if (btn) btn.textContent = expertSubmitLabel();
}

function compareRowsForProduct(product) {
  if (product === 'motor') {
    return [
      { label: t('compare.monthly'), key: (p) => formatPremium(yearlyToMonthly(motorPremiumForPlan(p))) },
      { label: 'Premium/yr', key: (p) => formatPremium(motorPremiumForPlan(p)) },
      { label: 'IDV', key: (p) => formatPremium(p.idv) },
      { label: 'Your NCB', key: () => `${motorNcbPercent()}%` },
      { label: 'Zero depreciation', key: (p) => (p.zeroDep ? '✓' : '✗') },
      { label: 'Claim settlement', key: (p) => `${p.claims}%` },
      { label: 'Rating', key: (p) => (p.rating ? `★ ${p.rating}` : '—') },
    ];
  }
  if (product === 'term') {
    return [
      { label: t('compare.monthly'), key: (p) => formatPremium(yearlyToMonthly(quotePremiumForPlan(p, 'term'))) },
      { label: 'Premium/yr', key: (p) => formatPremium(quotePremiumForPlan(p, 'term')) },
      { label: 'Life cover', key: (p) => (p.cover >= 100 ? `₹${p.cover / 100} Cr` : `₹${p.cover}L`) },
      { label: 'Tenure', key: (p) => `${p.tenure} yrs` },
      { label: 'Claim settlement', key: (p) => `${p.claims}%` },
      { label: 'Rating', key: (p) => (p.rating ? `★ ${p.rating}` : '—') },
    ];
  }
  if (product === 'home') {
    return [
      { label: t('compare.monthly'), key: (p) => formatPremium(yearlyToMonthly(quotePremiumForPlan(p, 'home'))) },
      { label: 'Premium/yr', key: (p) => formatPremium(quotePremiumForPlan(p, 'home')) },
      { label: 'Structure', key: (p) => `₹${p.structure}L` },
      { label: 'Contents', key: (p) => `₹${p.contents}L` },
      { label: 'Perils', key: (p) => p.perils },
      { label: 'Earthquake', key: (p) => (p.eq ? '✓' : '✗') },
      { label: 'Rating', key: (p) => (p.rating ? `★ ${p.rating}` : '—') },
    ];
  }
  return [
    { label: t('compare.monthly'), key: (p) => formatPremium(yearlyToMonthly(p.premium)) },
    { label: 'Premium/yr', key: (p) => formatPremium(p.premium) },
    { label: 'Sum insured', key: (p) => `₹${p.si} Lakh` },
    { label: 'Claim settlement', key: (p) => `${p.claims}%` },
    { label: 'Hospitals', key: (p) => p.hospitals.toLocaleString() + '+' },
    { label: 'Room rent', key: (p) => p.roomRent },
    { label: 'Restoration', key: (p) => (p.restoration ? '✓' : '✗') },
    { label: 'OPD', key: (p) => (p.opd ? '✓' : '✗') },
    { label: 'Maternity', key: (p) => (p.maternity ? '✓' : '✗') },
    { label: 'Co-pay', key: (p) => p.copay },
  ];
}

function openCompareView() {
  if (compareList.length < 2) return;
  wizardState = { type: 'compare', compareProduct: compareContextProduct() };
  document.body.classList.add('wizard-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
}
let healthFilter = 'all';
let healthSort = 'premium';
let quoteResultsLoading = null;
let quoteResultsError = null;
let checkoutShouldFocusPayment = false;
let termAgeShouldFocus = false;
let homePincodeShouldFocus = false;
let homeAreaShouldFocus = false;
let homeStructureShouldFocus = false;
let productFilter = {};
let productSort = {};
let selectedPlanId = null;
let activeProduct = 'health';
let healthAddons = { restoration: true, opd: false, maternity: false, critical: false };
let motorAddons = { zeroDep: false, rsa: true, personalAccident: false };
let checkoutForm = { proposerName: '', nominee: '', nomineeDob: '', pan: '', declaration: false };
let checkoutPhase = 'review';
let paymentForm = { upiId: '', cardNumber: '', cardExpiry: '', cardCvv: '', bank: '' };
let lastCheckout = { product: '', planId: '', premium: 0, addonsSummary: '', policyNo: '' };

const CHECKOUT_PAYMENT_IDS = ['upi', 'card', 'netbank'];
const NET_BANKS = ['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Kotak Mahindra Bank'];

function getHealthAddonsExtraPremium() {
  return (healthAddons.opd ? 2400 : 0)
    + (healthAddons.maternity ? 3800 : 0)
    + (healthAddons.critical ? 1200 : 0);
}
let appliedCoupon = null;
let couponInput = '';
let couponFieldError = '';
const SIGNUP_DEMO_OTP = '123456';
let authUser = null;
let signupDraft = { name: '', phone: '', email: '', pendingOtp: null, sentAt: 0, error: '', tab: 'login', channel: 'sms' };
let accountEmailNotice = '';
let accountPrivacyNotice = '';
let renewLookupError = '';
let checkoutResumeWizard = null;
let expertFocusTrapHandler = null;
let expertLastTrigger = null;
let expertCallbackSlot = null;
let aiFocusTrapHandler = null;
let aiLastTrigger = null;
let serviceContext = { policyId: null, claimId: null, caseId: null };
let policyDoctorState = { policyId: null, view: 'select', clauseKey: null, uploadLabel: null, uploadLoading: false };
let caseCreateDraft = { category: 'documents', policyId: 'h1', subject: '', description: '' };
let caseFormError = '';
let doctorQuestion = '';
let doctorAnswer = '';
let doctorLoading = false;

const CASE_STATUSES = ['Open', 'In Progress', 'Waiting for Customer', 'Waiting for Insurer', 'Resolved'];

const coupons = {
  HOLLOW500: { label: 'Flat ₹500 off', discount: 500, desc: 'On all health policies' },
  FIRSTBUY: { label: '10% off first purchase', discountPct: 10, max: 2000, desc: 'New customers only' },
  HEALTH10: { label: '₹1,000 health discount', discount: 1000, desc: 'Family floater plans' },
};

const bankOffers = [
  { id: 'hdfc', bank: 'HDFC Bank', offer: '10% instant discount', save: 'Up to ₹1,500', cards: 'Credit & Debit', payment: 'card' },
  { id: 'icici', bank: 'ICICI Bank', offer: '5% cashback', save: 'Up to ₹800', cards: 'Amazon Pay ICICI', payment: 'card' },
  { id: 'axis', bank: 'Axis Bank', offer: 'No-cost EMI', save: '3 & 6 months', cards: 'Select credit cards', payment: 'card' },
  { id: 'sbi', bank: 'SBI Card', offer: '₹750 off', save: 'Min. spend ₹15,000', cards: 'SBI Credit Card', payment: 'card' },
  { id: 'paytm', bank: 'Paytm', offer: '₹400 cashback', save: 'On UPI payment', cards: 'Paytm UPI / Wallet', payment: 'upi' },
];

function getBankOffer(id) {
  return bankOffers.find((b) => b.id === id);
}

function applyBankOfferSelection(offerId) {
  const offer = getBankOffer(offerId);
  if (!offer) return;
  selectedBankOffer = offer.id;
  selectedPayment = offer.payment;
}

function syncBankOfferWithPayment() {
  if (selectedPayment === 'upi') {
    selectedBankOffer = 'paytm';
    return;
  }
  if (selectedPayment === 'card') {
    const current = getBankOffer(selectedBankOffer);
    if (current?.payment === 'card') return;
    selectedBankOffer = 'hdfc';
    return;
  }
  selectedBankOffer = '';
}

const BANK_OFFER_MARKS = {
  hdfc: 'HDFC',
  icici: 'ICICI',
  axis: 'AXIS',
  sbi: 'SBI',
};

function renderBankOfferIcon(offer) {
  if (offer.id === 'paytm') {
    return `<div class="bank-offer__icon bank-offer__icon--paytm" aria-hidden="true">${icon('wallet', ICON_SIZE.lg)}</div>`;
  }
  const abbr = BANK_OFFER_MARKS[offer.id] || offer.bank.slice(0, 4).toUpperCase();
  return `<div class="bank-offer__icon bank-offer__icon--${offer.id}" aria-hidden="true"><span class="bank-offer__abbr">${abbr}</span></div>`;
}

const INSURER_COLORS = {
  'Star Health': '#e31937', 'HDFC ERGO': '#004c8f', 'ICICI Lombard': '#f37021',
  'Care Health': '#ffcc00', 'Niva Bupa': '#00a0e3', 'Aditya Birla': '#c41230',
  'Max Bupa': '#6b2d5b', 'Bajaj Allianz': '#003da5', 'Tata AIG': '#1f4e9c',
  'Reliance General': '#0072bc', 'Digit': '#5c2d91', 'ACKO': '#6c2dc7',
};

const products = [
  { id: 'health', icon: 'health', name: 'Health', tag: 'Family & individual', from: '₹14,200', color: '#e31937' },
  { id: 'motor', icon: 'motor', name: 'Motor', tag: 'Car & bike', from: '₹10,850', color: 'var(--color-product-motor)' },
  { id: 'term', icon: 'term', name: 'Term Life', tag: '₹1 Cr from ₹999/mo', from: '₹11,800', color: 'var(--color-primary)' },
  { id: 'home', icon: 'home', name: 'Home', tag: 'Structure & contents', from: '₹2,100', color: 'var(--color-product-home)' },
];

let homeTrendingTab = 'health';
let openExplainId = null;

const PLAIN_ENGLISH = {
  health: {
    sumInsured: 'The max amount the insurer pays for hospital bills in a year.',
    copay: 'Your share of each bill. Zero co-pay means the insurer pays 100%.',
    restoration: 'If you use up your cover, it refills once — useful for big years.',
    roomRent: 'Daily hospital room charge limit. "No cap" = any room type.',
  },
  motor: {
    idv: 'What you get if your car is stolen or totalled.',
    ncb: 'Discount for years without claims — rewards safe driving.',
    zeroDep: 'Full repair payout without deducting for part wear and tear.',
  },
  term: {
    cover: 'Lump sum paid to your family if something happens to you.',
    claims: 'How often the insurer actually pays out — higher is better.',
  },
};

const PLAN_TRUST_DEFAULTS = {
  motor: {
    plainEn: ['Covers accident damage and theft on your vehicle.', 'Includes legally required third-party injury cover.'],
    notCovered: ['Normal wear and tear', 'Driving without a valid licence', 'Driving under the influence of alcohol'],
    waiting: ['Own-damage cover from policy start date', 'NCB discount grows after each claim-free year'],
  },
  term: {
    plainEn: ['Pays a lump sum to your family if something happens to you.', 'Low yearly cost for high life cover for the chosen term.'],
    notCovered: ['Death from undisclosed health conditions', 'Suicide within first policy year (as per law)', 'War or nuclear risks'],
    waiting: ['Standard waiting for certain exclusions in first year', 'Full cover after disclosures accepted'],
  },
  home: {
    plainEn: ['Pays to repair or rebuild your home after fire, flood, or theft.', 'Contents cover helps replace belongings listed in the policy.'],
    notCovered: ['Wear and tear or poor maintenance', 'Undisclosed prior damage', 'War and nuclear perils unless add-on'],
    waiting: ['Cover starts after proposal acceptance', 'Earthquake cover only if selected in plan'],
  },
  generic: {
    plainEn: ['Covers the main risks described in the insurer brochure.', 'Read policy wording for full terms before you pay.'],
    notCovered: ['Risks not listed in the policy document', 'Fraud or intentional loss'],
    waiting: ['As per insurer policy schedule', 'Contact support for exact dates'],
  },
};

const PLAN_TRUST = {
  'star-comprehensive': {
    plainEn: ['Hospital bills for your family up to ₹10 lakh per year.', 'Wide cashless network; no room rent cap on this plan.'],
    notCovered: ['Pre-existing illnesses for 36 months', 'Cosmetic surgery', 'First 30 days except emergencies'],
    waiting: ['Initial illness: 30 days', 'Pre-existing conditions: 36 months', 'Maternity: not included'],
  },
  'care-supreme': {
    plainEn: ['Solid family cover with OPD and maternity benefits.', 'Slightly lower premium than top-tier plans with good hospitals.'],
    notCovered: ['Pre-existing illnesses for 36 months', 'Cosmetic treatment', 'Non-prescribed supplements'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'Maternity: 24 months'],
  },
  'niva-reassure': {
    plainEn: ['High claim settlement with unlimited restore of sum insured.', 'No room rent limit; good for metro hospitals.'],
    notCovered: ['Pre-existing for 36 months', 'Experimental treatments', 'First 30 days except accident'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'Specific illnesses: 24 months'],
  },
  'hdfc-optima': {
    plainEn: ['Among the highest claim payout rates in this list.', 'Strong choice if worry-free claims matter most to you.'],
    notCovered: ['Pre-existing for 36 months', 'Cosmetic procedures', 'Self-inflicted injury'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'OPD: from day one where covered'],
  },
  'icici-elevate': {
    plainEn: ['Balanced plan with maternity; 10% co-pay on each bill.', 'You pay a small share; premium stays moderate.'],
    notCovered: ['Pre-existing for 36 months', 'Co-pay portion of each claim', 'Non-medical items in hospital bill'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'Maternity: 24 months'],
  },
  'max-reassure': {
    plainEn: ['Premium plan with OPD, maternity, and restore benefits.', 'Higher yearly cost; more add-ons included.'],
    notCovered: ['Pre-existing for 36 months', 'Treatments outside India unless add-on', 'Alternative medicine unless listed'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'Maternity: 24 months'],
  },
  'aditya-activ': {
    plainEn: ['Lowest price here for basic hospital cover.', 'Fewer extras; best for healthy families on a budget.'],
    notCovered: ['No sum insured restore', 'Shared room category only', 'Pre-existing for 36 months'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'No maternity cover'],
  },
  'bajaj-guard': {
    plainEn: ['Mid-price family floater with restore of cover.', 'Single AC room limit; check hospital list near you.'],
    notCovered: ['Pre-existing for 36 months', 'Room above single AC category', 'Outpatient unless add-on'],
    waiting: ['Initial: 30 days', 'Pre-existing: 36 months', 'Specific surgeries: 24 months'],
  },
};

const PLAN_PLAIN = Object.fromEntries(
  Object.entries(PLAN_TRUST).map(([id, meta]) => [id, meta.plainEn.join(' ')]),
);

const healthPlans = [
  { id: 'star-comprehensive', insurer: 'Star Health', plan: 'Comprehensive', premium: 18420, si: 10, rating: 4.6, claims: 89, hospitals: 14000, roomRent: 'No cap', restoration: true, opd: false, maternity: false, copay: '0%', waiting: '30 days', featured: true, badge: 'Best value' },
  { id: 'care-supreme', insurer: 'Care Health', plan: 'Care Supreme', premium: 16990, si: 10, rating: 4.5, claims: 87, hospitals: 12000, roomRent: 'Single AC', restoration: true, opd: true, maternity: true, copay: '0%', waiting: '30 days', featured: false },
  { id: 'niva-reassure', insurer: 'Niva Bupa', plan: 'ReAssure 2.0', premium: 19200, si: 10, rating: 4.4, claims: 91, hospitals: 10000, roomRent: 'No cap', restoration: true, opd: false, maternity: false, copay: '0%', waiting: '30 days', featured: false },
  { id: 'hdfc-optima', insurer: 'HDFC ERGO', plan: 'Optima Secure', premium: 20150, si: 10, rating: 4.7, claims: 92, hospitals: 13000, roomRent: 'No cap', restoration: true, opd: true, maternity: false, copay: '0%', waiting: '30 days', featured: false, badge: 'Highest claims' },
  { id: 'icici-elevate', insurer: 'ICICI Lombard', plan: 'Elevate', premium: 17800, si: 10, rating: 4.3, claims: 88, hospitals: 11000, roomRent: 'Single AC', restoration: true, opd: false, maternity: true, copay: '10%', waiting: '30 days', featured: false },
  { id: 'max-reassure', insurer: 'Max Bupa', plan: 'ReAssure', premium: 21500, si: 10, rating: 4.5, claims: 90, hospitals: 9500, roomRent: 'No cap', restoration: true, opd: true, maternity: true, copay: '0%', waiting: '30 days', featured: false },
  { id: 'aditya-activ', insurer: 'Aditya Birla', plan: 'Activ Health', premium: 15600, si: 10, rating: 4.2, claims: 85, hospitals: 8000, roomRent: 'Shared', restoration: false, opd: false, maternity: false, copay: '0%', waiting: '30 days', featured: false, badge: 'Lowest price' },
  { id: 'bajaj-guard', insurer: 'Bajaj Allianz', plan: 'Health Guard', premium: 17200, si: 10, rating: 4.1, claims: 86, hospitals: 7500, roomRent: 'Single AC', restoration: true, opd: false, maternity: false, copay: '0%', waiting: '30 days', featured: false },
];

const motorPlans = [
  { id: 'hdfc-motor', insurer: 'HDFC ERGO', plan: 'Comprehensive', premium: 12890, idv: 420000, ncb: 25, zeroDep: true, rsa: true, rating: 4.6, claims: 93 },
  { id: 'icici-motor', insurer: 'ICICI Lombard', plan: 'Comprehensive', premium: 13450, idv: 415000, ncb: 25, zeroDep: true, rsa: true, rating: 4.5, claims: 92 },
  { id: 'bajaj-motor', insurer: 'Bajaj Allianz', plan: 'Comprehensive', premium: 11990, idv: 410000, ncb: 25, zeroDep: false, rsa: true, rating: 4.3, claims: 90 },
  { id: 'digit-motor', insurer: 'Digit', plan: 'Comprehensive', premium: 11200, idv: 405000, ncb: 25, zeroDep: true, rsa: true, badge: 'Lowest', rating: 4.4, claims: 91 },
  { id: 'acko-motor', insurer: 'ACKO', plan: 'Comprehensive', premium: 10850, idv: 400000, ncb: 25, zeroDep: true, rsa: true, rating: 4.5, claims: 94 },
];

const termPlans = [
  { id: 'hdfc-term', insurer: 'HDFC Life', plan: 'Click 2 Protect', premium: 14200, cover: 100, tenure: 30, rating: 4.7, claims: 99.4, badge: 'Highest claims' },
  { id: 'icici-term', insurer: 'ICICI Prudential', plan: 'iProtect Smart', premium: 13800, cover: 100, tenure: 30, rating: 4.6, claims: 98.8 },
  { id: 'max-term', insurer: 'Max Life', plan: 'Smart Secure Plus', premium: 12900, cover: 100, tenure: 30, rating: 4.5, claims: 99.1, badge: 'Best value' },
  { id: 'tata-term', insurer: 'Tata AIA', plan: 'SRS Vitality', premium: 15100, cover: 100, tenure: 30, rating: 4.4, claims: 98.5 },
  { id: 'bajaj-term', insurer: 'Bajaj Allianz', plan: 'Life Goal', premium: 11800, cover: 100, tenure: 25, rating: 4.3, claims: 97.9, badge: 'Lowest premium' },
  { id: 'aditya-term', insurer: 'Aditya Birla', plan: 'DigiShield', premium: 13500, cover: 150, tenure: 30, rating: 4.4, claims: 98.2 },
];

const homePlans = [
  { id: 'hdfc-home', insurer: 'HDFC ERGO', plan: 'Home Shield', premium: 2890, structure: 50, contents: 10, perils: 'Fire, flood, burglary', rating: 4.5, eq: true },
  { id: 'icici-home', insurer: 'ICICI Lombard', plan: 'Bharat Griha Raksha', premium: 2400, structure: 40, contents: 8, perils: 'Fire, lightning, theft', rating: 4.4, badge: 'Standard cover' },
  { id: 'bajaj-home', insurer: 'Bajaj Allianz', plan: 'My Home', premium: 3200, structure: 60, contents: 15, perils: 'All standard perils', rating: 4.3, eq: true },
  { id: 'tata-home', insurer: 'Tata AIG', plan: 'Home Secure', premium: 2650, structure: 45, contents: 12, perils: 'Fire, flood, EQ add-on', rating: 4.2 },
  { id: 'reliance-home', insurer: 'Reliance General', plan: 'Home Care', premium: 2100, structure: 35, contents: 5, perils: 'Fire & burglary', rating: 4.1, badge: 'Budget pick' },
];

const PLAN_DATA = {
  health: healthPlans, motor: motorPlans, term: termPlans, home: homePlans,
};

const MAX_HEALTH_CHILDREN = 6;

const HEALTH_PED_OPTIONS = [
  { id: 'diabetes', en: 'Diabetes' },
  { id: 'hypertension', en: 'Hypertension / BP' },
  { id: 'thyroid', en: 'Thyroid' },
  { id: 'asthma', en: 'Asthma' },
  { id: 'heart', en: 'Heart disease' },
  { id: 'cholesterol', en: 'High cholesterol' },
  { id: 'other', en: 'Other' },
];

function defaultMemberMedical() {
  return { ped: '', pedList: [], pedOtherText: '', smoking: '', alcohol: '', surgery12m: '', confirmed: false };
}

function isHealthChildMemberId(id) {
  return id === 'son' || id === 'daughter' || (typeof id === 'string' && id.startsWith('child-'));
}

/** Gender implied by member role — no picker on the members step. */
function healthMemberImplicitGender(id) {
  if (id === 'son' || id === 'father') return 'male';
  if (id === 'daughter' || id === 'mother') return 'female';
  return null;
}

/** Example age in placeholder (health members step). */
function healthMemberAgeExample(id) {
  if (id === 'self') return '32';
  if (id === 'spouse') return '30';
  if (id === 'son' || id === 'daughter' || id.startsWith('child-')) return '8';
  if (id === 'father' || id === 'mother') return '58';
  return '32';
}

function parseHealthMemberAge(raw) {
  if (raw === '' || raw == null) return '';
  if (typeof raw === 'number') {
    return Number.isFinite(raw) && raw >= 0 && raw <= 99 ? raw : '';
  }
  const trimmed = String(raw).trim();
  if (!trimmed) return '';
  const n = parseInt(trimmed, 10);
  if (!Number.isFinite(n) || n < 0 || n > 99) return '';
  return n;
}

/** Value shown in the age input (never "NaN"). */
function healthMemberAgeInputValue(age) {
  const n = parseHealthMemberAge(age);
  return n === '' ? '' : String(n);
}

/** Same rules as validateHealthStep step 0. */
function isHealthMemberAgeValid(raw) {
  return parseHealthMemberAge(raw) !== '';
}

function syncMemberAgeFieldValidity(input) {
  const block = input.closest('.member-input-block--age');
  if (!block) return;
  const valid = isHealthMemberAgeValid(input.value);
  block.classList.toggle('member-input-block--age--ok', valid);
  block.classList.toggle('member-input-block--age--needs', !valid);
  input.setAttribute('aria-invalid', valid ? 'false' : 'true');
}

function syncHealthMemberAgeFromInput(input) {
  const row = input.closest('[data-member-row]');
  if (!row || !quoteForm.health) return;
  const m = quoteForm.health.members.find((x) => x.id === row.dataset.memberRow);
  if (!m) return;
  m.age = parseHealthMemberAge(input.value);
}

function isHealthPincodeValid(raw) {
  return /^\d{6}$/.test(String(raw || '').trim());
}

function syncHealthPincodeFieldUi() {
  const input = document.getElementById('healthPincode');
  const group = document.getElementById('healthPincodeGroup');
  if (!input || !group) return;
  const ok = isHealthPincodeValid(input.value);
  group.classList.toggle('pincode-footer-row--ok', ok);
  group.classList.toggle('pincode-footer-row--needs', !ok);
  input.setAttribute('aria-invalid', ok ? 'false' : 'true');
}

function syncHealthMemberImplicitGenders(h) {
  h.members.forEach((m) => {
    const g = healthMemberImplicitGender(m.id);
    if (g) m.gender = g;
  });
}

function countHealthChildSlots(h) {
  return h.members.filter((m) => isHealthChildMemberId(m.id)).length;
}

function nextHealthChildMemberId(h) {
  let n = 3;
  while (h.members.some((m) => m.id === `child-${n}`)) n += 1;
  return `child-${n}`;
}

function nextHealthChildLabel(h) {
  const extras = h.members.filter((m) => m.id.startsWith('child-')).length;
  return `Child ${extras + 3}`;
}

function insertHealthChildMember(h, member) {
  const fatherIdx = h.members.findIndex((m) => m.id === 'father');
  const at = fatherIdx >= 0 ? fatherIdx : h.members.length;
  h.members.splice(at, 0, member);
}

function addHealthChildMember() {
  const h = quoteForm.health;
  if (h.planType === 'individual') return;
  captureHealthFormFromDOM();
  if (countHealthChildSlots(h) >= MAX_HEALTH_CHILDREN) {
    if (wizardState) {
      wizardState.formError = `You can add up to ${MAX_HEALTH_CHILDREN} children on one family floater quote.`;
    }
    renderPreserveScroll();
    return;
  }
  const id = nextHealthChildMemberId(h);
  insertHealthChildMember(h, {
    id,
    label: nextHealthChildLabel(h),
    selected: true,
    age: '',
    gender: 'male',
    fullName: '',
    dob: '',
    medical: defaultMemberMedical(),
  });
  if (wizardState) wizardState.formError = '';
  renderPreserveScroll();
}

function removeHealthChildMember(id) {
  if (!id || !id.startsWith('child-')) return;
  const h = quoteForm.health;
  captureHealthFormFromDOM();
  const idx = h.members.findIndex((m) => m.id === id);
  if (idx < 0) return;
  h.members.splice(idx, 1);
  if (wizardState?.medicalMemberId === id) wizardState.medicalMemberId = null;
  if (wizardState) wizardState.formError = '';
  renderPreserveScroll();
}

function applyHealthQuotePreset(form, preset) {
  if (preset !== 'senior') return;
  form.planType = 'individual';
  form.sumInsured = 15;
  form.maternity = 'not_needed';
  form.members.forEach((m) => {
    const isParent = m.id === 'father';
    m.selected = isParent;
    m.age = isParent ? 65 : '';
  });
}

function defaultHealthQuoteForm() {
  return {
    planType: 'floater',
    members: [
      { id: 'self', label: 'Self', selected: true, age: '', gender: 'male', fullName: '', dob: '', medical: defaultMemberMedical() },
      { id: 'spouse', label: 'Spouse', selected: true, age: '', gender: 'female', fullName: '', dob: '', medical: defaultMemberMedical() },
      { id: 'son', label: 'Son', selected: false, age: '', gender: 'male', fullName: '', dob: '', medical: defaultMemberMedical() },
      { id: 'daughter', label: 'Daughter', selected: false, age: '', gender: 'female', fullName: '', dob: '', medical: defaultMemberMedical() },
      { id: 'father', label: 'Father', selected: false, age: '', gender: 'male', fullName: '', dob: '', medical: defaultMemberMedical() },
      { id: 'mother', label: 'Mother', selected: false, age: '', gender: 'female', fullName: '', dob: '', medical: defaultMemberMedical() },
    ],
    pincode: '',
    existingPolicy: 'no',
    sumInsured: 10,
    maternity: 'not_needed',
    roomRent: 'no_cap',
  };
}

function defaultTermQuoteForm() {
  return { age: '', cover: 100, tenure: 30, smoking: '', incomeLakh: '' };
}

function defaultCoverGuideAnswers(product) {
  if (product === 'term') {
    return { age: '', incomeLakh: '', dependents: '2', loansLakh: 0 };
  }
  return { age: '', cityTier: 'metro', familyCount: '2', conditions: 'no' };
}

function defaultMotorQuoteForm() {
  return {
    regNo: '',
    policyType: 'comprehensive',
    ncbProfile: '',
    ownerMobile: '',
  };
}

const HOME_PROPERTY_LABELS = {
  owned_apartment: 'Owned apartment',
  independent_house: 'Independent house',
  rented: 'Rented',
};

const HOME_COVER_LABELS = {
  both: 'Structure + contents',
  structure: 'Structure only',
  contents: 'Contents only',
};

function defaultHomeQuoteForm() {
  return {
    pincode: '',
    propertyType: 'owned_apartment',
    areaSqFt: '',
    coverType: 'both',
    structureValueLakh: '',
  };
}

function homeQuoteSummary() {
  const h = quoteForm.home || defaultHomeQuoteForm();
  const prop = HOME_PROPERTY_LABELS[h.propertyType] || 'Property';
  const cover = HOME_COVER_LABELS[h.coverType] || 'Cover';
  const area = h.areaSqFt ? `${h.areaSqFt} sq ft` : '— sq ft';
  const pin = /^\d{6}$/.test(h.pincode) ? h.pincode : 'Pincode';
  return `${pin} · ${prop} · ${area} · ${cover}`;
}

function homePremiumForPlan(plan, form = quoteForm.home) {
  const h = form || defaultHomeQuoteForm();
  let p = plan.premium;
  const area = Number(h.areaSqFt);
  if (area > 0) p = Math.round(p * (area / 1000));
  const structVal = Number(h.structureValueLakh);
  if (structVal > 0 && plan.structure) {
    p = Math.round(p * (structVal / plan.structure));
  }
  if (h.coverType === 'structure') p = Math.round(p * 0.72);
  else if (h.coverType === 'contents') p = Math.round(p * 0.45);
  if (h.propertyType === 'rented') p = Math.round(p * 0.9);
  return p;
}

function homePincodeInputValue(raw) {
  if (raw === '' || raw == null) return '';
  return String(raw).replace(/\D/g, '').slice(0, 6);
}

function isValidHomePincode(pin) {
  return /^\d{6}$/.test(homePincodeInputValue(pin));
}

function homePincodeInvalidMessage(digits) {
  if (digits.length === 0) return 'Enter a 6-digit pincode';
  if (digits.length < 6) return 'Enter all 6 digits of your pincode';
  return 'Enter a valid 6-digit pincode';
}

function homeAreaInputValue(raw) {
  if (raw === '' || raw == null) return '';
  return String(raw).replace(/\D/g, '').slice(0, 5);
}

function isValidHomeAreaSqFt(area) {
  const digits = homeAreaInputValue(area);
  if (digits === '') return false;
  const n = parseInt(digits, 10);
  return Number.isFinite(n) && n >= 100 && n <= 50000;
}

function homeAreaInvalidMessage(digits) {
  if (digits === '') return 'Enter built-up area in sq ft';
  const n = parseInt(digits, 10);
  if (!Number.isFinite(n) || n < 100) return 'Minimum 100 sq ft';
  if (n > 50000) return 'Maximum 50,000 sq ft';
  return 'Enter area between 100 and 50,000 sq ft';
}

function homeStructureInputValue(raw) {
  if (raw === '' || raw == null) return '';
  return String(raw).replace(/\D/g, '').slice(0, 3);
}

function isValidHomeStructureValueLakh(value) {
  const digits = homeStructureInputValue(value);
  if (digits === '') return false;
  const n = parseInt(digits, 10);
  return Number.isFinite(n) && n >= 5 && n <= 500;
}

function homeStructureInvalidMessage(digits) {
  if (digits === '') return 'Enter structure value in lakhs';
  const n = parseInt(digits, 10);
  if (!Number.isFinite(n) || n < 5) return 'Minimum ₹5 lakh';
  if (n > 500) return 'Maximum ₹500 lakh';
  return 'Enter value between 5 and 500 (lakhs)';
}

function captureHomeFormFromDOM() {
  const h = quoteForm.home || defaultHomeQuoteForm();
  quoteForm.home = h;
  const pinEl = document.getElementById('homePincode');
  if (pinEl) h.pincode = pinEl.value.replace(/\D/g, '').slice(0, 6);
  h.propertyType = document.querySelector('[data-home-property].chip.selected')?.dataset.homeProperty || h.propertyType;
  h.coverType = document.querySelector('[data-home-cover].chip.selected')?.dataset.homeCover || h.coverType;
  const areaEl = document.getElementById('homeAreaSqFt');
  if (areaEl) {
    const digits = homeAreaInputValue(areaEl.value);
    h.areaSqFt = digits === '' ? '' : parseInt(digits, 10);
  }
  const structEl = document.getElementById('homeStructureValueLakh');
  if (structEl) {
    const digits = homeStructureInputValue(structEl.value);
    h.structureValueLakh = digits === '' ? '' : parseInt(digits, 10);
  }
}

function validateHomeStep(step) {
  if (step !== 0) return true;
  const h = quoteForm.home || defaultHomeQuoteForm();
  if (!isValidHomePincode(h.pincode)) {
    wizardState.formError = 'Enter a valid 6-digit pincode';
    homePincodeShouldFocus = true;
    return false;
  }
  if (!isValidHomeAreaSqFt(h.areaSqFt)) {
    wizardState.formError = 'Enter built-up area between 100 and 50,000 sq ft';
    homeAreaShouldFocus = true;
    return false;
  }
  if (h.coverType !== 'contents' && !isValidHomeStructureValueLakh(h.structureValueLakh)) {
    wizardState.formError = 'Enter structure value between ₹5L and ₹500L (in lakhs)';
    homeStructureShouldFocus = true;
    return false;
  }
  wizardState.formError = '';
  return true;
}

function motorNcbPercent(m = quoteForm.motor) {
  if (!m?.ncbProfile || m.ncbProfile === 'claim') return 0;
  return parseInt(m.ncbProfile, 10) || 0;
}

function motorNcbSummary(m = quoteForm.motor) {
  if (!m?.ncbProfile) return 'NCB not set';
  if (m.ncbProfile === 'claim') return '0% NCB (claim last year)';
  return `${m.ncbProfile}% NCB`;
}

function healthPremiumForPlan(plan) {
  const h = quoteForm.health;
  let p = plan.premium;
  const si = h.sumInsured || plan.si;
  if (si && plan.si) p = Math.round(p * (si / plan.si));
  const ages = h.members.filter((m) => m.selected && m.age !== '').map((m) => Number(m.age));
  const avgAge = ages.length ? ages.reduce((a, b) => a + b, 0) / ages.length : null;
  if (avgAge != null && avgAge > 32) p = Math.round(p * (1 + (avgAge - 32) * 0.022));
  if (avgAge != null && avgAge < 28) p = Math.round(p * (1 - (28 - avgAge) * 0.012));
  h.members.filter((m) => m.selected).forEach((m) => {
    const med = m.medical || {};
    if (med.ped === 'yes') p = Math.round(p * 1.07);
    if (med.smoking === 'yes') p = Math.round(p * 1.05);
  });
  return p;
}

function motorPremiumForPlan(plan) {
  const m = quoteForm.motor;
  let p = plan.premium;
  const ncb = motorNcbPercent(m);
  const ref = plan.ncb ?? 25;
  if (ncb < ref) p = Math.round(p * (1 + (ref - ncb) * 0.011));
  else if (ncb > ref) p = Math.round(p * (1 - (ncb - ref) * 0.009));
  if (m.policyType === 'tp') p = Math.round(p * 0.38);
  return p;
}

function termPremiumForPlan(plan) {
  const tq = quoteForm.term;
  let p = plan.premium;
  const cover = tq.cover || plan.cover || 100;
  if (plan.cover) p = Math.round(p * (cover / plan.cover));
  const age = Number(tq.age);
  if (age > 30) p = Math.round(p * (1 + (age - 30) * 0.038));
  if (tq.smoking === 'yes') p = Math.round(p * 1.32);
  return p;
}

function quotePremiumForPlan(plan, product) {
  if (product === 'health') return healthPremiumForPlan(plan);
  if (product === 'motor') return motorPremiumForPlan(plan);
  if (product === 'term') return termPremiumForPlan(plan);
  if (product === 'home') return homePremiumForPlan(plan);
  return plan.premium;
}

let quoteForm = {
  health: defaultHealthQuoteForm(),
  motor: defaultMotorQuoteForm(),
  term: defaultTermQuoteForm(),
  home: defaultHomeQuoteForm(),
};

const PRODUCT_CONFIG = {
  health: { label: 'Health insurance', resultsStep: 3, maxStep: 5, hasAddons: true },
  motor: { label: 'Motor insurance', resultsStep: 1, maxStep: 3, hasAddons: true },
  term: { label: 'Term life insurance', resultsStep: 1, maxStep: 2, hasAddons: false },
  home: { label: 'Home insurance', resultsStep: 1, maxStep: 2, hasAddons: false },
};

const policies = [
  { id: 'h1', type: 'Health', name: 'Family Floater', sumInsured: '₹10,00,000', premium: '₹18,420/yr', renewal: '1 Nov 2027', renewalISO: '2027-11-01', insurer: 'Star Health', status: 'active', policyNo: 'STAR/HL/2026/884521', product: 'health', renewalSave: 2400,
    coverage: ['Hospital admission (in-patient)', 'Day-care procedures', '12,000+ cashless hospitals', 'Sum insured restoration', 'Pre & post hospitalisation'] },
  { id: 'm1', type: 'Motor', name: 'DL 01 AB 1234', sumInsured: 'IDV ₹4.2L', premium: '₹12,890/yr', renewal: '28 Oct 2027', renewalISO: '2027-10-28', insurer: 'HDFC ERGO', status: 'active', policyNo: 'HDFC/M/2025/992341', product: 'motor', renewalSave: 1500,
    coverage: ['Own damage (accident, fire, theft)', 'Third-party liability', 'Personal accident cover', '24×7 roadside assistance', 'Cashless garage network'] },
];

const CASHLESS_HOSPITALS = [
  { id: 'max-saket', name: 'Max Super Speciality, Saket', city: 'Delhi', pincode: '110017', distanceKm: 2.1, insurers: ['Star Health', 'Care Health'] },
  { id: 'apollo-nehru', name: 'Apollo Hospitals, Nehru Place', city: 'Delhi', pincode: '110019', distanceKm: 3.4, insurers: ['Star Health', 'HDFC ERGO'] },
  { id: 'fortis-escorts', name: 'Fortis Escorts Heart Institute', city: 'Delhi', pincode: '110025', distanceKm: 4.8, insurers: ['Star Health', 'Niva Bupa'] },
  { id: 'aiims', name: 'AIIMS', city: 'Delhi', pincode: '110029', distanceKm: 6.2, insurers: ['Reimbursement'] },
  { id: 'blk', name: 'BLK-Max Hospital, Pusa Road', city: 'Delhi', pincode: '110005', distanceKm: 5.1, insurers: ['Star Health', 'ICICI Lombard'] },
  { id: 'medanta', name: 'Medanta, Gurugram', city: 'Gurugram', pincode: '122001', distanceKm: 18, insurers: ['Star Health', 'Care Health'] },
  { id: 'manipal', name: 'Manipal Hospital, Old Airport Road', city: 'Bangalore', pincode: '560017', distanceKm: 4.2, insurers: ['Star Health', 'HDFC ERGO'] },
  { id: 'lilavati', name: 'Lilavati Hospital', city: 'Mumbai', pincode: '400050', distanceKm: 3.8, insurers: ['Star Health', 'Max Bupa'] },
];

const CLAIM_DOC_CHECKLISTS = {
  health: [
    { id: 'hc1', label: 'Health card / e-card', required: true },
    { id: 'hc2', label: 'Photo ID & address proof', required: true },
    { id: 'hc3', label: 'Doctor prescription & admission note', required: true },
    { id: 'hc4', label: 'Discharge summary', required: true },
    { id: 'hc5', label: 'Hospital bills (itemised)', required: true },
    { id: 'hc6', label: 'Cancelled cheque / bank proof', required: false },
  ],
  motor: [
    { id: 'mc1', label: 'RC & valid driving licence', required: true },
    { id: 'mc2', label: 'FIR / police report (if theft/third party)', required: false },
    { id: 'mc3', label: 'Damage photos (all angles)', required: true },
    { id: 'mc4', label: 'Repair estimate from garage', required: true },
    { id: 'mc5', label: 'Survey report (if insurer appointed)', required: false },
    { id: 'mc6', label: 'Invoice after repair (for reimbursement)', required: false },
  ],
};

const savedQuotes = [
  { id: 'q1', product: 'Health', plan: 'Care Supreme', premium: '₹16,990/yr', saved: '2 days ago' },
  { id: 'q2', product: 'Motor', plan: 'Digit Comprehensive', premium: '₹11,200/yr', saved: '5 days ago' },
];

const claims = [
  {
    id: 'c1',
    policyId: 'h1',
    policy: 'Health — Family Floater',
    hospital: 'Max Hospital, Saket',
    status: 'Documents review',
    statusLabel: 'In review',
    date: '15 Sep 2026',
    amount: '₹1,24,500',
    amountNote: 'Estimated amount — final approval is by the insurer.',
    nextAction: 'Upload discharge summary',
    nextOwner: 'you',
    expectedUpdate: '18 Sep 2026',
    standardPhase: 1,
    decisionOutcome: null,
    docs: [
      { id: 'd1', label: 'Health card / policy copy', required: true, done: true },
      { id: 'd2', label: 'Pre-auth approval', required: true, done: true },
      { id: 'd3', label: 'Discharge summary', required: true, done: false },
      { id: 'd4', label: 'Final hospital bills (originals)', required: true, done: false },
      { id: 'd5', label: 'Cancelled cheque / bank details', required: false, done: false },
    ],
    decision: null,
  },
  {
    id: 'c2',
    policyId: 'm1',
    policy: 'Motor — DL 01 AB 1234',
    hospital: 'MyTVS Auto, Lajpat Nagar',
    status: 'Survey complete',
    statusLabel: 'Waiting for insurer',
    date: '2 Sep 2026',
    amount: '₹18,200',
    amountNote: 'Estimate — insurer may revise after survey.',
    nextAction: 'Insurer reviewing repair estimate',
    nextOwner: 'insurer',
    expectedUpdate: '20 Sep 2026',
    standardPhase: 1,
    decisionOutcome: null,
    docs: [
      { id: 'm1', label: 'RC & driving licence', required: true, done: true },
      { id: 'm2', label: 'Damage photos', required: true, done: true },
      { id: 'm3', label: 'Repair estimate', required: true, done: true },
    ],
    decision: {
      label: 'Pending insurer decision',
      text: 'When your insurer shares a decision, it will appear here with their explanation.',
    },
  },
];

let supportCases = [
  {
    id: 'CASE-2026-1042',
    policyId: 'h1',
    category: 'documents',
    subject: 'Correct nominee name on policy',
    status: 'In Progress',
    created: '10 Sep 2026',
    nextAction: 'Hollow verifying your signed endorsement form',
    expectedUpdate: '17 Sep 2026',
    escalated: false,
    timeline: [
      { at: '10 Sep 2026', title: 'Case opened', desc: 'You reported nominee spelling mismatch.', done: true },
      { at: '11 Sep 2026', title: 'Documents received', desc: 'Aadhaar copy uploaded.', done: true },
      { at: '12 Sep 2026', title: 'Sent to insurer', desc: 'Star Health endorsement queue.', done: true, active: false },
      { at: 'Pending', title: 'Insurer update', desc: 'Waiting for corrected policy PDF.', done: false, active: true },
    ],
    messages: [
      { from: 'you', at: '10 Sep 2026, 10:20', text: 'Nominee name shows "Priya S" but should be "Priya Sharma".' },
      { from: 'hollow', at: '10 Sep 2026, 11:05', text: 'Thanks. Please upload Aadhaar and signed endorsement form.' },
      { from: 'you', at: '11 Sep 2026, 09:15', text: 'Uploaded Aadhaar.' },
    ],
    attachments: ['aadhaar.pdf'],
  },
  {
    id: 'CASE-2026-0988',
    policyId: 'm1',
    category: 'payment',
    subject: 'Premium receipt not received',
    status: 'Waiting for Customer',
    created: '5 Sep 2026',
    nextAction: 'Share payment UTR or card last-4 digits',
    expectedUpdate: '16 Sep 2026',
    escalated: false,
    timeline: [
      { at: '5 Sep 2026', title: 'Case opened', desc: 'Receipt missing after renewal payment.', done: true },
      { at: '6 Sep 2026', title: 'Hollow requested info', desc: 'Need UTR to trace payment.', done: true, active: true },
    ],
    messages: [
      { from: 'you', at: '5 Sep 2026, 18:00', text: 'Paid motor renewal but no email receipt.' },
      { from: 'hollow', at: '6 Sep 2026, 10:30', text: 'Please reply with UTR or last 4 digits of card used. We will trace the payment with your bank using the details you provide.' },
    ],
    attachments: [],
  },
];

const POLICY_DOCTOR_PROFILES = {
  h1: {
    sampleBanner: '',
    plainSummary: 'Your Star Health family floater covers hospital stays, day-care, and cashless treatment at 12,000+ hospitals. Restoration of sum insured applies once per year where applicable.',
    coverage: [
      'In-patient hospitalisation (room rent as per plan schedule)',
      'Day-care procedures listed in policy schedule',
      'Pre-hospitalisation up to 60 days & post-hospitalisation up to 180 days',
      'Ambulance charges up to ₹2,000 per hospitalisation',
    ],
    exclusions: [
      'Cosmetic or plastic surgery unless medically necessary',
      'Self-inflicted injury or substance abuse',
      'War, nuclear risks, and illegal activities',
      'Treatment outside India unless add-on purchased',
    ],
    waiting: [
      { label: 'Initial waiting', value: '30 days from policy start' },
      { label: 'Pre-existing diseases', value: '36 months (varies by disclosure)' },
      { label: 'Specified ailments', value: '24 months for select conditions' },
    ],
    deductibles: [
      { label: 'Co-pay', value: '0% on this policy' },
      { label: 'Deductible', value: 'None on base plan' },
    ],
    limits: [
      { label: 'Sum insured', value: '₹10,00,000 per policy year' },
      { label: 'Restoration', value: '100% once per year if exhausted' },
    ],
    warnings: [
      'Cashless is subject to hospital empanelment and TPA approval — not guaranteed in the app.',
      'Pre-existing conditions must be declared; undisclosed conditions may affect claims (general principle).',
    ],
    clauses: {
      waiting: { title: 'Clause 3.2 — Waiting period', page: 8, excerpt: 'No claim shall be payable for any illness within thirty (30) days from the risk commencement date except injury due to accident.' },
      room: { title: 'Clause 5.1 — Room rent', page: 14, excerpt: 'Room rent, nursing, and ICU charges are covered up to the limits specified in the schedule.' },
      ped: { title: 'Clause 4.4 — Pre-existing disease', page: 11, excerpt: 'Pre-existing diseases are covered after thirty-six (36) continuous months of coverage, subject to disclosure.' },
    },
    faq: [
      { q: /waiting|30 day/i, a: 'There is a 30-day initial waiting period except for accidental injury. See Clause 3.2.', clause: 'waiting' },
      { q: /room|rent/i, a: 'Room rent is covered per your schedule; your policy uses a no-cap illustration. See Clause 5.1.', clause: 'room' },
      { q: /pre-?existing|ped/i, a: 'PED cover may apply after 36 months with proper disclosure. See Clause 4.4.', clause: 'ped' },
      { q: /cashless/i, a: 'Cashless needs a network hospital, health card, and TPA pre-auth before admission.' },
      { q: /restoration|sum insured/i, a: 'If sum insured is used up in a policy year, restoration may refill it once (terms in policy schedule).' },
    ],
  },
  m1: {
    sampleBanner: '',
    plainSummary: 'Your comprehensive motor policy covers own damage to your car plus third-party liability. IDV is ₹4.2 lakh. Zero depreciation is not included unless purchased as add-on.',
    coverage: [
      'Own damage — accident, fire, theft (subject to policy terms)',
      'Third-party injury and property damage (statutory cover)',
      'Personal accident cover for owner-driver (₹15 lakh)',
      '24×7 roadside assistance (add-on bundle)',
    ],
    exclusions: [
      'Driving without valid licence or under influence',
      'Wear and tear, mechanical breakdown',
      'Consequential loss unless covered by add-on',
      'Commercial use if policy is private',
    ],
    waiting: [
      { label: 'Policy start', value: 'Cover active from policy inception' },
      { label: 'Transfer NCB', value: 'NCB subject to prior insurer letter' },
    ],
    deductibles: [
      { label: 'Compulsory deductible', value: '₹1,000 per claim' },
      { label: 'Voluntary deductible', value: 'Not selected' },
    ],
    limits: [
      { label: 'IDV', value: '₹4,20,000 declared value' },
      { label: 'Third-party', value: 'As per Motor Vehicles Act limits' },
    ],
    warnings: [
      'IDV affects total loss payout — review at renewal.',
      'Repairs at non-network garages may be reimbursement only.',
    ],
    clauses: {
      idv: { title: 'Section 2 — IDV', page: 6, excerpt: 'Insured Declared Value is the maximum liability for total loss or theft of the vehicle.' },
      deductible: { title: 'Section 8 — Deductible', page: 19, excerpt: 'Each own-damage claim is subject to compulsory deductible stated in the schedule.' },
    },
    faq: [
      { q: /idv/i, a: 'IDV is your car\'s insured value for total loss/theft. IDV: ₹4.2L. See Section 2.', clause: 'idv' },
      { q: /deductible/i, a: 'Compulsory deductible: ₹1,000 per own-damage claim. See Section 8.', clause: 'deductible' },
      { q: /zero dep|depreciation/i, a: 'Zero depreciation is an optional add-on — confirm on your policy schedule.' },
      { q: /ncb/i, a: 'No Claim Bonus reduces premium after claim-free years; it can drop after a claim (general principle).' },
    ],
  },
  uploaded: {
    sampleBanner: '',
    plainSummary: 'This looks like a health insurance policy document. Review the schedule and policy wording for exact terms.',
    coverage: ['Hospitalisation cover mentioned on page 1', 'Day-care list referenced'],
    exclusions: ['Cosmetic treatment excluded', 'Substance abuse excluded'],
    waiting: [{ label: 'Initial', value: '30 days from policy start' }],
    deductibles: [{ label: 'Co-pay', value: 'Check policy schedule' }],
    limits: [{ label: 'Sum insured', value: 'See policy schedule' }],
    warnings: ['Do not rely on this upload summary for claims. Use your insurer-issued policy PDF.'],
    clauses: {},
    faq: [],
  },
};

const paymentMethods = [
  { id: 'upi', icon: 'smartphone', labelKey: 'pay.upi', desc: 'GPay, PhonePe, Paytm' },
  { id: 'card', icon: 'card', labelKey: 'pay.card', desc: 'Credit / Debit' },
  { id: 'netbank', icon: 'bank', labelKey: 'pay.netbank', desc: 'All major banks' },
  { id: 'emi', icon: 'calendar', labelKey: 'pay.emi', desc: '3 / 6 / 12 months' },
  { id: 'wallet', icon: 'wallet', labelKey: 'pay.wallet', desc: 'Paytm, Amazon Pay' },
  { id: 'enach', icon: 'repeat', labelKey: 'pay.enach', desc: 'e-NACH renewals' },
];

const aiSuggestions = ['ai.suggest.health', 'ai.suggest.motor', 'ai.suggest.term', 'ai.suggest.home'];

const AI_PRODUCT_PROMPT_QUERIES = {
  en: {
    'ai.suggest.health': 'What should I look for in a family health insurance plan?',
    'ai.suggest.motor': 'What is covered under comprehensive motor insurance?',
    'ai.suggest.term': 'How much term life cover do I need for my family?',
    'ai.suggest.home': 'What does home insurance cover for structure and contents?',
    'ai.suggest.compare': 'Help me compare two health plans side by side',
    'ai.suggest.waiting': 'Explain waiting periods in health insurance in simple terms',
    'ai.suggest.cashless': 'How does cashless hospitalisation work?',
    'ai.suggest.claimHelp': 'What documents do I need to start a health claim?',
  }
};

const AI_STANDARD_SUGGESTIONS = ['ai.suggest.health', 'ai.suggest.motor', 'ai.suggest.term', 'ai.suggest.home'];

const AI_CHAT_SUGGESTIONS = [
  'ai.suggest.health',
  'ai.suggest.motor',
  'ai.suggest.compare',
  'ai.suggest.waiting',
  'ai.suggest.cashless',
  'ai.suggest.claimHelp',
];

const AI_SUGGEST_TO_FINDER = {
  'ai.suggest.health': 'family',
  'ai.suggest.motor': 'vehicle',
  'ai.suggest.term': 'term',
  'ai.suggest.home': 'home',
};

const AI_SUGGEST_SHORT_LABEL = {
  en: {
    'ai.suggest.health': 'Health',
    'ai.suggest.motor': 'Motor',
    'ai.suggest.term': 'Term life',
    'ai.suggest.home': 'Home',
  }
};

const AI_TERM_GLOSSARY = {
  'sum insured': 'The maximum amount the insurer pays in a policy year. Think of it as your coverage ceiling — hospital bills up to this limit are covered.',
  'co-pay': 'Your share of each claim — e.g. 10% co-pay means you pay 10% and the insurer pays 90%. Zero co-pay = insurer pays everything (within limits).',
  'copay': 'Your share of each claim — e.g. 10% co-pay means you pay 10% and the insurer pays 90%. Zero co-pay = insurer pays everything (within limits).',
  'idv': 'Insured Declared Value — your car\'s current market value. This is the max payout if your vehicle is totalled or stolen.',
  'ncb': 'No Claim Bonus — discount on premium for each year you don\'t make a claim. Grows up to 50% over 5 claim-free years.',
  'deductible': 'Amount you pay before insurance kicks in. Higher deductible = lower premium, but more out-of-pocket per claim.',
  'waiting period': 'Time after buying when certain claims aren\'t covered. Initial: 30 days. Pre-existing diseases: 2–4 years depending on plan.',
  'ped': 'Pre-Existing Disease — any illness you had before buying the policy. Usually has a 2–4 year waiting period.',
  'room rent': 'Daily hospital room charge limit. "No cap" = any room type. "Single AC" = only up to single AC room charges covered.',
  'cashless': 'Hospital bills paid directly by insurer. Show your health card → TPA approves → you pay only non-covered items.',
  'portability': 'Switch health insurer without losing waiting-period credit. Apply 45+ days before renewal.',
  'zero dep': 'Zero depreciation add-on — insurer pays full repair cost without deducting for parts\' age/wear. Saves 15–20% on claims.',
  'tp': 'Third Party — legally required motor cover for injury/damage to others. Does NOT cover your own car.',
  'comprehensive': 'Full motor cover — own damage + third party + optional add-ons like zero dep, engine protect.',
  'term life': 'Pure life cover — pays lump sum to family if you pass away during the term. Lowest cost for high cover.',
  'free look': '15–30 day window after buying to cancel and get a full refund if you change your mind.',
};

function t(k) { return i18n.en[k] || k; }
function phoneTelHref() {
  const digits = PHONE_NUMBER.replace(/\D/g, '');
  return digits ? `tel:${digits}` : 'tel:';
}
function formatI18n(template, vars = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

function bottomNavTabForView(view) {
  if (view === 'home') return 'home';
  if (view === 'explore') return 'explore';
  if (['policies', 'policy-detail', 'policy-doctor', 'renew'].includes(view)) return 'policies';
  if (['claims', 'claim-detail', 'claim-start'].includes(view)) return 'claims';
  if (['help', 'cases', 'case-create', 'case-detail'].includes(view)) return 'help';
  return null;
}

function syncBottomNav(view) {
  const tab = bottomNavTabForView(view);
  const nav = document.getElementById('bottomNav');
  document.querySelectorAll('.bottom-nav__item').forEach((btn) => {
    const match = tab && btn.dataset.view === tab;
    btn.classList.toggle('active', !!match);
    if (match) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });
  if (nav && tab) nav.dataset.activeTab = tab;
  else if (nav) delete nav.dataset.activeTab;
}

function syncShellChrome() {
  document.documentElement.lang = 'en';
  const call = document.getElementById('callExpert');
  if (call) {
    call.href = phoneTelHref();
    call.setAttribute('aria-label', formatI18n(t('header.expertCall'), { phone: PHONE_NUMBER }));
  }
  const callNum = document.getElementById('callExpertNum');
  if (callNum) callNum.textContent = PHONE_NUMBER;
  updateAuthHeader();
}
function formatPremium(n) { return '₹' + n.toLocaleString('en-IN'); }
function yearlyToMonthly(yearly) { return Math.round(yearly / 12); }

function getPlanTrust(planId, product) {
  if (PLAN_TRUST[planId]) return PLAN_TRUST[planId];
  const defaults = PLAN_TRUST_DEFAULTS[product] || PLAN_TRUST_DEFAULTS.generic;
  return defaults;
}

function renderPlanPriceDisplay(premium, opts = {}) {
  const monthly = yearlyToMonthly(premium);
  const billingNote = `Billed yearly · ${formatPremium(premium)} incl. GST`;
  const indicative = opts.indicative
    ? '<div class="plan-price__billing">Indicative price — changes with age, cover, NCB, smoking and insurer.</div>'
    : '';
  return `<div class="plan-price"><div class="plan-price__month">${formatPremium(monthly)}<span class="plan-price__per">${t('plan.perMonth')}</span></div><div class="plan-price__billing">${billingNote}</div>${indicative}</div>`;
}

const RESULTS_LOAD_PRODUCTS = new Set(['health', 'motor', 'term', 'home']);

function isProductResultsStep(type, step) {
  const cfg = PRODUCT_CONFIG[type];
  return cfg && step === cfg.resultsStep && RESULTS_LOAD_PRODUCTS.has(type);
}

function renderResultsLoading() {
  return `<div class="results-loading card" role="status" aria-live="polite">
    <div class="results-loading__spinner" aria-hidden="true"></div>
    <p class="results-loading__text">${t('results.loading')}</p>
  </div>`;
}

function renderResultsError(product) {
  const key = `results.error.${product}`;
  const text = i18n.en[key] || 'We could not load plans right now.';
  return `<div class="results-error card" role="alert">
    <p class="results-error__text">${text}</p>
    <button type="button" class="btn btn--secondary btn--sm" data-action="results-retry" data-product="${product}">${t('results.retry')}</button>
  </div>`;
}

function retryQuoteResults(product) {
  quoteResultsError = null;
  quoteResultsLoading = product;
  render();
  announcePage(captureAppState());
  setTimeout(() => {
    quoteResultsLoading = null;
    render();
    announcePage(captureAppState());
  }, 550);
}

function renderResultsEmpty(product) {
  const cfg = {
    health: { text: 'No plans match these filters.', cta: 'Show all plans', action: 'results-reset-health' },
    motor: { text: 'No motor quotes to show.', cta: 'Edit vehicle details', action: 'results-goto-step', step: 0 },
    term: { text: 'No term plans for this cover.', cta: 'Adjust your details', action: 'results-goto-step', step: 0 },
    home: { text: 'No home plans match these filters.', cta: 'Show all plans', action: 'results-reset-home' },
  }[product] || { text: 'No plans found.', cta: 'Try again', action: 'results-reset-health' };
  const attrs = cfg.step != null
    ? `data-action="${cfg.action}" data-goto-step="${cfg.step}"`
    : `data-action="${cfg.action}"`;
  return `<div class="results-empty card">
    <p class="results-empty__text">${cfg.text}</p>
    <button type="button" class="btn btn--secondary btn--sm" ${attrs}>${cfg.cta}</button>
  </div>`;
}

function renderResultsPlanSection(product, plans, renderItem) {
  if (quoteResultsError === product) return renderResultsError(product);
  if (quoteResultsLoading === product) return renderResultsLoading();
  if (!plans.length) return renderResultsEmpty(product);
  return `<div class="plan-list" style="padding:0 1rem 5rem">${plans.map(renderItem).join('')}</div>`;
}

function finishResultsLoading() {
  quoteResultsLoading = null;
  render();
  announcePage(captureAppState());
}

function startResultsLoadingIfNeeded(type, step) {
  if (!isProductResultsStep(type, step)) return false;
  quoteResultsError = null;
  quoteResultsLoading = type;
  render();
  announcePage(captureAppState());
  setTimeout(finishResultsLoading, 550);
  return true;
}

function renderPlanTrustStats(plan, product) {
  const parts = [];
  if (plan.claims != null) {
    parts.push(`<span class="plan-trust__stat">${plan.claims}% claim settlement ratio</span>`);
  }
  if (product === 'health' && plan.hospitals) {
    parts.push(`<span class="plan-trust__stat">${plan.hospitals.toLocaleString()}+ cashless hospitals</span>`);
  }
  if (!parts.length) return '';
  return `<div class="plan-trust">${parts.join('')}</div>`;
}

function renderPlanPlainSummary(planId, product) {
  const meta = getPlanTrust(planId, product);
  if (!meta.plainEn?.length) return '';
  return `<div class="plan-plain-summary" role="note">
    <div class="plan-plain-summary__label">${t('plan.plainSummary')}</div>
    <p class="plan-plain-summary__lines" lang="en">${meta.plainEn.join('<br>')}</p>
  </div>`;
}

function renderPlanCollapsibleSections(planId, product) {
  const meta = getPlanTrust(planId, product);
  const notItems = meta.notCovered;
  const waitItems = meta.waiting;
  return `
    <details class="plan-collapsible">
      <summary>${t('plan.notCovered')}</summary>
      <ul class="plan-collapsible__list">${notItems.map((c) => `<li>${c}</li>`).join('')}</ul>
    </details>
    <details class="plan-collapsible">
      <summary>${t('plan.waiting')}</summary>
      <ul class="plan-collapsible__list">${waitItems.map((c) => `<li>${c}</li>`).join('')}</ul>
    </details>`;
}

function renderPlanDetailsHeader(plan, product, { totalPremium, metaHtml = '' } = {}) {
  const color = insurerColor(plan.insurer);
  const premium = totalPremium ?? plan.premium;
  return `
    <div class="card plan-details-card">
      <div class="plan-item__header plan-details-card__header">
        <div class="plan-item__logo" style="background:${color}" aria-hidden="true">${insurerInitials(plan.insurer)}</div>
        <div class="plan-item__info">
          <div class="plan-item__insurer">${plan.insurer}</div>
          <div class="plan-item__plan">${plan.plan}</div>
        </div>
      </div>
      ${renderPlanTrustStats(plan, product)}
      ${metaHtml}
      <div class="plan-details-card__price">${renderPlanPriceDisplay(premium)}</div>
    </div>`;
}

function renderInsuranceFooter() {
  const tel = PHONE_NUMBER.replace(/\D/g, '');
  return `<footer class="home-footer home-footer--v2 site-footer site-footer--mini" aria-label="Site footer">
    <div class="home-footer__logo">Hollow</div>
    <p class="site-footer__reach">
      <a href="tel:${tel}">${PHONE_NUMBER}</a>
      <span class="site-footer__reach-sep" aria-hidden="true">·</span>
      <a href="mailto:grievance@hollow.in">grievance@hollow.in</a>
    </p>
    <p class="site-footer__fine">${t('footer.disclaimer')} ${t('footer.copyrightShort')}</p>
  </footer>`;
}

function compareValuesDiffer(vals) {
  return vals.some((v, i) => vals.some((x, j) => j !== i && x !== v));
}

function compareCellDiffers(vals, idx) {
  const v = vals[idx];
  return vals.some((x, i) => i !== idx && x !== v);
}

function compactFromLabel(fromLabel) {
  const n = parseInt(String(fromLabel).replace(/[^\d]/g, ''), 10);
  if (!Number.isFinite(n) || n < 1000) return fromLabel;
  if (n >= 100000) {
    const lakhs = n / 100000;
    const rounded = lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1);
    return `₹${rounded}L`;
  }
  if (n >= 10000) return `₹${Math.round(n / 1000)}k`;
  const k = n / 1000;
  return `₹${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}k`;
}
function insurerColor(name) { return INSURER_COLORS[name] || '#0d4f8b'; }
function insurerInitials(name) { return name.split(' ').map(w => w[0]).join('').slice(0, 2); }

function renderJTBDSteps(active = null, clickable = false) {
  const steps = [
    { id: 'find', title: 'Find', desc: 'AI suggests'},
    { id: 'compare', title: 'Compare', desc: 'Side by side'},
    { id: 'buy', title: 'Buy', desc: 'In 2 minutes'},
  ];
  const doneBefore = active ? steps.findIndex(s => s.id === active) : -1;
  return `<div class="jtbd-steps jtbd-steps--3">${steps.map((s, i) => {
    const tag = clickable ? 'button' : 'div';
    const attrs = clickable ? ` type="button" data-jtbd="${s.id}"` : '';
    const cls = `jtbd-step ${active === s.id ? 'jtbd-step--active' : ''} ${active && active !== s.id && i < doneBefore ? 'jtbd-step--done' : ''} ${clickable ? 'jtbd-step--clickable' : ''}`;
    return `<${tag} class="${cls}"${attrs}>
      <div class="jtbd-step__title">${s.title}</div>
      <div class="jtbd-step__desc">${s.desc}</div>
    </${tag}>`;
  }).join('')}</div>`;
}

function handleJTBDStep(step) {
  if (step === 'find') openAIPanel('', 'finder');
  else if (step === 'compare') startQuote('health');
  else startQuote(document.getElementById('heroProduct')?.value || 'health');
}

function renderProtectPicker() {
  const items = [
    { icon: 'user', label: 'Myself', sub: 'Health, term life', finder: 'myself' },
    { icon: 'family', label: 'Family', sub: 'Floater, term', finder: 'family' },
    { icon: 'motor', label: 'Vehicle', sub: 'Car, bike', finder: 'vehicle' },
    { icon: 'home', label: 'Home & belongings', sub: 'Structure, contents', finder: 'home' },
  ];
  return `<div class="protect-picker">
    <div class="protect-picker__title">What do you want to protect?</div>
    <div class="protect-picker__chips">${items.map(i => `
      <button type="button" class="protect-picker__chip" data-action="finder-start" data-finder-protect="${i.finder}">
        ${icon(i.icon, ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} ${i.label}
      </button>`).join('')}
    </div>
  </div>`;
}

function renderConfusionBusters(product) {
  const busts = {
    health: [
      { q: 'What is sum insured?', a: PLAIN_ENGLISH.health.sumInsured },
      { q: 'What is co-pay?', a: PLAIN_ENGLISH.health.copay },
      { q: 'How does cashless work?', a: 'Show card at hospital → TPA pre-auth → insurer pays directly.'},
    ],
    motor: [
      { q: 'What is IDV?', a: PLAIN_ENGLISH.motor.idv },
      { q: 'What is NCB?', a: PLAIN_ENGLISH.motor.ncb },
      { q: 'TP vs Comprehensive?', a: 'TP = legal minimum only. Comprehensive = full protection for your car.'},
    ],
    term: [
      { q: 'What is term life?', a: PLAIN_ENGLISH.term.cover },
    ],
    home: [
      { q: 'Structure vs contents?', a: 'Structure = walls, floors. Contents = furniture, electronics.'},
    ],
  };
  const list = busts[product] || busts.health;
  return `<div class="confusion-busters">
    <div class="confusion-busters__title">Confused? We explain</div>
    <div class="confusion-busters__list">${list.map((b, i) => `
      <button type="button" class="confusion-buster ${openExplainId === `${product}-${i}` ? 'open' : ''}" data-explain="${product}-${i}">
        <span>${b.q}</span>
        ${icon('chevronDown', ICON_SIZE.md, 'hollow-icon hollow-icon--chevron')}
      </button>
      ${openExplainId === `${product}-${i}` ? `<div class="confusion-buster__answer">${b.a}</div>` : ''}
    `).join('')}</div>
  </div>`;
}

function renderCoverageClarity(plan, product) {
  let covered = [];
  let notCovered = [];

  if (product === 'health' || !product) {
    covered = [
      'Hospital admission (in-patient)',
      'Day-care procedures',
      `${plan.hospitals?.toLocaleString() || '12,000'}+ cashless hospitals`,
      plan.restoration ? ('Sum insured restoration') : null,
    ].filter(Boolean);
    notCovered = [
      'Pre-existing conditions (until waiting period ends)',
      'First 30 days (except emergencies)',
      'Cosmetic surgery',
    ];
  } else if (product === 'motor') {
    covered = ['Accident damage', 'Theft', 'Third-party liability', plan.zeroDep ? 'Zero depreciation repairs' : null].filter(Boolean);
    notCovered = ['Wear and tear', 'Drunk driving', 'Driving without licence'];
  } else {
    covered = ['Perils listed in policy document'];
    notCovered = ['Undisclosed information', 'War, nuclear risks'];
  }

  const prod = product || 'health';
  const trustHeader = (prod === 'health' || plan.insurer)
    ? `<div class="coverage-clarity__trust">${renderPlanTrustStats(plan, prod)}</div>`
    : '';

  let notList = notCovered;
  let waitingCollapsibleHtml = '';
  if (plan.id) {
    const meta = getPlanTrust(plan.id, prod);
    notList = meta.notCovered?.length ? meta.notCovered : notCovered;
    const waitItems = meta.waiting;
    if (waitItems?.length) {
      waitingCollapsibleHtml = `<div class="coverage-clarity__collapsibles">
        <details class="plan-collapsible">
          <summary>${t('plan.waiting')}</summary>
          <ul class="plan-collapsible__list">${waitItems.map((c) => `<li>${c}</li>`).join('')}</ul>
        </details>
      </div>`;
    }
  }

  const notColHtml = `
      <div class="coverage-clarity__col coverage-clarity__col--no">
        <div class="coverage-clarity__head">✗ Not covered</div>
        <ul>${notList.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>`;

  return `<div class="coverage-clarity">
    <div class="coverage-clarity__title">Understand — what you're buying</div>
    ${trustHeader}
    ${plan.id ? renderPlanPlainSummary(plan.id, prod) : ''}
    <div class="coverage-clarity__cols">
      <div class="coverage-clarity__col coverage-clarity__col--yes">
        <div class="coverage-clarity__head">✓ Covered</div>
        <ul>${covered.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
      ${notColHtml}
    </div>
    ${waitingCollapsibleHtml}
    <p class="coverage-clarity__note">Full terms in policy document. Questions? Ask Hollow AI.</p>
  </div>`;
}

function loadAuthUser() {
  try {
    const raw = localStorage.getItem('hollowUser');
    if (!raw) return null;
    const user = JSON.parse(raw);
    if (!user || typeof user !== 'object') return null;
    return {
      ...user,
      name: user.name != null ? String(user.name) : '',
      phone: user.phone != null ? String(user.phone) : '',
      email: user.email != null ? String(user.email) : '',
    };
  } catch {
    return null;
  }
}

function saveAuthUser(user) {
  const prev = loadAuthUser();
  const merged = { ...prev, ...user };
  if (merged.name != null) merged.name = String(merged.name);
  if (merged.phone != null) merged.phone = String(merged.phone);
  if (merged.email != null) merged.email = String(merged.email).trim().toLowerCase();
  localStorage.setItem('hollowUser', JSON.stringify(merged));
  authUser = merged;
  updateAuthHeader();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email || '').trim());
}

function saveAccountEmail() {
  const raw = document.getElementById('accountEmail')?.value.trim() || '';
  if (raw && !isValidEmail(raw)) {
    accountEmailNotice = t('account.emailInvalid');
    render();
    return;
  }
  saveAuthUser({ ...authUser, email: raw });
  accountEmailNotice = raw ? t('account.emailSaved') : ('Email removed');
  render();
}

function loadAppSettings() {
  try {
    const raw = localStorage.getItem('hollowSettings');
    const parsed = raw ? JSON.parse(raw) : {};
    return { ...DEFAULT_APP_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_APP_SETTINGS };
  }
}

function saveAppSettings() {
  appSettings.policyReminders = { ...renewalAlerts };
  localStorage.setItem('hollowSettings', JSON.stringify(appSettings));
}

function applyAppSettings() {
  appSettings = loadAppSettings();
  if (appSettings.policyReminders && typeof appSettings.policyReminders === 'object') {
    Object.assign(renewalAlerts, appSettings.policyReminders);
  }
  if (!appSettings.renewalReminders) {
    policies.forEach((p) => { renewalAlerts[p.id] = false; });
  }
}

function toggleAppSetting(key) {
  if (!(key in appSettings) || key === 'policyReminders') return;
  appSettings[key] = !appSettings[key];
  if (key === 'renewalReminders') {
    policies.forEach((p) => { renewalAlerts[p.id] = appSettings.renewalReminders; });
  }
  saveAppSettings();
  render();
}

function logout() {
  localStorage.removeItem('hollowUser');
  authUser = null;
  signupDraft = { name: '', phone: '', email: '', pendingOtp: null, sentAt: 0, error: '', tab: 'login', channel: 'sms' };
  accountEmailNotice = '';
  updateAuthHeader();
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  setView('home');
}

function updateAuthHeader() {
  const btn = document.getElementById('authBtn');
  if (!btn) return;
  const avatar = btn.querySelector('.header-chip__avatar');
  const nameEl = btn.querySelector('.header-chip__name');
  if (authUser?.verified) {
    const first = (authUser.name || 'User').trim().split(/\s+/)[0];
    const display = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
    if (avatar) {
      avatar.innerHTML = '';
      avatar.textContent = display.charAt(0).toUpperCase();
    }
    if (nameEl) nameEl.textContent = display;
    btn.classList.add('header-chip--logged-in');
    btn.setAttribute('aria-label', formatI18n(t('auth.loggedInAria'), { name: display }));
  } else {
    if (avatar) {
      avatar.textContent = '';
      avatar.innerHTML = typeof icon === 'function' ? icon('user', ICON_SIZE.md, 'hollow-icon') : '';
    }
    if (nameEl) nameEl.textContent = t('auth.login');
    btn.classList.remove('header-chip--logged-in');
    btn.setAttribute('aria-label', t('auth.loginAria'));
  }
}

function openSignup() {
  signupDraft = {
    name: authUser?.name || '',
    phone: authUser?.phone || '',
    email: authUser?.email || '',
    pendingOtp: null,
    sentAt: 0,
    error: '',
    tab: 'login',
    channel: 'sms',
  };
  wizardState = { type: 'signup', step: 0 };
  document.body.classList.add('wizard-mode', 'signup-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function normalizeIndianMobile(raw) {
  let digits = String(raw || '').replace(/\D/g, '');
  while (digits.length > 10 && (digits.startsWith('91') || digits.startsWith('0'))) {
    digits = digits.startsWith('91') ? digits.slice(2) : digits.slice(1);
  }
  return digits;
}

function isValidIndianMobile(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function getSignupOtpValue() {
  const digits = document.querySelectorAll('.otp-digit');
  if (digits.length) return [...digits].map((el) => el.value).join('');
  return document.getElementById('signupOtpSingle')?.value.replace(/\D/g, '') || '';
}

function sendSignupOtp(channel = signupDraft.channel || 'sms') {
  const phoneInput = document.getElementById('signupPhone');
  const phone = normalizeIndianMobile(phoneInput?.value);
  if (phoneInput) phoneInput.value = phone;
  if (!isValidIndianMobile(phone)) {
    signupDraft.error = 'Enter a valid 10-digit mobile number';
    render();
    return;
  }
  signupDraft = {
    ...signupDraft,
    phone,
    name: signupDraft.name || '',
    pendingOtp: SIGNUP_DEMO_OTP,
    sentAt: Date.now(),
    error: '',
    channel,
  };
  wizardState = { type: 'signup', step: 1 };
  pushAppState();
  render();
  announcePage(captureAppState());
}

function verifySignupOtp() {
  const code = getSignupOtpValue();
  if (code.length !== 6) {
    signupDraft.error = 'Enter the 6-digit OTP';
    render();
    return;
  }
  if (code !== signupDraft.pendingOtp) {
    signupDraft.error = 'Incorrect OTP. Please try again';
    render();
    return;
  }
  signupDraft.error = '';
  if (wizardState?.checkoutAuth) {
    const resumed = checkoutResumeWizard;
    checkoutResumeWizard = null;
    saveAuthUser({
      name: authUser?.name || signupDraft.name || ('Customer'),
      phone: signupDraft.phone,
      email: authUser?.email || signupDraft.email || '',
      verified: true,
    });
    activeProduct = resumed?.type || activeProduct;
    checkoutPhase = resumed?.checkoutPhase || 'payment';
    wizardState = resumed || { type: activeProduct, step: PRODUCT_CONFIG[activeProduct]?.maxStep || 2 };
    wizardState.formError = '';
    document.body.classList.add('wizard-mode');
    document.body.classList.remove('signup-mode');
    pushAppState();
    render();
    announcePage(captureAppState());
    return;
  }
  wizardState = { type: 'signup', step: 2 };
  pushAppState();
  render();
  announcePage(captureAppState());
}

function completeSignupProfile() {
  const name = document.getElementById('signupName')?.value.trim() || '';
  if (!name) {
    signupDraft.error = 'Please enter your full name';
    render();
    return;
  }
  signupDraft.name = name;
  const email = document.getElementById('signupEmail')?.value.trim() || signupDraft.email || '';
  if (email && !isValidEmail(email)) {
    signupDraft.error = 'Enter a valid email address';
    render();
    return;
  }
  signupDraft.email = email;
  saveAuthUser({ name, phone: signupDraft.phone, email, verified: true });
  signupDraft.error = '';
  wizardState = { type: 'signup', step: 3 };
  pushAppState();
  render();
  announcePage(captureAppState());
}

function resendSignupOtp() {
  const elapsed = Date.now() - (signupDraft.sentAt || 0);
  if (elapsed < 30000) {
    signupDraft.error = `Please wait ${Math.ceil((30000 - elapsed) / 1000)}s before resending`;
    render();
    return;
  }
  signupDraft.pendingOtp = SIGNUP_DEMO_OTP;
  signupDraft.sentAt = Date.now();
  signupDraft.error = 'OTP sent again';
  render();
}

function finishSignup() {
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  setView('home');
}

function signupShell(backAction, title, bodyHtml, footerHtml = '', variant = '') {
  const done = variant === 'done';
  return `
    <div class="signup-screen${done ? ' signup-screen--done' : ''}">
      <div class="signup-screen__hero${done ? ' signup-screen__hero--compact' : ''}">
        <button type="button" class="signup-screen__back" data-action="${backAction}" aria-label="Back">${iconBack()}</button>
        <div class="signup-screen__logo">Hollow</div>
        ${done ? '' : `<div class="signup-screen__illus" aria-hidden="true">
          <span class="signup-screen__illus-ring"></span>
          <span class="signup-screen__illus-icon">${icon('shield', ICON_SIZE.xl, 'hollow-icon')}</span>
        </div>`}
        ${title ? `<h1 class="signup-screen__title">${title}</h1>` : ''}
      </div>
      <div class="signup-card${done ? ' signup-card--done' : ''}">
        ${bodyHtml}
      </div>
      ${footerHtml ? `<div class="signup-footer">${footerHtml}</div>` : ''}
    </div>`;
}

function signupTrustStrip() {
  return `<div class="signup-trust-strip" role="list" aria-label="Why Hollow is safe">
    <div class="signup-trust-item" role="listitem">
      <span class="signup-trust-item__icon" aria-hidden="true">${icon('compare', ICON_SIZE.md, 'hollow-icon')}</span>
      <span class="signup-trust-item__label">${t('signup.trust1')}</span>
    </div>
    <div class="signup-trust-item" role="listitem">
      <span class="signup-trust-item__icon" aria-hidden="true">${icon('lock', ICON_SIZE.md, 'hollow-icon')}</span>
      <span class="signup-trust-item__label">${t('signup.trust2')}</span>
    </div>
    <div class="signup-trust-item" role="listitem">
      <span class="signup-trust-item__icon" aria-hidden="true">${icon('advisor', ICON_SIZE.md, 'hollow-icon')}</span>
      <span class="signup-trust-item__label">${t('signup.trust3')}</span>
    </div>
  </div>`;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (i18n.en[k]) el.textContent = i18n.en[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const k = el.dataset.i18nPlaceholder;
    if (i18n.en[k]) el.placeholder = i18n.en[k];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const k = el.dataset.i18nAria;
    const label = k ? t(k) : '';
    if (label && label !== k) el.setAttribute('aria-label', label);
  });
  syncShellChrome();
  refreshExpertSuccessCopy();
  syncExpertSubmitLabel();
  document.querySelectorAll('select.hollow-select__native').forEach(refreshHollowSelectOptions);
}

function getOpenOverlay() {
  if (document.getElementById('aiPanel')?.classList.contains('open')) return 'ai';
  if (document.getElementById('expertModal')?.classList.contains('open')) return 'expert';
  return null;
}

/** Design capture deep links (?screen=…&theme=…&nosplash=1) — not shown in UI */
function readDesignCaptureQuery() {
  const params = new URLSearchParams(window.location.search);
  return {
    screen: (params.get('screen') || '').trim().toLowerCase(),
    theme: (params.get('theme') || '').trim().toLowerCase(),
    nosplash: params.get('nosplash') === '1',
  };
}

function applyDesignCaptureTheme(theme) {
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

/** Expand scroll regions so Figma html-to-design captures full page height, not one viewport slice. */
function prepareDesignCaptureForFigma() {
  if (!document.body.classList.contains('design-capture')) return;
  if (document.body.classList.contains('design-capture-behance-frame')) {
    if (document.body.classList.contains('design-capture-behance-frame--clauses')) {
      preparePolicyDoctorClausesCaptureScroll();
    } else if (document.body.classList.contains('design-capture-behance-frame--home-top')) {
      prepareHomeBehanceTopScroll();
    } else if (document.body.classList.contains('design-capture-behance-frame--home-mid')) {
      prepareHomeBehanceMidScroll();
    } else if (document.body.classList.contains('design-capture-behance-frame--home-bottom')) {
      prepareHomeBehanceBottomScroll();
    } else {
      const main = document.getElementById('mainContent');
      if (main) main.scrollTop = 0;
    }
    return;
  }
  if (document.body.classList.contains('design-capture-viewport-exact')) {
    prepareViewportExactCaptureScroll();
    return;
  }
  const main = document.getElementById('mainContent');
  if (main) main.scrollTop = 0;
  document.querySelectorAll(
    '#app .wizard-body, #app .ai-panel__messages, #app .modal__content, #app .hollow-select__menu, #app .compare-table-wrap',
  ).forEach((el) => {
    el.style.overflow = 'visible';
    el.style.maxHeight = 'none';
  });
  document.querySelectorAll('.compare-table-wrap').forEach((el) => {
    el.scrollLeft = 0;
  });
  if (!document.body.classList.contains('design-capture-viewport-exact')) {
    const app = document.getElementById('app');
    if (app) app.style.paddingBottom = '0.75rem';
    document.querySelectorAll('#app .sticky-bar').forEach((el) => {
      el.style.position = 'relative';
      el.style.left = 'auto';
      el.style.transform = 'none';
      el.style.width = '100%';
      el.style.maxWidth = '100%';
      el.style.marginTop = '0.5rem';
    });
  }
}

/** One mobile viewport: results list scrolled to Max Bupa + fixed Compare now bar (attached reference). */
function prepareViewportExactCaptureScroll() {
  window.scrollTo(0, 0);
  const main = document.getElementById('mainContent');
  if (main) main.scrollTop = 0;
  const run = () => {
    const plan = document.querySelector('.plan-item[data-plan-id="max-reassure"]');
    if (!plan) return;
    const offset = 96;
    const y = window.scrollY + plan.getBoundingClientRect().top - offset;
    window.scrollTo(0, Math.max(0, y));
    if (main) {
      const top = plan.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop - offset;
      main.scrollTop = Math.max(0, top);
    }
  };
  run();
  requestAnimationFrame(() => requestAnimationFrame(run));
}

function seedHomeBehanceCapture() {
  authUser = {
    name: 'Customer',
    phone: '9876543210',
    email: 'customer@example.com',
    verified: true,
  };
  currentView = 'home';
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  syncBottomNav('home');
}

function seedPolicyDoctorBehanceCustomer() {
  authUser = {
    name: 'Customer',
    phone: '9876543210',
    email: 'customer@example.com',
    verified: true,
  };
}

function prepareHomeBehanceTopScroll() {
  const main = document.getElementById('mainContent');
  if (main) main.scrollTop = 0;
}

function prepareHomeBehanceMidScroll() {
  const main = document.getElementById('mainContent');
  if (!main) return;
  const run = () => {
    const anchor = document.querySelector('.customer-tools') || document.querySelector('.quick-actions--v2');
    if (!anchor) return;
    const mainRect = main.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const pad = 200;
    main.scrollTop = Math.max(0, main.scrollTop + (anchorRect.top - mainRect.top) - pad);
  };
  run();
  requestAnimationFrame(() => requestAnimationFrame(run));
}

function prepareHomeBehanceBottomScroll() {
  const main = document.getElementById('mainContent');
  if (!main) return;
  const run = () => {
    main.scrollTop = Math.max(0, main.scrollHeight - main.clientHeight);
  };
  run();
  requestAnimationFrame(() => requestAnimationFrame(run));
}

/** Behance frame: scroll summary to clauses + “Good to know” (header & tab bar stay in 844px chrome). */
function preparePolicyDoctorClausesCaptureScroll() {
  const main = document.getElementById('mainContent');
  if (!main) return;
  const run = () => {
    const anchor = document.querySelector('.doctor-alert') || document.querySelector('.doctor-card--clauses');
    if (!anchor) return;
    const mainRect = main.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const pad = 108;
    main.scrollTop = Math.max(0, main.scrollTop + (anchorRect.top - mainRect.top) - pad);
  };
  run();
  requestAnimationFrame(() => requestAnimationFrame(run));
}

/** Remove design-capture query params so refresh opens normal app state (not stuck on ?screen=). */
function stripDesignCaptureSearchParams() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('screen') && !params.has('theme') && !params.has('nosplash')) return;
  params.delete('screen');
  params.delete('theme');
  params.delete('nosplash');
  const qs = params.toString();
  const nextUrl = `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`;
  history.replaceState(history.state, '', nextUrl);
}

function seedMemberMedicalForCapture(member) {
  const med = ensureMemberMedical(member);
  med.ped = 'no';
  med.smoking = 'no';
  med.alcohol = 'no';
  med.surgery12m = 'no';
  med.confirmed = true;
  return med;
}

function seedHealthQuoteFormForCapture(depth = 1) {
  quoteForm.health = defaultHealthQuoteForm();
  const h = quoteForm.health;
  const self = h.members.find((m) => m.id === 'self');
  const spouse = h.members.find((m) => m.id === 'spouse');
  if (self) {
    self.selected = true;
    self.age = 32;
  }
  if (spouse) {
    spouse.selected = true;
    spouse.age = 30;
  }
  h.pincode = '110017';
  h.existingPolicy = 'no';
  h.sumInsured = 10;
  h.maternity = 'not_needed';
  h.roomRent = 'no_cap';
  if (depth >= 2) {
    h.members.filter((m) => m.selected).forEach(seedMemberMedicalForCapture);
  }
}

function seedMotorQuoteFormForCapture() {
  quoteForm.motor = defaultMotorQuoteForm();
  quoteForm.motor.regNo = 'DL 01 AB 1234';
  quoteForm.motor.policyType = 'comprehensive';
  quoteForm.motor.ncbProfile = '25';
}

function seedTermQuoteFormForCapture() {
  quoteForm.term = defaultTermQuoteForm();
  quoteForm.term.age = 32;
  quoteForm.term.cover = 100;
  quoteForm.term.tenure = 30;
  quoteForm.term.smoking = 'no';
  quoteForm.term.incomeLakh = '15';
}

function seedHomeQuoteFormForCapture() {
  quoteForm.home = defaultHomeQuoteForm();
  quoteForm.home.pincode = '110017';
  quoteForm.home.propertyType = 'owned_apartment';
  quoteForm.home.areaSqFt = 1200;
  quoteForm.home.coverType = 'both';
  quoteForm.home.structureValueLakh = 50;
}

function seedCheckoutForCapture(product) {
  resetCheckoutSession(product);
  checkoutForm = { proposerName: 'Priya Sharma', nominee: 'Priya Sharma', nomineeDob: '', pan: 'ABCDE1234F', declaration: true };
  selectedPayment = 'upi';
  selectedBankOffer = 'paytm';
  paymentForm.upiId = 'priya@okicici';
  checkoutPhase = 'payment';
}

function prepareWizardCapture(product, step, { pay = false, formDepth = 0, resultsError = false } = {}) {
  activeProduct = product;
  healthFilter = 'all';
  healthSort = 'premium';
  productFilter[product] = 'all';
  productSort[product] = 'premium';
  compareList = [];
  appliedCoupon = null;
  couponInput = '';
  quoteResultsLoading = null;
  quoteResultsError = resultsError ? product : null;
  if (product === 'health') seedHealthQuoteFormForCapture(formDepth);
  else if (product === 'motor') seedMotorQuoteFormForCapture();
  else if (product === 'term') seedTermQuoteFormForCapture();
  else if (product === 'home') seedHomeQuoteFormForCapture();
  const plans = PLAN_DATA[product] || healthPlans;
  selectedPlanId = plans[0]?.id || healthPlans[0].id;
  wizardState = { type: product, step, product, formError: '' };
  if (product === 'health' && step >= 1) {
    wizardState.medicalMemberId = 'self';
  }
  document.body.classList.add('wizard-mode');
  document.body.classList.remove('signup-mode');
  if (pay) {
    seedCheckoutForCapture(product);
  } else if (step >= (PRODUCT_CONFIG[product]?.maxStep ?? 2)) {
    resetCheckoutSession(product);
  }
}

/** Health results + 3 plans selected + compare bar (before Compare now). */
function seedHealthResultsComparePickForCapture() {
  prepareWizardCapture('health', 3, { formDepth: 2 });
  const h = quoteForm.health;
  h.members.forEach((m) => { m.selected = m.id === 'self'; });
  const self = h.members.find((m) => m.id === 'self');
  if (self) self.age = 23;
  h.pincode = '333333';
  h.sumInsured = 50;
  h.planType = 'individual';
  h.existingPolicy = 'no';
  h.maternity = 'not_needed';
  compareList = ['aditya-activ', 'care-supreme', 'bajaj-guard'];
  healthSort = 'premium';
  healthFilter = 'all';
}

/** Compare wizard for Figma capture — 3 plans, optional “Key differences” mode. */
function seedCompareForCapture(product, { diffOnly = false } = {}) {
  const resultsStep = PRODUCT_CONFIG[product]?.resultsStep ?? 3;
  const formDepth = product === 'health' ? 2 : 0;
  prepareWizardCapture(product, resultsStep, { formDepth });
  const plans = PLAN_DATA[product] || healthPlans;
  const preferred = product === 'health'
    ? ['aditya-activ', 'care-supreme', 'bajaj-guard']
    : plans.slice(0, 3).map((p) => p.id);
  compareList = preferred.filter((id) => plans.some((p) => p.id === id));
  if (compareList.length < 2) compareList = plans.slice(0, 3).map((p) => p.id);
  compareHideEqualRows = diffOnly;
  wizardState = { type: 'compare', compareProduct: product };
  document.body.classList.add('wizard-mode');
}

function seedSuccessScreenForCapture(product = 'health') {
  prepareWizardCapture(product, 0, { formDepth: 2 });
  const plans = PLAN_DATA[product] || healthPlans;
  const plan = plans.find((p) => p.id === selectedPlanId) || plans[0];
  const premium = product === 'health' ? healthPremiumForPlan(plan)
    : product === 'motor' ? motorPremiumForPlan(plan)
    : product === 'term' ? termPremiumForPlan(plan)
    : plan.premium;
  lastCheckout = {
    product,
    planId: selectedPlanId,
    premium,
    addonsSummary: getCheckoutAddonsSummary(product),
    policyNo: generatePolicyNumber(product),
  };
  wizardState = { type: 'success', product };
  document.body.classList.add('wizard-mode');
  document.body.classList.remove('signup-mode');
}

function openSignupForCapture() {
  signupDraft = {
    name: '',
    phone: '',
    email: '',
    pendingOtp: null,
    sentAt: 0,
    error: '',
    tab: 'login',
    channel: 'sms',
  };
  wizardState = { type: 'signup', step: 0 };
  document.body.classList.add('wizard-mode', 'signup-mode');
}

function openSignupOtpForCapture() {
  signupDraft = {
    name: '',
    phone: '9876543210',
    email: '',
    pendingOtp: SIGNUP_DEMO_OTP,
    sentAt: Date.now() - 8000,
    error: '',
    tab: 'login',
    channel: 'sms',
  };
  wizardState = { type: 'signup', step: 1 };
  document.body.classList.add('wizard-mode', 'signup-mode');
}

function openSignupProfileForCapture() {
  signupDraft = {
    name: '',
    phone: '9876543210',
    email: '',
    pendingOtp: SIGNUP_DEMO_OTP,
    sentAt: 0,
    error: '',
    tab: 'login',
    channel: 'sms',
  };
  wizardState = { type: 'signup', step: 2 };
  document.body.classList.add('wizard-mode', 'signup-mode');
}

function openSignupSuccessForCapture() {
  saveAuthUser({
    name: 'Priya Sharma',
    phone: '9876543210',
    email: 'priya@email.com',
    verified: true,
  });
  signupDraft = {
    name: 'Priya Sharma',
    phone: '9876543210',
    email: 'priya@email.com',
    pendingOtp: null,
    sentAt: 0,
    error: '',
    tab: 'login',
    channel: 'sms',
  };
  wizardState = { type: 'signup', step: 3 };
  document.body.classList.add('wizard-mode', 'signup-mode');
}

function openCoverGuideForCapture() {
  wizardState = {
    type: 'cover-guide',
    step: 0,
    guideProduct: 'health',
    answers: { age: '32', cityTier: 'metro', familyCount: '2', conditions: 'no' },
    formError: '',
  };
  document.body.classList.add('wizard-mode');
  document.body.classList.remove('signup-mode');
}

function seedClaimStartForCapture({ step = 0, policyId = 'h1', claimType, checked = {}, formError = '' } = {}) {
  const pol = getPolicyById(policyId) || policies.find((p) => p.id === policyId) || policies[0];
  const pid = pol?.id || policyId || 'h1';
  const product = pol?.product === 'motor' ? 'motor' : 'health';
  const defaultType = claimType || (product === 'motor' ? 'own_damage' : 'cashless');
  claimStartState = {
    step,
    policyId: pid,
    claimType: defaultType,
    checked: { ...checked },
    formError,
  };
  serviceContext = { policyId: null, claimId: null, caseId: null };
  currentView = 'claim-start';
  wizardState = null;
  syncBottomNav('claims');
}

const DESIGN_CAPTURE_SCREENS = new Set([
  'home', 'home-behance-top', 'home-behance-mid', 'home-behance-bottom',
  'explore', 'policies', 'claims', 'help', 'renew',
  'policy-doctor', 'policy-doctor-pick', 'policy-doctor-pick-behance', 'policy-doctor-clauses-pick',
  'policy-doctor-clause', 'policy-doctor-clause-behance',
  'cases', 'case-create', 'case-detail',
  'help-motor', 'help-garage', 'help-roadside', 'help-network',
  'policy-detail',
  'claim-start', 'claim-start-type', 'claim-start-docs',
  'claim-start-motor', 'claim-start-motor-type', 'claim-start-motor-docs',
  'claim-detail', 'claim-detail-motor', 'ai-panel-claim',
  'signup', 'signup-otp', 'signup-profile', 'signup-success', 'cover-guide',
  'health-1', 'health-2', 'health-3', 'health-results', 'health-addons', 'health-pay',
  'motor-1', 'motor-results', 'motor-addons', 'motor-pay',
  'term-1', 'term-results', 'term-pay',
  'home-1', 'home-results', 'home-pay',
  'success', 'motor-success', 'term-success', 'home-success', 'expert-modal', 'ai-panel',
  'health-results-error', 'motor-results-error', 'term-results-error', 'home-results-error',
  'compare-health-all', 'compare-motor-all', 'compare-term-all', 'compare-home-all',
  'health-results-compare-pick', 'compare-bar-health', 'health-results-compare-exact',
]);

/** @returns {'expert'|'ai'|'ai-claim'|null} overlay to open after first render */
function applyDesignCaptureScreen(screen) {
  if (!DESIGN_CAPTURE_SCREENS.has(screen)) return null;

  currentView = 'home';
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode', 'expert-open', 'ai-open');

  const tabViews = {
    home: 'home',
    explore: 'explore',
    policies: 'policies',
    claims: 'claims',
    help: 'help',
  };
  if (tabViews[screen]) {
    currentView = tabViews[screen];
    syncBottomNav(currentView);
    return null;
  }

  switch (screen) {
    case 'home-behance-top':
    case 'home-behance-mid':
    case 'home-behance-bottom':
      seedHomeBehanceCapture();
      return null;
    case 'renew':
      currentView = 'renew';
      syncBottomNav('renew');
      return null;
    case 'policy-doctor':
      doctorQuestion = '';
      doctorAnswer = '';
      policyDoctorState = {
        policyId: 'h1',
        view: 'summary',
        clauseKey: null,
        uploadLabel: null,
        uploadLoading: false,
      };
      currentView = 'policy-doctor';
      wizardState = null;
      syncBottomNav('policy-doctor');
      return null;
    case 'policy-doctor-pick':
      doctorQuestion = '';
      doctorAnswer = '';
      policyDoctorState = {
        policyId: null,
        view: 'select',
        clauseKey: null,
        uploadLabel: null,
        uploadLoading: false,
      };
      currentView = 'policy-doctor';
      wizardState = null;
      syncBottomNav('policy-doctor');
      return null;
    case 'policy-doctor-pick-behance':
      seedPolicyDoctorBehanceCustomer();
      doctorQuestion = '';
      doctorAnswer = '';
      policyDoctorState = {
        policyId: null,
        view: 'select',
        clauseKey: null,
        uploadLabel: null,
        uploadLoading: false,
      };
      currentView = 'policy-doctor';
      wizardState = null;
      syncBottomNav('policy-doctor');
      return null;
    case 'policy-doctor-clauses-pick':
      seedPolicyDoctorBehanceCustomer();
      doctorQuestion = '';
      doctorAnswer = '';
      policyDoctorState = {
        policyId: 'h1',
        view: 'summary',
        clauseKey: null,
        uploadLabel: null,
        uploadLoading: false,
      };
      currentView = 'policy-doctor';
      wizardState = null;
      syncBottomNav('policy-doctor');
      return null;
    case 'policy-doctor-clause':
      doctorQuestion = '';
      doctorAnswer = '';
      policyDoctorState = {
        policyId: 'h1',
        view: 'clause',
        clauseKey: 'waiting',
        uploadLabel: null,
        uploadLoading: false,
      };
      currentView = 'policy-doctor';
      wizardState = null;
      syncBottomNav('policy-doctor');
      return null;
    case 'policy-doctor-clause-behance':
      seedPolicyDoctorBehanceCustomer();
      doctorQuestion = '';
      doctorAnswer = '';
      policyDoctorState = {
        policyId: 'h1',
        view: 'clause',
        clauseKey: 'waiting',
        uploadLabel: null,
        uploadLoading: false,
      };
      currentView = 'policy-doctor';
      wizardState = null;
      syncBottomNav('policy-doctor');
      return null;
    case 'cases':
      currentView = 'cases';
      wizardState = null;
      serviceContext.caseId = null;
      serviceContext.claimId = null;
      syncBottomNav('cases');
      return null;
    case 'case-create':
      caseFormError = '';
      caseCreateDraft = {
        policyId: 'h1',
        category: 'documents',
        subject: 'Correct nominee name on policy',
        description: 'Nominee shows as Priya S but should be Priya Sharma on the schedule.',
      };
      serviceContext = { policyId: null, claimId: null, caseId: null };
      currentView = 'case-create';
      wizardState = null;
      syncBottomNav('cases');
      return null;
    case 'case-detail':
      serviceContext = { policyId: null, claimId: null, caseId: 'CASE-2026-1042' };
      currentView = 'case-detail';
      wizardState = null;
      syncBottomNav('cases');
      return null;
    case 'help-motor':
      currentView = 'help';
      wizardState = { helpSection: 'motor' };
      syncBottomNav('help');
      return null;
    case 'help-garage':
      currentView = 'help';
      wizardState = { helpSection: 'garage' };
      syncBottomNav('help');
      return null;
    case 'help-roadside':
      currentView = 'help';
      wizardState = { helpSection: 'roadside' };
      syncBottomNav('help');
      return null;
    case 'help-network':
      currentView = 'help';
      wizardState = { helpSection: 'network' };
      syncBottomNav('help');
      return null;
    case 'policy-detail':
      serviceContext = { policyId: 'h1', claimId: null, caseId: null };
      currentView = 'policy-detail';
      wizardState = null;
      syncBottomNav('policies');
      return null;
    case 'claim-start':
      seedClaimStartForCapture({ step: 0, policyId: 'h1', claimType: 'cashless' });
      return null;
    case 'claim-start-type':
      seedClaimStartForCapture({ step: 1, policyId: 'h1', claimType: 'cashless' });
      return null;
    case 'claim-start-docs':
      seedClaimStartForCapture({
        step: 2,
        policyId: 'h1',
        claimType: 'cashless',
        checked: { hc1: true, hc2: true, hc3: true },
      });
      return null;
    case 'claim-start-motor':
      seedClaimStartForCapture({ step: 0, policyId: 'm1', claimType: 'own_damage' });
      return null;
    case 'claim-start-motor-type':
      seedClaimStartForCapture({ step: 1, policyId: 'm1', claimType: 'own_damage' });
      return null;
    case 'claim-start-motor-docs':
      seedClaimStartForCapture({
        step: 2,
        policyId: 'm1',
        claimType: 'own_damage',
        checked: { mc1: true, mc3: true, mc4: true },
      });
      return null;
    case 'claim-detail':
      serviceContext = { policyId: null, claimId: 'c1', caseId: null };
      currentView = 'claim-detail';
      wizardState = null;
      syncBottomNav('claims');
      return null;
    case 'claim-detail-motor':
      serviceContext = { policyId: null, claimId: 'c2', caseId: null };
      currentView = 'claim-detail';
      wizardState = null;
      syncBottomNav('claims');
      return null;
    case 'ai-panel-claim':
      hospitalSearchQuery = '';
      currentView = 'claims';
      wizardState = null;
      syncBottomNav('claims');
      return 'ai-claim';
    case 'signup':
      openSignupForCapture();
      return null;
    case 'signup-otp':
      openSignupOtpForCapture();
      return null;
    case 'signup-profile':
      openSignupProfileForCapture();
      return null;
    case 'signup-success':
      openSignupSuccessForCapture();
      return null;
    case 'cover-guide':
      openCoverGuideForCapture();
      return null;
    case 'health-1':
      prepareWizardCapture('health', 0, { formDepth: 1 });
      return null;
    case 'health-2':
      prepareWizardCapture('health', 1, { formDepth: 2 });
      return null;
    case 'health-3':
      prepareWizardCapture('health', 2, { formDepth: 2 });
      return null;
    case 'health-results':
      prepareWizardCapture('health', 3, { formDepth: 2 });
      return null;
    case 'health-results-error':
      prepareWizardCapture('health', 3, { formDepth: 2, resultsError: true });
      return null;
    case 'health-addons':
      prepareWizardCapture('health', 4, { formDepth: 2 });
      return null;
    case 'health-pay':
      prepareWizardCapture('health', 5, { formDepth: 2, pay: true });
      return null;
    case 'motor-1':
      prepareWizardCapture('motor', 0);
      return null;
    case 'motor-results':
      prepareWizardCapture('motor', 1);
      return null;
    case 'motor-results-error':
      prepareWizardCapture('motor', 1, { resultsError: true });
      return null;
    case 'motor-addons':
      prepareWizardCapture('motor', 2);
      return null;
    case 'motor-pay':
      prepareWizardCapture('motor', 3, { pay: true });
      return null;
    case 'term-1':
      prepareWizardCapture('term', 0);
      return null;
    case 'term-results':
      prepareWizardCapture('term', 1);
      return null;
    case 'term-results-error':
      prepareWizardCapture('term', 1, { resultsError: true });
      return null;
    case 'term-pay':
      prepareWizardCapture('term', 2, { pay: true });
      return null;
    case 'home-1':
      prepareWizardCapture('home', 0);
      return null;
    case 'home-results':
      prepareWizardCapture('home', 1);
      return null;
    case 'home-results-error':
      prepareWizardCapture('home', 1, { resultsError: true });
      return null;
    case 'home-pay':
      prepareWizardCapture('home', 2, { pay: true });
      return null;
    case 'compare-health-all':
      seedCompareForCapture('health', { diffOnly: false });
      return null;
    case 'compare-motor-all':
      seedCompareForCapture('motor', { diffOnly: false });
      return null;
    case 'compare-term-all':
      seedCompareForCapture('term', { diffOnly: false });
      return null;
    case 'compare-home-all':
      seedCompareForCapture('home', { diffOnly: false });
      return null;
    case 'health-results-compare-pick':
    case 'compare-bar-health':
      seedHealthResultsComparePickForCapture();
      return null;
    case 'health-results-compare-exact':
      seedHealthResultsComparePickForCapture();
      return null;
    case 'success':
      seedSuccessScreenForCapture('health');
      return null;
    case 'motor-success':
      seedSuccessScreenForCapture('motor');
      return null;
    case 'term-success':
      seedSuccessScreenForCapture('term');
      return null;
    case 'home-success':
      seedSuccessScreenForCapture('home');
      return null;
    case 'expert-modal':
      syncBottomNav('home');
      return 'expert';
    case 'ai-panel':
      syncBottomNav('home');
      return 'ai';
    default:
      return null;
  }
}

function captureAppState() {
  return {
    view: currentView,
    wizard: wizardState ? JSON.parse(JSON.stringify(wizardState)) : null,
    overlay: getOpenOverlay(),
    service: JSON.parse(JSON.stringify(serviceContext)),
    doctor: JSON.parse(JSON.stringify(policyDoctorState)),
  };
}

function pushAppState() {
  if (suppressHistory) return;
  history.pushState(captureAppState(), '');
}

function applyAppState(state) {
  const s = state || { view: 'home', wizard: null, overlay: null };
  currentView = s.view || 'home';
  wizardState = s.wizard || null;
  serviceContext = s.service ? { policyId: null, claimId: null, caseId: null, ...s.service } : { policyId: null, claimId: null, caseId: null };
  policyDoctorState = s.doctor ? { policyId: null, view: 'select', clauseKey: null, uploadLabel: null, uploadLoading: false, ...s.doctor } : { policyId: null, view: 'select', clauseKey: null, uploadLabel: null, uploadLoading: false };
  document.body.classList.toggle('wizard-mode', !!(wizardState && (wizardState.type || wizardState.helpSection)));
  document.body.classList.toggle('signup-mode', wizardState?.type === 'signup');
  syncBottomNav(currentView);
  closeAIPanel(true);
  closeExpertModal(true);
  if (s.overlay === 'ai') openAIPanel('', null, null, true);
  else if (s.overlay === 'expert') openExpertModal(true);
  render();
  announcePage(s);
}

function goBack() {
  if (history.length > 1) history.back();
  else applyAppState({ view: 'home', wizard: null, overlay: null });
}

function announcePage(state) {
  const region = document.getElementById('routeAnnouncer');
  if (!region) return;
  let label = state?.view || currentView;
  if (state?.wizard?.type === 'signup') label = 'Sign up';
  else if (state?.wizard?.type === 'cover-guide') label = 'Cover guide';
  else if (state?.wizard?.type === 'compare') label = 'Compare plans';
  else if (state?.wizard?.type) label = `${state.wizard.type} step ${(state.wizard.step ?? 0) + 1}`;
  if (state?.overlay === 'ai') label = t('ai.title');
  if (state?.overlay === 'expert') label = 'Talk to expert';
  region.textContent = `Navigated to ${label}`;
}

function setView(view, opts = {}) {
  if (view === 'account' && !authUser?.verified) {
    openSignup();
    return;
  }
  currentView = view;
  wizardState = opts.helpSection ? { helpSection: opts.helpSection } : null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  syncBottomNav(view);
  pushAppState();
  render();
  announcePage(captureAppState());
}

function getPoliciesByRenewal() {
  return [...policies].sort((a, b) => daysUntilRenewal(a.renewalISO) - daysUntilRenewal(b.renewalISO));
}

function openRenewals() {
  currentView = 'renew';
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  syncBottomNav('renew');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function startRenewal(policyId) {
  const p = policies.find((x) => x.id === policyId);
  if (!p) {
    openRenewals();
    return;
  }
  activeProduct = p.product;
  if (p.product === 'health') {
    quoteForm.health = defaultHealthQuoteForm();
    quoteForm.health.existingPolicy = 'port';
    quoteForm.health.planType = 'floater';
  } else if (p.product === 'motor') {
    quoteForm.motor = defaultMotorQuoteForm();
    quoteForm.motor.regNo = p.name;
  }
  wizardState = { type: p.product, step: 0, product: p.product, renewalPolicyId: p.id };
  document.body.classList.add('wizard-mode');
  document.body.classList.remove('signup-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function renderRenewalBanner() {
  const id = wizardState?.renewalPolicyId;
  if (!id) return '';
  const p = policies.find((x) => x.id === id);
  if (!p) return '';
  const days = daysUntilRenewal(p.renewalISO);
  return `<div class="renew-banner" role="status">
    <span class="renew-banner__icon">${icon('renew', ICON_SIZE.md, 'hollow-icon')}</span>
    <div class="renew-banner__text">
      <strong>Renewal</strong> · ${p.insurer} · ${p.policyNo}
      <span>${`Expires ${p.renewal}`}${days <= 30 ? ` · ${days} days left` : ''}</span>
    </div>
  </div>`;
}

function renderRenewals() {
  const sorted = getPoliciesByRenewal();
  const cards = sorted.map((p) => {
    const days = daysUntilRenewal(p.renewalISO);
    const urgent = days <= 14;
    const soon = days <= 30;
    const save = p.renewalSave ? formatPremium(p.renewalSave) : '';
    return `
      <article class="renew-card ${urgent ? 'renew-card--urgent' : soon ? 'renew-card--soon' : ''}">
        <div class="renew-card__head">
          <span class="renew-card__type">${p.type}</span>
          <span class="renew-card__days">${days <= 0 ? ('Expires today') : (`${days} days`)}</span>
        </div>
        <h2 class="renew-card__title">${p.name}</h2>
        <p class="renew-card__meta">${p.insurer} · ${p.premium} · Renews ${p.renewal}</p>
        <p class="renew-card__policy">Policy no. ${p.policyNo}</p>
        ${save ? `<p class="renew-card__save">${`Save up to ${save} vs last year`}</p>` : ''}
        <div class="renew-card__actions">
          <button type="button" class="btn btn--primary btn--sm btn--block" data-action="renew-policy" data-policy="${p.id}">
            Renew now
          </button>
          <button type="button" class="btn btn--ghost btn--sm btn--block" data-action="open-ai" data-prefill="${`Renew my ${p.type} policy`}">
            Ask AI
          </button>
        </div>
      </article>`;
  }).join('');

  return `
    <div class="app-view">
    <div class="page-header page-header--static renew-page__header">
      <button type="button" class="back-btn" data-action="go-back">${iconBack()}</button>
      <h1>Renew policy</h1>
    </div>
    <div class="app-view__body section main--padded renew-page">
      <p class="renew-page__lead">Pick your existing policy — we pre-fill details and show fresh renewal quotes.</p>
      <div class="renew-list">${cards}</div>
      <div class="card renew-lookup">
        <h2 class="renew-lookup__title">${"Don't see your policy?"}</h2>
        <p class="renew-lookup__sub">Look up by policy or vehicle number</p>
        <div class="renew-lookup__row">
          <input type="text" id="renewLookupInput" class="renew-lookup__input" placeholder="e.g. STAR/HL/… or DL 01 AB 1234" autocomplete="off">
          <button type="button" class="btn btn--secondary btn--sm" data-action="renew-lookup">Find</button>
        </div>
        ${renewLookupError ? `<p class="field-error" role="alert">${esc(renewLookupError)}</p>` : ''}
      </div>
      <p class="renew-page__tip">${icon('lock', ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} No auto-debit — you pay only after you confirm</p>
    </div>
    </div>`;
}

function snapCoverLakh(n) {
  const tiers = [5, 10, 15, 25, 50];
  return tiers.find((t) => t >= n) || 50;
}

function snapTermCoverLakh(n) {
  const tiers = [50, 75, 100, 150, 200];
  return tiers.find((t) => t >= n) || 200;
}

function computeHealthCoverRecommendation(answers) {
  const tierBase = { metro: 10, tier2: 7, tier3: 5 }[answers.cityTier] || 10;
  let low = tierBase;
  let high = tierBase + 5;
  const age = Number(answers.age) || 32;
  if (age >= 45) { low += 5; high += 5; }
  if (age >= 55) { low += 5; high += 10; }
  const fam = answers.familyCount;
  if (fam === '3' || fam === '4plus') { low += 5; high += 5; }
  if (answers.conditions === 'yes') { high += 5; }
  const minL = snapCoverLakh(low);
  const maxL = Math.max(minL, snapCoverLakh(high));
  const target = maxL;
  const reasonEn = answers.conditions === 'yes'
    ? 'Higher cover helps with waiting periods and hospital costs in bigger cities.'
    : (fam === '4plus' || fam === '3'
      ? 'More family members usually need a higher floater sum insured.'
      : 'Based on your city and age — a common starting range for hospital bills.');
  return { minL, maxL, target, reason: reasonEn};
}

function computeTermCoverRecommendation(answers) {
  const income = Number(answers.incomeLakh) || 12;
  const loans = Number(answers.loansLakh) || 0;
  let multLow = 10;
  let multHigh = 15;
  if (answers.dependents === '0') { multLow = 8; multHigh = 10; }
  else if (answers.dependents === '3plus') { multLow = 12; multHigh = 15; }
  const minL = snapTermCoverLakh(Math.round(income * multLow + loans));
  const maxL = Math.max(minL, snapTermCoverLakh(Math.round(income * multHigh + loans)));
  const target = maxL;
  const assumptions = formatI18n(t('guide.term.assumptions'), {
    low: multLow, high: multHigh, income, loans,
  });
  return { minL, maxL, target, multLow, multHigh, income, loans, assumptions };
}

function applyFamilyCountToHealth(h, familyCount) {
  const map = {
    '1': ['self'],
    '2': ['self', 'spouse'],
    '3': ['self', 'spouse', 'son'],
    '4plus': ['self', 'spouse', 'son', 'daughter'],
  };
  const on = map[familyCount] || map['2'];
  h.members.forEach((m) => { m.selected = on.includes(m.id); });
}

function openCoverGuide(prefProduct = null) {
  const product = prefProduct === 'health' || prefProduct === 'term' ? prefProduct : null;
  wizardState = {
    type: 'cover-guide',
    step: product ? 0 : -1,
    guideProduct: product,
    answers: product ? defaultCoverGuideAnswers(product) : null,
    formError: '',
  };
  document.body.classList.add('wizard-mode');
  document.body.classList.remove('signup-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function coverGuideBack() {
  if (!wizardState || wizardState.type !== 'cover-guide') {
    goBack();
    return;
  }
  if (wizardState.step > 0) {
    wizardState.step--;
    wizardState.formError = '';
    pushAppState();
    render();
    announcePage(captureAppState());
  } else if (wizardState.step === 0 && wizardState.guideProduct) {
    wizardState.step = -1;
    wizardState.guideProduct = null;
    wizardState.answers = null;
    pushAppState();
    render();
  } else goBack();
}

function coverGuideNext() {
  if (!wizardState || wizardState.type !== 'cover-guide') return;
  if (wizardState.step < 3) {
    wizardState.step++;
    wizardState.formError = '';
    pushAppState();
    render();
    announcePage(captureAppState());
    return;
  }
  if (wizardState.step === 3) {
    wizardState.step = 4;
    pushAppState();
    render();
    announcePage(captureAppState());
  }
}

function applyCoverGuideToQuote() {
  if (!wizardState || wizardState.type !== 'cover-guide' || wizardState.step !== 4) return;
  const { guideProduct, answers } = wizardState;
  compareList = [];
  selectedPlanId = null;
  appliedCoupon = null;
  couponInput = '';
  healthFilter = 'all';
  healthSort = 'premium';

  if (guideProduct === 'health') {
    const rec = computeHealthCoverRecommendation(answers);
    activeProduct = 'health';
    quoteForm.health = defaultHealthQuoteForm();
    const h = quoteForm.health;
    h.sumInsured = rec.target;
    h.planType = 'floater';
    h.cityTier = answers.cityTier;
    applyFamilyCountToHealth(h, answers.familyCount);
    const self = h.members.find((m) => m.id === 'self');
    if (self && answers.age !== '') self.age = Number(answers.age);
    if (answers.conditions === 'yes' && self) ensureMemberMedical(self).ped = 'yes';
    wizardState = { type: 'health', step: 3, product: 'health', formError: '', fromCoverGuide: true };
  } else {
    const rec = computeTermCoverRecommendation(answers);
    activeProduct = 'term';
    productFilter.term = 'all';
    productSort.term = 'premium';
    quoteForm.term = defaultTermQuoteForm();
    if (answers.age !== '') quoteForm.term.age = Number(answers.age);
    quoteForm.term.cover = rec.target;
    quoteForm.term.incomeLakh = answers.incomeLakh;
    wizardState = { type: 'term', step: 1, product: 'term', formError: '', fromCoverGuide: true };
  }
  document.body.classList.add('wizard-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function renderCoverGuideProgress(step) {
  if (step < 0 || step > 3) return '';
  return Array.from({ length: 4 }, (_, i) => {
    let c = 'wizard-progress__step';
    if (i < step) c += ' done';
    if (i === step) c += ' active';
    return `<div class="${c}"></div>`;
  }).join('');
}

function renderCoverGuideChipGroup(field, options, selected) {
  const variant = options.length <= 2 ? 'segmented' : (options.length <= 5 ? 'multi' : 'wrap');
  return quoteChoiceGroup(options.map((o) => `
    <button type="button" class="chip ${selected === o.value ? 'selected' : ''}" data-cover-guide-field="${field}" data-cover-guide-value="${o.value}">${chipBtnContent(o.label)}</button>`).join(''), variant);
}

function renderCoverGuideWizard() {
  const step = wizardState.step ?? -1;
  const product = wizardState.guideProduct;
  const answers = wizardState.answers || {};

  if (step === -1) {
    return `
      <div class="page-header"><button class="back-btn" data-action="cover-guide-back">${iconBack()}</button>
        <h1>${t('guide.title')}</h1></div>
      <div class="wizard-body cover-guide">
        <p class="subtitle">${t('guide.subtitle')}</p>
        <p class="cover-guide__pick-label">${t('guide.pick')}</p>
        <div class="cover-guide__pick-grid">
          <button type="button" class="cover-guide__pick" data-action="cover-guide-start" data-guide-product="health">
            ${icon('health', ICON_SIZE.xl, 'hollow-icon')}
            <span>${t('guide.health')}</span>
          </button>
          <button type="button" class="cover-guide__pick" data-action="cover-guide-start" data-guide-product="term">
            ${icon('term', ICON_SIZE.xl, 'hollow-icon')}
            <span>${t('guide.term')}</span>
          </button>
        </div>
      </div>`;
  }

  const progress = renderCoverGuideProgress(step);
  const progressLabel = formatI18n(t('guide.progress'), { n: step + 1 });

  if (step === 4) {
    if (product === 'health') {
      const rec = computeHealthCoverRecommendation(answers);
      return `
        <div class="page-header"><button class="back-btn" data-action="cover-guide-back">${iconBack()}</button>
          <h1>${t('guide.result.health')}</h1></div>
        <div class="wizard-body cover-guide">
          <div class="cover-guide__result">
            <div class="cover-guide__range">₹${rec.minL}L – ₹${rec.maxL}L</div>
            <p class="cover-guide__reason">${rec.reason}</p>
            <p class="cover-guide__target">We will show plans for <strong>₹${rec.target}L</strong></p>
          </div>
          ${quoteContinueBtn(t('guide.seePlans'), 'Open matching plans', 'cover-guide-apply')}
        </div>`;
    }
    const rec = computeTermCoverRecommendation(answers);
    const minCr = rec.minL >= 100 ? `₹${(rec.minL / 100).toFixed(rec.minL % 100 ? 1 : 0)} Cr` : `₹${rec.minL}L`;
    const maxCr = rec.maxL >= 100 ? `₹${(rec.maxL / 100).toFixed(rec.maxL % 100 ? 1 : 0)} Cr` : `₹${rec.maxL}L`;
    const targetCr = rec.target >= 100 ? `₹${(rec.target / 100).toFixed(rec.target % 100 ? 1 : 0)} Cr` : `₹${rec.target}L`;
    return `
      <div class="page-header"><button class="back-btn" data-action="cover-guide-back">${iconBack()}</button>
        <h1>${t('guide.result.term')}</h1></div>
      <div class="wizard-body cover-guide">
        <div class="cover-guide__result">
          <div class="cover-guide__range">${minCr} – ${maxCr}</div>
          <p class="cover-guide__assumptions">${rec.assumptions}</p>
          <p class="cover-guide__target">We will show plans for <strong>${targetCr}</strong></p>
        </div>
        ${quoteContinueBtn(t('guide.seePlans'), 'Open matching plans', 'cover-guide-apply')}
      </div>`;
  }

  let body = '';
  const ageChips = [25, 32, 40, 50, 60].map((a) => ({ value: String(a), label: String(a) }));

  if (product === 'health') {
    if (step === 0) {
      body = `<div class="form-group"><label>${t('guide.health.age')}</label>
        ${renderCoverGuideChipGroup('age', ageChips, answers.age === '' ? '' : String(answers.age))}
        <input type="number" class="cover-guide__age-input" min="18" max="75" value="${answers.age === '' ? '' : esc(answers.age)}" data-cover-guide-input="age"></div>`;
    } else if (step === 1) {
      body = `<div class="form-group"><label>${t('guide.health.city')}</label>
        ${renderCoverGuideChipGroup('cityTier', [
          { value: 'metro', label: t('guide.health.city.metro') },
          { value: 'tier2', label: t('guide.health.city.tier2') },
          { value: 'tier3', label: t('guide.health.city.tier3') },
        ], answers.cityTier)}</div>`;
    } else if (step === 2) {
      body = `<div class="form-group"><label>${t('guide.health.family')}</label>
        ${renderCoverGuideChipGroup('familyCount', [
          { value: '1', label: t('guide.health.family.1') },
          { value: '2', label: t('guide.health.family.2') },
          { value: '3', label: t('guide.health.family.3') },
          { value: '4plus', label: t('guide.health.family.4plus') },
        ], answers.familyCount)}</div>`;
    } else {
      body = `<div class="form-group"><label>${t('guide.health.conditions')}</label>
        <p class="quote-form__hint">${t('guide.health.conditions.hint')}</p>
        ${renderCoverGuideChipGroup('conditions', [
          { value: 'no', label: t('guide.no') },
          { value: 'yes', label: t('guide.yes') },
        ], answers.conditions)}</div>`;
    }
  } else {
    if (step === 0) {
      body = `<div class="form-group"><label>${t('guide.term.age')}</label>
        ${renderCoverGuideChipGroup('age', ageChips, answers.age === '' ? '' : String(answers.age))}
        <input type="number" class="cover-guide__age-input" min="18" max="65" value="${answers.age === '' ? '' : esc(answers.age)}" data-cover-guide-input="age"></div>`;
    } else if (step === 1) {
      body = `<div class="form-group"><label>${t('guide.term.income')}</label>
        ${renderCoverGuideChipGroup('incomeLakh', [
          { value: '6', label: t('guide.income.6') },
          { value: '12', label: t('guide.income.12') },
          { value: '24', label: t('guide.income.24') },
          { value: '50', label: t('guide.income.50') },
          { value: '60', label: t('guide.income.50plus') },
        ], answers.incomeLakh === '' ? '' : String(answers.incomeLakh))}</div>`;
    } else if (step === 2) {
      body = `<div class="form-group"><label>${t('guide.term.dependents')}</label>
        ${renderCoverGuideChipGroup('dependents', [
          { value: '0', label: t('guide.term.dependents.0') },
          { value: '1', label: t('guide.term.dependents.1') },
          { value: '2', label: t('guide.term.dependents.2') },
          { value: '3plus', label: t('guide.term.dependents.3plus') },
        ], answers.dependents)}</div>`;
    } else {
      body = `<div class="form-group"><label>${t('guide.term.loans')}</label>
        ${renderCoverGuideChipGroup('loansLakh', [
          { value: '0', label: t('guide.term.loans.0') },
          { value: '25', label: t('guide.term.loans.25') },
          { value: '50', label: t('guide.term.loans.50') },
          { value: '100', label: t('guide.term.loans.100') },
        ], String(answers.loansLakh ?? 0))}</div>`;
    }
  }

  const title = product === 'health' ? t('guide.health') : t('guide.term');
  return `
    <div class="page-header"><button class="back-btn" data-action="cover-guide-back">${iconBack()}</button>
      <h1>${title}</h1></div>
    <div class="wizard-progress" aria-label="${progressLabel}">${progress}</div>
    <p class="cover-guide__step-label">${progressLabel}</p>
    <div class="wizard-body cover-guide quote-form">${body}
      ${quoteContinueBtn(t('guide.continue'), progressLabel, 'cover-guide-next')}
    </div>`;
}

function startQuote(product, options = {}) {
  if (!products.some((p) => p.id === product)) product = 'health';
  const healthPreset = options.healthPreset || '';
  activeProduct = product;
  healthFilter = 'all';
  healthSort = 'premium';
  productFilter[product] = 'all';
  productSort[product] = 'premium';
  compareList = [];
  selectedPlanId = null;
  appliedCoupon = null;
  couponInput = '';
  quoteResultsError = null;
  quoteResultsLoading = null;
  if (product === 'health') {
    quoteForm.health = defaultHealthQuoteForm();
    applyHealthQuotePreset(quoteForm.health, healthPreset);
  }
  if (product === 'motor') quoteForm.motor = defaultMotorQuoteForm();
  if (product === 'term') quoteForm.term = defaultTermQuoteForm();
  if (product === 'home') quoteForm.home = defaultHomeQuoteForm();
  wizardState = { type: product, step: 0, product, formError: '' };
  document.body.classList.add('wizard-mode');
  document.body.classList.remove('signup-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function getFilter(product) { return productFilter[product] || 'all'; }
function getSort(product) { return productSort[product] || 'premium'; }

function getPlanSortValue(product) {
  return product === 'health' ? healthSort : (productSort[product] || 'premium');
}

function planSortOptions(product) {
  if (product === 'health') {
    return [
      { value: 'premium', label: 'Price (low to high)' },
      { value: 'claims', label: 'Claim settlement ratio' },
      { value: 'hospitals', label: 'Cashless hospitals' },
    ];
  }
  if (product === 'motor') {
    return [
      { value: 'premium', label: 'Price (low to high)' },
      { value: 'claims', label: 'Claim settlement ratio' },
      { value: 'idv', label: 'IDV (high to low)' },
    ];
  }
  return [{ value: 'premium', label: 'Price (low to high)' }];
}

function sortChipShortLabel(value) {
  const labels = {
    premium: 'Lowest price',
    claims: 'Claims ratio',
    hospitals: 'Hospitals',
    idv: 'Highest IDV',
  };
  return labels[value] || value;
}

function renderPlanSortRow(product, metaText = '') {
  const sort = getPlanSortValue(product);
  const options = planSortOptions(product);
  const meta = metaText ? `<p class="sort-bar__meta">${metaText}</p>` : '';

  if (options.length <= 1) {
    return metaText ? `<div class="sort-bar sort-bar--meta-only">${meta}</div>` : '';
  }

  const chips = options.map((o) => {
    const on = sort === o.value;
    return `<button type="button" class="sort-chip ${on ? 'sort-chip--on' : ''}" role="radio" aria-checked="${on}" data-action="plan-sort" data-product="${product}" data-sort-value="${o.value}" title="${o.label}">
      ${sortChipShortLabel(o.value)}
    </button>`;
  }).join('');

  return `<div class="sort-bar">
    ${meta}
    <div class="sort-bar__tools">
      <span class="sort-bar__label" id="sortLabel-${product}">Sort by</span>
      <div class="sort-chips" role="radiogroup" aria-labelledby="sortLabel-${product}">${chips}</div>
    </div>
  </div>`;
}

function applyProductSort(product, plans) {
  const sort = getPlanSortValue(product);
  if (sort === 'premium') plans.sort((a, b) => a.premium - b.premium);
  else if (sort === 'claims') plans.sort((a, b) => (b.claims || 0) - (a.claims || 0));
  else if (sort === 'hospitals') plans.sort((a, b) => (b.hospitals || 0) - (a.hospitals || 0));
  else if (sort === 'idv') plans.sort((a, b) => (b.idv || 0) - (a.idv || 0));
  return plans;
}

function getFilteredPlans(product) {
  let plans = [...(PLAN_DATA[product] || [])];
  const f = getFilter(product);
  if (product === 'health') {
    if (healthFilter === 'nopay') plans = plans.filter(p => p.copay === '0%');
    if (healthFilter === 'restoration') plans = plans.filter(p => p.restoration);
    if (healthFilter === 'opd') plans = plans.filter(p => p.opd);
    if (healthFilter === 'maternity') plans = plans.filter(p => p.maternity);
    if (healthSort === 'premium') {
      const targetSi = quoteForm.health?.sumInsured;
      plans.sort((a, b) => {
        if (targetSi) {
          const d = Math.abs(a.si - targetSi) - Math.abs(b.si - targetSi);
          if (d !== 0) return d;
        }
        return a.premium - b.premium;
      });
    }
    if (healthSort === 'claims') plans.sort((a, b) => b.claims - a.claims);
    if (healthSort === 'hospitals') plans.sort((a, b) => (b.hospitals || 0) - (a.hospitals || 0));
  } else if (product === 'motor') {
    applyProductSort('motor', plans);
  } else if (product === 'term') {
    if (f === '1cr') plans = plans.filter(p => p.cover >= 100);
    if (f === '50l') plans = plans.filter(p => p.cover <= 50);
    const targetCover = quoteForm.term?.cover;
    if (targetCover) {
      plans.sort((a, b) => Math.abs(a.cover - targetCover) - Math.abs(b.cover - targetCover) || a.premium - b.premium);
    } else plans.sort((a, b) => a.premium - b.premium);
  } else if (product === 'home') {
    const h = quoteForm.home || defaultHomeQuoteForm();
    if (f === 'structure') plans = plans.filter((p) => p.structure >= 40);
    if (f === 'contents') plans = plans.filter((p) => p.contents >= 10);
    const structTarget = Number(h.structureValueLakh);
    if (structTarget > 0) {
      plans.sort((a, b) => Math.abs(a.structure - structTarget) - Math.abs(b.structure - structTarget)
        || homePremiumForPlan(a) - homePremiumForPlan(b));
    } else {
      plans.sort((a, b) => homePremiumForPlan(a) - homePremiumForPlan(b));
    }
  } else {
    plans.sort((a, b) => a.premium - b.premium);
  }
  return plans;
}

function getFilteredHealthPlans() { return getFilteredPlans('health'); }

function renderProductPlanCard(plan, product) {
  const color = insurerColor(plan.insurer);
  let metrics = '';
  let features = '';

  if (product === 'term') {
    metrics = `<div class="plan-item__metric"><strong>₹${plan.cover}L</strong>Life cover</div>
      <div class="plan-item__metric"><strong>${plan.tenure} yrs</strong>Tenure</div>
      <div class="plan-item__metric"><strong>${plan.claims}%</strong>Claim settlement</div>`;
    features = `<span class="feature-tag">₹${Math.round(plan.premium / 12)}/mo</span><span class="feature-tag">Tax benefit 80C</span>`;
  } else if (product === 'home') {
    metrics = `<div class="plan-item__metric"><strong>₹${plan.structure}L</strong>Structure</div>
      <div class="plan-item__metric"><strong>₹${plan.contents}L</strong>Contents</div>
      <div class="plan-item__metric"><strong>${plan.eq ? 'Yes' : 'Add-on'}</strong>Earthquake</div>`;
    features = `<span class="feature-tag">${plan.perils}</span>`;
  } else if (product === 'motor') {
    metrics = `<div class="plan-item__metric"><strong>${formatPremium(plan.idv)}</strong>IDV</div>
      <div class="plan-item__metric"><strong>${motorNcbPercent()}%</strong>Your NCB</div>
      <div class="plan-item__metric"><strong>${plan.zeroDep ? 'Yes' : 'No'}</strong>Zero dep</div>`;
  }

  const showCompare = COMPARE_PRODUCTS.includes(product);
  const inCompare = compareList.includes(plan.id);
  const displayPremium = quotePremiumForPlan(plan, product);
  const indicativePrice = product === 'health' || product === 'motor' || product === 'term' || product === 'home';

  return `
    <div class="plan-item ${plan.badge ? 'plan-item--featured' : ''}${inCompare ? ' plan-item--in-compare' : ''}" data-plan-id="${plan.id}">
      ${plan.badge ? `<span class="plan-item__badge">${plan.badge}</span>` : ''}
      <div class="plan-item__header">
        <div class="plan-item__logo" style="background:${color}" aria-hidden="true">${insurerInitials(plan.insurer)}</div>
        <div class="plan-item__info">
          <div class="plan-item__insurer">${plan.insurer}</div>
          <div class="plan-item__plan">${plan.plan}</div>
          ${plan.rating ? `<div class="plan-item__rating"><span class="rating-star">★ ${plan.rating}</span></div>` : ''}
        </div>
      </div>
      ${renderPlanTrustStats(plan, product)}
      <div class="plan-item__metrics">${metrics}</div>
      <div class="plan-item__features">${features}</div>
      ${renderPlanPlainSummary(plan.id, product)}
      <div class="plan-item__collapsibles">${renderPlanCollapsibleSections(plan.id, product)}</div>
      <div class="plan-item__footer">
        ${renderPlanPriceDisplay(displayPremium, { indicative: indicativePrice })}
        <div class="plan-item__actions">
          ${showCompare ? `<label class="compare-check${inCompare ? ' compare-check--selected' : ''}"><input type="checkbox" data-compare="${plan.id}" ${inCompare ? 'checked' : ''}> Compare</label>` : ''}
          <button class="btn btn--primary btn--sm" data-action="buy-product" data-plan-id="${plan.id}" data-product="${product}">Buy now</button>
        </div>
      </div>
    </div>`;
}

function renderHomeProfileBar() {
  const summary = homeQuoteSummary();
  return `<div class="quote-profile-bar quote-profile-bar--stack">
    <div class="quote-profile-bar__head">
      <span class="quote-profile-bar__label">Your property</span>
      <button type="button" class="quote-profile-bar__edit" data-action="wizard-goto" data-goto-step="0">Edit</button>
    </div>
    <p class="quote-profile-bar__text">${summary}</p>
  </div>`;
}

function renderProductResults(product) {
  const plans = getFilteredPlans(product);
  const cfg = PRODUCT_CONFIG[product];
  const f = getFilter(product);
  let filterChips = '';
  let summary = '';
  let profileBar = '';

  if (product === 'term') {
    filterChips = `
      <button class="filter-chip ${f === 'all' ? 'active' : ''}" data-pfilter="all" data-product="${product}">All</button>
      <button class="filter-chip ${f === '1cr' ? 'active' : ''}" data-pfilter="1cr" data-product="${product}">₹1 Cr cover</button>
      <button class="filter-chip ${f === '50l' ? 'active' : ''}" data-pfilter="50l" data-product="${product}">₹50L cover</button>`;
    const tq = quoteForm.term || defaultTermQuoteForm();
    const coverLabel = tq.cover >= 100 ? `₹${tq.cover / 100} Cr` : `₹${tq.cover}L`;
    summary = `Age ${tq.age} · ${tq.smoking === 'yes' ? 'Smoker' : 'Non-smoker'} · ${coverLabel} · ${tq.tenure} years`;
  } else if (product === 'home') {
    filterChips = `
      <button class="filter-chip ${f === 'all' ? 'active' : ''}" data-pfilter="all" data-product="${product}">All</button>
      <button class="filter-chip ${f === 'structure' ? 'active' : ''}" data-pfilter="structure" data-product="${product}">High structure</button>
      <button class="filter-chip ${f === 'contents' ? 'active' : ''}" data-pfilter="contents" data-product="${product}">Contents heavy</button>`;
    profileBar = renderHomeProfileBar();
  }

  const guideNote = (product === 'term' && quoteForm.term?.cover && wizardState?.fromCoverGuide)
    ? `<div class="cover-guide__applied" role="status">Showing plans for your cover guide · <strong>${quoteForm.term.cover >= 100 ? `₹${quoteForm.term.cover / 100} Cr` : `₹${quoteForm.term.cover}L`}</strong></div>`
    : '';

  const filterBarHtml = filterChips ? `<div class="filter-bar filter-bar--fit">${filterChips}</div>` : '';

  return `
    ${guideNote}
    ${profileBar}
    ${filterBarHtml}
    ${renderPlanSortRow(product, product === 'home' ? `${plans.length} plans` : `${summary} · ${plans.length} plans`)}
    <div style="padding:0 1rem 0.5rem">${renderJTBDSteps('compare')}</div>
    <div class="results-count">Compare · Understand with AI · Then buy</div>
    <div style="padding:0 1rem 0.5rem"><button type="button" class="btn btn--ghost btn--sm btn--block" data-action="open-ai" data-ai-mode="compare">${icon('sparkles', ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} Explain plan differences with AI</button></div>
    <div style="padding:0 1rem">${renderConfusionBusters(product)}</div>
    ${renderResultsPlanSection(product, plans, (p) => renderProductPlanCard(p, product))}`;
}

function termAgeInputValue(age) {
  if (age === '' || age == null) return '';
  if (typeof age === 'string') {
    return age.replace(/\D/g, '').slice(0, 2);
  }
  const n = Number(age);
  if (!Number.isFinite(n)) return '';
  return String(Math.trunc(n)).slice(0, 2);
}

function termAgeInvalidMessage(ageNum, rawDigits = '') {
  if (!Number.isFinite(ageNum)) return 'Enter an age from 18 to 65.';
  if (ageNum > 65) return 'This age is above 65 — term quotes use ages 18–65.';
  if (ageNum < 18) {
    if (rawDigits.length < 2) return 'Keep typing — full ages are 18 to 65.';
    return 'This age is below 18 — minimum for term quotes is 18.';
  }
  return 'Enter an age from 18 to 65.';
}

function syncTermAgeInvalidMessage(wrap, input, { empty, ok, age, digits }) {
  let invalidEl = document.getElementById('termAgeInvalid');
  if (ok || empty) {
    invalidEl?.remove();
    return;
  }
  const msg = termAgeInvalidMessage(age, digits);
  if (!invalidEl) {
    invalidEl = document.createElement('p');
    invalidEl.id = 'termAgeInvalid';
    invalidEl.className = 'term-age-field__invalid';
    invalidEl.setAttribute('role', 'alert');
    wrap?.querySelector('.term-age-field__control')?.insertAdjacentElement('afterend', invalidEl);
  }
  invalidEl.textContent = msg;
  const described = ['termAgeHint', 'termAgeInvalid'];
  if (document.getElementById('termAgeError')) described.push('termAgeError');
  input.setAttribute('aria-describedby', described.join(' '));
}

function captureTermFormFromDOM() {
  if (!quoteForm.term) quoteForm.term = defaultTermQuoteForm();
  const ageEl = document.getElementById('termAge');
  if (!ageEl) return;
  const digits = ageEl.value.replace(/\D/g, '').slice(0, 2);
  quoteForm.term.age = digits;
}

function renderTermQuoteStep0() {
  const tq = quoteForm.term || defaultTermQuoteForm();
  const formErr = wizardState?.formError
    ? `<p class="quote-form-error" role="alert">${wizardState.formError}</p>`
    : '';
  const ageNum = tq.age === '' || tq.age == null ? NaN : Number(tq.age);
  const ageEmpty = tq.age === '' || tq.age == null;
  const ageOk = Number.isFinite(ageNum) && ageNum >= 18 && ageNum <= 65;
  const ageFilledInvalid = !ageEmpty && !ageOk;
  const ageShowError = !ageOk && !!(wizardState?.formError && /age/i.test(wizardState.formError));
  let ageStateClass = 'term-age-field--idle';
  if (ageOk) ageStateClass = 'term-age-field--ok';
  else if (ageShowError) ageStateClass = 'term-age-field--error';
  else if (ageFilledInvalid) ageStateClass = 'term-age-field--invalid';
  else if (ageEmpty) ageStateClass = 'term-age-field--needs';
  const ageDigits = termAgeInputValue(tq.age);
  const ageHintText = ageOk
    ? t('term.ageHintOk')
    : ageEmpty
      ? t('term.ageHintEmpty')
      : t('term.ageHintPartial');
  const ageDescribedBy = [
    ageEmpty ? 'termAgeGuide' : '',
    'termAgeHint',
    ageFilledInvalid ? 'termAgeInvalid' : '',
    ageShowError ? 'termAgeError' : '',
  ].filter(Boolean).join(' ');
  const ageFilledInvalidMsg = ageFilledInvalid && !ageShowError
    ? `<p class="term-age-field__invalid" id="termAgeInvalid" role="alert">${termAgeInvalidMessage(ageNum, ageDigits)}</p>`
    : '';
  const ageInlineError = ageShowError
    ? '<p class="term-age-field__error" id="termAgeError" role="alert">Enter your age between 18 and 65</p>'
    : '';
  const smokeMissing = !tq.smoking;
  const smokeShowError = smokeMissing && !!(wizardState?.formError && /smoke/i.test(wizardState.formError));
  const ageGuide = ageEmpty
    ? `<p class="term-age-field__guide" id="termAgeGuide">${t('term.ageGuide')}</p>`
    : '';
  const coverOpts = [50, 100, 150, 200];
  const tenureOpts = [
    { v: 20, label: '20 years' },
    { v: 30, label: '30 years' },
    { v: 65, label: 'Till 65' },
  ];
  return `
    <div class="term-step-fit">
      ${formErr}
      <div class="term-step-scroll">
        <p class="quote-form__lead quote-form__lead--term">A few details to match term plans — change anytime before you pay.</p>
        <div class="term-step-stack">
          <div class="form-group form-group--term-q term-age-field ${ageStateClass}">
            <label class="term-age-field__label" id="termAgeLabel" for="termAge">
              Your age<span class="term-age-field__required" aria-hidden="true">*</span>
            </label>
            ${ageGuide}
            <div class="term-age-field__control">
              <input
                id="termAge"
                class="term-age-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="2"
                value="${esc(termAgeInputValue(tq.age))}"
                placeholder="${t('term.agePlaceholder')}"
                autocomplete="off"
                enterkeyhint="done"
                required
                aria-labelledby="termAgeLabel termAgeSuffix"
                aria-describedby="${ageDescribedBy}"
                aria-required="true"
                aria-invalid="${ageOk ? 'false' : 'true'}"
                data-term-input="age"
              >
              <span class="term-age-field__suffix" id="termAgeSuffix" lang="en">${t('term.ageYears')}</span>
            </div>
            ${ageFilledInvalidMsg}
            ${ageInlineError}
            <span class="term-age-field__hint" id="termAgeHint">${ageHintText}</span>
          </div>
          <div class="form-group form-group--term-q term-smoking-field${smokeShowError ? ' term-smoking-field--error' : ''}">
            <label id="termSmokingLabel">Do you smoke?<span class="term-field__required" aria-hidden="true">*</span></label>
            ${smokeShowError ? '<p class="term-field__error" id="termSmokingError" role="alert">Select an option to continue.</p>' : ''}
            ${quoteChoiceGroup(`
              <button type="button" class="chip ${tq.smoking === 'no' ? 'selected' : ''}" data-term-smoking="no">${chipBtnContent('No', 'Non-smoker')}</button>
              <button type="button" class="chip ${tq.smoking === 'yes' ? 'selected' : ''}" data-term-smoking="yes">${chipBtnContent('Yes', 'Smoker')}</button>
            `)}
          </div>
          <div class="form-group form-group--term-q">
            <label>Cover amount</label>
            ${quoteChoiceGroup(coverOpts.map((c) => {
    const line = c >= 100 ? `₹${c / 100} Cr` : `₹${c}L`;
    return `<button type="button" class="chip ${tq.cover === c ? 'selected' : ''}" data-term-cover="${c}">${chipBtnContent(line, 'Life cover')}</button>`;
  }).join(''), 'multi')}
          </div>
          <div class="form-group form-group--term-q">
            <label>Policy term</label>
            ${quoteChoiceGroup(tenureOpts.map((o) => `
              <button type="button" class="chip ${tq.tenure === o.v ? 'selected' : ''}" data-term-tenure="${o.v}">${chipBtnContent(o.label, 'Term')}</button>`).join(''), 'multi')}
          </div>
        </div>
      </div>
      <div class="wizard-step-footer term-step-footer">
        <p class="term-step-footer__trust">Indicative quotes from leading life insurers</p>
        ${quoteContinueBtn('Compare plans', 'See term life quotes')}
      </div>
    </div>`;
}

function renderHomeQuoteStep0() {
  const h = quoteForm.home || defaultHomeQuoteForm();
  const formErr = wizardState?.formError
    ? `<p class="quote-form-error" role="alert">${wizardState.formError}</p>`
    : '';
  const pinDigits = homePincodeInputValue(h.pincode);
  const pinEmpty = pinDigits === '';
  const pinOk = isValidHomePincode(pinDigits);
  const pinShowError = !pinOk && !!(wizardState?.formError && /pincode/i.test(wizardState.formError));
  const pinFilledInvalid = !pinEmpty && !pinOk;
  let pinStateClass = 'term-age-field--idle';
  if (pinOk) pinStateClass = 'term-age-field--ok';
  else if (pinShowError) pinStateClass = 'term-age-field--error';
  else if (pinFilledInvalid) pinStateClass = 'term-age-field--invalid';
  else if (pinEmpty) pinStateClass = 'term-age-field--needs';
  const pinHintText = pinOk
    ? t('home.pincodeHintOk')
    : pinEmpty
      ? t('home.pincodeHintEmpty')
      : t('home.pincodeHintPartial');
  const pinDescribedBy = [
    pinEmpty ? 'homePincodeGuide' : '',
    'homePincodeHint',
    pinFilledInvalid && !pinShowError ? 'homePincodeInvalid' : '',
    pinShowError ? 'homePincodeError' : '',
  ].filter(Boolean).join(' ');
  const pinGuide = pinEmpty
    ? `<p class="term-age-field__guide" id="homePincodeGuide">${t('home.pincodeGuide')}</p>`
    : '';
  const pinInvalidMsg = pinFilledInvalid && !pinShowError
    ? `<p class="term-age-field__invalid" id="homePincodeInvalid" role="alert">${homePincodeInvalidMessage(pinDigits)}</p>`
    : '';
  const pinInlineError = pinShowError
    ? '<p class="term-age-field__error" id="homePincodeError" role="alert">Enter a valid 6-digit pincode</p>'
    : '';
  const areaDigits = homeAreaInputValue(h.areaSqFt);
  const areaEmpty = areaDigits === '';
  const areaOk = isValidHomeAreaSqFt(areaDigits);
  const areaShowError = !areaOk && !!(wizardState?.formError && /built-up area/i.test(wizardState.formError));
  const areaFilledInvalid = !areaEmpty && !areaOk;
  let areaStateClass = 'term-age-field--idle';
  if (areaOk) areaStateClass = 'term-age-field--ok';
  else if (areaShowError) areaStateClass = 'term-age-field--error';
  else if (areaFilledInvalid) areaStateClass = 'term-age-field--invalid';
  else if (areaEmpty) areaStateClass = 'term-age-field--needs';
  const areaHintText = areaOk
    ? t('home.areaHintOk')
    : areaEmpty
      ? t('home.areaHintEmpty')
      : t('home.areaHintPartial');
  const areaDescribedBy = [
    areaEmpty ? 'homeAreaGuide' : '',
    'homeAreaHint',
    areaFilledInvalid && !areaShowError ? 'homeAreaInvalid' : '',
    areaShowError ? 'homeAreaError' : '',
  ].filter(Boolean).join(' ');
  const areaGuide = areaEmpty
    ? `<p class="term-age-field__guide" id="homeAreaGuide">${t('home.areaGuide')}</p>`
    : '';
  const areaInvalidMsg = areaFilledInvalid && !areaShowError
    ? `<p class="term-age-field__invalid" id="homeAreaInvalid" role="alert">${homeAreaInvalidMessage(areaDigits)}</p>`
    : '';
  const areaInlineError = areaShowError
    ? '<p class="term-age-field__error" id="homeAreaError" role="alert">Enter built-up area between 100 and 50,000 sq ft</p>'
    : '';
  const showStructureValue = h.coverType !== 'contents';
  const structDigits = homeStructureInputValue(h.structureValueLakh);
  const structEmpty = structDigits === '';
  const structOk = isValidHomeStructureValueLakh(structDigits);
  const structShowError = showStructureValue && !structOk && !!(wizardState?.formError && /structure value/i.test(wizardState.formError));
  const structFilledInvalid = !structEmpty && !structOk;
  let structStateClass = 'term-age-field--idle';
  if (structOk) structStateClass = 'term-age-field--ok';
  else if (structShowError) structStateClass = 'term-age-field--error';
  else if (structFilledInvalid) structStateClass = 'term-age-field--invalid';
  else if (structEmpty) structStateClass = 'term-age-field--needs';
  const structHintText = structOk
    ? t('home.structureHintOk')
    : structEmpty
      ? t('home.structureHintEmpty')
      : t('home.structureHintPartial');
  const structDescribedBy = [
    structEmpty ? 'homeStructureGuide' : '',
    'homeStructureHint',
    structFilledInvalid && !structShowError ? 'homeStructureInvalid' : '',
    structShowError ? 'homeStructureError' : '',
  ].filter(Boolean).join(' ');
  const structGuide = structEmpty
    ? `<p class="term-age-field__guide" id="homeStructureGuide">${t('home.structureGuide')}</p>`
    : '';
  const structInvalidMsg = structFilledInvalid && !structShowError
    ? `<p class="term-age-field__invalid" id="homeStructureInvalid" role="alert">${homeStructureInvalidMessage(structDigits)}</p>`
    : '';
  const structInlineError = structShowError
    ? '<p class="term-age-field__error" id="homeStructureError" role="alert">Enter structure value between ₹5L and ₹500L (in lakhs)</p>'
    : '';
  return `
    <div class="home-step-fit">
      ${formErr}
      <div class="home-step-scroll">
        <p class="quote-form__lead quote-form__lead--home">Property basics for home cover — edit anytime before you pay.</p>
        <div class="home-step-stack">
          <div class="form-group form-group--home-q term-age-field home-pincode-field ${pinStateClass}">
            <label class="term-age-field__label" id="homePincodeLabel" for="homePincode">
              Pincode<span class="term-age-field__required" aria-hidden="true">*</span>
            </label>
            ${pinGuide}
            <div class="term-age-field__control">
              <input
                id="homePincode"
                class="term-age-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="6"
                value="${esc(pinDigits)}"
                placeholder="${t('home.pincodePlaceholder')}"
                autocomplete="postal-code"
                enterkeyhint="done"
                required
                aria-labelledby="homePincodeLabel homePincodeSuffix"
                aria-describedby="${pinDescribedBy}"
                aria-required="true"
                aria-invalid="${pinOk ? 'false' : 'true'}"
              >
              <span class="term-age-field__suffix" id="homePincodeSuffix" lang="en">${t('home.pincodeSuffix')}</span>
            </div>
            ${pinInvalidMsg}
            ${pinInlineError}
            <span class="term-age-field__hint" id="homePincodeHint">${pinHintText}</span>
          </div>
          <div class="form-group form-group--home-q"><label>Property type</label>
            ${quoteChoiceGroup(`
              <button type="button" class="chip ${h.propertyType === 'owned_apartment' ? 'selected' : ''}" data-home-property="owned_apartment">${chipBtnContent('Apartment', 'Owned flat')}</button>
              <button type="button" class="chip ${h.propertyType === 'independent_house' ? 'selected' : ''}" data-home-property="independent_house">${chipBtnContent('House', 'Independent')}</button>
              <button type="button" class="chip ${h.propertyType === 'rented' ? 'selected' : ''}" data-home-property="rented">${chipBtnContent('Rented', 'Tenant cover')}</button>
            `, 'multi')}
          </div>
          <div class="form-group form-group--home-q term-age-field home-area-field ${areaStateClass}">
            <label class="term-age-field__label" id="homeAreaLabel" for="homeAreaSqFt">
              Built-up area<span class="term-age-field__required" aria-hidden="true">*</span>
            </label>
            ${areaGuide}
            <div class="term-age-field__control">
              <input
                id="homeAreaSqFt"
                class="term-age-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="5"
                value="${esc(areaDigits)}"
                placeholder="${t('home.areaPlaceholder')}"
                enterkeyhint="done"
                required
                aria-labelledby="homeAreaLabel homeAreaSuffix"
                aria-describedby="${areaDescribedBy}"
                aria-required="true"
                aria-invalid="${areaOk ? 'false' : 'true'}"
              >
              <span class="term-age-field__suffix" id="homeAreaSuffix" lang="en">${t('home.areaSuffix')}</span>
            </div>
            ${areaInvalidMsg}
            ${areaInlineError}
            <span class="term-age-field__hint" id="homeAreaHint">${areaHintText}</span>
          </div>
          <div class="form-group form-group--home-q"><label>Cover for</label>
            ${quoteChoiceGroup(`
              <button type="button" class="chip ${h.coverType === 'both' ? 'selected' : ''}" data-home-cover="both">${chipBtnContent('Both', 'Structure + contents')}</button>
              <button type="button" class="chip ${h.coverType === 'structure' ? 'selected' : ''}" data-home-cover="structure">${chipBtnContent('Building', 'Structure only')}</button>
              <button type="button" class="chip ${h.coverType === 'contents' ? 'selected' : ''}" data-home-cover="contents">${chipBtnContent('Contents', 'Belongings only')}</button>
            `, 'multi')}
          </div>
          ${showStructureValue ? `
          <div class="form-group form-group--home-q term-age-field home-structure-field ${structStateClass}">
            <label class="term-age-field__label" id="homeStructureLabel" for="homeStructureValueLakh">
              Structure value<span class="term-age-field__required" aria-hidden="true">*</span>
            </label>
            ${structGuide}
            <div class="term-age-field__control">
              <input
                id="homeStructureValueLakh"
                class="term-age-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="3"
                value="${esc(structDigits)}"
                placeholder="${t('home.structurePlaceholder')}"
                enterkeyhint="done"
                required
                aria-labelledby="homeStructureLabel homeStructureSuffix"
                aria-describedby="${structDescribedBy}"
                aria-required="true"
                aria-invalid="${structOk ? 'false' : 'true'}"
              >
              <span class="term-age-field__suffix" id="homeStructureSuffix" lang="en">${t('home.structureSuffix')}</span>
            </div>
            ${structInvalidMsg}
            ${structInlineError}
            <span class="term-age-field__hint" id="homeStructureHint">${structHintText}</span>
          </div>` : ''}
        </div>
      </div>
      <div class="wizard-step-footer home-step-footer">
        <p class="home-step-footer__trust">Indicative quotes from leading general insurers</p>
        ${quoteContinueBtn('Compare plans', 'See home insurance quotes')}
      </div>
    </div>`;
}

function renderProductWizard(product, step) {
  const cfg = PRODUCT_CONFIG[product];
  const steps = product === 'health' ? ['Members', 'Details', 'Plans', 'Add-ons', 'Pay']
    : product === 'motor' ? ['Vehicle', 'Quotes']
    : ['Details', 'Plans', 'Pay'];
  const progress = steps.map((_, i) => {
    let c = 'wizard-progress__step';
    if (i < step) c += ' done';
    if (i === step) c += ' active';
    return `<div class="${c}"></div>`;
  }).join('');

  if (step === 0) {
    const compactClass = product === 'term' ? 'quote-form--term-compact'
      : product === 'home' ? 'quote-form--home-compact' : '';
    const formHtml = product === 'term' ? renderTermQuoteStep0()
      : product === 'home' ? renderHomeQuoteStep0()
        : '';
    return `
      <div class="page-header"><button class="back-btn" data-action="back">${iconBack()}</button>
        <h1>${cfg.label}</h1></div>
      <div class="wizard-progress">${progress}</div>
      <div class="wizard-body quote-form${compactClass ? ` ${compactClass}` : ''}">${formHtml}</div>`;
  }

  if (step === 1) {
    const plans = getFilteredPlans(product);
    return `
      <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
        <h1>${plans.length} ${cfg.label.toLowerCase()} plans found</h1></div>
      <div class="wizard-progress">${progress}</div>
      ${renderProductResults(product)}`;
  }

  if (step === 2) {
    return renderCheckoutPage(product, { progressHtml: `<div class="wizard-progress">${progress}</div>` });
  }
  return '';
}

function renderPlanItem(plan, showCompare = true) {
  const inCompare = compareList.includes(plan.id);
  const color = insurerColor(plan.insurer);
  return `
    <div class="plan-item ${plan.featured ? 'plan-item--featured' : ''}${inCompare ? ' plan-item--in-compare' : ''}" data-plan-id="${plan.id}">
      ${plan.badge ? `<span class="plan-item__badge">${plan.badge}</span>` : ''}
      <div class="plan-item__header">
        <div class="plan-item__logo" style="background:${color}" aria-hidden="true">${insurerInitials(plan.insurer)}</div>
        <div class="plan-item__info">
          <div class="plan-item__insurer">${plan.insurer}</div>
          <div class="plan-item__plan">${plan.plan}</div>
          ${plan.rating ? `<div class="plan-item__rating"><span class="rating-star">★ ${plan.rating}</span></div>` : ''}
        </div>
      </div>
      ${renderPlanTrustStats(plan, 'health')}
      <div class="plan-item__metrics">
        <div class="plan-item__metric"><strong>₹${plan.si}L</strong>Sum insured</div>
        <div class="plan-item__metric"><strong>${plan.roomRent}</strong>Room rent</div>
        <div class="plan-item__metric"><strong>${plan.copay}</strong>Co-pay</div>
      </div>
      <div class="plan-item__features">
        ${plan.restoration ? `<span class="feature-tag">Restoration</span>` : ''}
        ${plan.opd ? `<span class="feature-tag">OPD</span>` : ''}
        ${plan.maternity ? `<span class="feature-tag">Maternity</span>` : ''}
      </div>
      ${renderPlanPlainSummary(plan.id, 'health')}
      <div class="plan-item__collapsibles">${renderPlanCollapsibleSections(plan.id, 'health')}</div>
      <div class="plan-item__footer">
        ${renderPlanPriceDisplay(healthPremiumForPlan(plan), { indicative: true })}
        <div class="plan-item__actions">
          ${showCompare ? `<label class="compare-check${inCompare ? ' compare-check--selected' : ''}"><input type="checkbox" data-compare="${plan.id}" ${inCompare ? 'checked' : ''}> Compare</label>` : ''}
          <button class="btn btn--primary btn--sm" data-action="buy-plan" data-plan-id="${plan.id}">Buy now</button>
        </div>
      </div>
    </div>`;
}

const HOME_FEATURED_IDS = ['health', 'motor', 'term', 'home'];
const HOME_MORE_IDS = [];

function statusChipClass(status) {
  const s = (status || '').toLowerCase();
  if (s.includes('resolved')) return 'status--resolved';
  if (s.includes('waiting for customer')) return 'status--waiting-you';
  if (s.includes('waiting for insurer')) return 'status--waiting-insurer';
  if (s.includes('progress') || s.includes('review')) return 'status--progress';
  return 'status--open';
}

function getPolicyById(id) { return policies.find((p) => p.id === id); }
function normalizeProductKey(product) {
  const key = String(product || '').trim().toLowerCase();
  return PRODUCT_CONFIG[key] ? key : 'health';
}
function policyIdForProduct(product) {
  const p = policies.find((x) => x.product === normalizeProductKey(product));
  return p?.id || policies[0]?.id || 'h1';
}
/** Primary CTA on policy-issued screen — health e-card only for health insurance. */
function successViewPolicyLabel(product) {
  const p = normalizeProductKey(product);
  if (p === 'health') return t('btn.viewCard');
  if (p === 'motor') return t('btn.viewPolicyMotor');
  return t('btn.viewPolicy');
}
function buildStandardClaimSteps(phase, decisionOutcome = null) {
  const decisionLabel = decisionOutcome === 'approved'
    ? ('Approved')
    : decisionOutcome === 'rejected'
      ? ('Rejected')
      : ('Approved / Rejected');
  const stages = [
    { label: 'Submitted', desc: 'Claim registered in app'},
    { label: 'Under review', desc: 'Documents and details being checked'},
    { label: decisionLabel, desc: 'Insurer decision on your claim'},
    { label: 'Settled', desc: 'Payment or cashless completion if approved'},
  ];
  return stages.map((s, i) => ({
    label: s.label,
    desc: s.desc,
    done: i < phase,
    active: i === phase,
  }));
}

function getClaimTimelineSteps(claim) {
  if (claim.standardPhase != null) {
    return buildStandardClaimSteps(claim.standardPhase, claim.decisionOutcome);
  }
  return claim.steps || [];
}

function filterCashlessHospitals(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return CASHLESS_HOSPITALS.slice(0, 5);
  return CASHLESS_HOSPITALS.filter((h) =>
    h.name.toLowerCase().includes(q)
    || h.city.toLowerCase().includes(q)
    || h.pincode.includes(q)
    || h.insurers.some((i) => i.toLowerCase().includes(q)),
  ).slice(0, 8);
}

function openClaimStart() {
  const defaultPol = policies.find((p) => p.product === 'health') || policies[0];
  claimStartState = {
    step: 0,
    policyId: defaultPol?.id || '',
    claimType: defaultPol?.product === 'motor' ? 'own_damage' : 'cashless',
    checked: {},
    formError: '',
  };
  navigateFeature('claim-start');
}

function claimStartBack() {
  if (!claimStartState) {
    goBack();
    return;
  }
  if (claimStartState.step > 0) {
    claimStartState.step--;
    pushAppState();
    render();
  } else {
    claimStartState = null;
    navigateFeature('claims');
  }
}

function claimStartNext() {
  if (!claimStartState) return;
  const pol = getPolicyById(claimStartState.policyId);
  if (claimStartState.step === 0 && !pol) {
    claimStartState.formError = 'Please select a policy.';
    render();
    return;
  }
  claimStartState.formError = '';
  if (claimStartState.step < 2) {
    claimStartState.step++;
    pushAppState();
    render();
    return;
  }
  if (claimStartState.step === 2) {
    submitNewClaim();
  }
}

function submitNewClaim() {
  const pol = getPolicyById(claimStartState.policyId);
  if (!pol) return;
  const product = pol.product === 'motor' ? 'motor' : 'health';
  const template = CLAIM_DOC_CHECKLISTS[product];
  const docs = template.map((d) => ({
    id: d.id,
    label: d.label,
    required: d.required,
    done: !!claimStartState.checked[d.id],
  }));
  const id = `c${claims.length + 1}`;
  claims.push({
    id,
    policyId: pol.id,
    policy: `${pol.type} — ${pol.name}`,
    hospital: product === 'health'
      ? ('Hospital — you will choose')
      : ('Network garage'),
    status: 'Submitted',
    statusLabel: 'Submitted',
    date: '16 Oct 2026',
    amount: '— (estimate pending)',
    amountNote: 'Final amount is decided by the insurer.',
    nextAction: 'Upload your documents',
    nextOwner: 'you',
    expectedUpdate: '2–3 business days',
    standardPhase: 1,
    decisionOutcome: null,
    docs,
    decision: null,
  });
  claimStartState = null;
  openClaimDetail(id);
}

function getClaimById(id) { return claims.find((c) => c.id === id); }
function getCaseById(id) { return supportCases.find((c) => c.id === id); }
function claimsForPolicy(policyId) { return claims.filter((c) => c.policyId === policyId); }
function casesForPolicy(policyId) { return supportCases.filter((c) => c.policyId === policyId && c.status !== 'Resolved'); }
function openCasesCount() { return supportCases.filter((c) => c.status !== 'Resolved').length; }

function navigateFeature(view, ctx = {}) {
  currentView = view;
  serviceContext = {
    policyId: ctx.policyId ?? serviceContext.policyId,
    claimId: ctx.claimId ?? null,
    caseId: ctx.caseId ?? null,
  };
  if (ctx.resetDoctor) {
    policyDoctorState = { policyId: ctx.doctorPolicyId || null, view: ctx.doctorView || 'select', clauseKey: null, uploadLabel: null, uploadLoading: false };
  }
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  syncBottomNav(view);
  pushAppState();
  render();
  announcePage(captureAppState());
}

function openPolicyDetail(policyId) {
  navigateFeature('policy-detail', { policyId, claimId: null, caseId: null });
}

function openPolicyDoctor(policyId) {
  doctorQuestion = '';
  doctorAnswer = '';
  policyDoctorState = {
    policyId: policyId || null,
    view: policyId ? 'summary' : 'select',
    clauseKey: null,
    uploadLabel: null,
    uploadLoading: false,
  };
  currentView = 'policy-doctor';
  wizardState = null;
  document.body.classList.remove('wizard-mode', 'signup-mode');
  syncBottomNav('policy-doctor');
  pushAppState();
  render();
  announcePage(captureAppState());
}

function openClaimDetail(claimId) {
  navigateFeature('claim-detail', { claimId, caseId: null });
}

function openCasesList() {
  navigateFeature('cases', { claimId: null, caseId: null });
}

function openCaseDetail(caseId) {
  navigateFeature('case-detail', { caseId, claimId: null });
}

function openCaseCreate(policyId) {
  caseCreateDraft = { category: 'documents', policyId: policyId || policies[0]?.id || 'h1', subject: '', description: '' };
  caseFormError = '';
  navigateFeature('case-create', { policyId: policyId || caseCreateDraft.policyId });
}

function generateCaseId() {
  const n = 1100 + supportCases.length + Math.floor(Math.random() * 50);
  return `CASE-2026-${n}`;
}

function createSupportCase() {
  const subject = (caseCreateDraft.subject || '').trim();
  const description = (caseCreateDraft.description || '').trim();
  if (!subject || subject.length < 4) {
    caseFormError = 'Subject must be at least 4 characters.';
    render();
    return;
  }
  if (!description || description.length < 10) {
    caseFormError = 'Please describe the issue (min 10 characters).';
    render();
    return;
  }
  const id = generateCaseId();
  const now = '16 Sep 2026';
  const newCase = {
    id,
    policyId: caseCreateDraft.policyId,
    category: caseCreateDraft.category,
    subject,
    status: 'Open',
    created: now,
    nextAction: 'Hollow team will respond within 24 hours',
    expectedUpdate: '17 Sep 2026',
    escalated: false,
    timeline: [{ at: now, title: 'Case opened', desc: description.slice(0, 120), done: true, active: true }],
    messages: [{ from: 'you', at: `${now}, 12:00`, text: description }],
    attachments: [],
  };
  supportCases.unshift(newCase);
  caseFormError = '';
  openCaseDetail(id);
}

function escalateCase(caseId) {
  const c = getCaseById(caseId);
  if (!c || c.status === 'Resolved' || c.escalated) return;
  c.escalated = true;
  c.status = 'In Progress';
  c.timeline.push({ at: '16 Sep 2026', title: 'Escalated', desc: 'Priority review requested.', done: true, active: true });
  c.messages.push({ from: 'hollow', at: '16 Sep 2026, 12:15', text: 'Your case has been marked escalated in the app. A specialist would contact you per insurer SLA.' });
  c.nextAction = 'Specialist review within 48 hours';
  render();
}

function addCaseMessage(caseId, text) {
  const c = getCaseById(caseId);
  if (!c || !text.trim()) return;
  c.messages.push({ from: 'you', at: '16 Sep 2026, 12:30', text: text.trim() });
  if (c.status === 'Waiting for Customer') c.status = 'In Progress';
  c.timeline.push({ at: '16 Sep 2026', title: 'Your reply', desc: 'Message added.', done: true, active: true });
  render();
}

function toggleClaimDoc(claimId, docId) {
  const claim = getClaimById(claimId);
  const doc = claim?.docs?.find((d) => d.id === docId);
  if (!doc) return;
  doc.done = !doc.done;
  if (doc.done && claim.nextOwner === 'you' && /upload|document/i.test(claim.nextAction)) {
    claim.nextAction = 'Hollow will verify uploaded documents';
    claim.nextOwner = 'hollow';
    claim.expectedUpdate = '19 Sep 2026';
  }
  render();
}

function answerPolicyDoctorQuestion() {
  const q = (doctorQuestion || '').trim();
  if (!q) return;
  doctorLoading = true;
  doctorAnswer = '';
  render();
  window.setTimeout(() => {
    doctorLoading = false;
    const pid = policyDoctorState.policyId || 'h1';
    const profile = POLICY_DOCTOR_PROFILES[pid] || POLICY_DOCTOR_PROFILES.h1;
    const match = (profile.faq || []).find((f) => f.q.test(q));
    if (match) {
      doctorAnswer = match.a + ('\n\nConfirm coverage with your insurer policy wording.');
      if (match.clause && profile.clauses[match.clause]) policyDoctorState.clauseKey = match.clause;
    } else {
      doctorAnswer = 'We cannot confirm an answer for that question from the documents available. Check your policy PDF or open a support case.';
      policyDoctorState.clauseKey = null;
    }
    render();
  }, 600);
}

function simulatePolicyUpload(fileName) {
  policyDoctorState.uploadLoading = true;
  policyDoctorState.uploadLabel = fileName || 'policy.pdf';
  render();
  window.setTimeout(() => {
    policyDoctorState.uploadLoading = false;
    policyDoctorState.policyId = 'uploaded';
    policyDoctorState.view = 'summary';
    doctorQuestion = '';
    doctorAnswer = '';
    render();
  }, 900);
}

function renderPrototypeBanner(_text) {
  return '';
}

function renderAfterBuyCard({ variant, action, extra = '', name, tag = '', iconName, count = 0, alert = false }) {
  const ariaLabel = tag ? `${name}. ${tag}` : name;
  const titleOnly = tag ? '' : ' home-after-cat--title-only';
  return `<button type="button" class="home-cat home-after-cat home-after-cat--${variant}${titleOnly}${alert ? ' home-after-cat--alert' : ''}" role="listitem" data-action="${action}" ${extra} aria-label="${ariaLabel}">
      ${count ? `<span class="home-after-cat__badge" aria-hidden="true">${count}</span>` : ''}
      <span class="home-cat__icon" aria-hidden="true"><span class="home-after-cat__icon-box home-after-cat__icon-box--${variant}">${icon(iconName, ICON_SIZE.lg, 'hollow-icon')}</span></span>
      <span class="home-cat__copy">
        <span class="home-cat__name">${name}</span>
        ${tag ? `<span class="home-cat__tag">${tag}</span>` : ''}
      </span>
      <span class="home-cat__go" aria-hidden="true">${icon('chevronRight', ICON_SIZE.sm)}</span>
    </button>`;
}

/** Post-purchase tools — 2×2 cards (same pattern as Buy insurance). */
function renderHomeCustomerToolsStrip() {
  const openN = openCasesCount();
  return [
    renderAfterBuyCard({
      variant: 'policy',
      action: 'open-policy-doctor',
      name: 'Policy Doctor',
      tag: 'Quick policy help',
      iconName: 'doctor',
    }),
    renderAfterBuyCard({
      variant: 'support',
      action: 'open-cases',
      name: 'Support',
      tag: openN ? `${openN} open case${openN === 1 ? '' : 's'}` : 'Track or raise a request',
      iconName: 'support',
      count: openN,
      alert: !!openN,
    }),
    renderAfterBuyCard({
      variant: 'health',
      action: 'set-view',
      extra: 'data-view="help" data-help="network"',
      name: 'Hospitals',
      tag: 'Find cashless hospitals',
      iconName: 'mapPin',
    }),
    renderAfterBuyCard({
      variant: 'motor',
      action: 'set-view',
      extra: 'data-view="help" data-help="motor"',
      name: 'Motor help',
      tag: 'Garages & roadside assist',
      iconName: 'motor',
    }),
  ].join('');
}

function renderServiceAlertRow(it) {
  const attrs = [
    `data-action="${it.action}"`,
    it.policy ? `data-policy="${it.policy}"` : '',
    it.claim ? `data-claim="${it.claim}"` : '',
    it.caseId ? `data-case="${it.caseId}"` : '',
  ].filter(Boolean).join(' ');
  const badge = it.badge
    ? `<span class="status-chip ${it.badgeClass || 'status--open'}">${esc(it.badge)}</span>`
    : '';
  return `<button type="button" class="service-alert service-alert--${it.type}" ${attrs}>
    <span class="service-alert__icon service-alert__icon--${it.type}" aria-hidden="true">${icon(it.icon, ICON_SIZE.sm)}</span>
    <span class="service-alert__body">
      <span class="service-alert__top">
        <span class="service-alert__title">${esc(it.title)}</span>
        ${badge}
      </span>
      <span class="service-alert__meta">${esc(it.meta)}</span>
    </span>
    ${icon('chevronRight', ICON_SIZE.sm, 'hollow-icon service-alert__chev')}
  </button>`;
}

function renderServiceAlerts() {
  const items = [];
  const next = getPoliciesByRenewal()[0];
  if (next && daysUntilRenewal(next.renewalISO) <= 45) {
    const days = daysUntilRenewal(next.renewalISO);
    items.push({
      type: 'renew',
      icon: 'renew',
      title: `${next.insurer} renewal`,
      meta: days <= 0 ? 'Due today — renew to stay covered' : `Renews in ${days} day${days === 1 ? '' : 's'} · ${next.name}`,
      badge: days <= 14 ? 'Due soon' : 'Renewal',
      badgeClass: days <= 14 ? 'status--renew' : 'status--open',
      action: 'renew-policy',
      policy: next.id,
    });
  }
  claims.filter((c) => c.steps?.some((s) => s.active)).forEach((c) => {
    items.push({
      type: 'claim',
      icon: 'claim',
      title: c.policy || `Claim ${c.id.toUpperCase()}`,
      meta: c.nextAction ? `Next: ${c.nextAction}` : (c.statusLabel || c.status),
      badge: c.statusLabel || c.status,
      badgeClass: statusChipClass(c.statusLabel || c.status),
      action: 'open-claim-detail',
      claim: c.id,
    });
  });
  supportCases.filter((c) => c.status !== 'Resolved').slice(0, 2).forEach((c) => {
    const subject = (c.subject || '').length > 42 ? `${c.subject.slice(0, 39)}…` : (c.subject || c.id);
    items.push({
      type: 'case',
      icon: 'support',
      title: subject,
      meta: c.nextAction || `Case ${c.id}`,
      badge: c.status,
      badgeClass: statusChipClass(c.status),
      action: 'open-case-detail',
      caseId: c.id,
    });
  });
  if (!items.length) return '';
  const countLabel = items.length === 1 ? '1 update' : `${items.length} updates`;
  return `<div class="service-alerts">
    <div class="section__head service-alerts__head">
      <h2>Updates</h2>
      <span class="service-alerts__count">${countLabel}</span>
    </div>
    <div class="service-alerts__panel">
      <div class="service-alerts__list">${items.map((it) => renderServiceAlertRow(it)).join('')}</div>
    </div>
  </div>`;
}

function renderPolicyDetail() {
  const p = getPolicyById(serviceContext.policyId);
  if (!p) return `<div class="section main--padded"><p class="subtitle">Policy not found</p><button class="btn btn--secondary" data-action="set-view" data-view="policies">Back</button></div>`;
  const relatedClaims = claimsForPolicy(p.id);
  const relatedCases = casesForPolicy(p.id);
  return renderPageShell(p.type, `
    ${renderPrototypeBanner('Demo policy details.')}
    <div class="card policy-detail__hero">
      <span class="policy-card__type">${p.type}</span>
      <div class="policy-card__amount">${p.sumInsured}</div>
      <div class="policy-card__meta">${p.name} · ${p.insurer}</div>
      <div class="policy-card__meta">${p.premium} · Renews ${p.renewal}</div>
      <div class="policy-card__meta">Policy: ${p.policyNo}</div>
    </div>
    <div class="policy-detail__actions">
      <button type="button" class="btn btn--primary btn--block" data-action="open-policy-doctor" data-policy="${p.id}">${icon('doctor', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} Policy Doctor</button>
      <button type="button" class="btn btn--secondary btn--block" data-action="open-claim-detail" data-claim="${relatedClaims[0]?.id || ''}" ${!relatedClaims[0] ? 'disabled' : ''}>${icon('claim', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} Track claim</button>
      <button type="button" class="btn btn--ghost btn--block" data-action="open-case-create" data-policy="${p.id}">${icon('grievance', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} Support case</button>
    </div>
    <h2>Coverage (summary)</h2>
    <ul class="bullet-list">${(p.coverage || []).map((c) => `<li>${c}</li>`).join('')}</ul>
    ${relatedClaims.length ? `<h2>Claims</h2>${relatedClaims.map((c) =>
      `<button type="button" class="card card--interactive link-card" data-action="open-claim-detail" data-claim="${c.id}">
        <strong>${c.id.toUpperCase()}</strong> · ${c.statusLabel || c.status}<br><span class="policy-card__meta">${c.nextAction}</span>
      </button>`).join('')}` : ''}
    ${relatedCases.length ? `<h2>Active cases</h2>${relatedCases.map((c) =>
      `<button type="button" class="card card--interactive link-card" data-action="open-case-detail" data-case="${c.id}">
        <strong>${esc(c.id)}</strong> · ${esc(c.status)}<br><span class="policy-card__meta">${esc(c.subject)}</span>
      </button>`).join('')}` : ''}
  `, { bodyClass: 'policy-detail' });
}

function renderDoctorBullets(items) {
  return `<ul class="doctor-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
}

function renderDoctorFacts(items) {
  return `<dl class="doctor-facts">${items.map((r) => `
    <div class="doctor-fact">
      <dt class="doctor-fact__label">${r.label}</dt>
      <dd class="doctor-fact__value">${r.value}</dd>
    </div>`).join('')}</dl>`;
}

function renderDoctorSectionCard(title, subtitle, innerHtml, variant = '') {
  const sub = subtitle ? `<p class="doctor-card__subtitle">${subtitle}</p>` : '';
  const badge = variant === 'doctor-card--exclusions'
    ? '<p class="doctor-card__badge doctor-card__badge--alert">Read carefully</p>'
    : variant === 'doctor-card--coverage'
      ? '<p class="doctor-card__badge doctor-card__badge--positive">Included benefits</p>'
      : variant === 'doctor-card--timing'
        ? '<p class="doctor-card__badge doctor-card__badge--timing">Timing matters</p>'
        : variant === 'doctor-card--deductibles'
          ? '<p class="doctor-card__badge doctor-card__badge--deductibles">Your share</p>'
          : variant === 'doctor-card--limits'
            ? '<p class="doctor-card__badge doctor-card__badge--limits">Policy caps</p>'
            : '';
  return `<section class="doctor-card ${variant}">
    <header class="doctor-card__head">
      ${badge}
      <h3 class="doctor-card__title">${title}</h3>${sub}
    </header>
    <div class="doctor-card__body">${innerHtml}</div>
  </section>`;
}

function renderDoctorPolicyPick() {
  const policyCards = policies.map((p) => {
    const productIcon = p.product === 'motor' ? 'motor' : p.product === 'health' ? 'health' : 'policy';
    return `<button type="button" class="doctor-pick-card" data-action="doctor-pick-policy" data-policy="${p.id}">
      <span class="doctor-pick-card__icon doctor-pick-card__icon--${p.product || 'health'}" aria-hidden="true">${icon(productIcon, ICON_SIZE.lg)}</span>
      <span class="doctor-pick-card__body">
        <span class="doctor-pick-card__insurer">${esc(p.insurer)}</span>
        <span class="doctor-pick-card__name">${esc(p.name)}</span>
        <span class="doctor-pick-card__meta">${esc(p.policyNo)}</span>
      </span>
      ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon doctor-pick-card__chev')}
    </button>`;
  }).join('');

  return `<div class="doctor-pick">
    <div class="doctor-hero doctor-pick__hero">
      <p class="doctor-hero__eyebrow">Policy Doctor</p>
      <h2 class="doctor-hero__title">Understand your policy in simple language</h2>
      <p class="doctor-hero__lead">Pick a policy from Hollow or upload your schedule PDF—we’ll explain coverage, exclusions, and waiting periods without the jargon.</p>
    </div>
    ${renderPrototypeBanner('No live AI or OCR. Sample data only.')}
    <section class="doctor-pick__section" aria-labelledby="doctorPickPolicies">
      <h3 class="doctor-pick__heading" id="doctorPickPolicies">Your policies</h3>
      <div class="doctor-pick-list">${policyCards}</div>
    </section>
    <section class="doctor-pick__section" aria-labelledby="doctorPickUpload">
      <h3 class="doctor-pick__heading" id="doctorPickUpload">Or upload a document</h3>
      <label class="doctor-upload">
        <input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" data-action="doctor-upload" hidden>
        <span class="doctor-upload__icon" aria-hidden="true">${icon('file', ICON_SIZE.lg)}</span>
        <span class="doctor-upload__body">
          <span class="doctor-upload__title">Upload PDF or photo</span>
          <span class="doctor-upload__hint">Schedule or certificate · up to 10 MB</span>
        </span>
        ${icon('chevronRight', ICON_SIZE.sm, 'hollow-icon doctor-upload__chev')}
      </label>
      ${policyDoctorState.uploadLoading ? `<p class="doctor-upload__status" role="status">Analyzing your document…</p>` : ''}
    </section>
  </div>`;
}

function renderPolicyDoctor() {
  if (policyDoctorState.view === 'clause' && policyDoctorState.clauseKey) {
    const pid = policyDoctorState.policyId || 'h1';
    const profile = POLICY_DOCTOR_PROFILES[pid] || POLICY_DOCTOR_PROFILES.h1;
    const clause = profile.clauses[policyDoctorState.clauseKey];
    if (!clause) { policyDoctorState.view = 'summary'; }
    else {
      return renderPageShell('Policy clause', `
        ${renderPrototypeBanner('Sample clause text for prototype.')}
        <div class="card clause-card">
          <h2>${clause.title}</h2>
          <p class="policy-card__meta">Page ${clause.page}</p>
          <p class="clause-card__excerpt">${clause.excerpt}</p>
        </div>
        <button type="button" class="btn btn--secondary btn--block" data-action="doctor-back-summary">Back to summary</button>
      `, { backAction: 'doctor-back-summary' });
    }
  }

  if (policyDoctorState.view === 'select' || !policyDoctorState.policyId) {
    return renderPageShell('Policy Doctor', renderDoctorPolicyPick(), { bodyClass: 'policy-doctor policy-doctor--pick' });
  }

  const pid = policyDoctorState.policyId;
  const profile = POLICY_DOCTOR_PROFILES[pid] || POLICY_DOCTOR_PROFILES.h1;
  const pol = pid === 'uploaded' ? null : getPolicyById(pid);
  const section = (title, items, key, subtitle = '') => {
    if (!items?.length) return '';
    const isFacts = key === 'waiting' || key === 'deductibles' || key === 'limits';
    const body = isFacts ? renderDoctorFacts(items) : renderDoctorBullets(items);
    const variant = key === 'exclusions'
      ? 'doctor-card--exclusions'
      : key === 'coverage'
        ? 'doctor-card--coverage'
        : key === 'waiting'
          ? 'doctor-card--timing'
          : key === 'deductibles'
            ? 'doctor-card--deductibles'
            : key === 'limits'
              ? 'doctor-card--limits'
              : '';
    return renderDoctorSectionCard(title, subtitle, body, variant);
  };

  const policyTitle = pol ? `${pol.insurer} · ${pol.name}` : 'Uploaded document';
  const clausesHtml = Object.keys(profile.clauses).length
    ? renderDoctorSectionCard('Policy clauses', 'Tap to read the wording from your document', Object.entries(profile.clauses).map(([k, cl]) =>
      `<button type="button" class="doctor-clause-link" data-action="doctor-view-clause" data-clause="${k}">
        <span class="doctor-clause-link__title">${cl.title}</span>
        <span class="doctor-clause-link__meta">Page ${cl.page}</span>
      </button>`).join(''), 'doctor-card--clauses')
    : '';

  return renderPageShell('Policy Doctor', `
    ${renderPrototypeBanner(profile.sampleBanner)}
    <div class="doctor-hero">
      <p class="doctor-hero__eyebrow">Plain-language summary</p>
      <h2 class="doctor-hero__title">${policyTitle}</h2>
      <p class="doctor-hero__lead">${profile.plainSummary}</p>
    </div>
    <div class="doctor-layout">
      ${section('What’s covered', profile.coverage, 'coverage', 'Benefits included in this policy')}
      ${section('What’s not covered', profile.exclusions, 'exclusions', 'Common exclusions — check your policy wording')}
      ${section('Waiting periods', profile.waiting, 'waiting', 'When cover starts for different situations')}
      ${section('Deductibles & co-pay', profile.deductibles, 'deductibles', 'Your share of the bill, if any')}
      ${section('Limits & sum insured', profile.limits, 'limits', 'Caps that apply each policy year')}
      ${profile.warnings?.length ? `<div class="doctor-alert" role="note">
        <p class="doctor-alert__title">Good to know</p>
        <ul class="doctor-alert__list">${profile.warnings.map((w) => `<li>${w}</li>`).join('')}</ul>
      </div>` : ''}
      ${clausesHtml}
    </div>
    <div class="card doctor-qa">
      <h3 class="doctor-qa__title">Ask about this policy</h3>
      <p class="doctor-qa__hint">Get a plain-language answer from this policy summary.</p>
      <label class="sr-only" for="doctorQuestion">Your question about this policy</label>
      <div class="doctor-qa__row">
        <input type="text" class="doctor-qa__input" id="doctorQuestion" value="${esc(doctorQuestion)}" placeholder="e.g. What is the waiting period?" autocomplete="off" enterkeyhint="go">
        <button type="button" class="btn btn--primary doctor-qa__submit" data-action="doctor-ask">Ask</button>
      </div>
      ${doctorLoading ? `<p class="doctor-qa__status" role="status">Thinking…</p>` : ''}
      ${doctorAnswer ? `<div class="doctor-answer" role="status">${formatAIText(doctorAnswer)}</div>` : ''}
      ${policyDoctorState.clauseKey && profile.clauses[policyDoctorState.clauseKey] ? `<button type="button" class="btn btn--secondary btn--block doctor-qa__clause" data-action="doctor-view-clause" data-clause="${policyDoctorState.clauseKey}">View related clause</button>` : ''}
    </div>
  `, { backAction: 'doctor-change-policy', bodyClass: 'policy-doctor' });
}

function renderCasesList() {
  const list = supportCases;
  const caseCards = list.map((c) => {
    const pol = getPolicyById(c.policyId);
    const product = pol?.product || 'health';
    const productIcon = product === 'motor' ? 'motor' : product === 'health' ? 'health' : 'policy';
    const policyLine = pol ? `${pol.insurer} · ${pol.name}` : 'Linked policy';
    return `<button type="button" class="case-pick-card" data-action="open-case-detail" data-case="${c.id}">
      <span class="case-pick-card__icon doctor-pick-card__icon doctor-pick-card__icon--${product}" aria-hidden="true">${icon(productIcon, ICON_SIZE.lg)}</span>
      <span class="case-pick-card__body">
        <span class="case-pick-card__top">
          <span class="case-pick-card__id">${esc(c.id)}</span>
          <span class="status-chip case-pick-card__status ${statusChipClass(c.status)}">${esc(c.status)}</span>
        </span>
        <span class="case-pick-card__title">${esc(c.subject)}</span>
        <span class="case-pick-card__meta">${esc(policyLine)} · ${esc(c.created)}</span>
        <span class="case-pick-card__next"><span class="case-pick-card__next-kicker">Next step</span>${esc(c.nextAction)}</span>
      </span>
      ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon case-pick-card__chev')}
    </button>`;
  }).join('');

  const empty = !list.length
    ? `<div class="cases-hub__empty empty-state"><p>No support cases yet</p><p class="cases-hub__empty-hint">Open a case and Hollow will coordinate with your insurer for you.</p></div>`
    : '';

  const listBlock = list.length
    ? `<section class="cases-hub__section" aria-labelledby="casesOpenHeading">
      <h3 class="doctor-pick__heading" id="casesOpenHeading">Your cases</h3>
      <div class="case-pick-list">${caseCards}</div>
    </section>`
    : empty;

  return `<div class="page-header page-header--static">
    <button type="button" class="back-btn" data-action="go-back">${iconBack()}</button>
    <h1>Support cases</h1>
  </div>
  <div class="section main--padded cases-hub">
    <div class="doctor-hero cases-hub__hero">
      <p class="doctor-hero__eyebrow">Support</p>
      <h2 class="doctor-hero__title">Track policy fixes and payment help</h2>
      <p class="doctor-hero__lead">Each case has a timeline, messages with Hollow, and one clear next step—no chasing call centres.</p>
    </div>
    ${renderPrototypeBanner('Prototype cases — no live ticketing.')}
    <button type="button" class="btn btn--primary btn--block cases-hub__create" data-action="open-case-create">Create new case</button>
    ${listBlock}
  </div>`;
}

function renderCaseCreate() {
  const err = caseFormError ? `<p class="form-error" role="alert">${caseFormError}</p>` : '';
  return `<div class="page-header page-header--static">
    <button type="button" class="back-btn" data-action="open-cases">${iconBack()}</button>
    <h1>Create case</h1>
  </div>
  <div class="section main--padded">
    ${err}
    <div class="form-group">
      <label for="casePolicy">Policy</label>
      <select id="casePolicy">${policies.map((p) => `<option value="${p.id}" ${caseCreateDraft.policyId === p.id ? 'selected' : ''}>${p.insurer} — ${p.name}</option>`).join('')}</select>
    </div>
    <div class="form-group">
      <label for="caseCategory">Category</label>
      <select id="caseCategory">
        <option value="correction" ${caseCreateDraft.category === 'correction' ? 'selected' : ''}>Policy correction</option>
        <option value="payment" ${caseCreateDraft.category === 'payment' ? 'selected' : ''}>Payment</option>
        <option value="refund" ${caseCreateDraft.category === 'refund' ? 'selected' : ''}>Refund</option>
        <option value="documents" ${caseCreateDraft.category === 'documents' ? 'selected' : ''}>Documents</option>
        <option value="other" ${caseCreateDraft.category === 'other' ? 'selected' : ''}>Other</option>
      </select>
    </div>
    <div class="form-group"><label for="caseSubject">Subject</label><input id="caseSubject" type="text" value="${esc(caseCreateDraft.subject)}"></div>
    <div class="form-group"><label for="caseDescription">Description</label><textarea id="caseDescription" rows="4">${esc(caseCreateDraft.description)}</textarea></div>
    <button type="button" class="btn btn--primary btn--block" data-action="submit-case">Submit case</button>
  </div>`;
}

function renderCaseDetail() {
  const c = getCaseById(serviceContext.caseId);
  if (!c) return `<div class="section main--padded"><p class="subtitle">Case not found</p></div>`;
  const pol = getPolicyById(c.policyId);
  return `<div class="page-header page-header--static">
    <button type="button" class="back-btn" data-action="open-cases">${iconBack()}</button>
    <h1>${c.id}</h1>
  </div>
  <div class="section main--padded case-detail">
    ${renderPrototypeBanner('Messages and uploads are simulated in the app.')}
    <div class="card">
      <div class="case-card__head"><span class="status-chip ${statusChipClass(c.status)}">${c.status}</span>${c.escalated ? `<span class="status-chip status--escalated">Escalated</span>` : ''}</div>
      <h2>${esc(c.subject)}</h2>
      <p class="policy-card__meta">${pol ? `${pol.insurer} · ${pol.policyNo}` : ''}</p>
      <div class="next-action-banner">
        <strong>Next action</strong>
        <p>${c.nextAction}</p>
        <p class="policy-card__meta">Expected update: ${c.expectedUpdate}</p>
      </div>
    </div>
    <h2>Timeline</h2>
    <ul class="claim-timeline">${c.timeline.map((s) => `
      <li class="claim-timeline__item ${s.done ? 'done' : ''} ${s.active ? 'active' : ''}">
        <div class="claim-timeline__dot">${s.done ? '✓' : ''}</div>
        <div class="claim-timeline__content"><h3>${s.title}</h3><p>${s.at} — ${s.desc}</p></div>
      </li>`).join('')}</ul>
    <h2>Messages</h2>
    <div class="case-thread">${c.messages.map((m) => `
      <div class="case-msg case-msg--${m.from}"><div class="case-msg__meta">${({ you: 'You', hollow: 'Hollow', insurer: 'Insurer' }[m.from] || m.from)} · ${esc(m.at)}</div><p>${esc(m.text)}</p></div>`).join('')}</div>
    <div class="case-reply">
      <label class="case-reply__label" for="caseReply">Reply</label>
      <div class="case-reply__composer">
        <textarea id="caseReply" class="case-reply__input" rows="3" placeholder="Type your message…" aria-describedby="caseReplyHint"></textarea>
        <div class="case-reply__toolbar">
          <span class="case-reply__hint" id="caseReplyHint">Add any details Hollow or your insurer need</span>
          <button type="button" class="btn btn--primary case-reply__send" data-action="case-send-reply" data-case="${c.id}" disabled>Send</button>
        </div>
      </div>
    </div>
    <label class="upload-zone upload-zone--sm case-detail__upload">
      <input type="file" data-action="case-upload" data-case="${c.id}" hidden>
      <span>Upload document</span>
    </label>
    ${c.status !== 'Resolved' && !c.escalated ? `<button type="button" class="btn btn--ghost btn--block" data-action="escalate-case" data-case="${c.id}">Request escalation</button>` : ''}
    ${pol ? `<button type="button" class="btn btn--ghost btn--block" data-action="open-policy-detail" data-policy="${pol.id}">View policy</button>` : ''}
  </div>`;
}

function renderClaimDetail() {
  const claimId = serviceContext.claimId || claims[0]?.id;
  const c = getClaimById(claimId);
  if (!c) return `<div class="section main--padded"><p class="subtitle">Claim not found</p><button class="btn btn--secondary" data-action="set-view" data-view="claims">All claims</button></div>`;
  const pol = getPolicyById(c.policyId);
  const ownerLabel = { you: 'You', hollow: 'Hollow', insurer: 'Insurer'};
  return `<div class="page-header page-header--static">
    <button type="button" class="back-btn" data-action="set-view" data-view="claims">${iconBack()}</button>
    <h1>Claim Command</h1>
  </div>
  <div class="section main--padded claim-command">
    ${renderPrototypeBanner('Sample claim tracking — no real payment status.')}
    <div class="card">
      <span class="policy-card__type">#${c.id.toUpperCase()}</span>
      <h2>${c.policy}</h2>
      <p class="policy-card__meta">${c.hospital} · ${c.date}</p>
      <p class="claim-command__amount">${c.amount}</p>
      <p class="policy-card__meta">${c.amountNote}</p>
      <span class="status-chip ${statusChipClass(c.statusLabel || c.status)}">${c.statusLabel || c.status}</span>
    </div>
    <div class="next-action-banner ${c.nextOwner === 'you' ? 'next-action-banner--you' : ''}">
      <strong>Next action</strong>
      <p>${c.nextAction}</p>
      <p class="policy-card__meta">Owner: ${ownerLabel[c.nextOwner] || c.nextOwner} · Expected update: ${c.expectedUpdate}</p>
    </div>
    <h2>Progress</h2>
    <ul class="claim-timeline">${getClaimTimelineSteps(c).map((s) => `
      <li class="claim-timeline__item ${s.done ? 'done' : ''} ${s.active ? 'active' : ''}">
        <div class="claim-timeline__dot">${s.done ? '✓' : ''}</div>
        <div class="claim-timeline__content"><h3>${s.label}</h3><p>${s.desc}${s.owner ? ` · ${ownerLabel[s.owner] || s.owner}` : ''}</p></div>
      </li>`).join('')}</ul>
    ${c.docs?.length ? `<h2>Documents</h2>
      <ul class="doc-checklist">${c.docs.map((d) => `
        <li><button type="button" class="doc-check ${d.done ? 'doc-check--done' : ''}" data-action="toggle-claim-doc" data-claim="${c.id}" data-doc="${d.id}" aria-pressed="${d.done}">
          <span class="doc-check__box">${d.done ? '✓' : ''}</span>
          <span>${d.label}${d.required ? ' *' : ''}</span>
        </button></li>`).join('')}</ul>
      <p class="policy-card__meta">* Required. Mark as uploaded when you have shared the document with us or the insurer.</p>` : ''}
    ${c.decision ? `<div class="card decision-card"><h3>${c.decision.label}</h3><p>${c.decision.text}</p></div>` : ''}
    <div class="claim-command__help">
      <button type="button" class="btn btn--secondary btn--block" data-action="open-policy-doctor" data-policy="${c.policyId}">Policy Doctor</button>
      <button type="button" class="btn btn--ghost btn--block" data-action="open-case-create" data-policy="${c.policyId}">Get help with this claim</button>
      ${pol ? `<button type="button" class="btn btn--ghost btn--block" data-action="open-policy-detail" data-policy="${pol.id}">Related policy</button>` : ''}
    </div>
  </div>`;
}

function renderTrendingMiniRow(p, tab) {
  let product = 'health';
  let meta = `${p.plan} · ₹${p.si}L · ★${p.rating}`;
  if (tab === 'motor') {
    product = 'motor';
    meta = `Comprehensive · IDV ${formatPremium(p.idv)}`;
  } else if (tab === 'term') {
    product = 'term';
    meta = `₹${p.cover}L cover · ${p.claims}% claims`;
  } else if (tab === 'home') {
    product = 'home';
    meta = `Structure ₹${p.structure}L · ${p.perils}`;
  }
  return `<button type="button" class="trending-mini" data-action="quote" data-product="${product}">
    <div class="trending-mini__logo" style="background:${insurerColor(p.insurer)}" aria-hidden="true">${insurerInitials(p.insurer)}</div>
    <span class="trending-mini__body">
      <span class="trending-mini__top">
        <span class="trending-mini__name">${p.insurer}</span>
        <span class="trending-mini__price">${formatPremium(p.premium)}<span>/yr</span></span>
      </span>
      <span class="trending-mini__meta">${meta}</span>
    </span>
    ${icon('chevronRight', ICON_SIZE.sm, 'hollow-icon trending-mini__chev')}
  </button>`;
}

function renderHome() {

  const trendingPlans = homeTrendingTab === 'motor'
    ? motorPlans.slice(0, 2)
    : homeTrendingTab === 'term'
      ? termPlans.slice(0, 2)
      : homeTrendingTab === 'home'
        ? homePlans.slice(0, 2)
        : healthPlans.slice(0, 2);

  const trendingHtml = trendingPlans.map((p) => renderTrendingMiniRow(p, homeTrendingTab)).join('');

  const productById = (id) => products.find(p => p.id === id);

  const homeCatMeta = {
    health: { tag: 'Family & individual', price: '₹14,200', unit: '/yr' },
    motor: { tag: 'Car & bike', price: '₹10,850', unit: '/yr' },
    term: { tag: 'Cover up to ₹1 Cr', price: '₹999', unit: '/mo' },
    home: { tag: 'House & belongings', price: '₹2,100', unit: '/yr' },
  };

  const featuredHtml = HOME_FEATURED_IDS.map(id => {
    const p = productById(id);
    if (!p) return '';
    const meta = homeCatMeta[id] || { tag: p.tag, price: p.from, unit: '/yr' };
    return `<button type="button" class="home-cat home-cat--${p.id}" data-action="quote" data-product="${p.id}" aria-label="${p.name}, ${meta.tag}, starts ${meta.price}${meta.unit}">
      <span class="home-cat__top">
        <span class="home-cat__icon" aria-hidden="true">${iconProduct(p.icon, p.color, ICON_SIZE.lg)}</span>
        <span class="home-cat__go" aria-hidden="true">${icon('chevronRight', ICON_SIZE.sm)}</span>
      </span>
      <span class="home-cat__copy">
        <span class="home-cat__name">${p.name}</span>
        <span class="home-cat__tag">${meta.tag}</span>
      </span>
      <span class="home-cat__from"><span class="home-cat__kicker">Starts</span> <strong>${meta.price}</strong><span class="home-cat__unit">${meta.unit}</span></span>
    </button>`;
  }).join('');

  const moreHtml = HOME_MORE_IDS.map(id => {
    const p = productById(id);
    if (!p) return '';
    return `<button type="button" class="home-more" data-action="quote" data-product="${p.id}" aria-label="${p.name}">
      ${iconProduct(p.icon, p.color, ICON_SIZE.md)}
      <span class="home-more__name">${p.name}</span>
      <span class="home-more__from">${compactFromLabel(p.from)}</span>
    </button>`;
  }).join('');

  let heroTopAction = '';
  if (authUser?.verified) {
    const soonest = [...policies].sort((a, b) => daysUntilRenewal(a.renewalISO) - daysUntilRenewal(b.renewalISO))[0];
    const renewDays = soonest ? daysUntilRenewal(soonest.renewalISO) : 999;
    if (soonest && renewDays <= 45) {
      const renewLabel = formatHeroRenewChip(renewDays);
      const renewAria = renewDays <= 0
        ? `Renew ${soonest.type} policy due today`
        : `Renew ${soonest.type} policy, ${renewDays} day${renewDays === 1 ? '' : 's'} left`;
      const urgent = renewDays <= 7;
      heroTopAction = `<button type="button" class="home-hero__login home-hero__login--compact home-hero__login--renew${urgent ? ' home-hero__login--urgent' : ''}" data-action="renew-policy" data-policy="${soonest.id}" aria-label="${esc(renewAria)}">${renewLabel}</button>`;
    } else {
      heroTopAction = `<button type="button" class="home-hero__login home-hero__login--compact home-hero__login--with-icon" data-action="set-view" data-view="policies">${iconHeroPolicyChip()}<span class="home-hero__login-text">My policies</span></button>`;
    }
  }

  return `
    <div class="home-v2">
      <div class="home-hero home-hero--v2">
        <div class="home-hero__top">
          <div class="home-greeting">
            <span class="home-greeting__name">${authUser?.name
    ? `Hi ${esc(authUser.name.trim().split(/\s+/)[0])} 👋`
    : 'Welcome 👋'}</span>
          </div>
          ${heroTopAction}
        </div>
        <h1 class="home-hero__title">${t('home.heroTitle')}</h1>
        <p class="home-hero__sub">${t('home.heroSub')}</p>

        <div class="quote-card quote-card--v2">
          <label class="quote-card__label" for="heroProduct">${t('home.quoteLabel')}</label>
          <div class="quote-card__row">
            <select id="heroProduct" class="quote-card__select" aria-label="${t('home.quoteLabel')}">
              ${products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
            <button type="button" class="quote-card__btn quote-card__btn--primary quote-card__btn--hero" data-action="hero-quote" aria-label="${t('home.heroCta')}">
              <span class="quote-card__btn-title quote-card__btn-title--hero">${t('home.heroCtaVisible')}</span>
              <span class="quote-card__btn-go" aria-hidden="true">${iconHeroQuoteGo()}</span>
            </button>
          </div>
          <div class="quote-card__popular">
            <span class="quote-card__popular-label">Popular</span>
            <div class="quote-card__popular-chips">
              <button type="button" data-action="quote" data-product="health">Family floater</button>
              <button type="button" data-action="quote" data-product="motor">Car insurance</button>
              <button type="button" data-action="quote" data-product="term">₹1 Cr term</button>
              <button type="button" data-action="quote" data-product="home">Home cover</button>
            </div>
          </div>
          <div class="home-support-strip" role="group" aria-label="${t('home.supportTitle')}">
            <span class="home-support-strip__label">${t('home.supportTitle')}</span>
            <div class="home-support-strip__actions">
              <button type="button" class="home-support-strip__btn" data-action="open-ai" data-ai-mode="finder">
                ${icon('sparkles', ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} ${t('home.supportAi')}
              </button>
              <button type="button" class="home-support-strip__btn home-support-strip__btn--expert" data-action="expert-modal">
                ${icon('advisor', ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} ${t('home.supportExpert')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="home-v2__body">
        <div class="home-cat-section home-cat-section--prominent">
          <div class="section__head home-cat-section__head">
            <div class="home-cat-section__titles">
              <h2>Buy insurance</h2>
              <p class="home-cat-section__lead">Pick a cover and compare plans.</p>
            </div>
            <button type="button" class="section__link home-cat-section__all" data-action="set-view" data-view="explore">View all</button>
          </div>
          <div class="home-cat-grid">${featuredHtml}</div>
          ${HOME_MORE_IDS.length ? `<div class="home-more-grid">${moreHtml}</div>` : ''}
        </div>

        <div class="quick-actions quick-actions--v2">
          <button type="button" class="quick-action quick-action--renew" data-action="open-renewals" aria-label="Renew existing policies">
            <span class="quick-action__icon quick-action__icon--renew">${icon('renew', ICON_SIZE.md)}${policies.filter((p) => daysUntilRenewal(p.renewalISO) <= 30).length ? `<span class="quick-action__badge" aria-hidden="true">${policies.filter((p) => daysUntilRenewal(p.renewalISO) <= 30).length}</span>` : ''}</span>
            <span class="quick-action__label">Renew</span>
          </button>
          <button type="button" class="quick-action" data-action="set-view" data-view="policies">
            <span class="quick-action__icon quick-action__icon--policy">${icon('policy', ICON_SIZE.md)}</span><span class="quick-action__label">Policies</span>
          </button>
          <button type="button" class="quick-action" data-action="set-view" data-view="claims">
            <span class="quick-action__icon quick-action__icon--claim">${icon('claim', ICON_SIZE.md)}</span><span class="quick-action__label">Claims</span>
          </button>
          <button type="button" class="quick-action" data-action="expert-modal">
            <span class="quick-action__icon quick-action__icon--advisor">${icon('advisor', ICON_SIZE.md)}</span><span class="quick-action__label">Advisor</span>
          </button>
        </div>

        <div class="customer-tools customer-tools--key-features">
          <div class="section__head section__head--stack">
            <h2>${t('home.keyFeaturesTitle')}</h2>
            <p class="customer-tools__intro">${openCasesCount() ? t('home.keyFeaturesIntroOpen') : t('home.keyFeaturesIntro')}</p>
          </div>
          <div class="home-after-section home-after-section--compact" role="list" aria-label="After you buy, tools by insurance type">
            <div class="home-cat-grid home-after-grid">${renderHomeCustomerToolsStrip()}</div>
          </div>
        </div>

        ${renderServiceAlerts()}

        ${renderHomeWhyHollow()}

        <div class="home-trending">
          <div class="section__head"><h2>Trending plans</h2></div>
          <div class="trending-tabs" role="tablist" aria-label="Trending plans by product">
            <button type="button" role="tab" aria-selected="${homeTrendingTab === 'health'}" class="trending-tab ${homeTrendingTab === 'health' ? 'active' : ''}" data-trending="health">Health</button>
            <button type="button" role="tab" aria-selected="${homeTrendingTab === 'motor'}" class="trending-tab ${homeTrendingTab === 'motor' ? 'active' : ''}" data-trending="motor">Motor</button>
            <button type="button" role="tab" aria-selected="${homeTrendingTab === 'term'}" class="trending-tab ${homeTrendingTab === 'term' ? 'active' : ''}" data-trending="term">Term</button>
            <button type="button" role="tab" aria-selected="${homeTrendingTab === 'home'}" class="trending-tab ${homeTrendingTab === 'home' ? 'active' : ''}" data-trending="home">Home</button>
          </div>
          <div class="trending-panel">
            <div class="trending-list" role="tabpanel" aria-live="polite">${trendingHtml}</div>
          </div>
        </div>

        ${renderInsuranceFooter()}
      </div>
    </div>`;
}

function renderExplore() {
  const tiles = products.map(p => `
    <button class="product-tile explore-product" data-action="quote" data-product="${p.id}">
      ${iconProduct(p.icon, p.color, ICON_SIZE.lg)}
      <span class="explore-product__copy">
        <span class="product-tile__name">${t(`product.${p.id}`)}</span>
        <span class="explore-product__hint">${t('explore.buy')}</span>
      </span>
    </button>`).join('');

  return `<div class="section main--padded explore-page">
    <h1>${t('explore.title')}</h1>
    <p class="subtitle">${t('explore.subtitle')}</p>
    <div class="explore-products">${tiles}</div>
    <h2 class="explore-page__heading">${t('explore.categories')}</h2>
    <div class="help-grid explore-cats">
      <button class="help-tile" data-action="quote" data-product="health" data-health-preset="family"><div class="help-tile__icon">${icon('family', ICON_SIZE.lg)}</div><div class="help-tile__label">${t('explore.family')}</div></button>
      <button class="help-tile" data-action="quote" data-product="health" data-health-preset="senior"><div class="help-tile__icon">${icon('senior', ICON_SIZE.lg)}</div><div class="help-tile__label">${t('explore.senior')}</div></button>
      <button class="help-tile" data-action="quote" data-product="motor"><div class="help-tile__icon">${icon('motor', ICON_SIZE.lg)}</div><div class="help-tile__label">${t('explore.car')}</div></button>
      <button class="help-tile" data-action="quote" data-product="motor"><div class="help-tile__icon">${icon('bike', ICON_SIZE.lg)}</div><div class="help-tile__label">${t('explore.bike')}</div></button>
      <button class="help-tile" data-action="quote" data-product="term"><div class="help-tile__icon">${icon('money', ICON_SIZE.lg)}</div><div class="help-tile__label">${t('explore.termCr')}</div></button>
      <button class="help-tile" data-action="quote" data-product="home"><div class="help-tile__icon">${icon('home', ICON_SIZE.lg)}</div><div class="help-tile__label">${t('explore.homeStructure')}</div></button>
    </div>
    ${renderInsuranceFooter()}
  </div>`;
}

function renderAccount() {
  const phone = authUser.phone || '';
  const displayPhone = phone.length === 10 ? `+91 ${phone.slice(0, 5)} ${phone.slice(5)}` : phone;
  const initial = (authUser.name || 'U').trim().charAt(0).toUpperCase();
  const email = authUser.email || '';
  const emailNotice = accountEmailNotice
    ? `<p class="account-email-notice ${accountEmailNotice === t('account.emailInvalid') ? 'account-email-notice--error' : 'account-email-notice--ok'}" role="status">${esc(accountEmailNotice)}</p>`
    : '';
  return `<div class="section main--padded account-page" style="padding-top:1rem">
    <h1>${t('account.title')}</h1>
    <div class="account-card">
      <div class="account-card__avatar" aria-hidden="true">${initial}</div>
      <div class="account-card__info">
        <div class="account-card__name">${esc(authUser.name)}</div>
        <div class="account-card__meta">${t('account.phone')} · ${esc(displayPhone)}</div>
        ${email ? `<div class="account-card__meta account-card__meta--email">${icon('mail', ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} ${esc(email)}</div>` : ''}
      </div>
    </div>
    <div class="account-contact">
      <h2 class="account-contact__title">${icon('mail', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} ${t('account.email')}</h2>
      <p class="account-contact__hint">${t('account.emailHint')}</p>
      ${emailNotice}
      <label class="account-contact__label" for="accountEmail">${t('account.email')}</label>
      <input class="account-contact__input" id="accountEmail" type="email" inputmode="email" autocomplete="email" value="${esc(email)}" placeholder="${t('signup.emailPlaceholder')}">
      <button type="button" class="btn btn--secondary btn--block btn--sm account-contact__save" data-action="save-account-email">${t('account.saveEmail')}</button>
    </div>
    <div class="account-menu">
      <button type="button" class="account-menu__item" data-action="set-view" data-view="policies">
        ${icon('policy', ICON_SIZE.lg, 'hollow-icon')} <span>${t('account.policies')}</span>
        ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon account-menu__chev')}
      </button>
      <button type="button" class="account-menu__item" data-action="set-view" data-view="claims">
        ${icon('claim', ICON_SIZE.lg, 'hollow-icon')} <span>Claims</span>
        ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon account-menu__chev')}
      </button>
      <button type="button" class="account-menu__item" data-action="set-view" data-view="help">
        ${icon('navHelp', ICON_SIZE.lg, 'hollow-icon')} <span>Help</span>
        ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon account-menu__chev')}
      </button>
    </div>
    <div class="account-settings">
      <h2 class="account-settings__title">${icon('settings', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} ${t('account.settings')}</h2>
      <div class="setting-row">
        <span class="setting-row__icon">${icon('notifications', ICON_SIZE.lg)}</span>
        <div class="setting-row__body">
          <div class="setting-row__label">${t('account.renewalReminders')}</div>
          <div class="setting-row__hint">${t('account.renewalRemindersHint')}</div>
        </div>
        <button type="button" class="addon-toggle ${appSettings.renewalReminders ? 'on' : ''}" data-setting="renewalReminders" role="switch" aria-checked="${appSettings.renewalReminders}" aria-label="${t('account.renewalReminders')}"></button>
      </div>
      <div class="setting-row">
        <span class="setting-row__icon">${icon('campaign', ICON_SIZE.lg)}</span>
        <div class="setting-row__body">
          <div class="setting-row__label">${t('account.offerAlerts')}</div>
          <div class="setting-row__hint">${t('account.offerAlertsHint')}</div>
        </div>
        <button type="button" class="addon-toggle ${appSettings.offerAlerts ? 'on' : ''}" data-setting="offerAlerts" role="switch" aria-checked="${appSettings.offerAlerts}" aria-label="${t('account.offerAlerts')}"></button>
      </div>
      <div class="setting-row">
        <span class="setting-row__icon">${icon('chat', ICON_SIZE.lg)}</span>
        <div class="setting-row__body">
          <div class="setting-row__label">${t('account.whatsapp')}</div>
          <div class="setting-row__hint">${t('account.whatsappHint')}</div>
        </div>
        <button type="button" class="addon-toggle ${appSettings.whatsappUpdates ? 'on' : ''}" data-setting="whatsappUpdates" role="switch" aria-checked="${appSettings.whatsappUpdates}" aria-label="${t('account.whatsapp')}"></button>
      </div>
      <div class="setting-row">
        <span class="setting-row__icon">${icon('smartphone', ICON_SIZE.lg)}</span>
        <div class="setting-row__body">
          <div class="setting-row__label">${t('account.sms')}</div>
          <div class="setting-row__hint">${t('account.smsHint')}</div>
        </div>
        <button type="button" class="addon-toggle ${appSettings.smsUpdates ? 'on' : ''}" data-setting="smsUpdates" role="switch" aria-checked="${appSettings.smsUpdates}" aria-label="${t('account.sms')}"></button>
      </div>
      <div class="setting-row setting-row--static">
        <span class="setting-row__icon">${icon('info', ICON_SIZE.lg)}</span>
        <div class="setting-row__body">
          <div class="setting-row__label">${t('account.version')}</div>
        </div>
        <span class="setting-row__value">Hollow 1.0</span>
      </div>
      <button type="button" class="setting-row setting-row--link" data-action="privacy-policy">
        <span class="setting-row__icon">${icon('lock', ICON_SIZE.lg)}</span>
        <div class="setting-row__body">
          <div class="setting-row__label">${t('account.privacy')}</div>
        </div>
        ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon account-menu__chev')}
      </button>
      ${accountPrivacyNotice ? `<p class="field-error" role="status">${esc(accountPrivacyNotice)}</p>` : ''}
    </div>
    <button type="button" class="btn btn--logout btn--block" data-action="logout">${icon('logout', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} ${t('account.logout')}</button>
    <p class="account-logout-note">You will need OTP again to access quotes after logout.</p>
  </div>`;
}

function renderPoliciesEmpty() {
  return `<div class="policies-empty card">
    <div class="policies-empty__icon" aria-hidden="true">${icon('policy', ICON_SIZE.x2)}</div>
    <h2 class="policies-empty__title">No policies yet</h2>
    <p class="policies-empty__text">Compare quotes and get covered in minutes.</p>
    <button type="button" class="btn btn--primary btn--block" data-action="quote" data-product="health">Get health quotes</button>
    <button type="button" class="btn btn--secondary btn--block" data-action="set-view" data-view="explore">Explore products</button>
  </div>`;
}

function renderPolicyRenewalBanner() {
  const soon = policies.filter((p) => {
    const d = daysUntilRenewal(p.renewalISO);
    return d >= 0 && d < 30;
  });
  if (!soon.length) return '';
  const lines = soon.map((p) => {
    const d = daysUntilRenewal(p.renewalISO);
    return `${p.name}: renews in ${d} days (${p.renewal})`;
  }).join(' · ');
  return `<div class="renewal-urgency-banner" role="status">
    <strong>Renewal coming up</strong>
    <p>${lines}</p>
  </div>`;
}

function renderPolicies() {
  const q = policySearchQuery.trim().toLowerCase();
  const filteredPolicies = policies.filter((p) =>
    !q
    || p.name.toLowerCase().includes(q)
    || p.insurer.toLowerCase().includes(q)
    || p.policyNo.toLowerCase().includes(q)
    || p.type.toLowerCase().includes(q),
  );

  const tabContent = policyTab === 'active' ? (filteredPolicies.length ? filteredPolicies.map((p) => {
    const daysLeft = daysUntilRenewal(p.renewalISO);
    const renewal = policyCardRenewalMeta(daysLeft);
    const daysPillHtml = renewal.daysPill
      ? `<span class="policy-renewal-row__pill ${renewal.daysModifier}">${renewal.daysPill}</span>`
      : '';
    return `
    <div class="card policy-card${renewal.renewSoon ? ' policy-card--renew-soon' : ''}">
      <button type="button" class="policy-card__main" data-action="open-policy-detail" data-policy="${p.id}">
        <header class="policy-card__head">
          <span class="policy-card__type">${p.type}</span>
          <span class="status-chip ${renewal.chipClass}">${renewal.chipLabel}</span>
        </header>
        <p class="policy-card__amount">${p.sumInsured}</p>
        <p class="policy-card__subtitle">${esc(p.name)} · ${esc(p.insurer)}</p>
        <div class="policy-card__meta-stack">
          <p class="policy-card__meta-line">
            <span class="policy-card__renewal">${renewal.dateLead} <strong>${esc(p.renewal)}</strong></span>
            ${daysPillHtml}
            <span class="policy-card__meta-sep" aria-hidden="true">·</span>
            <span class="policy-card__premium">${esc(p.premium)}</span>
          </p>
          <p class="policy-card__policy-no" title="${esc(p.policyNo)}">${esc(p.policyNo)}</p>
        </div>
      </button>
      <div class="policy-card__actions">
        <div class="policy-card__actions-row policy-card__actions-row--primary">
          <button type="button" class="btn btn--primary btn--sm" data-action="renew-policy" data-policy="${p.id}">Renew</button>
          <button type="button" class="btn btn--secondary btn--sm" data-action="open-policy-doctor" data-policy="${p.id}">Policy Doctor</button>
        </div>
        <div class="policy-card__actions-row policy-card__actions-row--secondary">
          <button type="button" class="btn btn--ghost btn--sm policy-card__link-btn" data-action="open-ai" data-prefill="What does my ${p.type.toLowerCase()} policy cover?">Ask AI</button>
          <button type="button" class="btn btn--ghost btn--sm policy-card__link-btn" data-action="open-case-create" data-policy="${p.id}">Support</button>
        </div>
      </div>
    </div>`;
  }).join('') : (policies.length ? `<p class="subtitle">No matching policies</p>` : renderPoliciesEmpty())) :
    policyTab === 'quotes' ? (savedQuotes.length ? savedQuotes.map((q) => `
    <div class="card policy-card saved-quote-card">
      <span class="policy-card__type">${q.product}</span>
      <div class="policy-card__amount">${q.premium}</div>
      <div class="policy-card__meta">${q.plan} · Saved ${q.saved}</div>
      <div class="policy-card__actions saved-quote-card__actions">
        <button type="button" class="btn btn--primary btn--sm" data-action="quote" data-product="${q.product.toLowerCase()}">Continue purchase</button>
        <button type="button" class="btn btn--ghost btn--sm saved-quote-card__delete" data-action="delete-saved-quote" data-quote-id="${q.id}" aria-label="Delete saved ${esc(q.product)} quote">Delete</button>
      </div>
    </div>`).join('') : `<div class="card"><p class="subtitle">No saved quotes yet — compare plans and save a quote to see it here.</p></div>`) :
    `<div class="card"><p class="subtitle">No expired policies</p></div>`;

  return `<div class="section main--padded" style="padding-top:1rem">
    <h1>My policies</h1>
    ${policyTab === 'active' ? renderPolicyRenewalBanner() : ''}
    <input type="search" class="policy-search-input" id="policySearch" placeholder="Search policies..." value="${esc(policySearchQuery)}">
    <div class="tabs tabs--policy" role="tablist" aria-label="Policy lists">
      <button type="button" role="tab" aria-selected="${policyTab === 'active'}" class="tab ${policyTab === 'active' ? 'active' : ''}" data-tab="active">Active <span class="tab__count">(${policies.length})</span></button>
      <button type="button" role="tab" aria-selected="${policyTab === 'quotes'}" class="tab ${policyTab === 'quotes' ? 'active' : ''}" data-tab="quotes">Saved <span class="tab__count">(${savedQuotes.length})</span></button>
      <button type="button" role="tab" aria-selected="${policyTab === 'expired'}" class="tab ${policyTab === 'expired' ? 'active' : ''}" data-tab="expired">Expired</button>
    </div>
    ${tabContent}
    <button class="btn btn--primary btn--block" data-action="quote" data-product="health">Buy new policy</button>
  </div>`;
}

function renderClaimStart() {
  const st = claimStartState;
  if (!st) return `<div class="section main--padded"><button class="btn btn--secondary" data-action="set-view" data-view="claims">Back</button></div>`;
  const steps = ['Policy', 'Type', 'Documents'];
  const progress = steps.map((_, i) => {
    let c = 'wizard-progress__step';
    if (i < st.step) c += ' done';
    if (i === st.step) c += ' active';
    return `<div class="${c}"></div>`;
  }).join('');
  const claimPolicies = policies.filter((p) => p.product === 'health' || p.product === 'motor');
  const pol = getPolicyById(st.policyId);
  const product = pol?.product === 'motor' ? 'motor' : 'health';
  const checklist = CLAIM_DOC_CHECKLISTS[product] || CLAIM_DOC_CHECKLISTS.health;

  let body = '';
  if (st.step === 0) {
    const policyErr = st.formError
      ? `<p class="field-error" role="alert">${esc(st.formError)}</p>`
      : '';
    body = `<div class="form-group"><label>Which policy?</label>
      ${quoteChoiceGroup(claimPolicies.map((p) => `
        <button type="button" class="chip ${st.policyId === p.id ? 'selected' : ''}" data-claim-start-policy="${p.id}">${chipBtnContent(p.type, p.name)}</button>`).join(''), 'wrap')}
      ${policyErr}</div>`;
  } else if (st.step === 1) {
    const types = product === 'motor'
      ? [
        { id: 'own_damage', en: 'Own damage' },
        { id: 'third_party', en: 'Third party' },
      ]
      : [
        { id: 'cashless', en: 'Cashless hospital' },
        { id: 'reimbursement', en: 'Reimbursement' },
      ];
    body = `<div class="form-group"><label>Claim type</label>
      ${quoteChoiceGroup(types.map((t) => `
        <button type="button" class="chip ${st.claimType === t.id ? 'selected' : ''}" data-claim-start-type="${t.id}">${chipBtnContent(t.en, 'Claim path')}</button>`).join(''))}
      <p class="quote-form__hint">Final details may vary by insurer.</p></div>`;
  } else {
    body = `<p class="quote-form__lead">Keep these ready before you start:</p>
      <ul class="doc-checklist doc-checklist--start">${checklist.map((d) => `
        <li><button type="button" class="doc-check ${st.checked[d.id] ? 'doc-check--done' : ''}" data-action="claim-start-toggle-doc" data-doc="${d.id}" aria-pressed="${!!st.checked[d.id]}">
          <span class="doc-check__box">${st.checked[d.id] ? '✓' : ''}</span>
          <span>${d.label}${d.required ? ' *' : ''}</span>
        </button></li>`).join('')}</ul>
      <p class="policy-card__meta">* Required. Check if you have this document.</p>`;
  }

  return `<div class="page-header page-header--static">
    <button type="button" class="back-btn" data-action="claim-start-back">${iconBack()}</button>
    <h1>Start a claim</h1>
  </div>
  <div class="wizard-progress">${progress}</div>
  <div class="section main--padded quote-form">${body}
    ${st.step === 2
    ? quoteContinueBtn('Submit claim', 'We will guide you next', 'claim-start-next')
    : quoteContinueBtn('Continue', st.step === 0 ? 'Next: claim type' : 'Next: documents', 'claim-start-next')}
  </div>`;
}

function renderClaims() {
  const hospitals = filterCashlessHospitals(hospitalSearchQuery);
  return `<div class="section main--padded" style="padding-top:1rem">
    <h1>Claims</h1>
    <p class="subtitle">Track cashless and reimbursement claims — see what’s pending and what to do next</p>
    ${renderPrototypeBanner('Sample claim data only.')}
    ${quoteContinueBtn('Start a claim', 'Cashless or reimbursement', 'open-claim-start')}
    <h2 class="claims-section-title">Find a cashless hospital</h2>
    <div class="network-search">
      <input type="search" id="hospitalSearch" placeholder="Name, city or pincode" value="${esc(hospitalSearchQuery)}" aria-label="Find cashless hospital">
    </div>
    <div class="network-list network-list--compact">${hospitals.length ? hospitals.map((h) => `
      <div class="network-item">
        <div class="network-item__body">
          <div class="network-item__name">${esc(h.name)}</div>
          <p class="network-item__meta">
            <span class="network-item__meta-loc">${esc(h.city)} · ${esc(h.pincode)}</span>
            <span class="network-item__distance">${esc(String(h.distanceKm))} km</span>
          </p>
        </div>
        <span class="network-item__tag">Cashless</span>
      </div>`).join('') : `<p class="subtitle">No matches</p>`}</div>
    <button type="button" class="ai-claim-banner" data-action="open-ai" data-ai-mode="claim">
      <span class="ai-claim-banner__icon">${icon('sparkles', ICON_SIZE.lg)}</span>
      <span class="ai-claim-banner__text"><strong>AI Claim Assistant</strong><br>Steps, documents & tracking — guided walkthrough</span>
      ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon')}
    </button>
    <div class="help-grid" style="margin-bottom:1rem">
      <button class="help-tile" data-action="open-ai" data-ai-mode="claim"><div class="help-tile__icon">${icon('claim', ICON_SIZE.lg)}</div><div class="help-tile__label">Claim guide</div></button>
      <button class="help-tile" data-action="set-view" data-view="help" data-help="network"><div class="help-tile__icon">${icon('hospital', ICON_SIZE.lg)}</div><div class="help-tile__label">Network hospitals</div></button>
      <button class="help-tile" data-action="set-view" data-view="help" data-help="garage"><div class="help-tile__icon">${icon('wrench', ICON_SIZE.lg)}</div><div class="help-tile__label">Cashless garages</div></button>
      <button class="help-tile" data-action="open-ai" data-prefill="Track my claim status"><div class="help-tile__icon">${icon('mapPin', ICON_SIZE.lg)}</div><div class="help-tile__label">Track claim</div></button>
    </div>
    <h2 class="claims-section-title">Active claims</h2>
    ${claims.length ? claims.map((c) => {
    const timeline = getClaimTimelineSteps(c);
    const activeStep = timeline.find((s) => s.active) || timeline[timeline.length - 1];
    const pendingDocs = (c.docs || []).filter((d) => d.required && !d.done).length;
    const ownerYou = c.nextOwner === 'you';
    return `
    <button type="button" class="card card--interactive claim-list-card" data-action="open-claim-detail" data-claim="${c.id}">
      <span class="policy-card__type">Claim #${c.id.toUpperCase()}</span>
      <span class="status-chip ${statusChipClass(c.statusLabel || c.status)}">${c.statusLabel || c.status}</span>
      <h2 style="margin:0.35rem 0;font-size:0.9375rem">${c.policy}</h2>
      <p class="policy-card__meta">${c.hospital} · ${c.date}</p>
      <div class="claim-mini-timeline" aria-hidden="true">${timeline.map((s) => `<span class="claim-mini-timeline__dot ${s.done ? 'done' : ''} ${s.active ? 'active' : ''}"></span>`).join('')}</div>
      <p class="claim-list-card__next"><strong>Next:</strong> ${c.nextAction}${ownerYou ? ' · Your action' : ''}</p>
      ${pendingDocs ? `<p class="claim-list-card__docs">${pendingDocs} required document${pendingDocs > 1 ? 's' : ''} pending</p>` : ''}
      <span class="link-card__cta">View details ${icon('chevronRight', ICON_SIZE.sm, 'hollow-icon')}</span>
    </button>`;
  }).join('') : `<div class="empty-state card">
      <p>No active claims</p>
      <button type="button" class="btn btn--primary btn--sm" data-action="open-claim-start">Start your first claim</button>
    </div>`}
  </div>`;
}

function renderHelp() {
  const showNetwork = wizardState?.helpSection === 'network';
  const showGarage = wizardState?.helpSection === 'garage';
  const showRoadside = wizardState?.helpSection === 'roadside';
  const showMotor = wizardState?.helpSection === 'motor';
  if (showMotor) {
    return `<div class="section main--padded" style="padding-top:1rem">
      <div class="page-header" style="position:static;padding:0;margin-bottom:1rem;border:none">
        <button class="back-btn" data-action="help-back">${iconBack()}</button>
        <h1>Motor help</h1>
      </div>
      <p class="subtitle">Cashless garage network and 24×7 roadside assistance.</p>
      <div class="motor-help-options">
        <button type="button" class="motor-help-option" data-action="set-view" data-view="help" data-help="garage">
          <span class="motor-help-option__icon motor-help-option__icon--garage" aria-hidden="true">${icon('wrench', ICON_SIZE.lg)}</span>
          <span class="motor-help-option__copy">
            <span class="motor-help-option__title">Cashless garages</span>
            <span class="motor-help-option__desc">Find network workshops near you</span>
          </span>
          ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon motor-help-option__chev')}
        </button>
        <button type="button" class="motor-help-option" data-action="set-view" data-view="help" data-help="roadside">
          <span class="motor-help-option__icon motor-help-option__icon--roadside" aria-hidden="true">${icon('phone', ICON_SIZE.lg)}</span>
          <span class="motor-help-option__copy">
            <span class="motor-help-option__title">Roadside help</span>
            <span class="motor-help-option__desc">Breakdown, towing &amp; on-road support</span>
          </span>
          ${icon('chevronRight', ICON_SIZE.md, 'hollow-icon motor-help-option__chev')}
        </button>
      </div>
    </div>`;
  }
  if (showRoadside) {
    const tel = PHONE_NUMBER.replace(/\D/g, '');
    return `<div class="section main--padded" style="padding-top:1rem">
      <div class="page-header" style="position:static;padding:0;margin-bottom:1rem;border:none">
        <button class="back-btn" data-action="help-back">${iconBack()}</button>
        <h1>Roadside assistance</h1>
      </div>
      <p class="subtitle">24×7 breakdown support for motor policies with RSA.</p>
      <ul class="roadside-help__list">
        <li>Breakdown towing to nearest garage</li>
        <li>Battery jump-start &amp; flat tyre support</li>
        <li>Fuel delivery (metro limits apply)</li>
        <li>On-spot minor repairs where possible</li>
      </ul>
      <a class="btn btn--primary btn--block roadside-help__call" href="tel:${tel}">${icon('phone', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} Call ${PHONE_NUMBER}</a>
      <p class="quote-form__hint">Keep your policy number and location handy. Non-network repairs may be reimbursement only.</p>
    </div>`;
  }
  if (showNetwork || showGarage) {
    const items = showNetwork ? [
      { name: 'Max Hospital, Saket', dist: '2.1 km', tag: 'Cashless' },
      { name: 'Apollo Hospitals', dist: '3.4 km', tag: 'Cashless' },
      { name: 'Fortis Escorts', dist: '4.8 km', tag: 'Cashless' },
      { name: 'AIIMS', dist: '6.2 km', tag: 'Reimbursement' },
    ] : [
      { name: 'MyTVS Auto', dist: '1.5 km', tag: 'Cashless' },
      { name: 'GoMechanic', dist: '2.3 km', tag: 'Cashless' },
      { name: 'Maruti Arena Service', dist: '3.1 km', tag: 'Cashless' },
    ];
    return `<div class="section main--padded" style="padding-top:1rem">
      <div class="page-header" style="position:static;padding:0;margin-bottom:1rem;border:none">
        <button class="back-btn" data-action="help-back">${iconBack()}</button>
        <h1>${showNetwork ? 'Network hospitals' : 'Cashless garages'}</h1>
      </div>
      <div class="network-search"><input type="text" placeholder="Search by name or pincode" value=""><button class="btn btn--primary btn--sm">Search</button></div>
      <div class="network-list">${items.map(i => `
        <div class="network-item"><div><div class="network-item__name">${i.name}</div><div class="network-item__dist">${i.dist} away</div></div>
        <span class="network-item__tag">${i.tag}</span></div>`).join('')}</div>
    </div>`;
  }

  return `<div class="section main--padded" style="padding-top:1rem">
    <h1>Help centre</h1>
    <button type="button" class="ai-search" data-action="open-ai">${icon('sparkles', ICON_SIZE.md, 'hollow-icon ai-search__icon')}
      <span class="ai-search__text">${t('ai.searchPrompt')}</span><span class="ai-search__badge">AI</span></button>
    <div class="help-grid" style="margin-bottom:1rem">
      <button class="help-tile" data-action="open-ai" data-ai-mode="finder"><div class="help-tile__icon">${icon('search', ICON_SIZE.lg)}</div><div class="help-tile__label">Find a plan</div></button>
      <button class="help-tile" data-action="open-ai" data-ai-mode="chat"><div class="help-tile__icon">${icon('chat', ICON_SIZE.lg)}</div><div class="help-tile__label">Ask a question</div></button>
      <button class="help-tile" data-action="open-ai" data-ai-mode="claim"><div class="help-tile__icon">${icon('claim', ICON_SIZE.lg)}</div><div class="help-tile__label">Claim help</div></button>
      <button class="help-tile" data-action="open-ai" data-ai-mode="manage"><div class="help-tile__icon">${icon('folder', ICON_SIZE.lg)}</div><div class="help-tile__label">My policies</div></button>
    </div>
    <div class="help-grid">
      <button class="help-tile" data-action="open-ai" data-ai-mode="explainer" data-prefill="How does cashless work?"><div class="help-tile__icon">${icon('hospital', ICON_SIZE.lg)}</div><div class="help-tile__label">Cashless guide</div></button>
      <button class="help-tile" data-action="open-ai" data-ai-mode="explainer" data-prefill="What is NCB?"><div class="help-tile__icon">${icon('motor', ICON_SIZE.lg)}</div><div class="help-tile__label">NCB explained</div></button>
      <button class="help-tile" data-action="set-view" data-view="help" data-help="network"><div class="help-tile__icon">${icon('mapPin', ICON_SIZE.lg)}</div><div class="help-tile__label">Find hospital</div></button>
      <button class="help-tile" data-action="expert-modal"><div class="help-tile__icon">${icon('advisor', ICON_SIZE.lg)}</div><div class="help-tile__label">Talk to expert</div></button>
      <button class="help-tile" data-action="open-ai" data-prefill="How to port health policy?"><div class="help-tile__icon">${icon('port', ICON_SIZE.lg)}</div><div class="help-tile__label">Port policy</div></button>
      <button class="help-tile" data-action="open-cases"><div class="help-tile__icon">${icon('support', ICON_SIZE.lg)}</div><div class="help-tile__label">Support cases</div></button>
      <button class="help-tile" data-action="open-policy-doctor"><div class="help-tile__icon">${icon('doctor', ICON_SIZE.lg)}</div><div class="help-tile__label">Policy Doctor</div></button>
    </div>
    <div class="card" style="margin-top:1rem"><strong>${t('help.helpline')}:</strong> ${PHONE_NUMBER}<br><strong>${t('help.igms')}:</strong> igms.irda.gov.in</div>
  </div>`;
}

function renderCompareView() {
  const product = wizardState?.compareProduct || 'health';
  const plans = resolveComparePlans(product);
  if (plans.length < 2) {
    const step = PRODUCT_CONFIG[product]?.resultsStep ?? 3;
    wizardState = { type: product, step };
    if (product === 'health') return renderHealthWizard(step);
    if (product === 'motor') return renderMotorWizard(step);
    return renderProductWizard(product, step);
  }

  const bodyRows = renderCompareTableBody(product, plans);

  return `
    <div class="page-header"><button class="back-btn" data-action="compare-back">${iconBack()}</button>
      <h1>${`Compare ${plans.length} plans`}</h1></div>
    <div class="wizard-body compare-screen">
      <p class="compare-note">${t('compare.indicative')}</p>
      <div class="compare-toolbar">
        <div class="compare-segment" role="tablist" aria-label="${t('compare.viewLabel')}">
          <button type="button" role="tab" class="compare-segment__btn ${compareHideEqualRows ? '' : 'compare-segment__btn--active'}" data-action="compare-view-mode" data-mode="all" aria-selected="${!compareHideEqualRows}">
            ${t('compare.viewAll')}
          </button>
          <button type="button" role="tab" class="compare-segment__btn ${compareHideEqualRows ? 'compare-segment__btn--active' : ''}" data-action="compare-view-mode" data-mode="diff" aria-selected="${compareHideEqualRows}">
            ${t('compare.viewDiff')}
          </button>
        </div>
        <p class="compare-toolbar__hint${compareHideEqualRows ? ' compare-toolbar__hint--mode' : ''}">${compareHideEqualRows ? t('compare.legendDiffMode') : t('compare.legendShort')}</p>
      </div>
      ${renderComparePlanRail(product, plans)}
      <div class="compare-table-shell">
        <div class="compare-table-wrap"><table class="compare-table">
          <thead><tr>
            <th scope="col" class="compare-table__th-feature"><span class="compare-table__head-label">${t('compare.tableFeatureCol')}</span></th>
            ${plans.map((p, i) => `<th scope="col" class="compare-table__th-plan compare-table__th-plan--${i}"><span class="compare-table__col-tag">${esc(p.insurer.split(' ').slice(0, 2).join(' '))}</span><span class="compare-table__col-sub">${esc(p.plan)}</span></th>`).join('')}
          </tr></thead>
          <tbody>${bodyRows}</tbody>
          <tfoot class="compare-table__foot">
            <tr class="compare-table__row compare-table__row--action" aria-label="Buy a plan">
              <td class="compare-table__feature compare-table__feature--foot" aria-hidden="true"></td>
              ${renderCompareActionRow(product, plans)}
            </tr>
          </tfoot>
        </table></div>
      </div>
      <button class="btn btn--secondary btn--block" style="margin-top:1rem" data-action="open-ai" data-ai-mode="compare">
        ${icon('sparkles', ICON_SIZE.sm, 'hollow-icon hollow-icon--inline')} Explain differences with AI
      </button>
    </div>`;
}

function renderWizardProgress(steps, step) {
  return steps.map((_, i) => {
    let c = 'wizard-progress__step';
    if (i < step) c += ' done';
    if (i === step) c += ' active';
    return `<div class="${c}" title="${steps[i]}"></div>`;
  }).join('');
}

function ensureMemberMedical(m) {
  if (!m.medical) m.medical = defaultMemberMedical();
  return m.medical;
}

function selectedHealthMembers() {
  return quoteForm.health.members.filter((m) => m.selected);
}

function ensureHealthMedicalMemberId() {
  const sel = selectedHealthMembers();
  if (!wizardState) return;
  if (!sel.some((m) => m.id === wizardState.medicalMemberId)) {
    wizardState.medicalMemberId = sel[0]?.id || 'self';
  }
}

function getActiveMedicalMember() {
  ensureHealthMedicalMemberId();
  const sel = selectedHealthMembers();
  return quoteForm.health.members.find((m) => m.id === wizardState?.medicalMemberId) || sel[0];
}

function healthHasAnyPed() {
  return selectedHealthMembers().some((m) => ensureMemberMedical(m).ped === 'yes');
}

function healthMemberSummary() {
  const h = quoteForm.health;
  const sel = selectedHealthMembers();
  const ages = sel.map((m) => `${m.label} ${m.age}`).join(', ');
  const si = `₹${h.sumInsured}L`;
  const ped = healthHasAnyPed() ? ('PED declared') : ('No PED');
  return `${ages} · ${si} · ${ped} · ${h.pincode}`;
}

function renderMedicalMemberSwitcher(activeId) {
  const selected = selectedHealthMembers();
  const active = selected.find((m) => m.id === activeId) || selected[0];
  if (!active) return '';
  if (selected.length <= 1) {
    const g = active.gender === 'male' ? ('Male') : ('Female');
    return `
      <div class="medical-member-focus">
        <span class="medical-member-focus__badge">For this member</span>
        <div class="medical-member-focus__name">${active.label}</div>
        <div class="medical-member-focus__meta">Age ${active.age} · ${g}</div>
      </div>`;
  }
  const idx = selected.findIndex((m) => m.id === activeId);
  const many = selected.length > 3;
  const ageBit = active.age ? ` (${active.age})` : '';
  return `
    <section class="medical-member-switcher medical-member-switcher--simple${many ? ' medical-member-switcher--many' : ''}" aria-labelledby="medicalMemberSwitcherLabel">
      <p class="medical-member-switcher__meta" id="medicalMemberSwitcherLabel">
        Member <strong>${idx + 1}</strong> of ${selected.length} · <span class="medical-member-switcher__current">${esc(active.label)}${ageBit}</span>
      </p>
      <div class="medical-member-tabs medical-member-tabs--simple medical-member-tabs--seg${many ? ' medical-member-tabs--wrap' : ' medical-member-tabs--seg-fill'}" role="tablist" aria-label="Select member">
        ${selected.map((m) => {
        const med = ensureMemberMedical(m);
        const on = m.id === activeId;
        const done = med.confirmed;
        const tick = done ? '<span class="medical-member-tab__tick" aria-hidden="true">✓</span>' : '';
        const stateHint = on ? ', current' : done ? ', done' : '';
        return `<button type="button" class="medical-member-tab ${on ? 'active' : ''} ${done ? 'done' : ''} ${!on && !done ? 'pending' : ''}" role="tab" aria-selected="${on}" aria-controls="medicalMemberPanel" aria-label="${esc(m.label)}${stateHint}" data-action="switch-medical-member" data-member="${m.id}">
          ${tick}<span class="medical-member-tab__line">${esc(m.label)}</span>
        </button>`;
      }).join('')}
      </div>
    </section>`;
}

function renderHealthPlanTypeChooser(planType) {
  const options = [
    { id: 'individual', title: 'Individual', sub: 'One person' },
    { id: 'floater', title: 'Family floater', sub: '2+ members' },
  ];
  const segments = options.map((opt) => {
    const on = planType === opt.id;
    return `<button type="button" class="plan-type-seg ${on ? 'plan-type-seg--on' : ''}" data-health-plan-type="${opt.id}" role="radio" aria-checked="${on}" aria-label="${opt.title}, ${opt.sub}">
      <span class="plan-type-seg__title">${opt.title}</span>
      <span class="plan-type-seg__sub">${opt.sub}</span>
    </button>`;
  }).join('');
  return `
    <div class="member-list-panel member-list-panel--plan-type">
      <h2 class="quote-form__h2 member-list-panel__heading" id="healthPlanTypeLabel">Plan type</h2>
      <p class="quote-form__hint plan-type-hint">Tap one option — both are selectable.</p>
      <div class="plan-type-field" role="radiogroup" aria-labelledby="healthPlanTypeLabel">${segments}</div>
    </div>`;
}

function captureHealthFormFromDOM() {
  const h = quoteForm.health;
  const planSeg = document.querySelector('[data-health-plan-type].plan-type-seg--on');
  const planChip = document.querySelector('[data-health-plan-type].chip.selected');
  h.planType = planSeg?.dataset.healthPlanType || planChip?.dataset.healthPlanType || h.planType;
  h.pincode = document.getElementById('healthPincode')?.value.replace(/\D/g, '').slice(0, 6) || h.pincode;
  h.existingPolicy = document.querySelector('[data-health-existing].selected')?.dataset.healthExisting || h.existingPolicy;
  const si = document.querySelector('[data-health-si].chip.selected')?.dataset.healthSi;
  if (si) h.sumInsured = parseInt(si, 10);
  h.maternity = document.querySelector('[data-health-maternity].chip.selected')?.dataset.healthMaternity || h.maternity;
  h.roomRent = document.querySelector('[data-health-room].chip.selected')?.dataset.healthRoom || h.roomRent;
  if (wizardState?.type === 'health' && wizardState.step === 1) {
    const active = getActiveMedicalMember();
    if (active) {
      const med = ensureMemberMedical(active);
      med.ped = document.querySelector('[data-health-ped].chip.selected')?.dataset.healthPed || med.ped;
      med.smoking = document.querySelector('[data-health-smoking].chip.selected')?.dataset.healthSmoking || med.smoking;
      med.alcohol = document.querySelector('[data-health-alcohol].chip.selected')?.dataset.healthAlcohol || med.alcohol;
      med.surgery12m = document.querySelector('[data-health-surgery].chip.selected')?.dataset.healthSurgery || med.surgery12m;
      med.pedList = [...document.querySelectorAll('[data-ped-opt].chip.selected')].map((el) => el.dataset.pedOpt);
      const otherEl = document.getElementById('healthPedOther');
      if (otherEl) med.pedOtherText = otherEl.value.trim();
      if (!med.pedList.includes('other')) med.pedOtherText = '';
    }
  }
  h.members.forEach((m) => {
    const row = document.querySelector(`[data-member-row="${m.id}"]`);
    if (!row) return;
    const ageInput = row.querySelector('.member-row__age');
    if (ageInput) {
      m.age = parseHealthMemberAge(ageInput.value);
    }
    const implicit = healthMemberImplicitGender(m.id);
    if (implicit) m.gender = implicit;
    else m.gender = row.querySelector('[data-member-gender].selected')?.dataset.gender || m.gender;
  });
}

/** Individual = exactly one insured; family floater = at least two. */
function minHealthFloaterMembers() {
  return 2;
}

function applyHealthMemberSelectionRules() {
  const h = quoteForm.health;
  syncHealthMemberImplicitGenders(h);
  const selected = h.members.filter((m) => m.selected);
  if (h.planType === 'individual') {
    const keep = selected.find((m) => m.id === 'self') || selected[0] || h.members.find((m) => m.id === 'self');
    if (keep) h.members.forEach((m) => { m.selected = m.id === keep.id; });
  } else if (!selected.length) {
    const self = h.members.find((m) => m.id === 'self');
    if (self) self.selected = true;
  }
}

function setHealthPlanType(planType) {
  quoteForm.health.planType = planType;
  applyHealthMemberSelectionRules();
}

function toggleHealthMember(id) {
  const h = quoteForm.health;
  captureHealthFormFromDOM();
  const m = h.members.find((x) => x.id === id);
  if (!m) return;
  if (h.planType === 'individual') {
    h.members.forEach((x) => { x.selected = x.id === id; });
    if (wizardState) wizardState.formError = '';
    renderPreserveScroll();
    return;
  }
  const selCount = h.members.filter((x) => x.selected).length;
  if (m.selected && selCount <= 1) {
    if (wizardState) {
      wizardState.formError = 'Keep at least one member selected while you edit';
    }
    renderPreserveScroll();
    return;
  }
  if (m.selected && id.startsWith('child-')) {
    removeHealthChildMember(id);
    return;
  }
  m.selected = !m.selected;
  if (wizardState) wizardState.formError = '';
  renderPreserveScroll();
}

function captureMotorFormFromDOM() {
  const m = quoteForm.motor;
  m.regNo = document.getElementById('motorRegNo')?.value.trim() ?? m.regNo;
  m.policyType = document.querySelector('[data-motor-policy].chip.selected')?.dataset.motorPolicy || m.policyType;
  const profile = document.querySelector('[data-motor-ncb-profile].chip.selected')?.dataset.motorNcbProfile;
  if (profile !== undefined) m.ncbProfile = profile;
}

function validateHealthStep(step) {
  const h = quoteForm.health;
  if (step === 0) {
    const sel = h.members.filter((m) => m.selected);
    if (!sel.length) {
      wizardState.formError = 'Select at least one member to insure';
      return false;
    }
    if (h.planType === 'floater' && sel.length < minHealthFloaterMembers()) {
      wizardState.formError = 'Family floater needs at least 2 members — add spouse, child, or parents';
      return false;
    }
    for (const m of sel) {
      if (!isHealthMemberAgeValid(m.age)) {
        wizardState.formError = 'Enter valid age for each selected member';
        return false;
      }
    }
    if (!/^\d{6}$/.test(h.pincode)) {
      wizardState.formError = 'Enter a valid 6-digit pincode';
      return false;
    }
  }
  if (step === 1) {
    const active = getActiveMedicalMember();
    const med = active ? ensureMemberMedical(active) : null;
    const name = active ? (active.label) : '';
    if (!med?.ped) {
      wizardState.formError = `For ${name}: answer the PED question`;
      return false;
    }
    if (med.ped === 'yes' && !med.pedList.length) {
      wizardState.formError = `For ${name}: select at least one condition`;
      return false;
    }
    if (med.ped === 'yes' && med.pedList.includes('other') && !med.pedOtherText?.trim()) {
      wizardState.formError = `For ${name}: describe the other condition(s)`;
      return false;
    }
    if (!med.smoking) {
      wizardState.formError = `For ${name}: select smoking status`;
      return false;
    }
    if (!med.alcohol) {
      wizardState.formError = `For ${name}: select alcohol use`;
      return false;
    }
    if (!med.surgery12m) {
      wizardState.formError = `For ${name}: answer the surgery question`;
      return false;
    }
  }
  wizardState.formError = '';
  return true;
}

function validateMotorStep(step) {
  const m = quoteForm.motor;
  if (step === 0 && !m.regNo?.trim()) {
    wizardState.formError = 'Enter vehicle registration number';
    return false;
  }
  if (step === 0 && !m.ncbProfile) {
    wizardState.formError = 'Select your claim / NCB status';
    return false;
  }
  wizardState.formError = '';
  return true;
}

function renderHealthWizard(step) {
  const h = quoteForm.health;
  h.members.forEach((m) => {
    m.age = parseHealthMemberAge(m.age);
  });
  if (step === 0) applyHealthMemberSelectionRules();
  const steps = ['Members', 'Medical', 'Cover', 'Plans', 'Add-ons', 'Pay'];
  const formErr = wizardState?.formError
    ? `<p class="quote-form-error" role="alert">${wizardState.formError}</p>`
    : '';
  const progress = renderWizardProgress(steps, step);
  const individual = h.planType === 'individual';
  const pinOk = isHealthPincodeValid(h.pincode);
  const pinStateClass = pinOk ? 'pincode-footer-row--ok' : 'pincode-footer-row--needs';
  const memberRows = h.members.map((m) => {
    const cta = !m.selected && !individual
      ? '<span class="member-row__cta" aria-hidden="true">Add</span>'
      : '';
    const showFields = m.selected;
    const implicitGender = healthMemberImplicitGender(m.id);
    let genderFields;
    if (implicitGender) {
      const isMale = implicitGender === 'male';
      const genderLabel = isMale ? 'Male' : 'Female';
      genderFields = `<div class="member-input-block member-input-block--gender member-input-block--gender-implicit">
              <span class="member-input-block__label">Gender</span>
              <div class="member-gender-field member-gender-field--locked member-gender-field--implicit" role="group" aria-label="${m.label} gender ${genderLabel}">
                <span class="member-gender-implicit" aria-hidden="true">${genderLabel}</span>
              </div>
            </div>`;
    } else {
      genderFields = `<div class="member-input-block member-input-block--gender">
              <span class="member-input-block__label" id="memberGenderLabel-${m.id}">Gender</span>
              <div class="member-gender-field" role="radiogroup" aria-labelledby="memberGenderLabel-${m.id}">
                <button type="button" class="member-gender-btn ${m.gender === 'male' ? 'selected' : ''}" data-member-gender data-member="${m.id}" data-gender="male" role="radio" aria-checked="${m.gender === 'male'}" aria-label="Male">Male</button>
                <button type="button" class="member-gender-btn ${m.gender === 'female' ? 'selected' : ''}" data-member-gender data-member="${m.id}" data-gender="female" role="radio" aria-checked="${m.gender === 'female'}" aria-label="Female">Female</button>
              </div>
            </div>`;
    }
    const ageExample = healthMemberAgeExample(m.id);
    const ageValue = esc(healthMemberAgeInputValue(m.age));
    const ageOk = isHealthMemberAgeValid(m.age);
    const ageStateClass = ageOk ? 'member-input-block--age--ok' : 'member-input-block--age--needs';
    const detailBlock = showFields
      ? `<div class="member-row__detail">
          <div class="member-row__inputs" role="group" aria-label="${m.label} age and gender">
            <label class="member-input-block member-input-block--age ${ageStateClass}">
              <span class="member-input-block__label" id="memberAgeLabel-${m.id}">Age<span class="member-input-block__required" aria-hidden="true">*</span></span>
              <div class="member-age-field">
                <input
                  type="text"
                  class="member-row__age"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="2"
                  enterkeyhint="done"
                  autocomplete="off"
                  required
                  value="${ageValue}"
                  placeholder="${ageExample}"
                  aria-labelledby="memberAgeLabel-${m.id} memberAgeSuffix-${m.id}"
                  aria-required="true"
                  aria-invalid="${ageOk ? 'false' : 'true'}"
                >
                <span class="member-age-field__suffix" id="memberAgeSuffix-${m.id}" lang="en">Years</span>
              </div>
            </label>
            ${genderFields}
          </div>
        </div>`
      : '';
    return `
    <div class="member-row ${m.selected ? 'member-row--on' : ''}" data-member-row="${m.id}" data-action="pick-member" data-member="${m.id}" role="${individual ? 'radio' : 'checkbox'}" aria-checked="${m.selected}" tabindex="0">
      <div class="member-row__body">
        <div class="member-row__head">
          <button type="button" class="member-row__check" data-action="toggle-member" data-member="${m.id}" tabindex="-1" aria-hidden="true" aria-pressed="${m.selected}" aria-label="${m.selected ? `Remove ${m.label}` : `Add ${m.label}`}">
            <span class="member-row__check-icon" aria-hidden="true"></span>
          </button>
          <span class="member-row__title">${m.label}</span>
          ${cta}
        </div>
        ${detailBlock}
      </div>
    </div>`;
  }).join('');

  if (step === 0) return `
    <div class="page-header"><button class="back-btn" data-action="back">${iconBack()}</button>
      <h1>Health insurance</h1></div>
    <div class="wizard-progress">${progress}</div>
    <div class="wizard-body quote-form quote-form--members-compact">
      ${renderRenewalBanner()}
      <div class="members-step-fit">
        <div class="quote-step-tip quote-step-tip--compact">${icon('family', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} Age & pincode help us show accurate premiums</div>
        ${formErr}
        <div class="members-step-scroll">
          ${renderHealthPlanTypeChooser(h.planType)}
          <h2 class="quote-form__h2 quote-form__h2--members">${individual
    ? ('Who needs the policy?')
    : ('Who do you want to cover?')}</h2>
          <p class="quote-form__hint quote-form__hint--members">${individual
    ? ('One person only — tap a row to switch member')
    : ('Family floater — select 2 or more members')}</p>
          <p class="sr-only">${individual
    ? ('Individual cover is for one person only. Tap another member to switch.')
    : ('Family floater covers 2 or more people on one sum insured. Add spouse, children, or parents.')}</p>
          <div class="member-list-panel member-list-panel--compact">
            <div class="member-list ${individual ? 'member-list--single' : 'member-list--grid'}">${memberRows}</div>
            ${!individual && countHealthChildSlots(h) < MAX_HEALTH_CHILDREN
    ? `<button type="button" class="btn btn--ghost btn--sm btn--block member-add-child" data-action="add-child-member">+ Add another child</button>`
    : ''}
            <div class="members-step-footer-fields">
              <div class="pincode-footer-row ${pinStateClass}" id="healthPincodeGroup">
                <label class="pincode-footer-row__label" id="healthPincodeLabel" for="healthPincode">
                  Pincode<span class="pincode-footer-row__required" aria-hidden="true">*</span>
                </label>
                <div class="pincode-footer-row__field">
                  <input
                    id="healthPincode"
                    class="pincode-footer-row__input"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    maxlength="6"
                    required
                    value="${esc(h.pincode)}"
                    placeholder="6-digit pincode"
                    autocomplete="postal-code"
                    aria-labelledby="healthPincodeLabel"
                    aria-describedby="healthPincodeHint"
                    aria-required="true"
                    aria-invalid="${pinOk ? 'false' : 'true'}"
                  >
                </div>
                <span class="sr-only" id="healthPincodeHint">Enter a 6-digit pincode for city-wise premium</span>
              </div>
              <div class="health-existing-row">
                <span class="health-existing-row__label" id="healthExistingLabel">Existing policy?</span>
                <span class="sr-only">Select porting if you already have a policy you want to move to a new plan.</span>
                <div class="member-gender-field health-existing-row__toggle" role="radiogroup" aria-labelledby="healthExistingLabel">
                  <button type="button" class="member-gender-btn ${h.existingPolicy === 'no' ? 'selected' : ''}" data-health-existing="no" role="radio" aria-checked="${h.existingPolicy === 'no'}" aria-label="No, new cover">No</button>
                  <button type="button" class="member-gender-btn ${h.existingPolicy === 'port' ? 'selected' : ''}" data-health-existing="port" role="radio" aria-checked="${h.existingPolicy === 'port'}" aria-label="Yes, port policy">Yes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wizard-step-footer members-step-footer">
        ${quoteContinueBtn('Continue', 'Medical history')}
      </div>
    </div>`;

  if (step === 1) {
    ensureHealthMedicalMemberId();
    const active = getActiveMedicalMember();
    const med = active ? ensureMemberMedical(active) : defaultMemberMedical();
    const activeId = active?.id || 'self';
    const sel = selectedHealthMembers();
    const selIdx = sel.findIndex((m) => m.id === activeId);
    const hasMoreMembers = selIdx >= 0 && selIdx < sel.length - 1;
    const pedChips = HEALTH_PED_OPTIONS.map((o) => {
      const sub = o.id === 'other' ? 'Not listed above' : '';
      return `<button type="button" class="chip ${med.pedList.includes(o.id) ? 'selected' : ''}" data-ped-opt="${o.id}">${chipBtnContent(o.en, sub)}</button>`;
    }).join('');
    const multiMember = sel.length > 1;
    const pedLabel = multiMember
      ? ('Pre-existing disease (PED)?')
      : (active
        ? (`Does ${active.label} have pre-existing disease (PED)?`)
        : ('Pre-existing disease (PED)?'));
    return `
    <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
      <h1>Medical history</h1></div>
    <div class="wizard-progress">${progress}</div>
    <div class="wizard-body quote-form quote-form--medical-compact${med.ped === 'yes' ? ' quote-form--medical-expanded' : ''}">
      <div class="medical-step-fit">
        ${formErr}
        <div class="medical-step-scroll">
      <p class="quote-form__lead quote-form__lead--medical">${multiMember
    ? ('Answer per member — honest answers help at claim time.')
    : ('A few health questions for your quote. Honest answers help at claim time.')}</p>
      ${renderMedicalMemberSwitcher(activeId)}
      <div class="medical-step-stack" id="medicalMemberPanel" role="tabpanel" aria-labelledby="medicalMemberSwitcherLabel">
        <div class="form-group form-group--medical-q"><label>${pedLabel}</label>
          ${quoteChoiceGroup(`
            <button type="button" class="chip ${med.ped === 'no' ? 'selected' : ''}" data-health-ped="no">${chipBtnContent('No', 'No PED')}</button>
            <button type="button" class="chip ${med.ped === 'yes' ? 'selected' : ''}" data-health-ped="yes">${chipBtnContent('Yes', 'Has PED')}</button>
          `)}
        </div>
        ${med.ped === 'yes' ? `<div class="form-group form-group--medical-q"><label>Which condition(s)?</label>
          ${quoteChoiceGroup(pedChips, 'wrap')}
          ${med.pedList.includes('other') ? `<div class="ped-other-field">
            <label for="healthPedOther">Other condition(s)</label>
            <input id="healthPedOther" type="text" value="${esc(med.pedOtherText || '')}" placeholder="e.g. Arthritis" maxlength="120" autocomplete="off">
          </div>` : ''}</div>` : ''}
        <div class="form-group form-group--medical-q"><label>Smoking</label>
          ${quoteChoiceGroup(`
            <button type="button" class="chip ${med.smoking === 'no' ? 'selected' : ''}" data-health-smoking="no">${chipBtnContent('No', 'Non-smoker')}</button>
            <button type="button" class="chip ${med.smoking === 'yes' ? 'selected' : ''}" data-health-smoking="yes">${chipBtnContent('Yes', 'Smoker')}</button>
          `)}
        </div>
        <div class="form-group form-group--medical-q"><label>Alcohol</label>
          ${quoteChoiceGroup(`
            <button type="button" class="chip ${med.alcohol === 'no' ? 'selected' : ''}" data-health-alcohol="no">${chipBtnContent('No', 'None')}</button>
            <button type="button" class="chip ${med.alcohol === 'occasional' ? 'selected' : ''}" data-health-alcohol="occasional">${chipBtnContent('Sometimes', 'Occasional')}</button>
            <button type="button" class="chip ${med.alcohol === 'yes' ? 'selected' : ''}" data-health-alcohol="yes">${chipBtnContent('Yes', 'Regular')}</button>
          `, 'multi')}
        </div>
        <div class="form-group form-group--medical-q"><label>Hospital / surgery (last 12 months)?</label>
          ${quoteChoiceGroup(`
            <button type="button" class="chip ${med.surgery12m === 'no' ? 'selected' : ''}" data-health-surgery="no">${chipBtnContent('No', 'None')}</button>
            <button type="button" class="chip ${med.surgery12m === 'yes' ? 'selected' : ''}" data-health-surgery="yes">${chipBtnContent('Yes', 'Had surgery')}</button>
          `)}
        </div>
      </div>
        </div>
        <div class="wizard-step-footer medical-step-footer">
          ${hasMoreMembers
    ? quoteContinueBtn('Save & continue', 'Next member')
    : quoteContinueBtn('Continue', 'Choose cover')}
        </div>
      </div>
    </div>`;
  }

  if (step === 2) return `
    <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
      <h1>Coverage</h1></div>
    <div class="wizard-progress">${progress}</div>
    <div class="wizard-body quote-form quote-form--cover-compact">
      <div class="cover-step-fit">
        ${formErr}
        <div class="cover-step-scroll">
          <p class="quote-form__lead quote-form__lead--cover">Choose sum insured and room rules — you can change this before you pay.</p>
          <div class="cover-step-stack">
            <div class="form-group form-group--cover-q"><label>Sum insured</label>
              ${quoteChoiceGroup([5, 10, 15, 25, 50].map((n) => `
                <button type="button" class="chip ${h.sumInsured === n ? 'selected' : ''}" data-health-si="${n}">${chipBtnContent(`₹${n}L`, 'Sum insured')}</button>`).join(''), 'multi')}
            </div>
            <div class="form-group form-group--cover-q"><label>Room rent preference</label>
              ${quoteChoiceGroup(`
                <button type="button" class="chip ${h.roomRent === 'no_cap' ? 'selected' : ''}" data-health-room="no_cap">${chipBtnContent('No cap', 'Any room')}</button>
                <button type="button" class="chip ${h.roomRent === 'single_ac' ? 'selected' : ''}" data-health-room="single_ac">${chipBtnContent('Single AC', 'Capped room')}</button>
              `)}
            </div>
            <div class="form-group form-group--cover-q"><label>Need maternity cover?</label>
              ${quoteChoiceGroup(`
                <button type="button" class="chip ${h.maternity === 'not_needed' ? 'selected' : ''}" data-health-maternity="not_needed">${chipBtnContent('No', 'Not needed')}</button>
                <button type="button" class="chip ${h.maternity === 'needed' ? 'selected' : ''}" data-health-maternity="needed">${chipBtnContent('Yes', 'Include')}</button>
              `)}
            </div>
          </div>
        </div>
        <div class="wizard-step-footer cover-step-footer">
          <p class="cover-step-footer__trust">Indicative quotes from leading insurers</p>
          ${quoteContinueBtn('View plans', 'Compare matching quotes')}
        </div>
      </div>
    </div>`;

  if (step === 3) {
    const plans = getFilteredHealthPlans();
    const planSection = renderResultsPlanSection('health', plans, (p) => renderPlanItem(p));
    const resultsTitle = quoteResultsError === 'health'
      ? 'Plans unavailable'
      : quoteResultsLoading === 'health'
        ? 'Finding plans'
        : `${plans.length} plans found`;
    return `
      <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
        <h1>${resultsTitle}</h1></div>
      <div class="wizard-progress">${progress}</div>
      <div class="filter-bar filter-bar--fit">
        <button class="filter-chip ${healthFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
        <button class="filter-chip ${healthFilter === 'nopay' ? 'active' : ''}" data-filter="nopay">0% co-pay</button>
        <button class="filter-chip ${healthFilter === 'restoration' ? 'active' : ''}" data-filter="restoration">Restore</button>
        <button class="filter-chip ${healthFilter === 'opd' ? 'active' : ''}" data-filter="opd">OPD</button>
        <button class="filter-chip ${healthFilter === 'maternity' ? 'active' : ''}" data-filter="maternity">Maternity</button>
      </div>
      <div class="quote-profile-bar">
        <span class="quote-profile-bar__label">Your details</span>
        <span class="quote-profile-bar__text">${healthMemberSummary()}</span>
        <button type="button" class="quote-profile-bar__edit" data-action="wizard-goto" data-goto-step="0">Edit</button>
      </div>
      ${wizardState?.fromCoverGuide ? `<div class="cover-guide__applied" role="status" style="padding:0.5rem 1rem">From cover guide · <strong>₹${h.sumInsured}L</strong> sum insured</div>` : ''}
      ${renderPlanSortRow('health', `Showing ${plans.length} plans · ₹${h.sumInsured}L · ${h.planType === 'floater' ? 'Floater' : 'Individual'}`)}
      <div style="padding:0 1rem 0.5rem">${renderJTBDSteps('compare')}</div>
      <div class="results-count">Compare · AI explains · Buy</div>
      <div style="padding:0 1rem">${renderConfusionBusters('health')}</div>
      ${planSection}`;
  }

  if (step === 4) {
    const plan = healthPlans.find(p => p.id === selectedPlanId) || healthPlans[0];
    return `
      <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
        <h1>Add-ons · ${plan.insurer}</h1></div>
      <div class="wizard-progress">${progress}</div>
      <div class="wizard-body quote-form">
        <div class="addon-grid">
          <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">Restoration of SI</div><div class="addon-item__desc">Replenish sum insured if exhausted</div></div>
            <div class="addon-item__price">Included</div></div>
          <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">OPD cover</div><div class="addon-item__desc">₹15,000/yr doctor visits</div></div>
            <div class="addon-item__aside"><div class="addon-item__price">+₹2,400</div><button type="button" class="addon-toggle ${healthAddons.opd ? 'on' : ''}" data-addon="opd" role="switch" aria-checked="${healthAddons.opd}" aria-label="OPD cover"></button></div></div>
          <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">Maternity cover</div><div class="addon-item__desc">After 2-year waiting</div></div>
            <div class="addon-item__aside"><div class="addon-item__price">+₹3,800</div><button type="button" class="addon-toggle ${healthAddons.maternity ? 'on' : ''}" data-addon="maternity" role="switch" aria-checked="${healthAddons.maternity}" aria-label="Maternity cover"></button></div></div>
          <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">Critical illness</div><div class="addon-item__desc">Lump sum on 36 illnesses</div></div>
            <div class="addon-item__aside"><div class="addon-item__price">+₹1,200</div><button type="button" class="addon-toggle ${healthAddons.critical ? 'on' : ''}" data-addon="critical" role="switch" aria-checked="${healthAddons.critical}" aria-label="Critical illness"></button></div></div>
        </div>
      </div>
      <div class="sticky-bar"><div><div class="sticky-bar__price">${formatPremium(plan.premium + getHealthAddonsExtraPremium())}/yr</div>
        <div class="sticky-bar__note">GST included</div></div>
        <button type="button" class="btn btn--primary sticky-bar__cta" data-action="wizard-next" aria-label="Continue to review and pay">Review &amp; pay</button></div>`;
  }

  if (step === 5) {
    const plan = healthPlans.find((p) => p.id === selectedPlanId) || healthPlans[0];
    const selMembers = selectedHealthMembers().map((m) => `${m.label} (${m.age})`).join(', ');
    const pedNote = selectedHealthMembers()
      .filter((m) => ensureMemberMedical(m).ped === 'yes')
      .map((m) => m.label)
      .join(', ');
    const metaHtml = `<div class="policy-card__amount">₹${plan.si}L floater</div>
      <div class="policy-card__meta">${selMembers} · Pincode ${h.pincode}${pedNote ? ` · PED: ${pedNote}` : ''}</div>
      <p class="plan-details-card__note">30-day free look · Room: ${plan.roomRent}</p>`;
    return renderCheckoutPage('health', { progressHtml: `<div class="wizard-progress">${progress}</div>`, metaHtml });
  }
  return '';
}

function bindQuoteFormEvents() {
  document.querySelectorAll('[data-health-plan-type].plan-type-seg').forEach((btn) => {
    btn.addEventListener('click', () => {
      captureHealthFormFromDOM();
      setHealthPlanType(btn.dataset.healthPlanType);
      if (wizardState) wizardState.formError = '';
      renderPreserveScroll();
    });
  });

  document.querySelector('[data-action="add-child-member"]')?.addEventListener('click', (e) => {
    e.preventDefault();
    addHealthChildMember();
  });
  document.querySelectorAll('[data-action="pick-member"]').forEach((row) => {
    const head = row.querySelector('.member-row__head');
    if (head) {
      head.addEventListener('click', (e) => {
        toggleHealthMember(row.dataset.member);
      });
    }
    row.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      if (e.target.closest('.member-row__detail')) return;
      e.preventDefault();
      toggleHealthMember(row.dataset.member);
    });
  });
  document.querySelectorAll('.member-row__detail').forEach((detail) => {
    detail.addEventListener('click', (e) => e.stopPropagation());
  });
  document.querySelectorAll('.member-age-field').forEach((field) => {
    const input = field.querySelector('.member-row__age');
    if (!input) return;
    field.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target === input) return;
      input.focus();
    });
    const refreshAgeValidity = () => {
      const cleaned = input.value.replace(/\D/g, '').slice(0, 2);
      if (input.value !== cleaned) input.value = cleaned;
      if (input.value.toLowerCase() === 'nan') input.value = '';
      syncMemberAgeFieldValidity(input);
      syncHealthMemberAgeFromInput(input);
    };
    syncMemberAgeFieldValidity(input);
    input.addEventListener('input', refreshAgeValidity);
    input.addEventListener('blur', refreshAgeValidity);
  });
  const healthPincodeInput = document.getElementById('healthPincode');
  if (healthPincodeInput) {
    const refreshPincode = () => {
      healthPincodeInput.value = healthPincodeInput.value.replace(/\D/g, '').slice(0, 6);
      syncHealthPincodeFieldUi();
    };
    syncHealthPincodeFieldUi();
    healthPincodeInput.addEventListener('input', refreshPincode);
    healthPincodeInput.addEventListener('blur', refreshPincode);
  }
  document.querySelectorAll('[data-action="switch-medical-member"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      captureHealthFormFromDOM();
      if (wizardState) {
        wizardState.medicalMemberId = btn.dataset.member;
        wizardState.formError = '';
      }
      renderPreserveScroll();
    });
  });
  document.querySelectorAll('[data-health-ped]').forEach((btn) => {
    btn.addEventListener('click', () => {
      captureHealthFormFromDOM();
      const active = getActiveMedicalMember();
      if (active) {
        const med = ensureMemberMedical(active);
        med.ped = btn.dataset.healthPed;
        if (med.ped === 'no') {
          med.pedList = [];
          med.pedOtherText = '';
        }
      }
      if (wizardState) wizardState.formError = '';
      renderPreserveScroll();
    });
  });
  document.querySelectorAll('[data-home-property]').forEach((btn) => {
    btn.addEventListener('click', () => {
      captureHomeFormFromDOM();
      quoteForm.home.propertyType = btn.dataset.homeProperty;
      if (wizardState) wizardState.formError = '';
      renderPreserveScroll();
    });
  });
  document.querySelectorAll('[data-home-cover]').forEach((btn) => {
    btn.addEventListener('click', () => {
      captureHomeFormFromDOM();
      quoteForm.home.coverType = btn.dataset.homeCover;
      if (wizardState) wizardState.formError = '';
      renderPreserveScroll();
    });
  });

  document.querySelectorAll('.quote-form .chip, .quote-form .member-gender-btn').forEach((btn) => {
    if (btn.dataset.homeProperty || btn.dataset.homeCover) return;
    if (btn.dataset.healthPed) return;
    btn.addEventListener('click', () => {
      if (btn.dataset.pedOpt) {
        captureHealthFormFromDOM();
        const active = getActiveMedicalMember();
        const list = active ? ensureMemberMedical(active).pedList : [];
        const id = btn.dataset.pedOpt;
        const idx = list.indexOf(id);
        const med = active ? ensureMemberMedical(active) : null;
        if (idx >= 0) {
          list.splice(idx, 1);
          if (id === 'other' && med) med.pedOtherText = '';
        } else {
          list.push(id);
        }
        if (wizardState) wizardState.formError = '';
        renderPreserveScroll();
        return;
      }
      if (btn.hasAttribute('data-member-gender')) {
        captureHealthFormFromDOM();
        const mid = btn.dataset.member;
        const m = quoteForm.health.members.find((x) => x.id === mid);
        if (m) {
          m.gender = btn.dataset.gender;
          if (quoteForm.health.planType === 'individual') m.selected = true;
          applyHealthMemberSelectionRules();
        }
        renderPreserveScroll();
        return;
      }
      if (btn.dataset.healthPlanType) {
        captureHealthFormFromDOM();
        setHealthPlanType(btn.dataset.healthPlanType);
        if (wizardState) wizardState.formError = '';
        renderPreserveScroll();
        return;
      }
      if (btn.dataset.healthExisting) {
        captureHealthFormFromDOM();
        const group = btn.closest('[role="radiogroup"]');
        if (group) {
          group.querySelectorAll('[data-health-existing]').forEach((c) => {
            c.classList.remove('selected');
            c.setAttribute('aria-checked', 'false');
          });
          btn.classList.add('selected');
          btn.setAttribute('aria-checked', 'true');
        }
        quoteForm.health.existingPolicy = btn.dataset.healthExisting;
        if (wizardState) wizardState.formError = '';
        renderPreserveScroll();
        return;
      }
      const group = btn.closest('.chip-group');
      if (group) {
        group.querySelectorAll('.chip').forEach((c) => c.classList.remove('selected'));
        btn.classList.add('selected');
      }
      captureHealthFormFromDOM();
      captureMotorFormFromDOM();
      if (wizardState) wizardState.formError = '';
      renderPreserveScroll();
    });
  });
}

function renderMotorQuoteStep0() {
  const m = quoteForm.motor || defaultMotorQuoteForm();
  const formErr = wizardState?.formError
    ? `<p class="quote-form-error" role="alert">${wizardState.formError}</p>`
    : '';
  return `
    <div class="motor-step-fit">
      ${formErr}
      <div class="motor-step-scroll">
        ${renderRenewalBanner()}
        <p class="quote-form__lead quote-form__lead--motor">Vehicle details to match motor quotes — change anytime before you pay.</p>
        <div class="motor-step-stack">
          <div class="form-group form-group--motor-q">
            <label for="motorRegNo">Vehicle registration number</label>
            <input
              id="motorRegNo"
              class="motor-reg-input"
              type="text"
              value="${esc(m.regNo)}"
              placeholder="DL 01 AB 1234"
              autocomplete="off"
              style="text-transform:uppercase"
            >
          </div>
          <div class="quote-vahan-card quote-vahan-card--compact" role="status">
            <div class="quote-vahan-card__badge">From Vahan</div>
            <strong>Maruti Swift VXI</strong>
            <span class="quote-vahan-card__meta">2021 · Petrol · Private · Delhi</span>
          </div>
          <div class="form-group form-group--motor-q">
            <label>Policy type</label>
            ${quoteChoiceGroup(`
              <button type="button" class="chip ${m.policyType === 'tp' ? 'selected' : ''}" data-motor-policy="tp">${chipBtnContent('Third party', 'Legal minimum')}</button>
              <button type="button" class="chip ${m.policyType === 'comprehensive' ? 'selected' : ''}" data-motor-policy="comprehensive">${chipBtnContent('Comprehensive', 'Own damage + TP')}</button>
            `)}
          </div>
          <div class="form-group form-group--motor-q">
            <label>Claims &amp; NCB last year</label>
            <p class="quote-form__hint quote-form__hint--motor">Pick one — a claim in the last policy year resets NCB to 0%.</p>
            ${quoteChoiceGroup([50, 35, 25, 0].map((n) => `
              <button type="button" class="chip ${m.ncbProfile === String(n) ? 'selected' : ''}" data-motor-ncb-profile="${n}">${chipBtnContent(`${n}% NCB`, 'No claim')}</button>`).join('')
              + `<button type="button" class="chip ${m.ncbProfile === 'claim' ? 'selected' : ''}" data-motor-ncb-profile="claim">${chipBtnContent('0% NCB', 'Had a claim')}</button>`, 'multi')}
          </div>
        </div>
      </div>
      <div class="wizard-step-footer motor-step-footer">
        <p class="motor-step-footer__trust">Indicative quotes from leading motor insurers</p>
        ${quoteContinueBtn('Get quotes', 'Compare motor premiums')}
      </div>
    </div>`;
}

function renderMotorWizard(step) {
  const m = quoteForm.motor;
  const steps = ['Vehicle', 'Quotes', 'Add-ons', 'Pay'];
  const progress = renderWizardProgress(steps, step);
  const formErr = wizardState?.formError ? `<p class="quote-form-error" role="alert">${wizardState.formError}</p>` : '';

  if (step === 0) return `
    <div class="page-header"><button class="back-btn" data-action="back">${iconBack()}</button>
      <h1>Motor insurance</h1></div>
    <div class="wizard-progress">${progress}</div>
    <div class="wizard-body quote-form quote-form--motor-compact">
      ${renderMotorQuoteStep0()}
    </div>`;

  if (step === 2) {
    const plan = getSelectedPlan('motor');
    const extra = getMotorAddonsExtraPremium();
    return `
    <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
      <h1>Add-ons · ${plan?.insurer || 'Motor'}</h1></div>
    <div class="wizard-progress">${progress}</div>
    <div class="wizard-body quote-form">
      <div class="addon-grid">
        <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">Zero depreciation</div><div class="addon-item__desc">Full claim without part depreciation</div></div>
          <div class="addon-item__aside"><div class="addon-item__price">+₹1,800</div><button type="button" class="addon-toggle ${motorAddons.zeroDep ? 'on' : ''}" data-motor-addon="zeroDep" role="switch" aria-checked="${motorAddons.zeroDep}" aria-label="Zero depreciation"></button></div></div>
        <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">Roadside assistance</div><div class="addon-item__desc">Breakdown & towing (included)</div></div>
          <div class="addon-item__aside"><div class="addon-item__price">Included</div><button type="button" class="addon-toggle ${motorAddons.rsa ? 'on' : ''}" data-motor-addon="rsa" role="switch" aria-checked="${motorAddons.rsa}" aria-label="Roadside assistance"></button></div></div>
        <div class="addon-item"><div class="addon-item__info"><div class="addon-item__name">Personal accident</div><div class="addon-item__desc">₹15 lakh PA cover for owner-driver</div></div>
          <div class="addon-item__aside"><div class="addon-item__price">+₹650</div><button type="button" class="addon-toggle ${motorAddons.personalAccident ? 'on' : ''}" data-motor-addon="personalAccident" role="switch" aria-checked="${motorAddons.personalAccident}" aria-label="Personal accident"></button></div></div>
      </div>
    </div>
    <div class="sticky-bar"><div><div class="sticky-bar__price">${formatPremium(motorPremiumForPlan(plan) + extra)}/yr</div>
      <div class="sticky-bar__note">Indicative · GST included</div></div>
      <button type="button" class="btn btn--primary sticky-bar__cta" data-action="wizard-next" aria-label="Continue to review and pay">Review &amp; pay</button></div>`;
  }

  if (step === 3) {
    const metaHtml = `<div class="policy-card__meta">${esc(m.regNo)} · ${m.policyType === 'comprehensive' ? 'Comprehensive' : 'Third party'} · ${motorNcbSummary(m)}</div>`;
    return renderCheckoutPage('motor', { progressHtml: `<div class="wizard-progress">${progress}</div>`, metaHtml });
  }

  if (step !== 1) return '';

  const plans = getFilteredPlans('motor');
  const motorTitle = quoteResultsError === 'motor'
    ? 'Quotes unavailable'
    : quoteResultsLoading === 'motor'
      ? 'Finding quotes'
      : `${plans.length} motor quotes`;
  return `
    <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
      <h1>${motorTitle}</h1></div>
    <div class="wizard-progress">${progress}</div>
    <div class="quote-profile-bar">
      <span class="quote-profile-bar__label">Vehicle</span>
      <span class="quote-profile-bar__text">${esc(m.regNo)} · ${m.policyType === 'comprehensive' ? ('Comprehensive') : 'TP'} · ${motorNcbSummary(m)}</span>
      <button type="button" class="quote-profile-bar__edit" data-action="wizard-goto" data-goto-step="0">Edit</button>
    </div>
    ${renderPlanSortRow('motor', `${esc(m.regNo)} · ${m.policyType === 'comprehensive' ? 'Comprehensive' : 'Third party'} · ${motorNcbSummary(m)}`)}
    <div style="padding:0 1rem 0.5rem">${renderJTBDSteps('compare')}</div>
    <div class="results-count">Compare · AI explains · Buy</div>
    <div style="padding:0 1rem">${renderConfusionBusters('motor')}</div>
    ${renderResultsPlanSection('motor', plans, (p) => renderProductPlanCard(p, 'motor'))}`;
}

function calcDiscount(total) {
  if (!appliedCoupon || !coupons[appliedCoupon]) return 0;
  const c = coupons[appliedCoupon];
  if (c.discount) return c.discount;
  if (c.discountPct) return Math.min(Math.round(total * c.discountPct / 100), c.max || 99999);
  return 0;
}

function getMotorAddonsExtraPremium() {
  return (motorAddons.zeroDep ? 1800 : 0)
    + (motorAddons.personalAccident ? 650 : 0)
    + (!motorAddons.rsa ? 0 : 0);
}

function getMotorAddonsSummary() {
  const parts = [];
  if (motorAddons.zeroDep) parts.push('Zero depreciation');
  if (motorAddons.rsa) parts.push('Roadside assistance');
  if (motorAddons.personalAccident) parts.push('Personal accident');
  return parts.length ? parts.join(' · ') : 'No add-ons selected';
}

function getSelectedPlan(product) {
  const plans = PLAN_DATA[product] || [];
  return plans.find((p) => p.id === selectedPlanId) || plans[0];
}

function getCheckoutTotal(product) {
  const plan = getSelectedPlan(product);
  if (!plan) return 0;
  let total = quotePremiumForPlan(plan, product);
  if (product === 'health') total += getHealthAddonsExtraPremium();
  if (product === 'motor') total += getMotorAddonsExtraPremium();
  return total;
}

function productSupportsAddons(product) {
  return PRODUCT_CONFIG[product]?.hasAddons === true;
}

function getCheckoutAddonsSummary(product) {
  if (!productSupportsAddons(product)) return null;
  if (product === 'health') {
    const parts = [];
    if (healthAddons.opd) parts.push('OPD cover');
    if (healthAddons.maternity) parts.push('Maternity');
    if (healthAddons.critical) parts.push('Critical illness');
    if (healthAddons.restoration) parts.push('SI restoration');
    return parts.length ? parts.join(' · ') : 'Base plan only';
  }
  if (product === 'motor') return getMotorAddonsSummary();
  return null;
}

function resetCheckoutSession(product) {
  checkoutPhase = 'review';
  checkoutForm = { proposerName: '', nominee: '', nomineeDob: '', pan: '', declaration: false };
  paymentForm = { upiId: '', cardNumber: '', cardExpiry: '', cardCvv: '', bank: NET_BANKS[0] };
  selectedPayment = 'upi';
  selectedBankOffer = 'paytm';
}

function generatePolicyNumber(product) {
  const prefix = { health: 'HL', motor: 'MTR', term: 'TRM', home: 'HOM' }[product] || 'POL';
  return `HOLLOW/${prefix}/${new Date().getFullYear()}/${Math.floor(100000 + Math.random() * 900000)}`;
}

function parseCheckoutDate(iso) {
  if (!iso || typeof iso !== 'string') return null;
  const d = new Date(`${iso}T12:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function ageFromCheckoutDob(iso) {
  const d = parseCheckoutDate(iso);
  if (!d) return null;
  const today = new Date();
  let age = today.getFullYear() - d.getFullYear();
  const monthDiff = today.getMonth() - d.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d.getDate())) age -= 1;
  return age;
}

function maxCheckoutDobIso() {
  return new Date().toISOString().slice(0, 10);
}

function minCheckoutDobIso() {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 99);
  return d.toISOString().slice(0, 10);
}

function ensureMemberIdentityFields(member) {
  if (member.fullName == null) member.fullName = '';
  if (member.dob == null) member.dob = '';
}

function ensureCheckoutProposerPrefill() {
  if (!checkoutForm.proposerName?.trim()) {
    checkoutForm.proposerName = authUser?.name || signupDraft?.name || '';
  }
}

function captureHealthInsuredFromDOM() {
  if (wizardState?.type !== 'health') return;
  checkoutForm.proposerName = document.getElementById('checkoutProposerName')?.value.trim() || checkoutForm.proposerName;
  checkoutForm.nominee = document.getElementById('checkoutNominee')?.value.trim() || checkoutForm.nominee;
  checkoutForm.nomineeDob = document.getElementById('checkoutNomineeDob')?.value || checkoutForm.nomineeDob;
  quoteForm.health.members.forEach((m) => {
    ensureMemberIdentityFields(m);
    const nameEl = document.getElementById(`insuredName-${m.id}`);
    const dobEl = document.getElementById(`insuredDob-${m.id}`);
    if (nameEl) m.fullName = nameEl.value.trim();
    if (dobEl) m.dob = dobEl.value;
  });
}

function captureCheckoutFormFromDOM() {
  const propNameEl = document.getElementById('checkoutProposerName');
  if (propNameEl) checkoutForm.proposerName = propNameEl.value.trim();
  if (wizardState?.type === 'health') captureHealthInsuredFromDOM();
  else {
    checkoutForm.nominee = document.getElementById('checkoutNominee')?.value.trim() || checkoutForm.nominee;
  }
  checkoutForm.pan = document.getElementById('checkoutPan')?.value.trim().toUpperCase() || checkoutForm.pan;
  checkoutForm.declaration = !!document.getElementById('checkoutDeclaration')?.checked;
}

function capturePaymentFormFromDOM() {
  paymentForm.upiId = document.getElementById('paymentUpiId')?.value.trim() || paymentForm.upiId;
  paymentForm.cardNumber = (document.getElementById('paymentCardNumber')?.value || '').replace(/\s/g, '');
  paymentForm.cardExpiry = document.getElementById('paymentCardExpiry')?.value.trim() || paymentForm.cardExpiry;
  paymentForm.cardCvv = document.getElementById('paymentCardCvv')?.value.trim() || paymentForm.cardCvv;
  paymentForm.bank = document.getElementById('paymentBank')?.value || paymentForm.bank;
}

function isValidUpiId(id) {
  return /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9._-]{2,}$/.test(id);
}

function isValidPan(pan) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(String(pan || '').trim().toUpperCase());
}

function isValidNomineeName(name) {
  const t = String(name || '').trim();
  if (t.length < 3) return false;
  return /^[a-zA-Z\s.'-]+$/.test(t);
}

function nomineeFieldIssue(name) {
  const t = String(name || '').trim();
  if (!t) return { code: 'empty', message: 'Enter nominee full name' };
  if (!isValidNomineeName(t)) {
    return { code: 'invalid', message: 'Use full legal name — at least 3 letters, no numbers' };
  }
  return null;
}

function panFieldIssue(pan) {
  const t = String(pan || '').trim().toUpperCase();
  if (!t) return { code: 'empty', message: 'PAN is required for term life policies' };
  if (!isValidPan(t)) {
    return { code: 'invalid', message: 'Enter a valid PAN — format ABCDE1234F' };
  }
  return null;
}

function shouldShowCheckoutFieldIssue(issue, rawValue, highlightEmpty) {
  if (!issue) return false;
  const hasValue = String(rawValue || '').trim().length > 0;
  if (issue.code === 'invalid') return hasValue;
  return highlightEmpty;
}

function checkoutFieldGroupClass(issue, rawValue, highlightEmpty) {
  if (!shouldShowCheckoutFieldIssue(issue, rawValue, highlightEmpty)) return 'form-group form-group--checkout-field';
  const hasValue = String(rawValue || '').trim().length > 0;
  const mod = hasValue || issue.code === 'invalid' ? 'form-group--invalid' : 'form-group--needs';
  return `form-group form-group--checkout-field ${mod}`;
}

function renderCheckoutValidatedInput({
  inputId,
  labelHtml,
  value,
  inputAttrs = '',
  issue,
  highlightEmpty,
}) {
  const show = shouldShowCheckoutFieldIssue(issue, value, highlightEmpty);
  const groupClass = checkoutFieldGroupClass(issue, value, highlightEmpty);
  const errHtml = show
    ? `<p class="form-group__field-error" id="${inputId}Error" role="alert">${issue.message}</p>`
    : '';
  const ariaInvalid = show ? 'true' : 'false';
  const ariaDesc = show ? ` aria-describedby="${inputId}Error"` : '';
  return `<div class="${groupClass}" data-checkout-field="${inputId}">
    ${labelHtml}
    <input id="${inputId}" value="${esc(value)}" aria-invalid="${ariaInvalid}"${ariaDesc} ${inputAttrs}>
    ${errHtml}
  </div>`;
}

function syncCheckoutFieldUi() {
  const highlight = !!wizardState?.checkoutHighlightErrors;
  const product = wizardState?.type || activeProduct || 'health';
  captureCheckoutFormFromDOM();
  if (product === 'term') {
    syncCheckoutOneField('checkoutNominee', nomineeFieldIssue(checkoutForm.nominee), checkoutForm.nominee, highlight);
    syncCheckoutOneField('checkoutPan', panFieldIssue(checkoutForm.pan), checkoutForm.pan, highlight);
  } else if (product === 'health') {
    syncCheckoutOneField('checkoutProposerName', checkoutProposerIssue(checkoutForm.proposerName), checkoutForm.proposerName, highlight);
    syncCheckoutOneField('checkoutNominee', nomineeFieldIssue(checkoutForm.nominee), checkoutForm.nominee, highlight);
    quoteForm.health?.members.filter((m) => m.selected).forEach((m) => {
      ensureMemberIdentityFields(m);
      const nameId = `insuredName-${m.id}`;
      const dobId = `insuredDob-${m.id}`;
      syncCheckoutOneField(nameId, insuredNameIssue(m.fullName, m.label), m.fullName, highlight);
      syncCheckoutOneField(dobId, insuredDobIssue(m.dob, m.label, m.age), m.dob, highlight);
    });
  }
  syncCheckoutReviewCta();
}

function syncCheckoutOneField(inputId, issue, rawValue, highlightEmpty) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const group = input.closest('[data-checkout-field]') || input.closest('.form-group');
  if (!group) return;
  const show = issue && shouldShowCheckoutFieldIssue(issue, rawValue, highlightEmpty);
  const hasValue = String(rawValue ?? input.value ?? '').trim().length > 0;
  group.classList.remove('form-group--invalid', 'form-group--needs');
  if (show) group.classList.add(hasValue || issue.code === 'invalid' ? 'form-group--invalid' : 'form-group--needs');
  input.setAttribute('aria-invalid', show ? 'true' : 'false');
  let errEl = document.getElementById(`${inputId}Error`);
  if (show) {
    if (!errEl) {
      errEl = document.createElement('p');
      errEl.id = `${inputId}Error`;
      errEl.className = 'form-group__field-error';
      errEl.setAttribute('role', 'alert');
      input.insertAdjacentElement('afterend', errEl);
    }
    errEl.textContent = issue.message;
    input.setAttribute('aria-describedby', `${inputId}Error`);
  } else {
    errEl?.remove();
    input.removeAttribute('aria-describedby');
  }
}

function checkoutProposerIssue(name) {
  const t = String(name || '').trim();
  if (t.length < 2) return { code: 'empty', message: 'Enter proposer full name' };
  return null;
}

function insuredNameIssue(name, label) {
  const t = String(name || '').trim();
  if (t.length < 2) return { code: 'empty', message: `Enter full legal name for ${label}` };
  if (!isValidNomineeName(t)) return { code: 'invalid', message: `Check spelling for ${label} — use full legal name` };
  return null;
}

function insuredDobIssue(dob, label, quotedAge) {
  if (!dob) return { code: 'empty', message: `Enter date of birth for ${label}` };
  if (parseCheckoutDate(dob) == null) return { code: 'invalid', message: `Enter a valid date of birth for ${label}` };
  const fromDob = ageFromCheckoutDob(dob);
  const qa = Number(quotedAge);
  if (Number.isFinite(qa) && fromDob != null && Math.abs(fromDob - qa) > 1) {
    return { code: 'invalid', message: `DOB doesn’t match age ${qa} from your quote for ${label}` };
  }
  return null;
}

function validatePaymentDetails() {
  capturePaymentFormFromDOM();
  return '';
}

function validateCheckoutReview(product) {
  captureCheckoutFormFromDOM();
  return validateCheckoutReviewState(product);
}

function validateCheckoutReviewState(product) {
  if (!checkoutForm.declaration) return 'Please confirm the declaration to continue';
  if (product === 'health') {
    if (!checkoutForm.proposerName.trim()) return 'Enter proposer full name (person buying the policy)';
    const insured = selectedHealthMembers();
    for (const m of insured) {
      ensureMemberIdentityFields(m);
      if (m.fullName.trim().length < 2) return `Enter full legal name for ${m.label}`;
      if (!m.dob) return `Enter date of birth for ${m.label}`;
      if (parseCheckoutDate(m.dob) == null) return `Enter a valid date of birth for ${m.label}`;
      const quotedAge = Number(m.age);
      const fromDob = ageFromCheckoutDob(m.dob);
      if (!Number.isNaN(quotedAge) && fromDob != null && Math.abs(fromDob - quotedAge) > 1) {
        return `Date of birth for ${m.label} doesn't match age ${quotedAge} from your quote`;
      }
    }
    const nom = nomineeFieldIssue(checkoutForm.nominee);
    if (nom) return nom.message;
    if (checkoutForm.nomineeDob && parseCheckoutDate(checkoutForm.nomineeDob) == null) {
      return 'Enter a valid nominee date of birth';
    }
    return '';
  }
  if (product === 'term') {
    const nom = nomineeFieldIssue(checkoutForm.nominee);
    if (nom) return nom.message;
    const panI = panFieldIssue(checkoutForm.pan);
    if (panI) return panI.message;
  }
  if (product === 'motor' || product === 'home') {
    if (!checkoutForm.proposerName.trim()) {
      return product === 'motor' ? 'Enter vehicle owner full name' : 'Enter property owner full name';
    }
  }
  return '';
}

function renderCheckoutDemoBanner() {
  return '';
}

function renderCheckoutDeclarationError() {
  return wizardState?.declarationError
    ? `<p class="quote-form-error" role="alert">${wizardState.declarationError}</p>`
    : '';
}

function renderCheckoutDeclaration() {
  const checked = checkoutForm.declaration ? 'checked' : '';
  return `<div class="checkout-declaration">
    ${renderCheckoutDeclarationError()}
    <label class="checkout-declaration__label">
      <input type="checkbox" id="checkoutDeclaration" ${checked} aria-describedby="checkoutDeclarationText">
      <span class="checkout-declaration__text" id="checkoutDeclarationText">I confirm the details are correct and agree to the insurer terms and Hollow privacy policy.</span>
    </label>
  </div>`;
}

function renderHealthCheckoutProposal() {
  ensureCheckoutProposerPrefill();
  const insured = selectedHealthMembers();
  const minDob = minCheckoutDobIso();
  const maxDob = maxCheckoutDobIso();
  const insuredRows = insured.map((m) => {
    ensureMemberIdentityFields(m);
    const ageHint = m.age !== '' && m.age != null ? `Quoted age: ${m.age}` : '';
    return `<div class="checkout-insured" data-insured-row="${m.id}">
      <div class="checkout-insured__head">
        <span class="checkout-insured__relation">${m.label}</span>
        ${ageHint ? `<span class="checkout-insured__meta">${ageHint}</span>` : ''}
      </div>
      <div class="form-row form-row--2 checkout-insured__fields">
        <div class="form-group">
          <label for="insuredName-${m.id}">Full name</label>
          <input id="insuredName-${m.id}" type="text" value="${esc(m.fullName)}" placeholder="As on ID proof" autocomplete="name">
        </div>
        <div class="form-group">
          <label for="insuredDob-${m.id}">Date of birth</label>
          <input id="insuredDob-${m.id}" type="date" class="checkout-date" value="${esc(m.dob)}" min="${minDob}" max="${maxDob}" aria-label="${m.label} date of birth">
        </div>
      </div>
    </div>`;
  }).join('');

  return `<section class="checkout-proposal" aria-labelledby="checkoutProposalTitle">
    <h2 class="quote-form__h2" id="checkoutProposalTitle">Proposal details</h2>
    <p class="quote-form__hint">Legal names and DOB are required to issue the policy (same as insurer proposal form).</p>
    <div class="form-group">
      <label for="checkoutProposerName">Proposer full name</label>
      <input id="checkoutProposerName" type="text" value="${esc(checkoutForm.proposerName)}" placeholder="Person buying this policy" autocomplete="name">
      <p class="quote-form__hint checkout-proposal__hint">Usually the same as Self if you are the primary earner.</p>
    </div>
    <h3 class="checkout-proposal__sub">Insured members</h3>
    ${insuredRows}
    <h3 class="checkout-proposal__sub">Nominee</h3>
    <div class="form-row form-row--2">
      <div class="form-group">
        <label for="checkoutNominee">Nominee full name</label>
        <input id="checkoutNominee" type="text" value="${esc(checkoutForm.nominee)}" placeholder="Full name" autocomplete="name">
      </div>
      <div class="form-group">
        <label for="checkoutNomineeDob">Nominee date of birth <span class="checkout-optional">(optional)</span></label>
        <input id="checkoutNomineeDob" type="date" class="checkout-date" value="${esc(checkoutForm.nomineeDob)}" min="${minDob}" max="${maxDob}">
      </div>
    </div>
  </section>`;
}

function renderCheckoutFields(product) {
  if (product === 'health') return renderHealthCheckoutProposal();
  const fields = [];
  if (product === 'motor') {
    ensureCheckoutProposerPrefill();
    fields.push(`<div class="form-group"><label for="checkoutProposerName">Vehicle owner full name</label>
      <input id="checkoutProposerName" type="text" value="${esc(checkoutForm.proposerName)}" placeholder="As on RC book" autocomplete="name"></div>`);
    fields.push(`<div class="form-group"><label for="checkoutVehicleChassis">Chassis / engine last 5 digits <span class="checkout-optional">(optional)</span></label>
      <input id="checkoutVehicleChassis" type="text" value="" placeholder="e.g. 12345" maxlength="5" inputmode="numeric" autocomplete="off"></div>`);
  }
  if (product === 'home') {
    ensureCheckoutProposerPrefill();
    fields.push(`<div class="form-group"><label for="checkoutProposerName">Property owner name</label>
      <input id="checkoutProposerName" type="text" value="${esc(checkoutForm.proposerName)}" placeholder="Full name" autocomplete="name"></div>`);
    fields.push(`<div class="form-group"><label for="checkoutPropertyAddress">Flat / house address</label>
      <input id="checkoutPropertyAddress" type="text" value="" placeholder="Building, street, city" autocomplete="street-address"></div>`);
  }
  if (product === 'term') {
    const highlight = !!wizardState?.checkoutHighlightErrors;
    const nomIssue = nomineeFieldIssue(checkoutForm.nominee);
    const panIssue = panFieldIssue(checkoutForm.pan);
    fields.push(renderCheckoutValidatedInput({
      inputId: 'checkoutNominee',
      labelHtml: '<label for="checkoutNominee">Nominee</label>',
      value: checkoutForm.nominee,
      inputAttrs: 'type="text" placeholder="Full name" autocomplete="name"',
      issue: nomIssue,
      highlightEmpty: highlight,
    }));
    fields.push(renderCheckoutValidatedInput({
      inputId: 'checkoutPan',
      labelHtml: '<label for="checkoutPan">Proposer PAN</label>',
      value: checkoutForm.pan,
      inputAttrs: 'type="text" placeholder="ABCDE1234F" maxlength="10" style="text-transform:uppercase" autocomplete="off"',
      issue: panIssue,
      highlightEmpty: highlight,
    }));
  }
  return fields.join('');
}

function renderPaymentDetailFields() {
  if (selectedPayment === 'upi') {
    return `<p class="payment-method-hint">Approve the payment in your UPI app (GPay, PhonePe, Paytm, etc.). No UPI ID needed on this screen.</p>`;
  }
  if (selectedPayment === 'card') {
    return `<p class="payment-method-hint">You will complete card entry on the secure payment page after you tap Pay. Card details are not collected here.</p>`;
  }
  if (selectedPayment === 'netbank') {
    return `<p class="payment-method-hint">You will choose your bank and sign in on the secure net banking page after you tap Pay.</p>`;
  }
  return '';
}

function renderPaymentMethods() {
  const grid = paymentMethods
    .filter((m) => CHECKOUT_PAYMENT_IDS.includes(m.id))
    .map((m) => `
    <button type="button" class="payment-option ${selectedPayment === m.id ? 'selected' : ''}" data-payment="${m.id}">
      <span class="payment-option__icon">${icon(m.icon, ICON_SIZE.lg)}</span>
      <span class="payment-option__label">${t(m.labelKey)}</span>
      <span class="payment-option__desc">${m.desc}</span>
    </button>`).join('');
  const showPayment = checkoutPhase === 'payment' || checkoutPhase === 'failed';
  return `<div class="payment-section">
    ${showPayment ? renderCheckoutMobileField() : ''}
    ${showPayment ? `<div class="payment-section__title">${t('pay.title')}</div><div class="payment-grid">${grid}</div>${renderPaymentDetailFields()}` : ''}
    <p class="payment-note">Payments are secured with 256-bit encryption.</p>
  </div>`;
}

function renderCheckoutProcessing() {
  return `<div class="checkout-state checkout-state--processing" role="status" aria-live="polite">
    <div class="checkout-state__spinner" aria-hidden="true"></div>
    <p class="checkout-state__title">Processing…</p>
    <p class="checkout-state__sub">Please wait while we confirm your payment</p>
  </div>`;
}

function renderCheckoutFailed(product, total) {
  const due = total - calcDiscount(total);
  return `<div class="checkout-state checkout-state--failed">
    <p class="checkout-state__title">Payment failed</p>
    <p class="checkout-state__sub">Please try again or choose another payment method.</p>
    <div class="checkout-state__actions">
      ${quoteContinueBtn(`Retry payment ${formatPremium(due)}`, 'Try again securely', 'payment-retry', `data-product="${product}"`)}
      <button type="button" class="btn btn--secondary btn--block" data-action="payment-change-method">Change method</button>
    </div>
  </div>`;
}

function renderCheckoutPage(product, { progressHtml = '', headerTitle = 'Review & pay', metaHtml = '', planExtra = null } = {}) {
  const plan = planExtra || getSelectedPlan(product);
  const total = getCheckoutTotal(product);
  const due = total - calcDiscount(total);
  const cfg = PRODUCT_CONFIG[product] || PRODUCT_CONFIG.health;
  const addonsLine = getCheckoutAddonsSummary(product);
  const addonsMeta = addonsLine
    ? `<div class="policy-card__meta">Add-ons: ${addonsLine}</div>`
    : '';

  if (checkoutPhase === 'processing') {
    return `
      <div class="page-header"><button class="back-btn" data-action="wizard-back" disabled aria-disabled="true">${iconBack()}</button>
        <h1>Processing</h1></div>
      ${progressHtml}
      <div class="wizard-body">${renderCheckoutDemoBanner()}${renderCheckoutProcessing()}</div>`;
  }

  const paymentBlock = checkoutPhase === 'payment' || checkoutPhase === 'failed'
    ? `${renderPaymentMethods()}${checkoutPhase === 'failed' ? renderCheckoutFailed(product, total) : ''}`
    : '';

  const reviewReady = checkoutPhase === 'review' && !validateCheckoutReviewState(product);
  const reviewDisabledAttr = reviewReady ? '' : ' disabled aria-disabled="true"';
  const primaryBtn = checkoutPhase === 'review'
    ? quoteContinueBtn('Continue to payment', 'Review details first', 'checkout-to-payment', `data-product="${product}"${reviewDisabledAttr}`)
    : checkoutPhase === 'payment'
      ? quoteContinueBtn(`${t('btn.pay')} ${formatPremium(due)}`, 'Secure checkout', 'pay-success', `data-product="${product}"`)
      : '';

  const scrollBody = `
      ${renderCheckoutDemoBanner()}
      ${renderJTBDSteps('buy')}
      ${wizardState?.formError ? `<p class="quote-form-error" role="alert">${wizardState.formError}</p>` : ''}
      ${renderPlanDetailsHeader(plan, product, {
        totalPremium: total,
        metaHtml: metaHtml || `<div class="policy-card__meta">${cfg.label}</div>
          ${addonsMeta}
          <div class="policy-card__meta">Premium: ${formatPremium(due)}</div>`,
      })}
      ${renderCoverageClarity(plan, product)}
      ${checkoutPhase === 'review' ? renderCheckoutFields(product) : ''}
      ${checkoutPhase === 'review' ? renderOffersSection(total) : ''}
      ${paymentBlock}`;

  const dockedFooter = checkoutPhase === 'review'
    ? `<div class="wizard-step-footer checkout-step-footer">
      ${renderCheckoutDeclaration()}
      ${primaryBtn}
      <p class="checkout-step-footer__trust">Free-look and refund rules depend on the insurer and product you choose.</p>
    </div>`
    : checkoutPhase === 'payment'
      ? `<div class="wizard-step-footer checkout-step-footer">
        ${primaryBtn}
        <p class="checkout-step-footer__trust">Free-look and refund rules depend on the insurer and product you choose.</p>
      </div>`
      : '';

  const useCheckoutDock = checkoutPhase !== 'processing';

  return `
    <div class="page-header"><button class="back-btn" data-action="wizard-back">${iconBack()}</button>
      <h1>${headerTitle}</h1></div>
    ${progressHtml}
    <div class="wizard-body checkout-body${useCheckoutDock ? ' checkout-body--dock' : ''}">
      ${useCheckoutDock ? `<div class="checkout-step-fit">
        <div class="checkout-step-scroll">${scrollBody}</div>
        ${dockedFooter || ''}
      </div>` : `<div class="checkout-step-scroll">${scrollBody}</div>`}
    </div>`;
}

function renderOffersSection(total) {
  const discount = calcDiscount(total);
  const finalTotal = total - discount;
  const applied = appliedCoupon ? coupons[appliedCoupon] : null;

  const bankList = bankOffers.map((b) => {
    const on = selectedBankOffer === b.id;
    return `
    <button type="button" class="bank-offer ${on ? 'bank-offer--highlight' : ''}" data-bank-offer="${b.id}" aria-pressed="${on}">
      ${renderBankOfferIcon(b)}
      <div class="bank-offer__body">
        <div class="bank-offer__bank">${b.bank}</div>
        <div class="bank-offer__offer">${b.offer} · <strong>${b.save}</strong></div>
        <div class="bank-offer__cards">${b.cards}</div>
      </div>
      <span class="bank-offer__tag">T&C</span>
    </button>`;
  }).join('');

  return `
    <div class="offers-section">
      <div class="offers-section__title">${icon('award', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} Coupons & offers</div>

      <div class="coupon-box">
        <div class="coupon-input-row">
          <input type="text" id="couponInput" class="coupon-input" placeholder="Enter coupon code" value="${esc(couponInput)}" ${appliedCoupon ? 'disabled' : ''}>
          ${appliedCoupon
            ? `<button type="button" class="btn btn--ghost btn--sm" data-action="remove-coupon">Remove</button>`
            : `<button type="button" class="btn btn--secondary btn--sm" data-action="apply-coupon">Apply</button>`}
        </div>
        ${couponFieldError ? `<p class="field-error" role="alert">${esc(couponFieldError)}</p>` : ''}
        ${applied
          ? `<div class="coupon-applied">✓ <strong>${appliedCoupon}</strong> applied — you save ${formatPremium(discount)}</div>`
          : `<div class="coupon-suggestions">
              ${Object.keys(coupons).map(code => `
                <button type="button" class="coupon-chip" data-action="apply-coupon-code" data-code="${code}">
                  <span class="coupon-chip__code">${code}</span>
                  <span class="coupon-chip__save">${coupons[code].label}</span>
                </button>`).join('')}
            </div>`}
      </div>

      <div class="offers-section__subtitle">Bank & wallet offers</div>
      <div class="bank-offers-list">${bankList}</div>

      ${discount > 0 ? `
        <div class="price-breakdown">
          <div class="price-breakdown__row"><span>Premium</span><span>${formatPremium(total)}</span></div>
          <div class="price-breakdown__row price-breakdown__row--discount"><span>Coupon discount</span><span>−${formatPremium(discount)}</span></div>
          <div class="price-breakdown__row price-breakdown__row--total"><span>You pay</span><span>${formatPremium(finalTotal)}</span></div>
        </div>` : ''}
    </div>`;
}

function renderCheckoutMobileField() {
  const phone = authUser?.phone || signupDraft.phone || '';
  return `<div class="checkout-mobile form-group form-group--checkout-field" data-checkout-field="checkoutPhone">
    <label id="checkoutPhoneLabel" for="checkoutPhone">${t('checkout.mobileLabel')}</label>
    <div class="checkout-phone-field__control">
      <span class="checkout-phone-field__prefix" id="checkoutPhonePrefix" aria-hidden="true">+91</span>
      <input
        id="checkoutPhone"
        class="checkout-phone-field__input"
        type="tel"
        inputmode="numeric"
        autocomplete="tel-national"
        value="${esc(phone)}"
        placeholder="10-digit mobile"
        maxlength="10"
        aria-labelledby="checkoutPhonePrefix checkoutPhoneLabel"
        aria-describedby="checkoutPhoneHint"
      >
    </div>
    <p class="checkout-mobile__hint" id="checkoutPhoneHint">${t('checkout.mobileHint')}</p>
  </div>`;
}

function beginCheckoutAuth() {
  const phoneInput = document.getElementById('checkoutPhone');
  const phone = normalizeIndianMobile(phoneInput?.value);
  if (phoneInput) phoneInput.value = phone;
  if (!isValidIndianMobile(phone)) {
    if (wizardState) wizardState.formError = 'Enter a valid mobile number to pay';
    render();
    return false;
  }
  checkoutResumeWizard = wizardState ? JSON.parse(JSON.stringify(wizardState)) : null;
  if (checkoutResumeWizard) checkoutResumeWizard.checkoutPhase = checkoutPhase;
  signupDraft = {
    ...signupDraft,
    phone,
    pendingOtp: SIGNUP_DEMO_OTP,
    sentAt: Date.now(),
    error: '',
    tab: 'login',
    channel: 'sms',
  };
  wizardState = { type: 'signup', step: 1, checkoutAuth: true };
  document.body.classList.add('wizard-mode', 'signup-mode');
  pushAppState();
  render();
  announcePage(captureAppState());
  return true;
}

function proceedToCheckoutPayment(product) {
  const err = validateCheckoutReview(product);
  if (err) {
    wizardState.declarationError = '';
    wizardState.formError = '';
    if (err === 'Please confirm the declaration to continue') {
      wizardState.declarationError = err;
    } else {
      wizardState.formError = err;
      if (wizardState) wizardState.checkoutHighlightErrors = true;
    }
    render();
    return;
  }
  wizardState.declarationError = '';
  wizardState.formError = '';
  if (wizardState) wizardState.checkoutHighlightErrors = false;
  checkoutPhase = 'payment';
  checkoutShouldFocusPayment = true;
  if (!paymentForm.bank) paymentForm.bank = NET_BANKS[0];
  pushAppState();
  render();
  announcePage(captureAppState());
}

function submitPayment(product) {
  activeProduct = product || wizardState?.type || activeProduct || 'health';
  if (checkoutPhase !== 'payment' && checkoutPhase !== 'failed') {
    proceedToCheckoutPayment(activeProduct);
    return;
  }
  const payErr = validatePaymentDetails();
  if (payErr) {
    wizardState.formError = payErr;
    render();
    return;
  }
  wizardState.formError = '';
  if (!authUser?.verified) {
    beginCheckoutAuth();
    return;
  }
  capturePaymentFormFromDOM();
  checkoutPhase = 'processing';
  render();
  setTimeout(() => {
    const total = getCheckoutTotal(activeProduct);
    lastCheckout = {
      product: activeProduct,
      planId: selectedPlanId,
      premium: total - calcDiscount(total),
      addonsSummary: getCheckoutAddonsSummary(activeProduct),
      policyNo: generatePolicyNumber(activeProduct),
    };
    checkoutPhase = 'review';
    wizardState = { type: 'success', product: activeProduct };
    document.body.classList.add('wizard-mode');
    document.body.classList.remove('signup-mode');
    pushAppState();
    render();
    announcePage(captureAppState());
  }, 2000);
}

function retryPayment(product) {
  const payErr = validatePaymentDetails();
  if (payErr) {
    wizardState.formError = payErr;
    render();
    return;
  }
  checkoutPhase = 'processing';
  wizardState.formError = '';
  render();
  setTimeout(() => {
    const total = getCheckoutTotal(product || activeProduct);
    lastCheckout = {
      product: product || activeProduct,
      planId: selectedPlanId,
      premium: total - calcDiscount(total),
      addonsSummary: getCheckoutAddonsSummary(product || activeProduct),
      policyNo: generatePolicyNumber(product || activeProduct),
    };
    checkoutPhase = 'review';
    wizardState = { type: 'success', product: product || activeProduct };
    pushAppState();
    render();
    announcePage(captureAppState());
  }, 2000);
}

function renderBackBtn(action = 'go-back', ariaLabel = 'Go back') {
  return `<button type="button" class="back-btn" data-action="${action}" aria-label="${ariaLabel}">${iconBack()}</button>`;
}

/** Standard screen shell: static sub-header (no overlap with content). */
function renderPageShell(title, bodyHtml, { backAction = 'go-back', bodyClass = '' } = {}) {
  const extra = bodyClass ? ` ${bodyClass}` : '';
  return `<div class="app-view">
    <div class="page-header page-header--static">
      <button type="button" class="back-btn" data-action="${backAction}" aria-label="Go back">${iconBack()}</button>
      <h1>${title}</h1>
    </div>
    <div class="app-view__body section main--padded${extra}">${bodyHtml}</div>
  </div>`;
}

function normalizePageLayout(html) {
  const trimmed = (html || '').trim();
  if (!trimmed || trimmed.startsWith('<div class="app-view"') || trimmed.startsWith('<div class="policy-success"')) return html;
  if (trimmed.startsWith('<div class="page-header"') || trimmed.startsWith('<div class="page-header ')) {
    return `<div class="app-view">${html}</div>`;
  }
  return html;
}

function resetMainScroll() {
  const main = document.getElementById('mainContent');
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
}

function captureMainScroll() {
  const main = document.getElementById('mainContent');
  const appView = document.querySelector('#mainContent > .app-view');
  const innerScroll = document.querySelector(
    '.checkout-step-scroll, .term-step-scroll, .members-step-scroll, .medical-step-scroll, .cover-step-scroll, .home-step-scroll',
  );
  return {
    main: main?.scrollTop || 0,
    appView: appView?.scrollTop || 0,
    inner: innerScroll?.scrollTop || 0,
    windowY: window.scrollY || 0,
  };
}

function restoreMainScroll(snapshot) {
  if (!snapshot) return;
  const apply = () => {
    const main = document.getElementById('mainContent');
    const appView = document.querySelector('#mainContent > .app-view');
    const innerScroll = document.querySelector(
      '.checkout-step-scroll, .term-step-scroll, .members-step-scroll, .medical-step-scroll, .cover-step-scroll, .home-step-scroll',
    );
    if (main) main.scrollTop = snapshot.main;
    if (appView) appView.scrollTop = snapshot.appView;
    if (innerScroll) innerScroll.scrollTop = snapshot.inner;
    window.scrollTo(0, snapshot.windowY);
  };
  requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(apply)));
}

/** Re-render checkout UI without jumping scroll (coupons, bank offers, payment method). */
function renderPreserveScroll() {
  render({ preserveScroll: true });
}

function renderSignup(step) {
  const err = signupDraft.error
    ? `<p class="signup-error" role="alert">${signupDraft.error}</p>`
    : '';
  const tab = signupDraft.tab || 'login';

  if (step === 0) {
    const body = `
      <div class="signup-tabs" role="tablist">
        <button type="button" class="signup-tabs__btn ${tab === 'login' ? 'active' : ''}" data-signup-tab="login" role="tab" aria-selected="${tab === 'login'}">${t('signup.loginTab')}</button>
        <button type="button" class="signup-tabs__btn ${tab === 'signup' ? 'active' : ''}" data-signup-tab="signup" role="tab" aria-selected="${tab === 'signup'}">${t('signup.signupTab')}</button>
      </div>
      <p class="signup-card__sub">${t('signup.heroSub')}</p>
      ${err}
      <label class="signup-field-label" for="signupPhone">${t('signup.phoneLabel')}</label>
      <div class="signup-phone signup-phone--lg">
        <span class="signup-phone__flag" aria-hidden="true">🇮🇳</span>
        <span class="signup-phone__code">+91</span>
        <input id="signupPhone" type="tel" inputmode="numeric" autocomplete="tel-national" value="${esc(signupDraft.phone || '')}" placeholder="10-digit mobile number" aria-label="${t('signup.phoneLabel')}">
      </div>
      <button type="button" class="signup-wa" data-action="signup-send-otp-wa">
        ${icon('chat', ICON_SIZE.md, 'hollow-icon hollow-icon--inline')} ${t('signup.continueWhatsapp')}
      </button>
      <p class="signup-legal">${t('signup.termsLine')}</p>
      ${signupTrustStrip()}`;
    const footer = `<button type="button" class="btn btn--primary btn--block btn--lg" data-action="signup-send-otp">${t('signup.getOtp')}</button>`;
    return signupShell('back', t('signup.heroTitle'), body, footer);
  }

  if (step === 1) {
    const phone = signupDraft.phone || '';
    const display = phone.length === 10 ? `+91 ${phone}` : '+91';
    const otpBoxes = [0, 1, 2, 3, 4, 5].map((n) => `<input class="otp-digit" id="otp-${n}" type="text" inputmode="numeric" maxlength="1" pattern="[0-9]" autocomplete="one-time-code" aria-label="${`OTP ${n + 1}`}">`).join('');
    const resendSecs = signupDraft.sentAt
      ? Math.max(0, 30 - Math.floor((Date.now() - signupDraft.sentAt) / 1000))
      : 0;
    const otpExpire = signupDraft.sentAt
      ? Math.max(0, 120 - Math.floor((Date.now() - signupDraft.sentAt) / 1000))
      : 120;
    const mm = String(Math.floor(otpExpire / 60)).padStart(2, '0');
    const ss = String(otpExpire % 60).padStart(2, '0');
    const channelNote = signupDraft.channel === 'wa'
      ? ('Sent on WhatsApp')
      : ('Sent via SMS');
    const body = `
      <p class="signup-otp-channel">${channelNote}</p>
      <h2 class="signup-card__title">${t('signup.verifyTitle')}</h2>
      <p class="signup-otp-intro">${t('signup.verifySub')}<br><strong>${esc(display)}</strong>
        <button type="button" class="signup-edit-phone" data-action="signup-change-phone">${t('signup.changePhone')}</button>
      </p>
      ${err}
      <div class="otp-grid otp-grid--lg" role="group" aria-label="OTP">${otpBoxes}</div>
      <p class="signup-otp-timer">OTP expires in <strong>${mm}:${ss}</strong></p>
      <p class="signup-resend-row">
        ${resendSecs > 0
    ? `<span class="signup-resend-wait">${t('signup.resendIn')} <strong>${resendSecs}s</strong></span>`
    : `<button type="button" class="signup-resend-link" data-action="signup-resend-otp">${t('signup.resend')}</button>`}
      </p>`;
    const footer = `<button type="button" class="btn btn--primary btn--block btn--lg" data-action="signup-verify-otp">${t('signup.verify')}</button>`;
    return signupShell('wizard-back', t('signup.verifyTitle'), body, footer);
  }

  if (step === 2) {
    const body = `
      <h2 class="signup-card__title">${t('signup.profileTitle')}</h2>
      <p class="signup-card__sub">${t('signup.profileSub')}</p>
      ${err}
      <label class="signup-field-label" for="signupName">Full name</label>
      <input class="signup-input" id="signupName" type="text" autocomplete="name" value="${esc(signupDraft.name || '')}" placeholder="e.g. Priya Sharma">
      <label class="signup-field-label" for="signupEmail">${t('signup.emailLabel')}</label>
      <input class="signup-input" id="signupEmail" type="email" inputmode="email" autocomplete="email" value="${esc(signupDraft.email || '')}" placeholder="${t('signup.emailPlaceholder')}">
      <div class="signup-perks">
        <div class="signup-perk">${icon('compare', ICON_SIZE.md, 'hollow-icon')} ${t('signup.trust1')}</div>
        <div class="signup-perk">${icon('folder', ICON_SIZE.md, 'hollow-icon')} All policies in one place</div>
        <div class="signup-perk">${icon('claim', ICON_SIZE.md, 'hollow-icon')} Claims assistance</div>
      </div>`;
    const footer = `<button type="button" class="btn btn--primary btn--block btn--lg" data-action="signup-profile">${t('signup.profileCta')}</button>`;
    return signupShell('wizard-back', t('signup.profileTitle'), body, footer);
  }

  const first = (authUser?.name || '').trim().split(/\s+/)[0] || ('there');
  const body = `
    <div class="signup-done">
      ${successBadge()}
      <p class="signup-done__status" role="status">Success</p>
      <h2 class="signup-done__title">${`Welcome, ${first}!`}</h2>
      <p class="signup-done__sub">You're logged in. Find the best plan in minutes.</p>
      <div class="signup-done__actions">
        <button type="button" class="btn btn--primary btn--block btn--lg" data-action="signup-done">Go to home</button>
        <button type="button" class="btn btn--secondary btn--block" data-action="quote" data-product="health">Get health quotes</button>
      </div>
    </div>`;
  return signupShell('back', '', body, '', 'done');
}

function renderSuccess() {
  const product = normalizeProductKey(lastCheckout.product || wizardState?.product || activeProduct);
  const plans = PLAN_DATA[product] || healthPlans;
  const plan = plans.find((p) => p.id === (lastCheckout.planId || selectedPlanId)) || plans[0];
  const cfg = PRODUCT_CONFIG[product] || PRODUCT_CONFIG.health;
  const planLabel = cfg.label;
  const premium = lastCheckout.premium || getCheckoutTotal(product);
  const policyNo = lastCheckout.policyNo || generatePolicyNumber(product);
  const addons = productSupportsAddons(product)
    ? (lastCheckout.addonsSummary ?? getCheckoutAddonsSummary(product))
    : null;
  const addonsSummaryRow = addons
    ? `<li><strong>Add-ons:</strong> ${addons}</li>`
    : '';
  return `<div class="policy-success">
    <div class="page-header page-header--static">
      ${renderBackBtn('home', 'Back to home')}
    </div>
    <div class="policy-success__body section main--padded">
      ${renderCheckoutDemoBanner()}
      ${successBadge()}
      <h1 class="policy-success__title">Policy issued!</h1>
      <p class="policy-success__sub subtitle">${plan.insurer} · ${plan.plan} · ${planLabel}</p>
      <ul class="policy-success__summary">
        <li><strong>Premium paid:</strong> ${formatPremium(premium)}</li>
        ${addonsSummaryRow}
      </ul>
      <div class="digital-card">
        <div class="digital-card__label">Policy number</div>
        <div class="digital-card__value">${policyNo}</div>
        <div class="digital-card__label" style="margin-top:0.75rem">Support</div>
        <div class="digital-card__value">Hollow · ${PHONE_NUMBER}</div>
      </div>
      <div class="policy-success__actions">
        <button type="button" class="btn btn--primary btn--block" data-action="view-issued-policy" data-product="${product}">${successViewPolicyLabel(product)}</button>
        <button type="button" class="btn btn--ghost btn--block" data-action="home">Back to home</button>
      </div>
    </div>
  </div>`;
}

function compareSelectionLabel(n) {
  return formatI18n(n === 1 ? t('compare.countOne') : t('compare.countMany'), { n });
}

function announceCompareSelection(n, atLimit) {
  const live = document.getElementById('compareLive');
  if (!live) return;
  const countText = compareSelectionLabel(n);
  const text = atLimit ? `${countText}. ${t('compare.limit')}` : countText;
  if (live.textContent === text) return;
  live.textContent = text;
}

function syncCompareSelectionUI() {
  document.querySelectorAll('.plan-item[data-plan-id]').forEach((card) => {
    const id = card.dataset.planId;
    card.classList.toggle('plan-item--in-compare', compareList.includes(id));
  });
  document.querySelectorAll('[data-compare]').forEach((input) => {
    const id = input.dataset.compare;
    const on = compareList.includes(id);
    input.checked = on;
    input.closest('.compare-check')?.classList.toggle('compare-check--selected', on);
  });
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  const count = document.getElementById('compareCount');
  const limitMsg = document.getElementById('compareLimitMsg');
  const compareBtn = document.getElementById('compareBtn');
  const live = document.getElementById('compareLive');
  if (!bar) return;
  const show = compareList.length > 0 && isOnCompareableResults();
  if (show) {
    bar.hidden = false;
    document.body.classList.add('compare-open');
    const n = compareList.length;
    const atLimit = n >= 3;
    if (count) count.textContent = compareSelectionLabel(n);
    if (limitMsg) {
      if (atLimit) {
        limitMsg.textContent = 'Max 3 plans — remove one to add another';
        limitMsg.hidden = false;
      } else limitMsg.hidden = true;
    }
    if (compareBtn) {
      compareBtn.disabled = n < 2;
      compareBtn.setAttribute('aria-disabled', n < 2 ? 'true' : 'false');
    }
    const chips = document.getElementById('compareBarSelected');
    if (chips) {
      const catalog = plansForCompareProduct(compareContextProduct());
      chips.innerHTML = compareList.map((id) => {
        const plan = catalog.find((p) => p.id === id);
        const name = plan ? `${plan.insurer} — ${plan.plan}` : id;
        return `<span class="compare-bar__chip"><span class="compare-bar__chip-label">${esc(name)}</span><button type="button" class="compare-bar__chip-remove" data-action="compare-remove" data-plan-id="${esc(id)}" aria-label="Remove ${esc(name)}">×</button></span>`;
      }).join('');
      chips.hidden = compareList.length === 0;
      chips.closest('.compare-bar__chip-scroll')?.toggleAttribute('hidden', compareList.length === 0);
    }
    syncCompareSelectionUI();
    announceCompareSelection(n, atLimit);
  } else {
    bar.hidden = true;
    document.body.classList.remove('compare-open');
    if (live && compareList.length === 0) live.textContent = '';
    syncCompareSelectionUI();
  }
}

function render(options = {}) {
  const preserveScroll = options.preserveScroll === true;
  const scrollSnapshot = preserveScroll ? captureMainScroll() : null;
  const main = document.getElementById('mainContent');
  let html = '';
  if (wizardState?.type === 'cover-guide') html = renderCoverGuideWizard();
  else if (wizardState?.type === 'compare') html = renderCompareView();
  else if (wizardState?.type === 'signup') {
    html = renderSignup(wizardState.step ?? 0);
    document.body.classList.add('wizard-mode', 'signup-mode');
  }
  else if (wizardState?.type === 'success') { html = renderSuccess(); document.body.classList.add('wizard-mode'); }
  else if (wizardState?.type === 'health') { html = renderHealthWizard(wizardState.step); document.body.classList.add('wizard-mode'); }
  else if (wizardState?.type === 'motor') { html = renderMotorWizard(wizardState.step); document.body.classList.add('wizard-mode'); }
  else if (wizardState?.type === 'term' || wizardState?.type === 'home') {
    html = renderProductWizard(wizardState.type, wizardState.step);
    document.body.classList.add('wizard-mode');
  }
  else {
    switch (currentView) {
      case 'explore': html = renderExplore(); break;
      case 'account': html = renderAccount(); break;
      case 'policies': html = renderPolicies(); break;
      case 'claims': html = renderClaims(); break;
      case 'help': html = renderHelp(); break;
      case 'renew': html = renderRenewals(); break;
      case 'policy-detail': html = renderPolicyDetail(); break;
      case 'policy-doctor': html = renderPolicyDoctor(); break;
      case 'cases': html = renderCasesList(); break;
      case 'case-create': html = renderCaseCreate(); break;
      case 'case-detail': html = renderCaseDetail(); break;
      case 'claim-detail': html = renderClaimDetail(); break;
      case 'claim-start': html = renderClaimStart(); break;
      default: html = renderHome();
    }
  }

  main.innerHTML = normalizePageLayout(html);
  document.body.classList.toggle(
    'wizard-mode',
    !!(wizardState && (wizardState.type || wizardState.helpSection)),
  );
  document.body.classList.toggle('signup-mode', wizardState?.type === 'signup');
  document.body.classList.toggle(
    'wizard-members-fit',
    wizardState?.type === 'health' && wizardState.step === 0,
  );
  document.body.classList.toggle(
    'wizard-medical-fit',
    wizardState?.type === 'health' && wizardState.step === 1,
  );
  document.body.classList.toggle(
    'wizard-cover-fit',
    wizardState?.type === 'health' && wizardState.step === 2,
  );
  document.body.classList.toggle(
    'wizard-term-fit',
    wizardState?.type === 'term' && wizardState.step === 0,
  );
  document.body.classList.toggle(
    'wizard-home-fit',
    wizardState?.type === 'home' && wizardState.step === 0,
  );
  document.body.classList.toggle(
    'wizard-motor-fit',
    wizardState?.type === 'motor' && wizardState.step === 0,
  );
  document.body.classList.toggle('wizard-docked-step', usesWizardDockedStepLayout());
  document.body.classList.toggle('wizard-checkout-fit', usesWizardCheckoutDock());
  applyI18n();
  initPageHollowSelects();
  bindEvents();
  updateCompareBar();
  if (preserveScroll) restoreMainScroll(scrollSnapshot);
  else resetMainScroll();
  if (wizardState?.type === 'signup') bindSignupEvents();
  if (checkoutShouldFocusPayment) {
    checkoutShouldFocusPayment = false;
    requestAnimationFrame(() => {
      document.querySelector('[data-payment]')?.focus?.();
    });
  }
  if (termAgeShouldFocus) {
    termAgeShouldFocus = false;
    requestAnimationFrame(() => {
      const el = document.getElementById('termAge');
      el?.focus();
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
    });
  }
  if (homePincodeShouldFocus) {
    homePincodeShouldFocus = false;
    requestAnimationFrame(() => {
      const el = document.getElementById('homePincode');
      el?.focus();
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
    });
  }
  if (homeAreaShouldFocus) {
    homeAreaShouldFocus = false;
    requestAnimationFrame(() => {
      const el = document.getElementById('homeAreaSqFt');
      el?.focus();
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
    });
  }
  if (homeStructureShouldFocus) {
    homeStructureShouldFocus = false;
    requestAnimationFrame(() => {
      const el = document.getElementById('homeStructureValueLakh');
      el?.focus();
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
    });
  }
  syncCheckoutFocusTrap();
}

function bindSignupEvents() {
  const digits = [...document.querySelectorAll('.otp-digit')];
  digits.forEach((input, i) => {
    input.addEventListener('input', (e) => {
      const v = e.target.value.replace(/\D/g, '');
      e.target.value = v.slice(-1);
      signupDraft.error = '';
      if (v && digits[i + 1]) digits[i + 1].focus();
      if ([...digits].every((d) => d.value.length === 1)) verifySignupOtp();
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && digits[i - 1]) digits[i - 1].focus();
    });
    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
      text.split('').forEach((ch, j) => { if (digits[j]) digits[j].value = ch; });
      (digits[Math.min(text.length, 5)] || digits[0])?.focus();
    });
  });
  document.querySelectorAll('[data-action="signup-send-otp"]').forEach((el) => {
    el.addEventListener('click', () => sendSignupOtp('sms'));
  });
  document.querySelectorAll('[data-action="signup-send-otp-wa"]').forEach((el) => {
    el.addEventListener('click', () => sendSignupOtp('wa'));
  });
  document.querySelectorAll('[data-signup-tab]').forEach((el) => {
    el.addEventListener('click', () => {
      signupDraft.tab = el.dataset.signupTab;
      signupDraft.error = '';
      render();
    });
  });
  document.querySelectorAll('[data-action="signup-verify-otp"]').forEach((el) => {
    el.addEventListener('click', verifySignupOtp);
  });
  document.querySelectorAll('[data-action="signup-profile"]').forEach((el) => {
    el.addEventListener('click', completeSignupProfile);
  });
  document.querySelector('[data-action="signup-resend-otp"]')?.addEventListener('click', resendSignupOtp);
  document.querySelector('[data-action="signup-change-phone"]')?.addEventListener('click', () => {
    wizardState = { type: 'signup', step: 0 };
    signupDraft.error = '';
    pushAppState();
    render();
  });
  document.querySelectorAll('[data-action="signup-done"]').forEach((el) => {
    el.addEventListener('click', finishSignup);
  });
  const phoneInput = document.getElementById('signupPhone');
  phoneInput?.focus();
  digits[0]?.focus();
}

function tryAdvanceWizard() {
  const type = wizardState?.type;
  const step = wizardState?.step ?? 0;
  if (type === 'health') {
    captureHealthFormFromDOM();
    if (!validateHealthStep(step)) { render(); return; }
    if (step === 1) {
      const sel = selectedHealthMembers();
      const active = getActiveMedicalMember();
      if (active) ensureMemberMedical(active).confirmed = true;
      const idx = sel.findIndex((m) => m.id === active?.id);
      if (idx >= 0 && idx < sel.length - 1) {
        wizardState.medicalMemberId = sel[idx + 1].id;
        wizardState.formError = '';
        pushAppState();
        render();
        announcePage(captureAppState());
        return;
      }
    }
  }
  if (type === 'motor') {
    captureMotorFormFromDOM();
    if (!validateMotorStep(step)) { render(); return; }
  }
  if (type === 'term' && step === 0) {
    captureTermFormFromDOM();
    const tq = quoteForm.term;
    const age = Number(tq.age);
    if (!tq.age || age < 18 || age > 65) {
      wizardState.formError = 'Enter your age (18–65)';
      termAgeShouldFocus = true;
      render();
      return;
    }
    if (!tq.smoking) {
      wizardState.formError = 'Select whether you smoke';
      render();
      return;
    }
    wizardState.formError = '';
  }
  if (type === 'home' && step === 0) {
    captureHomeFormFromDOM();
    if (!validateHomeStep(step)) {
      render();
      return;
    }
  }
  advanceWizard();
}

function advanceWizard() {
  const type = wizardState?.type;
  if (type === 'health' && wizardState.step < 5) {
    wizardState.step++;
    if (wizardState.step === 5) resetCheckoutSession('health');
    if (wizardState.step === 1) {
      const sel = selectedHealthMembers();
      wizardState.medicalMemberId = sel[0]?.id || 'self';
      sel.forEach((m) => { ensureMemberMedical(m).confirmed = false; });
    }
    pushAppState();
    if (startResultsLoadingIfNeeded(type, wizardState.step)) return;
    render();
    announcePage(captureAppState());
  }
  else if (type === 'motor' && wizardState.step < 3) {
    wizardState.step++;
    if (wizardState.step === 3) resetCheckoutSession('motor');
    pushAppState();
    if (startResultsLoadingIfNeeded(type, wizardState.step)) return;
    render();
    announcePage(captureAppState());
  }
  else if (type && PRODUCT_CONFIG[type] && type !== 'health' && type !== 'motor' && wizardState.step < PRODUCT_CONFIG[type].maxStep) {
    wizardState.step++;
    pushAppState();
    if (startResultsLoadingIfNeeded(type, wizardState.step)) return;
    render();
    announcePage(captureAppState());
  }
}

function bindEvents() {
  document.querySelectorAll('[data-action="quote"]').forEach(el => {
    el.addEventListener('click', () => {
      const preset = el.dataset.healthPreset || '';
      startQuote(el.dataset.product || 'health', preset ? { healthPreset: preset } : {});
    });
  });

  document.getElementById('heroProduct')?.addEventListener('change', (e) => {
    activeProduct = e.target.value || 'health';
  });
  document.querySelector('[data-action="hero-quote"]')?.addEventListener('click', () => {
    startQuote(document.getElementById('heroProduct')?.value || 'health');
  });

  document.querySelectorAll('[data-action="open-cover-guide"]').forEach((el) => {
    el.addEventListener('click', () => openCoverGuide(el.dataset.guideProduct || null));
  });
  document.querySelectorAll('[data-action="cover-guide-start"]').forEach((el) => {
    el.addEventListener('click', () => {
      const product = el.dataset.guideProduct;
      wizardState.guideProduct = product;
      wizardState.answers = defaultCoverGuideAnswers(product);
      wizardState.step = 0;
      pushAppState();
      render();
      announcePage(captureAppState());
    });
  });
  document.querySelectorAll('[data-action="cover-guide-back"]').forEach((el) => {
    el.setAttribute('aria-label', 'Go back');
    el.addEventListener('click', coverGuideBack);
  });
  document.querySelectorAll('[data-action="cover-guide-next"]').forEach((el) => {
    el.addEventListener('click', coverGuideNext);
  });
  document.querySelectorAll('[data-action="cover-guide-apply"]').forEach((el) => {
    el.addEventListener('click', applyCoverGuideToQuote);
  });
  document.querySelectorAll('[data-cover-guide-field]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!wizardState?.answers) return;
      const field = btn.dataset.coverGuideField;
      const raw = btn.dataset.coverGuideValue;
      const numericFields = ['age', 'incomeLakh', 'loansLakh'];
      wizardState.answers[field] = numericFields.includes(field) ? Number(raw) : raw;
      render();
    });
  });
  document.querySelectorAll('[data-cover-guide-input]').forEach((input) => {
    input.addEventListener('change', () => {
      if (!wizardState?.answers) return;
      wizardState.answers[input.dataset.coverGuideInput] = Number(input.value);
    });
  });
  document.querySelectorAll('[data-term-cover]').forEach((btn) => {
    btn.addEventListener('click', () => {
      quoteForm.term.cover = Number(btn.dataset.termCover);
      renderPreserveScroll();
    });
  });
  document.querySelectorAll('[data-term-tenure]').forEach((btn) => {
    btn.addEventListener('click', () => {
      quoteForm.term.tenure = Number(btn.dataset.termTenure);
      renderPreserveScroll();
    });
  });
  document.querySelectorAll('[data-term-smoking]').forEach((btn) => {
    btn.addEventListener('click', () => {
      quoteForm.term.smoking = btn.dataset.termSmoking;
      if (wizardState?.formError && /smoke/i.test(wizardState.formError)) {
        wizardState.formError = '';
      }
      renderPreserveScroll();
    });
  });
  const termAgeInput = document.getElementById('termAge');
  const syncTermAgeFieldVisual = (wrap, { empty, ok }) => {
    if (!wrap) return;
    wrap.classList.remove(
      'term-age-field--ok',
      'term-age-field--needs',
      'term-age-field--idle',
      'term-age-field--invalid',
      'term-age-field--error',
    );
    if (ok) wrap.classList.add('term-age-field--ok');
    else if (empty) wrap.classList.add('term-age-field--needs');
    else wrap.classList.add('term-age-field--invalid');
  };
  termAgeInput?.addEventListener('input', () => {
    const digits = termAgeInput.value.replace(/\D/g, '').slice(0, 2);
    if (digits !== termAgeInput.value) termAgeInput.value = digits;
    quoteForm.term.age = digits;
    const age = digits === '' ? NaN : Number(digits);
    const ok = Number.isFinite(age) && age >= 18 && age <= 65;
    const empty = digits === '';
    termAgeInput.setAttribute('aria-invalid', ok ? 'false' : 'true');
    const wrap = termAgeInput.closest('.term-age-field');
    if (wrap?.classList.contains('term-age-field--error') && (ok || empty)) {
      wrap.classList.remove('term-age-field--error');
    }
    syncTermAgeFieldVisual(wrap, { empty, ok });
    syncTermAgeInvalidMessage(wrap, termAgeInput, { empty, ok, age, digits });
    const hintEl = document.getElementById('termAgeHint');
    if (hintEl) {
      hintEl.textContent = ok
        ? t('term.ageHintOk')
        : empty
          ? t('term.ageHintEmpty')
          : t('term.ageHintPartial');
    }
    const guideEl = document.getElementById('termAgeGuide');
    if (!empty && guideEl) {
      guideEl.remove();
      termAgeInput.setAttribute('aria-describedby', 'termAgeHint');
    }
    if (ok && wizardState?.formError && /age/i.test(wizardState.formError)) {
      wizardState.formError = '';
      document.getElementById('termAgeError')?.remove();
    }
    if (!ok && !empty && wrap?.classList.contains('term-age-field--error')) {
      wrap.classList.remove('term-age-field--error');
      wrap.classList.add('term-age-field--invalid');
      document.getElementById('termAgeError')?.remove();
    }
  });
  termAgeInput?.closest('.term-age-field__control')?.addEventListener('click', (e) => {
    if (e.target === termAgeInput) return;
    termAgeInput?.focus();
  });
  termAgeInput?.addEventListener('change', () => {
    captureTermFormFromDOM();
  });

  const homePincodeInput = document.getElementById('homePincode');
  const syncHomePincodeFieldVisual = (wrap, { empty, ok }) => {
    if (!wrap) return;
    wrap.classList.remove(
      'term-age-field--ok',
      'term-age-field--needs',
      'term-age-field--idle',
      'term-age-field--invalid',
      'term-age-field--error',
    );
    if (ok) wrap.classList.add('term-age-field--ok');
    else if (empty) wrap.classList.add('term-age-field--needs');
    else wrap.classList.add('term-age-field--invalid');
  };
  const syncHomePincodeInvalidMessage = (wrap, input, { empty, ok, digits }) => {
    let invalidEl = document.getElementById('homePincodeInvalid');
    if (ok || empty) {
      invalidEl?.remove();
      return;
    }
    const msg = homePincodeInvalidMessage(digits);
    if (!invalidEl) {
      invalidEl = document.createElement('p');
      invalidEl.id = 'homePincodeInvalid';
      invalidEl.className = 'term-age-field__invalid';
      invalidEl.setAttribute('role', 'alert');
      wrap?.querySelector('.term-age-field__control')?.insertAdjacentElement('afterend', invalidEl);
    }
    invalidEl.textContent = msg;
    input.setAttribute('aria-describedby', ['homePincodeHint', 'homePincodeInvalid'].join(' '));
  };
  homePincodeInput?.addEventListener('input', () => {
    const digits = homePincodeInput.value.replace(/\D/g, '').slice(0, 6);
    if (digits !== homePincodeInput.value) homePincodeInput.value = digits;
    quoteForm.home.pincode = digits;
    const ok = isValidHomePincode(digits);
    const empty = digits === '';
    homePincodeInput.setAttribute('aria-invalid', ok ? 'false' : 'true');
    const wrap = homePincodeInput.closest('.home-pincode-field');
    if (wrap?.classList.contains('term-age-field--error') && (ok || empty)) {
      wrap.classList.remove('term-age-field--error');
      document.getElementById('homePincodeError')?.remove();
    }
    syncHomePincodeFieldVisual(wrap, { empty, ok });
    syncHomePincodeInvalidMessage(wrap, homePincodeInput, { empty, ok, digits });
    const hintEl = document.getElementById('homePincodeHint');
    if (hintEl) {
      hintEl.textContent = ok
        ? t('home.pincodeHintOk')
        : empty
          ? t('home.pincodeHintEmpty')
          : t('home.pincodeHintPartial');
    }
    const guideEl = document.getElementById('homePincodeGuide');
    if (!empty && guideEl) {
      guideEl.remove();
      homePincodeInput.setAttribute('aria-describedby', homePincodeInput.getAttribute('aria-describedby')?.replace('homePincodeGuide', '').trim() || 'homePincodeHint');
    }
    if (ok && wizardState?.formError && /pincode/i.test(wizardState.formError)) {
      wizardState.formError = '';
    }
  });
  homePincodeInput?.closest('.term-age-field__control')?.addEventListener('click', (e) => {
    if (e.target === homePincodeInput) return;
    homePincodeInput?.focus();
  });

  const homeAreaInput = document.getElementById('homeAreaSqFt');
  const syncHomeAreaFieldVisual = (wrap, { empty, ok }) => {
    if (!wrap) return;
    wrap.classList.remove(
      'term-age-field--ok',
      'term-age-field--needs',
      'term-age-field--idle',
      'term-age-field--invalid',
      'term-age-field--error',
    );
    if (ok) wrap.classList.add('term-age-field--ok');
    else if (empty) wrap.classList.add('term-age-field--needs');
    else wrap.classList.add('term-age-field--invalid');
  };
  const syncHomeAreaInvalidMessage = (wrap, input, { empty, ok, digits }) => {
    let invalidEl = document.getElementById('homeAreaInvalid');
    if (ok || empty) {
      invalidEl?.remove();
      return;
    }
    const msg = homeAreaInvalidMessage(digits);
    if (!invalidEl) {
      invalidEl = document.createElement('p');
      invalidEl.id = 'homeAreaInvalid';
      invalidEl.className = 'term-age-field__invalid';
      invalidEl.setAttribute('role', 'alert');
      wrap?.querySelector('.term-age-field__control')?.insertAdjacentElement('afterend', invalidEl);
    }
    invalidEl.textContent = msg;
    input.setAttribute('aria-describedby', ['homeAreaHint', 'homeAreaInvalid'].join(' '));
  };
  homeAreaInput?.addEventListener('input', () => {
    const digits = homeAreaInputValue(homeAreaInput.value);
    if (digits !== homeAreaInput.value) homeAreaInput.value = digits;
    quoteForm.home.areaSqFt = digits === '' ? '' : parseInt(digits, 10);
    const ok = isValidHomeAreaSqFt(digits);
    const empty = digits === '';
    homeAreaInput.setAttribute('aria-invalid', ok ? 'false' : 'true');
    const wrap = homeAreaInput.closest('.home-area-field');
    if (wrap?.classList.contains('term-age-field--error') && (ok || empty)) {
      wrap.classList.remove('term-age-field--error');
      document.getElementById('homeAreaError')?.remove();
    }
    syncHomeAreaFieldVisual(wrap, { empty, ok });
    syncHomeAreaInvalidMessage(wrap, homeAreaInput, { empty, ok, digits });
    const hintEl = document.getElementById('homeAreaHint');
    if (hintEl) {
      hintEl.textContent = ok
        ? t('home.areaHintOk')
        : empty
          ? t('home.areaHintEmpty')
          : t('home.areaHintPartial');
    }
    const guideEl = document.getElementById('homeAreaGuide');
    if (!empty && guideEl) {
      guideEl.remove();
      homeAreaInput.setAttribute(
        'aria-describedby',
        homeAreaInput.getAttribute('aria-describedby')?.replace('homeAreaGuide', '').trim() || 'homeAreaHint',
      );
    }
    if (ok && wizardState?.formError && /built-up area/i.test(wizardState.formError)) {
      wizardState.formError = '';
    }
  });
  homeAreaInput?.addEventListener('change', () => {
    captureHomeFormFromDOM();
  });
  homeAreaInput?.closest('.term-age-field__control')?.addEventListener('click', (e) => {
    if (e.target === homeAreaInput) return;
    homeAreaInput?.focus();
  });

  const homeStructureInput = document.getElementById('homeStructureValueLakh');
  const syncHomeStructureFieldVisual = (wrap, { empty, ok }) => {
    if (!wrap) return;
    wrap.classList.remove(
      'term-age-field--ok',
      'term-age-field--needs',
      'term-age-field--idle',
      'term-age-field--invalid',
      'term-age-field--error',
    );
    if (ok) wrap.classList.add('term-age-field--ok');
    else if (empty) wrap.classList.add('term-age-field--needs');
    else wrap.classList.add('term-age-field--invalid');
  };
  const syncHomeStructureInvalidMessage = (wrap, input, { empty, ok, digits }) => {
    let invalidEl = document.getElementById('homeStructureInvalid');
    if (ok || empty) {
      invalidEl?.remove();
      return;
    }
    const msg = homeStructureInvalidMessage(digits);
    if (!invalidEl) {
      invalidEl = document.createElement('p');
      invalidEl.id = 'homeStructureInvalid';
      invalidEl.className = 'term-age-field__invalid';
      invalidEl.setAttribute('role', 'alert');
      wrap?.querySelector('.term-age-field__control')?.insertAdjacentElement('afterend', invalidEl);
    }
    invalidEl.textContent = msg;
    input.setAttribute('aria-describedby', ['homeStructureHint', 'homeStructureInvalid'].join(' '));
  };
  homeStructureInput?.addEventListener('input', () => {
    const digits = homeStructureInputValue(homeStructureInput.value);
    if (digits !== homeStructureInput.value) homeStructureInput.value = digits;
    quoteForm.home.structureValueLakh = digits === '' ? '' : parseInt(digits, 10);
    const ok = isValidHomeStructureValueLakh(digits);
    const empty = digits === '';
    homeStructureInput.setAttribute('aria-invalid', ok ? 'false' : 'true');
    const wrap = homeStructureInput.closest('.home-structure-field');
    if (wrap?.classList.contains('term-age-field--error') && (ok || empty)) {
      wrap.classList.remove('term-age-field--error');
      document.getElementById('homeStructureError')?.remove();
    }
    syncHomeStructureFieldVisual(wrap, { empty, ok });
    syncHomeStructureInvalidMessage(wrap, homeStructureInput, { empty, ok, digits });
    const hintEl = document.getElementById('homeStructureHint');
    if (hintEl) {
      hintEl.textContent = ok
        ? t('home.structureHintOk')
        : empty
          ? t('home.structureHintEmpty')
          : t('home.structureHintPartial');
    }
    const guideEl = document.getElementById('homeStructureGuide');
    if (!empty && guideEl) {
      guideEl.remove();
      homeStructureInput.setAttribute(
        'aria-describedby',
        homeStructureInput.getAttribute('aria-describedby')?.replace('homeStructureGuide', '').trim() || 'homeStructureHint',
      );
    }
    if (ok && wizardState?.formError && /structure value/i.test(wizardState.formError)) {
      wizardState.formError = '';
    }
  });
  homeStructureInput?.addEventListener('change', () => {
    captureHomeFormFromDOM();
  });
  homeStructureInput?.closest('.term-age-field__control')?.addEventListener('click', (e) => {
    if (e.target === homeStructureInput) return;
    homeStructureInput?.focus();
  });

  document.querySelectorAll('[data-action="set-view"]').forEach(el => {
    el.addEventListener('click', () => setView(el.dataset.view, el.dataset.help ? { helpSection: el.dataset.help } : {}));
  });
  document.querySelectorAll('[data-action="open-signup"]').forEach(el => {
    el.addEventListener('click', () => openSignup());
  });
  document.querySelectorAll('[data-action="logout"]').forEach(el => {
    el.addEventListener('click', logout);
  });
  document.querySelectorAll('[data-action="save-account-email"]').forEach((el) => {
    el.addEventListener('click', saveAccountEmail);
  });

  document.querySelectorAll('[data-action="go-back"], [data-action="back"], [data-action="help-back"], [data-action="compare-back"], [data-action="claim-start-back"]').forEach(el => {
    el.setAttribute('aria-label', 'Go back');
    el.addEventListener('click', goBack);
  });
  document.querySelectorAll('[data-action="wizard-back"]').forEach((el) => {
    el.setAttribute('aria-label', 'Go back');
    if (el.disabled || el.getAttribute('aria-disabled') === 'true') return;
    el.addEventListener('click', () => {
      if (checkoutPhase === 'payment' || checkoutPhase === 'failed') {
        checkoutPhase = 'review';
        wizardState.formError = '';
        wizardState.declarationError = '';
        render();
        return;
      }
      goBack();
    });
  });
  document.querySelectorAll('[data-action="wizard-next"]').forEach(el => {
    el.addEventListener('click', tryAdvanceWizard);
  });
  document.querySelectorAll('[data-action="wizard-goto"]').forEach(el => {
    el.addEventListener('click', () => {
      const n = parseInt(el.dataset.gotoStep, 10);
      if (!Number.isNaN(n) && wizardState) {
        wizardState.step = n;
        wizardState.formError = '';
        pushAppState();
        render();
      }
    });
  });
  bindQuoteFormEvents();

  document.querySelectorAll('[data-filter]').forEach(el => {
    el.addEventListener('click', () => { healthFilter = el.dataset.filter; render(); });
  });
  document.querySelectorAll('[data-pfilter]').forEach(el => {
    el.addEventListener('click', () => { productFilter[el.dataset.product] = el.dataset.pfilter; render(); });
  });
  document.querySelectorAll('[data-action="results-reset-health"]').forEach((el) => {
    el.addEventListener('click', () => { healthFilter = 'all'; render(); });
  });
  document.querySelectorAll('[data-action="results-reset-home"]').forEach((el) => {
    el.addEventListener('click', () => { productFilter.home = 'all'; render(); });
  });
  document.querySelectorAll('[data-action="results-goto-step"]').forEach((el) => {
    el.addEventListener('click', () => {
      const n = parseInt(el.dataset.gotoStep, 10);
      if (!Number.isNaN(n) && wizardState) {
        wizardState.step = n;
        wizardState.formError = '';
        quoteResultsError = null;
        pushAppState();
        render();
      }
    });
  });
  document.querySelectorAll('[data-action="results-retry"]').forEach((el) => {
    el.addEventListener('click', () => retryQuoteResults(el.dataset.product || wizardState?.type || activeProduct));
  });
  document.querySelectorAll('[data-action="plan-sort"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product;
      const value = btn.dataset.sortValue;
      if (getPlanSortValue(product) === value) return;
      if (product === 'health') healthSort = value;
      else productSort[product] = value;
      render();
    });
  });
  document.querySelectorAll('[data-product-sort]').forEach((el) => {
    el.addEventListener('change', (e) => {
      const product = e.target.dataset.productSort;
      const value = e.target.value;
      if (product === 'health') healthSort = value;
      else productSort[product] = value;
      render();
    });
  });

  document.querySelectorAll('[data-compare]').forEach(el => {
    el.addEventListener('change', e => {
      const id = e.target.dataset.compare;
      if (e.target.checked) {
        if (compareList.length < 3 && !compareList.includes(id)) compareList.push(id);
        else e.target.checked = false;
      } else compareList = compareList.filter(x => x !== id);
      updateCompareBar();
      syncCompareSelectionUI();
    });
  });

  document.querySelectorAll('[data-action="compare-view-mode"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const diffOnly = btn.dataset.mode === 'diff';
      if (compareHideEqualRows === diffOnly) return;
      compareHideEqualRows = diffOnly;
      render();
    });
  });

  document.getElementById('compareBar')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="compare-remove"]');
    if (!btn) return;
    const id = btn.dataset.planId;
    compareList = compareList.filter((x) => x !== id);
    document.querySelectorAll(`[data-compare="${id}"]`).forEach((el) => { el.checked = false; });
    updateCompareBar();
    render();
  });

  document.getElementById('compareBtn')?.addEventListener('click', () => {
    openCompareView();
  });

  document.querySelectorAll('[data-action="buy-plan"]').forEach(el => {
    el.addEventListener('click', () => {
      selectedPlanId = el.dataset.planId;
      activeProduct = 'health';
      resetCheckoutSession('health');
      wizardState = { type: 'health', step: 4 };
      pushAppState();
      render();
      announcePage(captureAppState());
    });
  });
  document.querySelectorAll('[data-action="buy-product"]').forEach(el => {
    el.addEventListener('click', () => {
      selectedPlanId = el.dataset.planId;
      activeProduct = el.dataset.product;
      const cfg = PRODUCT_CONFIG[activeProduct];
      resetCheckoutSession(activeProduct);
      const addonStep = activeProduct === 'health' ? 4 : activeProduct === 'motor' ? 2 : null;
      const checkoutStep = cfg.maxStep;
      wizardState = {
        type: activeProduct,
        step: cfg.hasAddons && addonStep != null ? addonStep : checkoutStep,
      };
      if (!cfg.hasAddons && checkoutStep === cfg.maxStep) checkoutPhase = 'review';
      pushAppState();
      render();
      announcePage(captureAppState());
    });
  });
  document.querySelectorAll('[data-action="buy-motor"]').forEach(el => {
    el.addEventListener('click', () => {
      selectedPlanId = el.dataset.planId;
      activeProduct = 'motor';
      resetCheckoutSession('motor');
      wizardState = { type: 'motor', step: 2 };
      pushAppState();
      render();
      announcePage(captureAppState());
    });
  });

  document.querySelectorAll('[data-action="checkout-to-payment"]').forEach((el) => {
    el.addEventListener('click', () => {
      if (el.disabled || el.getAttribute('aria-disabled') === 'true') return;
      proceedToCheckoutPayment(el.dataset.product || wizardState?.type || activeProduct);
    });
  });

  document.querySelectorAll('[data-action="pay-success"]').forEach(el => {
    el.addEventListener('click', () => {
      submitPayment(el.dataset.product || wizardState?.type || activeProduct);
    });
  });

  document.querySelectorAll('[data-action="payment-retry"]').forEach((el) => {
    el.addEventListener('click', () => retryPayment(el.dataset.product));
  });

  document.querySelectorAll('[data-action="payment-change-method"]').forEach((el) => {
    el.addEventListener('click', () => {
      checkoutPhase = 'payment';
      wizardState.formError = '';
      render();
    });
  });
  document.querySelectorAll('[data-action="home"]').forEach(el => {
    el.addEventListener('click', () => { wizardState = null; setView('home'); });
  });
  document.querySelectorAll('[data-action="view-issued-policy"]').forEach((el) => {
    el.addEventListener('click', () => {
      const product = normalizeProductKey(el.dataset.product || lastCheckout.product || wizardState?.product || activeProduct);
      openPolicyDetail(policyIdForProduct(product));
    });
  });

  document.querySelectorAll('[data-payment]').forEach(el => {
    el.addEventListener('click', () => {
      captureCheckoutFormFromDOM();
      capturePaymentFormFromDOM();
      selectedPayment = el.dataset.payment;
      syncBankOfferWithPayment();
      renderPreserveScroll();
    });
  });

  document.querySelectorAll('[data-bank-offer]').forEach((el) => {
    el.addEventListener('click', () => {
      captureCheckoutFormFromDOM();
      capturePaymentFormFromDOM();
      applyBankOfferSelection(el.dataset.bankOffer);
      if (wizardState) wizardState.formError = '';
      renderPreserveScroll();
    });
  });

  const applyCouponChange = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    renderPreserveScroll();
  };
  document.querySelector('[data-action="apply-coupon"]')?.addEventListener('click', () => {
    captureCheckoutFormFromDOM();
    const input = document.getElementById('couponInput');
    const code = (input?.value || couponInput).trim().toUpperCase();
    if (coupons[code]) {
      appliedCoupon = code;
      couponInput = code;
      couponFieldError = '';
      applyCouponChange();
    } else {
      couponFieldError = 'This coupon code isn\'t valid.';
      applyCouponChange();
    }
  });

  document.querySelectorAll('[data-action="apply-coupon-code"]').forEach(el => {
    el.addEventListener('click', () => {
      captureCheckoutFormFromDOM();
      appliedCoupon = el.dataset.code;
      couponInput = el.dataset.code;
      couponFieldError = '';
      applyCouponChange();
    });
  });

  document.querySelector('[data-action="remove-coupon"]')?.addEventListener('click', () => {
    captureCheckoutFormFromDOM();
    appliedCoupon = null;
    couponInput = '';
    couponFieldError = '';
    applyCouponChange();
  });

  document.getElementById('healthPedOther')?.addEventListener('input', (e) => {
    const active = getActiveMedicalMember();
    if (active) ensureMemberMedical(active).pedOtherText = e.target.value;
  });

  const bumpCheckoutCta = () => syncCheckoutFieldUi();
  document.getElementById('checkoutProposerName')?.addEventListener('input', (e) => {
    checkoutForm.proposerName = e.target.value;
    bumpCheckoutCta();
  });
  document.getElementById('checkoutNominee')?.addEventListener('input', (e) => {
    checkoutForm.nominee = e.target.value;
    bumpCheckoutCta();
  });
  document.getElementById('checkoutNomineeDob')?.addEventListener('change', (e) => {
    checkoutForm.nomineeDob = e.target.value;
    bumpCheckoutCta();
  });
  document.querySelectorAll('[id^="insuredName-"]').forEach((el) => {
    el.addEventListener('input', () => {
      const id = el.id.replace('insuredName-', '');
      const m = quoteForm.health.members.find((x) => x.id === id);
      if (m) m.fullName = el.value;
      bumpCheckoutCta();
    });
  });
  document.querySelectorAll('[id^="insuredDob-"]').forEach((el) => {
    el.addEventListener('change', () => {
      const id = el.id.replace('insuredDob-', '');
      const m = quoteForm.health.members.find((x) => x.id === id);
      if (m) m.dob = el.value;
      bumpCheckoutCta();
    });
  });
  document.getElementById('checkoutPan')?.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    checkoutForm.pan = e.target.value;
    bumpCheckoutCta();
  });
  document.getElementById('checkoutDeclaration')?.addEventListener('change', (e) => {
    checkoutForm.declaration = e.target.checked;
    if (wizardState?.declarationError) wizardState.declarationError = '';
    bumpCheckoutCta();
  });
  syncCheckoutFieldUi();

  document.getElementById('couponInput')?.addEventListener('input', (e) => {
    couponInput = e.target.value;
    if (couponFieldError) {
      couponFieldError = '';
      renderPreserveScroll();
    }
  });

  document.querySelectorAll('.chip-group .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const g = chip.closest('.chip-group');
      if (g.id === 'membersChips') chip.classList.toggle('selected');
      else { g.querySelectorAll('.chip').forEach(c => c.classList.remove('selected')); chip.classList.add('selected'); }
    });
  });

  document.querySelectorAll('[data-addon]').forEach(el => {
    el.addEventListener('click', () => {
      const k = el.dataset.addon;
      if (k === 'opd') healthAddons.opd = !healthAddons.opd;
      else if (k === 'maternity') healthAddons.maternity = !healthAddons.maternity;
      else if (k === 'critical') healthAddons.critical = !healthAddons.critical;
      renderPreserveScroll();
    });
  });

  document.querySelectorAll('[data-motor-addon]').forEach((el) => {
    el.addEventListener('click', () => {
      const k = el.dataset.motorAddon;
      if (k && Object.prototype.hasOwnProperty.call(motorAddons, k)) {
        motorAddons[k] = !motorAddons[k];
        renderPreserveScroll();
      }
    });
  });

  document.querySelectorAll('[data-setting]').forEach((el) => {
    el.addEventListener('click', () => toggleAppSetting(el.dataset.setting));
  });
  document.querySelectorAll('[data-action="privacy-policy"]').forEach((el) => {
    el.addEventListener('click', () => {
      accountPrivacyNotice = 'Our privacy policy is available on our website.';
      render();
    });
  });

  document.querySelectorAll('.tab').forEach(el => {
    el.addEventListener('click', () => { policyTab = el.dataset.tab; render(); });
  });

  document.querySelectorAll('[data-action="delete-saved-quote"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.quoteId;
      const idx = savedQuotes.findIndex((q) => q.id === id);
      if (idx === -1) return;
      savedQuotes.splice(idx, 1);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll('[data-trending]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const next = el.dataset.trending;
      if (!next || next === homeTrendingTab) return;
      homeTrendingTab = next;
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll('[data-explain]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.explain;
      openExplainId = openExplainId === id ? null : id;
      render();
    });
  });

  document.querySelectorAll('[data-action="open-ai"]').forEach(el => {
    el.addEventListener('click', () => openAIPanel(el.dataset.prefill || '', el.dataset.aiMode || null));
  });
  document.querySelectorAll('[data-action="finder-start"]').forEach(el => {
    el.addEventListener('click', () => openAIPanel('', 'finder', el.dataset.finderProtect));
  });
  document.querySelectorAll('[data-jtbd]').forEach(el => {
    el.addEventListener('click', () => handleJTBDStep(el.dataset.jtbd));
  });
  document.querySelectorAll('[data-action="expert-modal"]').forEach(el => {
    el.addEventListener('click', () => openExpertModal(false, el));
  });
  document.querySelectorAll('[data-action="open-renewals"]').forEach((el) => {
    el.addEventListener('click', () => openRenewals());
  });
  document.querySelectorAll('[data-action="renew-policy"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      startRenewal(el.dataset.policy);
    });
  });
  document.querySelector('[data-action="renew-lookup"]')?.addEventListener('click', () => {
    const q = (document.getElementById('renewLookupInput')?.value || '').trim().toUpperCase();
    const match = policies.find((p) =>
      p.policyNo.toUpperCase().includes(q) || p.name.toUpperCase().includes(q));
    if (match) {
      renewLookupError = '';
      startRenewal(match.id);
    } else {
      renewLookupError = 'No saved policy found. Try your policy or vehicle number.';
      render();
    }
  });
  document.getElementById('renewLookupInput')?.addEventListener('input', () => {
    if (renewLookupError) {
      renewLookupError = '';
      render();
    }
  });

  document.querySelectorAll('[data-action="open-policy-detail"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openPolicyDetail(el.dataset.policy);
    });
  });
  document.querySelectorAll('[data-action="open-policy-doctor"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openPolicyDoctor(el.dataset.policy || null);
    });
  });
  document.querySelectorAll('[data-action="open-claim-detail"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.dataset.claim;
      if (!id) return;
      openClaimDetail(id);
    });
  });
  document.querySelectorAll('[data-action="open-claim-start"]').forEach((el) => {
    el.addEventListener('click', () => openClaimStart());
  });
  document.querySelectorAll('[data-action="claim-start-back"]').forEach((el) => {
    el.addEventListener('click', claimStartBack);
  });
  document.querySelectorAll('[data-action="claim-start-next"]').forEach((el) => {
    el.addEventListener('click', claimStartNext);
  });
  document.querySelectorAll('[data-claim-start-policy]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!claimStartState) return;
      claimStartState.policyId = btn.dataset.claimStartPolicy;
      claimStartState.formError = '';
      const pol = getPolicyById(claimStartState.policyId);
      claimStartState.claimType = pol?.product === 'motor' ? 'own_damage' : 'cashless';
      render();
    });
  });
  document.querySelectorAll('[data-claim-start-type]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!claimStartState) return;
      claimStartState.claimType = btn.dataset.claimStartType;
      render();
    });
  });
  document.querySelectorAll('[data-action="claim-start-toggle-doc"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!claimStartState) return;
      const id = btn.dataset.doc;
      claimStartState.checked[id] = !claimStartState.checked[id];
      render();
    });
  });
  document.getElementById('hospitalSearch')?.addEventListener('input', (e) => {
    hospitalSearchQuery = e.target.value;
    render();
  });
  document.getElementById('policySearch')?.addEventListener('input', (e) => {
    policySearchQuery = e.target.value;
    render();
  });
  document.querySelectorAll('[data-action="open-cases"]').forEach((el) => {
    el.addEventListener('click', () => openCasesList());
  });
  document.querySelectorAll('[data-action="open-case-detail"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openCaseDetail(el.dataset.case);
    });
  });
  document.querySelectorAll('[data-action="open-case-create"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openCaseCreate(el.dataset.policy);
    });
  });
  document.querySelectorAll('[data-action="doctor-pick-policy"]').forEach((el) => {
    el.addEventListener('click', () => openPolicyDoctor(el.dataset.policy));
  });
  document.querySelectorAll('[data-action="doctor-change-policy"]').forEach((el) => {
    el.addEventListener('click', () => {
      policyDoctorState = { policyId: null, view: 'select', clauseKey: null, uploadLabel: null, uploadLoading: false };
      doctorQuestion = '';
      doctorAnswer = '';
      render();
    });
  });
  document.querySelectorAll('[data-action="doctor-back-summary"]').forEach((el) => {
    el.addEventListener('click', () => {
      policyDoctorState.view = 'summary';
      policyDoctorState.clauseKey = null;
      render();
    });
  });
  document.querySelectorAll('[data-action="doctor-view-clause"]').forEach((el) => {
    el.addEventListener('click', () => {
      policyDoctorState.clauseKey = el.dataset.clause;
      policyDoctorState.view = 'clause';
      render();
    });
  });
  document.querySelector('[data-action="doctor-ask"]')?.addEventListener('click', () => {
    doctorQuestion = document.getElementById('doctorQuestion')?.value || '';
    answerPolicyDoctorQuestion();
  });
  document.getElementById('doctorQuestion')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      doctorQuestion = e.target.value;
      answerPolicyDoctorQuestion();
    }
  });
  document.querySelector('input[data-action="doctor-upload"]')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    simulatePolicyUpload(file?.name || 'policy.pdf');
  });
  document.querySelector('[data-action="submit-case"]')?.addEventListener('click', () => {
    caseCreateDraft.policyId = document.getElementById('casePolicy')?.value || caseCreateDraft.policyId;
    caseCreateDraft.category = document.getElementById('caseCategory')?.value || caseCreateDraft.category;
    caseCreateDraft.subject = document.getElementById('caseSubject')?.value || '';
    caseCreateDraft.description = document.getElementById('caseDescription')?.value || '';
    createSupportCase();
  });
  const caseReplyInput = document.getElementById('caseReply');
  const caseReplySend = document.querySelector('[data-action="case-send-reply"]');
  const syncCaseReplySend = () => {
    if (caseReplySend && caseReplyInput) {
      caseReplySend.disabled = !caseReplyInput.value.trim();
    }
  };
  caseReplyInput?.addEventListener('input', syncCaseReplySend);
  caseReplyInput?.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.shiftKey || e.isComposing) return;
    e.preventDefault();
    if (caseReplySend && !caseReplySend.disabled) caseReplySend.click();
  });
  syncCaseReplySend();
  document.querySelectorAll('[data-action="case-send-reply"]').forEach((el) => {
    el.addEventListener('click', () => {
      const text = document.getElementById('caseReply')?.value || '';
      addCaseMessage(el.dataset.case, text);
      const ta = document.getElementById('caseReply');
      if (ta) ta.value = '';
      syncCaseReplySend();
    });
  });
  document.querySelectorAll('input[data-action="case-upload"]').forEach((input) => {
    input.addEventListener('change', () => {
      const c = getCaseById(input.dataset.case);
      if (c && input.files?.[0]) {
        c.attachments.push(input.files[0].name);
        c.messages.push({ from: 'you', at: '16 Sep 2026, 12:45', text: `Uploaded: ${input.files[0].name}`});
        render();
      }
    });
  });
  document.querySelectorAll('[data-action="escalate-case"]').forEach((el) => {
    el.addEventListener('click', () => escalateCase(el.dataset.case));
  });
  document.querySelectorAll('[data-action="toggle-claim-doc"]').forEach((el) => {
    el.addEventListener('click', () => toggleClaimDoc(el.dataset.claim, el.dataset.doc));
  });
}

/* AI Assistant — 6 capabilities */
const AI_MODES = [
  { id: 'finder', icon: 'search', en: 'Policy Finder', desc: '5 questions → personalised match' },
  { id: 'compare', icon: 'compare', en: 'Comparison', desc: 'Plan differences in plain English' },
  { id: 'explainer', icon: 'book', en: 'Policy Explainer', desc: 'Insurance terms simplified' },
  { id: 'chat', icon: 'chat', en: 'Chat', desc: 'Ask about your coverage' },
  { id: 'claim', icon: 'claim', en: 'Claim Assistant', desc: 'Steps & documents guide' },
  { id: 'manage', icon: 'folder', en: 'Manage Policies', desc: 'Renew, track, download' },
];

function daysUntilRenewal(iso) {
  const today = new Date();
  const renew = new Date(iso);
  return Math.ceil((renew - today) / (1000 * 60 * 60 * 24));
}

function formatHeroRenewChip(days) {
  if (days <= 0) return 'Renew now';
  if (days === 1) return 'Due tomorrow';
  if (days <= 7) return `${days} days left`;
  if (days <= 30) return `Due in ${days} days`;
  return `Renew in ${days}d`;
}

function policyCardRenewalMeta(daysLeft) {
  if (daysLeft < 0) {
    const overdue = Math.abs(daysLeft);
    return {
      chipClass: 'status--renew',
      chipLabel: 'Renew overdue',
      dateLead: 'Renewal was',
      daysPill: `${overdue}d overdue`,
      daysModifier: 'policy-renewal-row__pill--overdue',
      renewSoon: true,
    };
  }
  if (daysLeft === 0) {
    return {
      chipClass: 'status--renew',
      chipLabel: 'Due today',
      dateLead: 'Renews',
      daysPill: 'Due today',
      daysModifier: 'policy-renewal-row__pill--urgent',
      renewSoon: true,
    };
  }
  if (daysLeft <= 30) {
    return {
      chipClass: 'status--renew',
      chipLabel: daysLeft <= 7 ? 'Renew soon' : 'Renews soon',
      dateLead: 'Renews',
      daysPill: `${daysLeft}d left`,
      daysModifier: 'policy-renewal-row__pill--urgent',
      renewSoon: true,
    };
  }
  return {
    chipClass: 'status--active',
    chipLabel: 'Active',
    dateLead: 'Renews',
    daysPill: daysLeft <= 90 ? `${daysLeft}d left` : '',
    daysModifier: '',
    renewSoon: false,
  };
}

function formatAIText(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function cannotConfirmCoverage() {
  return {
    text: t('ai.cannotConfirm'),
    actions: [
      { label: t('ai.expertHandoff'), action: 'open-expert-from-ai', primary: true },
    ],
    skipCoverageGuard: true,
  };
}

function isCoverageAssertion(msg) {
  if (!msg || msg.skipCoverageGuard) return false;
  if (msg.source?.plan && msg.source?.section) return false;
  if (msg.comparison) return true;
  if (msg.recommendations?.length) return true;
  if (msg.list?.some((item) => /✓|included|not covered|own damage|third.party|cashless|restoration|opd/i.test(item))) return true;
  const text = (msg.text || '').toLowerCase();
  return /\b(covers |cover includes|is covered|are covered|includes |included |not covered)\b/.test(text);
}

function guardBotMessage(msg) {
  if (!msg) return msg;
  if (msg.skipCoverageGuard || (msg.source?.plan && msg.source?.section)) return msg;
  if (isCoverageAssertion(msg)) return cannotConfirmCoverage();
  return msg;
}

function pushBotMessage(msg) {
  aiMessages.push({ role: 'bot', ...guardBotMessage(msg) });
  renderAIMessages();
}

function resetAIMode() {
  aiMode = null;
  aiFinderStep = 'protect';
  aiFinderData = {};
  aiClaimStep = 0;
  aiClaimData = {};
  renderAIFinderProgress();
  renderAIModePicker();
  renderAISuggestions();
}

function getAIModeMeta(id) {
  return AI_MODES.find(m => m.id === id) || AI_MODES[3];
}

function renderAIModePicker() { /* simplified — no mode bar */ }
function renderAIModeBadge() { /* simplified — no mode badge */ }

function renderAIActions(actions) {
  if (!actions?.length) return '';
  return `<div class="ai-actions">${actions.map(a =>
    `<button type="button" class="ai-action-btn ${a.primary ? 'ai-action-btn--primary' : ''}" data-ai-action="${a.action}" ${Object.entries(a.data || {}).map(([k, v]) => `data-${k}="${v}"`).join(' ')}>${a.label}</button>`
  ).join('')}</div>`;
}

function renderAIMessageHTML(m) {
  let html = m.html || (m.role === 'user'
    ? esc(m.text || '').replace(/\n/g, '<br>')
    : formatAIText(m.text || ''));
  if (m.list) html += `<ul class="ai-list">${m.list.map(i => `<li>${i}</li>`).join('')}</ul>`;
  if (m.comparison) {
    html += `<div class="ai-compare-table"><table><thead><tr><th></th>${m.comparison.plans.map(p => `<th>${p.name}</th>`).join('')}</tr></thead><tbody>
      ${m.comparison.rows.map(r => `<tr><td>${r.label}</td>${r.values.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}
    </tbody></table></div>`;
  }
  if (m.renewals) {
    html += m.renewals.map(p => {
      const days = daysUntilRenewal(p.renewalISO);
      const urgent = days <= 14;
      return `<div class="ai-renewal-card ${urgent ? 'ai-renewal-card--urgent' : ''}">
        <div class="ai-renewal-card__head"><strong>${p.type}</strong> · ${p.insurer}
          <span class="ai-renewal-card__days">${days <= 0 ? ('Today!') : (`${days} days`)}</span></div>
        <div class="ai-renewal-card__meta">${p.name} · ${p.premium} · Renews ${p.renewal}</div>
        <div class="ai-renewal-card__alert">${renewalAlerts[p.id] ? ('🔔 Reminder on') : ('Reminder off')}</div>
        <div class="ai-actions">
          <button type="button" class="ai-action-btn" data-ai-action="toggle-renewal" data-policy="${p.id}">${renewalAlerts[p.id] ? ('Turn off') : ('Set reminder')}</button>
          <button type="button" class="ai-action-btn ai-action-btn--primary" data-ai-action="renew-quote" data-product="${p.product}">Compare & renew</button>
        </div>
      </div>`;
    }).join('');
  }
  if (m.card) html += `<div class="ai-result-card"><strong>${m.card.type}</strong> · ${m.card.name}<br><small>${m.card.sumInsured || ''}</small></div>`;
  if (m.actions) html += renderAIActions(m.actions);
  if (m.productPicks?.length) {
    html += `<div class="ai-product-picks" role="group" aria-label="${t('ai.pickProduct')}">${m.productPicks.map((p) =>
      `<button type="button" class="ai-product-pick" data-ai-action="finder-protect" data-value="${esc(p.value)}">${esc(p.label)}</button>`
    ).join('')}</div>`;
  }
  if (m.chips) {
    html += `<div class="ai-chips">${m.chips.map(c =>
      `<button type="button" class="ai-chip" data-ai-action="explain-term" data-term="${c.term}">${c.label}</button>`
    ).join('')}</div>`;
  }
  if (m.recommendations) {
    const r = m.recommendations[0];
    if (r) {
      html += `<div class="ai-rec-simple">
        <div class="ai-rec-simple__logo" style="background:${insurerColor(r.plan.insurer)}">${insurerInitials(r.plan.insurer)}</div>
        <div class="ai-rec-simple__body">
          <div class="ai-rec-simple__name">${r.plan.insurer} · ${r.plan.plan || 'Comprehensive'}</div>
          <div class="ai-rec-simple__price">${formatPremium(r.plan.premium)}<span>/yr</span></div>
          <div class="ai-rec-simple__why">${r.why}</div>
        </div>
      </div>`;
    }
  }
  if (m.source?.plan && m.source?.section) {
    html += `<p class="ai-msg-source"><span class="ai-msg-source__label">${t('ai.sourceLabel')}:</span> ${m.source.plan} — <em>${m.source.section}</em></p>`;
  }
  if (m.thinking) html = `<div class="ai-thinking"><span></span><span></span><span></span></div>${html}`;
  return html;
}

function syncAIPanelChrome() {
  const panel = document.getElementById('aiPanel');
  const subtitle = panel?.querySelector('.ai-panel__subtitle');
  if (subtitle) {
    subtitle.textContent = aiMode === 'finder' ? t('ai.subtitleFinder') : t('ai.subtitle');
  }
  panel?.classList.toggle('ai-panel--finder', aiMode === 'finder' && aiFinderStep === 'protect');
}

function renderAIMessages() {
  const c = document.getElementById('aiMessages');
  if (!c) return;
  renderAIModeBadge();
  renderAIFinderProgress();
  syncAIPanelChrome();
  if (!aiMessages.length) {
    c.innerHTML = `<div class="ai-welcome" role="status">
      <p class="ai-welcome__title">${t('ai.welcomeTitle')}</p>
      <p class="ai-welcome__hint">${t('ai.welcomeHint')}</p>
      <p class="ai-welcome__topics-label" id="aiSuggestionsLabelWelcome">${t('ai.quickTopics')}</p>
      <div class="ai-welcome__suggestions" id="aiSuggestionsWelcome" role="group" aria-labelledby="aiSuggestionsLabelWelcome"></div>
    </div>`;
  } else {
    c.innerHTML = aiMessages.map(m => `<div class="ai-msg ai-msg--${m.role}">${renderAIMessageHTML(m)}</div>`).join('');
    c.scrollTop = c.scrollHeight;
  }
  renderAISuggestions();
}

function lastBotMessage() {
  for (let i = aiMessages.length - 1; i >= 0; i -= 1) {
    if (aiMessages[i].role === 'bot') return aiMessages[i];
  }
  return null;
}

function shouldShowAISuggestions() {
  if (aiMode === 'finder' && aiFinderStep === 'protect') return false;
  if (aiMode === 'explainer') return false;
  const last = lastBotMessage();
  if (last?.actions?.length || last?.chips?.length) return false;
  if (!aiMessages.length) return true;
  if (aiMode === 'chat' || !aiMode) return true;
  return false;
}

function renderAISuggestions() {
  const show = shouldShowAISuggestions();
  const inWelcome = !aiMessages.length;
  const wrap = document.getElementById('aiSuggestionsWrap');
  const c = inWelcome
    ? document.getElementById('aiSuggestionsWelcome')
    : document.getElementById('aiSuggestionsFooter');
  const labelEl = inWelcome
    ? document.getElementById('aiSuggestionsLabelWelcome')
    : document.getElementById('aiSuggestionsLabelFooter');
  if (wrap) wrap.hidden = inWelcome || !show;
  if (!c) return;

  const showChips = inWelcome || show;
  if (labelEl && showChips) labelEl.textContent = t('ai.quickTopics');

  if (!showChips) {
    c.innerHTML = '';
    c.className = inWelcome ? 'ai-welcome__suggestions' : 'ai-panel__suggestion-grid';
    return;
  }

  const suggestionKeys = AI_CHAT_SUGGESTIONS.slice(0, 4);
  const chatLabels = {
    'ai.suggest.health': 'Health plans',
    'ai.suggest.motor': 'Motor cover',
    'ai.suggest.compare': 'Compare plans',
    'ai.suggest.waiting': 'Waiting periods',
    'ai.suggest.cashless': 'Cashless help',
    'ai.suggest.claimHelp': 'Claim documents',
    'ai.suggest.term': 'Term life',
    'ai.suggest.home': 'Home cover',
  };
  c.className = inWelcome ? 'ai-welcome__suggestions' : 'ai-panel__suggestion-grid';

  c.innerHTML = suggestionKeys.map((key) => {
    const label = chatLabels[key] || t(key);
    return `<button type="button" class="ai-suggest-chip" data-suggestion-key="${key}">${esc(label)}</button>`;
  }).join('');
}

function startAIMode(mode, clearMessages = true) {
  aiMode = mode;
  if (clearMessages) aiMessages = [];
  const meta = getAIModeMeta(mode);

  if (mode === 'finder') {
    aiFinderStep = 'protect';
    aiFinderData = {};
    pushFinderQuestion();
  } else if (mode === 'compare') {
    const compareProduct = compareContextProduct();
    const compared = resolveComparePlans(compareProduct);
    if (compared.length >= 2) pushBotMessage(getAICompareResult(compared, compareProduct));
    else pushBotMessage({
      text: '**AI Comparison** — plan differences in plain language.',
      actions: [
        { label: 'Star vs Care', action: 'compare-preset', data: { a: 'star-comp', b: 'care-supreme' }, primary: true },
        { label: 'Cheapest vs best', action: 'compare-preset', data: { a: 'niva-reassure', b: 'star-comp' } },
      ],
    });
  } else if (mode === 'explainer') {
    pushBotMessage({
      text: '**Policy Explainer** — complicated terms, simple language. Pick a term or type one.',
      chips: [
        { term: 'co-pay', label: 'Co-pay'},
        { term: 'sum insured', label: 'Sum insured'},
        { term: 'ncb', label: 'NCB' },
        { term: 'idv', label: 'IDV' },
        { term: 'cashless', label: 'Cashless'},
        { term: 'waiting period', label: 'Waiting period'},
        { term: 'portability', label: 'Portability'},
        { term: 'zero dep', label: 'Zero dep' },
      ],
    });
  } else if (mode === 'chat') {
    pushBotMessage({
      text: '**Chat Assistant** — ask things like "What does my policy cover?"',
      skipCoverageGuard: true,
    });
  } else if (mode === 'claim') {
    aiClaimStep = 0;
    aiClaimData = {};
    pushBotMessage({
      text: '**Claim Assistant** — I\'ll guide you through the process and required documents.',
      actions: [
        { label: 'Health claim', action: 'claim-type', data: { value: 'health' }, primary: true},
        { label: 'Motor claim', action: 'claim-type', data: { value: 'motor' } },
      ],
    });
  } else if (mode === 'manage' || mode === 'renewal') {
    const sorted = [...policies].sort((a, b) => daysUntilRenewal(a.renewalISO) - daysUntilRenewal(b.renewalISO));
    pushBotMessage({
      text: '**Manage policies** — renewals, coverage & claims in one place:',
      skipCoverageGuard: true,
      renewals: sorted,
      list: policies.flatMap(p => [`**${p.type}** — ${p.insurer} · Renews ${p.renewal}`]),
      actions: [
        { label: 'Enable all reminders', action: 'renewal-all-on' },
        { label: 'Claim assistant', action: 'start-mode', data: { mode: 'claim' } },
        { label: 'My policies', action: 'go-policies', primary: true },
      ],
    });
  }
  renderAIModePicker();
  renderAISuggestions();
}

function getAICompareResult(plans, product = 'health') {
  if (plans.length < 2) {
    if (product === 'term') {
      plans = termPlans.slice(0, 2);
    } else if (product === 'home') {
      plans = homePlans.slice(0, 2);
    } else {
      const s = healthPlans.find(p => p.insurer === 'Star Health');
      const c = healthPlans.find(p => p.insurer === 'Care Health');
      plans = [s, c];
    }
  }
  const pair = plans.slice(0, 2);
  const premiumAt = (p) => (product === 'health' ? p.premium : quotePremiumForPlan(p, product));

  let summary;
  let comparisonRows;
  if (product === 'term') {
    summary = `**${pair[0].insurer}** vs **${pair[1].insurer}** — key differences:\n\n• Premium: ${formatPremium(premiumAt(pair[0]))} vs ${formatPremium(premiumAt(pair[1]))} (${formatPremium(Math.abs(premiumAt(pair[0]) - premiumAt(pair[1])))} gap)\n• Life cover: ₹${pair[0].cover}L vs ₹${pair[1].cover}L\n• Claim settlement: ${pair[0].claims}% vs ${pair[1].claims}%\n\n**Verdict:** ${premiumAt(pair[0]) < premiumAt(pair[1]) ? pair[0].insurer + ' is cheaper' : pair[1].insurer + ' is cheaper'}. ${pair[0].claims >= pair[1].claims ? pair[0].insurer + ' has a stronger claims record.' : pair[1].insurer + ' has a stronger claims record.'}`;
    comparisonRows = [
      { label: 'Premium', values: pair.map((p) => formatPremium(premiumAt(p)) + '/yr') },
      { label: 'Life cover', values: pair.map((p) => `₹${p.cover}L`) },
      { label: 'Tenure', values: pair.map((p) => `${p.tenure} yrs`) },
      { label: 'Claims %', values: pair.map((p) => `${p.claims}%`) },
    ];
  } else if (product === 'home') {
    summary = `**${pair[0].insurer}** vs **${pair[1].insurer}** — key differences:\n\n• Premium: ${formatPremium(premiumAt(pair[0]))} vs ${formatPremium(premiumAt(pair[1]))}\n• Structure: ₹${pair[0].structure}L vs ₹${pair[1].structure}L\n• Contents: ₹${pair[0].contents}L vs ₹${pair[1].contents}L\n\n**Verdict:** ${premiumAt(pair[0]) < premiumAt(pair[1]) ? pair[0].insurer + ' costs less' : pair[1].insurer + ' costs less'}.`;
    comparisonRows = [
      { label: 'Premium', values: pair.map((p) => formatPremium(premiumAt(p)) + '/yr') },
      { label: 'Structure', values: pair.map((p) => `₹${p.structure}L`) },
      { label: 'Contents', values: pair.map((p) => `₹${p.contents}L`) },
      { label: 'Earthquake', values: pair.map((p) => (p.eq ? '✓' : '✗')) },
    ];
  } else {
    summary = `**${pair[0].insurer}** vs **${pair[1].insurer}** — key differences:\n\n• Premium: ${formatPremium(pair[0].premium)} vs ${formatPremium(pair[1].premium)} (${formatPremium(Math.abs(pair[0].premium - pair[1].premium))} gap)\n• Claims: ${pair[0].claims}% vs ${pair[1].claims}%\n• Hospitals: ${pair[0].hospitals.toLocaleString()}+ vs ${pair[1].hospitals.toLocaleString()}+\n\n${pair[0].restoration ? `✓ ${pair[0].insurer} has sum insured restoration` : ''}${pair[1].opd ? `\n✓ ${pair[1].insurer} includes OPD cover` : ''}\n\n**Verdict:** ${pair[0].premium < pair[1].premium ? pair[0].insurer + ' saves money' : pair[1].insurer + ' saves money'}. ${pair[0].claims >= pair[1].claims ? pair[0].insurer + ' has stronger claims record.' : pair[1].insurer + ' has stronger claims record.'}`;
    comparisonRows = [
      { label: 'Premium', values: pair.map((p) => formatPremium(p.premium) + '/yr') },
      { label: 'Sum insured', values: pair.map((p) => `₹${p.si}L`) },
      { label: 'Claims %', values: pair.map((p) => p.claims + '%') },
      { label: 'Co-pay', values: pair.map((p) => p.copay) },
      { label: 'OPD', values: pair.map((p) => (p.opd ? '✓' : '✗')) },
      { label: 'Restoration', values: pair.map((p) => (p.restoration ? '✓' : '✗')) },
    ];
  }

  const cheaperId = premiumAt(pair[0]) < premiumAt(pair[1]) ? pair[0].id : pair[1].id;

  return {
    text: summary,
    source: {
      plan: pair.map((p) => `${p.insurer}${p.plan ? ` — ${p.plan}` : ''}`).join(' vs '),
      section: 'Plan compare — indicative attributes (app listing)',
    },
    comparison: {
      plans: pair.map((p) => ({ name: p.insurer })),
      rows: comparisonRows,
    },
    actions: pair.map((p) => ({
      label: `Buy ${p.insurer}`,
      action: 'buy-from-ai',
      data: { plan: p.id, product },
      primary: p.id === cheaperId,
    })),
  };
}

function getAIExplainer(term) {
  const key = term.toLowerCase().replace(/[?]/g, '').trim();
  const match = Object.keys(AI_TERM_GLOSSARY).find(k => key.includes(k));
  if (match) {
    const g = AI_TERM_GLOSSARY[match];
    return { text: `**${match.charAt(0).toUpperCase() + match.slice(1)}**\n\n${g}`, skipCoverageGuard: true };
  }
  return { text: `No definition found for "${term}". Try: co-pay, NCB, IDV, cashless.`, skipCoverageGuard: true };
}

function getAIPolicyCoverage() {
  const section = 'My Policies — benefits summary (in app)';
  const planLabel = policies.map((p) => `${p.insurer} — ${p.name}`).join('; ');
  return {
    text: '**Your active policies:**',
    list: policies.flatMap(p => [
      `**${p.type} — ${p.insurer}** (${p.name}): ${p.sumInsured}`,
      ...(p.coverage || []).map(c => `  ✓ ${c}`),
    ]),
    source: { plan: planLabel, section },
    actions: [
      { label: 'File a claim', action: 'start-mode', data: { mode: 'claim' } },
      { label: 'Manage policies', action: 'start-mode', data: { mode: 'manage' } },
    ],
  };
}

function getAIProductCoverageGuide(product) {
  const owned = policies.find((p) => p.product === product);
  if (owned) {
    const section = 'My Policies — benefits summary (in app)';
    return {
      text: `**${owned.type} — ${owned.insurer}**`,
      list: (owned.coverage || []).map((c) => `✓ ${c}`),
      source: { plan: `${owned.insurer} — ${owned.name}`, section },
      actions: [
        { label: 'My policies', action: 'go-policies', primary: true },
        { label: t('ai.expertHandoff'), action: 'open-expert-from-ai' },
      ],
    };
  }

  let plan;
  let section;
  let list = [];
  if (product === 'health') {
    plan = healthPlans[0];
    section = 'Plan card — coverage highlights';
    list = [
      `Sum insured ₹${plan.si}L`,
      `Claim settlement ${plan.claims}% (indicative)`,
      plan.opd ? ('OPD cover (plan-dependent)') : ('OPD — check plan schedule'),
      plan.restoration ? ('Sum insured restoration') : ('Restoration — check plan schedule'),
    ];
  } else if (product === 'motor') {
    plan = motorPlans[0];
    section = 'Plan card — coverage highlights';
    list = [
      `IDV ${formatPremium(plan.idv)} (indicative)`,
      plan.zeroDep ? ('Zero depreciation included') : ('Zero dep — optional add-on'),
      'Third-party liability (legal minimum)',
      'Own damage (on comprehensive plans)',
    ];
  } else if (product === 'term') {
    plan = termPlans[0];
    section = 'Plan card — benefit summary';
    list = [
      (() => {
        const coverVal = plan.cover || plan.si || 50;
        return coverVal >= 100 ? `Target cover ₹${coverVal / 100} Cr` : `Target cover ₹${coverVal}L`;
      })(),
      'Death benefit (term — not an investment)',
      'Optional critical illness add-on (plan-dependent)',
    ];
  } else if (product === 'home') {
    plan = homePlans[0];
    if (!plan) return cannotConfirmCoverage();
    section = 'Plan card — coverage highlights';
    list = [
      'Structure + contents (depends on variant)',
      'Fire, theft, natural calamities (subject to policy wording)',
    ];
  } else {
    return cannotConfirmCoverage();
  }

  if (!plan) return cannotConfirmCoverage();
  const planName = `${plan.insurer}${plan.plan ? ` — ${plan.plan}` : ''}`;
  return {
    text: '**Indicative information (not your policy):**',
    list,
    source: { plan: planName, section },
    actions: [
      { label: 'See plans', action: 'quote-product', data: { product }, primary: true },
      { label: t('ai.expertHandoff'), action: 'open-expert-from-ai' },
    ],
  };
}

function getAIClaimGuide(type, method) {
  const docs = {
    'health-cashless': ['Health card / policy copy', 'Aadhaar / photo ID', 'Doctor\'s prescription', 'Pre-auth form at hospital TPA desk'],
    'health-reimbursement': ['Filled claim form', 'Discharge summary', 'All hospital bills (originals)', 'Pharmacy bills', 'Doctor reports', 'Cancelled cheque / bank details'],
    'motor-cashless': ['RC & driving licence', 'Policy copy', 'Photos of damage', 'Surveyor inspection at cashless garage'],
    'motor-reimbursement': ['RC, DL, policy', 'FIR (theft/third-party cases)', 'Repair estimate / bills', 'Damage photos', 'Claim form'],
  };
  const key = `${type}-${method}`;
  const steps = ['Intimate claim (app / helpline)', method === 'cashless' ? 'Choose network hospital/garage' : 'Complete treatment/repair', 'Submit documents', 'TPA/surveyor review (2–5 days)', 'Settlement'];

  return {
    text: `**${type === 'health' ? 'Health' : 'Motor'} — ${method} claim guide**`,
    skipCoverageGuard: true,
    list: [
      ...(['**Steps:**', ...steps.map((s, i) => `${i + 1}. ${s}`), '**Documents:**']),
      ...docs[key].map(d => `📄 ${d}`),
    ],
    actions: [
      { label: 'Open claims page', action: 'go-claims', primary: true },
      { label: 'Track existing claim', action: 'track-claim' },
    ],
  };
}

function getFinderQuestionNum() {
  if (aiFinderStep === 'protect') return 1;
  if (aiFinderStep === 'priority') return 2;
  return 3;
}

function renderAIFinderProgress() { /* simplified — no progress bar */ }

function finderUserLabel(value, field) {
  const labels = {
    protect: { myself: 'For myself', family: 'Health', vehicle: 'Motor', home: 'Home', term: 'Term life', business: 'Business'},
    context: { '18-30': '18–30', '31-45': '31–45', '46-60': '46–60', '60+': '60+', '2': '2 members', '3-4': '3–4 members', '5+': '5+ members', car: 'Car', bike: 'Bike', comprehensive: 'Comprehensive', tp: 'Third party', own: 'Owned', rent: 'Rented', both: 'Structure + contents', structure: 'Structure only', shop: 'Shop', office: 'Office'},
    budget: { '5l': '₹5L', '10l': '₹10L', '15l': '₹15L', '25l+': '₹25L+', low: 'Budget-friendly', mid: 'Balanced', high: 'Full coverage'},
    priority: { price: 'Lowest price', coverage: 'Best coverage', claims: 'Fast claims'},
    existing: { new: 'New policy', port: 'Want to port', renew: 'Renewing soon'},
  };
  return labels[field]?.[value] || value;
}

function pushFinderQuestion() {
  const p = aiFinderData.protect;

  if (aiFinderStep === 'protect') {
    pushBotMessage({
      text: '**Policy finder** — What type of insurance do you need?',
      skipCoverageGuard: true,
      productPicks: [
        { label: 'Health', value: 'family' },
        { label: 'Motor', value: 'vehicle' },
        { label: 'Term life', value: 'term' },
        { label: 'Home', value: 'home' },
      ],
    });
  }
}

function processFinderProtect(value) {
  aiFinderData.protect = value;
  aiFinderData.budget = value === 'family' || value === 'myself' || value === 'term' ? '10l' : value === 'vehicle' ? 'comprehensive' : 'both';
  aiFinderData.priority = 'coverage';
  aiFinderStep = 'result';
  showFinderThinkingThenResult();
}

function showFinderThinkingThenResult() {
  pushBotMessage({ text: 'Finding your best match...', thinking: true });
  setTimeout(() => {
    aiMessages = aiMessages.filter(m => !m.thinking);
    pushBotMessage(buildFinderResultMessage());
    renderAIFinderProgress();
  }, 1200);
}

function getFinderPlanPool() {
  const { protect, priority, budget, context } = aiFinderData;
  let product = 'health';
  let plans = [];

  if (protect === 'vehicle') {
    product = 'motor';
    plans = [...motorPlans];
    if (budget === 'tp') plans = plans.filter(p => !p.zeroDep);
    if (priority === 'price') plans.sort((a, b) => a.premium - b.premium);
    else if (priority === 'claims') plans.sort((a, b) => (b.zeroDep ? 1 : 0) - (a.zeroDep ? 1 : 0) || b.ncb - a.ncb);
    else plans.sort((a, b) => (b.zeroDep ? 1 : 0) - (a.zeroDep ? 1 : 0) || a.premium - b.premium);
  } else if (protect === 'home') {
    product = 'home';
    plans = [...(PLAN_DATA.home || [])];
    if (priority === 'price') plans.sort((a, b) => a.premium - b.premium);
    else plans.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (protect === 'term') {
    product = 'term';
    plans = [...termPlans];
    if (priority === 'price') plans.sort((a, b) => a.premium - b.premium);
    else plans.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (protect === 'business') {
    return { product: null, plans: [] };
  } else {
    product = 'health';
    plans = [...healthPlans];
    if (budget === '5l') plans = plans.filter(p => p.si <= 5);
    else if (budget === '10l') plans = plans.filter(p => p.si >= 5 && p.si <= 10);
    else if (budget === '15l') plans = plans.filter(p => p.si >= 10 && p.si <= 15);
    else if (budget === '25l+') plans = plans.filter(p => p.si >= 15);
    if (protect === 'myself' && context === '60+') plans = plans.filter(p => p.copay !== '0%');
    if (priority === 'price') plans.sort((a, b) => a.premium - b.premium);
    else if (priority === 'claims') plans.sort((a, b) => b.claims - a.claims);
    else plans.sort((a, b) => b.rating - a.rating);
  }
  return { product, plans: plans.length ? plans : (product === 'motor' ? motorPlans : healthPlans) };
}

function getFinderWhy(plan, product, rank) {
  const { priority, protect, existing } = aiFinderData;
  if (product === 'health') {
    if (priority === 'price') return `Lowest premium in your budget — ₹${plan.si}L cover, ${plan.claims}% claim settlement.`;
    if (priority === 'claims') return `${plan.claims}% claim settlement — among the best in India.`;
    return `${plan.hospitals.toLocaleString()}+ cashless hospitals, ${plan.roomRent} room rent.`;
  }
  if (product === 'motor') return `IDV ${formatPremium(plan.idv)}, ${plan.ncb}% NCB${plan.zeroDep ? ', zero dep included' : ''}.`;
  return `${plan.insurer} — ${plan.plan} at ${formatPremium(plan.premium)}/yr.`;
}

function buildFinderResultMessage() {
  const { product, plans } = getFinderPlanPool();
  const top = plans[0];
  if (!top) return { text: 'No plans found.'};

  const planName = `${top.insurer}${top.plan ? ` — ${top.plan}` : ''}`;
  return {
    text: '**My recommendation:**',
    recommendations: [{
      plan: top, product,
      why: getFinderWhy(top, product, 0),
    }],
    source: {
      plan: planName,
      section: 'Policy finder — plan highlights',
    },
    actions: ['health', 'motor', 'term', 'home'].includes(product) ? [
      { label: 'See all plans', action: 'quote-product', data: { product }, primary: true },
    ] : [],
  };
}

function startFinderWithProtect(protect) {
  aiMode = 'finder';
  aiMessages = [];
  processFinderProtect(protect);
  renderAIMessages();
  renderAISuggestions();
}

function handleAIAction(action, dataset) {
  if (action === 'reset-mode') { aiMessages = []; resetAIMode(); renderAIMessages(); return; }
  if (action === 'start-mode') { startAIMode(dataset.mode); return; }
  if (action === 'finder-protect') {
    aiMessages.push({ role: 'user', text: finderUserLabel(dataset.value, 'protect') });
    renderAIMessages();
    processFinderProtect(dataset.value);
    renderAIFinderProgress();
    renderAISuggestions();
    return;
  }
  if (action === 'finder-priority') {
    aiMessages.push({ role: 'user', text: finderUserLabel(dataset.value, 'priority') });
    renderAIMessages();
    processFinderPriority(dataset.value);
    renderAIFinderProgress();
    return;
  }
  if (action === 'finder-compare-top') {
    const findPlan = (id) => healthPlans.find((p) => p.id === id)
      || motorPlans.find((p) => p.id === id)
      || termPlans.find((p) => p.id === id)
      || homePlans.find((p) => p.id === id);
    const a = findPlan(dataset.a);
    const b = findPlan(dataset.b);
    const refId = String(dataset.a || dataset.b || '');
    let inferredProduct = 'health';
    if (refId.includes('motor')) inferredProduct = 'motor';
    else if (refId.includes('term')) inferredProduct = 'term';
    else if (refId.includes('home')) inferredProduct = 'home';
    if (a && b) pushBotMessage(getAICompareResult([a, b], inferredProduct));
    return;
  }
  if (action === 'compare-preset') {
    const a = healthPlans.find(p => p.id === dataset.a);
    const b = healthPlans.find(p => p.id === dataset.b);
    if (a && b) pushBotMessage(getAICompareResult([a, b]));
    return;
  }
  if (action === 'explain-term') { pushBotMessage(getAIExplainer(dataset.term)); return; }
  if (action === 'claim-type') {
    aiClaimData.type = dataset.value;
    aiClaimStep = 1;
    pushBotMessage({
      text: 'What type of claim?',
      actions: [
        { label: 'Cashless', action: 'claim-method', data: { value: 'cashless' }, primary: true },
        { label: 'Reimbursement', action: 'claim-method', data: { value: 'reimbursement' } },
      ],
    });
    return;
  }
  if (action === 'claim-method') {
    aiClaimData.method = dataset.value;
    pushBotMessage(getAIClaimGuide(aiClaimData.type, dataset.value));
    return;
  }
  if (action === 'go-claims') { closeAIPanel(); setView('claims'); return; }
  if (action === 'go-policies') { closeAIPanel(); setView('policies'); return; }
  if (action === 'track-claim') { closeAIPanel(); setView('claims'); return; }
  if (action === 'toggle-renewal') {
    renewalAlerts[dataset.policy] = !renewalAlerts[dataset.policy];
    if (!renewalAlerts[dataset.policy]) appSettings.renewalReminders = false;
    else if (policies.every((p) => renewalAlerts[p.id])) appSettings.renewalReminders = true;
    saveAppSettings();
    startAIMode('manage', false);
    aiMessages = aiMessages.slice(0, -1);
    const sorted = [...policies].sort((a, b) => daysUntilRenewal(a.renewalISO) - daysUntilRenewal(b.renewalISO));
    pushBotMessage({ text: 'Reminder updated.', renewals: sorted });
    return;
  }
  if (action === 'renewal-all-on') {
    policies.forEach(p => { renewalAlerts[p.id] = true; });
    appSettings.renewalReminders = true;
    saveAppSettings();
    startAIMode('manage', false);
    return;
  }
  if (action === 'renew-quote') { closeAIPanel(); startQuote(dataset.product); return; }
  if (action === 'buy-from-ai') {
    closeAIPanel();
    selectedPlanId = dataset.plan;
    const prod = dataset.product || 'health';
    if (!PRODUCT_CONFIG[prod]) return;
    activeProduct = prod;
    if (prod === 'health') wizardState = { type: 'health', step: 4 };
    else if (prod === 'motor') wizardState = { type: 'motor', step: 1 };
    else wizardState = { type: prod, step: PRODUCT_CONFIG[prod]?.maxStep || 2 };
    render();
    return;
  }
  if (action === 'quote-product') { closeAIPanel(); startQuote(dataset.product); return; }
  if (action === 'open-expert-from-ai') {
    openExpertModal(false, document.getElementById('aiExpertHandoff'));
    return;
  }
  if (action === 'open-cover-guide') {
    closeAIPanel();
    openCoverGuide('term');
    return;
  }
}

function routeAIQuery(query) {
  const q = query.toLowerCase();

  if (/help me find|what insurance|which policy/.test(q)) {
    startAIMode('finder');
    return null;
  }
  if (/family/.test(q) && (!aiMode || aiMode === 'finder')) { aiMode = 'finder'; processFinderProtect('family'); return null; }
  if (/car|motor|vehicle/.test(q) && (!aiMode || aiMode === 'finder')) { aiMode = 'finder'; processFinderProtect('vehicle'); return null; }
  if (/home/.test(q) && (!aiMode || aiMode === 'finder')) { aiMode = 'finder'; processFinderProtect('home'); return null; }
  if (/travel insurance|pet insurance|commercial insurance|investment plan|ulip|business insurance/.test(q)) {
    return cannotConfirmCoverage();
  }
  if (/myself|self/.test(q) && (!aiMode || aiMode === 'finder')) { aiMode = 'finder'; processFinderProtect('myself'); return null; }

  if (/renew|expir|manage/.test(q)) return startAIMode('manage', false), null;

  if (/file.*claim|claim.*help/.test(q)) {
    startAIMode('claim', false);
    return null;
  }

  if (/what does my (health )?policy cover|policy cover/.test(q)) return getAIPolicyCoverage();
  if (/health.*cover|health insurance.*cover/.test(q)) return getAIProductCoverageGuide('health');
  if (/motor.*cover|car insurance|vehicle insurance/.test(q)) return getAIProductCoverageGuide('motor');
  if (/term.*cover|term life/.test(q)) {
    if (/how much/.test(q)) {
      return {
        text: '**Term cover guide (general):** Many people target 10–15× annual income or outstanding loans. Use the cover guide or talk to an expert for a tailored number.',
        skipCoverageGuard: true,
        actions: [
          { label: 'Cover guide', action: 'open-cover-guide', primary: true },
          { label: t('ai.expertHandoff'), action: 'open-expert-from-ai' },
        ],
      };
    }
    return getAIProductCoverageGuide('term');
  }
  if (/home insurance.*cover|home.*cover/.test(q)) return getAIProductCoverageGuide('home');

  if (/compare|vs|star.*care/.test(q)) {
    const compareProduct = compareContextProduct();
    const compared = resolveComparePlans(compareProduct);
    if (compared.length >= 2) return getAICompareResult(compared, compareProduct);
    if (compareProduct === 'term') return getAICompareResult(termPlans.slice(0, 2), 'term');
    if (compareProduct === 'home') return getAICompareResult(homePlans.slice(0, 2), 'home');
    const s = healthPlans.find(p => p.insurer === 'Star Health');
    const c = healthPlans.find(p => p.insurer === 'Care Health');
    return getAICompareResult([s, c], 'health');
  }

  if (/cheap|lowest/.test(q)) {
    const cheapest = [...healthPlans].sort((a, b) => a.premium - b.premium)[0];
    return {
      text: `Lowest premium: **${cheapest.insurer}** at ${formatPremium(cheapest.premium)}/yr for ₹10L floater.`,
      source: {
        plan: `${cheapest.insurer}${cheapest.plan ? ` — ${cheapest.plan}` : ''}`,
        section: 'Listing — premium quote (indicative)',
      },
    };
  }

  if (/cashless/.test(q)) return getAIExplainer('cashless');
  if (/co-?pay/.test(q)) return getAIExplainer('co-pay');
  if (/ncb|no claim/.test(q)) return getAIExplainer('ncb');
  if (/idv/.test(q)) return getAIExplainer('idv');
  if (/sum insured/.test(q)) return getAIExplainer('sum insured');
  if (/waiting/.test(q)) return getAIExplainer('waiting period');
  if (/port/.test(q)) return getAIExplainer('portability');

  if (/claim/.test(q)) {
    return {
      text: 'Shall I start the Claim Assistant?',
      actions: [
        { label: 'Yes, guide me', action: 'start-mode', data: { mode: 'claim' }, primary: true },
      ],
    };
  }

  if (/parent|senior/.test(q)) {
    return cannotConfirmCoverage();
  }

  for (const term of Object.keys(AI_TERM_GLOSSARY)) {
    if (q.includes(term)) return getAIExplainer(term);
  }

  return {
    text: 'I can help with policy finder, comparison, terms, coverage, claims & renewals. Pick a skill below.',
    actions: AI_MODES.slice(0, 3).map(m => ({ label: (m.en), action: 'start-mode', data: { mode: m.id } })),
  };
}

let aiKeyboardViewportBound = false;

function resetAIPanelViewport() {
  document.body.classList.remove('ai-keyboard-open', 'ai-input-focused');
  document.documentElement.style.setProperty('--ai-keyboard-inset', '0px');
  document.documentElement.style.removeProperty('--ai-vv-height');
  const panel = document.getElementById('aiPanel');
  if (panel) panel.style.maxHeight = '';
}

function syncAIPanelViewport() {
  const panel = document.getElementById('aiPanel');
  if (!panel?.classList.contains('open')) {
    resetAIPanelViewport();
    return;
  }
  const vv = window.visualViewport;
  if (!vv) return;
  const layoutHeight = window.innerHeight;
  const keyboardGap = Math.max(0, layoutHeight - vv.height - vv.offsetTop);
  const inputFocused = document.body.classList.contains('ai-input-focused');
  const keyboardOpen = keyboardGap > 48 || (inputFocused && keyboardGap > 20);
  const inset = keyboardOpen ? keyboardGap : 0;
  document.documentElement.style.setProperty('--ai-keyboard-inset', `${inset}px`);
  document.documentElement.style.setProperty('--ai-vv-height', `${vv.height}px`);
  document.body.classList.toggle('ai-keyboard-open', keyboardOpen);
  if (keyboardOpen) {
    const cap = Math.max(220, Math.floor(vv.height - 8));
    panel.style.maxHeight = `${cap}px`;
  } else {
    panel.style.maxHeight = '';
  }
}

function bindAIKeyboardViewport() {
  if (aiKeyboardViewportBound) return;
  aiKeyboardViewportBound = true;
  const input = document.getElementById('aiInput');
  const onVV = () => syncAIPanelViewport();
  window.visualViewport?.addEventListener('resize', onVV);
  window.visualViewport?.addEventListener('scroll', onVV);
  window.addEventListener('resize', onVV);
  input?.addEventListener('focus', () => {
    document.body.classList.add('ai-input-focused');
    onVV();
    requestAnimationFrame(onVV);
    setTimeout(onVV, 100);
    setTimeout(onVV, 280);
    setTimeout(() => {
      document.getElementById('aiMessages')?.lastElementChild?.scrollIntoView?.({ block: 'end' });
    }, 320);
  });
  input?.addEventListener('blur', () => {
    document.body.classList.remove('ai-input-focused');
    setTimeout(onVV, 160);
  });
}

function shouldDeferAIFocusOnOpen(mode, finderProtect, prefill) {
  if (finderProtect || mode === 'finder') return true;
  if (!mode && !prefill) return true;
  return false;
}

function getAIFocusables() {
  const panel = document.getElementById('aiPanel');
  if (!panel?.classList.contains('open')) return [];
  return [...panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => !el.disabled && el.offsetParent !== null);
}

function enableAIFocusTrap() {
  const panel = document.getElementById('aiPanel');
  if (!panel || aiFocusTrapHandler) return;
  aiFocusTrapHandler = (e) => {
    if (e.key !== 'Tab') return;
    const nodes = getAIFocusables();
    if (nodes.length < 2) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  panel.addEventListener('keydown', aiFocusTrapHandler);
}

function disableAIFocusTrap() {
  const panel = document.getElementById('aiPanel');
  if (panel && aiFocusTrapHandler) {
    panel.removeEventListener('keydown', aiFocusTrapHandler);
    aiFocusTrapHandler = null;
  }
}

function openAIPanel(prefill = '', mode = null, finderProtect = null, fromHistory = false, triggerEl = null) {
  if (!fromHistory) {
    aiLastTrigger = triggerEl || document.getElementById('aiFab') || document.activeElement;
  }
  document.body.classList.add('ai-open');
  const panel = document.getElementById('aiPanel');
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  document.getElementById('aiOverlay').classList.add('visible');
  enableAIFocusTrap();
  if (!fromHistory) pushAppState();
  if (finderProtect) {
    aiMessages = [];
    startFinderWithProtect(finderProtect);
    renderAIModePicker();
  } else if (mode) {
    aiMessages = [];
    startAIMode(mode);
    renderAIMessages();
  } else {
    renderAIMessages();
    renderAIModePicker();
    renderAISuggestions();
  }
  if (prefill && !finderProtect) submitAIQuery(prefill);
  bindAIKeyboardViewport();
  syncAIPanelViewport();
  syncAIPanelChrome();
  const deferFocus = shouldDeferAIFocusOnOpen(mode, finderProtect, prefill);
  requestAnimationFrame(() => {
    if (deferFocus) {
      const chip = panel.querySelector('.ai-product-pick, .ai-suggest-chip');
      (chip || document.getElementById('aiClose'))?.focus?.();
    } else {
      document.getElementById('aiInput')?.focus?.();
    }
    syncAIPanelViewport();
  });
}

function closeAIPanel(fromHistory = false) {
  document.body.classList.remove('ai-open');
  const panel = document.getElementById('aiPanel');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.getElementById('aiOverlay')?.classList.remove('visible');
  resetAIPanelViewport();
  disableAIFocusTrap();
  const restore = aiLastTrigger || document.getElementById('aiFab');
  requestAnimationFrame(() => restore?.focus?.());
}

function submitAIQuery(query) {
  if (!query.trim()) return;
  aiMessages.push({ role: 'user', text: query });
  renderAIMessages();
  setTimeout(() => {
    const result = routeAIQuery(query);
    if (result) pushBotMessage(result);
  }, 450);
}

function setExpertFieldError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const err = document.getElementById(errorId);
  if (!input || !err) return;
  if (message) {
    err.textContent = message;
    err.hidden = false;
    input.setAttribute('aria-invalid', 'true');
  } else {
    err.textContent = '';
    err.hidden = true;
    input.removeAttribute('aria-invalid');
  }
}

function isExpertCallbackNowOpen(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= 9 * 60 && minutes < 20 * 60;
}

const hollowSelectRegistry = new WeakMap();

function syncHollowSelectUi(select) {
  const state = hollowSelectRegistry.get(select);
  if (!state) return;
  const opt = select.options[select.selectedIndex];
  if (state.valueEl) state.valueEl.textContent = opt?.text || '';
  state.list.querySelectorAll('.hollow-select__option').forEach((li) => {
    const val = li.dataset.value;
    const optEl = select.querySelector(`option[value="${CSS.escape(val)}"]`);
    li.setAttribute('aria-selected', val === select.value ? 'true' : 'false');
    li.setAttribute('aria-disabled', optEl?.disabled ? 'true' : 'false');
  });
}

function refreshHollowSelectOptions(select) {
  const state = hollowSelectRegistry.get(select);
  if (!state) return;
  [...select.options].forEach((opt, i) => {
    const li = state.list.children[i];
    if (li) li.textContent = opt.text;
  });
  syncHollowSelectUi(select);
}

function closeHollowSelect(state, focusTrigger = false) {
  if (!state || !state.wrap.classList.contains('is-open')) return;
  state.wrap.classList.remove('is-open');
  state.trigger.setAttribute('aria-expanded', 'false');
  state.list.hidden = true;
  if (focusTrigger) state.trigger.focus();
}

function closeAllHollowSelects() {
  document.querySelectorAll('.hollow-select.is-open').forEach((wrap) => {
    const select = wrap.querySelector('select');
    if (select) closeHollowSelect(hollowSelectRegistry.get(select));
  });
}

function enhanceHollowSelect(select) {
  if (!select || select.dataset.hollowSelectEnhanced) return;
  select.dataset.hollowSelectEnhanced = '1';
  select.classList.add('hollow-select__native');
  select.tabIndex = -1;
  select.setAttribute('aria-hidden', 'true');

  const wrap = document.createElement('div');
  wrap.className = 'hollow-select';
  select.parentNode.insertBefore(wrap, select);
  wrap.appendChild(select);

  const lbl = select.id ? document.querySelector(`label[for="${select.id}"]`) : null;
  if (lbl && !lbl.id) lbl.id = `${select.id}Label`;

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'hollow-select__trigger';
  trigger.id = `${select.id}Trigger`;
  if (lbl) trigger.setAttribute('aria-labelledby', `${lbl.id} ${trigger.id}`);
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');

  const valueEl = document.createElement('span');
  valueEl.className = 'hollow-select__value';
  const chev = document.createElement('span');
  chev.className = 'hollow-select__chevron';
  chev.setAttribute('aria-hidden', 'true');
  chev.innerHTML =
    typeof icon === 'function'
      ? icon('chevronDown', ICON_SIZE.lg, 'hollow-icon hollow-icon--select-chevron')
      : '▾';
  trigger.append(valueEl, chev);

  const list = document.createElement('ul');
  list.className = 'hollow-select__menu';
  list.setAttribute('role', 'listbox');
  list.id = `${select.id}List`;
  list.hidden = true;
  trigger.setAttribute('aria-controls', list.id);

  [...select.options].forEach((opt) => {
    const li = document.createElement('li');
    li.className = 'hollow-select__option';
    li.setAttribute('role', 'option');
    li.dataset.value = opt.value;
    li.textContent = opt.text;
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      const liveOpt = select.querySelector(`option[value="${opt.value}"]`);
      if (liveOpt?.disabled) return;
      select.value = opt.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      syncHollowSelectUi(select);
      closeHollowSelect(hollowSelectRegistry.get(select));
      trigger.focus();
    });
    list.appendChild(li);
  });

  wrap.append(trigger, list);
  const state = { wrap, trigger, list, valueEl, select };
  hollowSelectRegistry.set(select, state);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !wrap.classList.contains('is-open');
    closeAllHollowSelects();
    if (willOpen) {
      wrap.classList.add('is-open');
      list.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      const selected = list.querySelector('[aria-selected="true"]');
      selected?.scrollIntoView({ block: 'nearest' });
    }
  });

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeHollowSelect(state, true);
  });

  if (select.id === 'expertTime') {
    select.addEventListener('change', syncExpertSubmitLabel);
  }

  syncHollowSelectUi(select);
}

function initHollowSelects() {
  document.querySelectorAll('#expertForm select').forEach(enhanceHollowSelect);
}

function initPageHollowSelects() {
  const hero = document.getElementById('heroProduct');
  if (hero) {
    hero.value = activeProduct || hero.value || 'health';
    enhanceHollowSelect(hero);
  }
  document.querySelectorAll('.form-group select').forEach((sel) => {
    if (!sel.dataset.hollowSelectEnhanced) enhanceHollowSelect(sel);
  });
}

function syncExpertNowOption() {
  const select = document.getElementById('expertTime');
  if (!select) return;
  const nowOpt = select.querySelector('option[value="now"]');
  const open = isExpertCallbackNowOpen();
  if (nowOpt) nowOpt.disabled = !open;
  if (!open && select.value === 'now') select.value = 'morning';
  syncHollowSelectUi(select);
  syncExpertSubmitLabel();
}

function expertSlotLabel(value) {
  const keys = {
    now: 'expert.timeNow',
    morning: 'expert.timeMorning',
    afternoon: 'expert.timeAfternoon',
    evening: 'expert.timeEvening',
  };
  return t(keys[value] || 'expert.timeMorning');
}

function expertSuccessCopy(slot) {
  if (slot === 'now') return t('expert.successSub');
  return formatI18n(t('expert.successSubSlot'), { slot: expertSlotLabel(slot) });
}

function refreshExpertSuccessCopy() {
  const panel = document.getElementById('expertSuccessPanel');
  const sub = document.getElementById('expertSuccessSub');
  if (!panel || panel.hidden || !sub || !expertCallbackSlot) return;
  sub.textContent = expertSuccessCopy(expertCallbackSlot);
}

function resetExpertModalUi() {
  const form = document.getElementById('expertForm');
  form?.reset();
  const submit = document.getElementById('expertSubmit');
  if (submit) submit.disabled = false;
  expertCallbackSlot = null;
  const expertProduct = document.getElementById('expertProduct');
  if (expertProduct) expertProduct.value = 'health';
  const expertTime = document.getElementById('expertTime');
  if (expertTime) expertTime.value = 'now';
  syncExpertNowOption();
  if (expertProduct) syncHollowSelectUi(expertProduct);
  setExpertFieldError('expertName', 'expertNameError', '');
  setExpertFieldError('expertPhone', 'expertPhoneError', '');
  setExpertFieldError('expertConsent', 'expertConsentError', '');
  document.getElementById('expertFormPanel')?.removeAttribute('hidden');
  const success = document.getElementById('expertSuccessPanel');
  if (success) success.hidden = true;
  document.getElementById('expertModal')?.setAttribute('aria-labelledby', 'expertModalTitle');
  const title = document.getElementById('expertModalTitle');
  if (title) title.textContent = t('expert.title');
}

function validateExpertForm() {
  const name = (document.getElementById('expertName')?.value || '').trim();
  const phoneInput = document.getElementById('expertPhone');
  const phone = normalizeIndianMobile(phoneInput?.value);
  if (phoneInput) phoneInput.value = phone;
  const consent = document.getElementById('expertConsent')?.checked;
  let valid = true;

  if (!name) {
    setExpertFieldError('expertName', 'expertNameError', t('expert.nameRequired'));
    valid = false;
  } else {
    setExpertFieldError('expertName', 'expertNameError', '');
  }

  if (!phone) {
    setExpertFieldError('expertPhone', 'expertPhoneError', t('expert.phoneRequired'));
    valid = false;
  } else if (!isValidIndianMobile(phone)) {
    setExpertFieldError('expertPhone', 'expertPhoneError', t('expert.phoneInvalid'));
    valid = false;
  } else {
    setExpertFieldError('expertPhone', 'expertPhoneError', '');
  }

  if (!consent) {
    const err = document.getElementById('expertConsentError');
    const box = document.getElementById('expertConsent');
    if (err) {
      err.textContent = t('expert.consentRequired');
      err.hidden = false;
    }
    box?.setAttribute('aria-invalid', 'true');
    valid = false;
  } else {
    const err = document.getElementById('expertConsentError');
    if (err) {
      err.textContent = '';
      err.hidden = true;
    }
    document.getElementById('expertConsent')?.removeAttribute('aria-invalid');
  }

  if (!valid) {
    const firstInvalid = document.querySelector('#expertForm [aria-invalid="true"]');
    firstInvalid?.focus?.();
  }
  return valid;
}

function showExpertSuccess(slot) {
  expertCallbackSlot = slot;
  document.getElementById('expertFormPanel')?.setAttribute('hidden', '');
  const success = document.getElementById('expertSuccessPanel');
  if (success) success.hidden = false;
  const sub = document.getElementById('expertSuccessSub');
  if (sub) sub.textContent = expertSuccessCopy(slot);
  document.getElementById('expertModal')?.setAttribute('aria-labelledby', 'expertSuccessTitle');
  requestAnimationFrame(() => document.getElementById('expertSuccessTitle')?.focus());
}

function getExpertFocusables() {
  const modal = document.getElementById('expertModal');
  if (!modal?.classList.contains('open')) return [];
  const content = modal.querySelector('.modal__content');
  if (!content) return [];
  return [...content.querySelectorAll('button, [href], input:not(.hollow-select__native), textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => !el.disabled && !el.closest('[hidden]') && el.offsetParent !== null);
}

function enableExpertFocusTrap() {
  const modal = document.getElementById('expertModal');
  if (!modal || expertFocusTrapHandler) return;
  expertFocusTrapHandler = (e) => {
    if (e.key !== 'Tab') return;
    const nodes = getExpertFocusables();
    if (nodes.length < 2) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  modal.addEventListener('keydown', expertFocusTrapHandler);
}

function disableExpertFocusTrap() {
  const modal = document.getElementById('expertModal');
  if (modal && expertFocusTrapHandler) {
    modal.removeEventListener('keydown', expertFocusTrapHandler);
    expertFocusTrapHandler = null;
  }
}

let checkoutFocusTrapHandler = null;

function getCheckoutFocusables() {
  const root = document.querySelector('.checkout-body');
  if (!root) return [];
  return [...root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => !el.disabled && !el.closest('[hidden]') && el.offsetParent !== null);
}

function syncCheckoutFocusTrap() {
  const root = document.querySelector('.checkout-body');
  const active = !!(wizardState && root && (checkoutPhase === 'payment' || checkoutPhase === 'failed'));
  if (!active) {
    if (root && checkoutFocusTrapHandler) {
      root.removeEventListener('keydown', checkoutFocusTrapHandler);
      checkoutFocusTrapHandler = null;
    }
    return;
  }
  if (checkoutFocusTrapHandler) return;
  checkoutFocusTrapHandler = (e) => {
    if (e.key !== 'Tab') return;
    const nodes = getCheckoutFocusables();
    if (nodes.length < 2) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  root.addEventListener('keydown', checkoutFocusTrapHandler);
}

function openExpertModal(fromHistory = false, triggerEl = null) {
  closeAllHollowSelects();
  if (!fromHistory) {
    resetExpertModalUi();
    if (triggerEl) expertLastTrigger = triggerEl;
    else if (!expertLastTrigger) expertLastTrigger = document.activeElement;
  }
  lastFocusEl = expertLastTrigger || document.activeElement;
  const modal = document.getElementById('expertModal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('expertOverlay').classList.add('visible');
  document.body.classList.add('expert-open');
  enableExpertFocusTrap();
  syncExpertNowOption();
  if (!fromHistory) pushAppState();
  const focusTarget = document.getElementById('expertName') || document.getElementById('expertClose');
  focusTarget?.focus();
}

function closeExpertModal(fromHistory = false) {
  closeAllHollowSelects();
  const modal = document.getElementById('expertModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('expertOverlay').classList.remove('visible');
  document.body.classList.remove('expert-open');
  disableExpertFocusTrap();
  resetExpertModalUi();
  const restore = expertLastTrigger || lastFocusEl;
  restore?.focus?.();
}

function submitExpertForm(e) {
  e.preventDefault();
  const btn = document.getElementById('expertSubmit');
  if (btn?.disabled) return;
  if (btn) btn.disabled = true;
  if (!validateExpertForm()) {
    if (btn) btn.disabled = false;
    return;
  }
  syncExpertNowOption();
  showExpertSuccess(document.getElementById('expertTime')?.value || 'morning');
}

function closeExpertFromSuccess() {
  if (document.getElementById('expertModal')?.classList.contains('open') && history.length > 1) {
    goBack();
    return;
  }
  closeExpertModal(false);
}

document.getElementById('bottomNav').addEventListener('click', e => {
  const btn = e.target.closest('.bottom-nav__item');
  if (btn?.dataset.view) { wizardState = null; setView(btn.dataset.view); }
});
bindAIKeyboardViewport();
document.getElementById('aiFab').addEventListener('click', (e) => openAIPanel('', null, null, false, e.currentTarget));
document.getElementById('aiClose').addEventListener('click', goBack);
document.getElementById('aiOverlay').addEventListener('click', goBack);
document.getElementById('aiForm').addEventListener('submit', e => { e.preventDefault(); const q = document.getElementById('aiInput').value.trim(); if (q) { submitAIQuery(q); document.getElementById('aiInput').value = ''; } });
document.getElementById('aiExpertHandoff')?.addEventListener('click', (e) => {
  openExpertModal(false, e.currentTarget);
});
document.getElementById('aiPanel').addEventListener('click', (e) => {
  const suggest = e.target.closest('[data-suggestion-key]');
  if (suggest) {
    const key = suggest.dataset.suggestionKey;
    if (aiMode === 'finder' && aiFinderStep === 'protect' && AI_SUGGEST_TO_FINDER[key]) {
      handleAIAction('finder-protect', { value: AI_SUGGEST_TO_FINDER[key] });
      return;
    }
    const q = AI_PRODUCT_PROMPT_QUERIES.en[key] || t(key);
    submitAIQuery(q);
    return;
  }
  const handoff = e.target.closest('[data-action="open-expert-from-ai"]');
  if (handoff) {
    openExpertModal(false, handoff);
    return;
  }
  const modeBtn = e.target.closest('[data-ai-mode]');
  if (modeBtn) { startAIMode(modeBtn.dataset.aiMode); return; }
  const actionBtn = e.target.closest('[data-ai-action]');
  if (actionBtn) handleAIAction(actionBtn.dataset.aiAction, actionBtn.dataset);
});
applyAppSettings();
authUser = loadAuthUser();
updateAuthHeader();
document.getElementById('authBtn')?.addEventListener('click', () => {
  if (authUser?.verified) setView('account');
  else openSignup();
});
document.getElementById('expertClose')?.addEventListener('click', goBack);
document.getElementById('expertOverlay')?.addEventListener('click', goBack);
document.getElementById('expertForm')?.addEventListener('submit', submitExpertForm);
initHollowSelects();
document.addEventListener('click', (e) => {
  if (e.target.closest('.hollow-select')) return;
  closeAllHollowSelects();
});
document.getElementById('expertSuccessClose')?.addEventListener('click', closeExpertFromSuccess);
document.getElementById('compareBtn').addEventListener('click', () => {
  openCompareView();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.querySelector('.hollow-select.is-open')) {
    closeAllHollowSelects();
    return;
  }
  if (e.key !== 'Escape') return;
  if (document.getElementById('aiPanel')?.classList.contains('open')) { goBack(); return; }
  if (document.getElementById('expertModal')?.classList.contains('open')) { goBack(); return; }
  if (wizardState) goBack();
});

window.addEventListener('popstate', (e) => {
  suppressHistory = true;
  applyAppState(e.state);
  suppressHistory = false;
});

const SPLASH_SEEN_KEY = 'hollow_splash_seen';
const SPLASH_MAX_MS = 750;

function dismissSplash(splash, { animate = true } = {}) {
  if (!splash) return;
  splash.setAttribute('aria-busy', 'false');
  document.body.classList.remove('splash-active');
  const removeMs = animate ? 180 : 0;
  splash.classList.add('launch--hide');
  window.setTimeout(() => splash.remove(), removeMs);
}

function initSplash({ skip = false } = {}) {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seen = false;
  try { seen = localStorage.getItem(SPLASH_SEEN_KEY) === '1'; } catch (_) { /* private mode */ }

  if (skip || seen || reduceMotion) {
    splash.remove();
    document.body.classList.remove('splash-active');
    return;
  }

  splash.hidden = false;
  splash.setAttribute('aria-busy', 'true');
  document.body.classList.add('splash-active');
  applyI18n();

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    try { localStorage.setItem(SPLASH_SEEN_KEY, '1'); } catch (_) { /* ignore */ }
    dismissSplash(splash, { animate: !reduceMotion });
  };

  splash.addEventListener('click', finish, { once: true });
  splash.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      finish();
    }
  });
  window.setTimeout(finish, SPLASH_MAX_MS);
}

const designCaptureQuery = readDesignCaptureQuery();
applyDesignCaptureTheme(designCaptureQuery.theme);
let designCaptureOverlay = null;
const designCaptureApplied = Boolean(
  designCaptureQuery.screen && DESIGN_CAPTURE_SCREENS.has(designCaptureQuery.screen),
);
if (designCaptureApplied) {
  document.documentElement.classList.add('design-capture');
  document.body.classList.add('design-capture');
  if (designCaptureQuery.screen.startsWith('compare-')) {
    document.body.classList.add('design-capture-compare');
  } else if (designCaptureQuery.screen.startsWith('compare-bar-')) {
    document.body.classList.add('design-capture-compare-bar');
  } else if (designCaptureQuery.screen === 'health-results-compare-exact') {
    document.body.classList.add('design-capture-viewport-exact');
  } else if (designCaptureQuery.screen === 'policy-doctor-clauses-pick') {
    document.body.classList.add('design-capture-behance-frame', 'design-capture-behance-frame--clauses');
  } else if (designCaptureQuery.screen === 'policy-doctor-pick-behance') {
    document.body.classList.add('design-capture-behance-frame');
  } else if (designCaptureQuery.screen === 'policy-doctor-clause-behance') {
    document.body.classList.add('design-capture-behance-frame');
  } else if (designCaptureQuery.screen === 'home-behance-top') {
    document.body.classList.add('design-capture-behance-frame', 'design-capture-behance-frame--home-top');
  } else if (designCaptureQuery.screen === 'home-behance-mid') {
    document.body.classList.add('design-capture-behance-frame', 'design-capture-behance-frame--home-mid');
  } else if (designCaptureQuery.screen === 'home-behance-bottom') {
    document.body.classList.add('design-capture-behance-frame', 'design-capture-behance-frame--home-bottom');
  } else if (designCaptureQuery.screen.endsWith('-compare-pick')) {
    document.body.classList.add('design-capture-compare-pick');
  }
  suppressHistory = true;
  designCaptureOverlay = applyDesignCaptureScreen(designCaptureQuery.screen);
  suppressHistory = false;
}

history.replaceState(captureAppState(), '');
if (designCaptureApplied) stripDesignCaptureSearchParams();
initSplash({
  skip: designCaptureQuery.nosplash
    || (designCaptureQuery.screen && DESIGN_CAPTURE_SCREENS.has(designCaptureQuery.screen)),
});
syncShellChrome();
render();
if (designCaptureOverlay === 'expert') openExpertModal(true);
else if (designCaptureOverlay === 'ai') openAIPanel('', null, null, true);
else if (designCaptureOverlay === 'ai-claim') openAIPanel('', 'claim', null, true);
if (designCaptureApplied) {
  prepareDesignCaptureForFigma();
  if (location.hash.includes('figmacapture=')) {
    requestAnimationFrame(() => {
      prepareDesignCaptureForFigma();
      window.setTimeout(prepareDesignCaptureForFigma, 1500);
    });
  }
}