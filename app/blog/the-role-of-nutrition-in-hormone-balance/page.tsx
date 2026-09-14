import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Role of Nutrition in Hormone Balance | Encompass Wellness and Aesthetics',
  description: 'Discover how nutrition impacts hormone health and balance. Learn evidence-based dietary strategies to support your metabolic and hormonal wellness in Edmond, OK.',
  keywords: 'hormone balance, nutrition for hormones, hormone health diet, metabolic health, Edmond OK, hormone optimization',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
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
            The Role of Nutrition in Hormone Balance
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
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
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Have you ever wondered why you feel tired despite getting enough sleep, or why weight loss feels impossible no matter how hard you try? The answer might be hiding in plain sight—on your plate. Hormones, the chemical messengers that orchestrate nearly every function in your body, are profoundly influenced by what you eat. From thyroid function and insulin sensitivity to estrogen metabolism and cortisol regulation, nutrition plays a foundational role in keeping your hormonal symphony in tune.
            </p>
            <p>
              Understanding the connection between food and hormone health isn't just about counting calories or following the latest diet trend. It's about nourishing your body with the building blocks it needs to produce, regulate, and metabolize hormones effectively. Whether you're struggling with unexplained symptoms or simply want to optimize your wellness, learning how nutrition impacts hormone balance is a powerful step toward reclaiming your health.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            How Food Affects Your Hormones
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every bite you take sends signals throughout your body. Carbohydrates trigger insulin release to manage blood sugar. Proteins provide amino acids needed to synthesize hormones like thyroid hormone and melatonin. Fats serve as the raw materials for steroid hormones including estrogen, progesterone, testosterone, and cortisol. When your diet lacks essential nutrients or is dominated by processed foods, these delicate processes can be disrupted.
            </p>
            <p>
              Poor nutrition can lead to inflammation, blood sugar dysregulation, and nutrient deficiencies—all of which interfere with hormone production and signaling. On the other hand, a thoughtfully designed eating pattern can support optimal hormone function, reduce symptoms, and improve energy, mood, metabolism, and overall quality of life.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Hormones don't exist in isolation—they respond dynamically to the nutrients we provide, the stress we experience, and the choices we make every day."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Key Nutrients for Hormone Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Certain nutrients are particularly critical for maintaining hormonal balance. Deficiencies in even one of these can have cascading effects throughout your endocrine system.
            </p>
            
            <div className="space-y-4 ml-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Omega-3 Fatty Acids:</strong> Found in fatty fish, flaxseeds, and walnuts, omega-3s reduce inflammation and support cell membrane integrity, which is essential for hormone receptor function.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Vitamin D:</strong> Often called the "sunshine vitamin," vitamin D acts more like a hormone and is crucial for thyroid function, insulin sensitivity, and reproductive health.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Magnesium:</strong> This mineral supports over 300 enzymatic reactions, including those involved in blood sugar control and cortisol regulation. It's found in leafy greens, nuts, seeds, and whole grains.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>B Vitamins:</strong> B6, B12, and folate are essential for methylation—a process critical for hormone detoxification and neurotransmitter production.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Zinc and Selenium:</strong> These trace minerals are vital for thyroid hormone production and immune function, and can be found in shellfish, Brazil nuts, and organ meats.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Blood Sugar and Insulin: The Foundation of Hormone Balance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most powerful ways nutrition influences hormones is through blood sugar regulation. When you eat foods high in refined carbohydrates and sugar, your blood glucose spikes, prompting a surge of insulin. Over time, repeated spikes can lead to insulin resistance—a condition where your cells stop responding effectively to insulin.
            </p>
            <p className="mb-6">
              Insulin resistance doesn't just affect blood sugar—it disrupts the entire hormonal network. It can lead to elevated cortisol, imbalanced sex hormones, increased inflammation, and difficulty losing weight. Women with insulin resistance are at higher risk for polycystic ovary syndrome (PCOS), while men may experience low testosterone and metabolic dysfunction.
            </p>
            <p>
              Eating balanced meals with adequate protein, healthy fats, and fiber helps stabilize blood sugar, reduce insulin spikes, and restore hormonal harmony. Prioritizing whole foods over processed options is one of the most impactful changes you can make.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Supporting Detoxification and Estrogen Metabolism
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your liver plays a central role in hormone metabolism, particularly estrogen. After estrogen has done its job, the liver processes and packages it for elimination. If your liver is overburdened—due to poor diet, alcohol, toxins, or lack of key nutrients—estrogen can be reabsorbed into circulation, leading to estrogen dominance.
            </p>
            <p className="mb-6">
              Foods that support liver detoxification and healthy estrogen metabolism include cruciferous vegetables (broccoli, kale, Brussels sprouts), which contain indole-3-carbinol and sulforaphane; fiber-rich foods that bind excess hormones in the gut; and antioxidant-rich fruits and vegetables that reduce oxidative stress.
            </p>
            <p>
              Adequate hydration and limiting alcohol intake also support liver function and hormonal clearance. Your body is designed to detoxify naturally—you just need to give it the tools to do so effectively.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Practical Nutrition Strategies for Hormone Balance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Achieving hormone balance through nutrition doesn't require perfection—it requires consistency and intention. Here are evidence-based strategies you can start implementing today:
            </p>
            
            <div className="space-y-4 ml-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Prioritize Protein:</strong> Include a palm-sized portion of protein at every meal to support satiety, muscle maintenance, and hormone synthesis.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Eat Healthy Fats:</strong> Don't fear fat—embrace avocados, olive oil, nuts, seeds, and fatty fish to provide the building blocks for hormone production.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Load Up on Vegetables:</strong> Aim for a colorful variety to maximize antioxidant and phytonutrient intake, especially cruciferous and leafy greens.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Balance Your Plate:</strong> Combine protein, fat, and fiber with each meal to slow digestion and stabilize blood sugar.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Limit Processed Foods and Sugar:</strong> These contribute to inflammation, insulin resistance, and hormonal disruption.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Consider Targeted Supplementation:</strong> Work with a healthcare provider to identify and address specific nutrient deficiencies.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Mind Your Gut Health:</strong> A healthy microbiome supports hormone metabolism, inflammation control, and nutrient absorption. Include fermented foods and prebiotic fiber.
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While nutrition is a powerful tool, it's not a standalone solution for everyone. If you're experiencing persistent fatigue, weight gain, mood changes, sleep disturbances, or other symptoms of hormone imbalance, it's important to work with a qualified healthcare provider who specializes in hormone and metabolic medicine.
            </p>
            <p className="mb-6">
              Comprehensive hormone testing can identify specific imbalances, nutrient deficiencies, and metabolic dysfunction. From there, a personalized treatment plan—which may include nutrition optimization, lifestyle modifications, and medical interventions—can be developed to address your unique needs.
            </p>
            <p>
              You don't have to navigate this journey alone. At Encompass Wellness and Aesthetics in Edmond, OK, our team is dedicated to helping you uncover the root causes of your symptoms and restore balance through evidence-based, compassionate care.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The relationship between nutrition and hormone balance is intricate, powerful, and deeply personal. By nourishing your body with the nutrients it needs and making intentional choices that support your endocrine system, you can take meaningful steps toward greater energy, vitality, and well-being.
            </p>
            <p>
              If you're ready to explore how personalized nutrition and hormone optimization can transform your health, we invite you to connect with our team. Together, we'll create a path forward that honors your body, your story, and your goals.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">
              Written by the Encompass Wellness and Aesthetics Clinical Team
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              Board-certified providers specializing in Hormone & Metabolic Medicine
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
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Hormone Health
                </div>
                <h4 className="text-xl text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors mb-2 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Thyroid Function and Metabolism
                </h4>
                <p className="text-sm text-[var(--color-muted)] line-clamp-3">
                  Learn how thyroid hormones regulate metabolism, energy, and weight—and what to do when they're out of balance.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Wellness
                </div>
                <h4 className="text-xl text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors mb-2 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Stress Impacts Your Hormones
                </h4>
                <p className="text-sm text-[var(--color-muted)] line-clamp-3">
                  Chronic stress disrupts cortisol, thyroid, and reproductive hormones. Discover strategies to protect your endocrine system.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Treatment Options
                </div>
                <h4 className="text-xl text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors mb-2 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                  Bioidentical Hormone Replacement: What to Expect
                </h4>
                <p className="text-sm text-[var(--color-muted)] line-clamp-3">
                  Explore how bioidentical hormones can restore balance, relieve symptoms, and improve quality of life.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you achieve lasting hormone balance and metabolic wellness.
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