import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions | Encompass Wellness',
  description: 'Common questions about functional medicine, hormone therapy, insurance, appointments and what to expect as a new patient at our Edmond, OK clinic.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>FAQ</span>
          </div>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Do you accept insurance?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              We are currently an out-of-network provider for most insurance plans. However, we can provide you with a superbill that you may submit to your insurance company for potential reimbursement. Many of our patients find that their HSA or FSA accounts can be used for services. We recommend contacting your insurance provider to understand your out-of-network benefits. Our focus on comprehensive, personalized care allows us to spend the necessary time with each patient without insurance restrictions.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Are you accepting new patients?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, we welcome new patients and look forward to partnering with you on your health journey. Our practice is designed to provide personalized attention to each individual, which means we carefully manage our patient load to ensure quality care. We encourage you to schedule your initial consultation as soon as possible to begin your path toward optimal health. Our team will guide you through the new patient process and answer any questions you may have about what to expect.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What should I expect during my first appointment?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Your initial consultation typically lasts 60-90 minutes and involves a comprehensive review of your health history, current symptoms, lifestyle factors, and health goals. We take time to understand your complete health picture, not just isolated symptoms. You'll discuss your concerns in detail with one of our board-certified providers who will perform a thorough assessment. Following this consultation, we'll order appropriate diagnostic testing which may include comprehensive blood work, hormone panels, and other specialized tests. This in-depth approach allows us to identify root causes and develop a truly personalized treatment plan.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>How long does it take to see results from hormone therapy?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              The timeline for experiencing benefits from hormone replacement therapy varies by individual and depends on factors such as your baseline hormone levels, the specific hormones being addressed, and your overall health status. Many patients report feeling initial improvements in energy, mood, and sleep within 2-4 weeks of starting treatment. More substantial changes in body composition, mental clarity, and overall vitality typically become evident within 3-6 months. We monitor your progress closely through follow-up appointments and lab work, adjusting your treatment plan as needed to optimize results. Patience and consistency are key, as hormonal balance is achieved gradually for lasting, sustainable improvements.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Do you offer telehealth appointments?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, we offer telehealth consultations for established patients and certain follow-up appointments. Virtual visits can be convenient for medication adjustments, reviewing lab results, discussing treatment progress, and addressing ongoing concerns. However, your initial consultation and certain assessments require an in-person visit to ensure we can conduct a thorough physical examination and establish the foundation for your personalized care plan. We'll work with you to determine which appointments can be conducted virtually and which require an office visit based on your specific needs and treatment protocol.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What types of hormone therapy do you offer?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              We specialize in bioidentical hormone replacement therapy for both men and women, addressing deficiencies in estrogen, progesterone, testosterone, thyroid hormones, and other key hormones. Our treatments include various delivery methods such as creams, troches, injections, and pellets, allowing us to customize the approach to your preferences and lifestyle. We work with specialized compounding pharmacies when needed to ensure precise dosing tailored to your individual requirements. Each treatment plan is based on comprehensive lab testing and ongoing monitoring to achieve optimal hormone balance safely and effectively.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What is functional medicine and how is it different from conventional care?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Functional medicine focuses on identifying and addressing the root causes of disease rather than simply managing symptoms. While conventional medicine often treats symptoms with medications, functional medicine investigates why those symptoms are occurring in the first place. We examine how various body systems interact, consider genetic predispositions, environmental factors, lifestyle choices, and nutritional status to develop comprehensive treatment plans. This approach allows us to not only alleviate symptoms but actually reverse disease processes and restore optimal health. We spend significantly more time with patients, use advanced diagnostic testing, and create personalized protocols that address the whole person, not just isolated symptoms.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>How much does treatment cost?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Treatment costs vary based on your individual needs, the complexity of your health concerns, and the specific services required. Initial consultations, diagnostic testing, treatment protocols, and follow-up visits are all priced separately. We provide transparent pricing information during your consultation and will discuss all costs before proceeding with any treatment plan. Many patients find that investing in functional medicine saves money long-term by addressing root causes rather than managing chronic symptoms indefinitely. We accept HSA and FSA accounts, and our team can provide detailed cost breakdowns and payment options to fit your budget while ensuring you receive the comprehensive care you need.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Do I need a referral to become a patient?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              No referral is necessary to schedule an appointment at Encompass Wellness and Aesthetics. You can contact us directly to begin your journey toward optimal health. However, if your insurance plan requires a referral for out-of-network providers and you plan to seek reimbursement, you may want to obtain one from your primary care physician. We encourage you to bring any relevant medical records, previous lab results, and current medication lists to your initial consultation. This information helps us develop a comprehensive understanding of your health history and create the most effective treatment plan for your needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What is your cancellation policy?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              We require 24-hour notice for appointment cancellations or rescheduling. This policy allows us to offer your appointment time to other patients who may be waiting for care. Late cancellations or missed appointments without proper notice may result in a cancellation fee. We understand that emergencies occur, and we'll work with you on a case-by-case basis when unexpected situations arise. For your convenience, we send appointment reminders via text or email to help you keep track of your scheduled visits. If you need to cancel or reschedule, please contact our office as soon as possible so we can accommodate both your needs and those of other patients.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Can you prescribe medications?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, our board-certified providers are licensed to prescribe medications as part of your comprehensive treatment plan. We prescribe bioidentical hormones, thyroid medications, nutritional supplements, and other pharmaceuticals when clinically appropriate. Our philosophy emphasizes using medications strategically alongside lifestyle modifications, nutritional therapy, and other interventions to address root causes. We work with both traditional pharmacies and specialized compounding pharmacies to ensure you receive the highest quality medications tailored to your specific needs. All prescriptions are carefully monitored and adjusted based on your response and follow-up lab testing to ensure safety and optimal outcomes.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>How often will I need follow-up appointments?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Follow-up appointment frequency depends on your individual treatment plan and health status. Initially, you may need more frequent visits—typically every 4-6 weeks—to monitor your response to treatment and make necessary adjustments. As your health improves and your treatment plan stabilizes, appointments may extend to every 3-6 months. During these visits, we review your progress, assess symptoms, order appropriate lab work, and refine your treatment protocol as needed. Regular monitoring is essential to achieving and maintaining optimal results, ensuring safety, and addressing any concerns that arise. Our goal is to provide consistent support throughout your entire health journey while respecting your time and schedule.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What lab tests do you typically order?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Our comprehensive diagnostic testing goes beyond standard lab work to include detailed hormone panels, thyroid function tests, metabolic markers, inflammatory markers, nutrient deficiency assessments, and advanced cardiovascular risk factors. Specific tests are customized based on your symptoms and health concerns but may include comprehensive metabolic panels, complete blood counts, sex hormones, thyroid hormones, cortisol, insulin, hemoglobin A1C, vitamin D, and other key markers. We use specialized laboratories that provide more detailed analysis than typical testing, allowing us to identify subtle imbalances before they become serious health issues. All test results are thoroughly reviewed with you, and we explain what each marker means for your health and treatment plan.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Do you treat men and women?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, we provide comprehensive functional medicine and hormone therapy services for both men and women. While hormonal challenges differ between sexes, our approach to identifying root causes and restoring optimal balance applies universally. For women, we address concerns such as menopause, perimenopause, PCOS, and hormonal imbalances affecting mood, weight, and energy. For men, we treat low testosterone, andropause, metabolic syndrome, and age-related hormonal decline. Our expertise extends to thyroid disorders, weight management, and metabolic issues that affect both men and women. Every patient receives individualized care based on their unique physiology, health goals, and life circumstances.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What if I'm already seeing other doctors?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              We welcome the opportunity to work collaboratively with your existing healthcare providers as part of your comprehensive care team. Our functional medicine approach often complements conventional medical care by addressing underlying issues that may not be the primary focus of traditional medicine. We encourage you to maintain relationships with your other physicians and can provide them with updates on your treatment progress if you wish. Please bring a list of all current medications, supplements, and contact information for your other providers to your initial consultation. Our goal is to ensure coordinated, comprehensive care that serves your best interests and helps you achieve optimal health outcomes.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Are your aesthetic services safe for people on hormone therapy?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, our aesthetic services can generally be safely combined with hormone replacement therapy. In fact, many of our patients enjoy addressing both internal health optimization and external appearance enhancement as part of their comprehensive wellness journey. Our providers have extensive knowledge of how hormones affect skin health, healing, and aesthetic outcomes. We carefully review your complete health profile and current treatments before recommending any aesthetic procedures to ensure safety and optimal results. Some aesthetic treatments may even complement hormone therapy by improving skin quality, stimulating collagen production, and enhancing overall appearance. We offer Pronox therapy for pain and anxiety relief during procedures to ensure your comfort throughout the treatment process.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>What should I do if I have a medical emergency?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room immediately. Our practice focuses on chronic disease management, prevention, and optimization rather than acute emergency care. For urgent but non-emergency concerns related to your treatment plan, please contact our office during business hours, and we will do our best to accommodate you as quickly as possible. We provide clear guidance on what symptoms warrant immediate attention versus those that can be addressed during regular office hours. Your safety is our top priority, and we want to ensure you receive the appropriate level of care for your specific situation.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>Can you help with weight loss if I've tried everything else?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              Yes, our comprehensive metabolic approach to weight loss addresses the underlying reasons why traditional diets and exercise programs may have failed. Weight management is rarely just about calories in versus calories out—hormonal imbalances, metabolic dysfunction, insulin resistance, thyroid issues, cortisol dysregulation, and nutritional deficiencies all play critical roles. We conduct thorough testing to identify these root causes and create a personalized plan that may include hormone optimization, nutritional therapy, metabolic support, and targeted supplementation. Our patients often succeed with our approach because we address the physiological barriers that have prevented weight loss in the past. You don't have to face this challenge alone—we partner with you every step of the way toward achieving sustainable, healthy weight loss and improved metabolic health.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center">
              <span>How quickly can I get an appointment?</span>
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
              We strive to accommodate new patients as quickly as possible while maintaining the quality and personalized attention that defines our practice. Appointment availability varies depending on current patient volume and provider schedules. We typically can schedule initial consultations within 1-3 weeks of your first contact. If you have urgent concerns, please let our scheduling team know, and we will do our best to accommodate you sooner. Once you're established as a patient, follow-up appointments are generally easier to schedule with shorter wait times. We value your time and work efficiently to provide timely access to care while ensuring each patient receives the comprehensive attention they deserve.
            </div>
          </details>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is here to help. Schedule a consultation to discuss your specific health concerns and learn how we can support your wellness journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-accent-dark)] transition-all duration-300"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}