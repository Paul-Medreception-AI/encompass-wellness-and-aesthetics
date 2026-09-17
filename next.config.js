/** @type {import("next").NextConfig} */

// Legacy WordPress URLs from encompassspa.com/page-sitemap.xml — 31 pages, not 30.
// The miscount was load-bearing: the two URLs that never made it into this list were
// live 404s on an indexed page until 2026-09-17.
//
// NOTE: six legacy service URLs are preserved EXACTLY by the new /services/[slug]
// routes and therefore must NOT appear here — a redirect would hijack the real page:
//   /services/functional-medicine   /services/thyroid-management
//   /services/body-contouring       /services/chelation-therapy
//   /services/womens-sexual-health  /services/mens-sexual-health
//
// ⚠️ /services/vaginal-rejuvenation was previously listed above as a seventh
// preserved URL. It is not one. That flat path is a NEW route; the legacy URL was
// nested under its parent — /services/womens-sexual-health/vaginal-rejuvenation —
// which /services/[slug] cannot match, so it 404'd. It needs a redirect, below.
//
// Every other legacy URL is mapped to its closest 1:1 equivalent below.
const legacyRedirects = [
  // Top-level pages
  { source: '/about-2', destination: '/about', permanent: true },
  { source: '/contact-2', destination: '/contact', permanent: true },
  { source: '/patient-resources', destination: '/new-patients', permanent: true },

  // Three of these used to land on a broad hub page, which returned 200 while
  // silently dropping the specific page's content — the IV cocktail price menu,
  // the UV/ozone modality and the SkinCeuticals line. Those pages have been
  // rebuilt from the WordPress captures, so the redirects now point at them.
  // IV therapy hub + children
  { source: '/iv-therapy', destination: '/services/iv-therapy', permanent: true },
  { source: '/iv-therapy/iv-therapy-menu', destination: '/services/iv-therapy-menu', permanent: true },
  { source: '/iv-therapy/uv-light-iv-therapy', destination: '/services/uv-light-iv-therapy', permanent: true },

  // Not in page-sitemap.xml, but archived 200 in 2021 and a live 404 until now:
  // ozone had its own page before it was merged onto the UV light one.
  { source: '/services/ozone-therapy', destination: '/services/uv-light-iv-therapy', permanent: true },

  // Renamed service pages
  { source: '/services/hormones', destination: '/services/hormone-replacement-therapy', permanent: true },
  { source: '/services/weight-loss', destination: '/services/weight-loss-programs', permanent: true },

  // Nested legacy child of Women's Sexual Health. The new route is the flat
  // /services/vaginal-rejuvenation, so the nested legacy path must redirect.
  { source: '/services/womens-sexual-health/vaginal-rejuvenation', destination: '/services/vaginal-rejuvenation', permanent: true },

  // Aesthetics hub + children
  { source: '/services/aesthetics', destination: '/services/aesthetic-services', permanent: true },
  { source: '/services/aesthetics/aesthetics-menu', destination: '/services/aesthetic-services', permanent: true },
  { source: '/services/aesthetics/skinceuticals', destination: '/services/medical-grade-skincare', permanent: true },
  { source: '/services/aesthetics/laser-treatments', destination: '/services/laser-treatments', permanent: true },
  { source: '/services/aesthetics/facials-and-peels', destination: '/services/facials-and-peels', permanent: true },
  { source: '/services/aesthetics/hydrafacial', destination: '/services/hydrafacial', permanent: true },
  { source: '/services/aesthetics/fillers', destination: '/services/dermal-fillers', permanent: true },
  { source: '/services/aesthetics/wrinkle-relaxers', destination: '/services/wrinkle-relaxers', permanent: true },
  { source: '/services/aesthetics/prp-facials', destination: '/services/prp-facials', permanent: true },
  { source: '/services/aesthetics/prp-hair-loss', destination: '/services/prp-hair-restoration', permanent: true },
  { source: '/services/aesthetics/spider-vein-treatment', destination: '/services/spider-vein-treatment', permanent: true },
  // Cellulite Reduction was a real child of the legacy Aesthetics hub (its nav lists
  // it) but no Wayback capture of the page survives, so there is no copy to rebuild
  // from. EvolveX — the InMode platform the practice actually treats cellulite with —
  // is covered on the body-contouring page, which is the closest honest destination.
  { source: '/services/aesthetics/cellulite-reduction', destination: '/services/body-contouring', permanent: true },

  // Standalone legacy pages
  { source: '/skin-pen', destination: '/services/microneedling-skinpen', permanent: true },
  { source: '/skin-rejuvenation-1', destination: '/services/laser-treatments', permanent: true },
]

// Policy-page aliases (not from the legacy sitemap).
const policyRedirects = [
  { source: '/privacy', destination: '/privacy-sms', permanent: true },
  { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
  { source: '/terms', destination: '/terms-sms', permanent: true },
  { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
  { source: '/sms-terms', destination: '/terms-sms', permanent: true },
]

const nextConfig = {
  images: {
    // Product shots are served from the Shopify CDN.
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.shopify.com' }],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [...policyRedirects, ...legacyRedirects]
  },
}
module.exports = nextConfig
