import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { SITE_URL, BRAND } from '@/lib/constants';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath.split('?')[0]}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="sitemap" type="application/xml" href={`${SITE_URL}/sitemap.xml`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={BRAND} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}
