import Image from 'next/image'
import Link from 'next/link'
import HeroParallax from '@/components/HeroParallax'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero.
          One continuous photograph, not a coloured box next to a picture.
          The image spans the whole hero and a teal overlay fades out across a
          long eased ramp — the stops below approximate an ease-out rather than
          a linear alpha, because a straight ramp shows as a visible band.
            < lg  photo on top, long vertical feather into the colour
            >= lg photo full-bleed, overlay covering the left ~58% */}
      <section className="relative text-white bg-[var(--color-dark)] overflow-hidden">
        {/* lg+: the photograph behind everything.
            The layer starts at 16% rather than 0 so the subject sits further
            right, clear of the gradient's transition zone. object-position
            alone could not do this: at these viewports the photo is
            width-constrained, so there is no horizontal overflow to shift.
            The exposed strip on the left is under the fully opaque part of
            the overlay, so the offset is invisible. */}
        <div className="hidden lg:block absolute inset-y-0 right-0 left-[16%] xl:left-[14%]">
          <HeroParallax
            src="/images/scraped/hero-beach.jpg"
            alt=""
            speed={0.16}
            className="object-[52%_top]"
          />
        </div>
        <div className="hidden lg:block absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg,' +
                'var(--color-dark) 0%,' +
                'var(--color-dark) 34%,' +
                'rgba(61,100,99,0.93) 42%,' +
                'rgba(61,100,99,0.78) 48%,' +
                'rgba(61,100,99,0.55) 54%,' +
                'rgba(61,100,99,0.32) 59%,' +
                'rgba(61,100,99,0.14) 64%,' +
                'rgba(61,100,99,0.04) 69%,' +
                'rgba(61,100,99,0) 74%)',
            }}
          />
        </div>

        <div className="relative lg:grid lg:grid-cols-[55fr_45fr] lg:min-h-[92vh]">
          {/* Photo — on top for phones and tablets */}
          <div className="relative h-[42vh] min-h-[300px] w-full lg:hidden overflow-hidden">
            <Image
              src="/images/scraped/hero-beach.jpg"
              alt="Woman walking along the shoreline in bright sunlight"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover object-[58%_top]"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-56"
              style={{
                background:
                  'linear-gradient(180deg,' +
                  'rgba(61,100,99,0) 0%,' +
                  'rgba(61,100,99,0.08) 22%,' +
                  'rgba(61,100,99,0.24) 38%,' +
                  'rgba(61,100,99,0.48) 54%,' +
                  'rgba(61,100,99,0.74) 70%,' +
                  'rgba(61,100,99,0.92) 84%,' +
                  'var(--color-dark) 100%)',
              }}
            />
          </div>

          {/* Copy */}
          <div className="relative flex items-center">
            <div className="w-full lg:max-w-[42rem] lg:ml-auto px-6 lg:pr-12 xl:pr-16 pt-14 pb-20 lg:py-32">
              <h1
                className="text-5xl sm:text-6xl xl:text-[4.15rem] font-light tracking-tight leading-[1.05] text-balance"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Your Health,
                <br />
                Fully Encompassed.
              </h1>
              <p className="text-lg sm:text-xl text-white/85 mt-8 lg:mt-10 leading-relaxed max-w-xl">
                Personalized, root-cause care that looks at the whole you — from hormones and
                thyroid health to weight management, healthy aging, and aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-12 lg:mt-14">
                <Link
                  href="/contact"
                  className="text-center whitespace-nowrap bg-white text-[var(--color-dark)] px-9 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Schedule Your Consultation
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-white/85 hover:text-white font-medium transition-colors"
                >
                  Explore Our Services
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Board-Certified Providers</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Personalized Care Plans</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Comprehensive Diagnostic Testing</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">New Patients Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Our comprehensive approach addresses the root causes of your health concerns through advanced diagnostics and personalized treatment plans.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Functional Medicine */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'var(--font-cormorant)'}}>
                Functional Medicine
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Our functional approach addresses the root cause of your health issues rather than just treating symptoms. Each symptom is carefully considered in our comprehensive diagnosis and customized treatment plan.
              </p>
              <Link href="/services/functional-medicine" className="inline-block text-[var(--color-accent)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Hormone Replacement Therapy */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'var(--font-cormorant)'}}>
                Hormone Replacement Therapy
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Many age-related issues stem from hormonal imbalance affecting energy, mood, and vitality. We analyze and treat both women and men to restore optimal hormonal balance and well-being.
              </p>
              <Link href="/services/hormone-replacement-therapy" className="inline-block text-[var(--color-accent)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Thyroid Management */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mt-5" style={{fontFamily: 'var(--font-cormorant)'}}>
                Thyroid Management
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Irregular thyroid function can cause widespread discomfort and health challenges. We provide comprehensive thyroid assessment to properly diagnose and treat the underlying issue.
              </p>
              <Link href="/services/thyroid-management" className="inline-block text-[var(--color-accent)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl text-[var(--color-ink)] mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
                A Partnership Approach to Your Health
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Encompass Wellness and Aesthetics is a functional wellness clinic offering a comprehensive range of medical care, preventative care, nutrition, and aesthetic services designed to improve overall well-being. We believe that true health comes from understanding and addressing the root causes of disease, not simply masking symptoms with temporary solutions. Our approach combines advanced diagnostic testing, evidence-based treatments, and personalized care plans tailored to each patient's unique needs.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Rather than just treating your symptoms, we partner with you in your healthcare journey. Our functional medicine philosophy recognizes that the body is an interconnected system where imbalances in one area often manifest as symptoms in another. Whether you're struggling with fatigue, weight gain, hormonal imbalance, gut issues, autoimmune disease, signs of aging, or sexual dysfunction, we take the time to understand your complete health picture and create a path forward together.
              </p>
              <Link href="/team" className="inline-block text-[var(--color-accent)] font-semibold hover:underline">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16" style={{fontFamily: 'var(--font-cormorant)'}}>
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 01 */}
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                01
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Your journey begins with an in-depth consultation and advanced diagnostic testing to understand your complete health picture. We evaluate hormones, metabolism, nutrient levels, and all contributing factors to your symptoms.
              </p>
            </div>

            {/* Step 02 */}
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                02
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Treatment Plan
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Based on your test results and health goals, we create a customized treatment plan addressing root causes. Your plan may include hormone optimization, nutritional therapy, metabolic support, and aesthetic treatments tailored to your needs.
              </p>
            </div>

            {/* Step 03 */}
            <div className="text-center">
              <div className="text-7xl text-[var(--color-primary)] opacity-60 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                03
              </div>
              <h3 className="text-2xl mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Partnership
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We monitor your progress with regular follow-ups and adjust your treatment plan as needed. Our team provides continuous support, education, and advanced therapies to help you achieve and maintain optimal health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop — their real product lines, linking the Shopify store */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/scraped/encompass_pattern1_web.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10]"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Quality Ingredients
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Pharmaceutical-grade products you can purchase with confidence — nutraceuticals,
            Obagi Medical and SkinCeuticals, all available in our online store.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '/images/scraped/product-photo-1.png', title: 'Nutraceuticals', body: 'Pharmaceutical-grade supplements across hormone balance, gut health, energy, immune and metabolic support.' },
              { img: '/images/scraped/obagi.jpg', title: 'Obagi Medical', body: 'Physician-dispensed skincare for tone, texture, pigmentation and long-term skin health.' },
              { img: '/images/scraped/skinceuticals.jpg', title: 'SkinCeuticals', body: 'Clinically proven antioxidants, correctives and sun protection, including Silymarin CF.' },
            ].map((c) => (
              <a
                key={c.title}
                href="https://store.encompassspa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 bg-[var(--color-light)]">
                  <Image src={c.img} alt={c.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>{c.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{c.body}</p>
                  <span className="inline-block text-[var(--color-accent)] font-semibold text-sm mt-6 group-hover:underline">
                    Shop Now &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Restoring Health Through Functional & Hormone Medicine
          </h2>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}