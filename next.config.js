/** @type {import("next").NextConfig} */

// Legacy WordPress URLs from encompassspa.com/page-sitemap.xml (30 indexed pages).
//
// NOTE: seven legacy service URLs are preserved EXACTLY by the new /services/[slug]
// routes and therefore must NOT appear here — a redirect would hijack the real page:
//   /services/functional-medicine   /services/thyroid-management
//   /services/body-contouring       /services/chelation-therapy
//   /services/vaginal-rejuvenation  /services/womens-sexual-health
//   /services/mens-sexual-health
// Every other legacy URL is mapped to its closest 1:1 equivalent below.
const legacyRedirects = [
  // Top-level pages
  { source: '/about-2', destination: '/about', permanent: true },
  { source: '/contact-2', destination: '/contact', permanent: true },
  { source: '/patient-resources', destination: '/new-patients', permanent: true },

  // IV therapy hub + children
  { source: '/iv-therapy', destination: '/services/iv-therapy', permanent: true },
  { source: '/iv-therapy/iv-therapy-menu', destination: '/services/iv-therapy', permanent: true },
  { source: '/iv-therapy/uv-light-iv-therapy', destination: '/services/iv-therapy', permanent: true },

  // Renamed service pages
  { source: '/services/hormones', destination: '/services/hormone-replacement-therapy', permanent: true },
  { source: '/services/weight-loss', destination: '/services/weight-loss-programs', permanent: true },

  // Aesthetics hub + children
  { source: '/services/aesthetics', destination: '/services/aesthetic-services', permanent: true },
  { source: '/services/aesthetics/aesthetics-menu', destination: '/services/aesthetic-services', permanent: true },
  { source: '/services/aesthetics/skinceuticals', destination: '/services/aesthetic-services', permanent: true },
  { source: '/services/aesthetics/laser-treatments', destination: '/services/laser-treatments', permanent: true },
  { source: '/services/aesthetics/facials-and-peels', destination: '/services/facials-and-peels', permanent: true },
  { source: '/services/aesthetics/hydrafacial', destination: '/services/hydrafacial', permanent: true },
  { source: '/services/aesthetics/fillers', destination: '/services/dermal-fillers', permanent: true },
  { source: '/services/aesthetics/wrinkle-relaxers', destination: '/services/wrinkle-relaxers', permanent: true },
  { source: '/services/aesthetics/prp-facials', destination: '/services/prp-facials', permanent: true },
  { source: '/services/aesthetics/prp-hair-loss', destination: '/services/prp-hair-restoration', permanent: true },
  { source: '/services/aesthetics/spider-vein-treatment', destination: '/services/spider-vein-treatment', permanent: true },

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
