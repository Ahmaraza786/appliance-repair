import { SITE_URL } from '@/lib/constants';

export default function Robots() {
  return null;
}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.write(robots);
  res.end();
  return { props: {} };
}
