import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Read Your Body\'s Warning Signs | Encompass Wellness and Aesthetics',
  description: 'Learn to recognize the subtle signals your body sends when something isn\'t right. Expert guidance on identifying hormonal imbalances, metabolic changes, and health warning signs in Edmond, OK.',
  keywords: 'body warning signs, hormonal imbalance symptoms, metabolic health, health symptoms, fatigue causes, weight changes, hormone therapy Edmond OK',
  openGraph: {
    title: 'How to Read Your Body\'s Warning Signs',
    description: 'Learn to recognize the subtle signals your body sends when something isn\'t right.',
    type: 'article',
    publishedTime: '2025-01-15T08:00:00Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            How to Read Your Body's Warning Signs
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Encompass Wellness Clinical Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Your body is constantly communicating with you. Every day, it sends subtle signals—shifts in energy, changes in mood, unexplained aches, or disrupted sleep. Too often, we dismiss these messages as stress, aging, or simply "pushing through." But what if these weren't just inconveniences? What if your body was trying to tell you something important?
            </p>
            <p className="mb-6">
              Learning to recognize and interpret your body's warning signs isn't about becoming a hypochondriac or obsessing over every sensation. It's about developing a deeper awareness of what's normal for you and knowing when something has shifted. This skill can be the difference between catching a hormonal imbalance early or struggling with worsening symptoms for years.
            </p>
            <p>
              At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in helping patients decode these signals—particularly when they point to hormonal and metabolic imbalances. Here's what you need to know about listening to your body.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Language of Symptoms
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Symptoms are your body's primary language. They're not random—they're purposeful signals that something in your intricate biological system needs attention. The challenge is that many warning signs are non-specific, meaning they can indicate multiple underlying issues.
            </p>
            <p className="mb-6">
              Fatigue, for example, might stem from poor sleep, thyroid dysfunction, vitamin deficiencies, chronic stress, or hormonal imbalances. Weight changes could reflect metabolic shifts, insulin resistance, cortisol dysregulation, or thyroid problems. The key is recognizing patterns and paying attention to clusters of symptoms rather than isolated incidents.
            </p>
            <p>
              This is where keeping a symptom journal becomes invaluable. Track not just what you're experiencing, but when it happens, how severe it is, and what else is going on in your life. Over time, patterns emerge that help both you and your healthcare provider identify the root cause.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Common Warning Signs of Hormonal Imbalance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Hormones are chemical messengers that regulate virtually every system in your body—metabolism, mood, reproduction, sleep, appetite, and more. When they fall out of balance, the effects ripple throughout your entire system.
            </p>
            <p className="mb-6">
              Here are the most common warning signs that hormonal imbalance may be at play:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Persistent fatigue</strong> that doesn't improve with rest or sleep</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Unexplained weight gain or difficulty losing weight</strong> despite diet and exercise efforts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mood changes</strong> including irritability, anxiety, or depression</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep disturbances</strong> such as insomnia or waking frequently during the night</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Brain fog</strong> or difficulty concentrating and remembering things</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Changes in libido</strong> or sexual function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hair loss or thinning</strong>, brittle nails, or dry skin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Digestive issues</strong> including bloating, constipation, or irregular bowel movements</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Temperature sensitivity</strong> or hot flashes and night sweats</span>
              </li>
            </ul>
            <p>
              If you're experiencing several of these symptoms simultaneously or if they're interfering with your quality of life, it's time to seek professional evaluation. These aren't signs of weakness or simply getting older—they're legitimate biological signals that deserve attention.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Your symptoms aren't in your head—they're your body's way of asking for help. Learning to listen is the first step toward healing."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Metabolic Warning Signs to Watch For
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Your metabolism—the complex system that converts food into energy and regulates body processes—can also send clear warning signs when something is off. Metabolic dysfunction often develops gradually, making it easy to miss until symptoms become severe.
            </p>
            <p className="mb-6">
              Key metabolic warning signs include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Increased abdominal fat</strong>, especially if it seems disproportionate to your overall weight</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Energy crashes</strong> after meals, particularly carbohydrate-heavy ones</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Intense sugar or carbohydrate cravings</strong> that feel difficult to control</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Difficulty building or maintaining muscle mass</strong> despite exercise</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High blood pressure or cholesterol levels</strong> that have worsened over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Feeling constantly hungry</strong> even after eating adequate meals</span>
              </li>
            </ul>
            <p>
              These symptoms often point to insulin resistance, thyroid dysfunction, or other metabolic imbalances. Early intervention can prevent progression to more serious conditions like type 2 diabetes or metabolic syndrome.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            When Normal Becomes Not Normal
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              One of the biggest challenges in recognizing warning signs is that many symptoms develop so gradually that they start to feel normal. You might not remember what it felt like to wake up refreshed, think clearly, or maintain stable energy throughout the day.
            </p>
            <p className="mb-6">
              This normalization of dysfunction is particularly common with hormonal and metabolic issues. You might attribute your symptoms to aging, stress, or just "how life is now." But here's the truth: while some changes are natural with age, many symptoms we accept as inevitable are actually treatable.
            </p>
            <p className="mb-6">
              Ask yourself these questions:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do I wake up feeling rested, or do I need multiple alarms and still feel groggy?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Can I maintain steady energy throughout the day, or do I crash in the afternoon?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Is my mood generally stable, or do I experience unexplained irritability or sadness?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do I feel mentally sharp, or do I struggle with memory and focus?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Is my weight stable and responsive to lifestyle changes, or does it seem beyond my control?</span>
              </li>
            </ul>
            <p>
              If your honest answers reveal that you're not functioning at your best, it's worth investigating. What you've come to accept as your "new normal" might actually be a sign that your body needs support.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Taking Action on Warning Signs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Recognizing warning signs is only valuable if you act on them. Here's how to move forward when your body is sending signals:
            </p>
            <p className="mb-4">
              <strong>1. Document your symptoms.</strong> Keep a detailed log for at least two weeks, noting what you experience, when it happens, and any patterns you notice. Include information about your sleep, energy levels, mood, appetite, and physical sensations.
            </p>
            <p className="mb-4">
              <strong>2. Review your lifestyle factors.</strong> Honestly assess your sleep quality, stress levels, nutrition, exercise, and any recent life changes. These factors can either cause symptoms or exacerbate underlying issues.
            </p>
            <p className="mb-4">
              <strong>3. Seek specialized evaluation.</strong> Many primary care providers aren't trained to recognize subtle hormonal and metabolic imbalances. Consider consulting specialists who focus on hormone and metabolic medicine—they have the expertise and testing protocols to identify what others might miss.
            </p>
            <p className="mb-4">
              <strong>4. Advocate for comprehensive testing.</strong> Standard lab ranges often don't capture functional imbalances. Ask for thorough hormone panels, metabolic markers, and functional assessments that look at optimal ranges, not just "normal" ones.
            </p>
            <p className="mb-4">
              <strong>5. Be patient but persistent.</strong> Finding the root cause of complex symptoms takes time. If your first provider dismisses your concerns or tells you your labs are "fine" when you clearly don't feel fine, seek a second opinion.
            </p>
            <p>
              Remember: you know your body better than anyone else. If something feels off, trust that instinct. Your symptoms are valid, and you deserve answers and solutions.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Path to Feeling Like Yourself Again
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Once you've identified that something is off, the journey to wellness begins. For many people dealing with hormonal and metabolic imbalances, treatment can be life-changing. Patients often tell us they forgot what it felt like to have energy, mental clarity, stable moods, and a body that felt like their own.
            </p>
            <p className="mb-6">
              Modern hormone and metabolic medicine offers sophisticated solutions—from bioidentical hormone replacement therapy to metabolic optimization protocols, nutritional support, and lifestyle medicine. These approaches don't just mask symptoms; they address root causes and restore function.
            </p>
            <p>
              At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in helping patients decode their body's warning signs and create personalized treatment plans that restore balance. We understand that every patient is unique, and we take the time to listen, investigate thoroughly, and develop solutions tailored to your specific needs.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 my-12 text-center animate-fade-up">
            <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
              If your body has been sending warning signs and you're ready for answers, we're here to help. Don't wait until symptoms worsen or accept feeling less than your best as inevitable. Your body is asking for support—let's work together to provide it.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-accent-dark)] transition-all duration-300"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients in Edmond, OK achieve optimal wellness through evidence-based, personalized care.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Hormone Health
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Bioidentical Hormone Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how BHRT can restore balance and help you feel like yourself again.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Metabolic Health
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Metabolic Optimization: Beyond Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover how optimizing your metabolism improves energy, mood, and overall health.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Connection Between Hormones and Mental Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore the powerful link between hormonal balance and emotional well-being.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help you decode your body's signals and find lasting solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 animate-fade-up"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}