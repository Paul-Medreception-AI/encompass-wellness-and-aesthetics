import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/the-role-of-inflammation-in-chronic-disease' },
  title: 'The Role of Inflammation in Chronic Disease | Encompass Wellness',
  description: 'Discover how chronic inflammation contributes to disease and what you can do about it. Expert insights from our Hormone & Metabolic Medicine team in Edmond, OK.',
  keywords: 'chronic inflammation, inflammatory disease, autoimmune conditions, metabolic health, hormone therapy, Edmond OK',
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
            <span className="text-white">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Inflammation in Chronic Disease
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Hook */}
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            You feel exhausted every morning despite getting enough sleep. Your joints ache for no apparent reason. Weight gain seems inevitable no matter what you try. Brain fog clouds your thinking. These aren't just random symptoms—they may all share a common root cause: chronic inflammation.
          </p>
          <p className="mb-6">
            While inflammation is a natural and necessary part of your body's healing process, chronic inflammation works differently. It silently damages tissues, disrupts hormones, and sets the stage for serious health conditions. Understanding this hidden threat is the first step toward reclaiming your health and vitality.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          What Is Inflammation and Why Does It Matter?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Inflammation is your immune system's natural response to injury or infection. When you cut your finger or catch a cold, acute inflammation rushes to the scene with increased blood flow, immune cells, and healing factors. You experience redness, warmth, swelling, and pain—all signs that your body is working to repair itself. This type of inflammation is beneficial and resolves once healing is complete.
          </p>
          <p className="mb-6">
            Chronic inflammation, however, tells a different story. Instead of resolving, it persists for months or years at low levels throughout your body. Unlike acute inflammation's obvious symptoms, chronic inflammation often operates silently, gradually damaging cells, tissues, and organs without your awareness.
          </p>
          <p className="mb-6">
            This persistent inflammatory state disrupts normal biological processes. It interferes with hormone signaling, impairs cellular function, damages blood vessels, and promotes tissue breakdown. Over time, these effects accumulate and contribute to a wide range of chronic diseases.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          The Hidden Connection to Chronic Disease
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Research over the past two decades has revealed that chronic inflammation plays a central role in virtually all major chronic diseases. The list is extensive and sobering:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Cardiovascular disease:</strong> Inflammation damages arterial walls, promotes plaque formation, and increases heart attack and stroke risk.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Type 2 diabetes:</strong> Chronic inflammation impairs insulin signaling and contributes to insulin resistance.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Autoimmune conditions:</strong> Dysregulated inflammation attacks your own tissues in conditions like rheumatoid arthritis, lupus, and thyroid disease.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Neurodegenerative diseases:</strong> Brain inflammation contributes to Alzheimer's disease, Parkinson's, and cognitive decline.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Cancer:</strong> Inflammatory environments can promote tumor growth and spread.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Depression and anxiety:</strong> Brain inflammation affects neurotransmitter function and mood regulation.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Metabolic syndrome:</strong> Inflammation links obesity, insulin resistance, and hormonal imbalances.</span>
            </li>
          </ul>
          <p className="mb-6">
            This widespread involvement explains why addressing inflammation has become a cornerstone of modern preventive and functional medicine approaches.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif" style={{ fontFamily: 'Cormorant, serif' }}>
          "Chronic inflammation is like a smoldering fire in your body—invisible at first, but gradually causing damage that manifests as disease years later."
        </blockquote>

        {/* Section 3 */}
        <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          What Triggers Chronic Inflammation?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Understanding what fuels chronic inflammation empowers you to make meaningful changes. The most common triggers include:
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Poor Diet</p>
          <p className="mb-6">
            High intake of processed foods, refined sugars, trans fats, and excessive omega-6 fatty acids promotes inflammatory pathways. These foods spike blood sugar, increase oxidative stress, and activate immune responses that never fully shut off.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Chronic Stress</p>
          <p className="mb-6">
            When stress hormones like cortisol remain elevated for extended periods, they dysregulate immune function and promote inflammation. The mind-body connection is real and measurable.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Lack of Physical Activity</p>
          <p className="mb-6">
            Sedentary lifestyles contribute to weight gain and metabolic dysfunction, both of which increase inflammatory markers. Regular movement has powerful anti-inflammatory effects.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Poor Sleep Quality</p>
          <p className="mb-6">
            Sleep deprivation increases inflammatory cytokines and impairs the body's ability to regulate inflammation. Quality sleep is essential for immune balance.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Environmental Toxins</p>
          <p className="mb-6">
            Exposure to pollutants, pesticides, and chemicals can trigger immune activation and chronic inflammatory responses.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Gut Dysbiosis</p>
          <p className="mb-6">
            Imbalances in gut bacteria and intestinal permeability ("leaky gut") allow inflammatory compounds to enter the bloodstream, triggering systemic inflammation.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Hormonal Imbalances</p>
          <p className="mb-6">
            Disrupted hormone levels—whether thyroid, sex hormones, or metabolic hormones—can both cause and result from chronic inflammation, creating a vicious cycle.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          Recognizing the Signs of Chronic Inflammation
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            Unlike acute inflammation's obvious symptoms, chronic inflammation presents subtle, non-specific signs that are easily dismissed or attributed to aging or stress:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Persistent fatigue that doesn't improve with rest</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Joint pain, stiffness, or muscle aches</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Brain fog and difficulty concentrating</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Digestive issues like bloating, gas, or irregular bowel movements</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Skin problems including acne, eczema, or rashes</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Frequent infections or slow wound healing</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mood changes including depression or anxiety</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Unexplained weight gain or difficulty losing weight</span>
            </li>
          </ul>
          <p className="mb-6">
            If you're experiencing several of these symptoms, it may be worth investigating your inflammatory status through specialized lab testing.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          Evidence-Based Approaches to Reduce Inflammation
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            The good news is that chronic inflammation responds well to targeted lifestyle interventions and medical treatments. Here are evidence-based strategies that make a measurable difference:
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Adopt an Anti-Inflammatory Diet</p>
          <p className="mb-6">
            Focus on whole foods rich in omega-3 fatty acids (fatty fish, walnuts, flaxseeds), colorful vegetables and fruits (especially berries), herbs and spices (turmeric, ginger), and healthy fats (olive oil, avocados). Eliminate or minimize processed foods, refined sugars, and trans fats.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Prioritize Quality Sleep</p>
          <p className="mb-6">
            Aim for 7-9 hours of consistent, restorative sleep. Establish a regular sleep schedule, create a dark and cool sleeping environment, and limit screen time before bed.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Move Your Body Regularly</p>
          <p className="mb-6">
            Both aerobic exercise and strength training have anti-inflammatory effects. Even moderate activity like brisk walking for 30 minutes daily can significantly reduce inflammatory markers.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Manage Stress Effectively</p>
          <p className="mb-6">
            Incorporate stress-reduction practices such as meditation, deep breathing exercises, yoga, or time in nature. These aren't just feel-good activities—they measurably reduce inflammatory biomarkers.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Optimize Your Gut Health</p>
          <p className="mb-6">
            Support your microbiome with fermented foods, prebiotic fiber, and consider probiotic supplementation under professional guidance. Healing the gut often reduces systemic inflammation.
          </p>
          <p className="mb-4 font-semibold text-[var(--color-dark)]">Address Hormonal Imbalances</p>
          <p className="mb-6">
            Work with a healthcare provider specializing in hormone and metabolic medicine to identify and correct hormonal dysfunctions that may be driving inflammation.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          When to Seek Professional Help
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
          <p className="mb-6">
            While lifestyle modifications form the foundation of inflammation management, professional medical care is essential for comprehensive assessment and treatment. Consider seeking help if:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You have persistent symptoms despite lifestyle changes</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You've been diagnosed with a chronic inflammatory condition</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You want to understand your inflammatory status through comprehensive testing</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You suspect hormonal imbalances may be contributing to inflammation</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You need personalized guidance on supplements or medications</span>
            </li>
          </ul>
          <p className="mb-6">
            A functional medicine approach to inflammation looks at the whole person—diet, lifestyle, hormones, gut health, toxin exposure, and genetic factors. This comprehensive perspective allows for targeted interventions that address root causes rather than just suppressing symptoms.
          </p>
        </div>

        {/* Closing */}
        <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-8 border-t border-[var(--color-border)]">
          <p className="mb-6">
            Chronic inflammation may be a silent contributor to disease, but it doesn't have to define your health future. With the right knowledge, lifestyle changes, and professional support, you can reduce inflammation and reclaim your vitality.
          </p>
          <p className="mb-6">
            At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in identifying and treating the root causes of chronic inflammation through personalized hormone and metabolic medicine. We combine advanced testing with evidence-based treatments to help you feel your best.
          </p>
          <p>
            If you're ready to address inflammation and optimize your health, we're here to help you take the next step.
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients in Edmond, OK achieve optimal health through personalized, evidence-based care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Hormone Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Hormonal Imbalances in Women
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the signs, symptoms, and solutions for hormonal imbalances affecting energy, mood, and overall wellness.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Truth About Metabolic Syndrome
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn how insulin resistance, weight gain, and inflammation interconnect—and what you can do about it.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Wellness
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Functional Medicine: A Root Cause Approach
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how functional medicine differs from conventional care and why it's effective for chronic conditions.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
          <h2 className="font-serif text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you reduce inflammation and optimize your health through personalized care.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-sm text-white/70 mt-6">
            Serving Edmond, OK and surrounding communities
          </p>
        </div>
      </section>
    </main>
  )
}