import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weight Loss Medications vs. Metabolic Optimization | Encompass Wellness and Aesthetics',
  description: 'Compare weight loss medications and metabolic optimization for long-term success. Evidence-based comparison to help you choose the right treatment approach in Edmond, OK.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home › Resources › Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light leading-tight mb-6">
            Weight Loss Medications vs. Metabolic Optimization: Long-Term Success
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            An evidence-based comparison to help you make an informed decision about your metabolic health journey in Edmond, OK
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 bg-[var(--color-primary)] text-white p-6 font-semibold">
              <div className="text-left">Criteria</div>
              <div className="text-center">Weight Loss Medications</div>
              <div className="text-center">Metabolic Optimization</div>
            </div>
            
            {/* Effectiveness */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Effectiveness</div>
              <div className="text-center text-[var(--color-muted)]">10-15% weight loss in 6-12 months</div>
              <div className="text-center text-[var(--color-muted)]">8-20% sustained weight loss with improved metabolic markers</div>
            </div>
            
            {/* Side Effects */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Side Effects</div>
              <div className="text-center text-[var(--color-muted)]">Nausea, GI upset, potential rebound weight gain upon stopping</div>
              <div className="text-center text-[var(--color-muted)]">Minimal; may include initial fatigue during hormone adjustment</div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Cost</div>
              <div className="text-center text-[var(--color-muted)]">$300-1,200/month medication cost</div>
              <div className="text-center text-[var(--color-muted)]">Comprehensive program with long-term cost efficiency</div>
            </div>
            
            {/* Time Commitment */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="font-semibold text-[var(--color-ink)]">Time Commitment</div>
              <div className="text-center text-[var(--color-muted)]">Weekly injections, ongoing prescriptions</div>
              <div className="text-center text-[var(--color-muted)]">Initial intensive phase, then maintenance with periodic monitoring</div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="text-center text-[var(--color-muted)]">Rapid weight loss, appetite suppression needed</div>
              <div className="text-center text-[var(--color-muted)]">Root-cause approach, sustainable results, hormone imbalances</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Weight Loss Medications */}
          <div className="mb-16 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)] mb-6">
              Weight Loss Medications: What You Need to Know
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              GLP-1 receptor agonists (semaglutide, tirzepatide) have revolutionized medical weight loss. These medications work by mimicking hormones that regulate appetite and blood sugar, leading to significant weight reduction. Clinical trials show average weight loss of 10-15% of body weight over 6-12 months, with some patients experiencing even greater results.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              However, these medications address symptoms rather than underlying metabolic dysfunction. Many patients experience gastrointestinal side effects including nausea, vomiting, and diarrhea. More concerning is the rebound effect: studies indicate that 50-70% of weight loss is regained within one year of stopping the medication, often accompanied by worsening metabolic markers.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Weight loss medications are most effective for patients who need rapid weight reduction, struggle with appetite control, or have obesity-related comorbidities requiring immediate intervention. They work best when combined with lifestyle modifications, though many patients find long-term adherence challenging due to cost and side effects.
            </p>
          </div>

          {/* Metabolic Optimization */}
          <div className="animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)] mb-6">
              Metabolic Optimization: A Root-Cause Approach
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Metabolic optimization addresses the underlying hormonal and biochemical imbalances that make weight loss difficult and weight gain easy. Through comprehensive testing, we identify deficiencies in thyroid function, sex hormones, cortisol regulation, insulin sensitivity, and nutrient status. Treatment targets these specific imbalances using bioidentical hormone replacement, pharmaceutical-grade supplements, and evidence-based lifestyle interventions.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Unlike medications that suppress appetite, metabolic optimization restores your body's natural ability to regulate weight. Patients typically see 8-20% sustained weight loss, but more importantly, they experience improved energy, better sleep, enhanced mood, clearer thinking, and reduced inflammation. These improvements persist because we've corrected the underlying dysfunction rather than masking symptoms.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              This approach is ideal for patients who have struggled with diet and exercise alone, suspect hormonal issues, want sustainable results without ongoing medication dependence, or have experienced weight regain after previous interventions. The typical patient is someone in their 30s-60s experiencing metabolic decline, though younger and older patients can also benefit significantly from optimization.
            </p>
          </div>

        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Approach Is Right for You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Weight Loss Medications */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Choose Weight Loss Medications if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need rapid weight loss for a medical condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Appetite suppression is your primary need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're comfortable with ongoing medication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You can manage potential GI side effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Budget allows for $300-1,200/month</span>
                  </li>
                </ul>
              </div>
              
              {/* Metabolic Optimization */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Choose Metabolic Optimization if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want to address root causes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Sustainable, long-term results are your priority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You suspect hormonal imbalances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You've regained weight after previous diets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want comprehensive health improvements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-lg text-[var(--color-ink)] font-semibold mb-2">
                Not Sure Which Path to Take?
              </p>
              <p className="text-[var(--color-muted)]">
                Many patients benefit from a hybrid approach. Our team can create a personalized plan that may include both strategies, using medications strategically while building long-term metabolic health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-light)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can I combine weight loss medications with metabolic optimization?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, and many patients achieve excellent results with this hybrid approach. Weight loss medications can provide initial momentum while we work on correcting underlying hormonal imbalances. As your metabolism improves, we can often reduce or eliminate medication dependence while maintaining results. This strategy offers both rapid results and long-term sustainability.
              </div>
            </details>

            <details className="group bg-[var(--color-light)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does it take to see results with metabolic optimization?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most patients notice improvements in energy and sleep within 2-4 weeks. Visible weight loss typically begins at 4-6 weeks and continues progressively. Full metabolic restoration takes 3-6 months, but unlike medications, results compound over time and persist long-term. The initial phase requires more intensive monitoring, transitioning to maintenance every 3-6 months.
              </div>
            </details>

            <details className="group bg-[var(--color-light)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What happens if I stop taking weight loss medications?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Clinical data shows that 50-70% of patients regain most or all of their weight within 12 months of stopping GLP-1 medications. This occurs because the medication suppressed appetite without addressing underlying metabolic dysfunction. When the suppression ends, the body returns to its previous metabolic state. This is why we recommend combining medication with metabolic optimization for patients seeking long-term success.
              </div>
            </details>

            <details className="group bg-[var(--color-light)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is metabolic optimization covered by insurance?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Coverage varies by insurance plan and individual components of treatment. Diagnostic testing is often covered, while hormone replacement and pharmaceutical-grade supplements may not be. We provide detailed documentation for insurance submission and HSA/FSA reimbursement. Many patients find the long-term cost of metabolic optimization comparable to or less than ongoing weight loss medication expenses, with superior sustained results.
              </div>
            </details>

            <details className="group bg-[var(--color-light)] rounded-xl overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Who is a good candidate for metabolic optimization in Edmond, OK?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Ideal candidates include adults experiencing unexplained weight gain, difficulty losing weight despite diet and exercise, persistent fatigue, poor sleep, brain fog, mood changes, or declining libido. Those with diagnosed hormone imbalances (thyroid, testosterone, estrogen, cortisol), previous weight regain after diets or medications, metabolic syndrome, or insulin resistance are particularly good candidates. Our comprehensive evaluation determines your specific needs and creates a personalized treatment plan.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
            Schedule a consultation at Encompass Wellness and Aesthetics in Edmond, OK to determine the best approach for your metabolic health goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-up"
          >
            Schedule Your Consultation
          </a>
          <p className="text-white/80 mt-6 animate-fade-up">
            Serving Edmond, OK and surrounding communities
          </p>
        </div>
      </section>

    </main>
  )
}