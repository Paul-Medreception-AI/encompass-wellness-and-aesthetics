import Link from 'next/link'
import { POSTS } from '@/lib/data/posts'
import { COMPARISONS } from '@/lib/data/compare'

export const metadata = {
  title: 'Health & Wellness Blog | Encompass Wellness',
  description:
    'Articles on hormones, thyroid health, weight loss, functional medicine and aesthetics from the providers at Encompass Wellness and Aesthetics in Edmond, OK.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-5xl font-light mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Resources &amp; Patient Education
          </h1>
          <p className="text-xl text-white/90">
            Evidence-based information to support your health and wellness journey
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm">
            <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Featured Article
            </span>
            <h2
              className="text-4xl font-light mt-4 mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {featured.title}
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              {featured.description}
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Read the Article
            </Link>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="bg-[var(--color-cream)] pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-light mb-10 text-[var(--color-ink)]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <h3
                  className="text-2xl font-semibold text-[var(--color-ink)] mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-[var(--color-accent)] font-semibold text-sm mt-6 hover:underline"
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Comparison guides */}
      <section className="bg-white py-20 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-light mb-3 text-[var(--color-ink)]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Comparison Guides
          </h2>
          <p className="text-[var(--color-muted)] mb-10">
            Side-by-side breakdowns of the choices patients ask us about most.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {COMPARISONS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/compare/${c.slug}`}
                  className="block bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl px-6 py-5 text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Have a Question About Your Health?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Reading only goes so far. Schedule a consultation and we will look at what is actually
            driving how you feel.
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
