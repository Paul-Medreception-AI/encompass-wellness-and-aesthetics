import { NextResponse } from 'next/server'

// Lead + SMS opt-in intake. Must run per-request; never prerender or cache.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Payload shape matches the fleet convention (see maryland-wellness-website
// app/api/contact/route.js): flat contact fields for GHL to map onto the
// contact record, plus a composed `message` that repeats everything, because
// the message body is what a human actually reads in GHL.
//
// Unlike the other sites there is deliberately NO hardcoded fallback webhook.
// A wrong URL would post Encompass patient leads into another practice's CRM,
// which is worse than refusing the submission. Unset ⇒ 503 and "call us".
const WEBHOOK = process.env.GHL_CONTACT_WEBHOOK_URL

const PRACTICE = 'Encompass Wellness and Aesthetics'
const PHONE = '(405) 254-3000'

function clean(v: unknown, max = 300): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: a bot fills every field, a person never sees this one.
  if (clean(body.website)) return NextResponse.json({ ok: true })

  if (!WEBHOOK) {
    return NextResponse.json(
      { error: `This form is temporarily unavailable. Please call us at ${PHONE}.` },
      { status: 503 },
    )
  }

  const name = clean(body.name)
  const [firstName, ...rest] = name.split(/\s+/)
  const lastName = clean(body.lastName) || rest.join(' ')
  const email = clean(body.email)
  const phone = clean(body.phone, 40)
  const message = clean(body.message, 5000)
  const service = clean(body.service, 120)
  const smsConsent = body.smsConsent === true
  const source = clean(body.source, 60) || 'website'
  const form = clean(body.form, 60) || source
  const page = clean(body.page, 300)

  if (!name || (!phone && !email)) {
    return NextResponse.json(
      { error: 'Please provide your name and a phone number or email.' },
      { status: 400 },
    )
  }

  const submittedAt = new Date().toISOString()
  const consentText =
    'I agree to receive SMS appointment reminders, service notifications and occasional ' +
    'promotions from Encompass Wellness and Aesthetics. Message frequency varies. Message and ' +
    'data rates may apply. Reply STOP to opt out, HELP for help.'

  const fullMessage = [
    'New website enquiry',
    `Form: ${form}`,
    service ? `Service interest: ${service}` : null,
    phone ? `Phone: ${phone}` : null,
    email ? `Email: ${email}` : null,
    `SMS consent: ${smsConsent ? 'Yes' : 'No'}`,
    smsConsent ? `Consent captured: ${submittedAt}` : null,
    page ? `Page: ${page}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  const payload = {
    source,
    event: 'website_form_submission',
    submittedAt,
    firstName,
    lastName,
    name,
    email,
    phone,
    service,
    smsConsent,
    // The consent record, kept as discrete fields so it can be audited without
    // parsing the message body.
    sms_consent: smsConsent,
    sms_consent_at: smsConsent ? submittedAt : '',
    sms_consent_text: smsConsent ? consentText : '',
    message: fullMessage,
    form,
    page,
    location: PRACTICE,
  }

  try {
    const res = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })
    if (!res.ok) {
      console.error('GHL webhook error', res.status, await res.text())
      return NextResponse.json(
        { error: `We could not submit that. Please call us at ${PHONE}.` },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('GHL webhook threw', err)
    return NextResponse.json(
      { error: `We could not submit that. Please call us at ${PHONE}.` },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
