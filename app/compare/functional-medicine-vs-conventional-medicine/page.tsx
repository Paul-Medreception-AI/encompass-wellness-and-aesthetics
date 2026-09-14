import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Functional Medicine vs. Conventional Medicine: Understanding the Difference | Encompass Wellness and Aesthetics',
  description: 'Compare functional medicine and conventional medicine approaches. Learn which treatment path is right for your health goals in Edmond, OK.',
}

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </div>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Functional Medicine vs. Conventional Medicine: Understanding the Difference
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Making informed decisions about your healthcare approach in Edmond, OK
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Criteria</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">Functional Medicine</div>
              <div className="p-6 font-semibold border-l border-white border-opacity-20">Conventional Medicine</div>
            </div>

            {/* Approach */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Approach</div>
              <div className="p-6 border-l border-[var(--color-border)]">Root cause analysis, whole-body systems thinking</div>
              <div className="p-6 border-l border-[var(--color-border)]">Symptom management, disease-specific protocols</div>
            </div>

            {/* Treatment Focus */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Treatment Focus</div>
              <div className="p-6 border-l border-[var(--color-border)]">Lifestyle, nutrition, hormones, metabolism optimization</div>
              <div className="p-6 border-l border-[var(--color-border)]">Pharmaceuticals, surgery, acute intervention</div>
            </div>

            {/* Appointment Length */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Appointment Length</div>
              <div className="p-6 border-l border-[var(--color-border)]">60-90 minutes initial, 30-45 minute follow-ups</div>
              <div className="p-6 border-l border-[var(--color-border)]">15-20 minute appointments</div>
            </div>

            {/* Testing */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Testing</div>
              <div className="p-6 border-l border-[var(--color-border)]">Comprehensive labs, hormone panels, metabolic markers, nutrient testing</div>
              <div className="p-6 border-l border-[var(--color-border)]">Standard labs focused on diagnosis confirmation</div>
            </div>

            {/* Time to Results */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Time to Results</div>
              <div className="p-6 border-l border-[var(--color-border)]">3-6 months for sustainable change</div>
              <div className="p-6 border-l border-[var(--color-border)]">Quick symptom relief, ongoing management</div>
            </div>

            {/* Cost Structure */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-light)] bg-opacity-50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost Structure</div>
              <div className="p-6 border-l border-[var(--color-border)]">Higher upfront, lower long-term due to prevention</div>
              <div className="p-6 border-l border-[var(--color-border)]">Insurance-covered visits, ongoing medication costs</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Chronic conditions, hormone imbalances, preventive health, metabolic optimization</div>
              <div className="p-6 border-l border-[var(--color-border)]">Acute illness, emergency care, surgical needs, infectious disease</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Functional Medicine */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Understanding Functional Medicine
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              Functional medicine is a personalized, systems-oriented approach that identifies and addresses the root causes of disease. Rather than simply treating symptoms, functional medicine practitioners look at the complex web of interactions in a patient's history, physiology, and lifestyle that can lead to illness. In Edmond, OK, this approach has helped countless patients resolve chronic conditions that conventional medicine couldn't fully address.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              The functional medicine model emphasizes the therapeutic relationship between practitioner and patient, dedicating time to listening to the patient's story and looking at interactions among genetic, environmental, and lifestyle factors that influence long-term health and complex chronic disease. This approach is particularly effective for hormone imbalances, metabolic dysfunction, autoimmune conditions, chronic fatigue, and digestive issues.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Evidence for functional medicine comes from clinical outcomes, patient satisfaction metrics, and a growing body of research on lifestyle interventions, nutritional biochemistry, and systems biology. Patients typically see improvements not just in their primary complaint but in overall vitality, energy levels, sleep quality, and disease prevention markers.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h3 className="text-3xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Typical Functional Medicine Patient Profile
            </h3>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Functional medicine patients often arrive after years of conventional treatment without full resolution. They may have multiple diagnoses, take several medications, yet still don't feel well. Common scenarios include:
            </p>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Women with hormone imbalances causing weight gain, fatigue, mood changes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Men experiencing low testosterone, decreased vitality, metabolic syndrome</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Individuals with autoimmune conditions seeking root cause solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Patients wanting proactive, preventive healthcare optimization</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-up">
            <h3 className="text-3xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What to Expect from Functional Medicine Treatment
            </h3>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Your first appointment will be comprehensive—60 to 90 minutes dedicated to understanding your health history, current symptoms, lifestyle, diet, stress levels, sleep patterns, and health goals. Expect detailed questioning about factors you may not have discussed with previous providers.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Testing is thorough and personalized, often including advanced hormone panels, comprehensive metabolic assessments, nutrient deficiency screening, and inflammatory markers. Treatment plans are highly individualized and may include bioidentical hormone therapy, targeted supplementation, nutrition protocols, stress management strategies, and lifestyle modifications. Follow-up appointments monitor progress and adjust protocols as your body responds and heals.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive - Conventional Medicine */}
      <section className="bg-[var(--color-light)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="text-4xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Understanding Conventional Medicine
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              Conventional medicine, also known as allopathic medicine, is the dominant healthcare system in the United States. It excels at acute care, emergency medicine, surgery, and infectious disease treatment. The model is evidence-based, protocol-driven, and focused on diagnosing specific diseases and treating them with pharmaceuticals or surgical interventions.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              This approach has dramatically improved outcomes for trauma, acute infections, surgical conditions, and many life-threatening emergencies. The system benefits from extensive research funding, standardized treatment protocols, widespread insurance coverage, and a large network of specialists. For acute needs and emergency situations, conventional medicine is unparalleled in its effectiveness.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              However, conventional medicine's focus on disease management rather than health optimization can leave gaps in addressing chronic, complex conditions—particularly those involving multiple body systems, lifestyle factors, and subtle hormonal or metabolic imbalances. Appointment times are often limited, and the focus is typically on the presenting symptom rather than underlying causes.
            </p>
          </div>

          <div className="mb-16 animate-fade-up">
            <h3 className="text-3xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Typical Conventional Medicine Patient Profile
            </h3>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Conventional medicine serves the broadest patient base and is appropriate for many health scenarios:
            </p>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acute illness requiring immediate diagnosis and treatment</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Emergency medical conditions requiring hospitalization or surgery</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Well-managed chronic conditions with established medication protocols</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Patients prioritizing insurance coverage and standardized care</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-up">
            <h3 className="text-3xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What to Expect from Conventional Medicine Treatment
            </h3>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Appointments typically last 15-20 minutes and focus on the chief complaint. Your doctor will take a brief history, perform a focused examination, order diagnostic tests if needed, and prescribe medications or referrals to specialists. The process is efficient and protocol-driven.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Treatment usually involves pharmaceutical management of symptoms or surgical intervention when appropriate. Follow-up focuses on medication effectiveness, side effect management, and disease progression monitoring. The system works well for straightforward conditions but may struggle with complex, multi-system chronic issues that don't fit established diagnostic criteria.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-8 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              How to Decide Which Approach Is Right for You
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Choose Functional Medicine If You:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Have chronic symptoms without clear diagnosis or inadequate symptom relief from conventional treatment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Experience hormone imbalances, metabolic issues, or autoimmune conditions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Want to address root causes rather than just manage symptoms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Prefer lifestyle and natural interventions over pharmaceuticals when possible</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Are willing to invest time and resources in preventive, proactive healthcare</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Want a collaborative, personalized relationship with your healthcare provider</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Seek optimization of health and longevity, not just absence of disease</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Choose Conventional Medicine If You:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Have an acute illness, injury, or emergency medical situation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Need surgery, hospitalization, or specialty procedures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Have a well-controlled chronic condition with an established treatment plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Require insurance coverage for most or all healthcare costs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Prefer quick appointments and standardized treatment protocols</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-muted)]">Are satisfied with symptom management rather than root cause resolution</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-[var(--color-border)]">
              <p className="text-lg text-[var(--color-ink)] font-semibold mb-2">The Best Approach May Be Both</p>
              <p className="text-[var(--color-muted)]">
                Many patients benefit from an integrative approach—using conventional medicine for acute needs and specialized care while employing functional medicine for chronic condition management, prevention, and optimization. The two systems can work together to provide comprehensive healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover functional medicine?
                <span className="float-right text-[var(--color-accent)] group-open:rotate-180 transition-transform inline-block">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Insurance coverage for functional medicine varies. Some services may be partially covered, particularly lab work and certain procedures. However, many functional medicine practices operate on a fee-for-service model due to the extended appointment times and comprehensive approach that don't fit traditional insurance billing structures. We recommend contacting your insurance provider to understand your specific coverage and can provide superbills for potential reimbursement.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can I see a functional medicine doctor and keep my regular doctor?
                <span className="float-right text-[var(--color-accent)] group-open:rotate-180 transition-transform inline-block">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely. Many patients maintain their conventional medicine relationships for acute care, prescriptions, and specialist referrals while working with a functional medicine provider for chronic condition management, hormone optimization, and preventive care. This integrative approach often provides the best of both worlds. We encourage open communication between all your healthcare providers.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                How long does functional medicine treatment take to show results?
                <span className="float-right text-[var(--color-accent)] group-open:rotate-180 transition-transform inline-block">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Initial improvements are often noticed within 4-8 weeks, particularly in energy, sleep, and mental clarity. More significant changes in hormone balance, weight, inflammation markers, and chronic symptoms typically occur over 3-6 months as the body heals and rebalances. Functional medicine focuses on creating lasting, sustainable change rather than quick symptom suppression, so patience and commitment to the process are important.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Is functional medicine scientifically proven?
                <span className="float-right text-[var(--color-accent)] group-open:rotate-180 transition-transform inline-block">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Functional medicine is based on scientific research in biochemistry, physiology, nutrition, and systems biology. While the integrative approach itself may not have the same extensive research funding as pharmaceutical interventions, the individual components—nutritional interventions, hormone optimization, stress reduction, sleep improvement, exercise protocols—all have substantial scientific evidence supporting their effectiveness. Functional medicine applies this research in a personalized, systems-based framework.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                What conditions respond best to functional medicine in Edmond, OK?
                <span className="float-right text-[var(--color-accent)] group-open:rotate-180 transition-transform inline-block">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Functional medicine excels at treating hormone imbalances (thyroid, menopause, andropause, PCOS), metabolic syndrome, type 2 diabetes, chronic fatigue, autoimmune conditions, digestive disorders, chronic inflammation, weight resistance, and complex multi-system issues that haven't responded well to conventional treatment. At Encompass Wellness and Aesthetics, we specialize in hormone and metabolic medicine, helping Edmond residents optimize their health and reverse chronic conditions through personalized, root-cause approaches.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Discuss Your Healthcare Options?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation to explore whether functional medicine is right for your health goals in Edmond, OK.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </>
  )
}