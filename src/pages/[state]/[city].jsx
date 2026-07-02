import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureStrip from '@/components/FeatureStrip';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import BrandMarquee from '@/components/BrandMarquee';
import ShowcaseSection from '@/components/ShowcaseSection';
import TeamSection from '@/components/TeamSection';
import CtaSection from '@/components/CtaSection';
import LocalIntroSection from '@/components/LocalIntroSection';
import NearbyCitiesSection from '@/components/NearbyCitiesSection';
import { SITE_URL, BRAND, PHONE, PHONE_DISPLAY, TAGLINE_EN } from '@/lib/constants';

function getHeroSubtitle(lat, cityName) {
  const latitude = parseFloat(lat);
  if (latitude < 30) return `${cityName} heat puts extra strain on refrigerators and freezers. When your appliances fail, our local techs respond same-day with expert repair for all major brands.`;
  if (latitude < 40) return `${cityName} homeowners trust us for fast appliance repair — refrigerators, washers, dryers, ovens, and dishwashers. Upfront pricing, 90-day warranty.`;
  return `Year-round appliance reliability matters in ${cityName}. Our certified technicians repair every major brand with same-day service and transparent pricing.`;
}

function getMetaDescription(lat, cityName, stateCode) {
  const loc = `${cityName}, ${stateCode}`;
  return `Appliance repair in ${loc}. ${TAGLINE_EN} Same-day refrigerator, washer, dryer, oven & dishwasher repair. Call ${PHONE_DISPLAY}!`;
}

const RESERVED_PATHS = new Set(['blog', 'states', 'services', 'api', '_next']);

export default function CityPage({ cityData, stateData, nearbyCities }) {
  if (!cityData) return null;

  const locName = `${cityData.name}, ${stateData.code}`;
  const heroSubtitle = getHeroSubtitle(cityData.lat, cityData.name);

  const headline = (
    <>
      Expert Appliance Repair
      <br />in <em>{cityData.name}</em>
    </>
  );

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    name: `${BRAND} - ${cityData.name}`,
    description: getMetaDescription(cityData.lat, cityData.name, stateData.code),
    url: `${SITE_URL}/${stateData.slug}/${cityData.slug}/`,
    telephone: `+1${PHONE}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityData.name,
      addressRegion: stateData.code,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.lat,
      longitude: cityData.lon,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '08:00', closes: '18:00' },
    ],
    areaServed: { '@type': 'City', name: cityData.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: `${stateData.name} Appliance Repair`, item: `${SITE_URL}/states/${stateData.slug}/` },
      { '@type': 'ListItem', position: 3, name: `Appliance Repair ${locName}`, item: `${SITE_URL}/${stateData.slug}/${cityData.slug}/` },
    ],
  };

  const metaDesc = getMetaDescription(cityData.lat, cityData.name, stateData.code);
  const canonicalUrl = `${SITE_URL}/${stateData.slug}/${cityData.slug}/`;

  return (
    <>
      <Head>
        <title>Appliance Repair in {locName} | Refrigerator, Washer, Dryer | {BRAND}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="geo.region" content={`US-${stateData.code}`} />
        <meta name="geo.placename" content={cityData.name} />
        <meta name="geo.position" content={`${cityData.lat};${cityData.lon}`} />
        <meta name="ICBM" content={`${cityData.lat}, ${cityData.lon}`} />
        <meta property="og:title" content={`Appliance Repair in ${locName} | Same Day Service`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content={`Appliance Repair in ${locName} | ${BRAND}`} />
        <meta name="twitter:description" content={metaDesc} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <Layout>
        <HeroSection headline={headline} subheadline={heroSubtitle} locationName={cityData.name} showBilingual={false} />
        <BrandMarquee />
        <FeatureStrip />
        <LocalIntroSection
          cityName={cityData.name}
          stateName={stateData.name}
          lat={cityData.lat}
          stateSlug={stateData.slug}
        />
        <ServicesSection cityName={cityData.name} />
        <ShowcaseSection cityName={cityData.name} />
        <TeamSection cityName={cityData.name} />
        <WhyUsSection locationName={cityData.name} />
        <NearbyCitiesSection
          cities={nearbyCities}
          stateSlug={stateData.slug}
          stateName={stateData.name}
          currentCity={cityData.name}
        />
        <ReviewsSection cityName={cityData.name} />
        <FaqSection cityName={cityData.name} />
        <CtaSection
          title={`Need Appliance Repair in ${cityData.name}?`}
          secondaryLink={`/states/${stateData.slug}/`}
          secondaryLabel={`All ${stateData.name} Cities →`}
        />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'src/data/locations.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = [];

  for (const state of data) {
    if (RESERVED_PATHS.has(state.slug)) continue;
    for (const city of state.cities) {
      paths.push({ params: { state: state.slug, city: city.slug } });
    }
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  if (RESERVED_PATHS.has(params.state)) return { notFound: true };

  const filePath = path.join(process.cwd(), 'src/data/locations.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const stateData = data.find(s => s.slug === params.state);
  if (!stateData) return { notFound: true };

  const cityData = stateData.cities.find(c => c.slug === params.city);
  if (!cityData) return { notFound: true };

  const nearbyCities = stateData.cities
    .filter(c => c.slug !== cityData.slug)
    .map(c => ({ ...c, _dist: Math.pow(c.lat - cityData.lat, 2) + Math.pow(c.lon - cityData.lon, 2) }))
    .sort((a, b) => a._dist - b._dist)
    .slice(0, 8)
    .map(({ _dist, ...c }) => c);

  const lightweightState = { name: stateData.name, code: stateData.code, slug: stateData.slug };

  return { props: { cityData, stateData: lightweightState, nearbyCities } };
}
