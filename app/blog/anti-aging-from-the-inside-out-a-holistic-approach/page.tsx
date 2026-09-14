import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/anti-aging-from-the-inside-out-a-holistic-approach' },
  title: 'Anti-Aging from the Inside Out: A Holistic Approach',
  description: 'Discover how a comprehensive approach to anti-aging—combining hormone optimization, nutrition, lifestyle, and aesthetics—can help you look and feel your best at any age.',
  openGraph: {
    title: 'Anti-Aging from the Inside Out: A Holistic Approach',
    description: 'Discover how a comprehensive approach to anti-aging—combining hormone optimization, nutrition, lifestyle, and aesthetics—can help you look and feel your best at any age.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-white/70 mb-4 inline-block">Patient Education</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant'}}>
            Anti-Aging from the Inside Out: A Holistic Approach
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
            <span>Published January 15, 2025</span>
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Aging is inevitable, but how we age is not. Every day, patients come to us concerned not just with the lines on their faces, but with fatigue, weight gain, cognitive changes, and a persistent feeling that they're not quite themselves anymore. They've tried the creams, the treatments, the diets—but something is still missing. That's because true anti-aging doesn't start on the surface. It starts deep within, at the cellular and hormonal level, where the real signs of aging take root.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, we believe that comprehensive anti-aging care requires a holistic approach—one that addresses not only what you see in the mirror, but what's happening inside your body. When we optimize hormones, support metabolic health, nourish the body properly, and complement these efforts with thoughtful aesthetic treatments, the results are transformative. You don't just look younger—you feel younger, more energized, and more like yourself.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            What Does "Anti-Aging from the Inside Out" Really Mean?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Anti-aging from the inside out means addressing the root physiological processes that drive aging, rather than only treating the symptoms. Traditional cosmetic treatments—Botox, fillers, lasers—can refresh your appearance, and they absolutely have their place. But when your hormones are imbalanced, your metabolism is sluggish, or your body is inflamed and undernourished, no topical treatment will restore the vitality you're seeking.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A holistic anti-aging approach recognizes that your skin, energy, mental clarity, weight, and overall well-being are interconnected. Hormones like estrogen, testosterone, progesterone, and thyroid hormones play crucial roles in maintaining skin elasticity, muscle mass, bone density, cognitive function, and metabolic rate. When these hormones decline—as they naturally do with age—the effects ripple throughout your entire system.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            By restoring hormonal balance, optimizing nutrition, supporting detoxification pathways, managing stress, and selectively using aesthetic treatments, we can slow—and in many cases reverse—visible and invisible signs of aging.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            The Role of Hormones in Aging
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Hormones are the body's chemical messengers, coordinating everything from metabolism to mood to cellular repair. As we age—particularly after 35—hormone production declines. For women, perimenopause and menopause bring dramatic drops in estrogen and progesterone. For men, testosterone levels gradually decrease, a condition sometimes called andropause.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These hormonal shifts contribute to:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Skin changes:</strong> Loss of collagen, dryness, thinning, increased wrinkles</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Weight gain:</strong> Especially around the abdomen, despite no changes in diet or exercise</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Fatigue and low energy:</strong> Difficulty getting through the day, even with adequate sleep</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Cognitive changes:</strong> Brain fog, memory lapses, difficulty concentrating</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Decreased libido and sexual function</strong></span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Mood swings, irritability, anxiety, or depression</strong></span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Loss of muscle mass and bone density</strong></span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Bioidentical hormone replacement therapy (BHRT), when appropriately prescribed and monitored, can restore hormonal balance and significantly improve quality of life. It's not about turning back the clock—it's about giving your body the tools it needs to function optimally at any age.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif" style={{fontFamily: 'Cormorant'}}>
            "True anti-aging is not about looking 25 forever. It's about feeling strong, vibrant, and confident in your body at every stage of life."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Metabolic Health: The Foundation of Longevity
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your metabolism is the sum of all chemical reactions that keep you alive. It governs how you produce energy, store fat, regulate blood sugar, and respond to stress. A healthy metabolism is essential for anti-aging because metabolic dysfunction accelerates aging at the cellular level.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Conditions like insulin resistance, metabolic syndrome, and chronic inflammation are major drivers of premature aging. They increase oxidative stress, damage DNA, promote fat storage, and impair cellular repair. Over time, this manifests as weight gain, cardiovascular disease, type 2 diabetes, and accelerated skin aging.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics, we assess metabolic markers like fasting insulin, hemoglobin A1c, lipid panels, and inflammatory markers (CRP, homocysteine) to understand your metabolic health. Based on these findings, we create individualized plans that may include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Personalized nutrition plans to stabilize blood sugar and reduce inflammation</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Targeted supplementation (omega-3s, vitamin D, magnesium, antioxidants)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Exercise prescriptions emphasizing both resistance training and cardiovascular health</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Medications when appropriate to optimize insulin sensitivity and metabolic function</span>
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Nutrition and Cellular Repair
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What you eat directly influences how you age. A diet rich in colorful vegetables, healthy fats, quality proteins, and antioxidants provides the building blocks your body needs to repair damaged cells, produce collagen, and fight oxidative stress.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            On the flip side, diets high in sugar, refined carbohydrates, and processed foods promote inflammation, glycation (a process that stiffens collagen and accelerates wrinkles), and cellular damage. Research shows that caloric restriction and intermittent fasting can activate longevity pathways, improve autophagy (the body's cellular cleanup process), and extend healthspan.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            We work with each patient to develop a sustainable, nutrient-dense eating pattern that supports hormonal balance, metabolic health, and long-term vitality. This isn't about restrictive diets—it's about nourishing your body in a way that supports anti-aging from the inside out.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Lifestyle Factors: Sleep, Stress, and Movement
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Hormones and nutrition are critical, but lifestyle factors are equally powerful. Chronic stress, poor sleep, and sedentary behavior accelerate aging through multiple pathways—raising cortisol, disrupting circadian rhythms, impairing detoxification, and promoting inflammation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Sleep</strong> is when your body repairs itself. Growth hormone peaks during deep sleep, skin cells regenerate, and the brain clears metabolic waste. Chronic sleep deprivation is associated with weight gain, insulin resistance, cognitive decline, and premature skin aging.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Stress management</strong> is essential. Chronic stress floods the body with cortisol, which breaks down collagen, promotes abdominal fat storage, and impairs immune function. Practices like mindfulness, yoga, breathwork, and time in nature can lower cortisol and support longevity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Movement</strong> is medicine. Resistance training preserves muscle mass and bone density, while cardiovascular exercise supports metabolic health and brain function. Regular physical activity is one of the most effective anti-aging interventions available.
          </p>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Aesthetic Treatments as Part of a Comprehensive Plan
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once your internal health is optimized, aesthetic treatments can beautifully enhance your results. When hormones are balanced, skin is nourished from within, and inflammation is controlled, treatments like neurotoxins, dermal fillers, laser therapy, and microneedling work even better—and last longer.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            We view aesthetic care as the final layer of a holistic anti-aging strategy, not the starting point. This integrative approach means you're not just masking signs of aging—you're addressing their root causes while refining your appearance with precision and artistry.
          </p>

          {/* Closing */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'Cormorant'}}>
            Take Control of How You Age
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Aging is not something that happens to you—it's something you can actively shape. By addressing hormonal balance, optimizing metabolic health, nourishing your body, managing stress, prioritizing sleep, and complementing these efforts with thoughtful aesthetic treatments, you can look and feel your absolute best at any age.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in comprehensive, personalized anti-aging care. If you're ready to take a holistic approach to aging—one that honors your body, your goals, and your life—we're here to guide you every step of the way.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal health and vitality through personalized, evidence-based care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center" style={{fontFamily: 'Cormorant'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402M5 14.5V12m14.8 3.3V12m-7.4 8.5h2.4" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  Understanding Bioidentical Hormone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn how BHRT can restore hormonal balance and improve quality of life during perimenopause, menopause, and andropause.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:text-[var(--color-accent-dark)] transition-colors">
                  Read More →
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  Metabolic Health and Weight Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how optimizing metabolic function can help you achieve sustainable weight loss and long-term wellness.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:text-[var(--color-accent-dark)] transition-colors">
                  Read More →
                </span>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant'}}>
                  The Connection Between Stress and Aging
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore how chronic stress accelerates aging and what you can do to protect your body and mind.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:text-[var(--color-accent-dark)] transition-colors">
                  Read More →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our team is here to help you achieve optimal health and vitality through personalized, evidence-based care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}