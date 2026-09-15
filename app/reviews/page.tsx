import Link from 'next/link'
import { TESTIMONIALS, GOOGLE_RATING } from '@/lib/data/testimonials'

export const metadata = {
  alternates: { canonical: '/reviews' },
  title: 'Patient Reviews | Encompass Wellness',
  description:
    'Read what patients say about Encompass Wellness and Aesthetics in Edmond, OK — root-cause functional medicine, hormone therapy and aesthetics.',
}


function QuoteMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-[var(--color-primary)] opacity-30 mb-4"
      aria-hidden="true"
    >
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.999v-10h9.999z" />
    </svg>
  )
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We love our clients — and we are grateful when they take the time to share their
            experience.
          </p>
          <p className="mt-8 inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
            <span className="text-2xl font-semibold">{GOOGLE_RATING.rating}</span>
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5b544">
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                </svg>
              ))}
            </span>
            <a
              href={GOOGLE_RATING.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 underline hover:text-white"
            >
              {GOOGLE_RATING.reviewCount} Google reviews
            </a>
          </p>
        </div>
      </section>

      {/* Real testimonials */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] text-center mb-16">
            We Love Our Clients
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-8 flex flex-col"
              >
                <QuoteMark />
                <blockquote className="text-[var(--color-ink)] leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-white py-20 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] mb-6">
            We&rsquo;d Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
            Whether you have completed treatment or are currently on your wellness journey, we invite
            you to share your thoughts. Your honest feedback helps us serve you better and guides
            others seeking the same root-cause approach to health.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Experience personalized, root-cause medicine designed to restore your optimal health and
            vitality.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-accent)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
