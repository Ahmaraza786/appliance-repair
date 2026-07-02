import Link from 'next/link';

export default function CitiesGrid({ stateName, stateSlug, cities }) {
  return (
    <section className="section cities-section-v2" id="cities">
      <div className="container">
        <div className="section-head text-center">
          <span className="eyebrow">Cities in {stateName}</span>
          <h2>Find Repair in Your City</h2>
          <p className="sub">Same-day refrigerator, washer, dryer, oven & dishwasher repair.</p>
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
