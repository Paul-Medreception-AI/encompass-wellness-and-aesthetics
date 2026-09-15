import { NextResponse } from 'next/server'

// Lead + SMS opt-in intake. Must run per-request; never prerender or cache.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Submissions go to MedReception Studio, and nowhere else.
//
// They used to go to a GoHighLevel webhook. Studio runs this practice's phones, and an enquiry
// from the website is the same kind of thing as a message taken on a call — it belongs on the
// same board, not in a second system the front desk has to remember to open.
//
// 🔴 THE TOKEN IS THE ROUTING KEY. Nothing in the body names a practice: the secret resolves
// it server-side, so this must stay a server-to-server call from this route handler. Never
// expose it to the browser (no NEXT_PUBLIC_ prefix, ever).
//
// Set both on the Vercel project that serves encompassspa.com:
//   STUDIO_INGEST_URL    https://studio.medreception.ai/api/v1/web/submission
//   STUDIO_INGEST_TOKEN  this practice's ingest secret
//
// As before there is deliberately NO hardcoded fallback. A wrong token would post Encompass
// patient leads onto another practice's board, which is worse than refusing the submission.
// Unset ⇒ 503 and "call us".
const STUDIO_URL = process.env.STUDIO_INGEST_URL
const STUDIO_TOKEN = process.env.STUDIO_INGEST_TOKEN

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

  if (!STUDIO_URL || !STUDIO_TOKEN) {
    return NextResponse.json(
      { error: `This form is temporarily unavailable. Please call us at ${PHONE}.` },
      { status: 503 },
    )
  }

  const name = clean(body.name)
  const email = clean(body.email)
  const phone = clean(body.phone, 40)
  const message = clean(body.message, 5000)
  const service = clean(body.service, 120)
  const smsConsent = body.smsConsent === true
  const form = clean(body.form, 60) || clean(body.source, 60) || 'website'
  const page = clean(body.page, 300)

  if (!name || (!phone && !email)) {
    return NextResponse.json(
      { error: 'Please provide your name and a phone number or email.' },
      { status: 400 },
    )
  }

  const submittedAt = new Date().toISOString()

  // name / phone / email / message are COLUMNS on the Studio action and render on the card.
  // Every other key here is unknown to Studio and is kept verbatim in the action's details,
  // which is where the front desk reads what the patient actually asked for. So the composed
  // "everything again" message body the GHL payload used is gone on purpose: it duplicated
  // fields the card already shows.
  //
  // 🔴 studio_source, NOT source. `source` is also what this site calls its own form label,
  // and Studio reads `studio_source or source` as the sink — so sending 'contact' under that
  // key made every submission fall back to web_form by accident rather than by intent. The
  // form label travels as `form`, which cannot collide.
  const payload = {
    studio_source: 'web_form',
    name,
    phone,
    email,
    // A patient who only picks a service and submits must not produce a blank card.
    message: message || (service ? `Service interest: ${service}` : 'Website enquiry'),
    form,
    page,
    service,
    // ⚠️ TCPA consent lands in the action's details, not in a consent record. Studio has a
    // real consent path (/p/{slug}/sms-consent); until this site uses it, this is the only
    // trace that the box was ticked.
    sms_consent: smsConsent ? 'Yes' : 'No',
    sms_consent_at: smsConsent ? submittedAt : '',
  }

  // Studio is the ONLY sink, so a Studio failure IS the failure and has to surface. Hiding it
  // behind a cheerful 200 would mean submissions vanish and nobody finds out.
  try {
    const res = await fetch(STUDIO_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-studio-token': STUDIO_TOKEN,
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) {
      // Never log the token or the body: the body carries what a patient typed about their health.
      console.error('studio ingest error', res.status)
      return NextResponse.json(
        { error: `We could not submit that. Please call us at ${PHONE}.` },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error('studio ingest threw', err)
    return NextResponse.json(
      { error: `We could not submit that. Please call us at ${PHONE}.` },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
