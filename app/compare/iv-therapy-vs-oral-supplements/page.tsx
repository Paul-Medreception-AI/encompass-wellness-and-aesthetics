import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/compare/iv-therapy-vs-oral-supplements' },
  title: 'IV Therapy vs. Oral Supplements: Which is More Effective?',
  description: 'Compare IV therapy and oral supplements for effectiveness, absorption, cost, and results. Expert analysis to help you choose the right option in Edmond, OK.',
}

export default function IVTherapyVsOralSupplementsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight">
            IV Therapy vs. Oral Supplements:<br />Which is More Effective?
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            An evidence-based comparison to help you make an informed decision about nutrient delivery methods
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl text-center mb-12 text-[var(--color-ink)]">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">IV Therapy</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">Oral Supplements</div>
            </div>

            {/* Absorption Rate */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Absorption Rate</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <span className="text-[var(--color-accent)] font-bold">90-100%</span> — nutrients enter bloodstream directly
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <span className="font-semibold">20-50%</span> — depends on digestion, metabolism
              </div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Rapid, immediate results; higher bioavailability
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Gradual results; effectiveness varies by individual
              </div>
            </div>

            {/* Onset of Results */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Onset of Results</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <span className="text-[var(--color-accent)] font-bold">Immediate to 24 hours</span>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Several days to weeks
              </div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Minimal; possible minor bruising at injection site
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Possible digestive upset, nausea, bloating
              </div>
            </div>

            {/* Cost per Treatment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost per Treatment</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Higher upfront cost; fewer sessions needed
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Lower daily cost; ongoing purchase required
              </div>
            </div>

            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                30-60 minutes per session; monthly or as-needed
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Daily dosing; requires consistent routine
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Severe deficiencies, athletes, busy professionals, rapid recovery
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                Maintenance, mild deficiencies, budget-conscious individuals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up mb-16">
            <h2 className="font-serif text-4xl mb-6 text-[var(--color-ink)]">
              IV Therapy: Direct Nutrient Delivery
            </h2>
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  IV therapy delivers vitamins, minerals, and other nutrients directly into your bloodstream, bypassing the digestive system entirely. This method ensures near-complete absorption—typically 90-100%—compared to the 20-50% absorption rate of oral supplements. For patients with severe nutrient deficiencies, malabsorption issues, or those seeking rapid results, IV therapy offers an unmatched advantage.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  The typical IV therapy session lasts 30-60 minutes in a comfortable clinical setting. Patients often report feeling effects within hours—increased energy, improved mental clarity, and enhanced well-being. Because nutrients reach cells immediately, the body can utilize them for critical functions like immune support, cellular repair, and metabolic processes without delay.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                  IV therapy is particularly effective for athletes recovering from intense training, busy professionals combating chronic fatigue, individuals with digestive disorders that impair nutrient absorption, and anyone seeking immune support during illness. The controlled, clinical environment ensures precise dosing tailored to individual needs, maximizing therapeutic benefit while minimizing side effects.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-serif text-4xl mb-6 text-[var(--color-ink)]">
              Oral Supplements: Traditional Approach
            </h2>
            <div className="flex items-start gap-4">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <div>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  Oral supplements remain the most accessible and widely-used method of nutrient supplementation. They offer convenience, lower upfront costs, and the ability to maintain a consistent daily routine from home. For individuals with mild deficiencies or those focused on long-term maintenance rather than acute intervention, oral supplements can be an effective choice.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  However, effectiveness depends heavily on individual factors. The digestive system must break down supplements, absorb nutrients through the intestinal wall, and process them through the liver before they reach systemic circulation. This journey significantly reduces bioavailability—most oral supplements deliver only 20-50% of their stated nutrient content to cells. Factors like stomach acid, enzyme production, gut health, and timing of consumption all influence absorption rates.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                  Oral supplements work best for individuals with healthy digestive systems, those seeking preventive maintenance rather than therapeutic intervention, and patients who can commit to consistent daily dosing over weeks or months. They're ideal for budget-conscious individuals and those uncomfortable with needles or clinical settings. Quality matters significantly—pharmaceutical-grade supplements with proven bioavailability outperform generic formulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-4xl text-center mb-12 text-[var(--color-ink)]">
              How to Decide Which Option is Right for You
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--color-accent)]">
                  Choose IV Therapy If You:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Need rapid results for severe deficiency or acute symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have digestive issues that impair nutrient absorption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are an athlete seeking peak performance and recovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want maximum bioavailability and immediate effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer fewer, more effective treatments over daily routines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Experience chronic fatigue or immune challenges</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">
                  Choose Oral Supplements If You:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have mild deficiencies or seek preventive maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer the convenience of at-home daily dosing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are working within a tighter budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have a healthy digestive system with good absorption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Can commit to consistent daily routines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are comfortable with gradual, long-term results</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                <strong>Important Note:</strong> These options aren't mutually exclusive. Many patients benefit from an integrated approach—using IV therapy for initial correction of deficiencies or periodic boosts, while maintaining baseline health with quality oral supplements. A personalized consultation can help determine the optimal strategy for your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl text-center mb-12 text-[var(--color-ink)]">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Is IV therapy safe compared to oral supplements?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Yes, when administered by qualified healthcare professionals in a clinical setting, IV therapy is extremely safe. At Encompass Wellness and Aesthetics in Edmond, OK, all IV treatments are overseen by medical professionals who assess your health history, monitor vital signs, and use sterile techniques. Side effects are minimal—typically limited to minor bruising at the injection site. Oral supplements, while generally safe, can sometimes cause digestive upset or interact with medications.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How much does IV therapy cost compared to oral supplements?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                IV therapy typically costs $100-$300 per session depending on the nutrient formula, while quality oral supplements may cost $30-$100 per month. However, cost-per-result tells a different story. Because IV therapy delivers 90-100% bioavailability with immediate effects, you may need only one session per month versus daily oral supplementation with partial absorption. Many patients find that the superior effectiveness and time savings of IV therapy justify the investment, especially when addressing specific health goals.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How quickly will I feel results from IV therapy vs. oral supplements?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Most patients feel noticeable effects from IV therapy within hours to 24 hours—increased energy, mental clarity, and improved well-being are commonly reported. Because nutrients bypass digestion and enter the bloodstream directly, your body can use them immediately. Oral supplements, by contrast, typically require consistent daily use for several days to weeks before results become apparent, as therapeutic levels must gradually build up in your system through repeated dosing.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can I combine IV therapy with my current oral supplements?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                Absolutely. Many patients benefit from an integrated approach—using IV therapy for periodic intensive nutrient delivery (monthly or quarterly) while maintaining baseline health with quality oral supplements. This strategy provides both immediate therapeutic benefits and ongoing preventive support. During your consultation at Encompass Wellness and Aesthetics, we'll review your current supplement regimen to ensure compatibility and optimize your overall nutrient protocol without risk of excess or interaction.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Who should avoid IV therapy and stick with oral supplements?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
                IV therapy may not be appropriate for individuals with certain heart or kidney conditions, those with severe needle phobia, or patients with specific allergies to IV formula ingredients. Pregnant or breastfeeding women should consult their obstetrician before IV therapy. For these individuals, oral supplements may be the safer choice. However, a medical consultation can often identify modified IV protocols that remain safe and effective. We always conduct thorough health screenings before recommending any treatment.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white animate-fade-up">
          <h2 className="font-serif text-4xl mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a consultation with our team in Edmond, OK to determine whether IV therapy, oral supplements, or a combination approach is right for your health goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}