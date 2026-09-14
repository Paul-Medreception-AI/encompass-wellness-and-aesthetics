import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Adrenal Fatigue and Chronic Stress | Encompass Wellness and Aesthetics',
  description: 'Learn about adrenal fatigue, chronic stress, and how hormone imbalances affect your energy, mood, and overall health. Expert insights from Edmond, OK.',
  keywords: 'adrenal fatigue, chronic stress, cortisol, hormone balance, fatigue treatment, stress management, Edmond OK',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/90">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Hormone Health
          </div>

          {/* Title */}
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Adrenal Fatigue and Chronic Stress
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Aesthetics Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Do you wake up tired despite a full night's sleep? Do you rely on coffee just to make it through the afternoon? Do you feel overwhelmed, anxious, or unable to cope with everyday stressors that once seemed manageable? You're not alone—and you're not imagining it. Millions of Americans are living with the effects of chronic stress and adrenal dysfunction, often without realizing the root cause of their symptoms.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            In our fast-paced world, chronic stress has become normalized. But when stress becomes constant, your body's stress response system—led by the adrenal glands—can become overwhelmed. Understanding how chronic stress affects your hormones, energy, and overall health is the first step toward reclaiming your vitality.
          </p>

          {/* Section 1 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Are the Adrenal Glands?
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your adrenal glands are two small, triangular-shaped glands that sit atop your kidneys. Despite their modest size, they play a critical role in your overall health. The adrenals produce several vital hormones, including cortisol (your primary stress hormone), adrenaline, aldosterone, and even small amounts of sex hormones like DHEA.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Cortisol, in particular, is essential for regulating metabolism, immune response, blood pressure, and your sleep-wake cycle. In healthy amounts, cortisol helps you wake up in the morning, stay alert during the day, and wind down at night. But when stress becomes chronic, cortisol levels can become dysregulated—either staying elevated or eventually dropping too low—leading to a cascade of symptoms.
          </p>

          {/* Section 2 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Adrenal Fatigue?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            "Adrenal fatigue" is a term used to describe a collection of nonspecific symptoms—such as tiredness, trouble sleeping, brain fog, and salt or sugar cravings—that are thought to occur when the adrenal glands are overworked by prolonged stress. While not recognized as a distinct medical diagnosis by mainstream endocrinology, the symptoms are very real and often reflect underlying hormonal imbalances or HPA (hypothalamic-pituitary-adrenal) axis dysfunction.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Many functional and integrative medicine practitioners use the term "adrenal fatigue" to help patients understand that their fatigue and stress-related symptoms may be rooted in cortisol dysregulation. Whether you call it adrenal fatigue, HPA axis dysfunction, or chronic stress syndrome, the underlying issue is the same: your body's stress response system is out of balance.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant_Garamond',serif]">
            "Chronic stress doesn't just drain your energy—it disrupts your hormones, metabolism, immune function, and mental health. Addressing the root cause is essential for lasting wellness."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Symptoms of Adrenal Dysfunction and Chronic Stress
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The symptoms of adrenal dysfunction can vary widely from person to person, but they often include:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Persistent fatigue, even after adequate sleep</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Difficulty waking up in the morning, or needing caffeine to function</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Brain fog, trouble concentrating, or memory issues</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Difficulty handling stress or feeling easily overwhelmed</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cravings for salt, sugar, or stimulants</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Insomnia or poor sleep quality</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Low blood pressure or lightheadedness upon standing</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Frequent infections or slow recovery from illness</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Anxiety, irritability, or depression</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Weight gain, especially around the midsection</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            These symptoms often develop gradually and can be mistaken for other conditions, making it essential to work with a healthcare provider who understands the hormonal and metabolic aspects of stress.
          </p>

          {/* Section 4 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Science Behind Chronic Stress and Cortisol
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When you experience stress—whether physical, emotional, or psychological—your hypothalamus signals your pituitary gland, which then prompts your adrenal glands to release cortisol. This is known as the HPA axis, and it's designed to help you respond to short-term threats. Cortisol mobilizes energy, increases alertness, and temporarily suppresses non-essential functions like digestion and immune response.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The problem arises when stress becomes chronic. Constant work demands, financial pressures, relationship conflicts, poor sleep, and inflammatory diets can keep your HPA axis in overdrive. Over time, this can lead to:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Elevated cortisol levels:</strong> Leading to insomnia, anxiety, weight gain, and blood sugar imbalances</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Cortisol resistance:</strong> Where cells become less responsive to cortisol, similar to insulin resistance</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Low cortisol output:</strong> After prolonged stress, some people experience a drop in cortisol production, contributing to severe fatigue and difficulty recovering from stress</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Research shows that chronic stress and cortisol dysregulation are linked to a range of health issues, including metabolic syndrome, cardiovascular disease, autoimmune conditions, depression, and cognitive decline. Addressing stress and supporting adrenal health is not just about feeling better—it's about protecting your long-term health.
          </p>

          {/* Section 5 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is Most at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While anyone can experience the effects of chronic stress, certain groups are more vulnerable:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Healthcare workers, first responders, and caregivers</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Parents juggling work and family responsibilities</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Individuals with chronic health conditions or chronic pain</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Those with a history of trauma or PTSD</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>People with poor sleep habits or shift work schedules</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Women in perimenopause or menopause, when hormone fluctuations amplify stress responses</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What You Can Do: Practical Steps to Support Your Adrenals
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that with the right approach, you can support your adrenal health and restore balance to your stress response system. Here are evidence-based strategies:
          </p>

          <div className="bg-[var(--color-light)] rounded-xl p-8 mb-8">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-4">
              Lifestyle and Self-Care
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prioritize sleep:</strong> Aim for 7-9 hours per night with a consistent sleep schedule</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage blood sugar:</strong> Eat balanced meals with protein, healthy fats, and fiber to avoid energy crashes</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Practice stress management:</strong> Try mindfulness, meditation, yoga, or deep breathing exercises</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Move gently:</strong> Engage in moderate exercise like walking, swimming, or restorative yoga—avoid overtraining</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit caffeine and alcohol:</strong> Both can disrupt cortisol rhythms and sleep</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Build social support:</strong> Connection and community are powerful buffers against stress</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-light)] rounded-xl p-8 mb-8">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-4">
              Medical Support and Testing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Get tested:</strong> Salivary cortisol testing can assess your cortisol rhythm throughout the day</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Address nutrient deficiencies:</strong> Vitamin C, B vitamins, magnesium, and adaptogens like ashwagandha may support adrenal function</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Work with a specialist:</strong> Hormone and metabolic medicine providers can create personalized treatment plans</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Consider bioidentical hormone therapy:</strong> In some cases, hormone replacement may be appropriate</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Chronic stress and adrenal dysfunction are complex issues that require a comprehensive, individualized approach. If you're struggling with persistent fatigue, mood changes, or difficulty managing stress, don't dismiss your symptoms as "just stress" or "part of getting older." These are signals from your body that something is out of balance—and they deserve attention.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            At Encompass Wellness and Aesthetics in Edmond, OK, we specialize in hormone and metabolic medicine and understand the intricate connections between stress, hormones, and overall health. Our team is here to help you identify the root causes of your symptoms and develop a personalized plan to restore balance, energy, and well-being.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Hormone Health
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Thyroid Health: Why It Matters for Your Energy and Mood
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how thyroid dysfunction affects your metabolism, energy, and overall wellness.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Wellness
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Connection Between Hormones and Weight Loss
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover why hormone balance is essential for sustainable weight management.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  What to Expect: Your First Hormone Consultation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A step-by-step guide to preparing for your hormone health evaluation.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you restore balance, energy, and vitality.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}