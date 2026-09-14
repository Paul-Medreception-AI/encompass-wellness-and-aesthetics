import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hormone Therapy Georgetown TX | Encompass Wellness and Aesthetics',
  description: 'Expert hormone and metabolic medicine serving Georgetown, TX. Personalized hormone therapy, weight management, and wellness care. Schedule your consultation today.',
  openGraph: {
    title: 'Hormone Therapy Georgetown TX | Encompass Wellness and Aesthetics',
    description: 'Expert hormone and metabolic medicine serving Georgetown, TX. Personalized hormone therapy, weight management, and wellness care.',
    url: 'https://encompassspa.com/locations/georgetown-tx',
    siteName: 'Encompass Wellness and Aesthetics',
    locale: 'en_US',
    type: 'website',
  },
}

export default function GeorgetownTXPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span>›</span>
            <span>Georgetown, TX</span>
          </div>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Hormone Near Georgetown, TX
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl opacity-95">
            Serving patients from Georgetown and surrounding TX communities. Expert hormone and metabolic medicine care is closer than you think.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule in Georgetown
          </Link>
        </div>
      </section>

      {/* Serving Georgetown Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the Georgetown Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located in Edmond, OK, Encompass Wellness and Aesthetics proudly serves patients from Georgetown, TX and surrounding communities. While we understand that quality hormone and metabolic medicine care can sometimes require a journey, many Georgetown residents find that our comprehensive, personalized approach to wellness makes the visit worthwhile. We're committed to making your experience as convenient as possible, whether you choose to visit us in person or connect through our telehealth services.
            </p>
            <p>
              Georgetown patients choose Encompass Wellness and Aesthetics because of our specialized expertise in hormone optimization, metabolic health, weight management, and aesthetic wellness. Our team takes the time to understand your unique health goals and develops customized treatment plans that address the root causes of hormonal imbalances. For those who prefer not to make the drive, we offer comprehensive telehealth consultations that bring our expert care directly to you, ensuring Georgetown residents have access to exceptional hormone and metabolic medicine regardless of distance.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center border border-[var(--color-border)]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Serving Georgetown, TX from Edmond, OK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available to Georgetown Patients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to Georgetown Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Hormone Optimization</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive hormone therapy including bioidentical hormone replacement, testosterone therapy, thyroid optimization, and hormone balancing for men and women.
              </p>
              <Link href="/services/hormone-therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Metabolic Health & Weight Management</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Evidence-based metabolic optimization, medical weight loss programs, nutrition counseling, and body composition analysis tailored to your unique metabolism.
              </p>
              <Link href="/services/weight-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Aesthetic Wellness</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Advanced aesthetic treatments to enhance your natural beauty and confidence, from skin rejuvenation to body contouring and wellness-focused aesthetics.
              </p>
              <Link href="/services/aesthetics" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center gap-2 transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth for Georgetown */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <div className="text-center mb-8">
            <svg className="w-16 h-16 mx-auto mb-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
            <p>
              Georgetown residents can access our complete range of hormone and metabolic medicine services through secure telehealth consultations. Our virtual appointments provide the same comprehensive, personalized care you would receive in person, all from the comfort of your home.
            </p>
            <p>
              During your telehealth visit, our specialists will review your health history, discuss your symptoms and goals, order any necessary laboratory testing at a convenient location near Georgetown, and develop a customized treatment plan. Follow-up appointments, medication management, and ongoing support are all available through telehealth, with the option to visit our Edmond location whenever you prefer in-person care.
            </p>
            <p>
              Most major insurance plans cover telehealth services, and we accept patients throughout Texas. Schedule your virtual consultation today and experience expert hormone and metabolic medicine care without the commute.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Schedule Telehealth Visit
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is Encompass Wellness and Aesthetics from Georgetown, TX?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is located in Edmond, OK, approximately 370 miles from Georgetown, TX. While this represents a significant distance, many patients find our specialized hormone and metabolic medicine expertise worth the journey for initial consultations and comprehensive evaluations. We also offer telehealth services that eliminate the need for travel while providing the same high-quality care.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Georgetown to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Georgetown, take I-35 North through Austin and continue into Oklahoma. Merge onto I-35 North toward Oklahoma City, then take exit toward Edmond. Our office is conveniently located with easy access from major highways. For most Georgetown patients, we recommend starting with a telehealth consultation to determine if an in-person visit would be beneficial, or simply continuing with virtual care for ongoing treatment management.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth appointments for Georgetown patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for all Georgetown, TX residents. Virtual appointments include initial consultations, follow-up visits, medication management, treatment plan adjustments, and ongoing wellness support. Lab work can be completed at facilities convenient to Georgetown, and prescriptions are sent to your preferred pharmacy. Telehealth is an excellent option for hormone therapy, metabolic health, and weight management services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available if I visit from Georgetown?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we provide convenient, accessible parking for all patients at our Edmond, OK location. Our facility is designed with patient comfort and accessibility in mind, featuring barrier-free access and ample parking close to our entrance. If you're planning to visit us from Georgetown, we're happy to schedule longer appointment times to make your trip worthwhile and ensure we address all of your health and wellness concerns in a single visit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 font-light">
            Get Expert Care from Georgetown
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Whether you prefer in-person visits or convenient telehealth appointments, expert hormone and metabolic medicine care is within reach.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-12 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}