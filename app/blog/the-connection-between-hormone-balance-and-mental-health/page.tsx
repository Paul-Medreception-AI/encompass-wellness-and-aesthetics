import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Connection Between Hormone Balance and Mental Health | Encompass Wellness and Aesthetics',
  description: 'Discover how hormone imbalances affect mood, anxiety, and depression. Learn evidence-based strategies for restoring hormone balance and improving mental health in Edmond, OK.',
  keywords: 'hormone balance, mental health, anxiety, depression, mood disorders, hormone therapy, Edmond OK',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-['Cormorant',serif] text-5xl font-light leading-tight mb-6">
            The Connection Between Hormone Balance and Mental Health
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
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Hook */}
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          If you've been struggling with unexplained anxiety, persistent low mood, or overwhelming fatigue despite getting enough sleep, the answer may not lie solely in your mind—it could be in your hormones. The intricate connection between hormone balance and mental health is one of the most overlooked aspects of whole-person wellness, yet it plays a profound role in how we think, feel, and experience the world around us.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Hormones are the body's chemical messengers, orchestrating everything from metabolism and immune function to mood regulation and cognitive performance. When these delicate systems fall out of balance, the effects can ripple through every aspect of your mental and emotional well-being. Understanding this connection is the first step toward reclaiming your vitality and peace of mind.
        </p>

        {/* Section 1 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          How Hormones Influence Mental Health
        </h2>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Several key hormones directly impact brain chemistry and emotional regulation. Cortisol, often called the "stress hormone," helps us respond to challenges—but chronic elevation can lead to anxiety, irritability, and difficulty concentrating. Thyroid hormones regulate metabolism and energy production; when levels are too low, depression and brain fog often follow. Estrogen and progesterone fluctuations in women can trigger mood swings, premenstrual dysphoria, and postpartum depression. Testosterone affects confidence, motivation, and mood in both men and women.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          These hormones don't work in isolation. They interact with neurotransmitters like serotonin, dopamine, and GABA—the brain chemicals responsible for feelings of happiness, motivation, and calm. When hormone levels shift, neurotransmitter production and receptor sensitivity can change too, creating a cascade of mental health symptoms that may be misattributed to purely psychological causes.
        </p>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant',serif]">
          "Mental health and hormone health are inseparable. Addressing one without the other means missing half the picture."
        </blockquote>

        {/* Section 2 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Common Hormone-Related Mental Health Symptoms
        </h2>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Recognizing the signs of hormone-driven mental health challenges is crucial for getting the right help. While everyone's experience is unique, certain patterns frequently emerge when hormones are out of balance.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-[var(--color-ink)] leading-loose">
              <strong>Persistent low mood or depression</strong> despite lifestyle changes or therapy
            </p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-[var(--color-ink)] leading-loose">
              <strong>Anxiety or panic attacks</strong> that seem to come out of nowhere
            </p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-[var(--color-ink)] leading-loose">
              <strong>Brain fog and difficulty concentrating</strong> that interferes with daily tasks
            </p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-[var(--color-ink)] leading-loose">
              <strong>Irritability or emotional volatility</strong> that feels out of character
            </p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-[var(--color-ink)] leading-loose">
              <strong>Sleep disturbances</strong> including insomnia or non-restorative sleep
            </p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-[var(--color-ink)] leading-loose">
              <strong>Loss of motivation or interest</strong> in activities you once enjoyed
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Who Is Most Affected?
        </h2>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          While hormone-related mental health challenges can affect anyone at any age, certain populations are particularly vulnerable. Women experiencing perimenopause and menopause often report increased anxiety and depression as estrogen levels decline. New mothers may struggle with postpartum mood disorders linked to rapid hormonal shifts after delivery. Men over 40 may notice mood changes as testosterone naturally decreases with age.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          People with thyroid disorders, polycystic ovary syndrome (PCOS), or adrenal dysfunction are also at higher risk for hormone-driven mental health symptoms. Additionally, chronic stress, poor sleep, nutritional deficiencies, and certain medications can all disrupt hormone balance and contribute to emotional difficulties. The good news is that with proper evaluation and treatment, these symptoms are often highly responsive to intervention.
        </p>

        {/* Section 4 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          The Evidence: What Research Shows
        </h2>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Decades of scientific research confirm the profound link between hormones and mental health. Studies have shown that women with low estrogen levels are at significantly higher risk for depression and anxiety. Research published in the Journal of Clinical Endocrinology & Metabolism found that thyroid hormone replacement improved mood and cognitive function in patients with subclinical hypothyroidism. Testosterone therapy has been shown to reduce depressive symptoms in men with low levels.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Cortisol dysregulation—whether chronically elevated or abnormally low—has been consistently linked to anxiety disorders, post-traumatic stress disorder, and major depression. Emerging research also highlights the role of insulin resistance and metabolic dysfunction in mood disorders, suggesting that metabolic medicine approaches may offer new pathways for mental health treatment. These findings underscore the importance of comprehensive hormone evaluation when addressing mental health concerns.
        </p>

        {/* Section 5 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          Restoring Balance: A Holistic Approach
        </h2>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Addressing hormone-related mental health challenges requires a comprehensive, individualized approach. The first step is thorough testing to identify specific imbalances—this may include evaluating thyroid function, sex hormones, cortisol patterns, and metabolic markers. Once imbalances are identified, treatment may involve bioidentical hormone replacement therapy, thyroid medication, lifestyle modifications, nutritional support, and stress management strategies.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Lifestyle factors play a critical supporting role. Prioritizing sleep, managing stress through mindfulness or therapy, eating a nutrient-dense diet, engaging in regular physical activity, and limiting alcohol and caffeine can all support hormone balance and mental wellness. It's important to work with providers who understand the intricate connections between hormones, metabolism, and mental health—rather than treating symptoms in isolation.
        </p>

        {/* Section 6 */}
        <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
          When to Seek Professional Help
        </h2>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          If you've been experiencing persistent mood changes, anxiety, or cognitive symptoms that don't improve with conventional treatments, it may be time to explore the hormone connection. This is especially important if your symptoms coincide with life stages associated with hormonal change—such as perimenopause, postpartum, or andropause—or if you have a known endocrine disorder.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          A hormone and metabolic medicine specialist can conduct comprehensive testing, interpret results in the context of your symptoms and history, and develop a personalized treatment plan. Many patients report dramatic improvements in mood, energy, and quality of life once underlying hormone imbalances are addressed. You don't have to navigate this alone—help is available, and you deserve to feel like yourself again.
        </p>

        {/* Closing */}
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-12">
          The connection between hormone balance and mental health is real, powerful, and often overlooked. By recognizing the signs, seeking comprehensive evaluation, and working with providers who understand this vital link, you can take meaningful steps toward reclaiming your mental and emotional well-being. If you're in Edmond, OK, and struggling with symptoms that may be hormone-related, our team at Encompass Wellness and Aesthetics is here to help you find answers and restore balance.
        </p>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-['Cormorant',serif] text-2xl text-[var(--color-ink)] mb-2">
                Written by the Encompass Wellness and Aesthetics Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Hormone & Metabolic Medicine, dedicated to helping patients achieve optimal wellness through evidence-based, personalized care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.227 0 4.459l-1.448 1.448a3.182 3.182 0 01-4.5 0l-1.448-1.448a3.182 3.182 0 010-4.5l1.448-1.448z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Bioidentical Hormone Therapy
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how bioidentical hormones differ from synthetic options and whether they might be right for you.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Thyroid Health and Weight Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover the often-overlooked connection between thyroid function and your ability to maintain a healthy weight.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Stress for Hormone Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore practical strategies for reducing chronic stress and supporting your body's natural hormone balance.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help you restore balance and reclaim your well-being.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}