import Link from 'next/link'
import SplitHero from '@/components/SplitHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About | Encompass Wellness and Aesthetics',
  description: 'Learn about our functional medicine approach to hormone therapy, weight management, and comprehensive wellness care in Edmond, OK.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <SplitHero
        src="/images/scraped/about_header.jpg"
        alt="A provider at Encompass Wellness and Aesthetics reviewing patient notes"
        objectPosition="object-[42%_top]"
        mobileObjectPosition="object-[46%_top]"
      >
        <nav className="text-sm mb-6 opacity-80">
          <Link href="/" className="hover:opacity-100 hover:underline transition-opacity">
            Home
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span>About</span>
        </nav>
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light leading-[1.05] tracking-tight">
          A Partnership Approach to Your Health
        </h1>
        <p className="text-lg sm:text-xl text-white/85 mt-6 leading-relaxed">
          Comprehensive functional medicine and wellness care in Edmond, OK.
        </p>
      </SplitHero>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-3 lg:pr-12">
              <p className="text-lg text-[var(--color-ink)]/80 mb-6 leading-relaxed">
                Encompass Wellness and Aesthetics is a functional wellness clinic offering a comprehensive range of medical care, preventative care, nutrition, and aesthetic services designed to improve overall well-being. We believe that true health comes from understanding and addressing the root causes of disease, not simply masking symptoms with temporary solutions. Our approach combines advanced diagnostic testing, evidence-based treatments, and personalized care plans tailored to each patient's unique needs.
              </p>
              
              <p className="text-lg text-[var(--color-ink)]/80 mb-6 leading-relaxed">
                Rather than just treating your symptoms, we partner with you in your healthcare journey. Our functional medicine philosophy recognizes that the body is an interconnected system where imbalances in one area often manifest as symptoms in another. Whether you're struggling with fatigue, weight gain, hormonal imbalance, gut issues, autoimmune disease, signs of aging, or sexual dysfunction, we take the time to understand your complete health picture and create a path forward together.
              </p>
              
              <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed">
                Our mission is to restore optimal health by reversing disease at its source. We integrate hormone replacement therapy, thyroid management, metabolic optimization, and aesthetic treatments into comprehensive care plans that address both how you feel and how you look. Every patient receives individualized attention, ongoing support, and access to cutting-edge therapies including IV nutrient therapy and advanced laser treatments, all delivered with compassion and clinical excellence.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Our Credentials
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Board-Certified Providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Functional Medicine Specialists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Hormone Therapy Certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Advanced Diagnostic Testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Comprehensive Metabolic Care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Aesthetic Treatment Certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]/80">Personalized Care Plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Root Cause Focus */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Root Cause Focus
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We don't just mask symptoms—we identify and address the underlying causes of your health concerns. Through comprehensive testing and analysis, we uncover the true source of imbalance and disease.
              </p>
            </div>

            {/* Personalized Medicine */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up transition-all duration-300">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Personalized Medicine
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Every patient is unique, and so is every treatment plan. We tailor our approach to your specific needs, goals, and biochemistry to achieve optimal results and sustainable health improvements.
              </p>
            </div>

            {/* Integrative Care */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up transition-all duration-300">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.93 5.93l4.24 4.24m5.66 5.66l4.24 4.24M1 12h6m6 0h6M5.93 18.07l4.24-4.24m5.66-5.66l4.24-4.24" />
              </svg>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] mb-4">
                Integrative Care
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We combine the best of functional medicine, hormone optimization, metabolic support, and aesthetic treatments into a comprehensive wellness strategy. Your body is a connected system—we treat it that way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule your comprehensive consultation and begin your journey to optimal health
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}