export type ServicePageData = {
  slug: string;
  name: string;
  shortName: string;
  iconHint: string;
  heroImage: string;
  heroAlt: string;
  heroBlurb: string;
  h1: string;
  introTitle: string;
  intro: string[];
  sections: { title: string; body: string; bullets?: string[] }[];
  processTitle: string;
  process: { title: string; body: string }[];
  whyTitle: string;
  why: string[];
  areasNote: string;
};

export const serviceContent: Record<string, ServicePageData> = {
  "indoor-lighting": {
    slug: "indoor-lighting",
    name: "Indoor Lighting Installation",
    shortName: "Indoor Lighting",
    iconHint: "lightbulb",
    heroImage: "/images/IMG_9500.jpeg",
    heroAlt: "Indoor lighting installation in Port Charlotte home",
    heroBlurb:
      "Transform your home with custom indoor lighting—recessed LEDs, fixtures, dimmers, and smart controls installed by licensed electricians in Port Charlotte, North Port, and Punta Gorda.",
    h1: "Indoor Lighting Installation",
    introTitle: "Professional Indoor Lighting Services in Port Charlotte, North Port & Punta Gorda",
    intro: [
      "Lighting shapes how every room feels and functions. Carter Electric designs and installs indoor lighting for homes in Port Charlotte, North Port, and Punta Gorda—so your space looks better, uses less energy, and works the way you live.",
      "We handle recessed and canless LED layouts, chandelier and pendant installs, under-cabinet kitchen lighting, accent lighting for art and architecture, and whole-home dimming or smart control systems. Every project starts with a free consultation focused on your rooms, ceilings, and goals.",
      "Florida homes often have unique ceiling structures, humidity considerations, and open floor plans that need balanced light layers. Our licensed electricians plan circuits cleanly, match fixtures to your style, and complete work to Florida electrical code with permits when required.",
    ],
    sections: [
      {
        title: "Indoor Lighting Solutions We Install",
        body: "Whether you are remodeling a kitchen in Port Charlotte or updating living areas in North Port or Punta Gorda, we install lighting that is both beautiful and practical.",
        bullets: [
          "Recessed and canless LED ceiling lighting",
          "Chandeliers, pendants, and statement fixtures",
          "Under-cabinet and toe-kick kitchen lighting",
          "Accent, track, and art lighting",
          "Dimmer switches and multi-scene controls",
          "Smart lighting integration (app and voice control)",
        ],
      },
      {
        title: "Serving Homes in Port Charlotte, North Port & Punta Gorda",
        body: "We regularly complete indoor lighting projects in Port Charlotte, North Port, and Punta Gorda. Local knowledge matters—coastal humidity, condo rules, and older home wiring all affect the right approach.",
      },
      {
        title: "When to Upgrade Your Indoor Lighting",
        body: "Consider a lighting refresh if rooms feel dark at night, you are stuck with builder-grade fixtures, your kitchen needs better task light, or you want lower energy bills with LEDs. Remodels and open-concept renovations are also ideal times to redesign layouts before drywall closes.",
      },
    ],
    processTitle: "Our Indoor Lighting Process",
    process: [
      { title: "Free Consultation", body: "We walk the home, discuss how you use each room, and note ceiling access and switch locations." },
      { title: "Custom Lighting Plan", body: "You receive a clear plan and quote covering fixtures, controls, labor, and any electrical upgrades needed." },
      { title: "Expert Installation", body: "Licensed electricians install cleanly—protecting floors and finishes—and test every circuit." },
      { title: "Final Walkthrough", body: "We show you controls, confirm dimming scenes, and make sure every room feels right." },
    ],
    whyTitle: "Why Homeowners Choose Carter Electric for Lighting",
    why: [
      "Licensed & insured local electricians",
      "Design help, not just fixture hanging",
      "LED-first, energy-efficient recommendations",
      "Clean workmanship in finished homes",
      "Permits and inspections when required",
      "Service in Port Charlotte, North Port & Punta Gorda",
    ],
    areasNote: "Looking for an indoor lighting electrician near you? Visit our city pages for local details.",
  },
  "outdoor-lighting": {
    slug: "outdoor-lighting",
    name: "Outdoor & Landscape Lighting",
    shortName: "Outdoor Lighting",
    iconHint: "home",
    heroImage: "/images/service-outdoor.jpg",
    heroAlt: "Outdoor landscape lighting installation",
    heroBlurb:
      "Professional outdoor and landscape lighting for Port Charlotte, North Port, and Punta Gorda homes—security, pathways, lanais, and architectural accents built for coastal weather.",
    h1: "Outdoor & Landscape Lighting",
    introTitle: "Outdoor Lighting Built for Port Charlotte, North Port & Punta Gorda",
    intro: [
      "Outdoor lighting extends how you use your lanai, pool deck, and yard after sunset—and it is one of the best upgrades for safety and curb appeal. Carter Electric installs weather-ready outdoor lighting systems designed for Gulf Coast humidity, salt air, and storm seasons.",
      "From low-voltage landscape lighting in Punta Gorda to security lighting on Port Charlotte canal lots, we design layouts that highlight palms, walkways, entries, and architecture without harsh glare.",
      "We also repair and upgrade older outdoor systems that have failed from corrosion, damaged wire, or outdated fixtures—replacing them with efficient LEDs and smart or photocell controls.",
    ],
    sections: [
      {
        title: "Outdoor Lighting Services",
        body: "Every property is different. Waterfront homes need corrosion-aware materials; inland neighborhoods may want layered landscape scenes. We tailor the system to your home and budget.",
        bullets: [
          "Pathway, driveway, and step lighting",
          "Security and motion-assisted lighting",
          "Patio, lanai, and poolside ambient lighting",
          "Uplighting for palms and architectural features",
          "Low-voltage landscape lighting systems",
          "Timers, photocells, and smart outdoor controls",
        ],
      },
      {
        title: "Coastal Durability Matters",
        body: "Outdoor electrical work near Charlotte Harbor fails fast when the wrong fixtures are used. We specify weather-rated products, proper sealing, and GFCI protection so your investment lasts through rainy summers and hurricane season.",
      },
      {
        title: "Where We Install Outdoor Lighting",
        body: "Carter Electric provides outdoor lighting installation and repair throughout Port Charlotte, North Port, and Punta Gorda.",
      },
    ],
    processTitle: "How Outdoor Lighting Projects Work",
    process: [
      { title: "Site Walk", body: "We review landscaping, walkways, power sources, and nighttime goals on your property." },
      { title: "Design & Quote", body: "You get a fixture plan and transparent pricing before installation begins." },
      { title: "Professional Install", body: "We run wiring cleanly, set fixtures, and aim lights for balanced coverage." },
      { title: "Night Check", body: "We verify aiming, controls, and safety so the system looks right after dark." },
    ],
    whyTitle: "Why Choose Us for Outdoor Lighting",
    why: [
      "Coastal-ready materials and methods",
      "Security and beauty in one plan",
      "LED efficiency with strong light quality",
      "Licensed electricians—not seasonal crews only",
      "Repair and full redesign options",
      "Local service in Port Charlotte, North Port & Punta Gorda",
    ],
    areasNote: "Explore electrician pages for your city to see outdoor and landscape lighting service near you.",
  },
  "ev-charger-installation": {
    slug: "ev-charger-installation",
    name: "EV Charger Installation",
    shortName: "EV Chargers",
    iconHint: "car",
    heroImage: "/images/service-ev.jpg",
    heroAlt: "EV charger installation for Port Charlotte homes",
    heroBlurb:
      "Licensed Level 2 EV charger installation for Port Charlotte, North Port, and Punta Gorda homes and businesses—Tesla and all major brands, with permits and panel checks.",
    h1: "EV Charger Installation",
    introTitle: "Home & Business EV Charger Installation in Port Charlotte, North Port & Punta Gorda",
    intro: [
      "Charging at home is the most convenient way to own an electric vehicle. Carter Electric installs Level 2 EV chargers in Port Charlotte, North Port, and Punta Gorda with dedicated circuits, clean mounting, and full attention to panel capacity and local code.",
      "We install hardwired and plug-in units for Tesla, Ford, Hyundai, Kia, Chevrolet, Rivian, and other brands. If your panel needs an upgrade first, we can handle charger and service work as one coordinated project.",
      "From Port Charlotte garages to North Port driveways and Punta Gorda homes, our process includes load evaluation, permitting when required, and a final test so you charge safely from day one.",
    ],
    sections: [
      {
        title: "What We Install",
        body: "Most homeowners want a 240V Level 2 charger for overnight charging. We help you choose amperage and placement based on your vehicle, garage layout, and electrical service size.",
        bullets: [
          "Level 2 residential EV charger installation",
          "Tesla Wall Connector and universal chargers",
          "Hardwired and NEMA outlet configurations",
          "Dedicated circuit runs from panel to charger",
          "Panel capacity checks and upgrades",
          "Permit and inspection coordination",
        ],
      },
      {
        title: "Do You Need a Panel Upgrade First?",
        body: "Not always. Many homes can support a 40–60 amp charger circuit on an existing 200-amp panel. Older 100-amp services or homes with pools, lifts, and multiple A/C units may need more capacity. We assess before quoting so there are no surprises.",
      },
      {
        title: "EV Charger Service Areas",
        body: "We install EV chargers in Port Charlotte, North Port, and Punta Gorda—including condo situations where building rules and capacity allow.",
      },
    ],
    processTitle: "EV Charger Installation Steps",
    process: [
      { title: "Free Assessment", body: "We review your panel, grounding, preferred charger location, and vehicle needs." },
      { title: "Quote & Permits", body: "You receive a clear price; we pull permits when the jurisdiction requires them." },
      { title: "Install Day", body: "Most Level 2 installs finish in a single visit when no panel upgrade is required." },
      { title: "Test & Handoff", body: "We verify charging operation and walk you through basic use and breakers." },
    ],
    whyTitle: "Why Drivers Choose Carter Electric",
    why: [
      "Brand-flexible Level 2 expertise",
      "Honest panel capacity guidance",
      "Clean garage and exterior installs",
      "Licensed, insured Florida electricians",
      "Permit handling included on required jobs",
      "Local service in Port Charlotte, North Port & Punta Gorda",
    ],
    areasNote: "See our service-area pages for EV charger installation in your city.",
  },
  "electrical-repairs": {
    slug: "electrical-repairs",
    name: "Electrical Repairs & Troubleshooting",
    shortName: "Electrical Repairs",
    iconHint: "wrench",
    heroImage: "/images/IMG_9504.JPG",
    heroAlt: "Electrical repairs and troubleshooting",
    heroBlurb:
      "Fast electrical repairs and troubleshooting in Port Charlotte, North Port, and Punta Gorda—breakers, outlets, wiring issues, and 24/7 emergency service.",
    h1: "Electrical Repairs & Troubleshooting",
    introTitle: "Reliable Electrical Repair Service in Port Charlotte, North Port & Punta Gorda",
    intro: [
      "Electrical problems range from annoying (a dead outlet) to dangerous (burning smells, sparking, partial outages). Carter Electric provides licensed electrical repairs for homes and businesses in Port Charlotte, North Port, and Punta Gorda, with same-day options and 24/7 emergency response.",
      "Our electricians diagnose root causes—not just symptoms—so you are not calling back next week for the same trip. We carry common parts for breakers, devices, and fixtures and explain findings in plain language.",
      "Coastal Florida homes face humidity, storms, and aging panels that create unique failure patterns. We know what to check first and when a larger upgrade is the safer long-term fix.",
    ],
    sections: [
      {
        title: "Repairs We Handle Every Week",
        body: "If it is electrical and unsafe or unreliable, we can usually help the same day.",
        bullets: [
          "Tripping breakers and overloaded circuits",
          "Outlets, switches, and GFCI failures",
          "Flickering or dimming lights",
          "Ceiling fan and fixture repairs",
          "Burning smells and overheating devices",
          "Storm-related electrical damage assessments",
        ],
      },
      {
        title: "When to Call Immediately",
        body: "Call right away for sparking outlets, buzzing panels, burning odors, repeatedly tripping main breakers, or any situation where you smell or see signs of overheating. Shut off the affected breaker if you can do so safely and contact us for emergency service.",
      },
      {
        title: "Repair Coverage Across Our Service Area",
        body: "We provide electrical repair service in Port Charlotte, North Port, and Punta Gorda.",
      },
    ],
    processTitle: "Our Repair Approach",
    process: [
      { title: "Listen & Inspect", body: "We gather symptoms, test circuits, and inspect panels and devices safely." },
      { title: "Explain Options", body: "You get a clear diagnosis and repair options with upfront pricing." },
      { title: "Fix It Right", body: "We complete the repair with quality parts and code-minded methods." },
      { title: "Verify Safety", body: "We retest and confirm the issue is resolved before we leave." },
    ],
    whyTitle: "Why Call Carter Electric for Repairs",
    why: [
      "24/7 emergency electrical service",
      "Licensed troubleshooting—not guesswork",
      "Upfront pricing before major work",
      "Respect for your home and schedule",
      "Honest advice on repair vs upgrade",
      "Trusted in Port Charlotte, North Port & Punta Gorda",
    ],
    areasNote: "Need an emergency electrician near you? Visit your city's service-area page.",
  },
  "panel-upgrades": {
    slug: "panel-upgrades",
    name: "Electrical Panel Upgrades",
    shortName: "Panel Upgrades",
    iconHint: "zap",
    heroImage: "/images/service-panel.jpg",
    heroAlt: "Electrical panel upgrade installation",
    heroBlurb:
      "Electrical panel upgrades and service improvements for Port Charlotte, North Port, and Punta Gorda homes—more capacity, safer breakers, and room for EVs, pools, and modern living.",
    h1: "Panel Upgrades & Rewiring",
    introTitle: "Electrical Panel Upgrades in Port Charlotte, North Port & Punta Gorda",
    intro: [
      "Your electrical panel is the heart of the home's power system. If it is outdated, full, or showing heat damage, a panel upgrade is one of the highest-value safety improvements you can make. Carter Electric installs modern panels and service upgrades throughout Port Charlotte, North Port, and Punta Gorda.",
      "Homeowners often need more capacity for EV chargers, pool equipment, hurricane generators, kitchen remodels, and multi-zone A/C. We evaluate your current service, design the right ampacity, and coordinate utility and permit steps when required.",
      "From older Port Charlotte homes to North Port remodels and Punta Gorda historic properties, we replace aging fuse boxes and undersized breaker panels with cleaner, safer equipment built for today's loads.",
    ],
    sections: [
      {
        title: "Signs You May Need a Panel Upgrade",
        body: "If several of these sound familiar, schedule an evaluation before adding more load.",
        bullets: [
          "Panel is 25+ years old or still uses fuses",
          "Breakers trip when multiple appliances run",
          "No open breaker spaces for new circuits",
          "Lights dim when A/C or microwave starts",
          "Warm panel cover or burning odor near the panel",
          "Planning an EV charger, pool, or major remodel",
        ],
      },
      {
        title: "What a Panel Upgrade Includes",
        body: "Typical projects include a new breaker panel, proper grounding/bonding corrections as needed, labeling, and inspection. Some homes also need meter-base or service-entrance updates coordinated with the utility.",
      },
      {
        title: "Panel Upgrades Across Our Service Area",
        body: "We perform panel upgrades in Port Charlotte, North Port, and Punta Gorda.",
      },
    ],
    processTitle: "Panel Upgrade Process",
    process: [
      { title: "Load Evaluation", body: "We review existing demand and planned additions like EVs or generators." },
      { title: "Detailed Quote", body: "You receive scope, timeline, and pricing before any demolition begins." },
      { title: "Permits & Utility Coordination", body: "We handle required permits and schedule service work with the utility when needed." },
      { title: "Install & Inspection", body: "Most residential panel swaps complete in a day, followed by inspection." },
    ],
    whyTitle: "Why Homeowners Trust Us with Panel Work",
    why: [
      "Safety-first load calculations",
      "Clean labeling and professional finish",
      "Permit and inspection experience",
      "EV and generator-ready planning",
      "Licensed Florida electricians only",
      "Coverage in Port Charlotte, North Port & Punta Gorda",
    ],
    areasNote: "Learn more about electrical service in your city on our location pages.",
  },
  "commercial-services": {
    slug: "commercial-services",
    name: "Commercial Electrical Services",
    shortName: "Commercial",
    iconHint: "building",
    heroImage: "/images/service-commercial.jpg",
    heroAlt: "Commercial electrical services Port Charlotte North Port Punta Gorda",
    heroBlurb:
      "Commercial electrical services for Port Charlotte, North Port, and Punta Gorda businesses, property managers, offices, retail, restaurants, and multi-family properties.",
    h1: "Commercial Electrical Services",
    introTitle: "Commercial & Multi-Family Electrical Contractors",
    intro: [
      "Businesses and property managers need electrical partners who show up on time, work cleanly around tenants, and document work properly. Carter Electric provides commercial electrical services in Port Charlotte, North Port, and Punta Gorda for offices, retail, restaurants, warehouses, HOAs, and multi-family communities.",
      "We handle tenant build-outs, lighting retrofits, panel and distribution work, emergency lighting, parking lot lighting, and ongoing maintenance. After-hours scheduling is available when downtime is not an option.",
      "From Port Charlotte commercial corridors to North Port retail and Punta Gorda downtown businesses, we bring residential-quality communication with commercial reliability.",
    ],
    sections: [
      {
        title: "Commercial Services We Provide",
        body: "Tell us about your property type and timeline—we will propose a scope that fits operations.",
        bullets: [
          "Tenant improvements and build-outs",
          "Interior and exterior lighting upgrades",
          "Panel, breaker, and distribution work",
          "Emergency and exit lighting",
          "Parking lot and site lighting",
          "Preventive maintenance agreements",
        ],
      },
      {
        title: "Industries & Property Types",
        body: "We commonly support professional offices, medical suites, restaurants, retail centers, warehouses, condominium associations, and property management portfolios throughout Port Charlotte, North Port, and Punta Gorda.",
      },
      {
        title: "Where We Work",
        body: "Commercial electrical service is available in Port Charlotte, North Port, and Punta Gorda.",
      },
    ],
    processTitle: "How Commercial Projects Run",
    process: [
      { title: "Scope Meeting", body: "We review drawings, walk the site, and confirm operational constraints." },
      { title: "Proposal", body: "You receive clear pricing, timeline, and phasing options." },
      { title: "Scheduled Execution", body: "Work is staged around business hours when needed, with tidy daily closeout." },
      { title: "Closeout Docs", body: "We complete inspections and leave you with labeled, maintainable systems." },
    ],
    whyTitle: "Why Property Managers Choose Carter Electric",
    why: [
      "Responsive commercial scheduling",
      "After-hours work available",
      "Licensed, insured crews",
      "Clean job sites for tenant-facing spaces",
      "Maintenance plan options",
      "One contractor across Port Charlotte, North Port & Punta Gorda",
    ],
    areasNote: "Prefer a contractor who already serves your city? Browse our service-area pages.",
  },
};
