// Appliance REPAIR images — technicians actively fixing appliances (not food/product shots)
const px = (id, w = 800, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${h ? `&h=${h}` : ''}&fit=crop`;

const usPlus = (id, w = 800, h) =>
  `https://plus.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

const us = (id, w = 800, h) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const IMAGES = {
  hero: px(34734504, 1600, 900),
  heroAlt: 'Technician repairing a home appliance during a service call',

  services: {
    // Technician servicing cooling/refrigeration unit
    refrigerator: usPlus('premium_photo-1682126012378-859ca7a9f4cf', 600, 400),
    // Plumber actively repairing a leaking washing machine
    washer: usPlus('premium_photo-1661342474567-f84bb6959d9f', 600, 400),
    // Repairman fixing a laundry appliance (dryer/washer service)
    dryer: px(6474588, 600, 400),
    // Workman installing/repairing an electric oven
    oven: usPlus('premium_photo-1663047695260-98cde4d6bbc7', 600, 400),
    // Technician repairing a home appliance on-site
    dishwasher: px(34734504, 600, 400),
    // Emergency service — technician with toolbox
    emergency: px(4489746, 600, 400),
  },

  showcase: [
    { src: px(6474472, 700, 500), alt: 'Repairman fixing a washing machine' },
    { src: usPlus('premium_photo-1663047695260-98cde4d6bbc7', 700, 500), alt: 'Technician installing an electric oven' },
    { src: px(37492288, 700, 500), alt: 'Technician repairing an appliance component' },
    { src: us('photo-1581578731548-c64695cc6952', 700, 500), alt: 'Professional repair technician at work' },
  ],

  whyUs: px(37492288, 800, 600),

  team: [
    {
      name: 'Marcus Chen',
      role: 'Lead Technician',
      exp: '12 yrs experience',
      image: px(2379004, 400, 400),
      specialty: 'Refrigerators & Freezers',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Tech',
      exp: '9 yrs experience',
      image: px(774909, 400, 400),
      specialty: 'Washers & Dryers',
    },
    {
      name: 'David Rivera',
      role: 'Appliance Specialist',
      exp: '11 yrs experience',
      image: px(1222271, 400, 400),
      specialty: 'Ovens & Ranges',
    },
    {
      name: 'Emily Park',
      role: 'Field Technician',
      exp: '7 yrs experience',
      image: px(1181686, 400, 400),
      specialty: 'Dishwashers & More',
    },
  ],

  ctaBg: px(34734504, 1600, 600),
};

export const SERVICE_IMAGES = [
  IMAGES.services.refrigerator,
  IMAGES.services.washer,
  IMAGES.services.dryer,
  IMAGES.services.oven,
  IMAGES.services.dishwasher,
  IMAGES.services.emergency,
];

export const BRANDS = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'Bosch',
  'KitchenAid', 'Frigidaire', 'Kenmore', 'Sub-Zero', 'Viking', 'Thermador',
];
