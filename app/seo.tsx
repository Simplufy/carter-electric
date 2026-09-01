import type { Metadata } from "next";
import type { ReactNode } from "react";
import { areaFaq, serviceFaq, type FaqItem } from "./seo-data";

const siteUrl = "https://www.carterelectricflorida.com";
const siteName = "Carter Electric";
const socialImage = "/images/carter-electric-social.png";
const servedCities = ["Port Charlotte", "North Port", "Punta Gorda"];

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

type ServiceConfig = SeoConfig & {
  serviceType: string;
  faq: FaqItem[];
};

type AreaConfig = SeoConfig & {
  city: string;
  county: string;
  faq: FaqItem[];
};

export const serviceSeo: Record<string, ServiceConfig> = {
  "indoor-lighting": {
    title: "Indoor Lighting Installation in Port Charlotte, North Port & Punta Gorda",
    description: "Custom indoor lighting installation for Port Charlotte, North Port, and Punta Gorda homes, including recessed lights, fixtures, dimmers, under-cabinet lighting, and LED upgrades.",
    path: "/services/indoor-lighting/",
    keywords: ["indoor lighting installation", "recessed lighting", "lighting electrician", "Port Charlotte electrician", "North Port electrician", "Punta Gorda electrician"],
    serviceType: "Indoor lighting installation",
    faq: serviceFaq["indoor-lighting"],
  },
  "outdoor-lighting": {
    title: "Outdoor & Landscape Lighting Electrician",
    description: "Professional outdoor and landscape lighting services for Port Charlotte, North Port, and Punta Gorda homes, including security lighting, pathway lights, patio lighting, and LED upgrades.",
    path: "/services/outdoor-lighting/",
    keywords: ["outdoor lighting", "landscape lighting", "security lighting", "Port Charlotte electrician", "North Port electrician", "Punta Gorda electrician"],
    serviceType: "Outdoor and landscape lighting",
    faq: serviceFaq["outdoor-lighting"],
  },
  "ev-charger-installation": {
    title: "EV Charger Installation in Port Charlotte, North Port & Punta Gorda",
    description: "Licensed EV charger installation for Port Charlotte, North Port, and Punta Gorda homes and businesses, including Level 2 chargers, dedicated circuits, permits, and panel checks.",
    path: "/services/ev-charger-installation/",
    keywords: ["EV charger installation", "Level 2 charger", "Tesla charger installation", "Port Charlotte EV charger", "North Port EV charger", "Punta Gorda EV charger"],
    serviceType: "EV charger installation",
    faq: serviceFaq["ev-charger-installation"],
  },
  "electrical-repairs": {
    title: "Electrical Repairs & Troubleshooting Services",
    description: "Fast electrical repair and troubleshooting services in Port Charlotte, North Port, and Punta Gorda for breakers, outlets, switches, lighting, panels, and urgent electrical issues.",
    path: "/services/electrical-repairs/",
    keywords: ["electrical repairs", "emergency electrician", "electrical troubleshooting", "Port Charlotte electrician", "North Port electrician", "Punta Gorda electrician"],
    serviceType: "Electrical repairs and troubleshooting",
    faq: serviceFaq["electrical-repairs"],
  },
  "panel-upgrades": {
    title: "Electrical Panel Upgrades in Port Charlotte, North Port & Punta Gorda",
    description: "Electrical panel upgrades, breaker replacements, subpanels, and capacity improvements for Port Charlotte, North Port, and Punta Gorda homes and businesses.",
    path: "/services/panel-upgrades/",
    keywords: ["electrical panel upgrade", "breaker panel replacement", "subpanel installation", "Port Charlotte panel upgrade", "North Port panel upgrade", "Punta Gorda panel upgrade"],
    serviceType: "Electrical panel upgrades",
    faq: serviceFaq["panel-upgrades"],
  },
  "commercial-services": {
    title: "Commercial Electrical Services in Port Charlotte, North Port & Punta Gorda",
    description: "Commercial electrical services for Port Charlotte, North Port, and Punta Gorda businesses, property managers, offices, restaurants, retail spaces, and multi-family properties.",
    path: "/services/commercial-services/",
    keywords: ["commercial electrician", "business electrical services", "property management electrician", "Port Charlotte commercial electrician", "North Port commercial electrician", "Punta Gorda commercial electrician"],
    serviceType: "Commercial electrical services",
    faq: serviceFaq["commercial-services"],
  },
};

export const areaSeo: Record<string, AreaConfig> = {
  "port-charlotte": {
    title: "Electrician in Port Charlotte, FL",
    description: "Licensed electrical services in Port Charlotte, FL for homes and businesses, including lighting, repairs, EV chargers, and panel upgrades.",
    path: "/service-areas/port-charlotte/",
    keywords: ["electrician Port Charlotte FL", "Port Charlotte electrical services", "Port Charlotte electrician"],
    city: "Port Charlotte",
    county: "Charlotte County",
    faq: areaFaq["port-charlotte"],
  },
  "north-port": {
    title: "Electrician in North Port, FL",
    description: "Licensed electrician serving North Port, FL with lighting installation, EV chargers, electrical repairs, panel upgrades, and commercial electrical services.",
    path: "/service-areas/north-port/",
    keywords: ["electrician North Port FL", "North Port electrical services", "North Port electrician"],
    city: "North Port",
    county: "Sarasota County",
    faq: areaFaq["north-port"],
  },
  "punta-gorda": {
    title: "Electrician in Punta Gorda, FL",
    description: "Punta Gorda, FL electrician for electrical repairs, historic home electrical updates, lighting, EV charger installation, and panel upgrades.",
    path: "/service-areas/punta-gorda/",
    keywords: ["electrician Punta Gorda FL", "Punta Gorda electrical services", "historic home electrician"],
    city: "Punta Gorda",
    county: "Charlotte County",
    faq: areaFaq["punta-gorda"],
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

function faqSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
      areaServed: servedCities,
    },
    serviceType: config.serviceType,
    areaServed: servedCities,
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Services", url: `${siteUrl}/#services` },
        { name: config.serviceType, url },
      ])} />
      <JsonLd data={faqSchema(config.faq)} />
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
      <JsonLd data={faqSchema(config.faq)} />
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
