import { IMAGES } from '@/lib/images';

export default function ShowcaseSection({ cityName }) {
  const loc = cityName || 'your home';

  return (
    <section className="section showcase-section">
      <div className="container">
        <div className="showcase-layout">
          <div className="showcase-copy">
            <span className="eyebrow">Real Work. Real Results.</span>
            <h2>Trusted by Homeowners Across America</h2>
            <p>
              From emergency fridge repairs to routine washer maintenance, our team brings
              professional-grade tools and genuine parts to every job in {loc}.
            </p>
            <ul className="showcase-list">
              <li><i className="ph-fill ph-check-circle"></i> OEM & premium replacement parts</li>
              <li><i className="ph-fill ph-check-circle"></i> Clean, uniformed technicians</li>
              <li><i className="ph-fill ph-check-circle"></i> Upfront quote before any work</li>
              <li><i className="ph-fill ph-check-circle"></i> 90-day parts & labor warranty</li>
            </ul>
          </div>

          <div className="showcase-gallery">
            <div className="showcase-item showcase-item--tall">
              <img src={IMAGES.showcase[0].src} alt={IMAGES.showcase[0].alt} loading="lazy" />
            </div>
            <div className="showcase-item">
              <img src={IMAGES.showcase[1].src} alt={IMAGES.showcase[1].alt} loading="lazy" />
            </div>
            <div className="showcase-item">
              <img src={IMAGES.showcase[2].src} alt={IMAGES.showcase[2].alt} loading="lazy" />
            </div>
            <div className="showcase-item showcase-item--wide">
              <img src={IMAGES.showcase[3].src} alt={IMAGES.showcase[3].alt} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
