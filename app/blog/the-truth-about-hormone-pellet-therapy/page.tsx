import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/the-truth-about-hormone-pellet-therapy' },
  title: 'The Truth About Hormone Pellet Therapy | Encompass Wellness',
  description: 'Discover the facts about hormone pellet therapy, how it works, who benefits, and what to expect. Evidence-based insights from our Hormone & Metabolic Medicine experts in Edmond, OK.',
  openGraph: {
    title: 'The Truth About Hormone Pellet Therapy',
    description: 'Evidence-based insights on hormone pellet therapy from board-certified providers specializing in Hormone & Metabolic Medicine.',
    url: 'https://encompassspa.com/blog/the-truth-about-hormone-pellet-therapy',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Truth About Hormone Pellet Therapy
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>February 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Encompass Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              You've heard about hormone pellet therapy from a friend, seen advertisements online, or perhaps your healthcare provider mentioned it as a treatment option. But what exactly is it, and more importantly, is it right for you? In a landscape filled with misconceptions and marketing hype, it's crucial to understand the real science behind hormone pellet therapy—what it can do, what it can't, and who truly benefits from this approach.
            </p>
            <p className="mb-6">
              Hormone imbalances affect millions of people, causing symptoms that range from frustrating to debilitating: chronic fatigue, weight gain, mood swings, low libido, brain fog, and more. While hormone replacement therapy (HRT) has been used successfully for decades, pellet therapy represents a specific delivery method that offers unique advantages—and considerations—worth understanding.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Hormone Pellet Therapy?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Hormone pellet therapy involves the insertion of small, rice-sized pellets containing bioidentical hormones—typically testosterone or estradiol—beneath the skin, usually in the hip or buttock area. These pellets are compounded from plant-derived sources and are molecularly identical to the hormones naturally produced by your body.
            </p>
            <p className="mb-6">
              Once inserted through a simple, minimally invasive procedure, the pellets release a consistent, steady dose of hormones over three to six months. This differs significantly from other HRT methods like pills, patches, or creams, which can cause hormonal fluctuations throughout the day or week.
            </p>
            <p className="mb-6">
              The pellets dissolve completely over time, leaving no residue, and the procedure itself takes only a few minutes in an outpatient setting. Most patients report minimal discomfort and can return to normal activities within a day or two.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Benefits from Pellet Therapy?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Hormone pellet therapy can be transformative for the right candidates. Research shows that both men and women experiencing hormone deficiency can benefit, though the symptoms and hormones involved differ.
            </p>
            <p className="mb-6">
              <strong>Women</strong> experiencing perimenopause or menopause often struggle with hot flashes, night sweats, vaginal dryness, decreased libido, mood disturbances, and sleep disruption. Pellet therapy with estradiol (and sometimes testosterone) can provide consistent relief without the daily burden of remembering pills or applying creams.
            </p>
            <p className="mb-6">
              <strong>Men</strong> with low testosterone (hypogonadism) may experience fatigue, reduced muscle mass, increased body fat, erectile dysfunction, decreased motivation, and cognitive changes. Testosterone pellets offer a steady state of hormone levels, avoiding the peaks and valleys associated with injections.
            </p>
            <p className="mb-6">
              Ideal candidates are those who have documented hormone deficiencies through lab testing, have not responded well to other HRT methods, or prefer a low-maintenance treatment option that doesn't require daily or weekly administration.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "The goal of hormone therapy isn't just to eliminate symptoms—it's to restore your body's natural balance and help you reclaim your quality of life."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Evidence Behind Pellet Therapy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While hormone replacement therapy in general has been extensively studied, pellet therapy specifically has a growing body of research supporting its efficacy and safety. Studies have demonstrated that pellet therapy provides more consistent blood hormone levels compared to other delivery methods, which may translate to better symptom control and fewer side effects.
            </p>
            <p className="mb-6">
              A 2019 review published in <em>Maturitas</em> found that testosterone pellet therapy in postmenopausal women significantly improved sexual function, mood, and energy levels. Similarly, research in men has shown that testosterone pellets effectively restore hormone levels, improve body composition, and enhance overall well-being.
            </p>
            <p className="mb-6">
              It's important to note that hormone therapy—regardless of delivery method—should be individualized based on comprehensive lab work, medical history, and ongoing monitoring. Pellet therapy is not a one-size-fits-all solution, and dosing must be carefully calibrated to each person's unique needs.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect: The Pellet Therapy Process
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding what happens before, during, and after pellet insertion can help set realistic expectations and ensure the best outcomes.
            </p>
            
            <div className="my-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Initial Consultation
              </h3>
              <p className="ml-7">
                Your provider will review your symptoms, medical history, and comprehensive hormone lab work to determine if pellet therapy is appropriate.
              </p>
            </div>

            <div className="my-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The Insertion Procedure
              </h3>
              <p className="ml-7">
                After numbing the area with local anesthesia, a small incision (about 3-5mm) is made, and pellets are inserted using a specialized device. The incision is closed with surgical tape or a single stitch.
              </p>
            </div>

            <div className="my-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recovery and Results
              </h3>
              <p className="ml-7">
                Most patients feel some improvement within 7-10 days, with full effects realized by 4-6 weeks. Avoid strenuous activity for a few days and keep the insertion site clean and dry.
              </p>
            </div>

            <div className="my-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Follow-Up and Monitoring
              </h3>
              <p className="ml-7">
                Regular lab work and clinical check-ins ensure your hormone levels remain optimal and dosing is adjusted as needed for subsequent insertions.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Potential Risks and Considerations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Like any medical treatment, hormone pellet therapy carries some risks and isn't suitable for everyone. Minor side effects at the insertion site—such as bruising, swelling, or discomfort—are common but typically resolve quickly.
            </p>
            <p className="mb-6">
              In rare cases, pellets can be expelled by the body or cause infection. Hormonal side effects, such as acne, hair changes, or mood fluctuations, can occur if dosing isn't properly calibrated, which is why ongoing monitoring is essential.
            </p>
            <p className="mb-6">
              Certain medical conditions—such as hormone-sensitive cancers, uncontrolled cardiovascular disease, or blood clotting disorders—may contraindicate pellet therapy. A thorough medical evaluation is critical before beginning treatment.
            </p>
            <p className="mb-6">
              It's also important to work with a provider experienced in pellet therapy who uses high-quality, compounded bioidentical hormones and follows evidence-based protocols.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Is Pellet Therapy Right for You?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Choosing the right hormone replacement method is a deeply personal decision that should be made in partnership with a qualified healthcare provider. Pellet therapy offers distinct advantages—consistent hormone levels, convenience, and fewer fluctuations—but it's not the best choice for everyone.
            </p>
            <p className="mb-6">
              Consider pellet therapy if you value a low-maintenance approach, have struggled with compliance or side effects from other HRT methods, or prefer steady hormone delivery over several months. However, if you require frequent dose adjustments, prefer more control over your treatment, or have contraindications, other HRT options may be more appropriate.
            </p>
            <p className="mb-6">
              The truth about hormone pellet therapy is that it's neither a miracle cure nor a risky experiment—it's a well-researched, effective tool in the broader landscape of hormone optimization. When used appropriately, under expert guidance, and with proper monitoring, it can significantly improve quality of life for those experiencing hormone deficiency.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 p-6 bg-[var(--color-cream)] rounded-lg animate-fade-up">
            <p className="mb-4">
              If you're experiencing symptoms of hormone imbalance and are curious whether pellet therapy might be right for you, the next step is a comprehensive consultation with a provider specializing in hormone and metabolic medicine. At Encompass Wellness and Aesthetics in Edmond, OK, our team is dedicated to personalized, evidence-based care that addresses your unique needs and goals.
            </p>
            <p>
              <a href="/contact" className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors font-semibold">Contact us today</a> to schedule your consultation and take the first step toward reclaiming your vitality and well-being.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Encompass Wellness and Aesthetics Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to evidence-based care and patient education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Hormone Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Bioidentical Hormones
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn the difference between bioidentical and synthetic hormones and why it matters for your treatment.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Energy & Vitality</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  5 Signs Your Hormones Are Out of Balance
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Recognize the key symptoms that may indicate hormone imbalance and when to seek help.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect at Your First Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A complete guide to preparing for and what happens during your hormone therapy consultation.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-up"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}