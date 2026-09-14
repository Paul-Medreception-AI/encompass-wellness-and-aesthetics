import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/the-truth-about-menopausal-weight-gain' },
  title: 'The Truth About Menopausal Weight Gain | Encompass Wellness',
  description: 'Understand why menopause causes weight gain and what you can do about it. Evidence-based insights from hormone and metabolic medicine specialists in Edmond, OK.',
  openGraph: {
    title: 'The Truth About Menopausal Weight Gain',
    description: 'Understand why menopause causes weight gain and what you can do about it. Evidence-based insights from hormone and metabolic medicine specialists.',
    url: 'https://encompassspa.com/blog/the-truth-about-menopausal-weight-gain',
    type: 'article',
  },
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Truth About Menopausal Weight Gain
          </h1>

          {/* Meta Information */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
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
              You've done everything right—maintained a healthy diet, stayed active, and prioritized your wellness—yet the scale keeps creeping upward. If you're a woman in your 40s or 50s, this frustrating experience is all too common. Menopausal weight gain isn't a reflection of willpower or discipline; it's a complex biological shift driven by hormonal changes that affect metabolism, body composition, and fat distribution.
            </p>
            <p>
              Understanding what's happening in your body during this transition is the first step toward managing your weight effectively and reclaiming control over your health. Let's explore the science behind menopausal weight gain and what you can actually do about it.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Menopause Changes Your Body Composition
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Menopause marks the end of reproductive function, but its effects extend far beyond the cessation of periods. The dramatic decline in estrogen—one of the primary hormones regulating metabolism and fat storage—triggers a cascade of changes throughout your body.
            </p>
            <p className="mb-6">
              Estrogen plays a critical role in how and where your body stores fat. Before menopause, estrogen helps direct fat storage to the hips, thighs, and buttocks. As estrogen levels drop, fat begins accumulating around the abdomen instead—a pattern more commonly associated with male body composition. This visceral fat isn't just cosmetic; it's metabolically active and linked to increased risk of cardiovascular disease, insulin resistance, and inflammation.
            </p>
            <p>
              Additionally, declining estrogen affects muscle mass. Women naturally lose muscle tissue with age, but the hormonal changes of menopause accelerate this process. Since muscle tissue burns more calories at rest than fat tissue, losing muscle means your resting metabolic rate decreases—making it easier to gain weight even if your eating habits haven't changed.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Metabolic Slowdown: It's Not Your Imagination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many women describe feeling like their metabolism has "stopped working" during menopause. While that's not literally true, research confirms that metabolic rate does decline during this transition—by approximately 200-300 calories per day for most women.
            </p>
            <p className="mb-6">
              This metabolic shift results from several converging factors: reduced estrogen, decreased muscle mass, lower physical activity levels, and changes in mitochondrial function (the energy-producing structures within cells). Thyroid function may also be affected, further slowing metabolism.
            </p>
            <p>
              The practical implication? Maintaining your pre-menopausal weight requires consuming fewer calories or increasing energy expenditure—often both. This reality can feel deeply unfair, but understanding it allows you to adjust your approach rather than blaming yourself for changes that are largely biochemical.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Menopausal weight gain isn't about willpower—it's about understanding and working with your body's changing hormonal landscape."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Other Hormones
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While estrogen takes center stage, other hormones also contribute to menopausal weight gain:
            </p>
            <p className="mb-6">
              <strong>Progesterone:</strong> This hormone also declines during menopause, potentially causing water retention and bloating that can make you feel heavier even before actual fat gain occurs.
            </p>
            <p className="mb-6">
              <strong>Testosterone:</strong> Though present in smaller amounts in women, testosterone supports muscle mass and metabolism. Its decline during menopause contributes to muscle loss and metabolic slowdown.
            </p>
            <p className="mb-6">
              <strong>Cortisol:</strong> Stress hormone levels may increase during menopause, particularly in response to sleep disturbances, hot flashes, and mood changes. Elevated cortisol promotes abdominal fat storage and can increase appetite.
            </p>
            <p>
              <strong>Insulin:</strong> Declining estrogen affects insulin sensitivity, making cells less responsive to insulin signals. This can lead to higher blood sugar levels, increased fat storage, and greater difficulty losing weight.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Strategies That Actually Work
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Managing menopausal weight gain requires a comprehensive approach that addresses hormonal, metabolic, and lifestyle factors. Here's what the research supports:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Prioritize protein:</strong> Aim for 25-30 grams of protein per meal to preserve muscle mass, support metabolism, and increase satiety. Protein becomes even more critical during menopause.</p>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Resistance training is essential:</strong> Lifting weights or doing bodyweight exercises 2-3 times per week helps maintain and build muscle, counteracting age-related muscle loss and supporting metabolic health.</p>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Manage stress actively:</strong> Chronic stress elevates cortisol and promotes weight gain. Incorporate daily stress-management practices like meditation, yoga, or simply time in nature.</p>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Prioritize sleep:</strong> Poor sleep disrupts hunger hormones (ghrelin and leptin) and increases cravings. Aim for 7-8 hours of quality sleep nightly, addressing hot flashes or night sweats that interfere with rest.</p>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Consider hormone replacement therapy:</strong> For appropriate candidates, bioidentical hormone replacement can help restore hormonal balance, improve body composition, and support metabolic function.</p>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Focus on whole foods:</strong> Emphasize vegetables, fruits, whole grains, lean proteins, and healthy fats while minimizing processed foods, added sugars, and refined carbohydrates that spike blood sugar.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While lifestyle modifications form the foundation of managing menopausal weight gain, professional medical support can be transformative—particularly when working with providers who specialize in hormone and metabolic medicine.
            </p>
            <p className="mb-6">
              A comprehensive evaluation should include detailed hormone testing (not just estrogen, but thyroid, cortisol, testosterone, and insulin sensitivity markers), body composition analysis, and metabolic rate assessment. This data allows for truly personalized treatment approaches.
            </p>
            <p>
              Medical interventions may include hormone replacement therapy, thyroid optimization, medications to improve insulin sensitivity, or medical weight loss protocols tailored to your unique hormonal profile. The goal isn't just weight loss—it's restoring metabolic health, preserving muscle mass, and supporting long-term wellness.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Moving Forward With Confidence
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Menopausal weight gain is a real, biologically-driven phenomenon—not a personal failing. Understanding the hormonal and metabolic changes underlying this transition empowers you to take targeted action rather than resorting to restrictive diets or excessive exercise that rarely produce lasting results.
            </p>
            <p className="mb-6">
              The most effective approach combines lifestyle strategies (nutrition, exercise, stress management, sleep) with medical support when appropriate. This isn't about fighting your body; it's about working with it through a major life transition.
            </p>
            <p>
              If you're struggling with unexplained weight gain, persistent fatigue, or other symptoms of hormonal imbalance, consider consulting with a provider who specializes in hormone and metabolic medicine. With the right support and personalized treatment plan, you can navigate this transition successfully and maintain your health, vitality, and confidence at every stage of life.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
              Written by the Encompass Wellness and Aesthetics Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Hormone & Metabolic Medicine in Edmond, OK. Our team is dedicated to helping patients understand and optimize their hormonal health through evidence-based care.
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.038 1.038a3.19 3.19 0 01-4.464 0l-1.38-1.38M5 14.5V19c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2v-4.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Hormone Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Bioidentical Hormone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how BHRT can help restore hormonal balance and improve quality of life during menopause.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Metabolic Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Boosting Metabolism After 40: What Really Works
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Evidence-based strategies to support metabolic health as you age.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Connection Between Hormones and Heart Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How hormonal changes affect cardiovascular risk and what you can do to protect your heart.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you navigate menopausal weight gain with personalized hormone and metabolic medicine.
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