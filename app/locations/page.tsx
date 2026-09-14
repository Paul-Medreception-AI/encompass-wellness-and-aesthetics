import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCATIONS, CLINIC } from '@/lib/data/locations'

export const metadata: Metadata = {
  title: 'Areas We Serve | Encompass Wellness',
  description: `Encompass Wellness and Aesthetics serves Edmond and the greater Oklahoma City metro from ${CLINIC.street}, ${CLINIC.city}, ${CLINIC.state}. Functional medicine, hormone therapy, weight loss and aesthetics.`,
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6">
            Areas We Serve
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Our clinic is in Edmond, and we care for patients from across the Oklahoma City metro.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 mb-12 text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mb-4">
              Our Office
            </h2>
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              {CLINIC.street}
              <br />
              {CLINIC.city}, {CLINIC.state} {CLINIC.zip}
            </p>
            <a
              href={CLINIC.phoneHref}
              className="inline-block mt-4 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold"
            >
              {CLINIC.phone}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="block bg-white rounded-2xl border border-[var(--color-border)] p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-2">
                  {l.city}, {l.state}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-4">
                  {l.driveTime} from our clinic
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">{l.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation at our Edmond clinic and find out what is actually driving how
            you feel.
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
