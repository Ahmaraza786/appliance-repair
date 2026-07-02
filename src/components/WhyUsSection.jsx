import { IMAGES } from '@/lib/images';

export default function WhyUsSection({ locationName }) {
  const loc = locationName || 'your area';

  const points = [
    { icon: 'ph-certificate', title: 'Certified Pros', desc: 'Factory-trained technicians with years of hands-on experience.' },
    { icon: 'ph-currency-dollar', title: 'Flat-Rate Pricing', desc: 'Quote before we start. The price we give is the price you pay.' },
    { icon: 'ph-package', title: 'Genuine Parts', desc: 'OEM and premium aftermarket parts for every major brand.' },
    { icon: 'ph-shield-check', title: '90-Day Warranty', desc: 'Every repair backed — we fix it again free if it fails.' },
  ];

  return (
    <section className="section why-section-v2">
      <div className="container">
        <div className="why-v2-layout">
          <div className="why-v2-image">
            <img src={IMAGES.whyUs} alt={`Appliance repair technician serving ${loc}`} loading="lazy" />
            <div className="why-v2-float">
              <div className="why-v2-float-num">4.9★</div>
              <div className="why-v2-float-label">1,240+ Reviews</div>
            </div>
          </div>
          <div className="why-v2-content">
            <span className="eyebrow">Why Choose Us</span>
            <h2>The {loc} Team Homeowners Trust</h2>
            <p className="sub-left">
              We're not a call center — we're real technicians who live and work in your community.
              Fast response, honest pricing, and repairs that last.
            </p>
            <div className="why-v2-points">
              {points.map((p, i) => (
                <div key={i} className="why-v2-point">
                  <div className="why-v2-point-icon"><i className={`ph-fill ${p.icon}`}></i></div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
