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
  sarasota: {
    name: "Sarasota",
    slug: "sarasota",
    description: "The cultural heart of Southwest Florida",
    county: "Sarasota County",
    population: "56,000+",
    founded: "1902",
    knownFor: "Arts, beaches, and the Ringling Museum",
    heroImage: "/images/sarasota-hero.webp",
    heroAlt: "Sarasota Florida waterfront and homes",
    heroBlurb:
      "Carter Electric has been Sarasota's trusted electrical contractor since 2026, serving homes and businesses from Siesta Key to the Rosemary District.",
    about: [
      "Sarasota is a vibrant Gulf Coast city known for stunning beaches, a thriving arts scene, and diverse architecture—from historic bungalows in Laurel Park to modern bayfront condos. That mix creates unique electrical needs, and Carter Electric is built to handle all of them.",
      "As Sarasota's licensed electrical contractor, we work on everything from 1920s wiring updates to new EV charger circuits and whole-home lighting redesigns. Whether you own a Siesta Key rental, a Lido Key condo, or a commercial space downtown, we bring the same careful, code-compliant work.",
      "Sarasota's tropical climate puts real stress on electrical systems. Salt air, humidity, and summer storms accelerate corrosion and surge damage. We specify weather-appropriate materials and recommend surge protection and generator-ready panels when it makes sense for your property.",
      "Hurricane season is part of life here. We help Sarasota homeowners and businesses prepare with generator interlocks, transfer switches, and panel capacity checks so critical circuits stay powered when the grid goes down. Our 24/7 emergency service means we're available when storms hit.",
    ],
    localNeedsTitle: "Common Electrical Needs in Sarasota",
    localNeeds: [
      {
        title: "Historic home rewiring",
        body: "Older Laurel Park and Southside homes often need safe rewiring, grounded outlets, and panel upgrades while preserving original character.",
      },
      {
        title: "Condo & multi-family service",
        body: "We work with Sarasota condo associations and property managers on common-area lighting, unit repairs, and code updates.",
      },
      {
        title: "Coastal corrosion protection",
        body: "Near-bay and barrier-island properties benefit from corrosion-resistant fixtures, sealed connections, and regular electrical inspections.",
      },
      {
        title: "Storm preparedness",
        body: "Generator hookups, whole-home surge protection, and panel upgrades keep Siesta Key and mainland homes safer during hurricane season.",
      },
    ],
    whyChoose: [
      { title: "Licensed & Insured", desc: "Full Florida licensing and comprehensive insurance on every job." },
      { title: "24/7 Emergency", desc: "Round-the-clock response for outages, sparking, and urgent failures." },
      { title: "Local Expertise", desc: "Deep experience with Sarasota homes, condos, and coastal conditions." },
      { title: "Upfront Pricing", desc: "Clear quotes with no hidden fees before work begins." },
    ],
    neighborhoods: [
      "Downtown Sarasota",
      "Siesta Key",
      "Lido Key",
      "St. Armands Circle",
      "Laurel Park",
      "Southside Village",
      "Gillespie Park",
      "Rosemary District",
      "West of Trail",
      "The Landings",
    ],
    neighborhoodNote:
      "From barrier-island homes to downtown lofts, we serve every major Sarasota neighborhood with the same licensed crew and same-day options when available.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description:
          "Custom recessed, fixture, and smart lighting for Laurel Park bungalows, downtown condos, and modern Sarasota remodels.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description:
          "Pathway, security, and landscape lighting that showcases tropical landscaping and improves evening curb appeal.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description:
          "Level 2 home and business EV chargers with panel checks, permits, and clean garage or driveway installs.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description:
          "Fast troubleshooting for breakers, outlets, flickering lights, and emergency outages across Sarasota County.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description:
          "200-amp upgrades, subpanels, and capacity improvements for homes adding EVs, pools, or modern appliances.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description:
          "Electrical support for Sarasota offices, retail, restaurants, and multi-family properties.",
      },
    ],
    ctaText:
      "Whether you're in Downtown Sarasota, Siesta Key, or anywhere in between, we're ready to help with your electrical needs.",
  },
  venice: {
    name: "Venice",
    slug: "venice",
    description: "The City on the Gulf with old Florida charm",
    county: "Sarasota County",
    population: "23,000+",
    founded: "1925",
    knownFor: "Venice Beach, shark tooth hunting, Italian architecture",
    heroImage: "/images/venice-hero.jpg",
    heroAlt: "Venice Florida Gulf Coast",
    heroBlurb:
      "Trusted electrical services for Venice homes and businesses—from historic downtown to Venice Island beaches.",
    about: [
      "Venice blends Italian-inspired architecture, walkable downtown streets, and Gulf beaches. Homes range from Mediterranean Revival cottages to newer island condos, each with different electrical demands.",
      "Carter Electric serves Venice with licensed residential and commercial electrical work. We understand island humidity, older knob-and-tube replacements in historic stock, and modern load requirements for EV charging and hurricane prep.",
      "Many Venice properties sit close to the water. That means salt exposure, outdoor lighting that must survive storms, and panels that need room for generators or new circuits. We plan installs with those conditions in mind.",
      "From Venice Avenue storefronts to residential streets in Venice Gardens and Eastgate, our team provides clear communication, clean workmanship, and code-compliant results.",
    ],
    localNeedsTitle: "Electrical Challenges We Solve in Venice",
    localNeeds: [
      {
        title: "Mediterranean & historic homes",
        body: "Careful fixture installs and panel updates that respect older architecture without cutting corners on safety.",
      },
      {
        title: "Beach & island properties",
        body: "Weather-rated outdoor circuits, corrosion-aware materials, and storm-ready service for Venice Island homes.",
      },
      {
        title: "Downtown commercial",
        body: "After-hours work options for Venice Avenue businesses that can't shut down during peak tourist hours.",
      },
      {
        title: "Growing power needs",
        body: "Panel upgrades and dedicated circuits for EVs, pools, and renovated kitchens common in Venice remodels.",
      },
    ],
    whyChoose: [
      { title: "Licensed & Insured", desc: "Florida-licensed electricians on every Venice job." },
      { title: "24/7 Emergency", desc: "Urgent response for Venice and nearby Nokomis residents." },
      { title: "Island-Ready Work", desc: "Materials and methods suited to Gulf humidity and salt air." },
      { title: "Clear Quotes", desc: "Transparent pricing before we start—no surprise add-ons." },
    ],
    neighborhoods: [
      "Historic Downtown",
      "Venice Island",
      "South Venice",
      "Venice Gardens",
      "Eastgate",
      "Nokomis",
      "Plantation",
      "Jacaranda West",
      "Capri Isles",
      "Cypress Falls",
    ],
    neighborhoodNote:
      "We regularly serve Venice Island, South Venice, Venice Gardens, and nearby Nokomis with residential and light commercial electrical service.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description:
          "Lighting design and installation that complements Venice's Mediterranean and coastal home styles.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description:
          "Security and landscape lighting for evening curb appeal and safer walkways near the beach.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description:
          "Level 2 charger installs for Venice homeowners going electric, including permits and panel checks.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description:
          "Same-day and emergency repairs from historic downtown to South Venice neighborhoods.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description:
          "Modern panel capacity for renovations, generators, and new appliance circuits.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description:
          "Reliable electrical service for Venice restaurants, shops, and hospitality properties.",
      },
    ],
    ctaText: "From Venice Island to Eastgate, Carter Electric is ready for your next electrical project.",
  },
  englewood: {
    name: "Englewood",
    slug: "englewood",
    description: "A quiet coastal community with old Florida charm",
    county: "Sarasota & Charlotte Counties",
    population: "15,000+",
    founded: "1890s",
    knownFor: "Beautiful beaches, fishing, and peaceful lifestyle",
    heroImage: "/images/englewood-hero.jpg",
    heroAlt: "Englewood Florida coastal community",
    heroBlurb:
      "Honest, licensed electrical service for Englewood homes and businesses across Sarasota and Charlotte counties.",
    about: [
      "Englewood sits on Florida's Gulf Coast where Sarasota and Charlotte counties meet. Residents love the beaches, fishing, and slower pace—and many homes are older coastal properties that need careful electrical updates.",
      "Carter Electric serves Englewood with residential repairs, lighting, EV chargers, panel upgrades, and commercial support along Dearborn Street and nearby corridors. We know beach-house wiring, salt-air corrosion, and storm prep aren't optional here—they're essentials.",
      "Whether your place is on Manasota Key, near Englewood Beach, or inland toward Grove City and Rotonda, we show up with licensed electricians, clear pricing, and work that passes inspection the first time.",
      "Since starting Florida operations in 2026, we've focused on dependable local service: answering the phone, explaining options in plain language, and leaving every job safer than we found it.",
    ],
    localNeedsTitle: "What Englewood Homes Often Need",
    localNeeds: [
      {
        title: "Beach-house electrical",
        body: "Corrosion-resistant fixtures, sealed outdoor boxes, and circuits built for humid, salty air near Englewood Beach and Manasota Key.",
      },
      {
        title: "Older panel replacements",
        body: "Many area homes still run undersized or aging panels that struggle with modern loads—we upgrade safely with permits.",
      },
      {
        title: "Storm readiness",
        body: "Generator interlocks, surge protection, and emergency repair response before and after Gulf storms.",
      },
      {
        title: "Small-business support",
        body: "Electrical maintenance and project work for Dearborn Street shops, restaurants, and local service businesses.",
      },
    ],
    whyChoose: [
      { title: "Dual-County Coverage", desc: "We serve both Sarasota and Charlotte County sides of Englewood." },
      { title: "Coastal Experience", desc: "Installs designed for beach humidity and salt exposure." },
      { title: "24/7 Emergency", desc: "Help when breakers fail or power issues can't wait." },
      { title: "Family-Owned", desc: "Direct communication with a local team that stands behind the work." },
    ],
    neighborhoods: [
      "Dearborn Street",
      "Englewood Beach",
      "Manasota Key",
      "Buchan",
      "Grove City",
      "Placida",
      "Rotonda",
      "South Gulf Cove",
    ],
    neighborhoodNote:
      "From Manasota Key beach homes to Rotonda and South Gulf Cove, Englewood-area residents call Carter Electric for repairs and upgrades.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Lighting updates for historic cottages and modern Englewood homes that match each property's character.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Durable outdoor lighting for pathways, docks approaches, and coastal landscaping.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Permitted Level 2 charger installation with panel capacity checks for Englewood driveways and garages.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "24/7 emergency and standard repairs for outlets, breakers, and whole-home troubleshooting.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Panel and service upgrades for beach houses adding A/C, EVs, or storm equipment.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical service for Englewood businesses along Dearborn Street and nearby commercial corridors.",
      },
    ],
    ctaText: "Call Carter Electric for reliable service throughout the Englewood area.",
  },
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
      "Port Charlotte is one of Southwest Florida's larger residential communities, known for miles of canals, family neighborhoods, and waterfront living on Charlotte Harbor. That growth means steady demand for panel upgrades, EV chargers, and reliable repair service.",
      "Carter Electric provides Port Charlotte homeowners and businesses with licensed electrical work—from quick outlet repairs to full panel replacements and outdoor lighting along the water.",
      "Canal-front homes often need outdoor GFCI protection, dock-adjacent lighting circuits, and panels that can support boats lifts, pool equipment, and modern HVAC. We evaluate loads carefully so additions don't overload your service.",
      "We also support commercial properties and multi-family buildings with maintenance-minded electrical service and clear scheduling for property managers.",
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
      "From the historic district to neighborhoods beyond downtown, we provide the same responsive service Port Charlotte and Englewood neighbors already count on.",
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
      { title: "Local Response", desc: "Serving Punta Gorda and greater Charlotte County promptly." },
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
  "cape-coral": {
    name: "Cape Coral",
    slug: "cape-coral",
    description: "The Waterfront Wonderland of Southwest Florida",
    county: "Lee County",
    population: "200,000+",
    founded: "1957",
    knownFor: "400+ miles of canals and waterfront living",
    heroImage: "/images/cape-coral-hero.jpeg",
    heroAlt: "Cape Coral Florida canal homes",
    heroBlurb:
      "Electrical contractor for Cape Coral waterfront homes, canal properties, and growing neighborhoods.",
    about: [
      "Cape Coral is defined by its canals—hundreds of miles of waterfront living that make outdoor power, dock lighting, boat lifts, and storm prep everyday electrical topics. Homes here often need more capacity than original panels were built for.",
      "Carter Electric serves Cape Coral with lighting, EV chargers, repairs, panel upgrades, and commercial electrical work. We understand waterfront GFCI requirements, corrosion, and the load math behind lifts, pools, and multiple A/C systems.",
      "Whether you're in northwest Cape, near Cape Harbour, or along a quiet canal, we provide licensed workmanship and practical recommendations—not upsells you don't need.",
      "Lee County permitting and inspection are part of our process on required jobs, so your upgrade or charger install is documented and code-compliant.",
    ],
    localNeedsTitle: "Cape Coral Waterfront & Home Electrical Needs",
    localNeeds: [
      {
        title: "Dock & lift power",
        body: "Dedicated circuits and safe outdoor power for boat lifts, dock lighting, and waterfront equipment.",
      },
      {
        title: "High HVAC loads",
        body: "Panel and circuit planning for multi-zone A/C common in larger Cape Coral homes.",
      },
      {
        title: "Canal-lot outdoor lighting",
        body: "Landscape and security lighting that holds up to humidity and nighttime waterfront use.",
      },
      {
        title: "EV-ready garages",
        body: "Level 2 chargers and service upgrades as more Cape Coral drivers switch to electric.",
      },
    ],
    whyChoose: [
      { title: "Waterfront Experience", desc: "Familiar with canal-home power, lifts, and outdoor circuits." },
      { title: "Lee County Service", desc: "Serving Cape Coral and nearby Lee County communities." },
      { title: "24/7 Emergency", desc: "Help when electrical problems threaten safety or comfort." },
      { title: "Clean Installs", desc: "Neat workmanship in garages, docks approaches, and finished spaces." },
    ],
    neighborhoods: [
      "Cape Harbour",
      "Tarpon Point",
      "Southwest Cape",
      "Northwest Cape",
      "Yacht Club",
      "Pelican",
      "Sandoval",
      "Coral Lakes",
    ],
    neighborhoodNote:
      "From Cape Harbour and Tarpon Point to northwest and southwest Cape neighborhoods, we cover waterfront and inland homes alike.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Modern lighting packages for open-plan Cape Coral homes and renovations.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Lanai, seawall-adjacent, and landscape lighting designed for canal living.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Tesla and multi-brand Level 2 charger installs with panel capacity review.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Rapid repairs for breakers, GFCIs, outdoor circuits, and whole-home issues.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "200-amp and larger service upgrades for lifts, pools, EVs, and additions.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical projects for Cape Coral retail, offices, and property managers.",
      },
    ],
    ctaText: "Cape Coral electrical project? Get a free quote from Carter Electric.",
  },
  "fort-myers": {
    name: "Fort Myers",
    slug: "fort-myers",
    description: "The City of Palms with historic roots and modern growth",
    county: "Lee County",
    population: "90,000+",
    founded: "1886",
    knownFor: "River District, Edison & Ford Winter Estates, and urban growth",
    heroImage: "/images/fort-myers-hero.jpg",
    heroAlt: "Fort Myers Florida city and riverfront",
    heroBlurb:
      "Licensed electrician serving Fort Myers homes, condos, and businesses from the River District outward.",
    about: [
      "Fort Myers combines historic neighborhoods, a revitalized River District, and fast-growing residential areas. Electrical needs range from older home rewiring to commercial build-outs and multi-family maintenance.",
      "Carter Electric serves Fort Myers with full residential and commercial electrical services. We help homeowners modernize panels and lighting, and we support businesses that need reliable power with minimal downtime.",
      "Humidity, storms, and high A/C demand are constants in Lee County. We design circuits and upgrades with Florida load realities in mind, and we offer emergency service when failures can't wait until morning.",
      "Whether you're near downtown, McGregor Boulevard corridors, or south Fort Myers growth areas, you'll get licensed electricians and straightforward communication.",
    ],
    localNeedsTitle: "Fort Myers Electrical Service Focus",
    localNeeds: [
      {
        title: "Urban & historic stock",
        body: "Safe updates for older Fort Myers homes that need grounding, capacity, and code corrections.",
      },
      {
        title: "Condo & multi-family",
        body: "Unit repairs and common-area electrical work coordinated with associations and managers.",
      },
      {
        title: "Commercial build-outs",
        body: "Lighting, power distribution, and maintenance for River District and corridor businesses.",
      },
      {
        title: "Storm-season readiness",
        body: "Generator prep, surge protection, and emergency repairs before and after major weather.",
      },
    ],
    whyChoose: [
      { title: "City & Suburb Coverage", desc: "From downtown Fort Myers to surrounding neighborhoods." },
      { title: "Commercial Capable", desc: "Residential skill plus multi-family and business experience." },
      { title: "Emergency Service", desc: "24/7 response for urgent electrical hazards and outages." },
      { title: "Permit Handling", desc: "We manage required permits and inspections on qualifying work." },
    ],
    neighborhoods: [
      "River District",
      "McGregor",
      "Dean Park",
      "Downtown Fort Myers",
      "Iona",
      "Whiskey Creek",
      "South Fort Myers",
      "Tice",
    ],
    neighborhoodNote:
      "We serve the River District, McGregor area, south Fort Myers, and nearby Lee County communities.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Lighting installation for Fort Myers homes, condos, and renovated interiors.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Security and landscape lighting for yards, walkways, and commercial exteriors.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Home and light-commercial EV charger installs with dedicated circuits.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Diagnostic electrical repairs and 24/7 emergency service across Fort Myers.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Panel and service upgrades for growing residential and business power needs.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical maintenance and projects for Fort Myers offices, retail, and multi-family.",
      },
    ],
    ctaText: "Need a Fort Myers electrician? Contact Carter Electric for a free quote.",
  },
  "bonita-springs": {
    name: "Bonita Springs",
    slug: "bonita-springs",
    description: "Gateway to the Gulf between Fort Myers and Naples",
    county: "Lee County",
    population: "55,000+",
    founded: "1912",
    knownFor: "Barefoot Beach, luxury communities, and coastal living",
    heroImage: "/images/bonita-springs-hero.jpg",
    heroAlt: "Bonita Springs Florida coastal homes",
    heroBlurb:
      "Premium residential and commercial electrical service for Bonita Springs and nearby coastal communities.",
    about: [
      "Bonita Springs sits between Fort Myers and Naples with beaches, golf communities, and a mix of luxury estates and established neighborhoods. Electrical expectations here are high—clean installs, discreet wiring, and systems that just work.",
      "Carter Electric provides Bonita Springs clients with lighting design support, EV chargers, panel upgrades, repairs, and commercial electrical service. We treat finished homes carefully and communicate clearly on timing and scope.",
      "Coastal conditions still apply: humidity, storms, and outdoor living spaces that need durable lighting and safe power. We specify appropriate materials and recommend surge protection for sensitive electronics and whole-home safety.",
      "From Barefoot Beach-area properties to inland Bonita communities, our licensed team delivers thorough workmanship backed by insurance and local accountability.",
    ],
    localNeedsTitle: "Bonita Springs Homeowner Priorities",
    localNeeds: [
      {
        title: "Luxury lighting design",
        body: "Layered indoor and outdoor lighting for estates, lanais, and architectural features.",
      },
      {
        title: "Smart home power",
        body: "Circuits and controls that support modern automation, shades, and AV-friendly layouts.",
      },
      {
        title: "Generator readiness",
        body: "Interlocks and panel capacity planning so standby power is safe and inspector-ready.",
      },
      {
        title: "Coastal durability",
        body: "Outdoor fixtures and connections chosen for Gulf humidity and storm exposure.",
      },
    ],
    whyChoose: [
      { title: "Detail-Oriented", desc: "Clean finishes suitable for higher-end Bonita homes." },
      { title: "Licensed & Insured", desc: "Full credentials and protection on every project." },
      { title: "Flexible Scheduling", desc: "We work around occupancy and community access rules." },
      { title: "Local Team", desc: "Southwest Florida electricians who know Lee County conditions." },
    ],
    neighborhoods: [
      "Barefoot Beach",
      "Bonita Bay",
      "Spanish Wells",
      "Pepperland",
      "Spring Creek",
      "Downtown Bonita",
      "Palmira",
      "Seasons",
    ],
    neighborhoodNote:
      "We serve Bonita Bay, Barefoot Beach area homes, Spanish Wells, and neighborhoods throughout Bonita Springs.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "High-end fixture installs, recessed layouts, and dimming systems for Bonita homes.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Architectural and landscape lighting for lanais, entryways, and coastal yards.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Discreet Level 2 charger installs in garages and porte-cocheres with proper capacity.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Prompt repairs and troubleshooting for residential and light commercial properties.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Service upgrades supporting pools, outdoor kitchens, EVs, and whole-home generators.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical service for Bonita Springs offices, retail, and community facilities.",
      },
    ],
    ctaText: "Bonita Springs electrical project? Request your free Carter Electric quote.",
  },
  naples: {
    name: "Naples",
    slug: "naples",
    description: "Southwest Florida's premier coastal city",
    county: "Collier County",
    population: "20,000+",
    founded: "1880s",
    knownFor: "Luxury homes, beaches, and world-class amenities",
    heroImage: "/images/naples-hero.webp",
    heroAlt: "Naples Florida luxury coastal living",
    heroBlurb:
      "Discreet, licensed electrical service for Naples homes, condos, and businesses throughout Collier County.",
    about: [
      "Naples is known for exceptional residential quality—from Old Naples cottages to Port Royal estates and high-rise Gulf condos. Electrical work here must be precise, tidy, and coordinated with finishes and building rules.",
      "Carter Electric serves Naples with indoor and outdoor lighting, EV chargers, panel upgrades, repairs, and commercial electrical services. We respect HOA and condo procedures and keep communication professional from quote to final walkthrough.",
      "Collier County coastal conditions demand durable outdoor equipment and thoughtful surge protection. We help homeowners protect investments while improving comfort, lighting, and charging convenience.",
      "Whether your project is a single fixture upgrade or a multi-circuit remodel, you'll work with licensed electricians focused on quality and reliability.",
    ],
    localNeedsTitle: "Naples Electrical Project Types",
    localNeeds: [
      {
        title: "Estate & luxury lighting",
        body: "Layered lighting plans for interiors, art walls, landscaping, and evening curb appeal.",
      },
      {
        title: "Condo association work",
        body: "Unit and common-area electrical service coordinated with Naples condo and HOA requirements.",
      },
      {
        title: "EV charging in garages",
        body: "Level 2 installs that meet building rules and electrical capacity constraints.",
      },
      {
        title: "Whole-home resilience",
        body: "Panel upgrades, surge protection, and generator-ready configurations for storm season.",
      },
    ],
    whyChoose: [
      { title: "White-Glove Approach", desc: "Careful protection of finished floors, cabinetry, and landscapes." },
      { title: "Collier County Service", desc: "Serving Naples and nearby coastal communities." },
      { title: "Code Expertise", desc: "Permits and inspections handled on required electrical work." },
      { title: "Responsive Team", desc: "Clear scheduling and follow-through from first call to completion." },
    ],
    neighborhoods: [
      "Old Naples",
      "Port Royal",
      "Aqualane Shores",
      "Park Shore",
      "Pelican Bay",
      "Grey Oaks",
      "North Naples",
      "East Naples",
    ],
    neighborhoodNote:
      "We serve Old Naples, Port Royal, Park Shore, Pelican Bay, North Naples, and communities across the Naples area.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Precision lighting installation for Naples residences and high-end remodels.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Landscape and architectural lighting for estates, courtyards, and coastal exteriors.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "Premium EV charger installation with clean routing and capacity verification.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Reliable repairs for homes, condos, and commercial spaces throughout Naples.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Service and panel upgrades supporting modern luxury home electrical loads.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical projects for Naples offices, retail, hospitality, and multi-family properties.",
      },
    ],
    ctaText: "Naples electrical work done right—get your free quote from Carter Electric.",
  },
  "marco-island": {
    name: "Marco Island",
    slug: "marco-island",
    description: "A barrier-island paradise in Collier County",
    county: "Collier County",
    population: "16,000+",
    founded: "1960s",
    knownFor: "Beaches, waterfront homes, and island living",
    heroImage: "/images/marco-island-hero.jpg",
    heroAlt: "Marco Island Florida barrier island homes",
    heroBlurb:
      "Island-ready electrical service for Marco Island homes, condos, and waterfront properties.",
    about: [
      "Marco Island is a barrier-island community where nearly every property deals with salt air, strong sun, and storm exposure. Electrical systems need materials and workmanship that can handle island life year after year.",
      "Carter Electric provides Marco Island residents with repairs, lighting, EV chargers, panel upgrades, and commercial electrical service. We plan for corrosion, outdoor living, and condo building constraints common on the island.",
      "From Hideaway Beach to Tigertail and waterfront streets across the island, our licensed electricians deliver dependable service with clear communication about scope, timing, and code requirements.",
      "If you're preparing for hurricane season or modernizing an older island home, we can evaluate your panel, grounding, outdoor circuits, and surge protection in one visit.",
    ],
    localNeedsTitle: "Marco Island Electrical Realities",
    localNeeds: [
      {
        title: "Marine-grade durability",
        body: "Outdoor fixtures, boxes, and connections selected for salt air and coastal storms.",
      },
      {
        title: "Condo logistics",
        body: "Work coordinated with building rules, elevators, and common-area access on high-rises.",
      },
      {
        title: "Waterfront outdoor power",
        body: "Safe circuits for docks, lifts, exterior kitchens, and landscape lighting.",
      },
      {
        title: "Storm recovery",
        body: "Post-storm inspections and emergency repairs when island power systems take a hit.",
      },
    ],
    whyChoose: [
      { title: "Island Specialists", desc: "Experience with barrier-island electrical conditions." },
      { title: "Licensed & Insured", desc: "Fully credentialed electricians for residential and commercial work." },
      { title: "Emergency Ready", desc: "24/7 support when electrical failures can't wait for the ferry schedule of life to calm down." },
      { title: "Thorough Assessments", desc: "We check capacity and safety—not just the one outlet that failed." },
    ],
    neighborhoods: [
      "Hideaway Beach",
      "Tigertail Beach area",
      "Old Marco",
      "Mackle Park area",
      "Factory Bay",
      "Smokehouse Bay",
      "South Beach",
      "Collier Bay",
    ],
    neighborhoodNote:
      "We serve waterfront homes and condos across Marco Island, including Hideaway Beach, Old Marco, and bay-front neighborhoods.",
    services: [
      {
        title: "Indoor Lighting",
        slug: serviceSlugs.indoor,
        description: "Lighting upgrades for Marco Island condos and single-family island homes.",
      },
      {
        title: "Outdoor & Landscape Lighting",
        slug: serviceSlugs.outdoor,
        description: "Coastal-rated outdoor lighting for pathways, entries, and waterfront landscaping.",
      },
      {
        title: "EV Charger Installation",
        slug: serviceSlugs.ev,
        description: "EV charger installs where building and panel capacity allow, with full code compliance.",
      },
      {
        title: "Electrical Repairs",
        slug: serviceSlugs.repairs,
        description: "Island electrical repairs for corrosion issues, breakers, and emergency failures.",
      },
      {
        title: "Panel Upgrades",
        slug: serviceSlugs.panel,
        description: "Panel upgrades that support modern island living and storm-prep equipment.",
      },
      {
        title: "Commercial Services",
        slug: serviceSlugs.commercial,
        description: "Electrical service for Marco Island hospitality, retail, and multi-family properties.",
      },
    ],
    ctaText: "Need a Marco Island electrician? Carter Electric is ready to help.",
  },
};

export const allAreaLinks = Object.values(areaContent).map((a) => ({
  name: a.name,
  slug: a.slug,
}));
