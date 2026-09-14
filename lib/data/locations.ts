// Locations served by the Edmond, OK clinic at 2925 Astoria Way.
// These are real, drivable Oklahoma City metro communities — the practice's own
// men's-sexual-health page already markets to "Edmond & Oklahoma City".
export type LocationContent = {
  slug: string
  city: string
  state: string
  stateName: string
  driveTime: string
  direction: string
  intro: string
  neighborhoods: string[]
}

export const CLINIC = {
  name: 'Encompass Wellness and Aesthetics',
  street: '2925 Astoria Way',
  city: 'Edmond',
  state: 'OK',
  zip: '73034',
  phone: '(405) 254-3000',
  phoneHref: 'tel:+14052543000',
}

export const LOCATIONS: LocationContent[] = [
  {
    slug: 'oklahoma-city-ok',
    city: 'Oklahoma City',
    state: 'OK',
    stateName: 'Oklahoma',
    driveTime: 'about 20 minutes',
    direction: 'north via I-35 or Broadway Extension',
    intro:
      'Our Edmond clinic sits just north of Oklahoma City, and a large share of our patients make the short drive up from OKC for functional medicine, hormone therapy and aesthetics. If you have been bounced between specialists without anyone looking at the whole picture, that drive is usually the shortest part of the process.',
    neighborhoods: ['Nichols Hills', 'The Village', 'Quail Creek', 'Deer Creek', 'Britton', 'Memorial'],
  },
  {
    slug: 'norman-ok',
    city: 'Norman',
    state: 'OK',
    stateName: 'Oklahoma',
    driveTime: 'about 45 minutes',
    direction: 'north via I-35',
    intro:
      'Norman patients travel to Encompass for a root-cause approach that is hard to find closer to home. Because much of functional medicine is lab-driven, we can often structure your care so the in-person visits are concentrated up front and follow-up is handled efficiently.',
    neighborhoods: ['Downtown Norman', 'West Norman', 'Moore', 'Noble', 'Little Axe'],
  },
  {
    slug: 'guthrie-ok',
    city: 'Guthrie',
    state: 'OK',
    stateName: 'Oklahoma',
    driveTime: 'about 20 minutes',
    direction: 'south via I-35',
    intro:
      'Guthrie is a short run down I-35 to our Edmond office, which makes Encompass a practical option for Logan County patients who want hormone optimization, thyroid management or medical aesthetics without driving into the middle of Oklahoma City.',
    neighborhoods: ['Downtown Guthrie', 'Cimarron City', 'Crescent', 'Langston', 'Coyle'],
  },
  {
    slug: 'yukon-ok',
    city: 'Yukon',
    state: 'OK',
    stateName: 'Oklahoma',
    driveTime: 'about 35 minutes',
    direction: 'northeast via NW Expressway or the Kilpatrick Turnpike',
    intro:
      'Yukon and the western metro are an easy drive to Edmond on the Kilpatrick Turnpike. Patients come to us for the same reasons as everyone else: they want someone to investigate why they feel the way they do rather than simply manage the symptom.',
    neighborhoods: ['Mustang', 'Piedmont', 'Bethany', 'Warr Acres', 'El Reno'],
  },
]

export const LOCATION_SERVICES = [
  {
    slug: 'hormone-replacement-therapy',
    title: 'Hormone Replacement Therapy',
    body: 'Bioidentical hormone replacement for men and women experiencing fatigue, weight gain, low libido and mood changes.',
  },
  {
    slug: 'functional-medicine',
    title: 'Functional Medicine',
    body: 'Root-cause evaluation using advanced diagnostic testing, then a personalized plan built around your biochemistry.',
  },
  {
    slug: 'thyroid-management',
    title: 'Thyroid Management',
    body: 'Full thyroid evaluation that goes beyond a standard TSH, with treatment aimed at how you actually feel.',
  },
  {
    slug: 'weight-loss-programs',
    title: 'Weight Loss',
    body: 'Metabolic optimization and medically supervised weight loss built around why the weight is not moving.',
  },
  {
    slug: 'iv-therapy',
    title: 'IV Therapy',
    body: 'Intravenous nutrient therapy to correct deficiencies, support immunity and replenish vitamins and minerals.',
  },
  {
    slug: 'aesthetic-services',
    title: 'Aesthetics',
    body: 'Injectables, lasers, facials and body contouring to help you maintain a healthy, youthful appearance.',
  },
]
