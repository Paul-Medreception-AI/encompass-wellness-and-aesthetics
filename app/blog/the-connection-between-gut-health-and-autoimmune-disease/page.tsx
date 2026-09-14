import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between Gut Health and Autoimmune Disease | Encompass Wellness and Aesthetics',
  description: 'Discover how your gut microbiome influences autoimmune conditions and what you can do to support healing. Expert insights from Encompass Wellness and Aesthetics in Edmond, OK.',
  keywords: 'gut health, autoimmune disease, leaky gut, microbiome, inflammation, Edmond OK, hormone health, functional medicine',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/90">Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Connection Between Gut Health and Autoimmune Disease
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness and Aesthetics Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've been diagnosed with an autoimmune condition—or suspect you might have one—you've likely experienced the frustration of managing symptoms that seem to come and go without rhyme or reason. Fatigue, joint pain, skin issues, digestive problems, and brain fog can feel impossible to predict or control. What if the key to understanding and managing these symptoms lies not in your joints, skin, or thyroid, but in your gut?
            </p>
            <p className="mb-6">
              Emerging research reveals a profound connection between gut health and autoimmune disease. Your digestive system houses trillions of microorganisms that do far more than help you digest food—they regulate your immune system, produce essential nutrients, and protect against inflammation. When this delicate ecosystem becomes imbalanced, it can trigger or worsen autoimmune conditions. Understanding this connection opens new pathways for healing and hope.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is the Gut Microbiome?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your gut microbiome is a complex community of bacteria, viruses, fungi, and other microorganisms living primarily in your large intestine. This ecosystem contains approximately 100 trillion organisms—outnumbering your human cells by about 10 to 1. Far from being passive passengers, these microbes play active roles in digestion, vitamin production, hormone regulation, and perhaps most importantly, immune system function.
            </p>
            <p className="mb-6">
              A healthy microbiome is diverse and balanced, with beneficial bacteria keeping potentially harmful organisms in check. This balance helps maintain the integrity of your intestinal lining, produces anti-inflammatory compounds, and trains your immune system to distinguish between helpful and harmful substances. When this balance is disrupted—a condition called dysbiosis—the stage is set for inflammation and immune dysfunction.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            How Gut Health Influences Autoimmune Disease
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The connection between gut health and autoimmune disease centers on three key mechanisms: intestinal permeability, immune system regulation, and chronic inflammation.
            </p>
            <p className="mb-6">
              <strong>Intestinal Permeability (Leaky Gut):</strong> Your intestinal lining acts as a selective barrier, allowing nutrients to pass into your bloodstream while keeping out toxins, undigested food particles, and bacteria. When this barrier becomes compromised—often due to dysbiosis, poor diet, chronic stress, or certain medications—it develops microscopic gaps that allow unwanted substances to "leak" into circulation. Your immune system recognizes these particles as foreign invaders and mounts an inflammatory response. Over time, this chronic activation can cause your immune system to mistakenly attack your own tissues.
            </p>
            <p className="mb-6">
              <strong>Immune Dysregulation:</strong> Approximately 70-80% of your immune system resides in or near your gut. The microbiome plays a crucial role in "educating" immune cells, teaching them to respond appropriately to threats while tolerating harmless substances. When dysbiosis occurs, this education process goes awry, potentially leading to autoimmune reactions where the immune system attacks healthy tissue.
            </p>
            <p className="mb-6">
              <strong>Chronic Inflammation:</strong> An unhealthy gut microbiome produces inflammatory compounds that circulate throughout your body. This systemic inflammation can trigger or worsen autoimmune conditions including rheumatoid arthritis, Hashimoto's thyroiditis, inflammatory bowel disease, lupus, and multiple sclerosis.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Healing the gut doesn't mean curing autoimmune disease, but it can significantly reduce symptoms, decrease flare-ups, and improve quality of life for many patients."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Autoimmune Conditions Linked to Gut Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research has identified gut microbiome imbalances in numerous autoimmune conditions:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hashimoto's Thyroiditis:</strong> Studies show altered gut bacteria composition in patients with autoimmune thyroid disease, with intestinal permeability playing a significant role.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Rheumatoid Arthritis:</strong> Research identifies specific bacterial imbalances that correlate with disease severity and inflammation markers.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Inflammatory Bowel Disease (IBD):</strong> Crohn's disease and ulcerative colitis involve significant microbiome disruption and intestinal barrier dysfunction.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Type 1 Diabetes:</strong> Evidence suggests gut dysbiosis precedes the onset of autoimmune destruction of insulin-producing cells.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lupus and Multiple Sclerosis:</strong> Both conditions show correlations with intestinal permeability and specific microbiome patterns.</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Damages Gut Health?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding what harms your gut microbiome is essential for prevention and healing. Common culprits include:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Antibiotic Overuse:</strong> While sometimes necessary, antibiotics kill both harmful and beneficial bacteria, disrupting microbial balance.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Poor Diet:</strong> High intake of processed foods, sugar, and unhealthy fats feeds harmful bacteria while starving beneficial ones.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Chronic Stress:</strong> Stress hormones directly impact gut bacteria composition and intestinal barrier integrity.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Environmental Toxins:</strong> Pesticides, heavy metals, and certain food additives can damage the microbiome.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>NSAIDs and Other Medications:</strong> Regular use of non-steroidal anti-inflammatory drugs can increase intestinal permeability.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Lack of Sleep:</strong> Poor sleep quality disrupts the microbiome and impairs gut barrier function.</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Supporting Gut Health to Manage Autoimmune Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The encouraging news is that you can take concrete steps to support your gut health and potentially reduce autoimmune symptoms. While individual needs vary, evidence-based strategies include:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Eat a Diverse, Plant-Rich Diet:</strong> Fiber from vegetables, fruits, legumes, and whole grains feeds beneficial bacteria and supports barrier integrity.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Include Fermented Foods:</strong> Yogurt, kefir, sauerkraut, kimchi, and kombucha provide beneficial probiotic bacteria.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Consider an Elimination Diet:</strong> Working with a healthcare provider to identify food sensitivities can reduce inflammation and heal the gut lining.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage Stress:</strong> Practices like meditation, yoga, deep breathing, and adequate sleep support both gut and immune health.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use Supplements Strategically:</strong> High-quality probiotics, prebiotics, omega-3 fatty acids, vitamin D, and gut-healing nutrients like L-glutamine may help when used appropriately.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Work with Specialized Providers:</strong> Functional medicine practitioners can order specialized testing to assess gut health and create personalized treatment plans.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While lifestyle changes can significantly improve gut health, managing autoimmune disease requires comprehensive medical care. Consider seeking professional guidance if you experience:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="list-disc">Persistent digestive symptoms despite dietary changes</li>
              <li className="list-disc">Unexplained fatigue, joint pain, or inflammation</li>
              <li className="list-disc">New or worsening autoimmune symptoms</li>
              <li className="list-disc">Difficulty determining which foods trigger symptoms</li>
              <li className="list-disc">Questions about appropriate testing or supplementation</li>
            </ul>
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in the intricate connections between gut health, hormones, and autoimmune conditions. We use advanced testing and personalized treatment plans to address root causes, not just symptoms. If you're struggling with an autoimmune condition and suspect gut health may be playing a role, we're here to help you find answers and relief.
            </p>
            <p className="mb-6">
              Understanding the gut-autoimmune connection is more than academic—it's potentially life-changing. By supporting your microbiome through thoughtful nutrition, stress management, and professional guidance, you can take an active role in managing your health and improving your quality of life.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <aside className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Encompass Wellness and Aesthetics Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine. Our team is dedicated to helping patients understand the complex connections between gut health, hormones, and overall wellness through evidence-based, personalized care.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462l-1.8 1.8m-2.6-3.9V21m-4.5 0H8.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Hormone Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Thyroid Function and Hashimoto's Disease
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Learn how autoimmune thyroid disease develops and what you can do to support thyroid health naturally.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Nutrition</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Anti-Inflammatory Eating: A Beginner's Guide
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Discover how strategic nutrition choices can reduce inflammation and support immune balance.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Role of Stress in Chronic Inflammation
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Understand how chronic stress impacts your immune system and practical strategies for stress management.
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
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help you understand the connections between gut health, hormones, and autoimmune conditions—and create a personalized plan for healing.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}