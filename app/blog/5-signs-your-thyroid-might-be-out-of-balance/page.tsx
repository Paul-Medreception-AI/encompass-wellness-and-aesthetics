import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Signs Your Thyroid Might Be Out of Balance | Encompass Wellness and Aesthetics',
  description: 'Discover the subtle signs of thyroid imbalance and learn when to seek professional help. Expert insights from Edmond, OK hormone specialists.',
  keywords: 'thyroid symptoms, thyroid imbalance, hypothyroidism, hyperthyroidism, hormone health, thyroid treatment Edmond OK',
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
            Hormone Health
          </div>

          {/* Title */}
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light leading-tight text-center mb-8">
            5 Signs Your Thyroid Might Be Out of Balance
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Encompass Wellness Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              You've been feeling "off" for months—maybe even years. Your energy is low, your weight won't budge, and you just don't feel like yourself anymore. You've mentioned it to your doctor, but routine tests come back "normal." Sound familiar?
            </p>
            <p className="mb-6">
              The culprit might be hiding in plain sight: your thyroid. This small, butterfly-shaped gland at the base of your neck controls far more than you might realize—from metabolism and energy to mood, weight, and even body temperature. When it's out of balance, the effects ripple through every aspect of your health.
            </p>
            <p>
              The challenge? Thyroid imbalances often develop gradually, and their symptoms can be easily dismissed or attributed to stress, aging, or busy lifestyles. That's why recognizing the warning signs is crucial. Here are five key indicators that your thyroid might need attention.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            1. Unexplained Weight Changes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              One of the most common—and frustrating—signs of thyroid dysfunction is weight change that seems disconnected from your diet or exercise habits. If your thyroid is underactive (hypothyroidism), your metabolism slows down, making it easier to gain weight and harder to lose it. Conversely, an overactive thyroid (hyperthyroidism) can speed up your metabolism, leading to unexpected weight loss even when you're eating normally.
            </p>
            <p className="mb-4">
              What makes this particularly concerning is that many people struggle with weight issues for years without realizing their thyroid is the underlying cause. They may try multiple diets, increase their exercise, and still see little to no results. This can lead to feelings of frustration, shame, and hopelessness.
            </p>
            <p>
              If you've experienced significant weight fluctuations that don't match your lifestyle changes, it's worth having your thyroid levels checked. A comprehensive thyroid panel—not just TSH alone—can provide valuable insights into what's really happening.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            2. Persistent Fatigue and Low Energy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              We all have days when we feel tired, but thyroid-related fatigue is different. It's the kind of exhaustion that doesn't improve with rest. You might sleep eight hours and still wake up feeling drained. Even simple tasks feel overwhelming, and you find yourself needing naps or struggling to make it through the afternoon.
            </p>
            <p className="mb-4">
              This happens because thyroid hormones play a critical role in energy production at the cellular level. When levels are too low, every system in your body slows down. Your cells aren't getting the signals they need to produce energy efficiently, leaving you feeling perpetually tired.
            </p>
            <p>
              Many people normalize this fatigue, attributing it to busy schedules, parenting, or getting older. But chronic, unrelenting exhaustion isn't something you should have to live with—and it's often one of the first clues that your thyroid needs support.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant'] leading-relaxed">
              "Your thyroid affects virtually every system in your body. When it's out of balance, the symptoms can be subtle at first—but they compound over time, affecting your quality of life in profound ways."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            3. Mood Changes and Brain Fog
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Thyroid hormones don't just affect your body—they have a significant impact on your brain and emotional well-being. An underactive thyroid is strongly associated with depression, anxiety, and difficulty concentrating. You might find yourself feeling unusually irritable, sad, or overwhelmed. Tasks that used to be easy now require intense focus, and you may struggle to remember details or follow conversations.
            </p>
            <p className="mb-4">
              This "brain fog" is one of the most distressing symptoms for many people. It can affect your work performance, your relationships, and your sense of self. You might feel like you're not as sharp as you used to be, or that you're losing your edge.
            </p>
            <p className="mb-4">
              On the flip side, hyperthyroidism can cause restlessness, nervousness, and trouble sleeping. You may feel wired or on edge, even when there's no obvious reason.
            </p>
            <p>
              Mental health symptoms are often treated in isolation, but when they're rooted in a thyroid imbalance, addressing the underlying hormone issue can lead to dramatic improvements in mood and cognitive function.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            4. Hair, Skin, and Nail Changes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Your thyroid health is often reflected in the condition of your hair, skin, and nails. Hypothyroidism commonly causes dry, brittle hair that breaks easily or falls out in larger amounts than usual. You might notice thinning on your scalp or even the outer third of your eyebrows—a classic sign of low thyroid function.
            </p>
            <p className="mb-4">
              Your skin may become dry, rough, or pale, and you might struggle with persistent issues like eczema or slow wound healing. Nails can become brittle and ridged, breaking or splitting more easily.
            </p>
            <p>
              These changes aren't just cosmetic—they're external signs of what's happening internally. When your thyroid isn't producing enough hormones, cell turnover slows, affecting the health and appearance of your skin, hair, and nails. Restoring thyroid balance often brings noticeable improvements in these areas within a few months.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            5. Temperature Sensitivity and Circulation Issues
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Do you always feel colder than everyone else in the room? Or do you find yourself sweating and overheating when others are comfortable? Temperature regulation is another key function of the thyroid, and imbalances often show up as unusual sensitivity to heat or cold.
            </p>
            <p className="mb-4">
              People with hypothyroidism frequently feel cold, especially in their hands and feet. They may need extra layers, struggle to warm up, and prefer warmer environments. Those with hyperthyroidism, on the other hand, may experience heat intolerance and excessive sweating.
            </p>
            <p className="mb-4">
              You might also notice changes in your circulation—cold extremities, numbness, or tingling. These symptoms occur because thyroid hormones help regulate blood flow and metabolism. When levels are off, circulation can be compromised.
            </p>
            <p>
              While many people brush off these symptoms as quirks or inconveniences, they're actually important clues that your thyroid may need attention.
            </p>
          </div>

          {/* What to Do Next */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Do If You Recognize These Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If any of these symptoms resonate with you, the first step is to get comprehensive thyroid testing. This should include more than just TSH—ask your provider about Free T3, Free T4, Reverse T3, and thyroid antibodies. These markers provide a fuller picture of how your thyroid is functioning.
            </p>
            <p className="mb-6">
              It's also important to work with a provider who understands the nuances of thyroid health and doesn't rely solely on "normal" lab ranges. Optimal thyroid function is about more than just numbers—it's about how you feel.
            </p>
            
            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-8">
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-4">Key Takeaways:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thyroid imbalances affect energy, weight, mood, and more</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Symptoms often develop gradually and are easy to dismiss</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive testing is essential for accurate diagnosis</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Working with a hormone specialist can make all the difference</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimal treatment restores energy, mood, and quality of life</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Treatment options vary depending on your specific situation but may include thyroid hormone replacement, lifestyle modifications, nutritional support, and addressing underlying factors like stress, inflammation, or autoimmune conditions.
            </p>
            <p>
              The good news is that with the right support, most people with thyroid imbalances experience significant improvements. Energy returns, weight stabilizes, mood lifts, and that sense of feeling like yourself again becomes possible.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone and metabolic medicine, including comprehensive thyroid evaluation and treatment. We take the time to listen to your symptoms, run thorough testing, and create personalized treatment plans designed to help you feel your best.
            </p>
            <p>
              If you're tired of feeling tired—or if any of these signs sound familiar—we're here to help. You don't have to accept fatigue, weight struggles, or brain fog as your new normal. Schedule a consultation today and take the first step toward reclaiming your health and vitality.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-2">
                Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Hormone & Metabolic Medicine
              </p>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                Our team of experienced providers is dedicated to helping patients in Edmond, OK achieve optimal health through personalized hormone therapy, metabolic optimization, and comprehensive wellness care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] text-center mb-12">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Hormone Health
                </div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Hormone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn how bioidentical hormone therapy can restore balance and vitality.
                </p>
                <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Boost Your Metabolism Naturally
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Evidence-based strategies to support healthy metabolism and sustainable weight management.
                </p>
                <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Wellness
                </div>
                <h4 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  The Mind-Body Connection in Hormone Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  How stress, sleep, and lifestyle factors impact your hormonal balance.
                </p>
                <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand your symptoms and find personalized solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3 shadow-lg"
          >
            <span>Schedule Your Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-white/70 text-sm mt-6">
            Serving patients in Edmond, OK and surrounding areas
          </p>
        </div>
      </section>
    </main>
  )
}