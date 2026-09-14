import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hormone Therapy Round Rock TX | Encompass Wellness and Aesthetics',
  description: 'Expert hormone & metabolic medicine serving Round Rock, TX. Comprehensive hormone therapy, weight management, and wellness services. Telehealth available.',
  openGraph: {
    title: 'Hormone Therapy Round Rock TX | Encompass Wellness and Aesthetics',
    description: 'Expert hormone & metabolic medicine serving Round Rock, TX. Comprehensive hormone therapy, weight management, and wellness services. Telehealth available.',
    url: 'https://encompassspa.com/locations/round-rock-tx',
    siteName: 'Encompass Wellness and Aesthetics',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RoundRockTXPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Round Rock, TX</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Hormone Near Round Rock, TX
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
            Serving patients from Round Rock and surrounding TX communities. Expert hormone & metabolic medicine care is closer than you think.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Schedule in Round Rock
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the Round Rock Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Located in Edmond, OK, Encompass Wellness and Aesthetics is committed to serving patients throughout the greater Round Rock, TX area. While the journey from Round Rock requires planning, many patients find that our specialized expertise in hormone therapy, metabolic medicine, and comprehensive wellness solutions makes the trip worthwhile for transformative care you won't find elsewhere.
            </p>
            <p>
              We understand that distance matters, which is why we've designed our practice to maximize your time with extended consultation appointments, coordinated treatment plans, and robust telehealth options for follow-up care. Patients from Round Rock, Georgetown, Cedar Park, Pflugerville, and surrounding Central Texas communities choose Encompass for our personalized approach, advanced hormone optimization protocols, and commitment to long-term metabolic health that goes far beyond what typical local clinics offer.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex flex-col items-center justify-center gap-4 border border-[var(--color-border)]">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-[var(--color-muted)] text-lg">Edmond, OK → Round Rock, TX</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to Round Rock Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462l-1.8 1.8m-4.402-7.954V20M5 14.5V20" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Hormone Replacement Therapy
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Bioidentical hormone optimization for men and women. Comprehensive testing, personalized protocols, and ongoing monitoring for optimal results.
              </p>
              <Link href="/services/hormone-therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Metabolic Optimization
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Advanced metabolic testing and treatment protocols. Weight management, insulin sensitivity, and metabolic health restoration.
              </p>
              <Link href="/services/metabolic-medicine" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Wellness & Longevity
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Comprehensive wellness programs focusing on longevity, vitality, and preventive care. Peptide therapy, nutritional optimization, and lifestyle medicine.
              </p>
              <Link href="/services/wellness" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center gap-2">
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
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <div className="flex items-start gap-6 mb-8">
            <svg className="w-12 h-12 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-4">
                Can't Make the Drive? We Offer Telehealth
              </h2>
              <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed mb-6">
                For Round Rock residents, we understand that the distance to Edmond can be challenging. That's why we offer comprehensive telehealth services for follow-up consultations, treatment adjustments, and ongoing care management.
              </p>
              <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed">
                After your initial in-person consultation and diagnostic testing, many appointments can be conducted virtually from the comfort of your Round Rock home. We accept most major insurance plans for telehealth visits and provide flexible scheduling to accommodate your lifestyle. Our secure virtual platform ensures the same quality care and personalized attention you'd receive in our office.
              </p>
            </div>
          </div>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            Ask About Telehealth
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Round Rock Patient Information
          </h2>
          
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                How far is Encompass from Round Rock, TX?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Edmond, OK office is approximately 370 miles from Round Rock, TX—about a 5.5 hour drive via I-35 North and I-44. While we primarily serve the Oklahoma City metro area, we welcome patients from Round Rock who are seeking specialized hormone and metabolic medicine expertise. Many patients find that scheduling comprehensive appointments reduces travel frequency, and our telehealth options minimize the need for in-person visits after initial consultations.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                What are the best directions from Round Rock to your office?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                From Round Rock, take I-35 North through the Dallas-Fort Worth area, then merge onto I-44 North toward Oklahoma City. Continue to Edmond, where our office is conveniently located. We recommend allowing extra time for your first visit to complete comprehensive intake paperwork and diagnostic assessments. Detailed directions and parking information will be provided when you schedule your appointment.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Round Rock patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! Telehealth is an excellent option for Round Rock residents. While your initial comprehensive evaluation and diagnostic testing typically require an in-person visit, we can conduct many follow-up appointments, treatment adjustments, and progress monitoring sessions virtually. This significantly reduces travel requirements while maintaining the quality and continuity of your care. Our team will work with you to create a treatment plan that balances in-person and virtual visits based on your specific needs.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                Is parking available for out-of-town patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we provide convenient, complimentary parking directly adjacent to our office for all patients, including those traveling from Round Rock and other distant locations. Our facility is easily accessible with ample parking, and we're happy to provide recommendations for nearby accommodations if you prefer to split your journey or stay overnight for early morning appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Get Expert Care from Round Rock
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Experience the difference of specialized hormone and metabolic medicine. Schedule your consultation today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}