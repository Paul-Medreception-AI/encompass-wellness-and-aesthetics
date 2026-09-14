import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://encompassspa.com'
  const now = new Date()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/conditions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/insurance`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/new-patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/telehealth`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/reviews`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy-sms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms-sms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const servicePages = [
    { url: `${base}/services/functional-medicine`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/hormone-replacement-therapy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/thyroid-management`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/weight-loss-programs`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/aesthetic-services`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/iv-therapy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const conditionPages = [
    { url: `${base}/conditions/chronic-fatigue-and-low-energy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/unexplained-weight-gain`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/difficulty-losing-weight`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/menopausal-symptoms`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/perimenopause`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/low-testosterone-in-men`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hormonal-imbalance`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hypothyroidism`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hyperthyroidism`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hashimoto-s-thyroiditis`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/thyroid-nodules`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/adrenal-fatigue`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/metabolic-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/insulin-resistance`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/pcos-polycystic-ovary-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/erectile-dysfunction`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/low-libido`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/gut-dysbiosis`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/leaky-gut-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/autoimmune-conditions`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/chronic-inflammation`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/brain-fog-and-cognitive-decline`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/sleep-disturbances`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/mood-imbalances-and-anxiety`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/premature-aging`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const blogPages = [
    { url: `${base}/blog/understanding-hormone-replacement-therapy-what-you-need-to-k`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/5-signs-your-thyroid-might-be-out-of-balance`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/why-traditional-diets-fail-the-metabolic-approach-to-weight-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-gut-health-and-autoimmune-disease`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/bioidentical-vs-synthetic-hormones-understanding-the-differe`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-optimize-testosterone-levels-naturally`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/iv-nutrient-therapy-benefits-beyond-hydration`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-adrenal-fatigue-and-chronic-stress`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-truth-about-menopausal-weight-gain`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/functional-medicine-vs-conventional-medicine-key-differences`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-hormones-affect-your-skin-and-appearance`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-insulin-resistance-and-metabolic-syndrome`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-inflammation-in-chronic-disease`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/natural-approaches-to-balancing-estrogen-levels`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-interpret-your-thyroid-lab-results`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-sleep-and-hormone-balance`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/peptide-therapy-the-future-of-regenerative-medicine`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-pcos-beyond-irregular-periods`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-stress-affects-your-hormones-and-metabolism`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-benefits-of-laser-skin-rejuvenation`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/optimizing-male-hormone-health-after-40`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-nutrition-in-hormone-balance`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-perimenopause-the-transition-years`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-boost-your-immune-system-naturally`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-science-behind-successful-weight-loss`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-to-expect-from-your-first-functional-medicine-appointme`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-hormone-balance-and-mental-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-cortisol-your-stress-hormone`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/anti-aging-from-the-inside-out-a-holistic-approach`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-benefits-of-comprehensive-hormone-testing`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-autoimmune-conditions-through-functional-medicine`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-detoxification-in-optimal-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-sexual-dysfunction-causes-and-solutions`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-read-your-body-s-warning-signs`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-truth-about-hormone-pellet-therapy`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/optimizing-thyroid-function-for-weight-loss`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-gut-hormone-connection-what-you-need-to-know`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/advanced-aesthetic-treatments-for-natural-looking-results`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-growth-hormone-and-aging`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-exercise-in-hormone-optimization`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/bioidentical-vs-synthetic-hormone-replacement`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/hormone-pellets-vs-injections-vs-creams`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/functional-medicine-vs-conventional-medicine`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/weight-loss-medications-vs-metabolic-optimization`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/iv-therapy-vs-oral-supplements`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const locationPages = [
    { url: `${base}/locations/austin-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/round-rock-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/cedar-park-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/georgetown-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const priorRecoveryPages = [
    { url: `${base}/`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/patient-resources`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/skinceuticals`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/spider-vein-treatment`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/prp-facials`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/iv-therapy/uv-light-iv-therapy`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/vaginal-rejuvenation`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/skin-rejuvenation-1`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/aesthetics-menu`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/laser-treatments`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/facials-and-peels`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/iv-therapy/iv-therapy-menu`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/hydrafacial`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/prp-hair-loss`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/body-contouring`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/skin-pen`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/chelation-therapy`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/contact-2`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/fillers`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics/wrinkle-relaxers`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/functional-medicine`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/aesthetics`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/hormones`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/thyroid-management`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/womens-sexual-health`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/mens-sexual-health`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services/weight-loss`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/iv-therapy`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/about-2`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}