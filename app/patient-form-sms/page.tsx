import type { Metadata } from 'next'
import PatientFormSms from './PatientFormSms'

export const metadata: Metadata = {
  alternates: { canonical: '/patient-form-sms' },
  title: 'Patient Form & SMS Sign-Up | Encompass Wellness',
  description:
    'Request an appointment with Encompass Wellness and Aesthetics in Edmond, OK and opt in to SMS appointment reminders and notifications.',
  // Indexable: this is the Opt-In URL submitted with the A2P 10DLC campaign and
  // carrier reviewers must be able to load it.
  robots: { index: true, follow: true },
}

export default function PatientFormSmsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-4xl sm:text-5xl font-light mb-4">
            Patient Form &amp; Text Message Sign-Up
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Tell us how to reach you and we will follow up. You can also opt in to receive
            appointment reminders by text.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <PatientFormSms />

          <div className="mt-10 text-sm text-[var(--color-muted)] leading-relaxed space-y-3">
            <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">
              About our text messages
            </h2>
            <p>
              By opting in you agree to receive SMS messages from Encompass Wellness and
              Aesthetics, including appointment confirmations and reminders, service
              notifications, and occasional promotions. Message frequency varies. Message and
              data rates may apply.
            </p>
            <p>
              You can reply <strong>STOP</strong> to any message to opt out at any time, or reply{' '}
              <strong>HELP</strong> for help. You may also call us at{' '}
              <a href="tel:+14052543000" className="text-[var(--color-accent)] underline">
                (405) 254-3000
              </a>
              . Consent to receive text messages is not a condition of purchase or of receiving
              care.
            </p>
            <p>
              Encompass Wellness and Aesthetics <strong>does not share</strong> mobile opt-in
              information or consent with third parties or affiliates for their marketing
              purposes.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
