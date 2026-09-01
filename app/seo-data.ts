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
      answer: "Yes. We install smart switches, dimmers, and app-controlled lighting systems so you can set scenes, schedules, and voice controls throughout your Port Charlotte, North Port, or Punta Gorda home.",
    },
    {
      question: "Are your lighting installations permitted and up to code?",
      answer: "All of our indoor lighting work is performed by licensed electricians and meets Florida building and electrical code. We pull the necessary permits and schedule inspections when required.",
    },
    {
      question: "Which cities do you serve for indoor lighting?",
      answer: "We install indoor lighting in Port Charlotte, North Port, and Punta Gorda.",
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
      question: "Will outdoor lighting survive Gulf Coast storms?",
      answer: "Properly installed weather-rated systems hold up much better than big-box kits. We focus on sealed connections, correct burial depth or routing, GFCI protection, and fixtures suited to Charlotte Harbor conditions.",
    },
    {
      question: "Do you light lanais, docks approaches, and canal lots?",
      answer: "Yes. Outdoor living spaces are a big part of homes in Port Charlotte, North Port, and Punta Gorda. We design safe, attractive lighting for lanais, walkways, entries, and waterfront properties.",
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
      answer: "Yes. We provide 24/7 emergency electrical service across Port Charlotte, North Port, and Punta Gorda for issues like power outages, sparking outlets, and burning smells.",
    },
    {
      question: "What common electrical problems do you fix?",
      answer: "We repair tripping breakers, flickering lights, dead outlets, faulty switches, ceiling fan issues, and wiring problems in homes and businesses throughout Port Charlotte, North Port, and Punta Gorda.",
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
      answer: "Yes. Converting old fuse panels to modern breaker panels is one of the most important safety upgrades for older homes in Port Charlotte, North Port, and Punta Gorda.",
    },
  ],
  "commercial-services": [
    {
      question: "Do you work with property managers and HOAs?",
      answer: "Yes. We provide electrical maintenance and project services for property management companies, HOAs, and condominium associations in Port Charlotte, North Port, and Punta Gorda.",
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
      answer: "Yes. Because we cover Port Charlotte, North Port, and Punta Gorda, property managers can use one electrical contractor across multiple local properties.",
    },
    {
      question: "Can you help with commercial lighting upgrades for energy savings?",
      answer: "Absolutely. LED retrofits and control upgrades are a common commercial project that improves light quality while lowering energy and maintenance costs.",
    },
  ],
};

export const areaFaq: Record<string, FaqItem[]> = {
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
  "north-port": [
    {
      question: "Are you a licensed electrician in North Port, FL?",
      answer: "Yes. Carter Electric is a licensed and insured electrical contractor serving North Port homes and businesses.",
    },
    {
      question: "What electrical services do you offer in North Port?",
      answer: "We provide lighting installation, electrical repairs, EV charger installation, panel upgrades, and commercial electrical services in North Port.",
    },
    {
      question: "Do you offer emergency electrical service in North Port?",
      answer: "Yes. We offer 24/7 emergency electrical service for North Port and nearby communities including Port Charlotte and Punta Gorda.",
    },
    {
      question: "Can you upgrade panels in North Port homes?",
      answer: "Yes. We regularly upgrade aging electrical panels in North Port to modern 200-amp systems, including permits and inspections.",
    },
    {
      question: "Do you install EV chargers in North Port?",
      answer: "Yes. We install Level 2 EV chargers for North Port homeowners and can upgrade panels when extra capacity is needed.",
    },
    {
      question: "Can you help with generator prep in North Port?",
      answer: "Yes. We install generator interlocks, evaluate panel capacity, and help North Port homes prepare critical circuits for storm season.",
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
};

export const homeFaq: FaqItem[] = [
  {
    question: "What areas does Carter Electric serve?",
    answer: "We serve Port Charlotte, North Port, and Punta Gorda.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes. We provide free, no-obligation quotes for residential and commercial electrical projects in Port Charlotte, North Port, and Punta Gorda.",
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
