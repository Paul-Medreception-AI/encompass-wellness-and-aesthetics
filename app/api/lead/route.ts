import { NextResponse } from 'next/server'

// Lead + SMS opt-in intake. Must run per-request; never prerender or cache.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Set GHL_CONTACT_WEBHOOK_URL in the Vercel project. There is deliberately no
// fallback URL: a wrong endpoint would accept submissions and drop them, which
// is worse than refusing them. If it is unset we return 503 and the form tells
// the patient to call the office.
const WEBHOOK = process.env.GHL_CONTACT_WEBHOOK_URL

function clean(v: unknown, max = 300): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  if (!WEBHOOK) {
    return NextResponse.json(
      { error: 'This form is temporarily unavailable. Please call us at (405) 254-3000.' },
      { status: 503 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = clean(body.name)
  const phone = clean(body.phone, 40)
  const email = clean(body.email)
  const message = clean(body.message, 5000)
  const smsConsent = body.smsConsent === true
  const source = clean(body.source, 60) || 'website'

  if (!name || (!phone && !email)) {
    return NextResponse.json(
      { error: 'Please provide your name and a phone number or email.' },
      { status: 400 },
    )
  }

  // An SMS opt-in is a consent record: capture when and from where it was given.
  const [firstName, ...rest] = name.split(/\s+/)
  const payload = {
    firstName,
    lastName: rest.join(' '),
    name,
    phone,
    email,
    message,
    source,
    sms_consent: smsConsent,
    sms_consent_at: smsConsent ? new Date().toISOString() : '',
    sms_consent_text: smsConsent
      ? 'I agree to receive SMS appointment reminders, service notifications and occasional promotions from Encompass Wellness and Aesthetics. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help.'
      : '',
  }

  try {
    const res = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      return NextResponse.json(
        { error: 'We could not submit that. Please call us at (405) 254-3000.' },
        { status: 502 },
      )
    }
  } catch {
    return NextResponse.json(
      { error: 'We could not submit that. Please call us at (405) 254-3000.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
