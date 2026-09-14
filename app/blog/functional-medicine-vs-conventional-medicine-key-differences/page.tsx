import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/functional-medicine-vs-conventional-medicine-key-differences' },
  title: 'Functional Medicine vs. Conventional Medicine: Key Differences',
  description: 'Discover the key differences between functional medicine and conventional medicine, including treatment approaches, patient care philosophy, and which may be right for you in Edmond, OK.',
  keywords: 'functional medicine, conventional medicine, holistic health, root cause medicine, integrative medicine, Edmond OK',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-['Cormorant',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Functional Medicine vs. Conventional Medicine: Key Differences
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Have you ever left a doctor's appointment feeling like your concerns weren't fully heard? Or received a prescription without understanding the underlying cause of your symptoms? You're not alone. Many people today are seeking a different approach to healthcare—one that looks beyond symptoms to discover root causes and treats the whole person, not just the disease.
            </p>
            <p className="mb-6">
              This is where the distinction between functional medicine and conventional medicine becomes important. While both approaches aim to improve health, they differ significantly in philosophy, methodology, and patient care. Understanding these differences can empower you to make informed decisions about your healthcare journey.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What is Conventional Medicine?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Conventional medicine, also known as allopathic or Western medicine, is the dominant healthcare model in the United States. It focuses primarily on diagnosing and treating specific diseases using pharmaceuticals, surgery, and other interventions. This approach excels in acute care—treating injuries, infections, and medical emergencies where rapid intervention is critical.
            </p>
            <p className="mb-6">
              Conventional medicine typically follows a symptom-based model. When you present with a complaint, the goal is to identify a diagnosis that matches your symptoms and prescribe a standardized treatment protocol. For example, if you have high blood pressure, you'll likely receive medication to lower it. If you have chronic pain, you may be prescribed pain relievers.
            </p>
            <p className="mb-6">
              This approach has achieved remarkable success in many areas—from life-saving surgeries to breakthrough medications. However, it often treats symptoms rather than investigating underlying causes, and care is typically compartmentalized by organ system or specialty.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What is Functional Medicine?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Functional medicine is a patient-centered, science-based approach that seeks to identify and address the root causes of disease. Rather than simply managing symptoms, functional medicine practitioners look at the complex web of interactions in a patient's history, genetics, environment, and lifestyle that can influence long-term health and chronic disease.
            </p>
            <p className="mb-6">
              In functional medicine, the body is viewed as an interconnected system rather than a collection of independent organs. A digestive issue, for example, might be related to hormonal imbalances, inflammation, stress, or nutritional deficiencies. The goal is to understand why the problem exists, not just what the problem is.
            </p>
            <p className="mb-6">
              Functional medicine practitioners spend more time with patients, often conducting extensive intake interviews and advanced laboratory testing. Treatment plans are highly individualized and may include nutrition, lifestyle modifications, supplements, stress management, and, when appropriate, medications.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant',serif]">
              "Functional medicine asks not just what disease you have, but why you have it—and what we can do together to restore your body's natural balance."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Differences Between the Two Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While both models have value, their core philosophies and methods diverge in important ways:
            </p>
            
            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Treatment Focus:</strong> Conventional medicine treats disease; functional medicine optimizes health and prevents disease.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Patient Relationship:</strong> Conventional medicine often involves brief visits; functional medicine prioritizes longer, in-depth consultations.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Diagnosis Method:</strong> Conventional medicine uses standard labs and imaging; functional medicine employs advanced testing to assess underlying dysfunctions.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Treatment Plan:</strong> Conventional medicine follows standardized protocols; functional medicine creates personalized plans based on individual biochemistry.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Patient Role:</strong> Conventional medicine positions the doctor as authority; functional medicine views the patient as an active partner in healing.
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Each Approach Excels
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It's important to understand that these approaches are not mutually exclusive. In fact, the best healthcare often integrates both models strategically.
            </p>
            <p className="mb-6">
              <strong>Conventional medicine excels in:</strong> Emergency care, acute infections, trauma, surgery, and life-threatening conditions. If you're having a heart attack, suffering from a severe infection, or need surgery, conventional medicine's rapid, standardized interventions can be lifesaving.
            </p>
            <p className="mb-6">
              <strong>Functional medicine excels in:</strong> Chronic conditions, complex multi-system disorders, hormone imbalances, autoimmune diseases, metabolic dysfunction, digestive issues, fatigue, and preventive health optimization. When symptoms are vague, persistent, or don't respond to conventional treatments, functional medicine's investigative approach often uncovers hidden imbalances.
            </p>
            <p className="mb-6">
              Many patients benefit from a combination: using conventional medicine for acute needs while working with a functional medicine provider to address underlying chronic issues and optimize long-term wellness.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Lifestyle and Prevention
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most significant differences lies in the emphasis on lifestyle medicine. While conventional medicine may recommend diet and exercise, functional medicine places these interventions at the center of treatment.
            </p>
            <p className="mb-6">
              Research increasingly shows that chronic diseases—including heart disease, diabetes, and many autoimmune conditions—are largely influenced by modifiable lifestyle factors: nutrition, sleep, stress, toxin exposure, and movement. Functional medicine providers work closely with patients to optimize these areas, often preventing the need for more aggressive interventions.
            </p>
            <p className="mb-6">
              This preventive focus can lead to profound improvements not just in symptoms, but in quality of life, energy, mental clarity, and overall vitality.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Which Approach Is Right for You?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The answer depends on your health concerns, goals, and personal preferences. Consider functional medicine if:
            </p>
            
            <div className="space-y-4 my-8 ml-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>You've been diagnosed with a chronic condition but don't feel better despite treatment</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>You have vague symptoms that don't fit a clear diagnosis</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>You're interested in addressing root causes, not just managing symptoms</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>You want to optimize your health and prevent future disease</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>You value a collaborative, individualized approach to care</p>
              </div>
            </div>

            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, our providers specialize in hormone and metabolic medicine using a functional medicine framework. We take the time to understand your unique story, conduct comprehensive testing, and create personalized treatment plans designed to restore balance and vitality.
            </p>
            <p className="mb-6">
              Whether you're struggling with fatigue, weight gain, hormonal imbalances, digestive issues, or simply want to feel your best, we're here to partner with you on your journey to optimal health.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Hormone Imbalance: Signs and Solutions
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn the common signs of hormonal imbalance and how functional medicine can help restore balance.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Truth About Metabolism and Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover why traditional dieting often fails and how metabolic medicine offers lasting solutions.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Wellness
                </div>
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  5 Lifestyle Changes That Support Hormonal Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Simple, science-backed strategies to naturally optimize your hormones and feel your best.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help you discover the root causes of your health concerns and create a personalized path to wellness.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}