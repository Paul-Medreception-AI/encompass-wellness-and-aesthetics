import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your experience matters to us—share your feedback and help others discover the care they deserve.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-10 leading-relaxed">
            At Encompass Wellness and Aesthetics, your experience drives everything we do. Whether you've completed treatment or are currently on your wellness journey, we invite you to share your thoughts. Your honest feedback helps us serve you better and guides others seeking the same compassionate, root-cause approach to health.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Experience personalized, root-cause medicine designed to restore your optimal health and vitality.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}