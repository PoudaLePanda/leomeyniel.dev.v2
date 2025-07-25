import Script from 'next/script';

interface PersonStructuredDataProps {
  name: string;
  url: string;
  jobTitle: string;
  description: string;
  sameAs: string[];
  email: string;
}

export function PersonStructuredData({
  name,
  url,
  jobTitle,
  description,
  sameAs,
  email,
}: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "url": url,
    "jobTitle": jobTitle,
    "description": description,
    "sameAs": sameAs,
    "email": email,
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Développeur Full Stack",
      "occupationLocation": {
        "@type": "Place",
        "name": "France"
      }
    }
  };

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface WebsiteStructuredDataProps {
  name: string;
  url: string;
  description: string;
  author: string;
}

export function WebsiteStructuredData({
  name,
  url,
  description,
  author,
}: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface ArticleStructuredDataProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
  keywords: string[];
}

export function ArticleStructuredData({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  url,
  keywords,
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": url,
    "keywords": keywords,
    "publisher": {
      "@type": "Person",
      "name": author
    }
  };

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}