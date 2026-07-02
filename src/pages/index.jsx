import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import BrandMarquee from '@/components/BrandMarquee';
import FeatureStrip from '@/components/FeatureStrip';
import ServicesSection from '@/components/ServicesSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import HowItWorks from '@/components/HowItWorks';
import TeamSection from '@/components/TeamSection';
import WhyUsSection from '@/components/WhyUsSection';
import ReviewsSection from '@/components/ReviewsSection';
import StatesGrid from '@/components/StatesGrid';
import FaqSection from '@/components/FaqSection';
import statesData from '@/data/states_only.json';
import CtaSection from '@/components/CtaSection';
import { SITE_URL, BRAND, PHONE, PHONE_DISPLAY, TAGLINE_EN } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export default function Home() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    name: BRAND,
    description: TAGLINE_EN,
    url: SITE_URL,
    telephone: `+1${PHONE}`,
    image: IMAGES.hero,
    areaServed: { '@type': 'Country', name: 'United States' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1240' },
  };

  return (
    <>
      <Head>
        <title>Appliance Repair Near You | Refrigerator, Washer, Dryer | {BRAND}</title>
        <meta name="description" content={`${TAGLINE_EN} Serving all 50 US states. Call ${PHONE_DISPLAY} for same-day repair.`} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content={`Appliance Repair Near You | ${BRAND}`} />
        <meta property="og:description" content={TAGLINE_EN} />
        <meta property="og:image" content={IMAGES.hero} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </Head>

      <Layout>
        <HeroSection locationName="Your City" />
        <BrandMarquee />
        <FeatureStrip />
        <ServicesSection />
        <ShowcaseSection />
        <HowItWorks />
        <TeamSection />
        <WhyUsSection />
        <ReviewsSection />
        <StatesGrid states={statesData} />
        <FaqSection />

        <CtaSection secondaryLink="#services" secondaryLabel="View Services" />
      </Layout>
    </>
  );
}
