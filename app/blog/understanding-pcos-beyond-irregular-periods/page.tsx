import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/understanding-pcos-beyond-irregular-periods' },
  title: 'Understanding PCOS: Beyond Irregular Periods | Encompass Wellness',
  description: 'PCOS affects far more than your menstrual cycle. Learn about the complex hormonal condition impacting millions of women and how comprehensive treatment can help.',
  openGraph: {
    title: 'Understanding PCOS: Beyond Irregular Periods',
    description: 'PCOS affects far more than your menstrual cycle. Learn about the complex hormonal condition impacting millions of women and how comprehensive treatment can help.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding PCOS: Beyond Irregular Periods
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When Sarah finally received her PCOS diagnosis at 28, she felt a mix of relief and confusion. Relief because there was finally a name for the symptoms she'd struggled with for years. Confusion because she thought PCOS was just about irregular periods—yet she was experiencing weight gain, thinning hair, persistent acne, and crushing fatigue that made it hard to get through the day.
            </p>
            <p className="mb-6">
              Sarah's experience is far from unique. Polycystic Ovary Syndrome (PCOS) affects approximately 1 in 10 women of reproductive age, making it one of the most common hormonal disorders. Yet despite its prevalence, PCOS remains widely misunderstood—even by those living with it. The condition extends far beyond menstrual irregularities, touching nearly every system in the body and significantly impacting quality of life, metabolic health, and long-term wellness.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is PCOS, Really?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Polycystic Ovary Syndrome is a complex hormonal and metabolic disorder characterized by three primary features: irregular ovulation, elevated androgen levels (male hormones like testosterone), and polycystic ovaries visible on ultrasound. However, the name itself is somewhat misleading—not all women with PCOS have ovarian cysts, and having cysts alone doesn't mean you have PCOS.
            </p>
            <p className="mb-6">
              At its core, PCOS is a syndrome of hormonal imbalance. The ovaries produce higher-than-normal amounts of androgens, disrupting the normal menstrual cycle and preventing regular ovulation. This hormonal disruption creates a cascade of effects throughout the body, influencing metabolism, inflammation, insulin sensitivity, and cardiovascular health.
            </p>
            <p className="mb-6">
              What makes PCOS particularly challenging is its heterogeneity—no two cases look exactly alike. Some women experience severe symptoms while others have mild manifestations. This variability often leads to delayed diagnosis, with many women waiting years before receiving proper evaluation and treatment.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Hidden Symptoms: More Than Just Your Cycle
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While irregular or absent periods are often the most recognized symptom, PCOS manifests in numerous ways that significantly impact daily life:
            </p>
            
            <div className="space-y-4 my-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Metabolic dysfunction:</strong> Insulin resistance affects up to 70% of women with PCOS, increasing risk for type 2 diabetes, weight gain (especially around the abdomen), and difficulty losing weight despite diet and exercise efforts.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Hyperandrogenism effects:</strong> Excess androgens cause hirsutism (unwanted hair growth on face, chest, or back), male-pattern hair loss, persistent acne, and oily skin that doesn't respond to typical treatments.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Reproductive challenges:</strong> Irregular ovulation makes PCOS one of the leading causes of female infertility. Even with conception, pregnancy risks including gestational diabetes and preeclampsia are elevated.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Mental health impact:</strong> Women with PCOS experience depression and anxiety at rates three times higher than the general population, influenced by both hormonal factors and the psychological burden of managing chronic symptoms.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Cardiovascular risk:</strong> PCOS increases risk factors for heart disease, including high blood pressure, elevated cholesterol, and chronic inflammation.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Sleep disturbances:</strong> Sleep apnea is significantly more common in women with PCOS, regardless of weight, contributing to daytime fatigue and cognitive difficulties.
                </div>
              </div>
            </div>

            <p className="mb-6">
              These symptoms don't exist in isolation—they interact and compound, creating a complex clinical picture that requires comprehensive, individualized treatment.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "PCOS is not just a reproductive disorder—it's a whole-body metabolic condition that requires a holistic, long-term approach to management and care."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Root Cause: Insulin Resistance and Hormonal Imbalance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the exact cause of PCOS remains under investigation, research increasingly points to insulin resistance as a central driver. When cells become resistant to insulin, the pancreas compensates by producing more. These elevated insulin levels stimulate the ovaries to produce excess androgens, disrupting normal ovulation and triggering many of PCOS's characteristic symptoms.
            </p>
            <p className="mb-6">
              This insulin-androgen connection explains why PCOS is fundamentally a metabolic disorder with reproductive consequences, rather than simply a gynecological condition. It also explains why lifestyle interventions targeting insulin sensitivity—such as dietary changes, exercise, and weight management—can be remarkably effective in managing symptoms.
            </p>
            <p className="mb-6">
              Genetics also play a significant role. Women with a family history of PCOS, type 2 diabetes, or metabolic syndrome have substantially higher risk. However, genetic predisposition doesn't guarantee disease expression—environmental factors, lifestyle, and early intervention can significantly influence outcomes.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Diagnosis: Why It Often Takes Years
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Despite affecting millions of women, PCOS diagnosis is often delayed for several reasons. Symptoms frequently begin in adolescence but are dismissed as normal teenage hormonal fluctuations. Many women aren't evaluated until they experience difficulty conceiving. The heterogeneous presentation means some women don't fit the "typical" profile, leading providers to overlook the diagnosis.
            </p>
            <p className="mb-6">
              Diagnosis typically requires meeting at least two of three criteria (Rotterdam criteria): irregular ovulation, clinical or biochemical signs of elevated androgens, and polycystic ovaries on ultrasound—after excluding other conditions that mimic PCOS.
            </p>
            <p className="mb-6">
              Comprehensive evaluation should include detailed menstrual history, physical examination, blood tests measuring hormone levels (including androgens, insulin, and glucose), and pelvic ultrasound. Importantly, diagnosis should also assess metabolic markers and cardiovascular risk factors to guide treatment planning.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Evidence-Based Management: A Multi-Modal Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Effective PCOS management requires addressing both immediate symptoms and long-term metabolic health. Treatment is highly individualized based on symptoms, reproductive goals, and metabolic profile:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Lifestyle modification:</strong> Evidence consistently shows that even modest weight loss (5-10%) can significantly improve insulin sensitivity, restore ovulation, and reduce androgen levels. A low-glycemic, anti-inflammatory diet combined with regular exercise forms the foundation of treatment.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Insulin sensitizers:</strong> Medications like metformin improve insulin resistance, often resulting in more regular cycles, improved metabolic markers, and enhanced fertility.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Hormonal regulation:</strong> Birth control pills or other hormonal therapies can regulate menstrual cycles, reduce androgen levels, and improve symptoms like acne and hirsutism for women not currently seeking pregnancy.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Anti-androgen medications:</strong> Spironolactone and similar agents can reduce hirsutism and hair loss caused by elevated androgens.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Fertility support:</strong> For women trying to conceive, ovulation induction medications or assisted reproductive technologies may be recommended.
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-[var(--color-ink)]">Mental health care:</strong> Addressing the psychological impact through counseling, stress management, and when appropriate, treatment for anxiety or depression is essential for comprehensive care.
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Taking Control: What You Can Do Today
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While PCOS is a chronic condition, it's also highly manageable with proper care and commitment. Women who actively engage in treatment typically see significant improvement in symptoms and quality of life:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Seek proper diagnosis if you suspect PCOS—early intervention prevents long-term complications
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Work with providers who understand PCOS as a metabolic disorder, not just a reproductive issue
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Prioritize anti-inflammatory nutrition focusing on whole foods, fiber, lean protein, and healthy fats
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Incorporate both resistance training and cardiovascular exercise to improve insulin sensitivity
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Manage stress through mindfulness, adequate sleep, and activities that support mental health
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Monitor metabolic health regularly, including blood sugar, lipids, and blood pressure
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  Connect with support communities—managing PCOS is easier when you're not doing it alone
                </div>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12">
            <p className="mb-6">
              PCOS is more than irregular periods—it's a complex, chronic condition affecting hormonal balance, metabolism, fertility, and overall health. But with proper diagnosis, comprehensive treatment, and committed self-care, women with PCOS can thrive. The key is understanding that PCOS requires ongoing management, not just symptom suppression, and working with healthcare providers who view the condition through a holistic, metabolic lens.
            </p>
            <p className="mb-6">
              If you're experiencing symptoms of PCOS or have struggled to find effective treatment, specialized care focused on hormone and metabolic health can make a transformative difference. You deserve comprehensive evaluation, individualized treatment, and support in reclaiming your health and vitality.
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine in Edmond, OK. Our team is dedicated to providing evidence-based, compassionate care for complex hormonal and metabolic conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402m-5.668-9.269c-.348 0-.696.014-1.042.042m5.668 9.269A3 3 0 0115.75 21H8.25a3 3 0 01-3-3V6.75" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Hormone Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Connection Between Hormones and Weight
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how hormonal imbalances impact metabolism and why traditional dieting often fails without addressing underlying hormonal issues.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Women's Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Navigating Perimenopause: What to Expect
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Understanding the hormonal transition before menopause and how proactive management can ease symptoms and preserve long-term health.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Energy & Vitality
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Why You're Always Tired: Beyond Caffeine
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Chronic fatigue has complex causes involving thyroid function, adrenal health, and metabolic factors that deserve proper investigation.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you understand and manage PCOS with comprehensive, evidence-based care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}