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
