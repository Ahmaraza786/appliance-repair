import { BRANDS } from '@/lib/images';

export default function BrandMarquee() {
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="brand-marquee" aria-label="Brands we repair">
      <div className="brand-marquee-label">We Repair All Major Brands</div>
      <div className="brand-marquee-track-wrap">
        <div className="brand-marquee-track">
          {items.map((brand, i) => (
            <span key={i} className="brand-marquee-item">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
