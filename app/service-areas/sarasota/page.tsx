"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Lightbulb, 
  Zap, 
  Car, 
  Wrench, 
  Building2,
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Clock,
  Shield,
  CheckCircle2
} from "lucide-react";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../../components/AnimatedSection";

const city = {
  name: "Sarasota",
  slug: "sarasota",
  description: "The cultural heart of Southwest Florida",
  county: "Sarasota County",
  population: "56,000+",
  founded: "1902",
  knownFor: "Arts, beaches, and the Ringling Museum",
};

const services = [
  {
    icon: Lightbulb,
    title: "Indoor Lighting",
    description: `From historic homes in Laurel Park to modern condos downtown, we design and install custom lighting solutions that match Sarasota's diverse architectural styles.`,
  },
  {
    icon: Zap,
    title: "Outdoor & Landscape Lighting",
    description: `Enhance your Sarasota home's curb appeal with professional landscape lighting. Perfect for showcasing the beautiful palms and tropical landscaping that makes Sarasota special.`,
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: `Stay ahead of the curve with EV charger installation. Sarasota's growing green community is making the switch to electric vehicles – we make charging at home easy.`,
  },
  {
    icon: Wrench,
    title: "Electrical Repairs & Service",
    description: `Fast, reliable electrical repairs throughout Sarasota. From downtown to Siesta Key, we provide 24/7 emergency service when you need it most.`,
  },
  {
    icon: Building2,
    title: "Commercial & Multi-Family",
    description: `Specialized electrical services for Sarasota's condos, apartments, and commercial properties. We work with property managers to keep buildings running smoothly.`,
  },
];

const neighborhoods = [
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
];

const otherCities = [
  { name: "Venice", slug: "venice" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Bonita Springs", slug: "bonita-springs" },
  { name: "Naples", slug: "naples" },
  { name: "Marco Island", slug: "marco-island" },
];

export default function SarasotaPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/sarasota-hero.webp"
            alt="Sarasota Florida"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-sky-400" />
              <span className="text-sky-400 font-medium">{city.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Electrician in {city.name}, FL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">
              {city.description}. Carter Electric has been Sarasota's trusted electrical contractor for over 15 years, serving homes and businesses from Siesta Key to the Rosemary District.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="tel:9415550100" className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                <Phone className="w-5 h-5" />
                <span>(941) 555-0100</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Sarasota Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">About {city.name}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Electrical Services in {city.name}, Florida
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {city.name} is a vibrant Gulf Coast city known for its stunning beaches, thriving arts scene, and beautiful architecture. From the powdery white sands of Siesta Key Beach to the cultural treasures of the Ringling Museum, {city.name} offers a unique blend of natural beauty and sophistication.
                </p>
                <p>
                  As {city.name}'s trusted electrical contractor, Carter Electric understands the unique needs of this diverse community. Whether you own a historic bungalow in Laurel Park built in the 1920s or a modern condo with floor-to-ceiling windows overlooking the bay, we have the expertise to handle any electrical project.
                </p>
                <p>
                  {city.name}'s tropical climate presents unique challenges for electrical systems. The salt air, high humidity, and intense summer storms require specialized knowledge and materials. Our team is experienced in protecting {city.name} homes and businesses from these environmental factors, ensuring your electrical system remains safe and reliable year-round.
                </p>
                <p>
                  We also understand the importance of hurricane preparedness in {city.name}. From generator hookups to surge protection, we help ensure your home stays powered during Florida's storm season. Our 24/7 emergency service means we're always here when {city.name} residents need us most.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{city.name} at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Population</span>
                    <span className="font-semibold text-slate-900">{city.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Founded</span>
                    <span className="font-semibold text-slate-900">{city.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">County</span>
                    <span className="font-semibold text-slate-900">{city.county}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-slate-600">Known For</span>
                    <p className="font-semibold text-slate-900 mt-1">{city.knownFor}</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Neighborhoods We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods.map((neighborhood) => (
                      <span key={neighborhood} className="text-xs bg-white px-2 py-1 rounded-full text-slate-600 shadow-sm">
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Electrical Services We Offer in {city.name}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From historic home rewiring to modern smart home installations, we provide comprehensive electrical services throughout {city.name}.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us for Sarasota */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Why {city.name} Chooses Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Your Local {city.name} Electrician
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Full Florida state licensing and comprehensive insurance" },
              { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock emergency electrical service" },
              { icon: Star, title: "Local Expertise", desc: "15+ years serving {city.name} homes and businesses" },
              { icon: CheckCircle2, title: "Upfront Pricing", desc: "No hidden fees - transparent quotes guaranteed" },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1} className="text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need an Electrician in {city.name}?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Whether you're in Downtown {city.name}, Siesta Key, or anywhere in between, we're ready to help with your electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center justify-center space-x-2 bg-white text-sky-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <span>Schedule Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:9415550100"
                className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>(941) 555-0100</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-slate-900 mb-8">We Also Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="bg-white hover:bg-sky-50 px-6 py-3 rounded-full text-slate-700 hover:text-sky-600 transition-colors shadow-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}