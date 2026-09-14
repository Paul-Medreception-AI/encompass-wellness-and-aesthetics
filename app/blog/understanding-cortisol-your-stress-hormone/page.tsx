import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/understanding-cortisol-your-stress-hormone' },
  title: 'Understanding Cortisol: Your Stress Hormone | Encompass Wellness',
  description: 'Learn how cortisol affects your health, why chronic stress matters, and what you can do to support healthy cortisol levels. Expert insights from Edmond, OK hormone specialists.',
  keywords: 'cortisol, stress hormone, adrenal health, chronic stress, hormone balance, cortisol testing, adrenal fatigue, Edmond OK',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Cortisol: Your Stress Hormone
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've felt it before: that racing heartbeat before a presentation, the tension in your shoulders during a difficult conversation, or the surge of energy when you narrowly avoid an accident. These experiences are powered by cortisol—your body's primary stress hormone. While cortisol often gets a bad reputation, it's actually essential for survival. The problem isn't cortisol itself; it's what happens when your body produces too much of it for too long.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In our modern world, chronic stress has become so commonplace that many people don't realize their symptoms—weight gain, fatigue, sleep problems, anxiety—may be linked to dysregulated cortisol levels. Understanding how this powerful hormone works is the first step toward reclaiming your health and vitality.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Cortisol?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cortisol is a steroid hormone produced by your adrenal glands, small organs that sit atop your kidneys. Often called the "stress hormone," cortisol is released in response to stress and low blood sugar. It's part of your body's built-in alarm system—the fight-or-flight response that helped our ancestors survive life-threatening situations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            But cortisol does much more than help you respond to immediate danger. This versatile hormone plays crucial roles throughout your body:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Regulating metabolism and blood sugar levels</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Controlling inflammation and immune response</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Managing how your body uses carbohydrates, fats, and proteins</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Influencing memory formation and emotional regulation</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Regulating blood pressure and cardiovascular function</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Supporting healthy sleep-wake cycles</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In a healthy person, cortisol levels follow a natural rhythm throughout the day. They peak in the early morning (helping you wake up) and gradually decline throughout the day, reaching their lowest point around midnight. This pattern, called the diurnal rhythm, is essential for maintaining energy, focus, and restorative sleep.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When Cortisol Becomes a Problem
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The issue with cortisol isn't its presence—it's chronic elevation. When your body perceives constant stress (whether from work pressure, relationship problems, financial worries, or even hidden sources like chronic inflammation or blood sugar imbalances), your adrenal glands continue pumping out cortisol long after the initial stressor has passed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Unlike our ancestors who faced short-term physical threats, modern stressors are often psychological and ongoing. Your body can't distinguish between a genuine life-or-death situation and a demanding work deadline—it responds the same way. Over time, chronically elevated cortisol can wreak havoc on virtually every system in your body.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
              "Your body can't distinguish between a genuine emergency and everyday stress—which is why chronic worry can cause the same physiological damage as repeated physical threats."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Signs Your Cortisol May Be Out of Balance
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cortisol imbalance can manifest as either consistently high levels (hypercortisolism) or chronically low levels (hypocortisolism). Both patterns create distinct symptoms:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
              Signs of High Cortisol:
            </h3>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="text-[var(--color-ink)] leading-loose">• Weight gain, especially around the midsection and face</li>
              <li className="text-[var(--color-ink)] leading-loose">• Difficulty falling asleep or staying asleep</li>
              <li className="text-[var(--color-ink)] leading-loose">• Anxiety, irritability, or feeling "wired but tired"</li>
              <li className="text-[var(--color-ink)] leading-loose">• High blood pressure</li>
              <li className="text-[var(--color-ink)] leading-loose">• Frequent infections or slow wound healing</li>
              <li className="text-[var(--color-ink)] leading-loose">• Brain fog and memory problems</li>
              <li className="text-[var(--color-ink)] leading-loose">• Increased sugar and carbohydrate cravings</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
              Signs of Low Cortisol:
            </h3>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="text-[var(--color-ink)] leading-loose">• Profound fatigue, especially in the morning</li>
              <li className="text-[var(--color-ink)] leading-loose">• Dizziness upon standing</li>
              <li className="text-[var(--color-ink)] leading-loose">• Salt cravings</li>
              <li className="text-[var(--color-ink)] leading-loose">• Low blood pressure</li>
              <li className="text-[var(--color-ink)] leading-loose">• Difficulty recovering from stress or illness</li>
              <li className="text-[var(--color-ink)] leading-loose">• Mood changes and depression</li>
              <li className="text-[var(--color-ink)] leading-loose">• Loss of body hair</li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's important to note that many of these symptoms overlap with other conditions. That's why professional testing and evaluation are essential for accurate diagnosis and treatment.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Long-Term Health Impact
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research has linked chronic cortisol dysregulation to numerous serious health conditions. When cortisol remains elevated for extended periods, it can contribute to:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Metabolic dysfunction:</strong> Persistently high cortisol promotes insulin resistance, making it harder for your cells to respond to insulin. This can lead to weight gain, prediabetes, and eventually type 2 diabetes. Cortisol also signals your body to store fat, particularly visceral fat around your organs—the most dangerous type for cardiovascular health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Cardiovascular disease:</strong> Elevated cortisol increases blood pressure, raises blood sugar, and promotes inflammation—all risk factors for heart disease and stroke. Studies have shown that people with chronic stress have significantly higher rates of cardiovascular events.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Immune suppression:</strong> While short-term cortisol elevation helps manage inflammation, chronic elevation suppresses immune function, making you more susceptible to infections, slower to heal, and potentially increasing cancer risk.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Mental health challenges:</strong> Cortisol directly affects brain structure and function. Chronic elevation has been linked to anxiety disorders, depression, and cognitive decline. It can even shrink the hippocampus, the brain region critical for memory and learning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Bone loss:</strong> High cortisol interferes with bone formation and increases bone breakdown, potentially leading to osteoporosis and increased fracture risk.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Testing and Diagnosis
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you suspect cortisol imbalance, comprehensive testing is essential. At Encompass Wellness and Aesthetics in Edmond, OK, we use advanced diagnostic tools to assess your cortisol patterns:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Salivary cortisol testing:</strong> Measures cortisol at multiple points throughout the day to assess your natural rhythm</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Blood tests:</strong> Evaluate cortisol along with related hormones like DHEA, which works in balance with cortisol</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Comprehensive metabolic panels:</strong> Assess blood sugar, inflammation markers, and other factors that interact with cortisol</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These tests provide a complete picture of your stress response and help identify the root causes of imbalance—whether they're lifestyle-related, hormonal, or due to underlying health conditions.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Supporting Healthy Cortisol Levels
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that cortisol levels can be improved with targeted interventions. While each person's treatment plan should be individualized, evidence-based strategies include:
          </p>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Lifestyle Modifications:
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize sleep:</strong> Aim for 7-9 hours nightly, maintain consistent sleep/wake times, and create a dark, cool sleeping environment</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Exercise strategically:</strong> Moderate activity reduces cortisol, but excessive high-intensity training can elevate it—balance is key</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice stress management:</strong> Meditation, deep breathing, yoga, and mindfulness have all been shown to lower cortisol</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stabilize blood sugar:</strong> Eat regular meals with adequate protein, healthy fats, and fiber to prevent cortisol spikes</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit caffeine and alcohol:</strong> Both can disrupt cortisol rhythms and sleep quality</span>
              </li>
              <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Build social connections:</strong> Strong relationships and social support buffer against stress and lower cortisol</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For some patients, targeted nutritional supplementation or bioidentical hormone therapy may be appropriate. Adaptogenic herbs like ashwagandha and rhodiola have shown promise in clinical studies for supporting healthy cortisol response. When cortisol dysregulation is severe or linked to other hormonal imbalances, comprehensive hormone replacement therapy may be necessary.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Take Control of Your Stress Response
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding cortisol is more than academic knowledge—it's empowerment. When you recognize how stress affects your body at a hormonal level, you can take meaningful steps to protect your health. Whether you're experiencing vague symptoms like fatigue and weight gain or dealing with diagnosed conditions like metabolic syndrome or anxiety, addressing cortisol balance can be transformative.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, our board-certified providers specialize in hormone and metabolic medicine. We take a comprehensive, personalized approach to cortisol assessment and treatment, looking beyond symptoms to identify and address root causes. If you suspect cortisol imbalance may be affecting your health, we're here to help you restore balance and reclaim your vitality.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Don't wait for stress to steal your health. Schedule a consultation today to learn how targeted hormone optimization can help you feel like yourself again.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients in Edmond, OK achieve optimal health through evidence-based, personalized care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-center mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Hormone Health</div>
                <h4 className="text-xl mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Complete Guide to Hormone Testing
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn which tests reveal the most about your hormonal health and when to consider comprehensive evaluation.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Metabolic Health</div>
                <h4 className="text-xl mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Blood Sugar Balance and Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how insulin resistance affects weight and what you can do to restore metabolic health.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Sleep, Hormones, and Recovery
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the powerful connection between quality sleep and hormonal balance for optimal health.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you understand your cortisol levels and create a personalized plan for optimal hormone balance.
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