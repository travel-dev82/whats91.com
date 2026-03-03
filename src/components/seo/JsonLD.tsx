// JSON-LD Structured Data Component
// Part of SEO 2.0 - Entity clarity for search engines and LLMs

interface OrganizationJsonLDProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationJsonLD({
  name = "Whats91",
  url = "https://whats91.com",
  logo = "https://whats91.com/logo.svg",
  description = "Enterprise WhatsApp Cloud API Platform - Official Meta Business Solution Provider for India. Transform business communication with seamless ERP integrations.",
}: OrganizationJsonLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    foundingDate: "2024",
    founders: [
      {
        "@type": "Organization",
        name: "Wilford Technology",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ujjain",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-96698-23388",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/whats91",
      "https://twitter.com/whats91",
    ],
    knowsAbout: [
      "WhatsApp Business API",
      "WhatsApp Cloud API",
      "Enterprise Messaging",
      "ERP Integration",
      "Busy Accounting",
      "Chatbot Development",
      "Business Communication",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface SoftwareApplicationJsonLDProps {
  name?: string;
  description?: string;
  url?: string;
}

export function SoftwareApplicationJsonLD({
  name = "Whats91",
  description = "WhatsApp Cloud API Platform for enterprise business messaging with ERP integration",
  url = "https://whats91.com",
}: SoftwareApplicationJsonLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free trial available. Pay-per-use messaging pricing.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
    provider: {
      "@type": "Organization",
      name: "Wilford Technology",
      url: "https://whats91.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQJsonLDProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function FAQJsonLD({ faqs }: FAQJsonLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLDProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbJsonLD({ items }: BreadcrumbJsonLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebSiteJsonLDProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebSiteJsonLD({
  name = "Whats91",
  url = "https://whats91.com",
  description = "Enterprise WhatsApp Cloud API Platform for business messaging",
}: WebSiteJsonLDProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Combined SEO 2.0 JSON-LD for root layout
export function SEOJsonLD() {
  return (
    <>
      <OrganizationJsonLD />
      <SoftwareApplicationJsonLD />
      <WebSiteJsonLD />
    </>
  );
}

// Person JSON-LD for Author Pages
interface PersonJsonLDProps {
  name: string;
  url: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  sameAs?: string[];
  worksFor?: {
    name: string;
    url: string;
  };
  knowsAbout?: string[];
}

export function PersonJsonLD({
  name,
  url,
  jobTitle,
  description,
  image,
  sameAs,
  worksFor,
  knowsAbout,
}: PersonJsonLDProps) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
  };

  if (jobTitle) jsonLd.jobTitle = jobTitle;
  if (description) jsonLd.description = description;
  if (image) jsonLd.image = image;
  if (sameAs && sameAs.length > 0) jsonLd.sameAs = sameAs;
  if (worksFor) {
    jsonLd.worksFor = {
      "@type": "Organization",
      name: worksFor.name,
      url: worksFor.url,
    };
  }
  if (knowsAbout && knowsAbout.length > 0) jsonLd.knowsAbout = knowsAbout;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
