import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bioidentical vs. Synthetic Hormone Replacement | Encompass Wellness and Aesthetics',
  description: 'Compare bioidentical and synthetic hormone replacement therapy. Learn the differences in effectiveness, side effects, and which option is right for your needs in Edmond, OK.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            Bioidentical vs. Synthetic Hormone Replacement: Which is Right for You?
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            An evidence-based comparison to help you make an informed decision about your hormone therapy in Edmond, OK
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 bg-[var(--color-primary)] text-white p-6">
              <div className="font-semibold">Factor</div>
              <div className="font-semibold">Bioidentical HRT</div>
              <div className="font-semibold">Synthetic HRT</div>
            </div>
            
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Molecular Structure</div>
              <div className="text-[var(--color-muted)]">Identical to human hormones</div>
              <div className="text-[var(--color-muted)]">Chemically altered, not identical</div>
            </div>
            
            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Effectiveness</div>
              <div className="text-[var(--color-muted)]">Highly effective for symptom relief</div>
              <div className="text-[var(--color-muted)]">Effective but may have more side effects</div>
            </div>
            
            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Side Effects</div>
              <div className="text-[var(--color-muted)]">Generally fewer due to body recognition</div>
              <div className="text-[var(--color-muted)]">May include bloating, mood changes, weight gain</div>
            </div>
            
            {/* Row 4 */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Customization</div>
              <div className="text-[var(--color-muted)]">Fully personalized to individual needs</div>
              <div className="text-[var(--color-muted)]">Standardized doses, limited flexibility</div>
            </div>
            
            {/* Row 5 */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Cost</div>
              <div className="text-[var(--color-muted)]">Moderate; often covered by insurance</div>
              <div className="text-[var(--color-muted)]">Generally lower; widely covered</div>
            </div>
            
            {/* Row 6 */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Time to Results</div>
              <div className="text-[var(--color-muted)]">2-4 weeks for initial relief</div>
              <div className="text-[var(--color-muted)]">2-6 weeks for initial relief</div>
            </div>
            
            {/* Row 7 */}
            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="text-[var(--color-muted)]">Patients seeking natural, personalized approach</div>
              <div className="text-[var(--color-muted)]">Those preferring conventional, standardized treatment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Bioidentical HRT */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462s-3.23 1.232-4.462 0L13.927 18.35M5 14.5l-1.763.441A3 3 0 001.5 18.9v.6a3 3 0 003 3h15a3 3 0 003-3v-.6a3 3 0 00-1.737-2.959L19.8 15.3m-14.8-.8l2.813 2.813A9.065 9.065 0 0112 15a9.065 9.065 0 016.23.693L19.8 15.3" />
              </svg>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)]">
                Bioidentical Hormone Replacement Therapy
              </h2>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Bioidentical hormone replacement therapy (BHRT) uses hormones that are molecularly identical to those naturally produced by the human body. These hormones are typically derived from plant sources such as yams and soy, then compounded to match your body's natural hormone structure. Because they're structurally identical, your body recognizes and metabolizes them exactly as it would its own hormones.
              </p>
              <p>
                The primary advantage of bioidentical hormones lies in their personalization. At Encompass Wellness and Aesthetics, we create customized formulations based on comprehensive hormone testing, allowing us to address your specific deficiencies with precise dosing. This individualized approach often results in better symptom control with fewer side effects compared to standardized treatments.
              </p>
              <p>
                Clinical evidence suggests that bioidentical hormones may offer a lower risk profile for certain health concerns, particularly when administered through non-oral routes like creams, pellets, or patches. Patients typically report feeling more like themselves, with improvements in energy, mood, sleep quality, and cognitive function becoming noticeable within 2-4 weeks of starting treatment.
              </p>
              <p>
                Ideal candidates for BHRT include individuals experiencing moderate to severe hormone deficiency symptoms who prefer a natural, personalized approach to treatment. This option is particularly well-suited for those who have experienced side effects with synthetic hormones or who value the ability to fine-tune their therapy based on ongoing lab work and symptom tracking.
              </p>
            </div>
          </div>

          {/* Synthetic HRT */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462s-3.23 1.232-4.462 0L13.927 18.35M5 14.5l-1.763.441A3 3 0 001.5 18.9v.6a3 3 0 003 3h15a3 3 0 003-3v-.6a3 3 0 00-1.737-2.959L19.8 15.3m-14.8-.8l2.813 2.813A9.065 9.065 0 0112 15a9.065 9.065 0 016.23.693L19.8 15.3" />
              </svg>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)]">
                Synthetic Hormone Replacement Therapy
              </h2>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Synthetic hormone replacement therapy uses hormones that have been chemically altered from their natural structure. These modifications were originally made to allow pharmaceutical companies to patent their formulations. While these hormones can still bind to hormone receptors and produce therapeutic effects, their altered structure means your body processes them differently than natural hormones.
              </p>
              <p>
                Synthetic HRT has been available for decades and has a long track record of use. It's widely available, thoroughly studied through large clinical trials, and typically covered by most insurance plans. The standardized dosing can be an advantage for some patients who prefer a conventional medical approach with extensive research backing. Common synthetic options include conjugated equine estrogens (derived from pregnant mare urine) and various progestins.
              </p>
              <p>
                However, the chemical differences between synthetic and natural hormones can lead to side effects that some patients find challenging. These may include bloating, mood swings, weight gain, breast tenderness, and headaches. The body may not metabolize synthetic hormones as efficiently, potentially leading to longer-lasting effects—both desired and undesired. Some studies have also raised concerns about increased risks for certain health conditions with long-term use of specific synthetic formulations.
              </p>
              <p>
                Synthetic HRT may be appropriate for individuals seeking a more conventional treatment approach, those whose insurance coverage is a primary concern, or patients with mild symptoms who respond well to standardized dosing. It's also an option for those who prefer the extensive research database available for these long-established medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-[var(--color-ink)] text-center mb-12">
              How to Decide: Decision Framework
            </h2>
            
            <div className="space-y-12">
              {/* Choose Bioidentical */}
              <div>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-6">
                  Choose Bioidentical HRT If You:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Prefer hormones that are molecularly identical to what your body naturally produces</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want a personalized, customized treatment plan based on your specific hormone levels</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Have experienced side effects with synthetic hormone therapy in the past</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Value the ability to adjust dosing precisely as your needs change over time</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want access to multiple delivery methods (creams, pellets, patches, injections)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are committed to ongoing monitoring and optimization of your therapy</span>
                  </li>
                </ul>
              </div>

              {/* Choose Synthetic */}
              <div>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-6">
                  Choose Synthetic HRT If You:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Prefer a conventional medical approach with decades of research backing</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Need insurance coverage to be a primary factor in your decision</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Have mild symptoms and are comfortable with standardized dosing</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want the convenience of picking up prescriptions at any pharmacy</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Have previously responded well to synthetic hormones without significant side effects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Important Note:</strong> These are general guidelines. The best choice for you depends on your individual health history, symptoms, goals, and preferences. A consultation with a hormone specialist can help you weigh these factors and make the most informed decision for your unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Is bioidentical hormone therapy safer than synthetic?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Research suggests that bioidentical hormones may have a more favorable safety profile, particularly when used in customized doses and delivered through non-oral routes. However, both options carry some risks, and safety depends on many factors including dosage, delivery method, duration of use, and individual health history. The molecular similarity of bioidentical hormones to your body's natural hormones often results in better recognition and metabolism, potentially reducing certain risks associated with synthetic formulations.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Will my insurance cover bioidentical hormone replacement?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Many insurance plans do cover bioidentical hormones, especially FDA-approved commercial formulations. Custom-compounded bioidentical hormones may have more variable coverage depending on your specific plan. We work with patients to maximize insurance benefits and offer transparent pricing for services not covered. Many patients find that even with out-of-pocket costs, the personalized approach and symptom relief make bioidentical HRT a worthwhile investment in their health and quality of life.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Can I switch from synthetic to bioidentical hormones (or vice versa)?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, transitioning between hormone therapy types is absolutely possible and relatively common. If you're experiencing side effects or not achieving desired results with your current therapy, switching may be beneficial. The transition should be done under medical supervision to ensure proper dosing adjustments and to monitor your response. We'll conduct comprehensive testing before the switch and create a transition plan that minimizes any disruption to your symptom management.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>How long will it take to notice a difference between the two options?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most patients begin noticing symptom improvements within 2-4 weeks with bioidentical hormones and 2-6 weeks with synthetic options. However, the difference in how you feel between the two may be more subtle and individualized. Some patients report feeling more "like themselves" with bioidentical hormones, experiencing fewer side effects like bloating or mood swings. Full optimization of either therapy typically takes 3-6 months as we fine-tune dosing based on your response and follow-up lab work.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What if I'm not sure which option is right for me?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                That's exactly what our consultation process is designed to address. During your initial appointment, we'll review your complete health history, current symptoms, lifestyle factors, and personal preferences. We'll also conduct comprehensive hormone testing to understand your specific needs. Based on this information, we'll discuss which option aligns best with your goals and circumstances. Many patients find that once they understand their unique situation and have expert guidance, the right choice becomes much clearer.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-white mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8 leading-relaxed">
            Schedule a consultation to determine which hormone replacement approach is right for you. Our team in Edmond, OK will provide personalized guidance based on your unique needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}