import Link from 'next/link'

export const metadata = {
  title: 'New Patients | Encompass Wellness',
  description: 'What to expect at your first visit to Encompass Wellness and Aesthetics in Edmond, OK — intake, testing and building your personalized treatment plan.',
  alternates: { canonical: '/new-patients' },
}

export default function NewPatientsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light mb-6">
            New Patients
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to know before your first visit
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            Your First Visit
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-['Cormorant_Garamond',serif] text-7xl font-light text-[var(--color-accent)] mb-4">
                01
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Schedule
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your appointment online through our contact form or call our office directly. Our team will help you choose the best time for your comprehensive consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-['Cormorant_Garamond',serif] text-7xl font-light text-[var(--color-accent)] mb-4">
                02
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Complete Paperwork
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Please arrive 15 minutes early to complete any remaining paperwork. You can also request forms ahead of time to fill out at home for a faster check-in.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-['Cormorant_Garamond',serif] text-7xl font-light text-[var(--color-accent)] mb-4">
                03
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Initial Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your comprehensive assessment will take 60-90 minutes. We'll review your health history, discuss your concerns, and perform necessary diagnostic testing to understand your complete health picture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="font-['Cormorant_Garamond',serif] text-7xl font-light text-[var(--color-accent)] mb-4">
                04
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Together, we'll create a personalized care plan addressing the root causes of your health concerns. Your plan will be tailored to your unique needs and health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-center mb-12 text-[var(--color-ink)]">
            What to Bring
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  Photo ID
                </h3>
                <p className="text-[var(--color-muted)]">
                  Valid government-issued identification for verification purposes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  Insurance Card
                </h3>
                <p className="text-[var(--color-muted)]">
                  Current insurance information to verify coverage and benefits.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  Medication List
                </h3>
                <p className="text-[var(--color-muted)]">
                  Complete list of current medications, supplements, and dosages.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  Prior Records
                </h3>
                <p className="text-[var(--color-muted)]">
                  Recent lab results, imaging, or medical records from other providers if available.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  Emergency Contact
                </h3>
                <p className="text-[var(--color-muted)]">
                  Name and phone number of someone we can reach in case of emergency.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-up">
              <div className="flex-shrink-0">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                  Questions & Concerns
                </h3>
                <p className="text-[var(--color-muted)]">
                  Written list of your symptoms, health goals, and any questions you'd like to discuss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl mb-6 text-[var(--color-ink)]">
              Patient Forms
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Forms are available at our office or can be completed at your first appointment. Arriving early ensures adequate time to complete all necessary paperwork.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-ink)]">Patient Intake Form:</span> Comprehensive health history and current symptoms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-ink)]">Consent for Treatment:</span> Authorization for care and procedures
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-ink)]">HIPAA Authorization:</span> Privacy practices and health information use
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                <p className="text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-ink)]">Financial Agreement:</span> Payment policies and insurance information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-center mb-12 text-[var(--color-ink)]">
            Telehealth Visits
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-up">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                How Telehealth Works
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                We offer secure video consultations for follow-up appointments, treatment plan reviews, and certain types of evaluations. Telehealth visits provide convenient access to care from the comfort of your home.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                After scheduling your telehealth appointment, you'll receive a secure link to join your video session at the scheduled time.
              </p>
            </div>

            <div className="animate-fade-up">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                What You'll Need
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-muted)]">
                    A computer, tablet, or smartphone with camera and microphone
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-muted)]">
                    Reliable internet connection for smooth video quality
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-muted)]">
                    A private, quiet space for your confidential consultation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0"></div>
                  <p className="text-[var(--color-muted)]">
                    Your medication list and any questions prepared in advance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl text-center mb-12 text-[var(--color-ink)]">
            Office Policies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Cancellations
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We require 24-hour notice for appointment cancellations or rescheduling. This allows us to offer your time slot to other patients in need of care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Late Arrivals
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                If you arrive more than 15 minutes late, we may need to reschedule your appointment to ensure adequate time for your care and respect for other patients' scheduled times.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <div className="mb-4">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                No-Show Policy
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Missed appointments without prior notice may result in a fee. We understand emergencies happen—please contact us as soon as possible if you cannot make your appointment.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-4 text-[var(--color-ink)]">
              Payment & Insurance
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Payment is due at the time of service. We accept most major insurance plans, as well as cash, checks, and credit cards. Please contact our office to verify your insurance coverage before your first visit.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For patients without insurance or with high-deductible plans, we offer flexible payment options. Our team is happy to discuss financial arrangements that work for your situation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6 text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Our team is here to answer any questions and help you schedule your first appointment. Contact us today to get started.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}