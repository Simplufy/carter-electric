import type { MetadataRoute } from "next";

const baseUrl = "https://www.carterelectricflorida.com";

const routes = [
  "/",
  "/about/",
  "/privacy-policy/",
  "/terms-and-conditions/",
  "/services/indoor-lighting/",
  "/services/outdoor-lighting/",
  "/services/ev-charger-installation/",
  "/services/electrical-repairs/",
  "/services/panel-upgrades/",
  "/services/commercial-services/",
  "/service-areas/port-charlotte/",
  "/service-areas/north-port/",
  "/service-areas/punta-gorda/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
