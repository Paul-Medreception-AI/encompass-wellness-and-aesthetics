import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hormone Therapy Cedar Park TX | Encompass Wellness and Aesthetics',
  description: 'Expert hormone and metabolic medicine serving Cedar Park, TX. Telehealth available. Schedule your consultation with Encompass Wellness and Aesthetics today.',
  openGraph: {
    title: 'Hormone Therapy Cedar Park TX | Encompass Wellness and Aesthetics',
    description: 'Expert hormone and metabolic medicine serving Cedar Park, TX. Telehealth available.',
    url: 'https://encompassspa.com/locations/cedar-park-tx',
    siteName: 'Encompass Wellness and Aesthetics',
    locale: 'en_US',
    type: 'website',
  },
}

export default function CedarParkTXPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Cedar Park, TX</span>
          </nav>
          
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 animate-fade-up" style={{fontFamily: 'Cormorant'}}>
            Hormone Near Cedar Park, TX
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl animate-fade-up font-light leading-relaxed">
            Serving patients from Cedar Park and surrounding TX communities. Expert hormone and metabolic medicine care is closer than you think.
          </p>
          
          <div className="animate-fade-up">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Schedule in Cedar Park
            </Link>
          </div>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-10 text-center animate-fade-up" style={{fontFamily: 'Cormorant'}}>
            Serving the Cedar Park Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed animate-fade-up">
            <p>
              While our primary practice is located in Edmond, OK, we proudly serve patients from Cedar Park, TX and the surrounding communities. Many Cedar Park residents choose Encompass Wellness and Aesthetics for our specialized expertise in hormone and metabolic medicine, finding that the personalized care and advanced treatment options are well worth the commute. Our comprehensive approach to hormonal health and metabolic optimization sets us apart from other providers in the region.
            </p>
            
            <p>
              For Cedar Park patients who prefer not to travel, we offer convenient telehealth consultations that bring our expert care directly to you. Whether you choose in-person visits at our Edmond location or virtual appointments from the comfort of your Cedar Park home, you'll receive the same exceptional level of care, thorough evaluation, and customized treatment plans that have made us a trusted choice for hormone therapy and metabolic medicine throughout Texas and Oklahoma.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center gap-4 animate-fade-up border border-[var(--color-border)]">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-[var(--color-muted)] text-lg">Cedar Park, TX to Edmond, OK</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up" style={{fontFamily: 'Cormorant'}}>
            Services Available to Cedar Park Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant'}}>
                Bioidentical Hormone Therapy
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Customized hormone replacement therapy using bioidentical hormones to restore balance, improve energy, and enhance overall wellbeing for Cedar Park patients.
              </p>
              <Link href="/services/hormone-therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant'}}>
                Metabolic Optimization
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Comprehensive metabolic assessment and personalized treatment plans to support weight management, insulin sensitivity, and metabolic health.
              </p>
              <Link href="/services/metabolic-medicine" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant'}}>
                Thyroid Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Expert diagnosis and treatment of thyroid disorders including hypothyroidism, hyperthyroidism, and thyroid hormone optimization.
              </p>
              <Link href="/services/thyroid-treatment" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <div className="text-center mb-8">
              <svg className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'Cormorant'}}>
                Can't Make the Drive? We Offer Telehealth
              </h2>
            </div>
            
            <div className="space-y-4 text-[var(--color-ink)]/80 leading-relaxed">
              <p>
                For Cedar Park residents who prefer the convenience of virtual care, Encompass Wellness and Aesthetics offers comprehensive telehealth consultations. Through secure video appointments, you can receive expert hormone and metabolic medicine care without the need to travel to our Edmond location.
              </p>
              <p>
                Our telehealth services include initial consultations, follow-up appointments, treatment plan reviews, and ongoing care management. We accept most major insurance plans for telehealth visits, and many Cedar Park patients find virtual appointments fit seamlessly into their busy schedules. Lab work can be completed at facilities near your Cedar Park home, with results reviewed during your telehealth appointment.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                Schedule Telehealth Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center animate-fade-up" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant'}}>
                How far is Encompass Wellness and Aesthetics from Cedar Park?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our practice in Edmond, OK is approximately 400 miles from Cedar Park, TX, which is about a 6-hour drive. While this may seem significant, many Cedar Park patients choose us for our specialized expertise in hormone and metabolic medicine. We also offer telehealth consultations as a convenient alternative to in-person visits.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant'}}>
                What are the best directions from Cedar Park to your office?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                From Cedar Park, take US-183 North to I-35 North toward Oklahoma City. Continue on I-35 through Oklahoma, then take I-44 West to Edmond. Our office is conveniently located just off the highway in Edmond. We recommend using GPS navigation for real-time traffic updates and the most efficient route. Detailed directions and parking information will be provided when you schedule your appointment.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant'}}>
                Do you offer telehealth for Cedar Park patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We offer comprehensive telehealth consultations for Cedar Park residents. Virtual appointments allow you to receive expert hormone and metabolic medicine care from the comfort of your home. Most insurance plans cover telehealth visits, and lab work can be completed at facilities near Cedar Park. Contact us to schedule your telehealth consultation.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl font-light text-[var(--color-ink)] mb-3" style={{fontFamily: 'Cormorant'}}>
                Is parking available for patients traveling from Cedar Park?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we offer ample free parking directly adjacent to our Edmond office, making it convenient for patients traveling from Cedar Park and other distant locations. Our facility is easily accessible with ground-level entry, and our staff is happy to assist with any accessibility needs you may have after your journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 animate-fade-up" style={{fontFamily: 'Cormorant'}}>
            Get Expert Care from Cedar Park
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto animate-fade-up leading-relaxed">
            Whether you prefer in-person visits or convenient telehealth appointments, we're here to serve Cedar Park patients with exceptional hormone and metabolic medicine care.
          </p>
          <div className="animate-fade-up">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}