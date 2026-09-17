'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'
import { TECHNOLOGY } from '@/lib/data/technology'
import { withUtm } from '@/lib/shop-links'
import { PATIENT_PORTAL_URL } from '@/lib/links'

export const SHOP_URL = 'https://store.encompassspa.com/'

// The 20 services grouped the way a patient thinks about them, rather than
// one flat list of twenty.
const SERVICE_GROUPS: { heading: string; slugs: string[] }[] = [
  {
    heading: 'Wellness & Medical',
    slugs: [
      'functional-medicine',
      'hormone-replacement-therapy',
      'thyroid-management',
      'weight-loss-programs',
      'iv-therapy',
      'chelation-therapy',
    ],
  },
  {
    heading: 'Sexual Health',
    slugs: ['womens-sexual-health', 'mens-sexual-health', 'vaginal-rejuvenation'],
  },
  {
    heading: 'Aesthetics',
    slugs: [
      'aesthetic-services',
      'laser-treatments',
      'body-contouring',
      'microneedling-skinpen',
      'hydrafacial',
      'dermal-fillers',
      'wrinkle-relaxers',
      'facials-and-peels',
      'prp-facials',
      'prp-hair-restoration',
      'spider-vein-treatment',
    ],
  },
]

function serviceTitle(slug: string) {
  return SERVICES.find((s) => s.slug === slug)?.title ?? slug
}

type MenuKey = 'services' | 'conditions' | 'technology' | null

export default function SiteHeader() {
  const [open, setOpen] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MenuKey>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close everything on navigation.
  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  // Click-outside and Escape close the desktop dropdown.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const hoverOpen = (k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(k)
  }
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(null), 120)
  }

  const linkCls =
    'text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors'

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
        <Link href="/" aria-label="Encompass Wellness and Aesthetics — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Encompass Wellness and Aesthetics" className="h-[5.5rem] w-auto" />
        </Link>

        {/* Desktop nav */}
        <div ref={navRef} className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => hoverOpen('services')}
            onMouseLeave={hoverClose}
          >
            <span className="inline-flex items-center gap-1">
              <Link href="/services" className={linkCls}>
                Services
              </Link>
              <button
                type="button"
                aria-expanded={open === 'services'}
                aria-haspopup="true"
                aria-label={`${open === 'services' ? 'Hide' : 'Show'} services menu`}
                onClick={() => setOpen(open === 'services' ? null : 'services')}
                className="p-1 -m-1 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Chevron open={open === 'services'} />
              </button>
            </span>

            {open === 'services' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                <div className="w-[46rem] bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-6 grid grid-cols-3 gap-6">
                  {SERVICE_GROUPS.map((g) => (
                    <div key={g.heading}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                        {g.heading}
                      </p>
                      <ul className="space-y-2">
                        {g.slugs.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              className="block text-sm text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                            >
                              {serviceTitle(slug)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 border-t border-[var(--color-border)] pt-4">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
                    >
                      View all services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conditions */}
          <div
            className="relative"
            onMouseEnter={() => hoverOpen('conditions')}
            onMouseLeave={hoverClose}
          >
            <span className="inline-flex items-center gap-1">
              <Link href="/conditions" className={linkCls}>
                Conditions
              </Link>
              <button
                type="button"
                aria-expanded={open === 'conditions'}
                aria-haspopup="true"
                aria-label={`${open === 'conditions' ? 'Hide' : 'Show'} conditions menu`}
                onClick={() => setOpen(open === 'conditions' ? null : 'conditions')}
                className="p-1 -m-1 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Chevron open={open === 'conditions'} />
              </button>
            </span>

            {open === 'conditions' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                <div className="w-[42rem] bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-6">
                  <ul className="grid grid-cols-3 gap-x-6 gap-y-2">
                    {CONDITIONS.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/conditions/${c.slug}`}
                          className="block text-sm text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[var(--color-border)] mt-4 pt-4">
                    <Link
                      href="/conditions"
                      className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
                    >
                      View all conditions &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Technology */}
          <div
            className="relative"
            onMouseEnter={() => hoverOpen('technology')}
            onMouseLeave={hoverClose}
          >
            <span className="inline-flex items-center gap-1">
              <Link href="/technology" className={linkCls}>
                Technology
              </Link>
              <button
                type="button"
                aria-expanded={open === 'technology'}
                aria-haspopup="true"
                aria-label={`${open === 'technology' ? 'Hide' : 'Show'} technology menu`}
                onClick={() => setOpen(open === 'technology' ? null : 'technology')}
                className="p-1 -m-1 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Chevron open={open === 'technology'} />
              </button>
            </span>

            {open === 'technology' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                <div className="w-[26rem] bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-6">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {TECHNOLOGY.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/technology/${t.slug}`}
                          className="block text-sm text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-[var(--color-border)] mt-4 pt-4">
                    <Link href="/technology" className="text-sm font-semibold text-[var(--color-accent)] hover:underline">
                      View all technology &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={linkCls}>
            About
          </Link>
          <Link href="/team" className={linkCls}>
            Team
          </Link>
          <Link href="/contact" className={linkCls}>
            Contact
          </Link>
          <a href={withUtm(SHOP_URL, 'nav', 'header')} target="_blank" rel="noopener" className={linkCls}>
            Shop
          </a>

          {/* Returning patients log in to MDHQ. Secondary treatment so it does not
              compete with the booking CTA. */}
          <a
            href={PATIENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Patient Portal
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M17.5 6.5L10 14M16 13v5a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h5" />
            </svg>
          </a>

          <Link
            href="/contact"
            className="ml-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Schedule Your Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-[var(--color-ink)]"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white max-h-[calc(100vh-7rem)] overflow-y-auto">
          <nav className="px-5 py-4">
            <MobileAccordion
              label="Services"
              open={mobileSection === 'services'}
              onToggle={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
            >
              {SERVICE_GROUPS.map((g) => (
                <div key={g.heading} className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                    {g.heading}
                  </p>
                  <ul className="space-y-2 pl-1">
                    {g.slugs.map((slug) => (
                      <li key={slug}>
                        <Link href={`/services/${slug}`} className="block text-sm text-[var(--color-ink)] py-1">
                          {serviceTitle(slug)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href="/services" className="block text-sm font-semibold text-[var(--color-accent)] py-1">
                View all services &rarr;
              </Link>
            </MobileAccordion>

            <MobileAccordion
              label="Conditions"
              open={mobileSection === 'conditions'}
              onToggle={() => setMobileSection(mobileSection === 'conditions' ? null : 'conditions')}
            >
              <ul className="space-y-2 pl-1">
                {CONDITIONS.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/conditions/${c.slug}`} className="block text-sm text-[var(--color-ink)] py-1">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/conditions" className="block text-sm font-semibold text-[var(--color-accent)] py-2">
                View all conditions &rarr;
              </Link>
            </MobileAccordion>

            <MobileAccordion
              label="Technology"
              open={mobileSection === 'technology'}
              onToggle={() => setMobileSection(mobileSection === 'technology' ? null : 'technology')}
            >
              <ul className="space-y-2 pl-1">
                {TECHNOLOGY.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/technology/${t.slug}`} className="block text-sm text-[var(--color-ink)] py-1">
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/technology" className="block text-sm font-semibold text-[var(--color-accent)] py-2">
                View all technology &rarr;
              </Link>
            </MobileAccordion>

            {[
              ['/about', 'About'],
              ['/team', 'Team'],
              ['/locations', 'Areas We Serve'],
              ['/new-patients', 'New Patients'],
              ['/insurance', 'Insurance'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block py-3 text-base font-medium text-[var(--color-ink)] border-b border-[var(--color-border)]"
              >
                {label}
              </Link>
            ))}

            <a
              href={PATIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-base font-medium text-[var(--color-ink)] border-b border-[var(--color-border)]"
            >
              Patient Portal
            </a>

            <a
              href={withUtm(SHOP_URL, 'nav', 'mobile-menu')}
              target="_blank"
              rel="noopener"
              className="block py-3 text-base font-medium text-[var(--color-ink)] border-b border-[var(--color-border)]"
            >
              Shop Supplements &amp; Skincare
            </a>

            <Link
              href="/contact"
              className="mt-5 mb-2 block text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <a
              href="tel:+14052543000"
              className="block text-center py-3 text-sm font-semibold text-[var(--color-accent)]"
            >
              Call (405) 254-3000
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      aria-hidden="true"
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-3 text-base font-medium text-[var(--color-ink)]"
      >
        {label}
        <Chevron open={open} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}
