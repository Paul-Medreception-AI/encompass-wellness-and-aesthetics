import Image from 'next/image'
import Link from 'next/link'
import { SERVICES } from '@/lib/data/services'

export const metadata = {
  title: 'Our Services | Encompass Wellness',
  description: 'Functional medicine, hormone replacement, thyroid management, weight loss, IV therapy and aesthetics at our Edmond, OK clinic. Explore all 20 services.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  const services = [
    {
      name: "Functional Medicine",
      description: "Our functional approach addresses the root cause of your health issues rather than just treating symptoms. Each symptom is carefully considered in our comprehensive diagnosis and customized treatment plan.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      name: "Hormone Replacement Therapy",
      description: "Many age-related issues stem from hormonal imbalance affecting energy, mood, and vitality. We analyze and treat both women and men to restore optimal hormonal balance and well-being.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      name: "Thyroid Management",
      description: "Irregular thyroid function can cause widespread discomfort and health challenges. We provide comprehensive thyroid assessment to properly diagnose and treat the underlying issue.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      name: "Weight Loss Programs",
      description: "Losing weight can be complicated, but you don't have to face it alone. Through our comprehensive metabolic approach, we create a customized plan to achieve your health and weight goals.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      name: "Aesthetic Services",
      description: "We offer a variety of aesthetic treatments including laser therapy to help you maintain a youthful and healthy appearance. Pronox therapy is available for pain and anxiety relief during procedures.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      name: "IV Therapy",
      description: "IV therapy offers a quick boost to your health and wellness through direct nutrient delivery. Correct deficiencies, boost immune response, or replenish vitamins, minerals, and amino acids with a single treatment.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Comprehensive Assessment",
      description: "Your journey begins with an in-depth consultation and advanced diagnostic testing to understand your complete health picture. We evaluate hormones, metabolism, nutrient levels, and all contributing factors to your symptoms."
    },
    {
      number: "02",
      title: "Personalized Treatment Plan",
      description: "Based on your test results and health goals, we create a customized treatment plan addressing root causes. Your plan may include hormone optimization, nutritional therapy, metabolic support, and aesthetic treatments tailored to your needs."
    },
    {
      number: "03",
      title: "Ongoing Partnership",
      description: "We monitor your progress with regular follow-ups and adjust your treatment plan as needed. Our team provides continuous support, education, and advanced therapies to help you achieve and maintain optimal health."
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Comprehensive functional medicine and aesthetic services designed to restore your health and vitality from the root cause
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Our integrated approach combines functional medicine with advanced aesthetic treatments to address your complete health and wellness goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {service.heroImage && (
                  <div className="relative h-48 bg-[var(--color-light)] shrink-0">
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={service.heroImage.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 flex-1">
                  {service.description}
                </p>
                <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                  Learn More &rarr;
                </span>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            Your Journey to Optimal Health
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            A proven three-step process designed to identify root causes and restore your vitality
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="text-center lg:text-left">
                  <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 font-light mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule your consultation today and take the first step toward restoring your optimal health
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-colors duration-300"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}