import Image from 'next/image'
import Link from 'next/link'
import { CONDITIONS } from '@/lib/data/conditions'

export const metadata = {
  title: 'Conditions We Treat | Encompass Wellness',
  description: 'Fatigue, hormonal imbalance, thyroid disorders, weight gain, gut issues, autoimmune disease and more — the root-cause conditions we treat in Edmond, OK.',
  alternates: { canonical: '/conditions' },
}

export default function ConditionsPage() {
  const conditions = [
    {
      name: "Hormonal Imbalance",
      slug: "hormonal-imbalance",
      description: "Fatigue, mood swings, weight changes, and sleep disturbances often signal hormonal imbalance. We use comprehensive testing and personalized hormone optimization to restore your natural balance and vitality.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      name: "Thyroid Disorders",
      slug: "hypothyroidism",
      description: "Hypothyroidism and hyperthyroidism affect metabolism, energy, weight, and mood. Our comprehensive thyroid assessment identifies the root cause and optimizes treatment for lasting symptom relief.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      name: "Metabolic Syndrome",
      slug: "metabolic-syndrome",
      description: "High blood pressure, elevated blood sugar, excess abdominal fat, and abnormal cholesterol increase disease risk. We address underlying metabolic dysfunction through targeted interventions and lifestyle optimization.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
      name: "Chronic Fatigue",
      slug: "chronic-fatigue-and-low-energy",
      description: "Persistent exhaustion that doesn't improve with rest often has hormonal, metabolic, or nutritional origins. We identify deficiencies and imbalances through comprehensive testing and restore your energy naturally.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      name: "Weight Gain & Obesity",
      slug: "unexplained-weight-gain",
      description: "Stubborn weight gain despite diet and exercise often reflects hormonal or metabolic dysfunction. Our comprehensive approach addresses insulin resistance, hormone imbalance, and metabolic factors for sustainable weight loss.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
    },
    {
      name: "Insulin Resistance & Pre-Diabetes",
      slug: "insulin-resistance",
      description: "Elevated blood sugar, increased belly fat, and difficulty losing weight signal insulin dysfunction. We reverse metabolic damage through targeted nutrition, hormone optimization, and personalized treatment protocols.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      name: "Low Testosterone (Men)",
      slug: "low-testosterone-in-men",
      description: "Decreased energy, reduced muscle mass, low libido, and mood changes often result from declining testosterone. We optimize male hormone levels safely and effectively to restore vitality and performance.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
      name: "Menopause & Perimenopause",
      slug: "menopausal-symptoms",
      description: "Hot flashes, mood swings, sleep disruption, and weight gain during hormonal transition affect quality of life. We provide bioidentical hormone therapy and support to ease symptoms and maintain wellness.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      name: "Adrenal Fatigue & Stress",
      slug: "adrenal-fatigue",
      description: "Chronic stress depletes cortisol and other stress hormones, causing exhaustion, brain fog, and immune dysfunction. We assess adrenal function and restore balance through targeted nutritional and hormonal support.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      name: "Autoimmune Conditions",
      slug: "autoimmune-conditions",
      description: "Hashimoto's thyroiditis, rheumatoid arthritis, and other autoimmune disorders benefit from functional medicine's root-cause approach. We reduce inflammation, heal gut health, and modulate immune response naturally.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    },
    {
      name: "Gut Health & Digestive Issues",
      slug: "gut-dysbiosis",
      description: "Bloating, irregularity, food sensitivities and an imbalanced microbiome drive fatigue, inflammation and immune problems far beyond the gut. We assess and restore gut function as a root cause.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" /></svg>
    },
    {
      name: "Cognitive Decline & Brain Fog",
      slug: "brain-fog-and-cognitive-decline",
      description: "Memory issues, difficulty concentrating, and mental fatigue often stem from hormonal imbalance, inflammation, or nutrient deficiencies. Our approach optimizes brain health through hormone balance and targeted nutrition.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    }
  ]

  const warningSigns = [
    {
      title: "Persistent Symptoms",
      description: "Chronic fatigue, unexplained weight changes, mood disturbances, or sleep issues lasting more than a few weeks",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    },
    {
      title: "Impact on Daily Life",
      description: "Symptoms interfering with work performance, relationships, exercise ability, or overall quality of life",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
      title: "Lack of Improvement",
      description: "No progress with conventional treatments, or worsening symptoms despite medications and lifestyle changes",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Conditions We Treat</h1>
          <p className="text-xl text-white/90">Evidence-based care for a full range of hormone and metabolic health conditions</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">Comprehensive Hormone & Metabolic Care</h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            At Encompass Wellness and Aesthetics in Edmond, OK, we treat the root causes of hormone imbalance, metabolic dysfunction, and age-related health concerns through personalized functional medicine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Link 
                key={index}
                href={`/conditions/${condition.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
              >
                {(() => {
                  const img = CONDITIONS.find((c) => c.slug === condition.slug)?.heroImage
                  return img ? (
                    <div className="relative h-44 bg-[var(--color-light)]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null
                })()}
                <div className="p-8">
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <div className="text-[var(--color-primary)] font-semibold text-sm mt-4 hover:underline">
                  Learn More →
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">When to Seek Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((sign, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="stroke-[var(--color-primary)] mx-auto mb-4">
                  {sign.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)]">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl p-8 max-w-3xl mx-auto border border-[var(--color-border)] animate-fade-up">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4 text-center">
              Crisis Resources
            </h3>
            <div className="space-y-3 text-center">
              <p className="text-[var(--color-ink)]">
                <span className="font-semibold">988 Suicide & Crisis Lifeline:</span> Call or text 988 for 24/7 support
              </p>
              <p className="text-[var(--color-ink)]">
                <span className="font-semibold">Crisis Text Line:</span> Text HOME to 741741
              </p>
              <p className="text-[var(--color-muted)] text-sm mt-4">
                If you or someone you know is experiencing a medical emergency, please call 911 immediately.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Every condition — the curated cards above cover the most common ones,
          this list makes all of them reachable from the hub. */}
      <section className="bg-white py-20 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            All Conditions We Treat
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-12 max-w-2xl mx-auto">
            Do not see yours listed? Call us — most of what we treat starts with the same
            root-cause evaluation.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONDITIONS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/conditions/${c.slug}`}
                  className="block bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl px-5 py-4 text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-6">Ready to Address Your Health Concerns?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a comprehensive consultation to discover the root causes of your symptoms and start your journey to optimal health.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}