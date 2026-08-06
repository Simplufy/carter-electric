import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://www.carterelectricflorida.com";
const siteName = "Carter Electric of Southwest Florida";
const socialImage = "/images/carter-electric-social.png";

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

type ServiceConfig = SeoConfig & {
  serviceType: string;
};

type AreaConfig = SeoConfig & {
  city: string;
  county: string;
};

export const serviceSeo: Record<string, ServiceConfig> = {
  "indoor-lighting": {
    title: "Indoor Lighting Installation in Southwest Florida",
    description: "Custom indoor lighting installation for Southwest Florida homes, including recessed lights, fixtures, dimmers, under-cabinet lighting, and LED upgrades.",
    path: "/services/indoor-lighting/",
    keywords: ["indoor lighting installation", "recessed lighting", "lighting electrician", "Southwest Florida electrician"],
    serviceType: "Indoor lighting installation",
  },
  "outdoor-lighting": {
    title: "Outdoor & Landscape Lighting Electrician",
    description: "Professional outdoor and landscape lighting services for Southwest Florida homes, including security lighting, pathway lights, patio lighting, and LED upgrades.",
    path: "/services/outdoor-lighting/",
    keywords: ["outdoor lighting", "landscape lighting", "security lighting", "Southwest Florida electrician"],
    serviceType: "Outdoor and landscape lighting",
  },
  "ev-charger-installation": {
    title: "EV Charger Installation in Southwest Florida",
    description: "Licensed EV charger installation for Southwest Florida homes and businesses, including Level 2 chargers, dedicated circuits, permits, and panel checks.",
    path: "/services/ev-charger-installation/",
    keywords: ["EV charger installation", "Level 2 charger", "Tesla charger installation", "Southwest Florida electrician"],
    serviceType: "EV charger installation",
  },
  "electrical-repairs": {
    title: "Electrical Repairs & Troubleshooting Services",
    description: "Fast electrical repair and troubleshooting services in Southwest Florida for breakers, outlets, switches, lighting, panels, and urgent electrical issues.",
    path: "/services/electrical-repairs/",
    keywords: ["electrical repairs", "emergency electrician", "electrical troubleshooting", "Southwest Florida electrician"],
    serviceType: "Electrical repairs and troubleshooting",
  },
  "panel-upgrades": {
    title: "Electrical Panel Upgrades in Southwest Florida",
    description: "Electrical panel upgrades, breaker replacements, subpanels, and capacity improvements for Southwest Florida homes and businesses.",
    path: "/services/panel-upgrades/",
    keywords: ["electrical panel upgrade", "breaker panel replacement", "subpanel installation", "Southwest Florida electrician"],
    serviceType: "Electrical panel upgrades",
  },
  "commercial-services": {
    title: "Commercial Electrical Services in Southwest Florida",
    description: "Commercial electrical services for Southwest Florida businesses, property managers, offices, restaurants, retail spaces, and multi-family properties.",
    path: "/services/commercial-services/",
    keywords: ["commercial electrician", "business electrical services", "property management electrician", "Southwest Florida electrician"],
    serviceType: "Commercial electrical services",
  },
};

export const areaSeo: Record<string, AreaConfig> = {
  sarasota: {
    title: "Electrician in Sarasota, FL",
    description: "Licensed electrician serving Sarasota, FL with lighting installation, EV chargers, electrical repairs, panel upgrades, and commercial electrical services.",
    path: "/service-areas/sarasota/",
    keywords: ["electrician Sarasota FL", "Sarasota electrical services", "Sarasota lighting installation"],
    city: "Sarasota",
    county: "Sarasota County",
  },
  venice: {
    title: "Electrician in Venice, FL",
    description: "Carter Electric provides Venice, FL electrical services including repairs, lighting, EV charger installation, panel upgrades, and commercial electrical work.",
    path: "/service-areas/venice/",
    keywords: ["electrician Venice FL", "Venice electrical services", "Venice FL electrician"],
    city: "Venice",
    county: "Sarasota County",
  },
  englewood: {
    title: "Electrician in Englewood, FL",
    description: "Trusted electrician serving Englewood, FL with residential and commercial electrical repairs, lighting, EV chargers, and panel upgrades.",
    path: "/service-areas/englewood/",
    keywords: ["electrician Englewood FL", "Englewood electrical services", "coastal electrical contractor"],
    city: "Englewood",
    county: "Sarasota and Charlotte Counties",
  },
  "port-charlotte": {
    title: "Electrician in Port Charlotte, FL",
    description: "Licensed electrical services in Port Charlotte, FL for homes and businesses, including lighting, repairs, EV chargers, and panel upgrades.",
    path: "/service-areas/port-charlotte/",
    keywords: ["electrician Port Charlotte FL", "Port Charlotte electrical services", "Port Charlotte electrician"],
    city: "Port Charlotte",
    county: "Charlotte County",
  },
  "punta-gorda": {
    title: "Electrician in Punta Gorda, FL",
    description: "Punta Gorda, FL electrician for electrical repairs, historic home electrical updates, lighting, EV charger installation, and panel upgrades.",
    path: "/service-areas/punta-gorda/",
    keywords: ["electrician Punta Gorda FL", "Punta Gorda electrical services", "historic home electrician"],
    city: "Punta Gorda",
    county: "Charlotte County",
  },
  "cape-coral": {
    title: "Electrician in Cape Coral, FL",
    description: "Cape Coral, FL electrical contractor for waterfront homes, lighting, repairs, EV charger installs, panel upgrades, and commercial electrical service.",
    path: "/service-areas/cape-coral/",
    keywords: ["electrician Cape Coral FL", "Cape Coral electrical services", "Cape Coral electrician"],
    city: "Cape Coral",
    county: "Lee County",
  },
  "fort-myers": {
    title: "Electrician in Fort Myers, FL",
    description: "Licensed electrician in Fort Myers, FL serving homes and businesses with electrical repair, lighting, EV chargers, panels, and commercial service.",
    path: "/service-areas/fort-myers/",
    keywords: ["electrician Fort Myers FL", "Fort Myers electrical services", "Fort Myers electrician"],
    city: "Fort Myers",
    county: "Lee County",
  },
  "bonita-springs": {
    title: "Electrician in Bonita Springs, FL",
    description: "Bonita Springs, FL electrician for luxury homes, lighting installation, repairs, EV chargers, panel upgrades, and commercial electrical work.",
    path: "/service-areas/bonita-springs/",
    keywords: ["electrician Bonita Springs FL", "Bonita Springs electrical services", "Bonita Springs electrician"],
    city: "Bonita Springs",
    county: "Lee County",
  },
  naples: {
    title: "Electrician in Naples, FL",
    description: "Electrical services in Naples, FL for homes, condos, and businesses, including lighting, electrical repairs, EV chargers, and panel upgrades.",
    path: "/service-areas/naples/",
    keywords: ["electrician Naples FL", "Naples electrical services", "Naples electrician"],
    city: "Naples",
    county: "Collier County",
  },
  "marco-island": {
    title: "Electrician in Marco Island, FL",
    description: "Marco Island, FL electrician specializing in coastal home electrical services, repairs, lighting, EV chargers, panels, and commercial work.",
    path: "/service-areas/marco-island/",
    keywords: ["electrician Marco Island FL", "Marco Island electrical services", "coastal electrician Marco Island"],
    city: "Marco Island",
    county: "Collier County",
  },
};

export function buildMetadata(config: SeoConfig): Metadata {
  const canonical = `${siteUrl}${config.path}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName,
      title: config.title,
      description: config.description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [socialImage],
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function ServiceSeoLayout({ config, children }: { config: ServiceConfig; children: ReactNode }) {
  const url = `${siteUrl}${config.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.serviceType,
    description: config.description,
    url,
    provider: {
      "@type": "Electrician",
      name: siteName,
      telephone: "+1-941-336-6811",
      url: siteUrl,
      areaServed: "Southwest Florida",
    },
    serviceType: config.serviceType,
    areaServed: ["Sarasota", "Venice", "Englewood", "Port Charlotte", "Punta Gorda", "Cape Coral", "Fort Myers", "Bonita Springs", "Naples", "Marco Island"],
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Services", url: `${siteUrl}/#services` },
        { name: config.serviceType, url },
      ])} />
      {children}
    </>
  );
}

export function AreaSeoLayout({ config, children }: { config: AreaConfig; children: ReactNode }) {
  const url = `${siteUrl}${config.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: `${siteName} - ${config.city}`,
    description: config.description,
    url,
    telephone: "+1-941-336-6811",
    email: "contact@carterelectricflorida.com",
    image: `${siteUrl}/images/carter-electric-social.png`,
    areaServed: {
      "@type": "City",
      name: config.city,
      containedInPlace: config.county,
    },
    priceRange: "$$",
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Service Areas", url: `${siteUrl}/#service-areas` },
        { name: config.city, url },
      ])} />
      {children}
    </>
  );
}

export function WebPageSeoLayout({ config, children }: { config: SeoConfig; children: ReactNode }) {
  const url = `${siteUrl}${config.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.title,
    description: config.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Electrician",
      name: siteName,
      telephone: "+1-941-336-6811",
      url: siteUrl,
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: `${siteUrl}/` },
        { name: config.title, url },
      ])} />
      {children}
    </>
  );
}
