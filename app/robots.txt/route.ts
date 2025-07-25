export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: https://leomeyniel.dev/sitemap.xml

# Crawl delay
Crawl-delay: 1
`;

  return new Response(robotsTxt.trim(), {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}