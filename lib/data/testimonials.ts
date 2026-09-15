// Verbatim from the testimonials section of encompassspa.com/about-2.
// Names appear exactly as the practice published them.
//
// ⚠️ Do NOT add, edit or invent entries here. Patient testimonials on a medical
// site are governed by the FTC endorsement rules and state medical-board
// advertising rules — every quote must be one a real patient actually gave.
export type Testimonial = { quote: string; name: string }

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Encompass is AMAZING! The staff is so professional and they truly care about the health and wellbeing of the patients they serve! So great to have someone truly care about healing their patients from within and getting to the root of the problem.',
    name: 'Alisha',
  },
  {
    quote: 'Great place to improve your health above and beyond your typical physician.',
    name: 'Mike',
  },
  {
    quote:
      'My inflammation is now under control! They listen and care about your well being! Encompass Wellness is the best!',
    name: 'Ian',
  },
  { quote: 'Great place to buy high quality supplements!', name: 'Cecilia' },
]

// The practice's Google rating — 4.9 from 69 reviews, confirmed from their
// Google Business Profile 2026-09-14.
//
// ⚠️ Displayed visually only. Do NOT emit this as AggregateRating structured
// data: Google's guidelines disallow self-serving aggregate ratings for a
// LocalBusiness reviewing itself, and marking it up risks a manual action.
//
// Update reviewCount when the real number moves — never round it up.
export const GOOGLE_RATING = {
  rating: 4.9,
  reviewCount: 69,
  // Opens their listing in Maps, where the reviews live. A direct
  // "write a review" deep link needs their Place ID.
  url: 'https://www.google.com/maps/search/?api=1&query=Encompass+Wellness+and+Aesthetics+2925+Astoria+Way+Edmond+OK+73034',
}
