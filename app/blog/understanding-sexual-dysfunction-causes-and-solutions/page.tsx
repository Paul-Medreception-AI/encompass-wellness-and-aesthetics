import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/understanding-sexual-dysfunction-causes-and-solutions' },
  title: 'Understanding Sexual Dysfunction: Causes and Solutions',
  description: 'Learn about the causes of sexual dysfunction and evidence-based solutions. Expert insights from Encompass Wellness and Aesthetics in Edmond, OK.',
  openGraph: {
    title: 'Understanding Sexual Dysfunction: Causes and Solutions',
    description: 'Learn about the causes of sexual dysfunction and evidence-based solutions. Expert insights from Encompass Wellness and Aesthetics in Edmond, OK.',
    url: 'https://encompassspa.com/blog/understanding-sexual-dysfunction-causes-and-solutions',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/60">Article</span>
          </nav>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Sexual Dysfunction: Causes and Solutions
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Sexual health is a vital component of overall well-being, yet it remains one of the most challenging topics for many individuals to discuss—even with their healthcare providers. Sexual dysfunction affects millions of people across all ages, genders, and backgrounds, yet shame and stigma often prevent individuals from seeking the help they need and deserve.
            </p>
            <p className="mb-6">
              The reality is that sexual dysfunction is far more common than most people realize. Studies suggest that approximately 40-45% of women and 20-30% of men experience some form of sexual difficulty during their lifetime. These challenges can significantly impact quality of life, relationships, self-esteem, and emotional well-being. The good news? Most forms of sexual dysfunction are treatable with the right approach and support.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Sexual Dysfunction?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Sexual dysfunction refers to a persistent problem that prevents an individual or couple from experiencing satisfaction during sexual activity. It can occur at any stage of the sexual response cycle—desire, arousal, plateau, orgasm, or resolution—and may manifest in various ways depending on the underlying cause.
            </p>
            <p className="mb-6">
              Common types of sexual dysfunction include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Low libido or lack of sexual desire:</strong> Reduced interest in sexual activity that causes personal distress</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Erectile dysfunction:</strong> Difficulty achieving or maintaining an erection sufficient for sexual activity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Arousal difficulties:</strong> Problems with physical arousal or lubrication despite desire</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Orgasmic disorders:</strong> Delayed, absent, or reduced intensity of orgasm</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Premature ejaculation:</strong> Ejaculation that occurs sooner than desired</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pain during intercourse:</strong> Discomfort or pain before, during, or after sexual activity</span>
              </li>
            </ul>
            <p className="mb-6">
              It's important to note that occasional sexual difficulties are normal and don't necessarily indicate dysfunction. Sexual dysfunction is typically diagnosed when problems persist for several months and cause significant distress or interpersonal difficulties.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Causes of Sexual Dysfunction
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Sexual dysfunction rarely has a single cause. Instead, it typically results from a complex interplay of physical, psychological, and relational factors. Understanding these underlying causes is the first step toward finding effective solutions.
            </p>
            <p className="mb-4">
              <strong className="text-lg">Physical and Medical Factors:</strong>
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Hormonal imbalances:</strong> Low testosterone, estrogen, progesterone, or thyroid hormones can significantly impact sexual desire and function</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Chronic medical conditions:</strong> Diabetes, cardiovascular disease, neurological disorders, and chronic pain can interfere with sexual response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Medications:</strong> Antidepressants, blood pressure medications, and other prescriptions may have sexual side effects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Age-related changes:</strong> Menopause, andropause, and natural aging processes affect sexual function</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Substance use:</strong> Alcohol, tobacco, and recreational drugs can impair sexual performance</span>
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-lg">Psychological and Emotional Factors:</strong>
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Mental health conditions:</strong> Depression, anxiety, and trauma can diminish sexual desire and function</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Stress and fatigue:</strong> Work pressures, financial concerns, and exhaustion leave little energy for intimacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Body image concerns:</strong> Negative self-perception can interfere with sexual confidence and enjoyment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span><strong>Past trauma:</strong> Sexual abuse or negative sexual experiences can create lasting difficulties</span>
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-lg">Relationship Factors:</strong>
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Communication problems between partners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Unresolved conflicts or resentment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Differences in sexual desire or preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span>Lack of emotional intimacy or connection</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Sexual health is not just about physical function—it's deeply connected to hormonal balance, emotional well-being, and relationship quality. Addressing all these dimensions is key to finding lasting solutions."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Role of Hormones in Sexual Function
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Hormones play a foundational role in sexual desire, arousal, and performance. When hormones are out of balance, sexual function often suffers—regardless of emotional readiness or relationship quality. This is why hormone and metabolic medicine has become increasingly important in treating sexual dysfunction.
            </p>
            <p className="mb-6">
              <strong>Testosterone</strong> is essential for libido in all genders. Low testosterone levels can lead to decreased sexual desire, reduced arousal, and difficulties with orgasm. In men, testosterone also directly affects erectile function. Testosterone naturally declines with age, but other factors—including stress, obesity, sleep disorders, and certain medical conditions—can accelerate this decline.
            </p>
            <p className="mb-6">
              <strong>Estrogen</strong> is crucial for vaginal health, lubrication, and blood flow to sexual organs. During perimenopause and menopause, declining estrogen levels can cause vaginal dryness, thinning of vaginal tissues, and discomfort during intercourse. These physical changes can significantly impact sexual enjoyment and desire.
            </p>
            <p className="mb-6">
              <strong>Thyroid hormones</strong> regulate metabolism and energy levels throughout the body, including sexual tissues. Both hypothyroidism and hyperthyroidism can negatively affect libido and sexual function.
            </p>
            <p className="mb-6">
              <strong>Cortisol,</strong> the stress hormone, can suppress sex hormones when chronically elevated. This is one reason why chronic stress is so detrimental to sexual health.
            </p>
            <p className="mb-6">
              Comprehensive hormone testing can identify imbalances that may be contributing to sexual dysfunction. When appropriate, hormone replacement therapy or other interventions to restore hormonal balance can produce dramatic improvements in sexual function and quality of life.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence-Based Treatment Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The good news is that effective treatments exist for most types of sexual dysfunction. The key is identifying the underlying causes and addressing them with a comprehensive, personalized approach.
            </p>
            <p className="mb-4">
              <strong className="text-lg">Medical Treatments:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hormone replacement therapy:</strong> Bioidentical or synthetic hormones can restore balance and improve sexual function when deficiencies are identified</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medications:</strong> FDA-approved medications for erectile dysfunction, premature ejaculation, or low libido may be appropriate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Treatment of underlying conditions:</strong> Managing diabetes, cardiovascular disease, or depression often improves sexual function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medication adjustments:</strong> Switching or adjusting medications that cause sexual side effects</span>
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-lg">Psychological and Behavioral Interventions:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sex therapy:</strong> Specialized counseling focused on sexual concerns and techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cognitive-behavioral therapy:</strong> Addressing negative thought patterns and anxiety related to sexual performance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Couples therapy:</strong> Improving communication and emotional intimacy between partners</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mindfulness and relaxation techniques:</strong> Reducing performance anxiety and increasing present-moment awareness</span>
              </li>
            </ul>
            <p className="mb-4">
              <strong className="text-lg">Lifestyle Modifications:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Regular exercise:</strong> Improves cardiovascular health, boosts mood, and increases testosterone</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nutrition optimization:</strong> A balanced diet supports hormone production and vascular health</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stress management:</strong> Meditation, yoga, and other stress-reduction practices</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep improvement:</strong> Quality sleep is essential for hormone production and sexual function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limiting alcohol and quitting smoking:</strong> Both substances negatively impact sexual function</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're experiencing sexual dysfunction, you don't have to suffer in silence or try to manage it alone. Professional help can make a significant difference, especially when:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sexual difficulties persist for more than a few months</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The problem is causing significant distress or relationship strain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're avoiding intimacy due to fear or embarrassment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You notice sudden or unexplained changes in sexual function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You experience pain during sexual activity</span>
              </li>
            </ul>
            <p className="mb-6">
              A provider who specializes in hormone and metabolic medicine can conduct comprehensive testing to identify hormonal imbalances, metabolic issues, or other medical factors contributing to sexual dysfunction. They can also coordinate care with mental health professionals and other specialists when needed.
            </p>
            <p className="mb-6">
              Remember: sexual health is an important component of overall health and quality of life. Seeking help is a sign of strength, not weakness. With the right support and treatment, most people can achieve significant improvements in their sexual function and satisfaction.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-6 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Sexual dysfunction is a complex issue that deserves compassionate, comprehensive care. Whether the causes are hormonal, physical, psychological, or a combination of factors, effective treatments are available. If you're struggling with sexual dysfunction in Edmond, OK, our team at Encompass Wellness and Aesthetics specializes in hormone and metabolic medicine approaches that address the root causes of sexual health concerns. We provide confidential, evidence-based care in a supportive, non-judgmental environment. You deserve to enjoy a fulfilling intimate life—and we're here to help you achieve that goal.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Hormone & Metabolic Medicine
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article Card 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.7 1.7a2.25 2.25 0 01-3.182 0l-1.595-1.595a9.06 9.06 0 01-5.656 0l-1.595 1.595a2.25 2.25 0 01-3.182 0l-1.7-1.7c-1.232-1.232-1.232-3.233 0-4.465l1.402-1.402M5 14.5V3.75A2.25 2.25 0 017.25 1.5h9.5A2.25 2.25 0 0119 3.75V14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 font-semibold">
                  Hormone Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Connection Between Hormones and Mental Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Discover how hormonal imbalances can affect mood, anxiety, and cognitive function.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article Card 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 font-semibold">
                  Wellness
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  5 Lifestyle Changes That Support Healthy Hormone Levels
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  Simple, evidence-based strategies to optimize your hormonal health naturally.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article Card 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 font-semibold">
                  Patient Education
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect During Your First Hormone Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">
                  A comprehensive guide to help you prepare for your initial visit.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you address your sexual health concerns with compassion and expertise.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}