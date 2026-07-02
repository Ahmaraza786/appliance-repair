import Head from 'next/head';
import Layout from '@/components/Layout';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import WhyUsSection from '@/components/WhyUsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import TaglineSubheadline from '@/components/TaglineSubheadline';
import { SITE_URL, BRAND, PHONE_DISPLAY, TAGLINE_EN, APPLIANCES } from '@/lib/constants';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Appliance Repair Services | Refrigerator, Washer, Dryer | {BRAND}</title>
        <meta name="description" content={`${TAGLINE_EN} We repair ${APPLIANCES.join(', ')}. Call ${PHONE_DISPLAY} for same-day service nationwide.`} />
        <link rel="canonical" href={`${SITE_URL}/services/`} />
      </Head>

      <Layout>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Our Services</span>
            <h1>Appliance Repair Services</h1>
            <TaglineSubheadline />
          </div>
        </section>
        <ServicesSection />
        <ShowcaseSection />
        <TeamSection />
        <WhyUsSection />
        <FaqSection />
        <CtaSection secondaryLink="/" secondaryLabel="Back to Home" />
      </Layout>
    </>
  );
}
