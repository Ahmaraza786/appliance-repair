import { IMAGES } from '@/lib/images';

const STEPS = [
  {
    num: '01',
    title: 'Call or Book Online',
    desc: 'Tell us what\'s broken. We match you with a certified local technician in minutes.',
    image: IMAGES.showcase[2].src,
  },
  {
    num: '02',
    title: 'Tech Arrives On Time',
    desc: 'Uniformed, background-checked pros arrive in a marked van with tools and common parts.',
    image: IMAGES.showcase[0].src,
  },
  {
    num: '03',
    title: 'Upfront Quote & Repair',
    desc: 'We diagnose, quote, and fix — usually in a single visit. No surprise charges ever.',
    image: IMAGES.showcase[3].src,
  },
  {
    num: '04',
    title: '90-Day Warranty',
    desc: 'Every repair is backed by our warranty. If it fails, we come back free of charge.',
    image: IMAGES.whyUs,
  },
];

export default function HowItWorks() {
  return (
    <section className="section how-section-v2">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow">Simple Process</span>
          <h2>Fixed in 4 Easy Steps</h2>
          <p className="sub">From broken appliance to working again — fast, transparent, guaranteed.</p>
        </div>

        <div className="steps-v2">
          {STEPS.map((step, i) => (
            <div key={i} className="step-v2">
              <div className="step-v2-img">
                <img src={step.image} alt={step.title} loading="lazy" />
                <span className="step-v2-num">{step.num}</span>
              </div>
              <div className="step-v2-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
