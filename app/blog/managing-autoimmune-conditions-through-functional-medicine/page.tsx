import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/managing-autoimmune-conditions-through-functional-medicine' },
  title: 'Managing Autoimmune Conditions Through Functional Medicine',
  description: 'Discover how functional medicine offers a personalized, root-cause approach to managing autoimmune conditions. Learn evidence-based strategies for autoimmune care in Edmond, OK.',
  keywords: 'autoimmune conditions, functional medicine, autoimmune disease treatment, holistic autoimmune care, Edmond OK, hormone medicine, metabolic health',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Managing Autoimmune Conditions Through Functional Medicine
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
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
            Living with an autoimmune condition can feel like your body has turned against you. The fatigue, inflammation, and unpredictable flare-ups disrupt daily life, while conventional treatments often focus on suppressing symptoms rather than addressing why your immune system is attacking healthy tissue in the first place. For the estimated 50 million Americans living with autoimmune diseases, there's growing hope in a different approach: functional medicine.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Functional medicine doesn't just ask "what disease do you have?" but rather "why do you have this disease, and what can we do to restore balance?" This personalized, root-cause approach is transforming how we understand and manage autoimmune conditions—offering patients not just symptom relief, but the possibility of genuine healing and improved quality of life.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Autoimmune Conditions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Autoimmune diseases occur when your immune system mistakenly attacks your own tissues. There are more than 80 different autoimmune conditions, including rheumatoid arthritis, Hashimoto's thyroiditis, lupus, multiple sclerosis, inflammatory bowel disease, and psoriasis. While each affects different parts of the body, they share common underlying mechanisms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Conventional medicine typically treats autoimmune conditions with immunosuppressive medications that dampen the entire immune response. While these can be life-saving and necessary, they don't address the underlying triggers that caused the immune system to malfunction in the first place. This is where functional medicine offers a complementary and often transformative perspective.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Functional Medicine Approach
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Functional medicine views autoimmune disease as the end result of a complex web of factors: genetics, environmental triggers, gut health, hormonal imbalances, chronic infections, toxin exposure, and stress. Rather than viewing the condition as a life sentence, functional medicine practitioners work to identify and address these root causes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This approach is built on several core principles:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Bio-individuality:</strong> Each person's autoimmune journey is unique, requiring personalized assessment and treatment plans tailored to your specific triggers and circumstances.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Systems biology:</strong> Understanding how all body systems—digestive, hormonal, immune, detoxification—interconnect and influence each other.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Root-cause resolution:</strong> Identifying and removing triggers while supporting the body's natural healing mechanisms, rather than simply suppressing symptoms.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Patient partnership:</strong> You become an active participant in your healing journey, empowered with knowledge and tools to manage your condition.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
            "Functional medicine doesn't just ask what disease you have—it asks why you have it, and what we can do together to restore balance and promote healing."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Areas of Focus in Autoimmune Management
          </h2>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            Gut Health and Intestinal Permeability
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research increasingly shows that gut health plays a central role in autoimmune disease. The concept of "leaky gut" or increased intestinal permeability allows incompletely digested proteins and bacterial components to enter the bloodstream, triggering immune reactions. Functional medicine approaches focus on healing the gut lining through targeted nutrition, probiotics, and elimination of inflammatory foods.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            Food as Medicine
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Dietary interventions are cornerstone treatments in functional medicine. Anti-inflammatory diets, elimination protocols to identify food sensitivities, and nutrient-dense whole foods help reduce immune system activation. Many patients find significant symptom improvement through dietary changes alone—something rarely emphasized in conventional autoimmune care.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            Hormone Balance
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Autoimmune diseases disproportionately affect women, suggesting a hormonal component. Imbalances in thyroid hormones, cortisol, estrogen, and testosterone can both trigger and worsen autoimmune conditions. Functional medicine includes comprehensive hormone testing and natural approaches to rebalancing these critical messengers.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">
            Environmental Toxins and Infections
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Exposure to heavy metals, pesticides, mold, and persistent infections can trigger or perpetuate autoimmune responses. Functional medicine practitioners work to identify these exposures through specialized testing and implement detoxification protocols to reduce the body's toxic burden.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Interventions
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While more research is always needed, growing evidence supports functional medicine approaches for autoimmune conditions:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Studies show vitamin D deficiency is common in autoimmune disease, and supplementation may reduce disease activity
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Omega-3 fatty acids demonstrate anti-inflammatory effects and may improve outcomes in rheumatoid arthritis and lupus
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                The Autoimmune Protocol (AIP) diet has shown promising results in reducing symptoms and improving quality of life in inflammatory bowel disease patients
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Stress reduction techniques including meditation and yoga have been shown to modulate immune function and reduce inflammation markers
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                Probiotics and gut-healing protocols demonstrate benefits in multiple autoimmune conditions by supporting intestinal barrier function
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps You Can Take Today
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While working with a qualified functional medicine practitioner is essential for comprehensive care, there are steps you can begin implementing now:
          </p>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-[var(--color-ink)] mb-3">Dietary Foundation</h4>
            <ul className="space-y-2 text-[var(--color-ink)] leading-loose">
              <li>• Eliminate or reduce processed foods, refined sugars, and industrial seed oils</li>
              <li>• Focus on nutrient-dense whole foods: vegetables, quality proteins, healthy fats</li>
              <li>• Consider a 30-day elimination of common inflammatory triggers (gluten, dairy, soy)</li>
              <li>• Stay well-hydrated with filtered water</li>
            </ul>
          </div>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-[var(--color-ink)] mb-3">Lifestyle Modifications</h4>
            <ul className="space-y-2 text-[var(--color-ink)] leading-loose">
              <li>• Prioritize 7-9 hours of quality sleep nightly</li>
              <li>• Practice stress management through meditation, deep breathing, or gentle yoga</li>
              <li>• Incorporate regular but not excessive movement—walking, swimming, tai chi</li>
              <li>• Reduce exposure to environmental toxins (choose natural cleaning products, filter water)</li>
            </ul>
          </div>

          <div className="bg-[var(--color-cream)] rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-[var(--color-ink)] mb-3">Testing and Monitoring</h4>
            <ul className="space-y-2 text-[var(--color-ink)] leading-loose">
              <li>• Work with your provider to assess vitamin D, B12, and thyroid function</li>
              <li>• Consider comprehensive stool testing to evaluate gut health</li>
              <li>• Track your symptoms, energy, and food intake to identify patterns</li>
              <li>• Monitor inflammatory markers to assess progress objectively</li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect from Functional Medicine Care
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Functional medicine requires patience and commitment. Unlike medications that may provide quick symptom relief, addressing root causes takes time—typically several months to see significant improvements. Your initial consultation will be comprehensive, often lasting 60-90 minutes, covering your complete health history, lifestyle, diet, stress levels, and environmental exposures.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your practitioner will likely order specialized testing not typically done in conventional settings: comprehensive hormone panels, food sensitivity testing, gut microbiome analysis, heavy metal screening, or nutritional assessments. Based on these findings, you'll receive a personalized treatment plan that may include dietary changes, targeted supplementation, lifestyle modifications, and stress management techniques.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many patients find that functional medicine works best alongside conventional treatment. Your medications may be gradually adjusted as your underlying health improves, always under careful medical supervision. The goal isn't to replace necessary medications but to address the reasons you needed them in the first place.
          </p>

          {/* Closing */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Your Path Forward
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Living with an autoimmune condition doesn't mean accepting a lifetime of progressive disease and increasing medication. Functional medicine offers a roadmap for understanding why your immune system is dysregulated and what you can do to support your body's natural healing capacity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While the journey requires commitment and patience, many patients experience profound improvements: reduced symptoms, fewer flare-ups, improved energy, better sleep, and an enhanced sense of control over their health. Some even achieve remission of their condition.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're struggling with an autoimmune condition and feel that conventional treatment isn't giving you the whole picture, functional medicine may offer the personalized, comprehensive approach you've been seeking. At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in hormone and metabolic medicine with a functional approach to complex conditions like autoimmunity. We're here to partner with you in finding answers and restoring your vitality.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine. Our team is dedicated to helping patients achieve optimal wellness through personalized, evidence-based functional medicine approaches.
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
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Hormone Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Thyroid Function and Autoimmunity
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how thyroid disorders and autoimmunity intersect, and what you can do to support optimal thyroid health.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Nutrition
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Anti-Inflammatory Diet: A Practical Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how food choices can reduce inflammation and support immune balance in autoimmune conditions.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Gut Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Healing Your Gut: The Foundation of Immune Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the gut-immune connection and evidence-based strategies for healing intestinal permeability.
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
          <p className="text-lg text-white/90 mb-8">
            Our team is here to help you understand and manage your autoimmune condition through personalized functional medicine.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-ink)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}