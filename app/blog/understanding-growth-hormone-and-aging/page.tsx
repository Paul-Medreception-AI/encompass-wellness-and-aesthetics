import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Growth Hormone and Aging | Encompass Wellness and Aesthetics',
  description: 'Learn how growth hormone affects aging, metabolism, and vitality. Evidence-based insights from hormone specialists in Edmond, OK.',
  keywords: 'growth hormone, aging, HGH, hormone therapy, anti-aging, metabolism, Edmond OK',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>
          <h1 className="font-serif text-5xl font-light leading-tight mb-6">Understanding Growth Hormone and Aging</h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness and Aesthetics Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8 text-[var(--color-muted)]">
              Have you noticed changes in your energy, body composition, or recovery time as you've gotten older? You're not imagining it. One of the most significant but least understood factors in aging is the natural decline of growth hormone—a powerful regulator of metabolism, muscle mass, and vitality. Understanding how growth hormone works and what happens when levels drop can empower you to make informed decisions about your health and longevity.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Growth Hormone?</h2>
            <p className="mb-6">
              Growth hormone (GH), also known as human growth hormone (HGH) or somatotropin, is a peptide hormone produced by the pituitary gland. While its name suggests a role limited to childhood growth, growth hormone remains essential throughout life. It regulates metabolism, stimulates protein synthesis, promotes fat breakdown, and supports tissue repair and regeneration.
            </p>
            <p className="mb-6">
              Growth hormone is released in pulses, primarily during deep sleep. It works both directly and indirectly through insulin-like growth factor 1 (IGF-1), which is produced in the liver in response to GH stimulation. Together, these hormones orchestrate a wide range of anabolic (tissue-building) processes critical to health and vitality.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">The Natural Decline: Why Growth Hormone Decreases with Age</h2>
            <p className="mb-6">
              Growth hormone secretion peaks during adolescence and young adulthood, then begins a steady decline starting around age 30. By age 60, many adults produce only a fraction of the GH they did in their youth—a phenomenon sometimes called "somatopause." This decline is not a disease, but a natural part of aging. However, the consequences are far-reaching.
            </p>
            <p className="mb-6">
              Research shows that lower GH levels contribute to increased body fat (especially abdominal fat), decreased lean muscle mass, reduced bone density, thinner skin, slower wound healing, and diminished exercise capacity. Many people also report lower energy, poor sleep quality, and reduced overall sense of well-being as GH levels fall.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
              "Growth hormone is one of the master regulators of aging. Its decline touches nearly every system in the body—from metabolism and muscle to mood and resilience."
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">How Growth Hormone Deficiency Affects the Body</h2>
            <p className="mb-6">
              The effects of age-related growth hormone decline are often subtle at first but become more pronounced over time. Understanding these changes can help you recognize whether low GH might be contributing to symptoms you're experiencing.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 text-lg">Common Signs of Low Growth Hormone:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Increased body fat, particularly around the abdomen</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Loss of lean muscle mass and strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Decreased bone density and higher fracture risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced energy and exercise tolerance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thinner, less elastic skin and slower wound healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Elevated LDL cholesterol and cardiovascular risk markers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced quality of life and sense of vitality</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              It's important to note that these symptoms are not specific to GH deficiency alone—they overlap with other hormonal imbalances, nutritional deficiencies, and lifestyle factors. That's why proper evaluation and testing are essential.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">The Science Behind Growth Hormone Therapy</h2>
            <p className="mb-6">
              Growth hormone therapy has been used for decades to treat children with growth disorders and adults with documented GH deficiency due to pituitary disease. More recently, research has explored its role in age-related decline and metabolic health.
            </p>
            <p className="mb-6">
              Clinical studies have shown that appropriate GH replacement in adults with true deficiency can lead to improvements in body composition (increased lean mass, decreased fat mass), bone density, exercise capacity, and quality of life markers. However, growth hormone therapy is not a magic bullet or an anti-aging cure-all. It must be prescribed carefully, monitored closely, and used as part of a comprehensive approach to health.
            </p>
            <p className="mb-6">
              Not everyone is a candidate for growth hormone therapy. It requires thorough medical evaluation, appropriate lab testing (including IGF-1 and sometimes stimulation tests), and careful consideration of risks and benefits. Misuse or overuse of GH can lead to side effects including joint pain, fluid retention, insulin resistance, and increased cancer risk. That's why working with a qualified hormone specialist is critical.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Natural Ways to Support Healthy Growth Hormone Levels</h2>
            <p className="mb-6">
              Even if hormone replacement isn't right for you, there are evidence-based lifestyle strategies that can help optimize your body's natural GH production:
            </p>

            <div className="mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Prioritize deep sleep:</strong> Growth hormone is released primarily during deep, slow-wave sleep. Aim for 7-9 hours of quality sleep per night.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Exercise regularly:</strong> High-intensity interval training (HIIT) and resistance training stimulate GH release. Even moderate exercise is beneficial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Consider intermittent fasting:</strong> Fasting can increase GH secretion, though it's not appropriate for everyone. Consult your provider first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Maintain a healthy body weight:</strong> Excess body fat, particularly visceral fat, suppresses GH production.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Reduce sugar intake:</strong> High blood sugar and insulin levels blunt GH release.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Manage stress:</strong> Chronic stress and elevated cortisol can interfere with healthy hormone balance, including GH.</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Guidance</h2>
            <p className="mb-6">
              If you're experiencing persistent fatigue, unexplained weight gain, loss of muscle mass, or other symptoms that interfere with your quality of life, it may be time to explore whether hormonal imbalances—including growth hormone—are playing a role. Hormone and metabolic medicine specialists can perform comprehensive testing, interpret results in the context of your overall health, and develop personalized treatment plans.
            </p>
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone optimization and metabolic health. We take the time to understand your unique symptoms, goals, and health history, and we use advanced testing to guide evidence-based treatment. Whether you're a candidate for growth hormone therapy or would benefit from lifestyle modifications and other interventions, we're here to help you age with vitality and confidence.
            </p>
            <p className="mb-6">
              Aging is inevitable, but how you age is not. Understanding the role of growth hormone in your health is an important step toward taking control of your longevity and well-being.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Encompass Wellness and Aesthetics Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Hormone & Metabolic Medicine in Edmond, OK</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Hormone Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Role of Testosterone in Healthy Aging</h4>
                <p className="text-[var(--color-muted)] text-sm">Explore how testosterone levels change with age and what you can do about it.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Metabolic Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Boosting Your Metabolism Naturally</h4>
                <p className="text-[var(--color-muted)] text-sm">Science-backed strategies to optimize your metabolic health and energy.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Wellness</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Sleep and Hormone Health</h4>
                <p className="text-[var(--color-muted)] text-sm">Why quality sleep is essential for hormone balance and how to improve it.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you optimize your hormone health and reclaim your vitality.</p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}