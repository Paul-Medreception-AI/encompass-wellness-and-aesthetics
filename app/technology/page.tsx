import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TECHNOLOGY } from '@/lib/data/technology'

export const metadata: Metadata = {
  title: 'Our Technology | Encompass Wellness',
  description:
    'The treatment platforms at Encompass Wellness and Aesthetics in Edmond, OK — Morpheus8, Morpheus8V, EmpowerRF, Votiva, Lumecca, DiolazeXL, EvolveX and RegenePulse.',
  alternates: { canonical: '/technology' },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-85">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&rsaquo;</span>
            <span>Technology</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">Our Technology</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            The platforms behind our treatments — and what each one is actually for.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECHNOLOGY.map((t) => (
              <Link
                key={t.slug}
                href={`/technology/${t.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {t.heroImage && (
                  <div className="relative h-48 bg-[var(--color-light)] shrink-0">
                    <Image
                      src={t.heroImage.src}
                      alt={t.heroImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={t.heroImage.fit === 'contain' ? 'object-contain p-4' : 'object-cover'}
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                    {t.title}
                  </h2>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 flex-1">
                    {t.description}
                  </p>
                  <span className="block mt-6 text-[var(--color-accent)] font-semibold text-sm group-hover:underline">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Not Sure Which One You Need?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            That is what the consultation is for. We will tell you which platform fits the result
            you are after &mdash; or whether none of them is the right starting point.
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
