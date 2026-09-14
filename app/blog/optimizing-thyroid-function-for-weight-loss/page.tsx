import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/optimizing-thyroid-function-for-weight-loss' },
  title: 'Optimizing Thyroid Function for Weight Loss | Encompass Wellness',
  description: 'Discover how thyroid health impacts weight loss and metabolism. Expert insights on optimizing thyroid function for sustainable weight management in Edmond, OK.',
  keywords: 'thyroid function, weight loss, metabolism, hypothyroidism, thyroid optimization, hormone balance, Edmond OK',
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Optimizing Thyroid Function for Weight Loss
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You've been doing everything right—tracking calories, exercising regularly, staying consistent—yet the scale refuses to budge. Despite your best efforts, the weight simply won't come off. If this sounds familiar, you're not alone. For millions of people struggling with unexplained weight gain or difficulty losing weight, an underactive thyroid may be the hidden culprit silently sabotaging their efforts.
            </p>
            <p className="mb-6">
              The thyroid gland, a small butterfly-shaped organ in your neck, plays a master role in regulating metabolism, energy production, and body weight. When it's not functioning optimally, even the most disciplined diet and exercise regimen can feel futile. Understanding the connection between thyroid health and weight loss is the first step toward finally achieving sustainable results.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Thyroid-Metabolism Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your thyroid produces hormones—primarily T3 (triiodothyronine) and T4 (thyroxine)—that regulate virtually every cell in your body. These hormones control your basal metabolic rate (BMR), which determines how many calories your body burns at rest. When thyroid hormone levels are low, your metabolism slows down, making it significantly harder to lose weight and easier to gain it.
            </p>
            <p className="mb-6">
              Hypothyroidism, or an underactive thyroid, affects approximately 5% of the general population, with women being five to eight times more likely to develop thyroid disorders than men. Many people live with subclinical hypothyroidism—thyroid function that's borderline low but not yet diagnosed—experiencing frustrating symptoms without understanding the root cause.
            </p>
            <p className="mb-6">
              Beyond metabolism, thyroid hormones influence appetite regulation, fat oxidation, insulin sensitivity, and even where your body stores fat. They also affect energy levels, body temperature, and the ability to build and maintain muscle mass—all critical factors in successful weight management.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Signs Your Thyroid May Be Affecting Your Weight
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Thyroid dysfunction often presents with a constellation of symptoms beyond weight gain. Recognizing these signs can help you identify whether your thyroid deserves closer attention:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unexplained weight gain or inability to lose weight despite diet and exercise</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent fatigue and low energy, even after adequate sleep</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cold intolerance or feeling cold when others are comfortable</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dry skin, brittle nails, and thinning hair</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Constipation or sluggish digestion</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Brain fog, difficulty concentrating, or memory problems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Depression, mood changes, or irritability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Menstrual irregularities or fertility challenges in women</span>
              </li>
            </ul>
            <p className="mb-6">
              If you're experiencing several of these symptoms along with weight struggles, comprehensive thyroid testing should be part of your evaluation.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            "Optimizing thyroid function isn't just about treating a hormone deficiency—it's about restoring your body's natural ability to maintain a healthy weight and vibrant energy."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Comprehensive Thyroid Testing: Beyond TSH
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many people with thyroid-related weight issues have "normal" TSH (thyroid-stimulating hormone) levels on standard testing. While TSH is important, it tells only part of the story. A comprehensive thyroid evaluation should include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Free T3 and Free T4:</strong> The active thyroid hormones that directly impact metabolism</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reverse T3:</strong> An inactive form that can block thyroid function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Thyroid antibodies:</strong> To identify autoimmune thyroid disease (Hashimoto's)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nutrient levels:</strong> Iron, selenium, zinc, and vitamin D—all essential for thyroid conversion and function</span>
              </li>
            </ul>
            <p className="mb-6">
              Additionally, evaluating cortisol patterns and other metabolic markers provides a complete picture of what's affecting your metabolism and weight. Thyroid function doesn't exist in isolation—it's interconnected with stress hormones, insulin sensitivity, inflammation, and nutritional status.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Optimizing Thyroid Function for Weight Loss Success
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If thyroid dysfunction is identified, optimizing function involves a multi-faceted approach tailored to your unique biochemistry:
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Thyroid Hormone Replacement:</strong> When indicated, bioidentical thyroid hormone replacement can restore normal metabolism. This may include T4 alone, combination T4/T3 therapy, or natural desiccated thyroid, depending on your individual conversion patterns and response.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Nutritional Support:</strong> Adequate selenium (needed for T4 to T3 conversion), zinc, iron, iodine, and vitamin D are crucial. Anti-inflammatory foods and addressing gut health can reduce autoimmune thyroid flare-ups.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Stress Management:</strong> Chronic stress elevates cortisol, which inhibits thyroid hormone conversion and promotes weight gain. Prioritizing sleep, mindfulness practices, and stress reduction supports optimal thyroid function.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Exercise Strategy:</strong> While movement is important, excessive intense exercise can suppress thyroid function in some individuals. A balanced approach with strength training and moderate cardio supports metabolism without overtaxing your system.
            </p>
            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Environmental Considerations:</strong> Reducing exposure to endocrine disruptors (found in plastics, personal care products, and pesticides) can help protect thyroid function over time.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect with Thyroid Optimization
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              It's important to have realistic expectations. Optimizing thyroid function is not a magic bullet for weight loss, but it removes a significant metabolic barrier. When thyroid hormones are properly balanced, most patients notice:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased energy and reduced fatigue</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Improved body composition—less fat, more muscle retention</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Better response to diet and exercise efforts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Enhanced mental clarity and mood</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Normalized appetite and fewer cravings</span>
              </li>
            </ul>
            <p className="mb-6">
              Weight loss with thyroid optimization is typically gradual—1-2 pounds per week when combined with appropriate lifestyle modifications. Some of the initial "weight loss" may be fluid retention resolving as metabolism normalizes.
            </p>
            <p className="mb-6">
              Fine-tuning thyroid medication dosing takes time, often 6-12 weeks between adjustments, as hormone levels stabilize. Regular monitoring and working with a provider experienced in thyroid optimization ensures you achieve the best possible outcomes.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Take Control of Your Metabolic Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've been struggling with weight despite your best efforts, don't accept frustration as your fate. Your thyroid could be the missing piece of the puzzle. With proper evaluation, personalized treatment, and comprehensive support, you can restore metabolic balance and finally achieve sustainable weight loss.
            </p>
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone and metabolic medicine, offering advanced thyroid testing and personalized optimization protocols. Our approach goes beyond standard care to identify and address the root causes affecting your metabolism, energy, and weight.
            </p>
            <p className="mb-6">
              You deserve answers. You deserve to feel energized, capable, and confident in your body again. Let's work together to uncover what's holding you back and create a path forward to lasting results.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-medium mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine in Edmond, OK
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Hormone Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Hormone Replacement Therapy for Women
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore how bioidentical hormone therapy can restore balance and vitality.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Metabolic Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Metabolic Reset: Breaking Through Weight Loss Plateaus
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover science-backed strategies to jumpstart stubborn metabolism.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Role of Stress in Hormone Imbalance
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how chronic stress impacts your hormones and what you can do about it.
                </p>
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you optimize your thyroid function and achieve your weight loss goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-ink)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}