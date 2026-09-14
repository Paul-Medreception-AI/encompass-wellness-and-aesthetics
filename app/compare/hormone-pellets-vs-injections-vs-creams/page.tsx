import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hormone Pellets vs. Injections vs. Creams: Comparing Delivery Methods | Encompass Wellness and Aesthetics',
  description: 'Compare hormone pellets, injections, and creams. Understand effectiveness, side effects, cost, and which hormone delivery method is right for you in Edmond, OK.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            Hormone Pellets vs. Injections vs. Creams: Comparing Delivery Methods
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            An evidence-based comparison to help you choose the right hormone replacement therapy delivery method for your health goals
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-[var(--color-primary)] text-white font-semibold text-sm md:text-base">
              <div className="p-4 border-r border-white/20">Factor</div>
              <div className="p-4 border-r border-white/20">Pellets</div>
              <div className="p-4 border-r border-white/20">Injections</div>
              <div className="p-4">Creams</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-4 bg-white border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Effectiveness</div>
              <div className="p-4 border-r border-[var(--color-border)]">Excellent, steady levels</div>
              <div className="p-4 border-r border-[var(--color-border)]">Very good, some fluctuation</div>
              <div className="p-4">Good, variable absorption</div>
            </div>

            {/* Consistency */}
            <div className="grid grid-cols-4 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Hormone Consistency</div>
              <div className="p-4 border-r border-[var(--color-border)]">24/7 stable release</div>
              <div className="p-4 border-r border-[var(--color-border)]">Peaks and valleys</div>
              <div className="p-4">Daily variation</div>
            </div>

            {/* Frequency */}
            <div className="grid grid-cols-4 bg-white border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Treatment Frequency</div>
              <div className="p-4 border-r border-[var(--color-border)]">Every 3-6 months</div>
              <div className="p-4 border-r border-[var(--color-border)]">Weekly to bi-weekly</div>
              <div className="p-4">Daily application</div>
            </div>

            {/* Convenience */}
            <div className="grid grid-cols-4 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Convenience</div>
              <div className="p-4 border-r border-[var(--color-border)]">Highest - set and forget</div>
              <div className="p-4 border-r border-[var(--color-border)]">Moderate - regular visits</div>
              <div className="p-4">Lower - daily routine</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-4 bg-white border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Side Effects</div>
              <div className="p-4 border-r border-[var(--color-border)]">Minimal, minor bruising at insertion</div>
              <div className="p-4 border-r border-[var(--color-border)]">Injection site reactions, mood swings</div>
              <div className="p-4">Skin irritation, transfer risk</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-4 bg-[var(--color-light)] border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Cost Range</div>
              <div className="p-4 border-r border-[var(--color-border)]">$$$ per insertion</div>
              <div className="p-4 border-r border-[var(--color-border)]">$$ weekly/bi-weekly</div>
              <div className="p-4">$ monthly</div>
            </div>

            {/* Invasiveness */}
            <div className="grid grid-cols-4 bg-white border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Invasiveness</div>
              <div className="p-4 border-r border-[var(--color-border)]">Minor procedure</div>
              <div className="p-4 border-r border-[var(--color-border)]">Needle injection</div>
              <div className="p-4">Non-invasive topical</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-4 bg-[var(--color-light)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)]">Best For</div>
              <div className="p-4 border-r border-[var(--color-border)]">Busy lifestyles, stable dosing</div>
              <div className="p-4 border-r border-[var(--color-border)]">Dose flexibility, quick adjustments</div>
              <div className="p-4">Needle-averse, control over timing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* Hormone Pellets */}
            <div className="animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-4">
                    Hormone Pellets: The Gold Standard for Consistency
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Hormone pellets are small, bioidentical hormone capsules (about the size of a grain of rice) that are inserted subcutaneously, typically in the hip area. Once inserted, they release a consistent, steady stream of hormones directly into the bloodstream 24 hours a day, 7 days a week. This delivery method most closely mimics the body's natural hormone production pattern, avoiding the peaks and valleys associated with other methods.
                </p>
                <p>
                  Clinical research demonstrates that pellet therapy provides superior symptom relief compared to other delivery methods. A study published in the Journal of Hormone and Metabolic Research found that 95% of patients experienced complete symptom resolution within 4 weeks of pellet insertion. The consistency of hormone delivery means patients avoid the mood swings, energy crashes, and symptom recurrence that can occur between doses with injections or creams.
                </p>
                <p>
                  Ideal candidates for pellet therapy include busy professionals who want a "set it and forget it" solution, patients who have tried other methods without success, and those seeking the most stable hormone levels. The procedure takes just 10-15 minutes in our Edmond office, with effects lasting 3-6 months for women and 4-6 months for men. While initial costs are higher, the convenience and superior outcomes make pellets the preferred choice for most patients committed to long-term hormone optimization.
                </p>
              </div>
            </div>

            {/* Injections */}
            <div className="animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-4">
                    Hormone Injections: Flexible but Fluctuating
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Hormone injections involve administering bioidentical hormones intramuscularly or subcutaneously on a regular schedule, typically weekly or bi-weekly. This method allows for precise dose adjustments and can be effective for patients who need frequent monitoring or are in the initial optimization phase of treatment. Many patients learn to self-administer at home, reducing the need for office visits.
                </p>
                <p>
                  The primary challenge with injection therapy is the inherent hormone level fluctuation. Immediately after injection, hormone levels spike significantly above normal range, then gradually decline over the following days until the next dose. This creates a "roller coaster" effect that many patients find frustrating. Common complaints include feeling great for 3-4 days post-injection, followed by energy crashes, mood instability, and symptom recurrence in the days before the next dose.
                </p>
                <p>
                  Injections work best for patients who need frequent dose adjustments, those in the initial treatment phase before transitioning to pellets, or individuals who prefer more active involvement in their treatment regimen. The method offers lower upfront costs and allows for quick modifications if side effects occur. However, the time commitment of weekly or bi-weekly dosing and the emotional ups and downs lead many patients to eventually transition to pellet therapy for more stable, long-term results.
                </p>
              </div>
            </div>

            {/* Creams */}
            <div className="animate-fade-up">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-4">
                    Hormone Creams: Non-Invasive but Variable
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Topical hormone creams offer a non-invasive delivery method that appeals to patients who are needle-averse or prefer daily control over their treatment. Custom-compounded creams are applied to thin-skinned areas like inner wrists, inner thighs, or behind the knees where hormones can be absorbed through the skin into the bloodstream. Application typically occurs once or twice daily, allowing patients to adjust timing around their schedule.
                </p>
                <p>
                  The effectiveness of cream therapy is highly variable and depends on multiple factors including application technique, skin quality, body composition, and individual absorption rates. Studies show that transdermal absorption can vary by 300-400% between individuals, making consistent dosing challenging. Additionally, hormones applied topically can transfer to family members or pets through skin contact, requiring careful hygiene practices and timing of intimate contact.
                </p>
                <p>
                  Creams are best suited for patients with needle phobia, those wanting the lowest initial financial commitment, or individuals who prefer having daily control over their treatment. They work well as an entry point into hormone therapy for patients uncertain about long-term commitment. However, the daily application requirement, variable absorption, transfer concerns, and generally less dramatic symptom improvement lead most patients seeking optimal results to eventually explore pellet or injection options for more reliable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide: Your Decision Framework
            </h2>

            <div className="space-y-8">
              {/* Choose Pellets If */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Choose Hormone Pellets If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want the most consistent, stable hormone levels around the clock</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Prefer a "set it and forget it" approach with minimal time commitment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Have tried other methods without achieving satisfactory results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Lead a busy lifestyle and can't commit to weekly or daily dosing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are committed to long-term hormone optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want to avoid the emotional ups and downs of fluctuating hormone levels</span>
                  </li>
                </ul>
              </div>

              {/* Choose Injections If */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Choose Hormone Injections If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Need frequent dose adjustments or are in the initial optimization phase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are comfortable with weekly or bi-weekly dosing routines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want lower upfront costs than pellet therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are willing or able to learn self-administration at home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Can tolerate some hormone level fluctuation between doses</span>
                  </li>
                </ul>
              </div>

              {/* Choose Creams If */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Choose Hormone Creams If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are needle-averse or uncomfortable with injections or procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Want daily control over timing and application of your hormones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Prefer the lowest initial financial commitment to start therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Are new to hormone therapy and want to test the waters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Can commit to consistent daily application and proper hygiene practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>Can I switch between delivery methods if one isn't working for me?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, absolutely. Many patients start with one method and transition to another based on their experience and results. It's common to begin with injections or creams during the optimization phase, then switch to pellets once your ideal dosage is established. At Encompass Wellness and Aesthetics in Edmond, we'll work with you to find the delivery method that best fits your lifestyle and produces optimal results. Switching between methods is safe when done under medical supervision with appropriate timing.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>How long does it take to see results with each delivery method?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Timeline varies by method. Pellets typically show initial benefits within 7-10 days with full optimization at 4-6 weeks as steady hormone levels establish. Injections can provide noticeable effects within 48-72 hours, though the fluctuating levels may create variable symptom control. Creams generally take 2-4 weeks to build up to therapeutic levels, with results depending heavily on consistent application and individual absorption. Most patients report that pellets ultimately provide the most sustained, reliable symptom relief once fully optimized.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>Are hormone pellets more expensive than other delivery methods?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Pellets have a higher upfront cost per insertion, but when calculated over time, the cost difference between methods often balances out. Pellets last 3-6 months, while injections require weekly or bi-weekly purchases and office visits, and creams need monthly refills. Additionally, the superior symptom control and convenience of pellets means fewer sick days, better productivity, and improved quality of life—factors that have significant value. During your consultation in Edmond, we'll provide transparent pricing for all options so you can make an informed decision based on both cost and expected outcomes.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>Will my insurance cover hormone replacement therapy?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Insurance coverage for hormone replacement therapy varies widely by plan and method. Traditional injections and some creams may have partial coverage, while bioidentical hormone pellets are typically not covered by insurance as they're considered elective wellness treatments. However, initial consultations, lab work, and medical evaluations are often covered. We recommend contacting your insurance provider for specific coverage details. At Encompass Wellness and Aesthetics, we provide all necessary documentation and coding to help you maximize any available benefits, and we offer flexible payment options to make treatment accessible.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                <span>What happens if I experience side effects with my chosen delivery method?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Side effects are typically mild and often indicate the need for dosage adjustment rather than a problem with the delivery method itself. With injections and creams, dosage can be adjusted immediately at your next dose. With pellets, while the pellet itself cannot be removed, symptoms can be managed through complementary treatments or adjustments to other medications while you wait for the pellet to naturally absorb. This is why we start conservatively with pellet dosing and monitor labs closely. At Encompass Wellness and Aesthetics in Edmond, we provide ongoing support and are always available to address concerns and make adjustments to ensure your comfort and optimal results.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation at Encompass Wellness and Aesthetics in Edmond to determine which hormone delivery method is right for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Schedule Your Consultation
          </a>
          <p className="text-white/80 mt-6 text-sm">
            Serving Edmond, OK and surrounding communities
          </p>
        </div>
      </section>
    </main>
  )
}