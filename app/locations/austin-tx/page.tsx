import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hormone Therapy Austin TX | Encompass Wellness and Aesthetics',
  description: 'Expert hormone & metabolic medicine serving Austin, TX. Telehealth and in-person appointments available. Schedule your consultation today.',
  openGraph: {
    title: 'Hormone Therapy Austin TX | Encompass Wellness and Aesthetics',
    description: 'Expert hormone & metabolic medicine serving Austin, TX. Telehealth and in-person appointments available.',
    url: 'https://encompassspa.com/locations/austin-tx',
    siteName: 'Encompass Wellness and Aesthetics',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AustinTXPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Austin, TX</span>
          </nav>
          
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Hormone Near Austin, TX
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95 max-w-3xl">
            Serving patients from Austin and surrounding TX communities. Expert hormone & metabolic medicine care is closer than you think.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule in Austin
          </Link>
        </div>
      </section>

      {/* Serving Austin Area */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Austin Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located in Edmond, OK, Encompass Wellness and Aesthetics proudly serves patients from Austin, TX and the surrounding communities. While the drive from Austin to our Edmond office is approximately 6 hours via I-35 N, we understand that distance can be a barrier to receiving specialized hormone and metabolic medicine care. That's why we offer comprehensive telehealth services to make expert care accessible to Austin residents without the commute.
            </p>
            
            <p>
              Patients from Austin choose Encompass Wellness and Aesthetics because of our specialized focus on hormone optimization and metabolic health. Our practice combines cutting-edge diagnostic testing with personalized treatment protocols that address the root causes of hormonal imbalances. Whether you prefer in-person consultations during periodic visits to our Edmond location or the convenience of telehealth appointments from the comfort of your Austin home, we're committed to delivering the highest standard of care tailored to your unique needs.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Available to Austin Patients */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Austin Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                Hormone Replacement Therapy
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Bioidentical hormone replacement for men and women experiencing symptoms of hormonal imbalance, including fatigue, weight gain, and mood changes.
              </p>
              <Link href="/services/hormone-replacement" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                Metabolic Optimization
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive metabolic testing and personalized protocols to optimize energy, weight management, and overall metabolic function.
              </p>
              <Link href="/services/metabolic-optimization" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Hormone Testing
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Advanced diagnostic testing to identify hormone imbalances and create data-driven treatment plans customized to your health goals.
              </p>
              <Link href="/services/hormone-testing" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth for Austin */}
      <section className="px-6 py-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <div className="mb-6">
            <svg className="w-16 h-16 text-[var(--color-accent)] mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed text-center">
            <p>
              We understand that traveling from Austin to Edmond may not always be convenient. That's why Encompass Wellness and Aesthetics offers secure, HIPAA-compliant telehealth appointments for Austin residents. Through virtual consultations, you can receive the same expert hormone and metabolic medicine care from the comfort of your home.
            </p>
            
            <p>
              Our telehealth services include initial consultations, follow-up appointments, treatment plan adjustments, and ongoing support. We work with most major insurance providers and can coordinate lab work at facilities convenient to you in the Austin area. Experience personalized, high-quality care without the travel time.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Schedule Telehealth Visit
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                How far is Encompass Wellness and Aesthetics from Austin, TX?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Edmond, OK office is approximately 380 miles from Austin, which is about a 6-hour drive via I-35 N. However, we offer comprehensive telehealth services that eliminate the need for travel while still providing you with expert hormone and metabolic medicine care.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                What are the directions from Austin to your Edmond office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Austin, take I-35 North through Waco, Fort Worth, and into Oklahoma. Continue on I-35 N to Edmond, OK. Take exit 141 for 2nd Street and follow signs to our office. For specific directions or to schedule a telehealth appointment instead, please contact our office at the time of booking.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth appointments for Austin residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We provide secure telehealth consultations for patients in Austin and throughout Texas. Our virtual appointments offer the same personalized care and expertise as in-person visits. We can coordinate lab work with facilities near you in Austin and manage your treatment plan remotely, making specialized hormone care accessible without the drive.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">
                Is parking available if I visit your Edmond location from Austin?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we offer convenient, complimentary parking for all patients who visit our Edmond office. Our facility is fully accessible with ample parking spaces near the entrance. If you're planning a trip from Austin, we recommend scheduling your appointment in advance and considering a combined visit if you have other business in the Oklahoma City metro area.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">
            Get Expert Care from Austin
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Whether you prefer telehealth or in-person visits, we're here to help you achieve optimal hormone balance and metabolic health.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-5 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}