import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Gut-Hormone Connection: What You Need to Know | Encompass Wellness and Aesthetics',
  description: 'Discover how your gut health impacts hormone balance and learn practical strategies to optimize both for better health and vitality in Edmond, OK.',
  keywords: 'gut health, hormone balance, gut-hormone connection, digestive health, hormone therapy, Edmond OK, metabolic health',
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
            The Gut-Hormone Connection: What You Need to Know
          </h1>

          {/* Meta Info */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
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
            If you've been struggling with unexplained fatigue, weight gain, mood swings, or hormonal imbalances that don't seem to improve despite treatment, the answer might not lie solely in your endocrine system. Emerging research reveals a profound and often overlooked connection between your gut health and hormone balance—a relationship so integral that addressing one without the other may leave you spinning your wheels on the path to wellness.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your gut does far more than digest food. It's home to trillions of microorganisms collectively known as the microbiome, which play essential roles in everything from immune function to neurotransmitter production—and yes, hormone regulation. Understanding this gut-hormone axis can be transformative for anyone seeking lasting health improvements.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            How Your Gut Influences Hormone Balance
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The connection between gut and hormones operates through several sophisticated mechanisms. Your gut microbiome produces and regulates numerous compounds that directly affect hormone levels, including estrogen, thyroid hormones, cortisol, and insulin.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            One key player is the estrobolome—a collection of gut bacteria capable of metabolizing estrogen. When your gut microbiome is healthy and diverse, it helps maintain optimal estrogen levels by ensuring proper breakdown and elimination. However, when dysbiosis (microbial imbalance) occurs, estrogen can be reabsorbed into circulation, leading to estrogen dominance and associated symptoms like weight gain, breast tenderness, and mood disturbances.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The gut also influences thyroid function through its role in converting the inactive thyroid hormone T4 into the active form T3. Approximately 20% of this conversion happens in the gastrointestinal tract, meaning poor gut health can contribute to hypothyroid symptoms even when thyroid lab values appear normal.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Inflammation Factor
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Chronic inflammation originating in the gut can wreak havoc on your entire hormonal system. When the intestinal lining becomes compromised—a condition often referred to as "leaky gut"—bacteria and toxins can enter the bloodstream, triggering widespread inflammation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This inflammatory response disrupts the hypothalamic-pituitary-adrenal (HPA) axis, your body's central stress response system. The result? Elevated cortisol levels, which in turn can suppress thyroid function, disrupt sex hormones, and promote insulin resistance. It's a cascading effect where gut dysfunction creates a domino effect throughout your endocrine system.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Healing your gut isn't just about digestion—it's about creating the foundation for hormone balance, mental clarity, and sustained energy."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Most Affected?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While everyone benefits from a healthy gut-hormone relationship, certain populations are particularly vulnerable to disruptions in this connection:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Women in perimenopause and menopause</strong> experiencing dramatic hormonal shifts that can be exacerbated by poor gut health</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Individuals with autoimmune conditions</strong> like Hashimoto's thyroiditis, where gut permeability often plays a triggering role</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Those with PCOS (polycystic ovary syndrome)</strong> who frequently show signs of insulin resistance and gut dysbiosis</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>Anyone with chronic stress</strong> which simultaneously damages gut integrity and dysregulates hormone production</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-relaxed"><strong>People with a history of antibiotic use</strong> which can significantly alter microbiome composition</p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Signs Your Gut May Be Affecting Your Hormones
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The symptoms of gut-hormone disruption can be frustratingly vague and often overlap with other conditions. You might experience:
          </p>

          <ul className="space-y-3 my-6 text-[var(--color-ink)] leading-relaxed ml-6">
            <li className="list-disc">Persistent bloating, gas, or digestive discomfort alongside hormonal symptoms</li>
            <li className="list-disc">Stubborn weight gain, especially around the midsection, despite dietary efforts</li>
            <li className="list-disc">Irregular periods or worsening PMS symptoms</li>
            <li className="list-disc">Chronic fatigue that doesn't improve with rest</li>
            <li className="list-disc">Brain fog, anxiety, or depression</li>
            <li className="list-disc">Skin issues like acne, eczema, or rosacea</li>
            <li className="list-disc">Food sensitivities that seem to develop or worsen over time</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're experiencing several of these symptoms simultaneously, it's worth investigating the gut-hormone connection with a qualified healthcare provider.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Strategies to Support Gut and Hormone Health
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that you can take meaningful steps to improve both gut and hormone health simultaneously. Here are evidence-based strategies that make a real difference:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Dietary Foundations</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Prioritize fiber-rich foods that feed beneficial gut bacteria and support estrogen metabolism</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Include fermented foods like sauerkraut, kimchi, and high-quality yogurt to introduce beneficial probiotics</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Reduce processed foods, excess sugar, and artificial sweeteners that disrupt microbiome diversity</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Consider an elimination diet if you suspect food sensitivities are contributing to inflammation</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Lifestyle Factors</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Manage stress through proven techniques like meditation, yoga, or breathwork—chronic stress damages gut lining</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Prioritize 7-9 hours of quality sleep, as poor sleep disrupts both gut microbiome and hormone production</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Exercise regularly but avoid overtraining, which can increase intestinal permeability and cortisol</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Minimize unnecessary antibiotic use and always follow with probiotic support when antibiotics are needed</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Support
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While lifestyle modifications form the foundation of gut and hormone health, sometimes professional intervention is necessary to break the cycle of dysfunction. Advanced testing can reveal specific imbalances in your microbiome, hormone levels, and inflammatory markers that aren't apparent from symptoms alone.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A healthcare provider specializing in hormone and metabolic medicine can offer comprehensive evaluation including comprehensive stool analysis, hormone panels, and nutritional assessments. They can also provide targeted interventions such as pharmaceutical-grade probiotics, digestive enzymes, targeted hormone therapy, and personalized nutrition protocols based on your unique biochemistry.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The gut-hormone connection is complex, but understanding it opens powerful pathways to healing. If you've been treating hormonal issues without addressing gut health—or vice versa—you may be missing a crucial piece of the puzzle. By recognizing these systems as intimately interconnected rather than separate, you can finally achieve the lasting balance and vitality you deserve.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in the intricate relationships between gut health, hormone balance, and metabolic function. We take a comprehensive, personalized approach to identify and address the root causes of your symptoms—not just mask them. If you're ready to explore how optimizing your gut-hormone connection could transform your health, we're here to guide you every step of the way.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Encompass Wellness and Aesthetics Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal wellness through evidence-based, personalized care.</p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-center text-[var(--color-ink)] mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Hormone Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Hormone Replacement Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the benefits, safety, and personalized approaches to hormone therapy for optimal wellness.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Metabolic Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Truth About Metabolism and Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover why traditional dieting often fails and how metabolic medicine offers lasting solutions.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  5 Signs Your Hormones Need Attention
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Recognize the subtle symptoms that may indicate hormone imbalance and when to seek professional care.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you optimize your gut health and hormone balance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-ink)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}