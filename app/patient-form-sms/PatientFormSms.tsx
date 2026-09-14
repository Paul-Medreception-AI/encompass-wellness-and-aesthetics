'use client'

import { useState } from 'react'
import Link from 'next/link'

type State = 'idle' | 'sending' | 'sent' | 'error'

export default function PatientFormSms() {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')
  const [consent, setConsent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setState('sending')
    setError('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          phone: fd.get('phone'),
          email: fd.get('email'),
          message: fd.get('message'),
          smsConsent: fd.get('smsConsent') === 'on',
          source: 'patient-form-sms',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please call us at (405) 254-3000.')
        setState('error')
        return
      }
      setState('sent')
    } catch {
      setError('Something went wrong. Please call us at (405) 254-3000.')
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center">
        <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Thank you</h2>
        <p className="text-[var(--color-muted)] leading-relaxed">
          We have received your request and will be in touch. If you opted in to text messages,
          you can reply STOP at any time to opt out, or HELP for help.
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]'

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-white p-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Name <span aria-hidden="true">*</span>
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Mobile phone number <span aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="(405) 555-0123"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          How can we help?
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      {/* A2P consent. Carriers verify this checkbox exists, is unchecked by
          default, and references the Terms and Privacy pages by link. */}
      <div className="rounded-xl bg-[var(--color-light)] p-5">
        <label htmlFor="smsConsent" className="flex gap-3 items-start cursor-pointer">
          <input
            id="smsConsent"
            name="smsConsent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
          />
          <span className="text-sm text-[var(--color-ink)] leading-relaxed">
            I agree to receive SMS appointment reminders, service notifications and occasional
            promotions from Encompass Wellness and Aesthetics at the mobile number provided.
            Message frequency varies. Message and data rates may apply. Reply STOP to opt out at
            any time, or HELP for help. Consent is not a condition of purchase. See our{' '}
            <Link href="/terms-sms" className="text-[var(--color-accent)] underline">
              SMS Terms &amp; Conditions
            </Link>{' '}
            and{' '}
            <Link href="/privacy-sms" className="text-[var(--color-accent)] underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {state === 'error' && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
      >
        {state === 'sending' ? 'Submitting…' : 'Submit'}
      </button>

      <p className="text-xs text-[var(--color-muted)] leading-relaxed">
        Please do not include protected health information in this form. We will contact you to
        discuss your care privately.
      </p>
    </form>
  )
}
