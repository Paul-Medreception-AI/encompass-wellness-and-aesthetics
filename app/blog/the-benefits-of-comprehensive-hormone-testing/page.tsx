import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Benefits of Comprehensive Hormone Testing | Encompass Wellness and Aesthetics',
  description: 'Discover how comprehensive hormone testing can uncover the root causes of fatigue, weight gain, mood changes, and more. Expert insights from Edmond, OK hormone specialists.',
  keywords: 'hormone testing, hormone imbalance, comprehensive hormone panel, bioidentical hormones, thyroid testing, cortisol testing, testosterone levels, estrogen testing, Edmond OK',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Benefits of Comprehensive Hormone Testing
          </h1>

          {/* Meta Information */}
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You've been to multiple doctors. You've described the fatigue that no amount of sleep seems to fix, the stubborn weight that refuses to budge despite your best efforts, the mood swings that feel beyond your control, or the brain fog that makes even simple tasks feel overwhelming. Yet, time and again, you're told your standard lab work looks "normal."
            </p>
            <p className="mb-6">
              If this sounds familiar, you're not alone—and more importantly, you're not imagining it. The reality is that conventional blood work often misses the subtle yet significant hormonal imbalances that can dramatically impact your quality of life. This is where comprehensive hormone testing becomes not just helpful, but potentially life-changing.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Comprehensive Hormone Testing?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Unlike standard lab panels that might check just one or two hormone markers, comprehensive hormone testing provides a complete picture of your endocrine system. This thorough approach examines multiple hormones simultaneously, including thyroid hormones (TSH, Free T3, Free T4, Reverse T3), sex hormones (estrogen, progesterone, testosterone), adrenal hormones (cortisol, DHEA), and metabolic markers (insulin, glucose, hemoglobin A1c).
            </p>
            <p className="mb-6">
              More importantly, comprehensive testing doesn't just look at whether values fall within a broad "normal" range. It evaluates optimal levels based on your age, sex, symptoms, and health goals. This nuanced approach recognizes that what's "normal" for the general population may not be optimal for you as an individual.
            </p>
            <p className="mb-6">
              Advanced testing may also include measuring hormone metabolites—the breakdown products that reveal how your body is processing hormones—and assessing the ratios between different hormones, which can be just as important as the individual levels themselves.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Standard Testing Often Falls Short
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Traditional lab work typically focuses on ruling out serious disease rather than optimizing wellness. A standard thyroid panel, for example, might only check TSH—missing subclinical hypothyroidism, thyroid antibodies, or conversion issues that could explain your symptoms.
            </p>
            <p className="mb-6">
              Similarly, a basic metabolic panel won't catch early insulin resistance, and routine check-ups rarely include sex hormone testing unless you specifically request it. This narrow focus means that millions of people with legitimate hormonal imbalances are told nothing is wrong, leaving them to continue suffering without answers or solutions.
            </p>
            <p className="mb-6">
              The "reference ranges" used by most labs are also problematic. They're typically based on statistical averages of everyone who got tested—including sick people—rather than optimal values for healthy individuals. This means you could have a hormone level that's technically "in range" but far from ideal for your body's needs.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Comprehensive hormone testing doesn't just tell you if something is wrong—it reveals the underlying patterns that explain why you feel the way you do, and provides a roadmap for restoration."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Benefits from Comprehensive Testing?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone experiencing unexplained symptoms can benefit, comprehensive hormone testing is particularly valuable for specific groups:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Women in perimenopause or menopause</strong> experiencing hot flashes, night sweats, mood changes, sleep disturbances, or decreased libido
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Men with low testosterone symptoms</strong> including fatigue, decreased muscle mass, weight gain, low sex drive, or erectile dysfunction
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Individuals with thyroid symptoms</strong> despite "normal" TSH levels, including persistent fatigue, cold intolerance, weight issues, or hair loss
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>People struggling with unexplained weight gain</strong> or difficulty losing weight despite diet and exercise
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Those experiencing chronic stress or burnout</strong> with symptoms like anxiety, insomnia, or difficulty recovering from exercise
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Anyone with a family history</strong> of thyroid disorders, diabetes, or hormonal conditions
                </div>
              </div>
            </div>
            <p className="mb-6">
              Even if you don't fit neatly into one of these categories, persistent symptoms that haven't been explained by conventional testing warrant a deeper investigation. Your body is remarkably intelligent—when it's telling you something is wrong, it usually is.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Evidence Behind Hormone Optimization
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research consistently demonstrates that optimizing hormone levels—rather than merely treating deficiency—can significantly improve quality of life. Studies on thyroid optimization show improvements in energy, cognition, and metabolism even when TSH is "normal" by conventional standards but T3 levels are suboptimal.
            </p>
            <p className="mb-6">
              Similarly, research on bioidentical hormone replacement therapy (BHRT) for menopausal women has shown benefits for bone density, cardiovascular health, cognitive function, and sexual wellness when hormones are restored to physiological levels. For men, testosterone optimization has been linked to improved body composition, mood, cognitive performance, and cardiovascular health markers.
            </p>
            <p className="mb-6">
              Importantly, comprehensive testing also helps identify problems before they become serious. Detecting insulin resistance early, for example, provides an opportunity to prevent type 2 diabetes through targeted interventions. Identifying elevated cortisol patterns can help address chronic stress before it leads to adrenal exhaustion or metabolic dysfunction.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Happens During the Testing Process
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Comprehensive hormone testing typically begins with a detailed consultation where your provider reviews your complete health history, current symptoms, lifestyle factors, and health goals. This context is crucial for interpreting your results accurately.
            </p>
            <p className="mb-6">
              The testing itself usually involves blood work, though some hormones may be better assessed through saliva or urine testing, particularly for evaluating cortisol patterns throughout the day or hormone metabolites. Your provider will recommend the most appropriate testing methods based on your specific situation.
            </p>
            <p className="mb-6">
              Once results are available, you'll receive a thorough review that explains not just what your numbers are, but what they mean for your health and how they relate to your symptoms. This is where comprehensive testing truly shines—by connecting the dots between your lab values and your lived experience.
            </p>
            <p className="mb-6">
              Based on your results, your provider will develop a personalized treatment plan that may include bioidentical hormone replacement, nutritional interventions, lifestyle modifications, targeted supplements, or stress management strategies. The goal is always to restore balance and optimize function, not simply to prescribe medication.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking the Next Step Toward Hormonal Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've been struggling with symptoms that haven't been adequately explained or resolved, comprehensive hormone testing might provide the answers you've been seeking. The investment in thorough testing often pays dividends in improved energy, better mood, healthier weight, enhanced cognitive function, and overall quality of life.
            </p>
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in hormone and metabolic medicine, using advanced testing to uncover the root causes of your symptoms. We don't just look at whether your hormones are "normal"—we assess whether they're optimal for you.
            </p>
            <p className="mb-6">
              Remember, you deserve to feel your best. If your current approach isn't giving you the results you need, it may be time to dig deeper. Comprehensive hormone testing isn't just about numbers on a lab report—it's about reclaiming your vitality, restoring your confidence, and rediscovering what it feels like to truly thrive.
            </p>
          </div>
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
              <div className="font-medium text-[var(--color-ink)] mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine, serving Edmond, OK and surrounding communities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462l-1.8 1.8a2.25 2.25 0 01-1.591.659h-4.5a2.25 2.25 0 01-1.591-.659l-1.8-1.8a3.183 3.183 0 00-4.462 0l-1.402 1.402M5 14.5V12a9 9 0 019-9 9 9 0 019 9v2.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Hormone Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Bioidentical Hormone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how BHRT can restore balance and vitality naturally
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Connection Between Hormones and Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why hormonal balance is essential for sustainable weight management
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Signs Your Thyroid May Need Attention
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Recognize the often-overlooked symptoms of thyroid dysfunction
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you uncover the root causes of your symptoms and create a personalized path to optimal health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}