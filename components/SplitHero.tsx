import Image from 'next/image'
import HeroParallax from '@/components/HeroParallax'

/**
 * The site's hero treatment, in one place so every page composites identically.
 *
 *   >= lg  one continuous photograph spanning the whole hero, with a teal
 *          overlay across the left that fades out over a long EASED ramp. A
 *          straight linear alpha ramp shows up as a visible band, hence the
 *          hand-placed stops.
 *   <  lg  the photo sits on top and bleeds down into the colour through the
 *          same kind of long feather, then the copy sits on solid colour and
 *          needs no scrim at all.
 *
 * The photo layer starts at `imageInset` rather than 0 so the subject sits to
 * the right of the copy, clear of the transition. object-position cannot do
 * this on its own: at most viewports the photo is width-constrained by
 * `cover`, so there is no horizontal overflow to shift along. The strip that
 * exposes on the left is under the fully opaque part of the overlay.
 */
const TEAL = '61,100,99' // --color-dark

const OVERLAY_X =
  `linear-gradient(90deg,` +
  `rgb(${TEAL}) 0%,` +
  `rgb(${TEAL}) 34%,` +
  `rgba(${TEAL},0.93) 42%,` +
  `rgba(${TEAL},0.78) 48%,` +
  `rgba(${TEAL},0.55) 54%,` +
  `rgba(${TEAL},0.32) 59%,` +
  `rgba(${TEAL},0.14) 64%,` +
  `rgba(${TEAL},0.04) 69%,` +
  `rgba(${TEAL},0) 74%)`

const FEATHER_Y =
  `linear-gradient(180deg,` +
  `rgba(${TEAL},0) 0%,` +
  `rgba(${TEAL},0.08) 22%,` +
  `rgba(${TEAL},0.24) 38%,` +
  `rgba(${TEAL},0.48) 54%,` +
  `rgba(${TEAL},0.74) 70%,` +
  `rgba(${TEAL},0.92) 84%,` +
  `rgb(${TEAL}) 100%)`

export default function SplitHero({
  src,
  alt,
  size = 'page',
  objectPosition = 'object-[52%_top]',
  mobileObjectPosition = 'object-[58%_top]',
  children,
}: {
  src: string
  alt: string
  /** 'full' for the homepage, 'page' for interior pages. */
  size?: 'full' | 'page'
  objectPosition?: string
  mobileObjectPosition?: string
  children: React.ReactNode
}) {
  const full = size === 'full'

  return (
    <section className="relative text-white bg-[var(--color-dark)] overflow-hidden">
      {/* lg+: the photograph behind everything, pushed right of the copy */}
      <div className="hidden lg:block absolute inset-y-0 right-0 left-[16%] xl:left-[14%]">
        <HeroParallax src={src} alt="" speed={0.16} className={objectPosition} />
      </div>
      <div
        className="hidden lg:block absolute inset-0"
        style={{ background: OVERLAY_X }}
      />

      <div className={`relative ${full ? 'lg:min-h-[72vh]' : 'lg:min-h-[54vh]'}`}>
        {/* Photo on top, phones and tablets */}
        <div
          className={`relative w-full lg:hidden overflow-hidden ${
            full ? 'h-[42vh] min-h-[300px]' : 'h-[34vh] min-h-[250px]'
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`object-cover ${mobileObjectPosition}`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 ${full ? 'h-56' : 'h-40'}`}
            style={{ background: FEATHER_Y }}
          />
        </div>

        {/* Copy — constrained to the left ~55% so it never runs into the
            subject, with the block right-aligned inside that column so it
            sits near the page's optical centre. */}
        <div
          className={`relative lg:grid lg:grid-cols-[55fr_45fr] ${
            full ? 'lg:min-h-[72vh]' : 'lg:min-h-[54vh]'
          }`}
        >
          <div className="flex items-center">
            <div
              className={`w-full lg:max-w-[34rem] xl:max-w-[38rem] lg:ml-auto px-6 lg:pr-10 xl:pr-14 ${
                full ? 'pt-8 pb-16 lg:py-16' : 'pt-10 pb-16 lg:py-24'
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
