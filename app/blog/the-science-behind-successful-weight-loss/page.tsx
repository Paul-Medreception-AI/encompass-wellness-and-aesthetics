import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Science Behind Successful Weight Loss | Encompass Wellness and Aesthetics',
  description: 'Discover the evidence-based approach to sustainable weight loss. Learn how metabolism, hormones, and lifestyle factors contribute to long-term success in Edmond, OK.',
  keywords: 'weight loss science, metabolism, hormone balance, sustainable weight loss, Edmond OK, medical weight loss',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight mb-6">
            The Science Behind Successful Weight Loss
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published 2025</span>
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
              <span>Encompass Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've tried every diet. You've counted calories, eliminated entire food groups, and pushed through grueling workout routines. Yet the weight returns, often bringing extra pounds with it. If this sounds familiar, you're not alone—and more importantly, it's not your fault. The truth is that sustainable weight loss isn't about willpower or the latest fad diet. It's about understanding the complex biological systems that regulate your body weight and working with them, not against them.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            At Encompass Wellness and Aesthetics in Edmond, OK, we've witnessed countless patients transform their lives by applying evidence-based science to their weight loss journey. Let's explore what really works—and why.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Your Metabolism: More Than Calories In, Calories Out
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            For decades, we've been told that weight loss is simple mathematics: burn more calories than you consume. While energy balance matters, this oversimplified view ignores the sophisticated hormonal and metabolic systems that determine how your body stores and uses energy.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Your metabolism isn't static—it adapts to your eating patterns, activity levels, sleep quality, stress levels, and hormonal environment. When you drastically cut calories, your body doesn't simply burn stored fat. Instead, it often downregulates metabolic rate, increases hunger hormones, and prioritizes muscle loss over fat loss. This metabolic adaptation is your body's survival mechanism, honed over millennia of evolution.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in obesity medicine journals consistently shows that metabolic rate can decrease by 10-15% during caloric restriction, making further weight loss increasingly difficult. This explains why the same diet that worked initially eventually stops producing results.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Hormone Connection: Why Balance Matters
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Hormones are the master regulators of body weight, controlling everything from hunger and satiety to fat storage and energy expenditure. Several key hormones play critical roles in weight management:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Insulin:</strong> Regulates blood sugar and fat storage. Insulin resistance makes weight loss exceptionally difficult and is often overlooked in conventional weight loss programs.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Leptin:</strong> The "satiety hormone" signals fullness to your brain. Leptin resistance can cause persistent hunger despite adequate body fat stores.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Cortisol:</strong> Chronic stress elevates this hormone, promoting abdominal fat storage and metabolic dysfunction.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Thyroid hormones:</strong> Control metabolic rate. Even subclinical thyroid dysfunction can sabotage weight loss efforts.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Sex hormones:</strong> Testosterone, estrogen, and progesterone influence body composition, muscle mass, and fat distribution.</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This is why at Encompass Wellness and Aesthetics, we begin every weight loss program with comprehensive hormone testing. Addressing hormonal imbalances isn't just helpful—it's often essential for sustainable results.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "Sustainable weight loss isn't about fighting your biology—it's about understanding and optimizing it."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Protein and Muscle Preservation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            One of the most important—and often overlooked—factors in successful weight loss is preserving lean muscle mass. When you lose weight, you want to lose fat, not muscle. However, conventional low-calorie diets often result in significant muscle loss, which has devastating long-term consequences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Muscle tissue is metabolically active, burning calories even at rest. When you lose muscle, your metabolic rate decreases, making it easier to regain weight. This is one reason why people often experience rebound weight gain after restrictive dieting.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research consistently demonstrates that adequate protein intake—typically 1.2-1.6 grams per kilogram of body weight—combined with resistance training, helps preserve muscle mass during weight loss. Higher protein intake also increases satiety, reducing overall calorie consumption naturally without constant hunger.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Sleep, Stress, and the Hidden Weight Loss Factors
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Diet and exercise dominate weight loss conversations, but emerging research reveals that sleep quality and stress management are equally critical—and often more challenging to address.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Sleep deprivation disrupts hunger hormones, increasing ghrelin (which stimulates appetite) while decreasing leptin (which signals fullness). Studies show that people who sleep less than six hours per night are significantly more likely to struggle with weight management. Poor sleep also impairs insulin sensitivity and increases cravings for high-calorie, processed foods.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Chronic stress triggers a cascade of hormonal changes that promote fat storage, particularly visceral fat around the abdomen. Elevated cortisol also drives cravings for comfort foods and can interfere with sleep, creating a vicious cycle.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Gut Microbiome: Your Microscopic Weight Loss Partners
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Cutting-edge research is revealing the profound impact of gut bacteria on metabolism and weight regulation. Your microbiome—the trillions of microorganisms living in your digestive tract—influences how you extract energy from food, how you store fat, and even how you experience hunger and satiety.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Studies have identified distinct differences in gut bacteria composition between lean and obese individuals. Certain bacterial strains promote weight loss by improving insulin sensitivity, reducing inflammation, and producing beneficial compounds like short-chain fatty acids.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Supporting a healthy microbiome through diverse fiber intake, fermented foods, and sometimes targeted probiotic supplementation may enhance weight loss outcomes—though research in this area is still evolving.
          </p>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Strategies That Actually Work
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When we synthesize decades of metabolic research, several key principles emerge for sustainable weight loss:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Prioritize protein and whole foods:</strong> Focus on nutrient density rather than calorie restriction alone.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Preserve muscle through resistance training:</strong> Even modest strength training 2-3 times per week makes a significant difference.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Address hormonal imbalances:</strong> Testing and optimizing hormone levels can remove major obstacles to progress.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Prioritize sleep and stress management:</strong> These aren't optional—they're foundational.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Consider medical interventions when appropriate:</strong> Medications like GLP-1 agonists can be powerful tools when used as part of comprehensive care.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Work with professionals who understand metabolic medicine:</strong> Generic advice rarely addresses individual metabolic complexity.</p>
            </div>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-4 mt-8">
            Successful weight loss isn't about deprivation, punishment, or superhuman willpower. It's about working with your body's natural systems, addressing underlying metabolic and hormonal issues, and implementing evidence-based strategies tailored to your unique physiology.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, our approach to weight management is grounded in hormone and metabolic medicine. We don't offer quick fixes or cookie-cutter programs. Instead, we provide comprehensive testing, personalized protocols, and ongoing support to help you achieve sustainable results.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base font-medium">
            If you're ready to move beyond fad diets and discover what your body truly needs to reach and maintain a healthy weight, we invite you to schedule a consultation. Let's explore the science-based solutions that can finally make lasting change possible.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[var(--color-ink)] font-medium text-lg mb-2">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to delivering evidence-based care and empowering patients to achieve optimal health through personalized treatment plans.
              </p>
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
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Hormone Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  Understanding Hormone Optimization
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how balanced hormones support energy, mood, and metabolic health at every stage of life.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Wellness
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  The Role of Nutrition in Metabolic Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn evidence-based nutritional strategies that support optimal metabolism and long-term wellness.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  What to Expect from Medical Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A comprehensive guide to medical weight loss programs and how they differ from traditional dieting.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our team is here to help you achieve sustainable, science-based weight loss results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-ink)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}