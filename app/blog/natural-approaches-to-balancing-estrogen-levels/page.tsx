import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Natural Approaches to Balancing Estrogen Levels | Encompass Wellness and Aesthetics',
  description: 'Discover evidence-based natural strategies for supporting healthy estrogen balance through nutrition, lifestyle, and holistic wellness approaches. Expert guidance from Edmond, OK.',
  openGraph: {
    title: 'Natural Approaches to Balancing Estrogen Levels',
    description: 'Evidence-based natural strategies for supporting healthy estrogen balance through nutrition, lifestyle, and holistic wellness approaches.',
    url: 'https://encompassspa.com/blog/natural-approaches-to-balancing-estrogen-levels',
    type: 'article',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Encompass Wellness and Aesthetics' }]
  }
}

export default function BlogPost() {
  return (
    <>
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
          <h1 className="font-serif text-5xl font-light leading-tight mb-6">
            Natural Approaches to Balancing Estrogen Levels
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6 leading-relaxed">
              For many women, the journey through hormonal changes—whether during perimenopause, menopause, or other life stages—can feel overwhelming. Estrogen plays a crucial role in nearly every system in your body, from bone health and cardiovascular function to mood regulation and cognitive clarity. When estrogen levels become imbalanced, the effects ripple through your daily life in ways both subtle and profound.
            </p>
            <p className="mb-6">
              The good news? Your body has remarkable capacity for self-regulation when given the right support. While hormone therapy has its place and can be transformative for many women, natural approaches to supporting estrogen balance offer powerful tools that work with your body's innate wisdom. Let's explore evidence-based strategies that can help you reclaim hormonal harmony.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Estrogen Balance
            </h2>
            <p className="mb-6">
              Estrogen isn't a single hormone—it's actually a family of three: estradiol, estrone, and estriol. Throughout your life, the ratios of these hormones shift, and problems arise not just from low estrogen, but from imbalances between estrogen and progesterone, excessive estrogen metabolites, or what's known as "estrogen dominance."
            </p>
            <p className="mb-6">
              Symptoms of estrogen imbalance can include irregular periods, hot flashes, night sweats, mood swings, brain fog, weight gain (especially around the midsection), sleep disturbances, and changes in libido. But here's what's important: these symptoms aren't inevitable, and they're not something you simply have to endure.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Nutrition: The Foundation of Hormonal Health
            </h2>
            <p className="mb-6">
              What you eat directly influences how your body produces, metabolizes, and eliminates estrogen. A strategic approach to nutrition can make a remarkable difference in how you feel.
            </p>
            <div className="bg-[var(--color-light)] rounded-lg p-6 my-8">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Nutritional Strategies
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Cruciferous vegetables:</strong> Broccoli, cauliflower, Brussels sprouts, and kale contain compounds like indole-3-carbinol that support healthy estrogen metabolism</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Fiber-rich foods:</strong> At least 25-30 grams daily helps your body eliminate excess estrogen through the digestive tract</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Phytoestrogens:</strong> Found in flaxseeds, sesame seeds, and legumes, these plant compounds can help modulate estrogen activity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Quality protein:</strong> Essential for hormone production and helps stabilize blood sugar, which directly affects estrogen balance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Healthy fats:</strong> Omega-3s from wild-caught fish, walnuts, and algae oil support anti-inflammatory pathways that protect hormone balance</span>
                </li>
              </ul>
            </div>
            <p className="mb-6">
              Equally important is what to minimize: processed foods, excess sugar, and alcohol can all interfere with estrogen metabolism and contribute to hormonal imbalance. This doesn't mean perfection—it means consistent, informed choices that support your body's natural processes.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Movement and Exercise: Finding Your Balance
            </h2>
            <p className="mb-6">
              Exercise is a powerful tool for hormonal health, but the relationship is nuanced. Too much high-intensity exercise can actually stress the endocrine system and worsen hormonal imbalances, while too little movement leads to weight gain and metabolic dysfunction that also disrupts estrogen.
            </p>
            <p className="mb-6">
              Research suggests that moderate, consistent exercise—think 150 minutes per week of activities you genuinely enjoy—supports healthy estrogen levels. Strength training is particularly valuable because muscle tissue helps regulate metabolism and insulin sensitivity, both of which influence estrogen balance. Yoga and tai chi offer the added benefit of stress reduction, which we'll explore next.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-serif leading-relaxed">
                "The most effective natural approach to hormone balance isn't about adding one magic supplement or following a rigid protocol. It's about creating a lifestyle that supports your body's innate ability to self-regulate—through nutrition, movement, stress management, and sleep."
              </p>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Stress Management: The Missing Link
            </h2>
            <p className="mb-6">
              Chronic stress is one of the most overlooked contributors to estrogen imbalance. When you're under constant stress, your body prioritizes producing cortisol over other hormones—a phenomenon sometimes called "progesterone steal." Since progesterone helps balance estrogen, this can lead to or worsen estrogen dominance.
            </p>
            <p className="mb-6">
              Effective stress management isn't a luxury; it's a biological necessity for hormonal health. This might include:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Daily mindfulness or meditation practice, even just 10 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Breathwork techniques that activate the parasympathetic nervous system</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Time in nature, which research shows lowers cortisol levels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Boundaries around work and personal time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Regular connection with supportive friends and family</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Sleep: Your Hormonal Reset Button
            </h2>
            <p className="mb-6">
              Quality sleep is when your body performs much of its hormonal regulation and repair. Disrupted sleep directly impacts estrogen levels and can create a vicious cycle: hormonal imbalances disrupt sleep, and poor sleep worsens hormonal imbalances.
            </p>
            <p className="mb-6">
              Prioritizing sleep hygiene—consistent bedtimes, a cool dark room, limiting screens before bed, and managing evening light exposure—can significantly improve both sleep quality and hormonal balance. Some women find that magnesium supplementation or herbal teas like chamomile support better sleep without the side effects of prescription medications.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Reducing Environmental Estrogens
            </h2>
            <p className="mb-6">
              We're exposed daily to xenoestrogens—synthetic compounds that mimic estrogen in the body. These are found in plastics, personal care products, pesticides, and many household items. While you can't eliminate all exposure, you can significantly reduce your burden:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Choose glass or stainless steel food storage over plastic</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Select personal care products free from parabens and phthalates</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Buy organic produce when possible, especially for the "dirty dozen"</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Filter your drinking water to remove potential endocrine disruptors</span>
              </li>
              <li className="flex items-start gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Avoid heating food in plastic containers</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Professional Guidance
            </h2>
            <p className="mb-6">
              Natural approaches are powerful, but they're not always sufficient on their own—and that's okay. If you've been implementing these strategies for several months without improvement, or if your symptoms are significantly impacting your quality of life, it's time to work with a healthcare provider who specializes in hormone health.
            </p>
            <p className="mb-6">
              Comprehensive hormone testing can reveal exactly what's happening in your body, allowing for targeted interventions. Sometimes bioidentical hormone therapy, used in conjunction with lifestyle approaches, offers the best outcome. The goal isn't to choose between natural and medical approaches—it's to find the right combination that helps you feel like yourself again.
            </p>
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, we take a comprehensive approach to hormone health, combining advanced testing with both natural and medical interventions tailored to your unique needs. You don't have to navigate this journey alone, and you don't have to settle for feeling less than your best.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Encompass Wellness and Aesthetics Clinical Team</div>
            <div className="text-sm text-[var(--color-muted)]">Board-certified providers specializing in Hormone & Metabolic Medicine</div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Bioidentical Hormone Therapy</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Learn about hormone replacement options and how they differ from synthetic alternatives.</p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Perimenopause: What to Expect</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Navigate the transition with confidence through understanding and preparation.</p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Gut-Hormone Connection</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Discover how digestive health influences hormonal balance and what you can do.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-8 text-white/90">Our team is here to help you achieve optimal hormone balance and feel your best.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </>
  )
}