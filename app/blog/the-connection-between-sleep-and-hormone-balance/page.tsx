import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between Sleep and Hormone Balance | Encompass Wellness and Aesthetics',
  description: 'Discover how sleep quality affects hormone balance and learn evidence-based strategies to optimize both for better health. Expert insights from Edmond, OK.',
  keywords: 'sleep and hormones, hormone balance, sleep quality, cortisol, melatonin, growth hormone, hormone therapy Edmond OK',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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
          <h1 className="text-5xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Connection Between Sleep and Hormone Balance
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
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
            <p className="text-xl mb-8 leading-relaxed">
              You wake up exhausted despite spending eight hours in bed. Your weight won't budge no matter what you try. Your mood swings are unpredictable, and your energy crashes every afternoon. If this sounds familiar, the culprit might not be your diet or exercise routine—it could be the intricate relationship between your sleep patterns and hormone balance.
            </p>

            <p className="mb-8">
              Sleep and hormones exist in a delicate, bidirectional relationship. Poor sleep disrupts hormone production, while hormonal imbalances make quality sleep nearly impossible. Understanding this connection is crucial for anyone struggling with unexplained fatigue, weight gain, mood changes, or metabolic concerns. Let's explore how these systems interact and what you can do to support both.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              How Sleep Regulates Your Hormones
            </h2>

            <p className="mb-6">
              During sleep, your body orchestrates a complex symphony of hormonal activity. This isn't merely rest—it's when critical repair, regeneration, and regulation occur. Several key hormones follow circadian rhythms that depend on consistent, quality sleep:
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Cortisol (The Stress Hormone)</p>
            <p className="mb-6">
              Cortisol should naturally peak in the early morning to help you wake up and gradually decline throughout the day. Poor sleep disrupts this pattern, causing elevated nighttime cortisol levels. Chronically high cortisol contributes to abdominal weight gain, insulin resistance, immune suppression, and anxiety. When you're sleep-deprived, your body perceives this as stress, triggering a cortisol cascade that makes restorative sleep even more elusive.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Growth Hormone</p>
            <p className="mb-6">
              Growth hormone is released primarily during deep sleep stages, particularly in the first few hours of the night. This hormone is essential for tissue repair, muscle growth, fat metabolism, and cellular regeneration. Without sufficient deep sleep, growth hormone production plummets, accelerating aging, reducing muscle mass, and impairing metabolic function.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Melatonin</p>
            <p className="mb-6">
              Often called the "sleep hormone," melatonin does far more than make you drowsy. It's a powerful antioxidant that regulates your circadian rhythm and influences the production of other hormones, including reproductive hormones. Blue light exposure from screens, irregular sleep schedules, and aging all suppress melatonin production, creating a cascade of hormonal disruption.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Leptin and Ghrelin (Hunger Hormones)</p>
            <p className="mb-6">
              These hormones control appetite and satiety. Leptin signals fullness, while ghrelin triggers hunger. Just one night of poor sleep decreases leptin and increases ghrelin, making you hungrier and more likely to crave high-calorie foods. Chronic sleep deprivation essentially reprograms your appetite regulation, making weight management nearly impossible regardless of willpower.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "When patients address both sleep quality and hormonal health together, we see transformative results that neither intervention alone could achieve."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              How Hormone Imbalances Disrupt Sleep
            </h2>

            <p className="mb-6">
              The relationship works both ways. Various hormonal imbalances create sleep disturbances that perpetuate a vicious cycle:
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Thyroid Dysfunction</p>
            <p className="mb-6">
              Both hypothyroidism and hyperthyroidism disrupt sleep architecture. An underactive thyroid causes excessive daytime sleepiness yet poor nighttime sleep quality, while an overactive thyroid can cause insomnia, night sweats, and anxiety that prevents restful sleep.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Sex Hormone Fluctuations</p>
            <p className="mb-6">
              Estrogen and progesterone significantly influence sleep quality. The progesterone drop before menstruation commonly causes insomnia. During perimenopause and menopause, declining estrogen leads to night sweats, hot flashes, and sleep fragmentation. Men with low testosterone often experience sleep apnea and poor sleep quality, which further suppresses testosterone production.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Insulin Resistance</p>
            <p className="mb-6">
              Blood sugar instability causes nighttime awakenings, early morning waking, and difficulty falling back asleep. The midnight blood sugar crash triggers cortisol and adrenaline release, jolting you awake. This pattern is especially common in those with prediabetes, metabolic syndrome, or polycystic ovary syndrome (PCOS).
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Cascading Health Effects
            </h2>

            <p className="mb-6">
              When sleep and hormones fall out of sync, the consequences extend far beyond feeling tired. Research has linked chronic sleep deprivation and hormonal imbalance to:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Increased risk of type 2 diabetes</strong> due to insulin resistance and impaired glucose metabolism</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cardiovascular disease</strong> from chronic cortisol elevation and blood pressure dysregulation</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Weight gain and obesity</strong> that resists conventional diet and exercise approaches</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mood disorders</strong> including depression and anxiety</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Accelerated aging</strong> at the cellular level</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive decline</strong> and memory impairment</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduced immune function</strong> and increased infection susceptibility</span>
              </li>
            </ul>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Practical Steps to Optimize Both Sleep and Hormones
            </h2>

            <p className="mb-6">
              Breaking the sleep-hormone cycle requires a comprehensive approach. Here are evidence-based strategies that support both systems:
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Prioritize Sleep Consistency</p>
            <p className="mb-6">
              Go to bed and wake up at the same time every day, even on weekends. This consistency reinforces your circadian rhythm and stabilizes cortisol and melatonin patterns. Your body craves predictability for optimal hormonal function.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Create an Evening Wind-Down Ritual</p>
            <p className="mb-6">
              Begin dimming lights and reducing stimulation 1-2 hours before bed. This signals your body to increase melatonin production. Consider warm baths, gentle stretching, reading, or meditation. Avoid screens or use blue-light-blocking glasses if you must use devices.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Optimize Your Sleep Environment</p>
            <p className="mb-6">
              Keep your bedroom cool (65-68°F), completely dark, and quiet. Invest in blackout curtains and consider a white noise machine. Your sleeping space should be a sanctuary dedicated solely to sleep and intimacy—not work, TV, or scrolling.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Balance Blood Sugar Throughout the Day</p>
            <p className="mb-6">
              Eat balanced meals with protein, healthy fats, and fiber to prevent blood sugar crashes that disrupt sleep and hormone production. Avoid large meals close to bedtime, but don't go to bed hungry. A small protein-rich snack can stabilize overnight blood sugar.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Manage Stress Proactively</p>
            <p className="mb-6">
              Chronic stress elevates cortisol, which disrupts sleep and other hormones. Incorporate daily stress-reduction practices like deep breathing, meditation, time in nature, or journaling. These aren't luxuries—they're essential for hormonal health.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Exercise Strategically</p>
            <p className="mb-6">
              Regular physical activity improves sleep quality and hormone balance, but timing matters. Intense exercise too close to bedtime can be stimulating. Aim for morning or afternoon workouts, and save gentle movement like yoga or walking for evenings.
            </p>

            <p className="mb-4 font-semibold text-[var(--color-ink)]">Limit Alcohol and Caffeine</p>
            <p className="mb-6">
              While alcohol may help you fall asleep, it fragments sleep architecture and suppresses REM sleep—the stage critical for emotional processing and hormone regulation. Caffeine has a 6-hour half-life, so avoid it after early afternoon if you're sleep-sensitive.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              When to Seek Professional Help
            </h2>

            <p className="mb-6">
              If you've implemented sleep hygiene strategies without improvement, or if you suspect hormonal imbalances are at play, professional evaluation is essential. Comprehensive hormone testing can identify specific imbalances that require targeted treatment.
            </p>

            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in the intricate connection between sleep disorders and hormonal health. Our approach includes detailed hormone panels, sleep assessment, and personalized treatment plans that may incorporate bioidentical hormone therapy, nutritional support, lifestyle optimization, and collaboration with sleep specialists when needed.
            </p>

            <p className="mb-8">
              You don't have to accept poor sleep or hormonal symptoms as inevitable. With the right evaluation and treatment approach, most patients experience significant improvement in both sleep quality and hormonal balance—often within weeks of beginning treatment.
            </p>

            <p className="text-lg font-semibold text-[var(--color-ink)]">
              If you're struggling with sleep disturbances, unexplained fatigue, weight changes, or other symptoms of hormonal imbalance, we're here to help you find answers and solutions.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Encompass Wellness and Aesthetics Clinical Team</div>
            <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Hormone & Metabolic Medicine</div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Hormone Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>Understanding Cortisol and Chronic Stress</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn how chronic stress affects your hormones and what you can do about it.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Women's Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>Hormone Balance During Menopause</h4>
                <p className="text-[var(--color-muted)] text-sm">Navigate perimenopause and menopause with evidence-based hormone support.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Metabolic Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>Thyroid Function and Energy Levels</h4>
                <p className="text-[var(--color-muted)] text-sm">Discover how thyroid health impacts your metabolism, energy, and overall wellness.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you restore balance and reclaim your vitality.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}