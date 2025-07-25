import { getMdxFiles } from "../../lib/mdx-utils";

export async function GET() {
  const baseUrl = "https://leomeyniel.dev";

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Fonction pour valider et parser les dates
  function parseDate(dateString: string | undefined): Date {
    if (!dateString) return new Date();

    // Essayer de parser la date directement
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }

    // Si c'est un format français comme "25 juillet 2025", essayer de le convertir
    const frenchMonths: { [key: string]: string } = {
      janvier: "01",
      février: "02",
      mars: "03",
      avril: "04",
      mai: "05",
      juin: "06",
      juillet: "07",
      août: "08",
      septembre: "09",
      octobre: "10",
      novembre: "11",
      décembre: "12",
    };

    const match = dateString.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
    if (match) {
      const [, day, month, year] = match;
      const monthNumber = frenchMonths[month.toLowerCase()];
      if (monthNumber) {
        const isoDate = `${year}-${monthNumber}-${day.padStart(2, "0")}`;
        const convertedDate = new Date(isoDate);
        if (!isNaN(convertedDate.getTime())) {
          return convertedDate;
        }
      }
    }

    // Si tout échoue, retourner la date actuelle
    console.warn(
      `Date invalide détectée: ${dateString}, utilisation de la date actuelle`
    );
    return new Date();
  }

  // Pages dynamiques des projets
  const projects = await getMdxFiles("projects");
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: parseDate(project.frontmatter.lastModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Pages dynamiques des notes
  const notes = await getMdxFiles("notes");
  const notePages = notes.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: parseDate(note.frontmatter.lastModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const allPages = [...staticPages, ...projectPages, ...notePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
