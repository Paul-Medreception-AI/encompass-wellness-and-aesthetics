import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Perimenopause: The Transition Years | Encompass Wellness and Aesthetics',
  description: 'Learn about perimenopause symptoms, stages, and treatment options. Expert insights from Edmond\'s hormone specialists on navigating this natural transition with confidence.',
  keywords: 'perimenopause, menopause transition, hormone changes, perimenopause symptoms, hormone therapy Edmond OK',
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
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Perimenopause: The Transition Years
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness and Aesthetics Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You've started noticing changes. Your periods are becoming unpredictable—sometimes arriving early, sometimes late, occasionally skipping altogether. Sleep doesn't come as easily as it once did. Your energy levels fluctuate in ways you can't quite explain. You might feel like yourself one day and completely off-balance the next. If this sounds familiar, you're not alone. You may be experiencing perimenopause, the natural transition that precedes menopause—and understanding what's happening in your body is the first step toward navigating this phase with confidence.
            </p>
            <p>
              Perimenopause is often called "the change before the change," but for many women, it's more than just a prelude—it's a significant life stage that can last several years and profoundly impact daily life. Yet despite affecting every woman who reaches midlife, perimenopause remains surprisingly misunderstood and under-discussed. Let's change that.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Perimenopause?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Perimenopause literally means "around menopause"—it's the transitional period when your body begins its natural shift from reproductive to non-reproductive years. During this time, your ovaries gradually produce less estrogen and progesterone, the two primary female hormones that regulate your menstrual cycle and affect numerous other body systems.
            </p>
            <p className="mb-6">
              This transition typically begins in a woman's 40s, though it can start as early as the mid-30s or as late as the early 50s. The average duration is four years, but some women experience perimenopause for just a few months while others navigate it for up to a decade. You're officially considered to have reached menopause when you've gone 12 consecutive months without a period—everything before that final period is perimenopause.
            </p>
            <p>
              What makes perimenopause particularly challenging is its unpredictability. Unlike puberty, which follows a fairly predictable progression, perimenopause can feel like a hormonal rollercoaster with dramatic fluctuations from month to month or even week to week.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Signs and Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Perimenopause affects every woman differently, but certain symptoms are remarkably common. The hallmark sign is menstrual irregularity—your cycle may become shorter or longer, heavier or lighter, and less predictable. You might skip periods entirely, only to have them return weeks or months later.
            </p>
            <p className="mb-6">
              Beyond menstrual changes, many women experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hot flashes and night sweats:</strong> Sudden feelings of intense heat, often accompanied by sweating and flushing, particularly disruptive to sleep</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep disturbances:</strong> Difficulty falling asleep or staying asleep, even without night sweats</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mood changes:</strong> Increased irritability, anxiety, or feelings of sadness that seem to come out of nowhere</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive changes:</strong> Brain fog, difficulty concentrating, and memory lapses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical changes:</strong> Weight gain (particularly around the midsection), decreased libido, vaginal dryness, and changes in skin and hair</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Energy fluctuations:</strong> Periods of fatigue that don't improve with rest</span>
              </li>
            </ul>
            <p>
              It's important to note that experiencing these symptoms doesn't necessarily mean you're in perimenopause—they can overlap with other health conditions, including thyroid disorders, which is why professional evaluation is essential.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            "Understanding that perimenopause is a natural transition—not a disease—empowers women to seek support and make informed decisions about their health during this pivotal time."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Science Behind the Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              To understand why perimenopause causes such varied symptoms, it helps to understand what's happening hormonally. Your ovaries contain a finite number of follicles (egg-containing structures), and as you age, both the quantity and quality of these follicles decline. This triggers irregular ovulation and fluctuating hormone levels.
            </p>
            <p className="mb-6">
              Estrogen doesn't simply decline in a steady, predictable fashion during perimenopause—it fluctuates wildly. Some months your levels might be higher than they were in your 20s; other months they plummet. Progesterone, which is produced after ovulation, also becomes erratic as ovulation becomes less consistent. It's these fluctuations, rather than low levels alone, that cause many perimenopausal symptoms.
            </p>
            <p>
              Additionally, estrogen receptors exist throughout your body—not just in reproductive organs, but in your brain, bones, skin, cardiovascular system, and more. This explains why declining and fluctuating estrogen affects so many body systems simultaneously, from mood and cognition to metabolism and bone density.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While perimenopause is a natural process, that doesn't mean you have to suffer through it or that your symptoms aren't worthy of medical attention. You should consider consulting a healthcare provider specializing in hormone health if:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your symptoms are significantly impacting your quality of life, work performance, or relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You experience heavy or prolonged bleeding (soaking through protection hourly, bleeding lasting more than 7 days, or bleeding between periods)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're experiencing mood changes that feel unmanageable or concerning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You have questions about hormone therapy or other treatment options</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You want to discuss strategies for protecting long-term health (bone density, cardiovascular health) during and after the transition</span>
              </li>
            </ul>
            <p>
              A provider specializing in hormone and metabolic medicine can offer comprehensive evaluation, including hormone level testing when appropriate, and create a personalized treatment plan that addresses your specific symptoms and health goals.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Treatment and Management Options
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that numerous evidence-based approaches can help manage perimenopausal symptoms. Treatment is highly individualized and may include:
            </p>
            <p className="mb-6">
              <strong>Hormone Therapy:</strong> For many women, hormone replacement therapy (HRT) remains the most effective treatment for moderate to severe symptoms. Modern hormone therapy is safer and more personalized than ever, with various delivery methods (pills, patches, creams) and formulations available. The decision to use hormone therapy involves weighing benefits against individual risk factors.
            </p>
            <p className="mb-6">
              <strong>Lifestyle Modifications:</strong> Regular exercise, stress management, adequate sleep hygiene, maintaining a healthy weight, and dietary adjustments can all help manage symptoms. While lifestyle changes alone may not eliminate symptoms, they form an essential foundation for overall wellbeing.
            </p>
            <p className="mb-6">
              <strong>Non-Hormonal Medications:</strong> For women who cannot or prefer not to use hormone therapy, certain antidepressants, blood pressure medications, and other pharmaceuticals can help manage specific symptoms like hot flashes.
            </p>
            <p>
              <strong>Complementary Approaches:</strong> Some women find relief through acupuncture, cognitive behavioral therapy, or certain supplements, though evidence varies in quality and strength.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Moving Forward with Confidence
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Perimenopause represents a significant transition, but it doesn't have to be a time of suffering or confusion. Understanding what's happening in your body, recognizing that your symptoms are real and valid, and knowing that effective treatments exist are all empowering first steps.
            </p>
            <p className="mb-6">
              This is also an opportunity to prioritize your health in new ways—to establish healthy habits that will serve you well in the decades ahead, to advocate for yourself in medical settings, and to connect with other women navigating similar experiences.
            </p>
            <p>
              If you're experiencing symptoms that concern you or impact your quality of life, don't hesitate to seek professional support. You deserve to feel like yourself again, and specialized care can make all the difference in navigating this transition with greater ease and confidence. At Encompass Wellness and Aesthetics, our team specializes in hormone and metabolic medicine, helping women in Edmond, OK understand their bodies and find personalized solutions for their unique needs.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients navigate life transitions with personalized, evidence-based care.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Hormone Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Bioidentical Hormone Therapy: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore the benefits, safety, and science behind bioidentical hormone replacement therapy for women.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Wellness</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Sleep and Hormones: The Essential Connection
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how hormone changes affect sleep quality and what you can do to improve rest during perimenopause.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Metabolic Changes in Midlife: What to Expect
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how metabolism shifts during perimenopause and strategies to maintain healthy weight and energy.
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
          <p className="text-xl mb-8 text-white/90 font-light">
            Our team is here to help you navigate perimenopause with personalized care and evidence-based solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}