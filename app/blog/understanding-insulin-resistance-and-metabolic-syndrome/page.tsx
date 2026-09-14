import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/understanding-insulin-resistance-and-metabolic-syndrome' },
  title: 'Understanding Insulin Resistance and Metabolic Syndrome',
  description: 'Learn about insulin resistance and metabolic syndrome, their impact on health, and evidence-based approaches to prevention and treatment. Expert insights from our hormone and metabolic medicine specialists in Edmond, OK.',
  keywords: 'insulin resistance, metabolic syndrome, diabetes prevention, hormone health, metabolic medicine, Edmond OK',
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
            Understanding Insulin Resistance and Metabolic Syndrome
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Encompass Wellness and Aesthetics Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            You've been doing everything right—eating better, moving more, trying to lose weight—but the scale won't budge. You feel exhausted despite getting enough sleep, and your doctor mentions your blood sugar is "a little high." If this sounds familiar, you may be dealing with insulin resistance, a condition affecting millions of Americans that often flies under the radar until it progresses to more serious health concerns.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Insulin resistance and its closely related condition, metabolic syndrome, represent a critical turning point in your metabolic health. The good news? Understanding these conditions empowers you to take action before they develop into type 2 diabetes, heart disease, or other chronic illnesses. Let's explore what's happening in your body and, more importantly, what you can do about it.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Insulin Resistance?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Insulin is a hormone produced by your pancreas that acts like a key, unlocking your cells so glucose (sugar) from your bloodstream can enter and provide energy. When you have insulin resistance, your cells don't respond properly to insulin's signal. They become "resistant" to its effects.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            To compensate, your pancreas works overtime, producing more and more insulin to achieve the same effect. For a while, this system works—your blood sugar stays relatively normal, but your insulin levels climb higher and higher. Eventually, your pancreas can't keep up, blood sugar begins to rise, and you may progress toward prediabetes or type 2 diabetes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Think of it like knocking on a door. At first, a gentle knock gets a response. With insulin resistance, you need to knock harder and harder to get the same answer. Eventually, the door stops opening altogether.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Metabolic Syndrome: The Bigger Picture
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Metabolic syndrome isn't a single disease but rather a cluster of conditions that occur together, dramatically increasing your risk of heart disease, stroke, and diabetes. You're diagnosed with metabolic syndrome when you have three or more of the following:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Increased waist circumference:</strong> Greater than 40 inches in men or 35 inches in women (central obesity)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Elevated triglycerides:</strong> 150 mg/dL or higher</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Low HDL cholesterol:</strong> Less than 40 mg/dL in men or 50 mg/dL in women</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>High blood pressure:</strong> 130/85 mmHg or higher</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Elevated fasting blood sugar:</strong> 100 mg/dL or higher</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Insulin resistance is the underlying driver of most metabolic syndrome cases. When your body struggles to use insulin effectively, it triggers a cascade of metabolic disruptions affecting blood pressure, cholesterol, fat storage, and inflammation throughout your body.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Insulin resistance is often called the silent epidemic. It can develop for years without obvious symptoms, making early detection and intervention crucial for long-term health."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While insulin resistance can affect anyone, certain factors significantly increase your risk:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Lifestyle factors</strong> play a major role. A diet high in processed foods, refined carbohydrates, and added sugars overwhelms your body's insulin response. Physical inactivity reduces your muscles' ability to absorb glucose efficiently. Chronic stress and poor sleep disrupt hormones that regulate blood sugar and appetite.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Body composition matters.</strong> Excess weight, particularly visceral fat stored around your abdomen and organs, releases inflammatory substances that interfere with insulin signaling. However, it's important to note that insulin resistance can also occur in people at a normal weight, especially if they're inactive or have a family history.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Genetics and family history</strong> influence your susceptibility. If you have parents or siblings with type 2 diabetes, your risk increases substantially. Certain ethnic groups—including Hispanic, African American, Native American, and Asian populations—face higher rates of insulin resistance and metabolic syndrome.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Age and hormones</strong> are also factors. Risk increases after age 45, and hormonal changes during perimenopause and menopause can worsen insulin sensitivity in women. Conditions like polycystic ovary syndrome (PCOS) are strongly associated with insulin resistance.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Warning Signs
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Insulin resistance often develops silently, but your body may send subtle signals:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Persistent fatigue, especially after meals</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Intense cravings for sweets or carbohydrates</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Weight gain, particularly around the midsection</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Difficulty losing weight despite diet and exercise efforts</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Dark patches of skin (acanthosis nigricans) on the neck, armpits, or groin</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Frequent urination or increased thirst (when blood sugar becomes elevated)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Brain fog or difficulty concentrating</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most reliable way to identify insulin resistance is through laboratory testing. Your healthcare provider may check fasting glucose, hemoglobin A1C (average blood sugar over three months), fasting insulin levels, and lipid panels to assess your metabolic health comprehensively.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Why This Matters: Long-Term Health Implications
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Left unaddressed, insulin resistance and metabolic syndrome set the stage for serious health complications. Type 2 diabetes is perhaps the most direct consequence, but the risks extend far beyond blood sugar control.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cardiovascular disease represents the greatest threat. People with metabolic syndrome have double the risk of heart disease and five times the risk of diabetes compared to those without the condition. Insulin resistance promotes inflammation, damages blood vessels, and contributes to atherosclerosis (plaque buildup in arteries).
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Non-alcoholic fatty liver disease (NAFLD) is another common consequence. Excess insulin drives fat storage in the liver, which can progress to inflammation, scarring, and even liver failure if untreated. Other associated conditions include sleep apnea, certain cancers, cognitive decline, and reproductive issues like PCOS.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The sobering reality is that metabolic syndrome affects more than one in three American adults. But here's the empowering truth: insulin resistance is often reversible with appropriate lifestyle changes and medical support, especially when caught early.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Strategies for Prevention and Reversal
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The cornerstone of addressing insulin resistance involves comprehensive lifestyle modifications. Research consistently shows that even modest changes can produce significant improvements.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Nutrition strategies</strong> focus on blood sugar stability. Prioritize whole, unprocessed foods including vegetables, lean proteins, healthy fats, and fiber-rich carbohydrates. Reduce refined carbohydrates, added sugars, and processed foods that spike blood sugar and insulin. Consider working with a nutritionist familiar with metabolic health to develop a personalized eating plan. Some individuals benefit from approaches like Mediterranean eating patterns, low-glycemic diets, or time-restricted eating, though individual responses vary.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Physical activity</strong> is remarkably effective at improving insulin sensitivity. Both aerobic exercise and resistance training help your muscles absorb glucose more efficiently. Aim for at least 150 minutes of moderate activity weekly, combined with strength training twice per week. Even short walks after meals can significantly lower post-meal blood sugar spikes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Weight management</strong> matters, but the focus should be on health markers rather than scale numbers alone. Studies show that losing just 5-7% of body weight can dramatically improve insulin sensitivity and reduce metabolic syndrome risk. However, building muscle, reducing visceral fat, and improving fitness may be more important than weight alone.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Sleep and stress management</strong> shouldn't be overlooked. Poor sleep and chronic stress elevate cortisol, which worsens insulin resistance. Aim for 7-9 hours of quality sleep nightly and incorporate stress-reduction practices that work for you—whether meditation, yoga, time in nature, or therapy.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Medical interventions</strong> may be appropriate for some individuals. Medications like metformin can improve insulin sensitivity and help prevent progression to diabetes. Hormone optimization, particularly for thyroid and sex hormones, may also play a role in metabolic health. At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone and metabolic medicine, offering comprehensive testing and personalized treatment plans that address the root causes of metabolic dysfunction.
          </p>

          {/* Section 7 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Taking Action: Your Next Steps
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you recognize yourself in this article, know that you're not alone—and that taking action now can dramatically alter your health trajectory. Start with simple, sustainable changes: add more vegetables to your meals, take a walk after dinner, prioritize sleep, and schedule comprehensive metabolic testing with a healthcare provider who understands the complexity of hormone and metabolic health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Insulin resistance and metabolic syndrome aren't inevitable consequences of aging or genetics. They're warning signs—your body's way of telling you that something needs to change. With the right support, testing, and personalized approach, you can restore metabolic balance, reduce disease risk, and reclaim your vitality.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Encompass Wellness and Aesthetics, we don't just treat symptoms—we work to understand and address the underlying metabolic and hormonal imbalances affecting your health. If you're ready to take control of your metabolic health, we're here to guide you every step of the way.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-medium text-lg mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.227 0 4.458l-1.651 1.651m-13.102 0L4.848 21.21c-1.232-1.232-1.232-3.227 0-4.458l1.402-1.402m7.5 1.5h0" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Hormone Health
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Role of Hormones in Weight Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how thyroid, cortisol, and sex hormones influence metabolism and body composition.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Lifestyle Medicine
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Your Lab Results: A Patient Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how to interpret common metabolic markers and what they mean for your health.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Prevention
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Nutrition Strategies for Optimal Metabolic Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Evidence-based dietary approaches to improve insulin sensitivity and support long-term wellness.
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
            Our team is here to help you optimize your metabolic health with personalized, evidence-based care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-accent)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}