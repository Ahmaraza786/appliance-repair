import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureStrip from '@/components/FeatureStrip';
import WhyUsSection from '@/components/WhyUsSection';
import CitiesGrid from '@/components/CitiesGrid';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import BrandMarquee from '@/components/BrandMarquee';
import ShowcaseSection from '@/components/ShowcaseSection';
import TeamSection from '@/components/TeamSection';
import CtaSection from '@/components/CtaSection';
import TaglineSubheadline from '@/components/TaglineSubheadline';
import { SITE_URL, BRAND, PHONE, PHONE_DISPLAY, TAGLINE_EN } from '@/lib/constants';

export default function StatePage({ stateData }) {
  if (!stateData) return null;

  const headline = (
    <>
      Expert Appliance Repair
      <br />in <em>{stateData.name}</em>
    </>
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: `${stateData.name} Appliance Repair`, item: `${SITE_URL}/states/${stateData.slug}/` },
    ],
  };

  const stateSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${BRAND} - ${stateData.name}`,
    description: `Professional appliance repair in ${stateData.name}. Refrigerators, washers, dryers, ovens, dishwashers. ${TAGLINE_EN}`,
    url: `${SITE_URL}/states/${stateData.slug}/`,
    telephone: `+1${PHONE}`,
    areaServed: { '@type': 'State', name: stateData.name },
  };

  return (
    <>
      <Head>
        <title>Appliance Repair in {stateData.name} | Refrigerator, Washer, Dryer | {BRAND}</title>
        <meta name="description" content={`Need appliance repair in ${stateData.name}? ${TAGLINE_EN} Same-day service in every city. Call ${PHONE_DISPLAY}!`} />
        <link rel="canonical" href={`${SITE_URL}/states/${stateData.slug}/`} />
        <meta name="geo.region" content={`US-${stateData.code}`} />
        <meta property="og:title" content={`Appliance Repair in ${stateData.name} | Same Day Service`} />
        <meta property="og:description" content={`Fast appliance repair across ${stateData.name}. Refrigerators, washers, dryers, ovens, dishwashers. Call ${PHONE_DISPLAY}!`} />
        <meta name="twitter:title" content={`Appliance Repair in ${stateData.name} | ${BRAND}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stateSchema) }} />
      </Head>

      <Layout>
        <HeroSection headline={headline} locationName={stateData.name} />
        <BrandMarquee />
        <FeatureStrip />

        <section className="section">
          <div className="container">
            <div className="section-head text-center">
              <span className="eyebrow">Professional Service</span>
              <h2>Refrigerator & Appliance Repair in {stateData.name}</h2>
              <TaglineSubheadline />
            </div>
          </div>
        </section>

        <CitiesGrid stateName={stateData.name} stateSlug={stateData.slug} cities={stateData.cities} />
        <ShowcaseSection cityName={stateData.name} />
        <TeamSection cityName={stateData.name} />
        <WhyUsSection locationName={stateData.name} />
        <ReviewsSection cityName={stateData.name} />
        <FaqSection cityName={stateData.name} />
        <CtaSection
          title={`Appliance Repair in ${stateData.name} — Same Day`}
          secondaryLink="#cities"
          secondaryLabel="Select Your City"
        />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'src/data/locations.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { paths: data.map(state => ({ params: { state: state.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'src/data/locations.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const stateData = data.find(s => s.slug === params.state);
  if (!stateData) return { notFound: true };
  return { props: { stateData } };
}
