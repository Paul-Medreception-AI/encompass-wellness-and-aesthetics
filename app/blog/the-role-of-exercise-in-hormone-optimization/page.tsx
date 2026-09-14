import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/the-role-of-exercise-in-hormone-optimization' },
  title: 'The Role of Exercise in Hormone Optimization | Encompass Wellness',
  description: 'Discover how strategic exercise can naturally optimize your hormones, improve energy, and support metabolic health. Expert insights from our Edmond, OK hormone specialists.',
  keywords: 'exercise and hormones, hormone optimization, metabolic health, testosterone optimization, cortisol management, Edmond OK',
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
            Hormone Health
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Exercise in Hormone Optimization
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You wake up exhausted despite a full night's sleep. Your workouts no longer deliver results. Your mood fluctuates unpredictably, and that stubborn weight won't budge no matter what you try. What if the solution isn't another diet or supplement, but rather understanding how movement directly influences your body's master chemical messengers—your hormones?
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Exercise is far more than a calorie-burning activity. It's a powerful biological stimulus that can optimize—or disrupt—your delicate hormonal balance. From testosterone and estrogen to cortisol and growth hormone, strategic physical activity influences virtually every aspect of metabolic and hormonal health. Understanding this connection empowers you to use exercise not just as a tool for fitness, but as medicine for your endocrine system.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Exercise-Hormone Connection
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your endocrine system is exquisitely sensitive to physical stress. When you exercise, your body initiates a cascade of hormonal responses designed to meet the immediate demands of movement and to adapt for future challenges. These responses vary dramatically based on the type, intensity, and duration of exercise you choose.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Resistance training, for example, triggers acute increases in testosterone and growth hormone—both critical for muscle development, fat metabolism, and cellular repair. High-intensity interval training (HIIT) can enhance insulin sensitivity and optimize cortisol patterns when properly programmed. Conversely, excessive endurance exercise without adequate recovery can suppress testosterone, elevate cortisol chronically, and disrupt thyroid function.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The key insight: exercise is a dose-dependent intervention. Too little fails to stimulate beneficial hormonal adaptations. Too much overwhelms your system's ability to recover, leading to hormonal dysfunction. The art lies in finding your optimal dose.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            How Different Exercise Types Affect Specific Hormones
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Testosterone and Growth Hormone:</strong> Both men and women require optimal testosterone levels for vitality, muscle maintenance, and metabolic health. Compound strength training movements—squats, deadlifts, presses—consistently show the greatest acute testosterone and growth hormone response. Training protocols featuring moderate-to-heavy loads (70-85% of one-rep max) with adequate rest between sets appear most effective.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Cortisol:</strong> Often vilified, cortisol is essential for mobilizing energy during exercise. Problems arise when cortisol remains chronically elevated due to overtraining, inadequate recovery, or combining intense exercise with life stress. Moderate-intensity exercise, yoga, and tai chi can actually help normalize cortisol patterns and improve stress resilience.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Insulin:</strong> Perhaps no hormone responds more favorably to exercise than insulin. Both aerobic and resistance training dramatically improve insulin sensitivity, allowing your cells to respond appropriately to blood sugar signals. This effect persists for 24-48 hours after a single session, making regular exercise one of the most powerful metabolic interventions available.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Thyroid Hormones:</strong> Your thyroid governs metabolic rate. While acute exercise temporarily suppresses thyroid hormone conversion, consistent training improves thyroid receptor sensitivity and overall metabolic efficiency. However, chronic under-recovery or caloric restriction combined with high exercise volume can suppress thyroid function significantly.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Exercise is a dose-dependent intervention. The difference between hormonal optimization and hormonal disruption often comes down to matching your training to your body's current capacity for adaptation."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Needs to Pay Special Attention?
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Certain populations are particularly vulnerable to exercise-induced hormonal imbalances and should approach training with additional awareness:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Women in perimenopause and menopause:</strong> Declining estrogen makes recovery slower and increases cortisol sensitivity. Prioritizing strength training and reducing excessive cardio often yields better results.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Men over 40:</strong> Natural testosterone decline accelerates with age. Strategic resistance training becomes increasingly important while managing overall training volume to avoid overtraining.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Those with existing hormonal conditions:</strong> Thyroid disorders, PCOS, adrenal dysfunction, and diabetes all require individualized exercise prescriptions that support rather than challenge already-compromised hormonal systems.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>High-stress professionals:</strong> If your life is already cortisol-dominant, adding intense exercise without adequate recovery can backfire. Restorative movement may be more beneficial than crushing workouts.</span>
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Exercise Strategies for Hormone Optimization
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research consistently supports several key principles when using exercise to optimize hormonal health:
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Prioritize Strength Training:</strong> Multiple studies demonstrate that resistance training 2-4 times per week optimally stimulates anabolic hormones while improving insulin sensitivity and metabolic rate. Focus on compound movements that recruit large muscle groups.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Include High-Intensity Intervals Strategically:</strong> HIIT sessions of 15-20 minutes, performed 1-2 times weekly, can dramatically improve insulin sensitivity and metabolic flexibility without the cortisol burden of prolonged cardio. Quality trumps quantity.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Respect Recovery:</strong> Hormonal optimization happens during rest, not training. Sleep, nutrition, and stress management are not negotiable components of any exercise program designed to improve endocrine function.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong className="text-[var(--color-primary)]">Avoid Chronic Cardio:</strong> Excessive steady-state endurance training without adequate recovery can suppress reproductive hormones, elevate cortisol, and reduce metabolic rate—the opposite of what most people seek. Moderation is essential.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Practical Steps to Get Started
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Implementing an exercise program for hormone optimization doesn't require perfection—it requires consistency and awareness. Here's how to begin:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Start with a baseline assessment of your current hormonal health through comprehensive testing</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Design a program that matches your current capacity, not your aspirations or past fitness level</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Build in progressive overload gradually—hormonal adaptation takes weeks to months, not days</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Monitor key markers: energy levels, sleep quality, recovery capacity, mood, and body composition changes</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Work with providers who understand the intersection of exercise physiology and endocrinology</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Guidance
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While exercise is powerful medicine, it's not a replacement for comprehensive hormonal evaluation and treatment when underlying dysfunction exists. Consider seeking specialized care if you experience:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Persistent fatigue despite consistent exercise and adequate sleep</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Unexplained weight gain or inability to lose weight despite proper nutrition and training</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Loss of muscle mass or strength despite resistance training</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mood changes, decreased libido, or cognitive difficulties</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Declining exercise performance or prolonged recovery times</span>
            </li>
          </ul>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in the intricate relationship between exercise, metabolism, and hormonal health. Our comprehensive approach combines advanced diagnostic testing with evidence-based interventions—including personalized exercise prescriptions—to optimize your endocrine function and restore vitality.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your hormones don't exist in isolation, and neither should your approach to optimizing them. Exercise is a cornerstone of hormonal health, but it must be integrated thoughtfully with nutrition, stress management, sleep optimization, and when necessary, hormone replacement therapy. The goal isn't just to exercise more—it's to exercise smarter, in alignment with your body's unique hormonal landscape.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-[var(--color-ink)] mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal health through personalized, evidence-based care in Edmond, OK.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Testosterone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  A comprehensive guide to TRT benefits, protocols, and what to expect during treatment.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Nutrition Strategies for Hormone Balance
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  How strategic nutrition can support your body's natural hormone production and regulation.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Sleep and Recovery for Hormonal Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Why quality sleep is the foundation of hormone optimization and metabolic wellness.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you optimize your hormones and restore your vitality.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}