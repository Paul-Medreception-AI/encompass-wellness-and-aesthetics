import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/telehealth' },
  title: 'Telehealth Services | Encompass Wellness and Aesthetics',
  description: 'Expert hormone and metabolic medicine care from the comfort of your home. Convenient, private, and HIPAA-compliant virtual consultations in Edmond, OK.',
}

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Expert hormone and metabolic medicine care from the comfort of your home
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4">
              How Telehealth Works
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              Getting care has never been easier. Connect with our board-certified providers in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-light text-[var(--color-primary)]">01</span>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Schedule Your Visit
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your virtual consultation online or by phone. Choose a time that works best for your schedule, often with same-day availability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up [animation-delay:100ms]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-light text-[var(--color-primary)]">02</span>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Connect Securely
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your appointment from any device using our secure, HIPAA-compliant platform. No special software required for most devices.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-up [animation-delay:200ms]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light)] flex items-center justify-center mb-6">
                <span className="font-cormorant text-3xl font-light text-[var(--color-primary)]">03</span>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Get Expert Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive the same comprehensive, personalized care as an in-office visit. Review labs, discuss treatments, and develop your health plan together.
              </p>
            </div>
          </div>

          {/* Services Available */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-sm animate-fade-up">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Available via Telehealth
              </h3>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Follow-up consultations and progress reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Lab result reviews and treatment adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Hormone replacement therapy management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Weight loss program consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Thyroid management monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Nutritional counseling and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Medication reviews and prescription refills</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm animate-fade-up [animation-delay:100ms]">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-4">
                Requires In-Person Visit
              </h3>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Initial comprehensive assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Physical examinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Blood draws and diagnostic testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>IV therapy treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Aesthetic procedures and laser therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                  <span>Injection administration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4">
              Benefits of Telehealth
            </h2>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              Experience healthcare that fits your lifestyle without compromising quality or care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                No Commute Required
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Save time and avoid traffic. Connect with your provider from home, work, or anywhere with internet access.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up [animation-delay:100ms]">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                Same-Day Availability
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Get care when you need it with flexible scheduling. Many appointments available within 24 hours.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up [animation-delay:200ms]">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                Private & Discreet
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Discuss sensitive health concerns from the privacy of your own space without waiting room anxiety.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up [animation-delay:300ms]">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                Works on Any Device
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Use your smartphone, tablet, or computer. Our platform works seamlessly across all devices and browsers.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up [animation-delay:400ms]">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                Covered by Insurance
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover telehealth visits the same as in-person appointments. We'll verify your coverage.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up [animation-delay:500ms]">
              <div className="mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-3">
                HIPAA-Compliant Platform
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your health information is protected with bank-level encryption and secure, compliant technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto shadow-sm animate-fade-up">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                What You Need for Your Visit
              </h2>
              <p className="text-lg text-[var(--color-muted)]">
                Preparing for your telehealth appointment is simple. Here's everything you need to know.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <div className="flex items-start mb-4">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mr-4 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  <div>
                    <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-2">
                      Device Requirements
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                      Any device with a camera, microphone, and internet connection will work:
                    </p>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                      <li className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2">•</span>
                        <span>Smartphone (iPhone or Android)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2">•</span>
                        <span>Tablet (iPad or Android tablet)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2">•</span>
                        <span>Laptop or desktop computer with webcam</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mr-4 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <div>
                    <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-2">
                      Internet Connection
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      A stable internet connection is essential for a smooth visit. We recommend a minimum speed of 3 Mbps for optimal video quality. WiFi or cellular data both work well.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mr-4 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <div>
                    <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-2">
                      Private, Quiet Space
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Find a comfortable, private location where you can speak freely without interruptions. Good lighting helps your provider see you clearly. Consider using headphones for better audio privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mr-4 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-cormorant text-2xl font-light text-[var(--color-ink)] mb-2">
                      Supported Platforms
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                      Our telehealth platform works with most modern browsers and devices:
                    </p>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                      <li className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2">•</span>
                        <span>Chrome, Safari, Firefox, or Edge browsers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2">•</span>
                        <span>iOS 12+ or Android 8+</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2">•</span>
                        <span>No app download required for most devices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Get Started with Telehealth?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Schedule your virtual consultation today and experience convenient, expert care from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-10 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-colors duration-300"
            >
              Schedule Your Consultation
            </a>
            <a
              href="/services"
              className="inline-block bg-white text-[var(--color-accent)] px-10 py-4 rounded-full font-medium hover:bg-white/90 transition-colors duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}