import { languages, publicSlugs, pathFor, siteOrigin } from '../data/site';
export function GET() {
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const entries = languages.flatMap(lang => publicSlugs.map(slug => '<url><loc>' + escape(siteOrigin + pathFor(lang, slug)) + '</loc>' + languages.map(alternate => '<xhtml:link rel="alternate" hreflang="' + alternate + '" href="' + escape(siteOrigin + pathFor(alternate, slug)) + '"/>').join('') + '</url>'));
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' + entries.join('') + '</urlset>', { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
