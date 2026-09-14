import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/blog/what-to-expect-from-your-first-functional-medicine-appointme' },
  title: 'What to Expect from Your First Functional Medicine Appointment',
  description: 'Learn what happens during your first functional medicine appointment, how to prepare, and what makes this approach different from conventional medicine. Expert guidance from Encompass Wellness and Aesthetics in Edmond, OK.',
  keywords: 'functional medicine appointment, first visit functional medicine, functional medicine Edmond OK, integrative medicine consultation, hormone therapy consultation, metabolic medicine appointment',
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
          <h1 className="font-serif text-5xl font-light leading-tight text-center mb-8">
            What to Expect from Your First Functional Medicine Appointment
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
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
              <span>8 min read</span>
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
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6 text-lg">
              You've made the decision to explore functional medicine—a significant step toward understanding and addressing the root causes of your health concerns. But as your first appointment approaches, you might be wondering: what exactly happens during a functional medicine visit? How is it different from a typical doctor's appointment? And how should you prepare?
            </p>
            
            <p className="mb-6">
              If you've spent years cycling through brief appointments, temporary fixes, and medications that mask symptoms without addressing underlying issues, a functional medicine consultation will likely feel refreshingly different. At Encompass Wellness and Aesthetics in Edmond, OK, we take time to truly understand your health story, investigate the interconnected systems of your body, and develop personalized treatment plans that target the root causes of dysfunction.
            </p>
            
            <p className="mb-6">
              Here's what you can expect from your first functional medicine appointment—and how to make the most of this important initial visit.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            A Longer, More Comprehensive Appointment
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6">
              Perhaps the most noticeable difference between functional medicine and conventional care is time. While traditional medical appointments often last 15-20 minutes, your first functional medicine consultation typically runs 60-90 minutes or longer.
            </p>
            
            <p className="mb-6">
              This extended time allows your provider to conduct a thorough review of your health history, current symptoms, lifestyle factors, environmental exposures, stress levels, sleep patterns, nutrition, and more. In functional medicine, we recognize that your symptoms don't exist in isolation—they're interconnected pieces of a larger puzzle.
            </p>
            
            <p className="mb-6">
              During this initial visit, your provider will ask detailed questions about:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your chief concerns and how long you've been experiencing symptoms</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your complete medical history, including childhood illnesses and past diagnoses</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family health history and genetic predispositions</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Current medications, supplements, and previous treatments</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diet, exercise habits, and sleep quality</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Stress levels, emotional health, and life circumstances</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Environmental exposures and occupational factors</span>
              </li>
            </ul>
            
            <p className="mb-6">
              This holistic approach recognizes that hormones, metabolism, gut health, immune function, and mental well-being are all interconnected. By understanding the full context of your health, we can identify patterns and connections that may have been overlooked.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif animate-fade-up">
            "In functional medicine, we don't just treat symptoms—we investigate why those symptoms developed in the first place and address the underlying imbalances."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Comprehensive Laboratory Testing
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6">
              Functional medicine relies heavily on advanced diagnostic testing to uncover imbalances that standard lab work often misses. Your provider may order comprehensive panels that go far beyond basic blood work.
            </p>
            
            <p className="mb-6">
              Common functional medicine tests include:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Comprehensive hormone panels</strong> measuring not just basic levels but metabolites and ratios that reveal how your body produces, uses, and eliminates hormones</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Advanced thyroid testing</strong> including TSH, Free T3, Free T4, Reverse T3, and thyroid antibodies</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nutrient assessments</strong> evaluating vitamins, minerals, amino acids, and fatty acids</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Inflammatory markers</strong> like high-sensitivity C-reactive protein and homocysteine</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Metabolic markers</strong> including insulin, glucose, and hemoglobin A1c</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Digestive function tests</strong> assessing gut health, microbiome balance, and absorption</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Adrenal and stress hormone testing</strong> including cortisol patterns throughout the day</span>
              </li>
            </ul>
            
            <p className="mb-6">
              These tests provide a detailed picture of what's happening inside your body at a cellular and biochemical level. The results guide personalized treatment strategies designed specifically for your unique physiology.
            </p>
            
            <p className="mb-6">
              At Encompass Wellness and Aesthetics, we specialize in hormone and metabolic medicine, so our testing protocols are particularly comprehensive in these areas. We look at optimal ranges, not just "normal" ranges, to identify dysfunction before it progresses to disease.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Personalized Treatment Plans
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6">
              Based on your consultation and test results, your provider will develop a personalized treatment plan that addresses root causes rather than simply suppressing symptoms.
            </p>
            
            <p className="mb-6">
              Your treatment plan may include:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Bioidentical hormone replacement therapy</strong> when hormonal imbalances are identified</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nutritional interventions</strong> including therapeutic diets, meal planning guidance, and food sensitivity elimination</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Targeted supplementation</strong> to address specific nutrient deficiencies or support particular body systems</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lifestyle modifications</strong> addressing sleep, stress management, exercise, and toxin exposure</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medications when appropriate</strong> prescribed judiciously to support healing while addressing root causes</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Unlike one-size-fits-all protocols, functional medicine recognizes that each person is biochemically unique. Your treatment plan is tailored to your specific imbalances, genetics, lifestyle, and health goals.
            </p>
            
            <p className="mb-6">
              Your provider will also establish a timeline for follow-up visits to monitor your progress, adjust treatments as needed, and conduct additional testing. Functional medicine is a process—it takes time to uncover and address complex, chronic issues that may have developed over years or decades.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            How to Prepare for Your First Appointment
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6">
              To make the most of your initial functional medicine consultation, come prepared with:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Complete medical records</strong> including previous lab results, imaging reports, and specialist notes</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>A detailed list of current symptoms</strong> including when they started, what makes them better or worse, and how they affect your daily life</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>All medications and supplements</strong> with dosages (or bring the actual bottles)</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>A timeline of your health history</strong> noting major illnesses, surgeries, injuries, and life events</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Questions and concerns</strong> written down so you don't forget anything important</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Your health goals</strong> both short-term and long-term</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Many functional medicine practices, including Encompass Wellness and Aesthetics, send comprehensive intake forms before your appointment. Fill these out thoroughly—the more information you provide, the better your provider can understand your unique situation.
            </p>
            
            <p className="mb-6">
              Consider keeping a symptom journal for a week or two before your appointment, tracking energy levels, digestive symptoms, sleep quality, mood, and any other relevant patterns. This data can be invaluable in identifying triggers and correlations.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Collaborative Partnership Model
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6">
              In functional medicine, you're not a passive recipient of care—you're an active partner in your healing journey. Your provider will educate you about how your body works, what's causing your symptoms, and why specific treatments are recommended.
            </p>
            
            <p className="mb-6">
              This educational approach empowers you to make informed decisions about your health. You'll learn to recognize patterns, understand your body's signals, and implement lifestyle changes that support long-term wellness.
            </p>
            
            <p className="mb-6">
              Expect your provider to:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Listen carefully and validate your experiences</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Explain the science behind your symptoms and treatment recommendations</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Present options and discuss the pros and cons of different approaches</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Respect your preferences, values, and life circumstances</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Support you with realistic, achievable steps rather than overwhelming you with changes</span>
              </li>
            </ul>
            
            <p className="mb-6">
              This partnership approach recognizes that sustainable health transformation requires your active participation. Your provider guides and supports you, but you're the one implementing changes in your daily life.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            What Happens After Your First Visit
          </h2>
          
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="mb-6">
              After your initial consultation, you'll typically complete any recommended lab work. Once results are available, you'll have a follow-up appointment to review findings and finalize your treatment plan.
            </p>
            
            <p className="mb-6">
              Your provider will explain your lab results in detail, showing you where imbalances exist and how they connect to your symptoms. This isn't just a list of numbers—it's a roadmap for healing.
            </p>
            
            <p className="mb-6">
              Ongoing care typically includes:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Regular follow-up visits to monitor progress (frequency depends on your condition)</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Periodic retesting to track improvements and adjust treatments</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Ongoing support and education as you implement lifestyle changes</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Adjustments to your treatment plan based on your response and evolving needs</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Remember, functional medicine is a process. Some people experience dramatic improvements quickly, while others need months of consistent treatment to see significant changes. Complex, chronic conditions that developed over years typically require patience and persistence to resolve.
            </p>
            
            <p className="mb-6">
              At Encompass Wellness and Aesthetics in Edmond, OK, our specialized focus on hormone and metabolic medicine means we have deep expertise in these complex, interconnected systems. We understand the nuances of hormonal balance, metabolic dysfunction, and how these factors affect every aspect of your health—from energy and weight to mood and cognitive function.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 animate-fade-up">
            <p className="mb-6">
              Your first functional medicine appointment marks the beginning of a transformative health journey. By investigating root causes, addressing underlying imbalances, and developing personalized treatment strategies, functional medicine offers hope for people who've struggled with chronic symptoms and unsatisfying answers from conventional care.
            </p>
            
            <p className="mb-6">
              If you're tired of symptom management and ready to discover why you're not feeling your best, functional medicine may be the answer you've been searching for. The comprehensive, personalized approach addresses your unique biology and life circumstances, supporting true healing rather than temporary fixes.
            </p>
            
            <p className="mb-6 text-lg font-medium">
              Ready to experience the functional medicine difference? Contact Encompass Wellness and Aesthetics in Edmond, OK to schedule your comprehensive initial consultation. Our team specializes in hormone and metabolic medicine, offering expert care that addresses the root causes of your health concerns.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-[var(--color-ink)] mb-1">Written by the Encompass Wellness and Aesthetics Clinical Team</div>
              <div className="text-sm text-[var(--color-muted)]">Board-certified providers specializing in Hormone & Metabolic Medicine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402m-5.43-5.43l-1.402 1.402c-1.232 1.232-3.233 1.232-4.465 0l-1.402-1.402" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Bioidentical Hormone Replacement Therapy</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn how BHRT can restore hormonal balance and improve quality of life.</p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Signs Your Metabolism Needs Support</h4>
                <p className="text-[var(--color-muted)] text-sm">Recognize the warning signs of metabolic dysfunction and what to do about it.</p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The Gut-Hormone Connection</h4>
                <p className="text-[var(--color-muted)] text-sm">Discover how digestive health impacts hormonal balance and overall wellness.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4 animate-fade-up">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90 animate-fade-up">Our team is here to help you discover the root causes of your health concerns and develop a personalized path to wellness.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 animate-fade-up">
            Schedule Your Consultation
          </a>
        </div>
      </section>

    </main>
  )
}