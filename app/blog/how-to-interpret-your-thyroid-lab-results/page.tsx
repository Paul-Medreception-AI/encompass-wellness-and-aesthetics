import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Interpret Your Thyroid Lab Results | Encompass Wellness and Aesthetics',
  description: 'Learn how to read and understand your thyroid lab results including TSH, T3, T4, and antibodies. Expert guidance from our hormone specialists in Edmond, OK.',
  keywords: 'thyroid labs, TSH, T3, T4, thyroid antibodies, thyroid function test, hormone testing, Edmond OK',
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
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            How to Interpret Your Thyroid Lab Results
          </h1>
          
          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You've just received your thyroid lab results, and you're staring at a page filled with abbreviations, reference ranges, and numbers that seem to tell a story you can't quite decode. TSH, T3, T4, antibodies—what does it all mean? And more importantly, what do these results reveal about your health?
            </p>
            <p className="mb-6">
              Understanding your thyroid labs is more than an exercise in medical literacy. It's about gaining insight into a small but powerful gland that influences your energy, metabolism, mood, weight, and so much more. When your thyroid isn't functioning optimally, it can affect nearly every system in your body. Let's break down the key markers, what they mean, and how to interpret them with confidence.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Thyroid Testing Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your thyroid gland, a small butterfly-shaped organ at the base of your neck, produces hormones that regulate metabolism, energy production, body temperature, and cellular function. When thyroid hormone levels are too high or too low, the ripple effects can be profound.
            </p>
            <p className="mb-6">
              Common symptoms of thyroid dysfunction include unexplained weight changes, fatigue, hair loss, mood swings, brain fog, irregular periods, and temperature sensitivity. Yet many people live with suboptimal thyroid function for years without a proper diagnosis—often because standard testing only scratches the surface.
            </p>
            <p className="mb-6">
              Comprehensive thyroid testing goes beyond the basic TSH screening. It examines the full picture of thyroid hormone production, conversion, and immune activity, helping identify imbalances that might otherwise go unnoticed.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding TSH (Thyroid Stimulating Hormone)
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              TSH is often the first—and sometimes only—thyroid marker tested by conventional medicine. Produced by the pituitary gland, TSH signals the thyroid to produce more or less hormone based on the body's needs.
            </p>
            <p className="mb-6">
              A high TSH typically indicates hypothyroidism (an underactive thyroid), meaning your pituitary is working overtime to stimulate a sluggish thyroid. A low TSH often suggests hyperthyroidism (an overactive thyroid), where the gland is producing too much hormone and the pituitary backs off.
            </p>
            <p className="mb-6">
              However, TSH alone doesn't tell the whole story. A "normal" TSH doesn't always mean optimal thyroid function. Reference ranges are broad, and many people feel best when their TSH is in the lower half of the normal range. Additionally, TSH can be affected by stress, illness, medications, and time of day.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Free T4 and Free T3: The Active Hormones
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              T4 (thyroxine) and T3 (triiodothyronine) are the actual thyroid hormones. T4 is the storage form, while T3 is the active form that your cells use for energy and metabolism. About 80% of thyroid hormone is produced as T4, which must then be converted to T3 in the liver, gut, and other tissues.
            </p>
            <p className="mb-6">
              Free T4 and Free T3 measure the unbound, bioavailable hormones in your bloodstream—the amounts actually available to your tissues. These are far more informative than total T4 or T3, which include hormone bound to proteins and unavailable for use.
            </p>
            <p className="mb-6">
              If your Free T4 is normal but your Free T3 is low, you may have a conversion problem. This can be caused by nutrient deficiencies (selenium, zinc, iron), chronic stress, inflammation, gut dysfunction, or certain medications. Many people with "normal" thyroid labs still experience symptoms because their T3 is suboptimal.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[family-name:var(--font-cormorant)]">
            "A 'normal' TSH doesn't always mean optimal thyroid function. Understanding the full panel—including Free T3, Free T4, and antibodies—gives you the complete picture."
          </blockquote>

          {/* Section 4 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Reverse T3: The Metabolic Brake
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Reverse T3 (rT3) is an inactive form of T3 that your body produces during times of stress, illness, or caloric restriction. It acts as a metabolic brake, slowing things down to conserve energy.
            </p>
            <p className="mb-6">
              High reverse T3 can block the effects of active T3, leading to hypothyroid symptoms even when Free T3 levels appear adequate. This is common in chronic stress, adrenal dysfunction, chronic dieting, inflammation, and toxin exposure.
            </p>
            <p className="mb-6">
              The Free T3 to Reverse T3 ratio is a valuable marker. A low ratio suggests thyroid hormone resistance at the cellular level and may explain persistent fatigue, weight gain, and brain fog despite seemingly normal labs.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Thyroid Antibodies: Detecting Autoimmune Activity
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The most common cause of hypothyroidism is Hashimoto's thyroiditis, an autoimmune condition where the immune system attacks the thyroid gland. The most common cause of hyperthyroidism is Graves' disease, another autoimmune disorder.
            </p>
            <p className="mb-6">
              Testing for thyroid antibodies—specifically Thyroid Peroxidase Antibodies (TPO) and Thyroglobulin Antibodies (TgAb)—can identify autoimmune thyroid disease, often years before significant damage occurs or TSH becomes abnormal.
            </p>
            <p className="mb-6">
              If antibodies are elevated, it's a signal to address root causes: gut health, nutrient status, inflammation, environmental triggers, and immune balance. Early intervention can slow or even halt disease progression.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Do With Your Results
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Interpreting thyroid labs is both science and art. Reference ranges are guidelines, not gospel. Optimal levels vary by individual, and symptoms matter as much as numbers.
            </p>
            
            <div className="my-6">
              <p className="mb-4 font-semibold">Key Action Steps:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Request a full thyroid panel, not just TSH—include Free T4, Free T3, Reverse T3, TPO, and TgAb</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Test in the morning when TSH is highest, and stay consistent with timing for follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compare your results to optimal ranges, not just "normal" reference ranges</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Work with a provider experienced in functional thyroid care who listens to your symptoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Address foundational factors: nutrition, sleep, stress, gut health, and inflammation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Retest every 6-8 weeks when making changes, then every 3-6 months for monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12">
            <p className="mb-6">
              Your thyroid labs are a window into your metabolic health. Learning to interpret them empowers you to advocate for yourself, ask informed questions, and partner with your healthcare team in pursuing true wellness—not just absence of disease.
            </p>
            <p className="mb-6">
              If you're struggling with fatigue, weight changes, mood issues, or other symptoms that suggest thyroid imbalance, comprehensive testing and personalized care can make all the difference. You deserve to feel your best.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Hormone Health
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Hormone Replacement Therapy Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore bioidentical and traditional HRT approaches for optimal wellness.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Signs Your Metabolism Needs Support
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Recognize the symptoms of metabolic dysfunction and when to seek help.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  What to Expect at Your First Hormone Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how we assess, diagnose, and create personalized treatment plans.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help you understand your labs and optimize your thyroid health.
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