import { useState } from 'react';
import Head from 'next/head';

function getCitySeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededRandom(seed) {
  let s = seed;
  return () => { s = Math.imul(s, 1664525) + 1013904223 | 0; return (s >>> 0) / 0x100000000; };
}

function seededShuffle(arr, seed) {
  const rand = seededRandom(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_FAQS = [
  { q: 'How much does refrigerator repair cost in {city}?', a: 'Most refrigerator repairs in {city} cost between $150–$400 depending on the issue. Compressor, thermostat, and ice maker repairs vary. We always provide an upfront quote before starting any work.' },
  { q: 'Do you offer same-day appliance repair in {city}?', a: 'Yes! Same-day service is available in {city} for calls received before 2 PM. Our average response time is under 2 hours. Evening and weekend appointments are also available.' },
  { q: 'What appliance brands do you repair in {city}?', a: 'We repair all major brands in {city} including Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, Frigidaire, Kenmore, and Sub-Zero.' },
  { q: 'My washer won\'t drain — can you fix it in {city}?', a: 'Absolutely. Drain pump failures, clogged hoses, and lid switch issues are common washer problems in {city}. Most washer repairs are completed in a single visit.' },
  { q: 'Do you repair both gas and electric dryers in {city}?', a: 'Yes. Our {city} technicians are certified for both gas and electric dryer repair — heating elements, igniters, thermostats, belts, and drum rollers.' },
  { q: 'Is there a warranty on appliance repairs in {city}?', a: 'Every repair in {city} comes with a 90-day parts and labor warranty. If the same issue returns within 90 days, we fix it at no charge.' },
  { q: 'Can you fix my oven that won\'t heat in {city}?', a: 'Yes. Oven heating failures in {city} are usually caused by a bad bake element, igniter, or thermostat. We diagnose and repair on the spot.' },
  { q: 'How long does a dishwasher repair take in {city}?', a: 'Most dishwasher repairs in {city} take 45–90 minutes. Pump, spray arm, and door latch issues are typically resolved in one visit.' },
  { q: 'Are your {city} technicians licensed and insured?', a: 'All technicians serving {city} are certified, background-checked, and fully insured. Your home and appliances are completely protected.' },
  { q: 'Do you offer emergency appliance repair in {city}?', a: 'Yes. Refrigerator not cooling? Washer flooding? We prioritize emergency calls in {city} and dispatch a tech within hours, 7 days a week.' },
  { q: 'Can you repair a Sub-Zero or Viking refrigerator in {city}?', a: 'Yes. Our {city} team handles premium brands including Sub-Zero, Viking, Thermador, and Wolf with factory-trained expertise.' },
  { q: 'Do you use OEM parts for repairs in {city}?', a: 'We use OEM and high-quality aftermarket parts for all {city} repairs. We\'ll explain your options and quote both before proceeding.' },
];

function pickFaqs(cityName, count = 6) {
  const seed = getCitySeed(cityName || 'default');
  const shuffled = seededShuffle(ALL_FAQS, seed);
  return shuffled.slice(0, count).map(faq => ({
    q: faq.q.replace(/{city}/g, cityName || 'your area'),
    a: faq.a.replace(/{city}/g, cityName || 'your area'),
  }));
}

export default function FaqSection({ cityName }) {
  const [openIndex, setOpenIndex] = useState(null);
  const loc = cityName || 'your area';
  const faqs = pickFaqs(cityName, 6);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <section className="section faq-section-v2">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">FAQ</span>
            <h2>Appliance Repair Questions in {loc}</h2>
            <p className="sub">Common questions from {loc} homeowners.</p>
          </div>
          <div className="faq-v2-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-v2-item ${openIndex === i ? 'open' : ''}`}>
                <button
                  className="faq-v2-q"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {faq.q}
                  <span className="faq-v2-icon"><i className="ph-bold ph-plus"></i></span>
                </button>
                <div className="faq-v2-a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
