import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import SiteHeader from '@/components/SiteHeader'
import { withUtm } from '@/lib/shop-links'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  verification: { google: 'q7IiOCzR7myKYAxJ0RJQR0zFn9XbLCsoDKQZUSx6dpI' },
  metadataBase: new URL('https://encompassspa.com'),
  title: 'Encompass Wellness | Functional & Hormone Medicine in Edmond, OK',
  description: 'Encompass Wellness and Aesthetics partners with you in your healthcare journey to reverse disease and restore optimal health. Our functional medicine approach addresses hormonal imbalance, weight management, thyroid disorders, and age-related concerns through comprehensive, personalized care.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear()
  
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader />

        {children}

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12 text-center sm:text-left">
              <div>
                {/* Reversed logo: the "wellness and aesthetics" wordmark is near-black in
                    the standard file and disappears on the dark footer. */}
                <img src="/logo-light.png" alt="Encompass Wellness and Aesthetics" className="h-[5.5rem] w-auto mb-6 mx-auto sm:mx-0" />
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Functional and aesthetic care in Edmond, Oklahoma. We partner with you to get to
                  the root of your health issues, not just treat the symptoms.
                </p>
                <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                  Schedule a Consultation
                </a>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-8">
                  <a href="https://www.facebook.com/encompassedmond/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/encompassspa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-5">Care</h3>
                <ul className="space-y-3">
                  <li><a href="/services" className="text-white/80 hover:text-white transition-colors text-sm">Services</a></li>
                  <li><a href="/conditions" className="text-white/80 hover:text-white transition-colors text-sm">Conditions We Treat</a></li>
                  <li><a href="/technology" className="text-white/80 hover:text-white transition-colors text-sm">Our Technology</a></li>
                  <li><a href="/telehealth" className="text-white/80 hover:text-white transition-colors text-sm">Telehealth</a></li>
                  <li><a href="/locations" className="text-white/80 hover:text-white transition-colors text-sm">Areas We Serve</a></li>
                  <li><a href="/about" className="text-white/80 hover:text-white transition-colors text-sm">About Us</a></li>
                  <li><a href="/team" className="text-white/80 hover:text-white transition-colors text-sm">Our Team</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-5">Patients</h3>
                <ul className="space-y-3">
                  <li><a href="/new-patients" className="text-white/80 hover:text-white transition-colors text-sm">New Patients</a></li>
                  <li><a href="/patient-form-sms" className="text-white/80 hover:text-white transition-colors text-sm">Patient Form</a></li>
                  <li><a href="/insurance" className="text-white/80 hover:text-white transition-colors text-sm">Insurance</a></li>
                  <li><a href="/faq" className="text-white/80 hover:text-white transition-colors text-sm">FAQ</a></li>
                  <li><a href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">Blog</a></li>
                  <li><a href="/reviews" className="text-white/80 hover:text-white transition-colors text-sm">Reviews</a></li>
                  <li>
                    <a href={withUtm('https://store.encompassspa.com/', 'nav', 'footer')} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm">
                      Shop
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M17.5 6.5L10 14M16 13v5a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h5" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-5">Visit Us</h3>
                <address className="not-italic space-y-4 text-sm text-white/80">
                  <p>
                    <a href="https://maps.google.com/?q=2925+Astoria+Way,+Edmond,+OK+73034" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      2925 Astoria Way<br />Edmond, OK 73034
                    </a>
                  </p>
                  <p>
                    <a href="tel:+14052543000" className="text-base font-semibold text-white hover:text-[var(--color-sage)] transition-colors">
                      (405) 254-3000
                    </a>
                  </p>
                </address>

                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mt-8 mb-4">Office Hours</h3>
                <dl className="text-sm text-white/80 space-y-1.5">
                  <div className="flex justify-center sm:justify-between gap-3 sm:gap-4">
                    <dt>Monday</dt><dd className="text-white/60">8:00am &ndash; 3:00pm</dd>
                  </div>
                  <div className="flex justify-center sm:justify-between gap-3 sm:gap-4">
                    <dt>Tue &ndash; Thu</dt><dd className="text-white/60">8:00am &ndash; 5:00pm</dd>
                  </div>
                  <div className="flex justify-center sm:justify-between gap-3 sm:gap-4">
                    <dt>Friday</dt><dd className="text-white/60">8:00am &ndash; 3:00pm</dd>
                  </div>
                  <div className="flex justify-center sm:justify-between gap-3 sm:gap-4">
                    <dt>Sat &ndash; Sun</dt><dd className="text-white/60">Closed</dd>
                  </div>
                </dl>
                <p className="text-xs text-white/50 mt-3">Closed for lunch 12:00&ndash;1:00pm</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-xs text-white/60 mb-4 text-center sm:text-left">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 text-center sm:text-left">
                <p>© {currentYear} Encompass Wellness and Aesthetics</p>
                <p>
                  <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                  {' | '}
                  <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                  {' | '}
                  <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}