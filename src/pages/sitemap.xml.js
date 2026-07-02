import fs from 'fs';
import path from 'path';
import { SITE_URL } from '@/lib/constants';

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/>/g, '&gt;').replace(/</g, '&lt;');
}

function urlEntry(loc, priority = '0.7', changefreq = 'monthly', lastmod = '2026-06-27') {
  return `  <url>
    <loc>${esc(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const filePath = path.join(process.cwd(), 'src/data/locations.json');
  const locations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const entries = [];

  entries.push(urlEntry(`${SITE_URL}/`, '1.0', 'weekly'));
  entries.push(urlEntry(`${SITE_URL}/services/`, '0.8', 'monthly'));

  for (const state of locations) {
    entries.push(urlEntry(`${SITE_URL}/states/${state.slug}/`, '0.8', 'monthly'));
  }

  const RESERVED = new Set(['blog', 'states', 'services', 'api', '_next']);
  for (const state of locations) {
    if (RESERVED.has(state.slug)) continue;
    for (const city of state.cities) {
      entries.push(urlEntry(`${SITE_URL}/${state.slug}/${city.slug}/`, '0.6', 'monthly'));
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
  res.write(sitemap);
  res.end();
  return { props: {} };
}
