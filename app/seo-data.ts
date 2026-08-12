export type FaqItem = {
  question: string;
  answer: string;
};

export const serviceFaq: Record<string, FaqItem[]> = {
  "indoor-lighting": [
    {
      question: "Do you install recessed lighting in existing homes?",
      answer: "Yes. We install recessed and canless LED lighting in existing ceilings, working around joists and insulation to keep your home looking clean while delivering even, energy-efficient illumination.",
    },
    {
      question: "Can you help design a lighting layout for our home?",
      answer: "Absolutely. Every indoor lighting project starts with a free in-home consultation where we assess your space, understand how you use each room, and create a custom lighting plan tailored to your style and budget.",
    },
    {
      question: "Do you offer smart lighting and dimmer controls?",
      answer: "Yes. We install smart switches, dimmers, and app-controlled lighting systems so you can set scenes, schedules, and voice controls throughout your Southwest Florida home.",
    },
    {
      question: "Are your lighting installations permitted and up to code?",
      answer: "All of our indoor lighting work is performed by licensed electricians and meets Florida building and electrical code. We pull the necessary permits and schedule inspections when required.",
    },
    {
      question: "Which Southwest Florida cities do you serve for indoor lighting?",
      answer: "We install indoor lighting in Sarasota, Venice, Englewood, Port Charlotte, Punta Gorda, Cape Coral, Fort Myers, Bonita Springs, Naples, and Marco Island.",
    },
    {
      question: "How long does a typical indoor lighting project take?",
      answer: "A single-room fixture swap can often be completed in a few hours. Whole-home recessed layouts or kitchen lighting redesigns usually take one to several days depending on scope and access.",
    },
  ],
  "outdoor-lighting": [
    {
      question: "Do you install landscape lighting for coastal homes?",
      answer: "Yes. We use marine-grade and weatherproof fixtures built to withstand salt air, humidity, and Florida's intense storms, so your landscape lighting looks great for years.",
    },
    {
      question: "What types of outdoor lighting do you offer?",
      answer: "We install pathway and driveway lights, security lighting, patio and poolside lighting, uplighting for palms and architectural features, and complete low-voltage landscape systems.",
    },
    {
      question: "Can outdoor lighting be controlled automatically?",
      answer: "Yes. We set up timers, photocell sensors, and smart controls so your outdoor lighting turns on and off automatically at dusk and dawn.",
    },
    {
      question: "Do you offer outdoor lighting repair and upgrades?",
      answer: "Yes. We repair or replace damaged fixtures, re-run low-voltage wiring, and upgrade older systems to energy-efficient LED lighting.",
    },
    {
      question: "Will outdoor lighting survive Southwest Florida storms?",
      answer: "Properly installed weather-rated systems hold up much better than big-box kits. We focus on sealed connections, correct burial depth or routing, GFCI protection, and fixtures suited to Gulf Coast conditions.",
    },
    {
      question: "Do you light lanais, docks approaches, and canal lots?",
      answer: "Yes. Outdoor living spaces are a big part of Southwest Florida homes. We design safe, attractive lighting for lanais, walkways, entries, and waterfront properties in cities like Cape Coral and Marco Island.",
    },
  ],
  "ev-charger-installation": [
    {
      question: "Do you install EV chargers for all electric vehicle brands?",
      answer: "Yes. We install Level 2 chargers for all major EV brands, including Tesla, Ford, Hyundai, Kia, Chevrolet, and more, plus hardwired and plug-in configurations.",
    },
    {
      question: "Do you handle permits for EV charger installation?",
      answer: "Yes. We handle all required permits and inspections for your EV charger installation, so you can charge with confidence knowing the work is up to code.",
    },
    {
      question: "Will my home's panel need an upgrade for an EV charger?",
      answer: "Not always. During our free assessment we verify your panel's capacity. If a panel upgrade is needed, we can handle both together so you get one seamless installation.",
    },
    {
      question: "How long does EV charger installation take?",
      answer: "Most residential Level 2 charger installations are completed in a single visit. If a panel upgrade or new circuit run is required, the total project is typically finished within a few days.",
    },
    {
      question: "Can you install EV chargers in condos?",
      answer: "Often yes, when the association allows it and electrical capacity is available. We review building rules, panel location, and routing before quoting condo charger projects.",
    },
    {
      question: "What amperage charger should I get?",
      answer: "It depends on your vehicle, panel capacity, and how fast you want to charge. Many homes do well with a 40–60 amp Level 2 circuit. We recommend the right size after inspecting your service.",
    },
  ],
  "electrical-repairs": [
    {
      question: "Do you offer 24/7 emergency electrical repair?",
      answer: "Yes. We provide 24/7 emergency electrical service across Southwest Florida for issues like power outages, sparking outlets, and burning smells.",
    },
    {
      question: "What common electrical problems do you fix?",
      answer: "We repair tripping breakers, flickering lights, dead outlets, faulty switches, ceiling fan issues, and wiring problems in homes and businesses throughout Southwest Florida.",
    },
    {
      question: "Are your electricians licensed and insured?",
      answer: "Yes. Every Carter Electric technician is a licensed electrician, and our company carries comprehensive insurance for your peace of mind.",
    },
    {
      question: "How quickly can you respond to a repair?",
      answer: "We offer same-day service for most repairs, and our emergency line is answered around the clock so urgent issues are handled fast.",
    },
    {
      question: "Should I try to fix electrical problems myself?",
      answer: "We do not recommend DIY electrical repairs beyond resetting a breaker. Improper work can create fire hazards and fail inspection. Call a licensed electrician for outlets, panels, and wiring issues.",
    },
    {
      question: "Do you repair storm-related electrical damage?",
      answer: "Yes. After storms we inspect for surge damage, water intrusion issues, failed outdoor circuits, and unsafe panels, then complete repairs to get your home powered safely again.",
    },
  ],
  "panel-upgrades": [
    {
      question: "How do I know if my home needs a panel upgrade?",
      answer: "Common signs include a panel over 25 years old, tripping breakers, flickering lights, scorched breakers, and running out of space for new circuits. If you're adding an EV charger or large appliances, an upgrade is often required.",
    },
    {
      question: "How much does an electrical panel upgrade cost?",
      answer: "Costs vary based on your panel size, service capacity, and home setup. We provide free, transparent, no-obligation quotes before any work begins.",
    },
    {
      question: "How long does a panel upgrade take?",
      answer: "Most residential panel upgrades are completed in one day. We coordinate with your utility provider on the necessary meter service interruption.",
    },
    {
      question: "Do you handle permits and inspections for panel upgrades?",
      answer: "Yes. Panel upgrades are a permitted electrical service, and we handle all permits and inspections with your local building department.",
    },
    {
      question: "Can a panel upgrade support a generator or EV charger?",
      answer: "Yes. We commonly design panel upgrades with future loads in mind, including generator interlocks, EV chargers, pools, and home additions.",
    },
    {
      question: "Do you replace fuse boxes?",
      answer: "Yes. Converting old fuse panels to modern breaker panels is one of the most important safety upgrades for older Southwest Florida homes.",
    },
  ],
  "commercial-services": [
    {
      question: "Do you work with property managers and HOAs?",
      answer: "Yes. We provide electrical maintenance and project services for property management companies, HOAs, and condominium associations across Southwest Florida.",
    },
    {
      question: "What commercial electrical services do you offer?",
      answer: "We handle tenant build-outs, lighting retrofits, panel and switchgear work, emergency lighting, parking lot lighting, and ongoing maintenance agreements for businesses.",
    },
    {
      question: "Do you offer maintenance plans for businesses?",
      answer: "Yes. We offer preventive maintenance plans that include scheduled inspections, code-compliance checks, and priority response for commercial clients.",
    },
    {
      question: "Can you work after hours to avoid business disruption?",
      answer: "Yes. We schedule commercial work around your operating hours, including nights and weekends, so your business stays up and running.",
    },
    {
      question: "Do you serve multi-location commercial clients?",
      answer: "Yes. Because we cover Sarasota through Marco Island, property managers can use one electrical contractor across multiple Southwest Florida locations.",
    },
    {
      question: "Can you help with commercial lighting upgrades for energy savings?",
      answer: "Absolutely. LED retrofits and control upgrades are a common commercial project that improves light quality while lowering energy and maintenance costs.",
    },
  ],
};

export const areaFaq: Record<string, FaqItem[]> = {
  sarasota: [
    {
      question: "Are you a licensed electrician in Sarasota, FL?",
      answer: "Yes. Carter Electric is a licensed and insured electrical contractor serving Sarasota homes and businesses, from Downtown to Siesta Key.",
    },
    {
      question: "What neighborhoods in Sarasota do you serve?",
      answer: "We serve all of Sarasota, including Downtown, Siesta Key, Lido Key, St. Armands Circle, Laurel Park, Southside Village, Gillespie Park, and the Rosemary District.",
    },
    {
      question: "Do you offer emergency electrical service in Sarasota?",
      answer: "Yes. We provide 24/7 emergency electrical service throughout Sarasota County for urgent issues like outages, sparking, and faulty panels.",
    },
    {
      question: "Can you handle electrical work in older Sarasota homes?",
      answer: "Yes. We regularly update the electrical systems of historic homes in neighborhoods like Laurel Park, including rewiring, panel upgrades, and safe lighting installation.",
    },
    {
      question: "Do you install EV chargers in Sarasota?",
      answer: "Yes. We install Level 2 EV chargers for Sarasota homeowners and can upgrade panels when extra capacity is needed.",
    },
    {
      question: "Can you help with hurricane generator prep in Sarasota?",
      answer: "Yes. We install generator interlocks, evaluate panel capacity, and help Sarasota homes prepare critical circuits for storm season.",
    },
  ],
  venice: [
    {
      question: "Are you a licensed electrician in Venice, FL?",
      answer: "Yes. Carter Electric is licensed and insured, serving Venice homes and businesses throughout Sarasota County.",
    },
    {
      question: "What electrical services do you provide in Venice?",
      answer: "We offer lighting installation, EV charger installation, electrical repairs, panel upgrades, and commercial electrical services in Venice, FL.",
    },
    {
      question: "Do you serve the islands and beaches near Venice?",
      answer: "Yes. We serve the Venice area and nearby barrier islands, using coastal-rated materials that stand up to salt air and humidity.",
    },
    {
      question: "Do you offer 24/7 emergency service in Venice?",
      answer: "Yes. Our emergency electricians are available around the clock for Venice residents and businesses.",
    },
    {
      question: "Can you update electrical systems in Mediterranean-style Venice homes?",
      answer: "Yes. We carefully modernize wiring, panels, and lighting in Venice's distinctive architecture while keeping safety and code compliance first.",
    },
    {
      question: "Do you work on Venice Avenue commercial properties?",
      answer: "Yes. We support Venice restaurants, shops, and offices with lighting, repairs, and after-hours scheduling when needed.",
    },
  ],
  englewood: [
    {
      question: "Are you a licensed electrician in Englewood, FL?",
      answer: "Yes. Carter Electric is a licensed, insured electrical contractor serving Englewood and the surrounding coastal communities.",
    },
    {
      question: "Do you handle electrical repairs for Englewood homes?",
      answer: "Yes. We repair breakers, outlets, switches, lighting, and wiring for Englewood homes, with 24/7 emergency service available.",
    },
    {
      question: "Can you install lighting and EV chargers in Englewood?",
      answer: "Yes. We install indoor and outdoor lighting, plus residential EV chargers, throughout the Englewood area.",
    },
    {
      question: "Is your work suitable for Florida's coastal environment?",
      answer: "Yes. We use corrosion-resistant and weatherproof materials designed for Englewood's coastal climate.",
    },
    {
      question: "Do you serve Manasota Key and Englewood Beach homes?",
      answer: "Yes. Beach and key properties are a regular part of our Englewood service area, including outdoor power and storm-ready upgrades.",
    },
    {
      question: "Can you upgrade panels in older Englewood houses?",
      answer: "Yes. Many Englewood homes benefit from modern breaker panels, and we handle upgrades with permits and inspections.",
    },
  ],
  "port-charlotte": [
    {
      question: "Are you a licensed electrician in Port Charlotte, FL?",
      answer: "Yes. Carter Electric is a licensed and insured electrical contractor serving Port Charlotte homes and businesses.",
    },
    {
      question: "What electrical services do you offer in Port Charlotte?",
      answer: "We provide lighting installation, electrical repairs, EV charger installation, panel upgrades, and commercial electrical services in Port Charlotte.",
    },
    {
      question: "Do you offer emergency electrical service in Port Charlotte?",
      answer: "Yes. We offer 24/7 emergency electrical service for Port Charlotte and the surrounding Charlotte County area.",
    },
    {
      question: "Can you upgrade older panels in Port Charlotte homes?",
      answer: "Yes. We regularly upgrade aging electrical panels in Port Charlotte to modern 200-amp systems, including permits and inspections.",
    },
    {
      question: "Do you work on canal-front homes in Port Charlotte?",
      answer: "Yes. We install and repair outdoor circuits, lighting, and panel capacity upgrades commonly needed on canal and waterfront lots.",
    },
    {
      question: "Can you support boat lift or pool equipment power?",
      answer: "Yes. We evaluate loads and install dedicated circuits so lifts, pools, and outdoor equipment are powered safely.",
    },
  ],
  "punta-gorda": [
    {
      question: "Are you a licensed electrician in Punta Gorda, FL?",
      answer: "Yes. Carter Electric is licensed and insured, serving Punta Gorda and the surrounding Charlotte County area.",
    },
    {
      question: "Can you work on historic homes in Punta Gorda?",
      answer: "Yes. We specialize in updating the electrical systems of Punta Gorda's historic homes while preserving their character, including rewiring and panel upgrades.",
    },
    {
      question: "Do you offer 24/7 emergency service in Punta Gorda?",
      answer: "Yes. Our emergency electricians are available around the clock for Punta Gorda residents and businesses.",
    },
    {
      question: "What services do you provide in Punta Gorda?",
      answer: "We provide lighting installation, electrical repairs, EV charger installation, panel upgrades, and commercial electrical services.",
    },
    {
      question: "Do you serve downtown Punta Gorda businesses?",
      answer: "Yes. We support downtown and harbor-area commercial properties with lighting, repairs, and project work scheduled around business hours.",
    },
    {
      question: "Can you help with surge protection in Punta Gorda?",
      answer: "Yes. Whole-home and point-of-use surge protection is a smart upgrade for harbor-area homes exposed to storm activity.",
    },
  ],
  "cape-coral": [
    {
      question: "Are you a licensed electrician in Cape Coral, FL?",
      answer: "Yes. Carter Electric is a licensed and insured electrical contractor serving Cape Coral's waterfront homes and businesses.",
    },
    {
      question: "Do you handle electrical work for waterfront homes?",
      answer: "Yes. We use corrosion-resistant materials and coastal-grade equipment for Cape Coral's salt-air and canal-front properties.",
    },
    {
      question: "Do you offer emergency electrical service in Cape Coral?",
      answer: "Yes. We provide 24/7 emergency electrical service throughout Cape Coral and Lee County.",
    },
    {
      question: "Can you install EV chargers and panel upgrades in Cape Coral?",
      answer: "Yes. We install Level 2 EV chargers and perform panel upgrades in Cape Coral, including all permits and inspections.",
    },
    {
      question: "Do you install power for boat lifts in Cape Coral?",
      answer: "Yes. Boat lift and dock-adjacent power is common in Cape Coral. We install dedicated circuits and safe outdoor electrical infrastructure.",
    },
    {
      question: "Can my Cape Coral panel handle a pool and EV charger?",
      answer: "Maybe—many homes need a service upgrade first. We calculate loads and recommend the right panel size before adding major equipment.",
    },
  ],
  "fort-myers": [
    {
      question: "Are you a licensed electrician in Fort Myers, FL?",
      answer: "Yes. Carter Electric is licensed and insured, serving homes and businesses throughout Fort Myers and Lee County.",
    },
    {
      question: "What electrical services do you provide in Fort Myers?",
      answer: "We offer electrical repairs, lighting installation, EV charger installation, panel upgrades, and commercial electrical services in Fort Myers.",
    },
    {
      question: "Do you offer emergency electrical service in Fort Myers?",
      answer: "Yes. We provide 24/7 emergency electrical service for Fort Myers residents and businesses.",
    },
    {
      question: "Can you handle commercial work for Fort Myers businesses?",
      answer: "Yes. We serve Fort Myers businesses, offices, and property managers with maintenance plans and commercial electrical projects.",
    },
    {
      question: "Do you work in Fort Myers condos and multi-family buildings?",
      answer: "Yes. We handle unit repairs and coordinate common-area electrical work with associations and property managers.",
    },
    {
      question: "Can you help with River District commercial lighting?",
      answer: "Yes. We support Fort Myers commercial interiors and exteriors, including lighting upgrades scheduled around business operations.",
    },
  ],
  "bonita-springs": [
    {
      question: "Are you a licensed electrician in Bonita Springs, FL?",
      answer: "Yes. Carter Electric is a licensed and insured electrical contractor serving Bonita Springs and Lee County.",
    },
    {
      question: "Do you work on luxury homes in Bonita Springs?",
      answer: "Yes. We specialize in premium lighting, smart home wiring, and whole-home electrical systems for luxury properties in Bonita Springs.",
    },
    {
      question: "Do you offer emergency electrical service in Bonita Springs?",
      answer: "Yes. We offer 24/7 emergency electrical service for Bonita Springs homes and businesses.",
    },
    {
      question: "What services do you provide in Bonita Springs?",
      answer: "We provide lighting installation, electrical repairs, EV charger installation, panel upgrades, and commercial electrical services.",
    },
    {
      question: "Can you install discreet EV chargers in Bonita Springs garages?",
      answer: "Yes. We route and mount Level 2 chargers cleanly so they fit finished garages and higher-end home aesthetics.",
    },
    {
      question: "Do you serve Bonita Bay and Barefoot Beach area homes?",
      answer: "Yes. Gated and coastal communities around Bonita Springs are part of our regular service area.",
    },
  ],
  naples: [
    {
      question: "Are you a licensed electrician in Naples, FL?",
      answer: "Yes. Carter Electric is licensed and insured, serving Naples homes, condos, and businesses throughout Collier County.",
    },
    {
      question: "Do you work with condos and HOAs in Naples?",
      answer: "Yes. We provide electrical maintenance and project services for Naples condominium associations, HOAs, and property managers.",
    },
    {
      question: "Do you offer emergency electrical service in Naples?",
      answer: "Yes. We provide 24/7 emergency electrical service throughout Naples and Collier County.",
    },
    {
      question: "What services do you provide in Naples?",
      answer: "We provide lighting installation, electrical repairs, EV charger installation, panel upgrades, and commercial electrical services.",
    },
    {
      question: "Do you handle high-end lighting projects in Old Naples or Port Royal?",
      answer: "Yes. Precision indoor and landscape lighting for luxury Naples homes is a core part of our residential work.",
    },
    {
      question: "Can you coordinate electrical work with Naples remodel timelines?",
      answer: "Yes. We schedule around other trades and keep communication clear so electrical scopes stay on track during renovations.",
    },
  ],
  "marco-island": [
    {
      question: "Are you a licensed electrician on Marco Island, FL?",
      answer: "Yes. Carter Electric is licensed and insured, serving Marco Island's coastal homes, condos, and businesses.",
    },
    {
      question: "Do you specialize in coastal home electrical work?",
      answer: "Yes. We use marine-grade and corrosion-resistant materials suited to Marco Island's salt air and tropical climate.",
    },
    {
      question: "Do you offer emergency electrical service on Marco Island?",
      answer: "Yes. We offer 24/7 emergency electrical service for Marco Island residents and businesses.",
    },
    {
      question: "What services do you provide on Marco Island?",
      answer: "We provide lighting installation, electrical repairs, EV charger installation, panel upgrades, and commercial electrical services.",
    },
    {
      question: "Can you work in Marco Island high-rise condos?",
      answer: "Yes. We coordinate with building management on access, rules, and capacity constraints common to island condo towers.",
    },
    {
      question: "Do you repair corrosion-related outdoor electrical failures?",
      answer: "Yes. Salt-air damage to outdoor fixtures, boxes, and connections is common on Marco Island, and we repair or replace those systems with coastal-ready materials.",
    },
  ],
};

export const homeFaq: FaqItem[] = [
  {
    question: "What areas of Florida does Carter Electric serve?",
    answer: "We serve all of Southwest Florida, from Sarasota and Venice in the north to Naples and Marco Island in the south, including Englewood, Port Charlotte, Punta Gorda, Cape Coral, Fort Myers, and Bonita Springs.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes. We provide free, no-obligation quotes for residential and commercial electrical projects across Southwest Florida.",
  },
  {
    question: "Are you available for electrical emergencies?",
    answer: "Yes. We offer 24/7 emergency electrical service for urgent issues like power outages, sparking outlets, and faulty panels.",
  },
  {
    question: "Is Carter Electric licensed and insured?",
    answer: "Yes. We are a fully licensed and insured electrical contractor, and every technician on our team is a licensed electrician.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes. We manage all required permits and inspections for permitted work, including panel upgrades and EV charger installations.",
  },
];
