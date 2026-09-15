import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  alternates: { canonical: '/team' },
  title: 'Meet Our Team | Encompass Wellness',
  description:
    'Meet the providers and staff at Encompass Wellness and Aesthetics in Edmond, OK — led by Erin Sutton, APRN-CNP, a Certified Family Nurse Practitioner specializing in functional medicine.',
}

type Member = {
  name: string
  credential?: string
  role: string
  photo?: string
  bio?: string[]
}

// Staff list and bio text taken verbatim in substance from encompassspa.com/about-2.
// Staff cards are name and role only. No photo, and no placeholder standing in for one:
// a silhouette on a named person reads as a missing face rather than a deliberate choice,
// and a stock photo of a stranger is not an option on a medical site.
const PROVIDERS: Member[] = [
  {
    name: 'Erin Sutton',
    credential: 'APRN-CNP',
    role: 'Certified Family Nurse Practitioner',
    photo: '/images/Erin-Sutton-Headshot.jpeg',
    bio: [
      'Erin Sutton is a Certified Family Nurse Practitioner with a passion for people and a great desire and curiosity to get to the root of every problem — especially when it comes to the practice of medicine. She graduated from the University of Central Oklahoma in 2005 with a Bachelor of Science in Nursing and went on to NP school at Texas Woman’s University, where she graduated with both a Master of Science in Nursing and a Certificate in Education.',
      'Choosing to become a nurse practitioner was initially a decision based on the desire to care for people while maintaining her own work/life balance, as she knew this was pertinent to maintaining her own health. However, it was during her NP training that she began to realize the traditional approach to medicine was backwards and was largely focused on treating disease with medicine rather than reversing disease through education and supporting the amazingly dynamic efforts of the human body to heal itself. It was through that discontent with the “traditional” medical approach that she ultimately found functional medicine and immediately knew it was her passion.',
      'She has studied with the American Academy of Anti-Aging Medicine and is a member of A4M and the Institute for Functional Medicine. She believes that medicine is an art as well as a partnership with patients, and that nearly every disease can be reversed with appropriate diet and lifestyle modifications.',
      'Erin lives in Arcadia with her husband Buckey, their two boys Parker and Beckett, and their three dogs. When she is not working she spends most of her time at the baseball and football fields watching her boys play ball. She enjoys traveling, time with her family, exercising, and being in and on the water. She is a member of Life Church in Edmond and loves being part of the Edmond community.',
    ],
  },
  {
    name: 'Stephanie Fields',
    credential: 'APRN-CNP',
    role: 'Nurse Practitioner',
    photo: '/images/Stephanie-Fields-Headshot.jpeg',
  },
]

const STAFF: Member[] = [
  { name: 'Melinda Mackey', role: 'Nurse Practitioner' },
  { name: 'Dana Perkins', credential: 'RN', role: 'Registered Nurse' },
  { name: 'Tashica Willis', role: 'Medical Assistant' },
  { name: 'Rhonda Carter', role: 'Administrative Assistant' },
  { name: 'Dustyn Carroll', role: 'Customer Service Representative' },
  { name: 'Leslie Warrior', role: 'Patient Care Team' },
]

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Our providers and staff partner with you in your healthcare journey — getting to the
            root of your problems rather than simply treating the symptoms.
          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Providers
          </h2>

          <div className="space-y-16">
            {PROVIDERS.map((p, i) => (
              <div
                key={p.name}
                // No bio yet ⇒ centre the name against the photo. Left top-aligned it
                // reads as a bio that failed to load rather than a provider we have
                // only listed so far.
                className={`grid md:grid-cols-[minmax(0,22rem)_1fr] gap-12 ${
                  p.bio ? 'items-start' : 'items-center'
                }`}
              >
                <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-[var(--color-light)] shadow-sm">
                  <Image
                    src={p.photo as string}
                    alt={p.credential ? `${p.name}, ${p.credential}` : p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 22rem"
                    className="object-cover object-top"
                    priority={i === 0}
                  />
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] mb-2">
                    {p.name}
                    {p.credential ? `, ${p.credential}` : ''}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-6">
                    {p.role}
                  </p>
                  <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                    {p.bio?.map((para) => (
                      <p key={para.slice(0, 40)}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff grid */}
      <section className="bg-white py-24 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {STAFF.map((m) => (
              <div
                key={m.name}
                className="bg-[var(--color-cream)] rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-8 text-center">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-1">
                    {m.name}
                    {m.credential ? `, ${m.credential}` : ''}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a consultation and discover how a functional approach can help you reverse
            disease and restore your health.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
