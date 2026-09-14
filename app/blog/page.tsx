import Link from 'next/link'

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Resources & Patient Education
          </h1>
          <p className="text-xl text-white/90">
            Evidence-based information to support your health and wellness journey
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Featured Article</span>
            </div>
            <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Complete Guide to Bioidentical Hormone Replacement Therapy
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Hormonal imbalances can dramatically affect your quality of life, causing symptoms like fatigue, weight gain, mood changes, sleep disturbances, and decreased libido. Bioidentical hormone replacement therapy (BHRT) offers a natural solution by restoring hormones to optimal levels using compounds that are molecularly identical to those your body produces naturally.
              </p>
              <p>
                Unlike synthetic hormones, bioidentical hormones are derived from plant sources and customized to match your body's specific needs. This personalized approach ensures that you receive the exact dosage and combination of hormones required to address your unique symptoms and health goals. BHRT can benefit both women experiencing perimenopause or menopause and men dealing with age-related hormone decline.
              </p>
              <p>
                At Encompass Wellness and Aesthetics, we begin with comprehensive hormone testing to establish your baseline levels. Our board-certified providers then create a customized treatment plan that may include estrogen, progesterone, testosterone, thyroid hormones, or DHEA depending on your individual needs. Regular monitoring and adjustments ensure optimal results while minimizing any potential side effects.
              </p>
            </div>
            <Link 
              href="/blog/bioidentical-hormone-replacement-therapy-guide" 
              className="inline-block mt-8 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Article 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Hormone Health</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                7 Signs of Hormonal Imbalance You Shouldn't Ignore
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Learn to recognize the subtle and not-so-subtle symptoms that may indicate your hormones are out of balance, from unexplained weight changes to persistent fatigue and mood swings.
              </p>
              <Link 
                href="/blog/signs-of-hormonal-imbalance" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Weight Management</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Why Traditional Diets Fail: The Metabolic Approach to Weight Loss
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Discover why calorie counting alone rarely works and how addressing underlying metabolic dysfunction can finally help you achieve sustainable weight loss results.
              </p>
              <Link 
                href="/blog/metabolic-approach-to-weight-loss" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Thyroid Health</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Understanding Thyroid Disorders: Symptoms and Treatment Options
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                The thyroid gland plays a crucial role in metabolism, energy levels, and overall health. Learn how thyroid disorders develop and what comprehensive treatment looks like.
              </p>
              <Link 
                href="/blog/understanding-thyroid-disorders" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Men's Health</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Low Testosterone in Men: More Than Just Aging
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Low testosterone affects millions of men, causing fatigue, weight gain, and decreased vitality. Explore how testosterone replacement therapy can restore your quality of life.
              </p>
              <Link 
                href="/blog/low-testosterone-in-men" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Women's Health</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Navigating Perimenopause: What to Expect and How to Thrive
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Perimenopause can begin years before menopause and cause significant symptoms. Learn how to recognize the signs and find relief through hormone optimization.
              </p>
              <Link 
                href="/blog/navigating-perimenopause" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Functional Medicine</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                What is Functional Medicine and How Is It Different?
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Functional medicine addresses the root causes of disease rather than just managing symptoms. Discover how this personalized approach can transform your health outcomes.
              </p>
              <Link 
                href="/blog/what-is-functional-medicine" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Nutrition</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                The Role of Nutrition in Hormone Balance and Metabolism
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                What you eat directly impacts your hormones and metabolic function. Learn which foods support optimal hormone production and which may be disrupting your balance.
              </p>
              <Link 
                href="/blog/nutrition-hormone-balance" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 8 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">IV Therapy</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                IV Nutrient Therapy: Benefits Beyond Hydration
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                IV therapy delivers vitamins, minerals, and amino acids directly to your bloodstream for maximum absorption. Explore the therapeutic benefits for energy, immunity, and recovery.
              </p>
              <Link 
                href="/blog/iv-nutrient-therapy-benefits" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>

            {/* Article 9 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Preventive Care</span>
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                The Importance of Preventive Health Testing in Your 40s and Beyond
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Comprehensive diagnostic testing can identify health issues before they become serious problems. Learn which tests are essential as you age and why early detection matters.
              </p>
              <Link 
                href="/blog/preventive-health-testing" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-semibold transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Schedule a consultation to discuss your health goals and discover how our functional medicine approach can help you achieve optimal wellness.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-10 py-4 rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}