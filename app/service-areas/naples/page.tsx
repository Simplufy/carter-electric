"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Zap, Car, Wrench, Building2, ArrowRight, Phone, MapPin } from "lucide-react";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../../components/AnimatedSection";

const city = {
  name: "Naples",
  slug: "naples",
  description: "The crown jewel of Southwest Florida with luxury living",
  county: "Collier County",
  population: "22,000+ (City), 375,000+ (Metro)",
  founded: "1886",
  knownFor: "Luxury shopping, fine dining, pristine beaches, golf",
};

const services = [
  {
    icon: Lightbulb,
    title: "Luxury Lighting Design",
    description: `Bespoke lighting solutions for Naples' finest homes. From art lighting to architectural accent lighting.`,
  },
  {
    icon: Zap,
    title: "Smart Home Integration",
    description: `Complete smart home electrical systems for Naples luxury properties. Automated lighting, shades, and climate control.`,
  },
  {
    icon: Car,
    title: "Premium EV Charging",
    description: `High-end EV charging installations for Naples estates. Tesla Wall Connectors, ClipperCreek, and more.`,
  },
  {
    icon: Wrench,
    title: "Estate Electrical Services",
    description: `Comprehensive electrical services for large Naples estates. Generator systems, pool automation, and more.`,
  },
  {
    icon: Building2,
    title: "Commercial & Condo Services",
    description: `Specialized services for Naples commercial properties and luxury condominiums. Maintenance plans available.`,
  },
];

const neighborhoods = ["Old Naples", "Park Shore", "Moorings", "Pelican Bay", "Vanderbilt Beach", "Royal Harbor", "Port Royal", "Aqualane Shores"];

const otherCities = [
  { name: "Sarasota", slug: "sarasota" },
  { name: "Venice", slug: "venice" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Bonita Springs", slug: "bonita-springs" },
  { name: "Marco Island", slug: "marco-island" },
];

export default function NaplesPage() {
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
            src="/images/naples-hero.webp"
            alt="Naples Florida"
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
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">{city.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Electrician in {city.name}, FL</h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">{city.description}. Premium electrical services for Naples' luxury homes and estates.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">About {city.name}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">Electrical Services in {city.name}, Florida</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Naples is Southwest Florida's most prestigious address, known worldwide for its stunning beaches, world-class shopping on Fifth Avenue South and Third Street South, championship golf courses, and some of the most beautiful homes in the country. From the historic charm of Old Naples to the waterfront estates of Port Royal, Naples represents the pinnacle of Florida luxury living.</p>
                <p>Carter Electric is proud to serve Naples' discerning homeowners with the same level of excellence they expect in every aspect of their lives. We understand that Naples homes require more than standard electrical service – they demand sophisticated lighting design, smart home integration, and meticulous attention to detail.</p>
                <p>Our team has extensive experience working in Naples' most exclusive communities, including Pelican Bay, Park Shore, and Moorings. We respect the privacy and expectations of our Naples clients, delivering white-glove service from consultation to completion.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{city.name} at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between"><span className="text-slate-600">Population</span><span className="font-semibold text-slate-900">{city.population}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Founded</span><span className="font-semibold text-slate-900">{city.founded}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">County</span><span className="font-semibold text-slate-900">{city.county}</span></div>
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-slate-600">Known For</span>
                    <p className="font-semibold text-slate-900 mt-1">{city.knownFor}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Areas We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods.map((n) => <span key={n} className="text-xs bg-white px-2 py-1 rounded-full text-slate-600 shadow-sm">{n}</span>)}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Electrical Services in {city.name}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Naples' Premier Electrician</h2>
            <p className="text-white/90 text-lg mb-8">Experience the Carter Electric difference. Serving all of Naples with luxury-level electrical services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-white text-amber-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                <span>Schedule Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="tel:9415550100" className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                <Phone className="w-5 h-5" />
                <span>(941) 555-0100</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-slate-900 mb-8">We Also Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((city) => <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-white hover:bg-amber-50 px-6 py-3 rounded-full text-slate-700 hover:text-amber-600 transition-colors shadow-sm">{city.name}</Link>)}
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}