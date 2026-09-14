import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/the-role-of-detoxification-in-optimal-health' },
  title: 'The Role of Detoxification in Optimal Health | Encompass Wellness',
  description: 'Discover how detoxification supports hormone balance, metabolic function, and overall wellness. Evidence-based insights from Edmond\'s hormone and metabolic medicine experts.',
  keywords: 'detoxification, detox, metabolic health, hormone balance, optimal health, wellness, Edmond OK',
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Detoxification in Optimal Health
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              In today's world, we're constantly exposed to environmental toxins, processed foods, stress, and countless chemicals that our ancestors never encountered. While our bodies have built-in systems designed to eliminate these harmful substances, modern life can overwhelm these natural detoxification pathways. The result? Fatigue, brain fog, stubborn weight gain, hormonal imbalances, and a host of chronic health concerns that prevent us from feeling our best.
            </p>
            <p className="mb-6">
              Understanding how detoxification works—and how to support it—is essential for achieving optimal health, especially when it comes to hormone balance and metabolic function. Let's explore the science behind detoxification and practical steps you can take to support your body's natural cleansing processes.
            </p>
          </div>

          {/* Section 1 */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              What Is Detoxification?
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Detoxification is your body's continuous process of neutralizing and eliminating toxins—substances that can harm cellular function and overall health. This isn't about trendy juice cleanses or restrictive detox diets. True detoxification happens 24/7 through several organ systems working in concert.
              </p>
              <p className="mb-6">
                Your liver is the primary detox powerhouse, processing everything from medications and hormones to environmental chemicals and metabolic waste. The kidneys filter blood and eliminate water-soluble toxins through urine. Your digestive system, particularly a healthy gut microbiome, plays a crucial role in binding toxins and moving them out of the body. Even your skin and lungs contribute through sweat and respiration.
              </p>
              <p className="mb-6">
                This complex system relies on specific nutrients, enzymes, and biochemical pathways—particularly in the liver, where detoxification occurs in two distinct phases. When these pathways become overburdened or lack essential cofactors, toxins can accumulate, leading to widespread health consequences.
              </p>
            </div>
          </section>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "Supporting your body's natural detoxification pathways isn't about harsh cleanses—it's about providing the nutrients and lifestyle factors your cells need to function optimally."
          </blockquote>

          {/* Section 2 */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              The Connection Between Detoxification and Hormone Health
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                One of the most overlooked aspects of hormone balance is the role of detoxification. Your liver doesn't just process environmental toxins—it also metabolizes and eliminates used hormones, including estrogen, testosterone, and cortisol. When detox pathways are sluggish, these hormones can be recycled back into circulation rather than properly eliminated.
              </p>
              <p className="mb-6">
                This is particularly significant for estrogen metabolism. Depending on which detoxification pathway predominates, estrogen can be broken down into protective or harmful metabolites. Poor detoxification can lead to estrogen dominance—a condition associated with weight gain, mood swings, PMS, fibrocystic breasts, and increased cancer risk.
              </p>
              <p className="mb-6">
                Environmental toxins called endocrine disruptors further complicate this picture. Found in plastics, pesticides, personal care products, and more, these chemicals mimic or block natural hormones, contributing to thyroid dysfunction, insulin resistance, and reproductive issues. Supporting robust detoxification helps clear these disruptors and restore hormonal balance.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Signs Your Detoxification Systems Need Support
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                How do you know if your body's detoxification capacity is overwhelmed? While comprehensive functional testing provides the clearest picture, several common symptoms may indicate sluggish detox pathways:
              </p>
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Persistent fatigue that doesn't improve with rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Brain fog, difficulty concentrating, or memory issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Stubborn weight gain, especially around the midsection</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Hormonal imbalances including irregular periods, PMS, or low libido</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Skin issues like acne, rashes, or unexplained sensitivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Digestive complaints including bloating, constipation, or irregular bowel movements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Heightened sensitivity to smells, chemicals, or medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Frequent headaches or joint pain without clear cause</span>
                </li>
              </ul>
              <p className="mb-6">
                If several of these symptoms resonate with you, it may be time to evaluate how well your detoxification systems are functioning and what steps you can take to support them.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Evidence-Based Ways to Support Detoxification
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Supporting your body's natural detoxification doesn't require extreme measures. Research shows that consistent, evidence-based lifestyle practices can significantly enhance your body's ability to process and eliminate toxins:
              </p>
              
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Nutrition for Detoxification</h3>
              <p className="mb-4">
                Certain nutrients are essential cofactors for detox enzymes. A diet rich in cruciferous vegetables (broccoli, cauliflower, Brussels sprouts, kale) provides compounds that support both phases of liver detoxification. Sulfur-rich foods like garlic, onions, and eggs supply the building blocks for glutathione—the body's master antioxidant and critical detox molecule.
              </p>
              <p className="mb-6">
                High-quality protein, adequate fiber (especially from vegetables and flaxseed), and colorful antioxidant-rich produce all support various aspects of detoxification. Staying well-hydrated helps kidneys flush toxins, while minimizing processed foods, sugar, and alcohol reduces the toxic load your body must handle.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Lifestyle Practices</h3>
              <p className="mb-4">
                Regular movement and exercise enhance circulation and lymphatic flow, helping move toxins to elimination organs. Sweating through exercise or sauna use can eliminate certain fat-soluble toxins through the skin. Quality sleep is when your brain's glymphatic system clears metabolic waste—chronic sleep deprivation impairs this crucial detox process.
              </p>
              <p className="mb-6">
                Stress management matters too. Chronic stress depletes nutrients needed for detoxification and shifts the body's priority away from housekeeping functions like toxin elimination. Practices like meditation, deep breathing, and adequate rest support optimal detox function.
              </p>

              <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Reducing Toxic Exposure</h3>
              <p className="mb-6">
                While you can't eliminate all toxin exposure, simple swaps make a difference. Choose organic produce when possible (especially for the "Dirty Dozen"), filter your drinking water, replace plastic food storage with glass, choose clean personal care and cleaning products, and avoid unnecessary medications when natural alternatives exist. These steps reduce the burden on your detoxification systems.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Seek Professional Guidance
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                While lifestyle measures form the foundation of healthy detoxification, some individuals benefit from professional support—particularly those with significant toxic burden, genetic variations affecting detox enzymes, or complex chronic conditions.
              </p>
              <p className="mb-6">
                At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone and metabolic medicine with a deep understanding of how detoxification impacts these systems. Through comprehensive testing, we can assess your detoxification capacity, identify nutrient deficiencies, evaluate toxic burden, and detect hormonal imbalances related to poor detox function.
              </p>
              <p className="mb-6">
                Based on your unique biochemistry, we create personalized protocols that may include targeted nutritional support, specific supplements to enhance detox pathways, bioidentical hormone therapy when appropriate, and dietary and lifestyle modifications tailored to your needs. This individualized approach ensures you're supporting detoxification safely and effectively—without the risks of unsupervised "detox" programs.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              The Path Forward
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Detoxification isn't a one-time event—it's an ongoing process that your body performs constantly. By understanding how these systems work and taking steps to support them, you can improve energy, mental clarity, hormone balance, and overall vitality.
              </p>
              <p className="mb-6">
                If you're struggling with symptoms that suggest impaired detoxification, or if you're ready to optimize your health at the cellular level, professional guidance can make all the difference. Our team is here to help you uncover the root causes of your symptoms and create a science-based plan for lasting wellness.
              </p>
              <p className="mb-6">
                Your body has remarkable healing capacity when given the right support. Let's work together to unlock your optimal health.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-sm text-[var(--color-muted)]">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal health through evidence-based, personalized care.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.227 0 4.458l-1.403 1.403m-4.458-4.458l-3.75 3.75m9.185-9.193a24.959 24.959 0 00-4.399-3.359m0 0c-1.154-.49-2.344-.907-3.553-1.242M5 14.5l1.057-.265A9.065 9.065 0 0112 15c2.221 0 4.323-.607 6.12-1.663m-15.177-.596l-1.402 1.403c-1.232 1.232-1.232 3.227 0 4.458l1.403 1.403m4.458-4.458l3.75 3.75m-9.185-9.193a24.959 24.959 0 014.399-3.359m0 0c1.154-.49 2.344-.907 3.553-1.242" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Hormone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Learn how bioidentical hormone therapy can restore balance, vitality, and quality of life.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Metabolic Approach to Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Discover why lasting weight loss requires addressing hormones, metabolism, and cellular health.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Signs Your Hormones May Be Out of Balance
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Recognize the common symptoms of hormonal imbalance and when to seek help.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read More
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
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you achieve optimal health through personalized, evidence-based care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}