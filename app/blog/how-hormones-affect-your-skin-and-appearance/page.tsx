import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/how-hormones-affect-your-skin-and-appearance' },
  title: 'How Hormones Affect Your Skin and Appearance | Encompass Wellness',
  description: 'Discover the powerful connection between hormone balance and skin health. Learn how hormonal changes impact your appearance and what you can do about it.',
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
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Patient Education</p>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How Hormones Affect Your Skin and Appearance
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Aesthetics Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've tried every skincare product on the shelf. You've adjusted your diet, stayed hydrated, and protected yourself from the sun. Yet despite your best efforts, your skin still feels off—dry, dull, breaking out, or showing signs of aging that seem to have appeared overnight. The answer might not be in your medicine cabinet. It could be in your hormones.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Hormones are powerful chemical messengers that influence nearly every aspect of your health, including the appearance and vitality of your skin. When they're balanced, your skin glows. When they're not, the effects can show up in ways that no amount of topical treatment can fully address. Understanding this connection is the first step toward reclaiming your confidence and your complexion.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Hormone-Skin Connection
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your skin is the body's largest organ, and it's highly responsive to hormonal fluctuations. Hormones like estrogen, progesterone, testosterone, cortisol, and thyroid hormones all play critical roles in maintaining skin structure, moisture, elasticity, and tone. They regulate oil production, collagen synthesis, inflammation, and even pigmentation.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When hormone levels shift—whether due to aging, stress, menstrual cycles, pregnancy, menopause, or underlying health conditions—the skin often reacts. Acne, dryness, wrinkles, hyperpigmentation, and loss of firmness can all be traced back to hormonal imbalances. Recognizing these signs is essential, especially when conventional skincare treatments aren't delivering results.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Your skin is a window into your hormonal health. What shows on the surface often reflects what's happening inside."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Estrogen and Skin Health
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Estrogen is often called the "youth hormone" for good reason. It stimulates collagen and elastin production, promotes moisture retention, and helps maintain skin thickness and elasticity. High estrogen levels are associated with smooth, plump, hydrated skin—think of the glowing complexion many women experience during pregnancy.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            But as estrogen declines—particularly during perimenopause and menopause—skin changes dramatically. Collagen production drops by up to 30% in the first five years after menopause. The result? Thinner skin, increased wrinkling, loss of firmness, dryness, and slower wound healing. For many women, this is when fine lines deepen and the skin begins to feel fragile.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Low estrogen can also contribute to increased sensitivity, redness, and a compromised skin barrier, making the skin more prone to irritation and environmental damage.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Testosterone and Oil Production
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While estrogen gets much of the attention, testosterone and other androgens also play a significant role in skin health. Androgens stimulate the sebaceous glands to produce oil (sebum), which is necessary for keeping the skin moisturized and protected. However, too much androgen activity can lead to excess oil production, clogged pores, and acne.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This is why hormonal acne is so common during puberty, menstruation, and conditions like polycystic ovary syndrome (PCOS). In PCOS, elevated androgen levels can cause persistent breakouts, particularly along the jawline and chin, as well as increased facial hair and scalp thinning.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Interestingly, as women age and estrogen declines, the relative influence of testosterone can increase, sometimes leading to adult-onset acne or changes in skin texture even in women who never struggled with breakouts before.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Cortisol, Stress, and Skin Aging
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Chronic stress elevates cortisol, the body's primary stress hormone. While cortisol is essential for managing acute stress, prolonged elevation takes a toll on the skin. High cortisol breaks down collagen, impairs the skin barrier, increases inflammation, and can trigger or worsen conditions like acne, eczema, rosacea, and psoriasis.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cortisol also accelerates aging by promoting oxidative stress and reducing the skin's ability to repair itself. You may notice that during particularly stressful periods, your skin looks tired, puffy, or prone to breakouts—this is cortisol at work.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Managing stress through lifestyle changes, adequate sleep, and professional support can make a dramatic difference not only in how you feel, but in how you look.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Thyroid Hormones and Skin Texture
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Thyroid hormones regulate metabolism, including the turnover of skin cells. When thyroid function is low (hypothyroidism), skin becomes dry, rough, pale, and cool to the touch. Hair may thin, nails become brittle, and wound healing slows.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            On the flip side, an overactive thyroid (hyperthyroidism) can lead to warm, moist, flushed skin and increased sweating. Thyroid dysfunction often goes undiagnosed, yet it can have profound effects on appearance and quality of life.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing unexplained changes in your skin along with fatigue, weight changes, or mood shifts, a thyroid evaluation may be warranted.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What You Can Do About Hormonal Skin Changes
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that hormonal skin changes are not inevitable or untreatable. With the right approach, you can restore balance and see real improvement. Here are some steps to consider:
          </p>
          
          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Get a comprehensive hormone evaluation.</strong> Blood work can reveal imbalances in estrogen, progesterone, testosterone, cortisol, and thyroid hormones.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Consider bioidentical hormone therapy.</strong> When appropriately prescribed, hormone replacement can restore estrogen and other hormones to optimal levels, improving skin texture, elasticity, and hydration.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Support your hormones with lifestyle.</strong> Prioritize sleep, manage stress, eat a nutrient-dense diet rich in healthy fats and antioxidants, and exercise regularly.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Combine internal and external care.</strong> Medical-grade skincare, treatments like microneedling or chemical peels, and professional guidance can complement hormone optimization for even better results.
              </p>
            </div>
            
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong>Work with a specialist.</strong> Hormone and metabolic medicine providers can tailor treatment to your unique needs, monitoring progress and adjusting as necessary.
              </p>
            </div>
          </div>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            You Don't Have to Accept Dull, Aging Skin
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The changes you see in your skin aren't just about aging—they're often a reflection of what's happening beneath the surface. Hormones are powerful, and when they fall out of balance, the effects ripple through your body, including your skin.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            But you have more control than you think. By addressing the root cause—hormonal imbalance—you can experience real, lasting improvements in your skin's appearance, texture, and vitality. Whether you're dealing with acne, dryness, premature aging, or simply not feeling like yourself, help is available.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone and metabolic medicine designed to help you look and feel your best from the inside out. If you're ready to understand what's really behind your skin concerns and explore solutions that work, we're here to guide you every step of the way.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal health and confidence through personalized, evidence-based care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Hormone Health</p>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Bioidentical Hormone Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how bioidentical hormones can restore balance and vitality safely and effectively.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness</p>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  5 Signs Your Hormones Are Out of Balance
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Recognize the subtle symptoms that indicate it may be time to get your hormones checked.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Anti-Aging</p>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Truth About Aging and Hormone Decline
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the science behind aging and discover what you can do to age gracefully and healthfully.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you restore balance and reclaim your confidence.
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