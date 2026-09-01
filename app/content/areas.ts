export type AreaServiceCard = {
  title: string;
  description: string;
  slug: string;
};

export type AreaPageData = {
  name: string;
  slug: string;
  description: string;
  county: string;
  population: string;
  founded: string;
  knownFor: string;
  heroImage: string;
  heroAlt: string;
  heroBlurb: string;
  about: string[];
  localNeedsTitle: string;
  localNeeds: { title: string; body: string }[];
  whyChoose: { title: string; desc: string }[];
  neighborhoods: string[];
  neighborhoodNote: string;
  services: AreaServiceCard[];
  ctaText: string;
};

const serviceSlugs = {
  indoor: "indoor-lighting",
  outdoor: "outdoor-lighting",
  ev: "ev-charger-installation",
  repairs: "electrical-repairs",
  panel: "panel-upgrades",
  commercial: "commercial-services",
} as const;

export const areaContent: Record<string, AreaPageData> = {
  "port-charlotte": {
    name: "Port Charlotte",
    slug: "port-charlotte",
    description: "A growing harbor community on Charlotte Harbor",
    county: "Charlotte County",
    population: "60,000+",
    founded: "1950s",
    knownFor: "Canals, waterfront living, and family neighborhoods",
    heroImage: "/images/port-charlotte-hero.jpg",
    heroAlt: "Port Charlotte Florida canals and homes",
    heroBlurb:
      "Licensed electrical contractor serving Port Charlotte homes, canal properties, and local businesses.",
    about: [
      "Port Charlotte is one of Charlotte County's larger residential communities, known for miles of canals, family neighborhoods, and waterfront living on Charlotte Harbor. That growth means steady demand for panel upgrades, EV chargers, and reliable repair service.",
      "Carter Electric provides Port Charlotte homeowners and businesses with licensed electrical work—from quick outlet repairs to full panel replacements and outdoor lighting along the water.",
      "Canal-front homes often need outdoor GFCI protection, dock-adjacent lighting circuits, and panels that can support boat lifts, pool equipment, and modern HVAC. We evaluate loads carefully so additions don't overload your service.",
      "We also support commercial properties and multi-family buildings with maintenance-minded electrical service and clear scheduling for property managers across Port Charlotte, North Port, and Punta Gorda.",
    ],
    localNeedsTitle: "Port Charlotte Electrical Priorities",
    localNeeds: [
      {
        title: "Canal & waterfront homes",
        body: "Safe outdoor power, weather-rated fixtures, and GFCI protection for docks, lifts, and pool equipment.",
      },
      {
        title: "Neighborhood growth loads",
        body: "Panel upgrades when kitchens, EVs, and Florida A/C push older 100-amp services past their limit.",
      },
      {
        title: "Storm recovery support",
        body: "Post-storm electrical inspections, surge damage repairs, and generator-ready panel work.",
      },
      {
        title: "Family-home repairs",
        body: "Fast fixes for breakers, switches, ceiling fans, and safety issues across Port Charlotte subdivisions.",
      },
    ],
    whyChoose: [
      { title: "Charlotte County Focus", desc: "Regular service throughout Port Charlotte and nearby communities." },
      { title: "Waterfront Know-How", desc: "Experience with canal-home outdoor power and corrosion concerns." },
      { title: "Emergency Available", desc: "24/7 help for dangerous or whole-home electrical failures." },
      { title: "Upfront Pricing", desc: "Written estimates so you know the cost before we begin." },
    ],
    neighborhoods: [
      "South Gulf Cove",
      "Murdock",
      "Maple Leaf",
      "Harbour Heights",
      "Deep Creek",
      "Gardens of Gulf Cove",
      "Edgewater",
      "Charlotte Harbor",
    ],
    neighborhoodNote:
      "We serve Port Charlotte neighborhoods from Murdock and Deep Creek to South Gulf Cove and the harbor corridor.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Recessed lighting, fixtures, and dimmers for Port Charlotte remodels and new living spaces.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Security and landscape lighting for canal lots, lanais, and waterfront walkways.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Home Level 2 EV charger installation with dedicated circuits and local permitting.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Troubleshooting and emergency repairs for Port Charlotte residences and small businesses.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Service upgrades that support boats, pools, EVs, and modern Florida HVAC loads.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical projects and maintenance for Port Charlotte commercial and multi-family properties.",
      },
    ],
    ctaText: "Need a Port Charlotte electrician? Get a free quote from Carter Electric today.",
  },
  "north-port": {
    name: "North Port",
    slug: "north-port",
    description: "A fast-growing city between Charlotte and Sarasota counties",
    county: "Sarasota County",
    population: "80,000+",
    founded: "1959",
    knownFor: "Family neighborhoods, parks, and new construction growth",
    heroImage: "/images/north-port-hero.jpg",
    heroAlt: "North Port Florida residential community",
    heroBlurb:
      "Licensed electrical contractor serving North Port homes, new construction, and local businesses.",
    about: [
      "North Port is one of Sarasota County's fastest-growing cities, with expanding neighborhoods, new construction, and established communities that all need reliable electrical service. Carter Electric is built for that mix—from first-time panel upgrades to EV chargers and outdoor lighting.",
      "We provide North Port homeowners and businesses with licensed electrical work including repairs, lighting installation, panel upgrades, and commercial support. Clear communication and code-compliant installs are standard on every job.",
      "Many North Port homes are adding modern loads—kitchen remodels, pool equipment, hurricane generators, and Level 2 EV chargers. We evaluate your panel capacity carefully so new circuits are safe and inspector-ready.",
      "Whether you are near Warm Mineral Springs, in Wellen Park-area growth corridors, or in established North Port subdivisions, our licensed team delivers the same responsive service Port Charlotte and Punta Gorda neighbors already count on.",
    ],
    localNeedsTitle: "North Port Electrical Priorities",
    localNeeds: [
      {
        title: "New construction & remodels",
        body: "Lighting layouts, dedicated circuits, and panel capacity planning for growing North Port homes.",
      },
      {
        title: "EV-ready garages",
        body: "Level 2 charger installs with permits and panel checks as more North Port drivers go electric.",
      },
      {
        title: "Storm preparedness",
        body: "Generator interlocks, surge protection, and post-storm electrical inspections for hurricane season.",
      },
      {
        title: "Everyday repairs",
        body: "Fast troubleshooting for breakers, outlets, flickering lights, and safety issues across North Port.",
      },
    ],
    whyChoose: [
      { title: "Local Coverage", desc: "Regular service throughout North Port and nearby Charlotte County communities." },
      { title: "Growth-Ready Work", desc: "Experience with new loads, remodels, and expanding neighborhood homes." },
      { title: "Emergency Available", desc: "24/7 help for dangerous or whole-home electrical failures." },
      { title: "Upfront Pricing", desc: "Written estimates so you know the cost before we begin." },
    ],
    neighborhoods: [
      "Warm Mineral Springs",
      "Wellen Park area",
      "Heron Creek",
      "Bobcat Trail",
      "Sabal Trace",
      "North Port Estates",
      "Woodland Trails",
      "Price Boulevard corridor",
    ],
    neighborhoodNote:
      "We serve North Port neighborhoods from Warm Mineral Springs and Heron Creek to growth areas near Wellen Park and along major corridors.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Recessed lighting, fixtures, and dimmers for North Port remodels and new living spaces.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Security and landscape lighting for lanais, walkways, and North Port curb appeal.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Home Level 2 EV charger installation with dedicated circuits and local permitting.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Troubleshooting and emergency repairs for North Port residences and small businesses.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Service upgrades that support EVs, pools, generators, and modern Florida HVAC loads.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical projects and maintenance for North Port commercial and multi-family properties.",
      },
    ],
    ctaText: "Need a North Port electrician? Get a free quote from Carter Electric today.",
  },
  "punta-gorda": {
    name: "Punta Gorda",
    slug: "punta-gorda",
    description: "Historic waterfront charm on Charlotte Harbor",
    county: "Charlotte County",
    population: "20,000+",
    founded: "1887",
    knownFor: "Historic district, harbor views, and walkable downtown",
    heroImage: "/images/punta-gorda-hero.jpg",
    heroAlt: "Punta Gorda Florida historic waterfront",
    heroBlurb:
      "Electrical services for Punta Gorda historic homes, waterfront properties, and downtown businesses.",
    about: [
      "Punta Gorda is one of Charlotte County's most distinctive cities—historic brick streets, harbor views, and a walkable downtown that draws residents and visitors year-round. Many homes carry original character that deserves careful electrical modernization.",
      "Carter Electric helps Punta Gorda homeowners update wiring, panels, and lighting without treating every house like a new build. We plan work that improves safety while respecting historic finishes when possible.",
      "Waterfront and downtown properties also need reliable outdoor lighting, surge protection, and generator readiness. Our licensed team handles residential and commercial projects with permits and clean job sites.",
      "From the historic district to neighborhoods beyond downtown, we provide the same responsive service Port Charlotte and North Port neighbors already count on.",
    ],
    localNeedsTitle: "Punta Gorda-Specific Electrical Work",
    localNeeds: [
      {
        title: "Historic home updates",
        body: "Rewiring, grounded outlets, and panel upgrades for older Punta Gorda homes that still need modern safety.",
      },
      {
        title: "Harbor-area corrosion",
        body: "Outdoor electrical components chosen for humidity and salt exposure near Charlotte Harbor.",
      },
      {
        title: "Downtown commercial",
        body: "Lighting and power work for restaurants, shops, and offices that need minimal business disruption.",
      },
      {
        title: "Storm resilience",
        body: "Surge protection and generator-ready panels for a city that knows hurricane season well.",
      },
    ],
    whyChoose: [
      { title: "Historic Sensitivity", desc: "Careful upgrades that improve safety without unnecessary damage." },
      { title: "Licensed Pros", desc: "Florida-licensed electricians and fully insured projects." },
      { title: "Local Response", desc: "Serving Punta Gorda, Port Charlotte, and North Port promptly." },
      { title: "Honest Guidance", desc: "We explain what must be fixed now versus what can wait." },
    ],
    neighborhoods: [
      "Historic District",
      "Downtown Punta Gorda",
      "Burnt Store",
      "Punta Gorda Isles",
      "Tropical Gulf Acres",
      "Charlotte Park",
      "Seminole Lakes",
      "Deep Creek",
    ],
    neighborhoodNote:
      "We regularly work in the historic district, Punta Gorda Isles, Burnt Store area, and surrounding Charlotte County neighborhoods.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Fixture and recessed lighting that fits historic and contemporary Punta Gorda interiors.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Pathway and architectural lighting for waterfront homes and downtown curb appeal.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Level 2 EV chargers installed to code with dedicated circuits and inspections.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Diagnostic repairs for aging wiring, breakers, and emergency electrical issues.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Panel replacements that unlock capacity for renovations and modern appliances.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical support for Punta Gorda's downtown and harbor-area businesses.",
      },
    ],
    ctaText: "Looking for a Punta Gorda electrician? Schedule service with Carter Electric.",
  },
};

export const allAreaLinks = Object.values(areaContent).map((a) => ({
  name: a.name,
  slug: a.slug,
}));
