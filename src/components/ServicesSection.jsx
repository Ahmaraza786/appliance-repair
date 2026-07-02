import CallUsButton from './CallUsButton';
import { SERVICE_IMAGES } from '@/lib/images';

function getCitySeed(str) {
  if (!str) return 42;
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const SERVICE_VARIANTS = [
  [
    { title: 'Refrigerator Repair', desc: (city) => `Not cooling? Leaking? Our ${city} techs repair Samsung, LG, Whirlpool, GE & more — same-day available.` },
    { title: 'Refrigerator Repair', desc: (city) => `Compressor, ice maker, and cooling issues fixed fast across ${city}. Upfront pricing, 90-day warranty.` },
    { title: 'Refrigerator Repair', desc: (city) => `Keep food safe in ${city}. We diagnose fridge problems on the spot and carry common parts on every truck.` },
  ],
  [
    { title: 'Washer Repair', desc: (city) => `Washer won't spin or drain in ${city}? Front-load and top-load repairs for every major brand.` },
    { title: 'Washer Repair', desc: (city) => `${city} washer repair — pump failures, drum issues, and control board errors fixed in one visit.` },
    { title: 'Washer Repair', desc: (city) => `Noisy, vibrating, or leaking washer in ${city}? Our certified techs fix it today.` },
  ],
  [
    { title: 'Dryer Repair', desc: (city) => `Dryer not heating in ${city}? Gas & electric dryer repair — elements, thermostats, belts & rollers.` },
    { title: 'Dryer Repair', desc: (city) => `From lint buildup to blown fuses, ${city} dryer repair gets your laundry dry again fast.` },
    { title: 'Dryer Repair', desc: (city) => `Vent cleaning, motor replacement & sensor calibration for all dryer brands in ${city}.` },
  ],
  [
    { title: 'Oven & Range Repair', desc: (city) => `Oven not heating in ${city}? We repair gas & electric ranges, igniters, bake elements & controls.` },
    { title: 'Oven & Range Repair', desc: (city) => `Temperature calibration, burner issues & self-clean failures — fixed fast in ${city}.` },
    { title: 'Oven & Range Repair', desc: (city) => `Don't cancel dinner in ${city}. Most oven repairs done in under 90 minutes.` },
  ],
  [
    { title: 'Dishwasher Repair', desc: (city) => `Dishes still dirty in ${city}? We fix drainage, spray arms, pumps & door latches on all brands.` },
    { title: 'Dishwasher Repair', desc: (city) => `${city} dishwasher repair — leak detection, motor replacement & board diagnostics.` },
    { title: 'Dishwasher Repair', desc: (city) => `Bosch to KitchenAid — every dishwasher make repaired with genuine parts in ${city}.` },
  ],
  [
    { title: 'Same-Day Emergency', desc: (city) => `Appliance emergency in ${city}? Call before 2 PM for same-day service — no hidden rush fees.` },
    { title: 'Same-Day Emergency', desc: (city) => `Fridge down? Washer flooded? Our ${city} emergency team responds within hours, 7 days a week.` },
    { title: 'Same-Day Emergency', desc: (city) => `Need a tech in ${city} today? Upfront quotes before any work begins.` },
  ],
];

export default function ServicesSection({ cityName }) {
  const seed = getCitySeed(cityName);
  const loc = cityName || 'Your Area';

  const services = SERVICE_VARIANTS.map((variants, i) => {
    const idx = (seed + i * 7) % variants.length;
    const v = variants[idx];
    return { title: v.title, desc: v.desc(cityName || 'your area'), image: SERVICE_IMAGES[i] };
  });

  return (
    <section className="section services-section-v2" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Fix</span>
          <h2>Appliance Repair in {loc}</h2>
          <p className="sub">Professional repair for every major home appliance — with real photos, real techs, real results.</p>
        </div>

        <div className="services-bento">
          {services.map((s, i) => (
            <article key={i} className={`service-tile ${i === 0 ? 'service-tile--featured' : ''}`}>
              <div className="service-tile-img">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="service-tile-overlay" />
              </div>
              <div className="service-tile-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <CallUsButton />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
