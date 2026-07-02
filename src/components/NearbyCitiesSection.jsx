import Link from 'next/link';

export default function NearbyCitiesSection({ cities, stateSlug, stateName, currentCity }) {
  if (!cities?.length) return null;

  return (
    <section className="section nearby-section-v2">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow">Nearby</span>
          <h2>Also Serving Near {currentCity}</h2>
        </div>
        <div className="cities-v2-grid">
          {cities.map(city => (
            <Link key={city.slug} href={`/${stateSlug}/${city.slug}`} className="city-v2-chip">
              {city.name}
              <i className="ph-bold ph-arrow-right"></i>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
