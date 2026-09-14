import Link from 'next/link'

export const metadata = {
  title: 'Insurance & Payment | Encompass Wellness',
  description: 'We now accept most major forms of insurance for hormone therapy and thyroid management. Learn what is covered at Encompass Wellness and Aesthetics in Edmond, OK.',
  alternates: { canonical: '/insurance' },
}

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light mb-6">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            Accepted Insurance Plans
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Aetna
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              BlueCross BlueShield
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Cigna
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              United Healthcare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Humana
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Medicare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Tricare
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow">
              Anthem
            </div>
          </div>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto">
            Please contact our office to verify your specific plan coverage and benefits. Insurance coverage may vary depending on your individual policy and the services provided.
          </p>
        </div>
      </section>

      {/* Billing Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            How Billing Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                1. Verify Coverage
              </h3>
              <p className="text-[var(--color-muted)]">
                We verify your insurance benefits before your appointment to understand your coverage, copay, and deductible requirements.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                2. Service Provided
              </h3>
              <p className="text-[var(--color-muted)]">
                You receive your comprehensive care. Any required copayment or deductible amount is collected at the time of service.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                3. Claim Submitted
              </h3>
              <p className="text-[var(--color-muted)]">
                We submit a claim to your insurance company on your behalf with all necessary documentation for the services provided.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                4. You Pay Remainder
              </h3>
              <p className="text-[var(--color-muted)]">
                After your insurance processes the claim, you'll receive an Explanation of Benefits (EOB) and a statement for any remaining balance.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h4 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Understanding Your Copay</h4>
              <p className="text-[var(--color-muted)]">
                A copay is a fixed amount you pay for a covered service, typically due at the time of your appointment. The amount varies by your insurance plan and type of service.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h4 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Deductibles Explained</h4>
              <p className="text-[var(--color-muted)]">
                Your deductible is the amount you pay for covered services before your insurance begins to pay. Once you meet your annual deductible, your insurance will cover services according to your plan's benefits.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h4 className="font-semibold text-lg mb-2 text-[var(--color-ink)]">Explanation of Benefits (EOB)</h4>
              <p className="text-[var(--color-muted)]">
                An EOB is a statement from your insurance company explaining what services were covered, what they paid, and what you may owe. This is not a bill, but helps you understand your insurance benefits and any patient responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl mb-6 text-[var(--color-ink)]">
              Self-Pay Options
            </h3>
            <div className="space-y-6 text-[var(--color-muted)]">
              <p>
                We understand that not all services may be covered by insurance. For patients without insurance coverage or those choosing to pay out-of-pocket, we offer transparent self-pay pricing.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Flexible Payment Plans</h4>
                  <p>
                    We offer payment plans to help make your care more affordable. Discuss options with our billing team to find a plan that works for your budget.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimate</h4>
                  <p>
                    Under the No Surprises Act, you have the right to receive a "Good Faith Estimate" of expected charges before you receive services. This estimate will include the expected cost of primary and ancillary services.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Transparent Pricing</h4>
                  <p>
                    We believe in transparent healthcare costs. Contact our office for specific pricing information on any service. We're happy to provide detailed cost estimates before your appointment.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-[var(--color-accent)]">
                  <p className="text-sm">
                    <strong className="text-[var(--color-ink)]">Your Rights:</strong> Under the No Surprises Act, you have protections against surprise medical bills. If you receive services from an out-of-network provider, you may be protected from surprise billing in certain situations. Learn more about your rights at cms.gov/nosurprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl text-center mb-16 text-[var(--color-ink)]">
            Billing Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up group">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-ink)] list-none flex items-center justify-between">
                Do you accept my insurance?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                We accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, United Healthcare, Humana, Medicare, and Tricare. However, coverage varies by individual policy. Please contact our office to verify your specific plan coverage before your appointment.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up group">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-ink)] list-none flex items-center justify-between">
                What if my insurance doesn't cover hormone therapy or functional medicine?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Some specialized services like hormone therapy may not be fully covered by all insurance plans. We offer transparent self-pay pricing and flexible payment plans for services not covered by insurance. Our team will provide a detailed cost estimate before beginning treatment so you can make an informed decision.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up group">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-ink)] list-none flex items-center justify-between">
                When is payment due?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Copayments and known deductible amounts are due at the time of service. For services not covered by insurance or for self-pay patients, payment is expected at the time of service unless prior payment arrangements have been made with our billing department.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up group">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-ink)] list-none flex items-center justify-between">
                What payment methods do you accept?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                We accept cash, checks, credit cards, and debit cards. We also accept HSA (Health Savings Account) and FSA (Flexible Spending Account) cards. For larger balances, payment plans may be available—please speak with our billing team.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up group">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-ink)] list-none flex items-center justify-between">
                What if I receive a bill after my insurance has paid?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                After your insurance processes your claim, you'll receive an Explanation of Benefits (EOB) from your insurance company, followed by a statement from our office for any remaining patient responsibility. This may include deductibles, coinsurance, or non-covered services. If you have questions about your bill, our billing team is available to explain all charges and work with you on payment options.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6 text-white">
            Questions About Billing or Insurance?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Our billing team is here to help you understand your coverage and payment options. Contact us today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-semibold transition-colors"
          >
            Contact Our Billing Team
          </Link>
        </div>
      </section>
    </main>
  )
}