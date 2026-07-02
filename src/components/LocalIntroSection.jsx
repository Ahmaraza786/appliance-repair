import Link from 'next/link';
import TaglineSubheadline from './TaglineSubheadline';
import { IMAGES } from '@/lib/images';

export default function LocalIntroSection({ cityName, stateName, lat, stateSlug }) {
  const latitude = parseFloat(lat);

  let intro;
  if (latitude < 30) {
    intro = `${cityName}, ${stateName} heat puts serious strain on refrigerators and freezers. When your appliances fail, every hour counts — our local ${cityName} team responds same-day with expert repair for all major brands.`;
  } else if (latitude < 40) {
    intro = `From suburban homes to downtown ${cityName} apartments, our certified technicians repair refrigerators, washers, dryers, ovens, and dishwashers with upfront pricing and a 90-day warranty.`;
  } else {
    intro = `${cityName} homeowners depend on reliable appliances year-round. Our ${stateName} repair team delivers fast, affordable, professional service backed by thousands of completed repairs nationwide.`;
  }

  return (
    <section className="section local-intro-v2">
      <div className="container">
        <div className="local-intro-v2-grid">
          <div className="local-intro-v2-img">
            <img src={IMAGES.showcase[0].src} alt={`Appliance repair in ${cityName}, ${stateName}`} loading="lazy" />
          </div>
          <div className="local-intro-v2-text">
            <span className="eyebrow">{cityName}, {stateName}</span>
            <h2>Local Appliance Repair You Can Trust</h2>
            <p>{intro}</p>
            <TaglineSubheadline />
            <Link href={`/states/${stateSlug}/`} className="btn btn-dark btn-sm" style={{ marginTop: '1.25rem' }}>
              All {stateName} Cities →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
