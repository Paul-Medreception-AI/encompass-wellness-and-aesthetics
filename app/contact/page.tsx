import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Us | Encompass Wellness and Aesthetics',
  description: 'Contact Encompass Wellness and Aesthetics in Edmond, OK. Schedule your consultation for hormone replacement therapy, weight loss, thyroid management, and functional medicine.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl font-light mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div id="form" className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] animate-fade-up">
              <h2 className="font-serif text-3xl text-[var(--color-ink)] mb-8">Send Us a Message</h2>
              
              <ContactForm />
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              {/* Visit Us */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Visit Us</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  2925 Astoria Way<br />
                  Edmond, OK 73034
                </p>
              </div>

              {/* Call or Fax */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Call Us</h3>
                <a href="tel:+14052543000" className="font-serif text-3xl text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-semibold">
                  (405) 254-3000
                </a>
              </div>

              {/* Hours */}
              <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">Office Hours</h3>
                <div className="text-[var(--color-ink)] leading-relaxed space-y-1">
                  <p className="font-medium">Monday: 8:00am - 3:00pm</p>
                  <p className="font-medium">Tuesday - Thursday: 8:00am - 5:00pm</p>
                  <p className="font-medium">Friday: 8:00am - 3:00pm</p>
                  <p className="text-sm text-[var(--color-muted)] mt-2">Closed for lunch from 12:00pm to 1:00pm</p>
                </div>
              </div>

              {/* Book Appointment CTA */}
              <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 animate-fade-up">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <h3 className="font-serif text-2xl mb-3">Book an Appointment</h3>
                <p className="mb-6 text-white/90">
                  Ready to take the first step toward optimal health? Fill out our contact form and we'll get back to you promptly.
                </p>
                <a
                  href="#form"
                  className="inline-block bg-white text-[var(--color-accent)] hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Fill Out Form Above
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}