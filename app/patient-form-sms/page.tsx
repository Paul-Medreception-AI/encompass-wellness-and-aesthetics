import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: '/patient-form-sms' },
  title: 'Text Message Sign-Up | Encompass Wellness and Aesthetics',
  description:
    'Opt in to text messages from Encompass Wellness and Aesthetics in Edmond, OK about your appointments and your care.',
  // Indexable: this is the Opt-In URL submitted with the A2P 10DLC campaign and
  // carrier reviewers must be able to load it.
  robots: { index: true, follow: true },
}

// The consent form is served by MedReception Studio, which runs this practice's phones and texts.
//
// Embedded rather than built here on purpose. Studio's form writes the evidence a carrier
// reviewer or a TCPA complaint asks for -- the exact sentence the patient agreed to, snapshotted
// when they agreed, plus when, from where and from what device -- as an opt-in record in Studio.
// The form this replaced posted to /api/lead, which put a "Sms consent: Yes/No" line on a
// message card and wrote no opt-in record at all.
//
// ?embed=1 drops Studio's own page chrome so the form sits inside this page. Studio sends no
// X-Frame-Options or frame-ancestors header, so it can be framed.
const STUDIO_CONSENT_URL =
  'https://studio.medreception.ai/p/encompass-wellness-aesthetics/sms-consent?embed=1'

export default function PatientFormSmsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-4xl sm:text-5xl font-light mb-4">
            Text Message Sign-Up
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Encompass Wellness and Aesthetics can text you about your appointments and your care.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[var(--color-ink)] leading-relaxed mb-8">
            To opt in, enter your name and mobile number below, tick the consent box, and press{' '}
            <strong>Yes, you can text me</strong>. Consent to receive text messages is not a
            condition of receiving care. To send us a question instead, use our{' '}
            <Link href="/contact" className="text-[var(--color-accent)] underline">
              contact page
            </Link>
            .
          </p>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 sm:p-6">
            {/* Height measured against the live form, not guessed: its content is 661px at the
                desktop width of this box and 763px on a 390px phone, where the text wraps. A
                shorter frame hides the submit button behind a scrollbar inside the page. */}
            <iframe
              src={STUDIO_CONSENT_URL}
              title="Encompass Wellness and Aesthetics text message consent form"
              className="w-full border-0 bg-transparent h-[880px] sm:h-[700px]"
              loading="eager"
            />
          </div>

          {/* The disclosures a carrier reviewer checks, on this page as well as inside the form, so
              they are visible before the embedded form loads and link to this site's own SMS
              Terms and Privacy Policy -- the URLs registered with the campaign. */}
          <div className="mt-10 text-sm text-[var(--color-muted)] leading-relaxed space-y-3">
            <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">
              About our text messages
            </h2>
            <p>
              By opting in you agree to receive text messages from Encompass Wellness and
              Aesthetics about your appointments and your care, such as appointment confirmations
              and reminders and replies to requests you have made. Message frequency varies.
              Message and data rates may apply.
            </p>
            <p>
              Reply <strong>STOP</strong> to any message to opt out at any time, or reply{' '}
              <strong>HELP</strong> for help. You may also call us at{' '}
              <a href="tel:+14052543000" className="text-[var(--color-accent)] underline">
                (405) 254-3000
              </a>
              .
            </p>
            <p>
              Encompass Wellness and Aesthetics <strong>does not share</strong> mobile opt-in
              information or consent with third parties or affiliates for their marketing
              purposes. Carriers are not liable for delayed or undelivered messages. See our{' '}
              <Link href="/terms-sms" className="text-[var(--color-accent)] underline">
                SMS Terms &amp; Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy-sms" className="text-[var(--color-accent)] underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
