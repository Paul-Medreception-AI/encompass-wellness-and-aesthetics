import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bioidentical vs. Synthetic Hormones: Understanding the Difference | Encompass Wellness and Aesthetics',
  description: 'Learn the key differences between bioidentical and synthetic hormones, their benefits, risks, and which option may be right for your hormone therapy in Edmond, OK.',
  keywords: 'bioidentical hormones, synthetic hormones, hormone replacement therapy, HRT, BHRT, hormone therapy Edmond OK, bioidentical hormone therapy',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Bioidentical vs. Synthetic Hormones: Understanding the Difference
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When your doctor mentions hormone replacement therapy, you're immediately faced with an important decision: bioidentical or synthetic hormones? It's a question that matters deeply—these hormones will interact with nearly every cell in your body, influencing everything from your energy levels and mood to your bone density and cardiovascular health. Yet the terminology can feel confusing, the research overwhelming, and the stakes undeniably high.
            </p>
            <p className="mb-6">
              You deserve clear, evidence-based information to make an informed choice about your health. Let's explore what truly distinguishes bioidentical hormones from their synthetic counterparts, examine the science behind each option, and help you understand which approach might align best with your body's unique needs.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What Are Bioidentical Hormones?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Bioidentical hormones are compounds that have the exact same molecular structure as the hormones naturally produced by your body. Derived from plant sources like yams and soy, these hormones are processed in laboratories to match your body's estrogen, progesterone, testosterone, and other hormones molecule-for-molecule.
            </p>
            <p className="mb-6">
              This structural identity means that when a bioidentical hormone enters your bloodstream, your cells recognize it as identical to what your body would produce on its own. The hormone receptors throughout your tissues—in your brain, bones, heart, and elsewhere—interact with bioidentical hormones in the same way they would with your naturally-produced hormones.
            </p>
            <p className="mb-6">
              Bioidentical hormone replacement therapy (BHRT) can be prescribed in standardized, FDA-approved formulations, or custom-compounded by specialized pharmacies to meet individual dosing needs. This flexibility allows providers to tailor treatment precisely to each patient's hormone levels and symptoms.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Synthetic Hormones
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Synthetic hormones, by contrast, are intentionally designed with molecular structures that differ from your body's natural hormones. Pharmaceutical companies alter the chemical structure to create compounds that can be patented—you cannot patent a naturally-occurring molecule like bioidentical estradiol, but you can patent a modified version.
            </p>
            <p className="mb-6">
              Common synthetic hormones include conjugated equine estrogens (derived from pregnant mare urine), medroxyprogesterone acetate (a synthetic progestin), and ethinyl estradiol (used in most birth control pills). While these compounds can activate hormone receptors and produce therapeutic effects, their altered structures mean your body processes them differently than natural hormones.
            </p>
            <p className="mb-6">
              This difference isn't inherently negative—synthetic hormones have been used successfully for decades and remain appropriate for many patients. However, the molecular variations can lead to different effects, side effect profiles, and risks compared to bioidentical options.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The key distinction lies not in marketing or philosophy, but in chemistry: bioidentical hormones match your body's molecular blueprint exactly, while synthetic versions are intentionally different."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Clinical Evidence: What Research Shows
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The Women's Health Initiative (WHI) study in 2002 raised significant concerns about hormone replacement therapy when it found increased risks of breast cancer, heart disease, and stroke among women taking synthetic hormones (specifically Premarin and Provera). This landmark study changed medical practice overnight and left millions of women confused about hormone therapy.
            </p>
            <p className="mb-6">
              However, subsequent research has revealed important nuances. Studies specifically examining bioidentical estradiol and progesterone have shown different risk profiles than the synthetic hormones used in the WHI. French research following over 80,000 women found that bioidentical progesterone was not associated with increased breast cancer risk, while synthetic progestins were.
            </p>
            <p className="mb-6">
              Bioidentical hormones may offer advantages in several areas:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Cardiovascular health:</strong> Bioidentical estradiol appears more favorable for lipid profiles and may carry lower cardiovascular risk when initiated during the perimenopausal window</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Breast tissue:</strong> Bioidentical progesterone demonstrates a more neutral effect on breast tissue compared to synthetic progestins</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Mood and cognition:</strong> Many patients report better mood stability and mental clarity with bioidentical hormones</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Metabolic effects:</strong> Bioidentical hormones may have more favorable impacts on insulin sensitivity and weight management</span>
              </li>
            </ul>
            <p className="mb-6">
              It's important to note that "bioidentical" doesn't automatically mean "safer" in all contexts. The safety of any hormone therapy depends on proper dosing, delivery method, timing of initiation, and individual patient factors. Both bioidentical and synthetic hormones require medical supervision and individualized treatment plans.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Benefits Most from Each Approach?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              <strong>Bioidentical hormones may be particularly beneficial for:</strong>
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Women experiencing perimenopause or menopause who want the most physiologically natural hormone replacement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Patients who have experienced side effects from synthetic hormones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Those with personal or family history of breast cancer (when hormone therapy is appropriate, bioidentical options may be preferred)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Individuals seeking customized dosing based on lab testing and symptom response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Men with testosterone deficiency looking for physiologically identical replacement</span>
              </li>
            </ul>
            <p className="mb-6">
              <strong>Synthetic hormones may remain appropriate for:</strong>
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Birth control purposes, where specific synthetic formulations are designed for contraception</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Patients who have found a synthetic hormone regimen that works well without side effects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Situations where insurance coverage is limited and cost is a primary concern</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-primary)] mt-1">•</span>
                <span>Certain medical conditions where specific synthetic formulations have established protocols</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Practical Considerations: Delivery Methods and Monitoring
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Both bioidentical and synthetic hormones come in various delivery methods, each with advantages:
            </p>
            <p className="mb-6">
              <strong>Transdermal (creams, gels, patches):</strong> Often preferred for estrogen and progesterone because they bypass first-pass liver metabolism, potentially reducing risks of blood clots and allowing more stable hormone levels throughout the day.
            </p>
            <p className="mb-6">
              <strong>Oral (pills, capsules):</strong> Convenient and familiar, though oral estrogen does increase clotting factors. Micronized bioidentical progesterone taken orally can also promote sleep.
            </p>
            <p className="mb-6">
              <strong>Pellet implants:</strong> Provide steady hormone release for 3-6 months, eliminating daily dosing but offering less flexibility for dose adjustments.
            </p>
            <p className="mb-6">
              <strong>Injections:</strong> Common for testosterone replacement in men, providing predictable dosing with weekly to bi-weekly administration.
            </p>
            <p className="mb-6">
              Regardless of which hormone type you choose, successful hormone therapy requires proper monitoring. This includes baseline and follow-up lab testing, symptom tracking, and regular clinical evaluation. The goal is achieving hormonal balance at the lowest effective dose—enough to resolve symptoms and protect long-term health, but not excessive levels that increase risk.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Making Your Decision: Questions to Ask Your Provider
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Choosing between bioidentical and synthetic hormones should be a collaborative decision between you and a qualified provider specializing in hormone health. Consider asking:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>What are the specific bioidentical and synthetic options available for my situation?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Based on my health history and risk factors, which approach do you recommend and why?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>What delivery method would work best for my lifestyle and health goals?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>How will we monitor my hormone levels and adjust treatment over time?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>What results should I expect, and what timeline is realistic for improvement?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Are there lifestyle factors or supplements that would enhance my results?</span>
              </li>
            </ul>
            <p className="mb-6">
              Remember that hormone therapy is not one-size-fits-all. Your treatment should be personalized based on your symptoms, lab values, health history, and how you respond to therapy. The "best" option is the one that safely and effectively restores your quality of life.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Understanding the difference between bioidentical and synthetic hormones empowers you to have meaningful conversations with your healthcare provider and make informed decisions about your treatment. While bioidentical hormones offer the advantage of molecular identity with your body's natural hormones, the right choice depends on your individual circumstances, health goals, and how you respond to treatment.
            </p>
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, our team specializes in hormone and metabolic medicine with a focus on personalized, evidence-based care. We believe in taking the time to understand your unique situation, thoroughly explaining your options, and partnering with you to optimize your hormonal health for the long term.
            </p>
            <p>
              If you're experiencing symptoms of hormonal imbalance or want to explore whether bioidentical hormone therapy might be right for you, we're here to help. Your journey to hormonal balance and improved quality of life begins with expert guidance and compassionate care.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
              Written by the Encompass Wellness and Aesthetics Clinical Team
            </div>
            <div className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Hormone & Metabolic Medicine in Edmond, OK
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-center mb-12 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Signs You May Have Hormonal Imbalance
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn to recognize the common symptoms of hormone imbalance and when to seek professional evaluation.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Treatment Guide
                </div>
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect: Your First Hormone Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  A comprehensive guide to preparing for and understanding your hormone therapy evaluation.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Wellness
                </div>
                <h4 className="text-xl mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Lifestyle Strategies to Support Hormone Balance
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover evidence-based nutrition, exercise, and stress management approaches to optimize your hormones.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand your hormone health and explore personalized treatment options.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}