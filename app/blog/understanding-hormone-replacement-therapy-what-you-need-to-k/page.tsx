import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/understanding-hormone-replacement-therapy-what-you-need-to-k' },
  title: 'Understanding Hormone Replacement Therapy: What You Need to Know',
  description: 'Learn about hormone replacement therapy from Edmond, OK experts. Discover who benefits, what to expect, and evidence-based insights on HRT for optimal wellness.',
  keywords: 'hormone replacement therapy, HRT, bioidentical hormones, hormone therapy Edmond OK, menopause treatment, testosterone therapy, hormone imbalance',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Hormone Replacement Therapy: What You Need to Know
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness and Aesthetics Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Waking up drenched in sweat. Feeling exhausted despite a full night's sleep. Struggling with weight gain that won't budge. Experiencing mood swings that seem to come out of nowhere. If any of these sound familiar, you're not alone—and you're not imagining it. These symptoms often signal hormonal imbalances that can profoundly affect your quality of life.
            </p>
            <p className="mb-6">
              Hormone Replacement Therapy (HRT) has emerged as a transformative option for thousands of people seeking relief from hormonal disruption. Yet despite its growing popularity and proven benefits, many questions and misconceptions remain. This comprehensive guide will help you understand what HRT is, who it helps, and what the evidence tells us about its safety and effectiveness.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Hormone Replacement Therapy?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Hormone Replacement Therapy involves supplementing or replacing hormones that your body no longer produces in adequate amounts. As we age, our hormone levels naturally decline—estrogen and progesterone in women, testosterone in both men and women, and other hormones like thyroid hormone and DHEA. This decline can begin as early as the 30s and accelerates through perimenopause, menopause, and andropause.
            </p>
            <p className="mb-6">
              HRT can be administered in various forms including pills, patches, creams, gels, pellets, or injections. Bioidentical hormones—which are chemically identical to those your body produces naturally—have become increasingly popular due to their compatibility and effectiveness. The goal of HRT is not just to eliminate symptoms, but to restore hormonal balance and support optimal health across multiple body systems.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Benefits From Hormone Replacement Therapy?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While HRT is often associated with menopausal women, the reality is that both women and men can benefit from hormone optimization at various life stages. Women experiencing perimenopause or menopause frequently turn to HRT for relief from hot flashes, night sweats, vaginal dryness, mood changes, and sleep disturbances. But the benefits extend far beyond symptom relief—HRT can also protect bone density, support cardiovascular health, and improve cognitive function.
            </p>
            <p className="mb-6">
              Men dealing with low testosterone (often called "Low T" or andropause) may experience fatigue, decreased muscle mass, weight gain, low libido, and mental fog. Testosterone replacement therapy can restore energy, improve body composition, enhance mood, and support overall vitality. Additionally, individuals with thyroid disorders, adrenal fatigue, or other hormonal imbalances may benefit from targeted hormone therapy.
            </p>
            <p className="mb-6">
              The key is comprehensive testing and individualized treatment. Not everyone needs HRT, but for those with documented hormone deficiencies and bothersome symptoms, it can be life-changing.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "Hormone replacement isn't about turning back the clock—it's about restoring balance so you can feel like yourself again and maintain optimal health as you age."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evidence: What Research Tells Us
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The conversation around HRT safety has evolved significantly over the past two decades. Early studies raised concerns, but more recent research has provided clearer guidance. The timing hypothesis suggests that starting HRT closer to menopause onset (typically within 10 years) and in younger women (under 60) is associated with greater benefits and lower risks.
            </p>
            <p className="mb-6">
              Current evidence shows that bioidentical HRT, when properly prescribed and monitored, offers substantial benefits including improved quality of life, bone density protection, reduced cardiovascular risk when started early, and potential cognitive benefits. The key factors affecting safety and efficacy include the type of hormones used, the delivery method, the dosage, timing of initiation, and individual health history.
            </p>
            <p className="mb-6">
              For men, testosterone replacement therapy has been shown to improve energy, muscle mass, mood, and sexual function when appropriately indicated. Ongoing monitoring is essential to ensure safety and optimize outcomes. The North American Menopause Society, the Endocrine Society, and other major medical organizations support the use of HRT for appropriate candidates with careful individualization and monitoring.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect: The HRT Journey
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Starting HRT is a process, not a one-time event. Your journey typically begins with a comprehensive evaluation including a detailed health history, physical examination, and laboratory testing to measure baseline hormone levels. Your provider will discuss your symptoms, health goals, and any risk factors to develop a personalized treatment plan.
            </p>
            <p className="mb-6">
              Once you begin therapy, you may notice some improvements within days to weeks—such as better sleep and improved energy—while other benefits like bone density protection and body composition changes unfold over months. Regular follow-up is crucial. Your provider will monitor your symptoms, hormone levels, and overall health, making adjustments as needed to optimize your therapy.
            </p>
            <p className="mb-6">
              Most people find that with the right regimen, they experience significant improvements in energy, mood, sleep quality, physical comfort, cognitive clarity, and overall vitality. The goal is to use the lowest effective dose to achieve optimal balance and wellbeing.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Important Considerations and Safety
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While HRT is safe and effective for many people, it's not right for everyone. Certain health conditions may make HRT inadvisable or require extra caution. A thorough evaluation with a qualified provider is essential before starting any hormone therapy.
            </p>
            
            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-6">
              <h3 className="font-serif text-xl text-[var(--color-ink)] mb-4">Key Safety Practices:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Work with a qualified provider experienced in hormone optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get comprehensive baseline testing before starting therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Attend regular follow-up appointments for monitoring and adjustment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Communicate openly about any new symptoms or concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support HRT with healthy lifestyle choices—nutrition, exercise, stress management, and quality sleep</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Remember that HRT is most effective when combined with a comprehensive approach to wellness. Your hormones don't exist in isolation—they interact with your diet, activity level, sleep patterns, and stress levels. Optimizing these factors enhances the benefits of hormone therapy and supports long-term health.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the Next Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing symptoms that may be related to hormonal imbalance—whether fatigue, weight changes, mood disturbances, sleep problems, or decreased vitality—it's worth having a conversation with a qualified provider. Hormone replacement therapy has helped countless individuals reclaim their energy, comfort, and quality of life.
            </p>
            <p className="mb-6">
              The journey to hormonal balance begins with understanding. Armed with accurate information and guided by experienced professionals, you can make informed decisions about your health and wellbeing. You don't have to accept declining energy, uncomfortable symptoms, or diminished vitality as inevitable parts of aging. With the right support and treatment, you can feel like yourself again—and thrive in the years ahead.
            </p>
            <p>
              At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in hormone and metabolic medicine, offering comprehensive evaluation, personalized treatment plans, and ongoing support. We're here to help you navigate the journey to optimal hormonal health with expertise, compassion, and evidence-based care.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-serif text-xl text-[var(--color-ink)] mb-2">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal wellness through evidence-based, personalized care.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Wellness
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Signs You May Have a Hormonal Imbalance
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn to recognize the common symptoms of hormone imbalance and when to seek professional evaluation.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Bioidentical vs. Synthetic Hormones: Understanding the Difference
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore the differences between bioidentical and synthetic hormone therapy options.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Connection Between Hormones and Weight Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover how hormone imbalances affect metabolism and what you can do about it.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you explore your options and create a personalized path to optimal hormonal health.
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