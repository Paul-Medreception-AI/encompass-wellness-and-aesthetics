import { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'
import { LOCATIONS } from '@/lib/data/locations'

const BASE = 'https://encompassspa.com'

// Static route folders under app/<dir> that hold a page.tsx, excluding the
// dynamic hubs handled from data below.
function staticSlugs(dir: string): string[] {
  const root = path.join(process.cwd(), 'app', dir)
  if (!fs.existsSync(root)) return []
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('[') && !e.name.startsWith('_'))
    .map((e) => e.name)
    .sort()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const corePages = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/conditions', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/team', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insurance', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/new-patients', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/telehealth', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/reviews', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/privacy-sms', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-sms', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/patient-form-sms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const servicePages = SERVICES.map((s) => ({
    url: `/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
  }))

  const conditionPages = CONDITIONS.map((c) => ({
    url: `/conditions/${c.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  const locationPages = LOCATIONS.map((l) => ({
    url: `/locations/${l.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  const blogPages = staticSlugs('blog').map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  const comparePages = staticSlugs('compare').map((slug) => ({
    url: `/compare/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }))

  // NOTE: legacy WordPress URLs are deliberately NOT listed here. They 301 to the
  // routes above (see next.config.js), and a redirecting URL in a sitemap is a
  // "non-canonical page in sitemap" error. Dedupe guards against a slug appearing
  // in two sources.
  const all = [
    ...corePages,
    ...servicePages,
    ...conditionPages,
    ...locationPages,
    ...comparePages,
    ...blogPages,
  ]

  const seen = new Set<string>()
  return all
    .filter((p) => {
      if (seen.has(p.url)) return false
      seen.add(p.url)
      return true
    })
    .map((p) => ({
      ...p,
      url: p.url === '/' ? BASE : `${BASE}${p.url}`,
      lastModified: now,
    }))
}
