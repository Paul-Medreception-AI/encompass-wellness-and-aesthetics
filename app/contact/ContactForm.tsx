'use client'

import { useState } from 'react'
import Link from 'next/link'

const SERVICES = [
  'Hormone Replacement Therapy',
  'Weight Loss Program',
  'Thyroid Management',
  'Functional Medicine Consultation',
  'Aesthetic Services',
  'IV Therapy',
]

const field =
  'border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none'

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setState('sending')
    setError('')
    const service = String(fd.get('service') || '')
    const msg = String(fd.get('message') || '')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          message: service ? `Service interest: ${service}\n\n${msg}` : msg,
          smsConsent: fd.get('smsConsent') === 'on',
          source: 'contact',
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
      <div className="text-center py-8">
        <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Message sent</h3>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Thank you — we have received your message and will be in touch shortly. For anything
          urgent, please call{' '}
          <a href="tel:+14052543000" className="text-[var(--color-accent)] underline">
            (405) 254-3000
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Full Name <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Email <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input type="email" id="email" name="email" required autoComplete="email" className={field} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" autoComplete="tel" className={field} />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Service Interest
        </label>
        <select id="service" name="service" className={field} defaultValue="">
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={field} />
      </div>

      <div className="rounded-xl bg-[var(--color-light)] p-5">
        <label htmlFor="smsConsent" className="flex gap-3 items-start cursor-pointer">
          <input
            id="smsConsent"
            name="smsConsent"
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
          />
          <span className="text-sm text-[var(--color-ink)] leading-relaxed">
            I agree to receive SMS appointment reminders and notifications from Encompass Wellness
            and Aesthetics at the number provided. Message frequency varies. Message and data rates
            may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of
            purchase. See our{' '}
            <Link href="/terms-sms" className="text-[var(--color-accent)] underline">
              SMS Terms
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
        className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition-colors mt-2"
      >
        {state === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-[var(--color-muted)] text-xs mt-4">
        Please do not include any confidential or sensitive health information in this form. This
        contact form is not a secure method of communication for protected health information
        under HIPAA.
      </p>
    </form>
  )
}
