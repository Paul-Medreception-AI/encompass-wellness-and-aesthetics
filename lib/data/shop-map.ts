// Which store collection belongs on which page.
//
// The generic "Shop" link in the header stays for people who want to browse.
// These send somebody who is already reading about their specific problem to
// the shelf that addresses it, which is a much shorter path to a purchase.
//
// Only map a page where the collection genuinely matches — a wrong shelf is
// worse than the generic store, because it reads as untargeted.
export const SERVICE_COLLECTION: Record<string, string> = {
  'functional-medicine': 'general-nutrition',
  'hormone-replacement-therapy': 'hormone-balance',
  'thyroid-management': 'energy-support',
  'weight-loss-programs': 'weight-management',
  'iv-therapy': 'general-nutrition',
  'iv-therapy-menu': 'general-nutrition',
  'uv-light-iv-therapy': 'immune-support',
  'chelation-therapy': 'cardiovascular-support',
  'aesthetic-services': 'skin-care',
  'medical-grade-skincare': 'skin-care',
  'facials-and-peels': 'skin-care',
  'prp-facials': 'skin-care',
  'microneedling-skinpen': 'skin-care',
  'laser-treatments': 'skin-care',
  'hydrafacial': 'skin-care',
  'dermal-fillers': 'skin-care',
  'wrinkle-relaxers': 'skin-care',
  'body-contouring': 'weight-management',
  'mens-sexual-health': 'hormone-balance',
  'womens-sexual-health': 'hormone-balance',
}

export const CONDITION_COLLECTION: Record<string, string> = {
  'chronic-fatigue-and-low-energy': 'energy-support',
  'unexplained-weight-gain': 'weight-management',
  'difficulty-losing-weight': 'weight-management',
  'menopausal-symptoms': 'hormone-balance',
  perimenopause: 'hormone-balance',
  'low-testosterone-in-men': 'hormone-balance',
  'hormonal-imbalance': 'hormone-balance',
  hypothyroidism: 'energy-support',
  hyperthyroidism: 'energy-support',
  'hashimoto-s-thyroiditis': 'immune-support',
  'thyroid-nodules': 'energy-support',
  'adrenal-fatigue': 'adrenal-support',
  'metabolic-syndrome': 'blood-sugar-support',
  'insulin-resistance': 'blood-sugar-support',
  'pcos-polycystic-ovary-syndrome': 'blood-sugar-support',
  'erectile-dysfunction': 'cardiovascular-support',
  'low-libido': 'hormone-balance',
  'gut-dysbiosis': 'gastrointestinal-health',
  'leaky-gut-syndrome': 'gastrointestinal-health',
  'autoimmune-conditions': 'immune-support',
  'chronic-inflammation': 'joint-and-muscle-health',
  'brain-fog-and-cognitive-decline': 'memory',
  'sleep-disturbances': 'memory',
  'mood-imbalances-and-anxiety': 'memory',
  'premature-aging': 'skin-care',
}

// A short line explaining WHY this shelf is on this page. Generic "shop our
// supplements" converts badly; naming the job the products do converts better.
export const COLLECTION_PITCH: Record<string, string> = {
  'adrenal-support': 'Pharmaceutical-grade support for stress resilience and cortisol balance.',
  'blood-sugar-support': 'Targeted support for insulin sensitivity and steady blood sugar.',
  'cardiovascular-support': 'Support for circulation, lipids and long-term heart health.',
  'energy-support': 'Mitochondrial, thyroid and B-vitamin support for energy production.',
  'gastrointestinal-health': 'Probiotics, enzymes and gut-lining support to restore digestion.',
  'general-nutrition': 'The foundational nutrients most functional medicine plans start with.',
  'hormone-balance': 'Nutrients that support healthy hormone production, balance and metabolism.',
  'immune-support': 'Immune modulation and anti-inflammatory support for a dysregulated system.',
  'joint-and-muscle-health': 'Anti-inflammatory support for joints, muscles and recovery.',
  'liver-health-and-detoxification': "Support for your liver's natural detoxification pathways.",
  memory: 'Support for focus, memory, mood and healthy sleep.',
  'sexual-health': 'Support for libido, circulation and sexual wellness.',
  'skin-care': 'Physician-dispensed skincare and nutrients that work from the inside out.',
  'weight-management': 'Metabolic and appetite support to pair with a medical weight loss plan.',
}
