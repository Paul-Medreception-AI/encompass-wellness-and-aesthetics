import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/how-stress-affects-your-hormones-and-metabolism' },
  title: 'How Stress Affects Your Hormones and Metabolism',
  description: 'Learn how chronic stress impacts cortisol, thyroid function, insulin resistance, and metabolic health. Expert insights from Edmond\'s hormone specialists.',
  openGraph: {
    title: 'How Stress Affects Your Hormones and Metabolism',
    description: 'Discover the connection between stress, hormones, and metabolism with evidence-based insights from board-certified providers.',
    images: [{ url: '/logo.png' }],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            {' › '}
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            {' › '}
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Hormone Health</div>
          <h1 className="text-5xl font-light leading-tight mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            How Stress Affects Your Hormones and Metabolism
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>·</span>
            <span>7 min read</span>
            <span>·</span>
            <span>By Encompass Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="text-xl leading-relaxed mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              You've been eating well, exercising regularly, and getting enough sleep—yet the scale won't budge. You feel exhausted, anxious, and like your body is working against you. What if the real culprit isn't your willpower or your meal plan, but the chronic stress that's quietly rewiring your hormonal balance?
            </p>

            <p className="mb-8">
              Stress isn't just a mental burden—it's a powerful biological force that can disrupt nearly every system in your body. When stress becomes chronic, it triggers a cascade of hormonal changes that interfere with metabolism, energy production, weight management, and overall wellness. Understanding this connection is the first step toward reclaiming your health.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              The Stress-Hormone Connection: What Happens in Your Body
            </h2>

            <p className="mb-6">
              When you encounter stress—whether it's a looming deadline, financial worry, relationship conflict, or chronic sleep deprivation—your body activates its "fight or flight" response. This ancient survival mechanism floods your bloodstream with cortisol, the primary stress hormone produced by your adrenal glands.
            </p>

            <p className="mb-6">
              In short bursts, cortisol is helpful. It mobilizes glucose for quick energy, sharpens focus, and temporarily suppresses non-essential functions. But when stress becomes constant, cortisol levels remain elevated day after day, and that's when problems begin.
            </p>

            <p className="mb-8">
              Chronic high cortisol disrupts the delicate balance of other hormones including thyroid hormones, insulin, estrogen, progesterone, and testosterone. This domino effect touches nearly every aspect of your metabolic health.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              How Stress Sabotages Your Metabolism
            </h2>

            <p className="mb-6">
              One of cortisol's most frustrating effects is its impact on metabolism and weight. Elevated cortisol signals your body to store fat—especially visceral fat around your abdomen. This isn't vanity weight; visceral fat is metabolically active and increases your risk for cardiovascular disease, diabetes, and inflammation.
            </p>

            <p className="mb-6">
              Cortisol also drives cravings for high-calorie, high-sugar comfort foods. It's not a lack of discipline—it's biology. Your brain is seeking quick energy to cope with perceived danger. Meanwhile, cortisol breaks down muscle tissue to convert protein into glucose, which slows your metabolic rate over time.
            </p>

            <p className="mb-8">
              Additionally, chronic stress impairs insulin sensitivity. When cells become resistant to insulin, your body struggles to regulate blood sugar effectively. This leads to energy crashes, increased hunger, fat storage, and a heightened risk of developing Type 2 diabetes.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "Chronic stress doesn't just make you feel tired—it fundamentally alters how your body processes energy, stores fat, and regulates hunger."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              The Thyroid-Stress Axis: When Your Metabolism Slows Down
            </h2>

            <p className="mb-6">
              Your thyroid gland acts as your body's metabolic thermostat, regulating energy production, body temperature, and weight. Under chronic stress, cortisol interferes with thyroid hormone production and conversion, particularly the conversion of inactive T4 into active T3—the hormone that actually drives your metabolism.
            </p>

            <p className="mb-6">
              High cortisol can also increase levels of reverse T3, an inactive form that blocks thyroid receptors and mimics hypothyroidism. This means even if your TSH (thyroid-stimulating hormone) looks normal on a standard lab panel, you may still experience low energy, brain fog, weight gain, cold intolerance, and hair thinning.
            </p>

            <p className="mb-8">
              Many patients in Edmond, OK come to us frustrated because they've been told their thyroid is "fine," yet they feel anything but. A comprehensive hormone evaluation can reveal the hidden impact of stress on thyroid function that routine tests often miss.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Sex Hormones and Stress: More Than Reproductive Health
            </h2>

            <p className="mb-6">
              Cortisol production competes with sex hormone production because they share the same biochemical precursor: pregnenolone. When your body is under constant stress, it prioritizes cortisol over estrogen, progesterone, and testosterone—a phenomenon known as "pregnenolone steal."
            </p>

            <p className="mb-6">
              In women, this can lead to irregular periods, worsened PMS, fertility challenges, and early or more severe menopausal symptoms. Low progesterone contributes to anxiety, insomnia, and mood swings. Low estrogen affects bone health, skin elasticity, and cardiovascular protection.
            </p>

            <p className="mb-8">
              In men, chronic stress lowers testosterone, leading to decreased libido, fatigue, loss of muscle mass, increased belly fat, and diminished motivation. Testosterone is essential not just for sexual health, but for metabolic vitality, mood regulation, and cognitive sharpness.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Breaking the Cycle: What You Can Do
            </h2>

            <p className="mb-6">
              The good news is that while stress profoundly impacts your hormones and metabolism, you can take meaningful steps to restore balance. It requires a holistic approach that addresses lifestyle, nutrition, sleep, and medical support.
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Prioritize sleep:</strong> Aim for 7-9 hours per night. Poor sleep elevates cortisol and disrupts leptin and ghrelin, the hormones that regulate hunger.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Balance your blood sugar:</strong> Eat protein and healthy fats with every meal. Avoid long fasting windows if you're already stressed, as this can spike cortisol further.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Move mindfully:</strong> Moderate exercise reduces stress and supports metabolic health. However, overtraining while stressed can worsen cortisol imbalance. Yoga, walking, and strength training are excellent choices.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Practice stress management:</strong> Whether through meditation, deep breathing, journaling, or therapy, actively managing emotional stress is essential for hormonal healing.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Support your adrenals:</strong> Adaptogens like ashwagandha and rhodiola, along with magnesium and B vitamins, can support adrenal health. Always consult a provider before starting supplements.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Get comprehensive testing:</strong> Standard labs often miss subclinical hormone imbalances. Working with a provider who specializes in hormone and metabolic medicine ensures you receive a full picture.
                </div>
              </div>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Seek Professional Help
            </h2>

            <p className="mb-6">
              If you've been struggling with unexplained weight gain, fatigue, mood changes, irregular periods, low libido, brain fog, or difficulty managing stress despite your best efforts, it may be time to explore the root cause with a qualified provider.
            </p>

            <p className="mb-6">
              Hormone and metabolic imbalances don't resolve on their own, and they often worsen over time without intervention. At Encompass Wellness and Aesthetics, we specialize in uncovering the hidden connections between stress, hormones, and metabolism. Our approach combines advanced diagnostics, personalized treatment plans, and compassionate support to help you feel like yourself again.
            </p>

            <p className="mb-8">
              You don't have to navigate this alone. Whether you're in Edmond, OK or the surrounding areas, our team is here to partner with you on your journey to optimal health and vitality.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1">Written by the Encompass Wellness and Aesthetics Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Board-certified providers specializing in Hormone & Metabolic Medicine, serving patients in Edmond, OK with personalized, evidence-based care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="h-48 bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Hormone Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Cortisol: The Stress Hormone
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">Learn how cortisol affects your body and what you can do to keep it balanced.</p>
              </div>
            </a>

            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="h-48 bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Metabolic Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Thyroid Function and Weight Management
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">Discover the critical connection between thyroid health and metabolism.</p>
              </div>
            </a>

            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="h-48 bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)]"></div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Sleep and Hormone Balance: Why Rest Matters
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">Explore how quality sleep supports hormonal health and metabolic function.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you restore balance and reclaim your vitality.</p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}