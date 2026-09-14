import Link from 'next/link'

export const metadata = {
  title: 'Meet Our Team | Encompass Wellness and Aesthetics',
  description: 'Meet the dedicated providers and staff at Encompass Wellness and Aesthetics in Edmond, OK. Our board-certified team specializes in functional medicine, hormone therapy, and comprehensive wellness care.',
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Cormorant_Garamond'] text-6xl font-light mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Our board-certified providers and dedicated staff are committed to partnering with you on your journey to optimal health through personalized, comprehensive care.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Providers & Staff
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--color-primary)" 
                  strokeWidth={1.5} 
                  className="w-20 h-20 opacity-40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-[var(--color-ink)] mb-2">
                  Our Provider Team
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-3">
                  Board-Certified Specialists
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Full provider profiles are coming soon. Please call to learn more about our team and their expertise in functional medicine, hormone therapy, and comprehensive wellness care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-light mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation with our experienced team and discover how personalized functional medicine can restore your optimal health.
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