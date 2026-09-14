import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCATIONS, LOCATION_SERVICES, CLINIC } from '@/lib/data/locations'

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loc = LOCATIONS.find((l) => l.slug === slug)
  if (!loc) return {}
  return {
    title: `Hormone & Functional Medicine in ${loc.city}, ${loc.state}`,
    description: `Functional medicine, hormone therapy, weight loss and aesthetics for ${loc.city}, ${loc.state} patients — ${loc.driveTime} from our Edmond clinic. Call ${CLINIC.phone}.`,
    alternates: { canonical: `/locations/${loc.slug}` },
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = LOCATIONS.find((l) => l.slug === slug)
  if (!loc) notFound()

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">
              Locations
            </Link>
            <span className="mx-2">›</span>
            <span>
              {loc.city}, {loc.state}
            </span>
          </nav>

          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Functional Medicine &amp; Hormone Care for {loc.city}
          </h1>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95 max-w-3xl">
            Serving {loc.city} and the surrounding {loc.stateName} communities from our Edmond
            clinic — {loc.driveTime} {loc.direction}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <a
              href={CLINIC.phoneHref}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              Call {CLINIC.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Serving the area */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the {loc.city} Area
          </h2>

          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>{loc.intro}</p>
            <p>
              Our office is at {CLINIC.street}, {CLINIC.city}, {CLINIC.state} {CLINIC.zip} — {loc.driveTime}{' '}
              from {loc.city} {loc.direction}. We see patients from across the Oklahoma City metro,
              and we are happy to talk through what a first visit involves before you book.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
              Communities we see {loc.city} patients from
            </h3>
            <ul className="flex flex-wrap gap-3">
              {loc.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="bg-[var(--color-light)] text-[var(--color-ink)] text-sm px-4 py-2 rounded-full"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to {loc.city} Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {LOCATION_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-[var(--color-cream)] rounded-xl p-8 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-4">
                  {s.title}
                </h3>
                <p className="text-[var(--color-muted)] mb-6 leading-relaxed">{s.body}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-6">
            Ready to Get to the Root Cause?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation at our Edmond clinic — {loc.driveTime} from {loc.city}.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
