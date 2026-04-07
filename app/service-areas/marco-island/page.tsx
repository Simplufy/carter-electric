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
  name: "Marco Island",
  slug: "marco-island",
  description: "Southwest Florida's largest barrier island paradise",
  county: "Collier County",
  population: "15,000+",
  founded: "1870s (Settlement), 1997 (City)",
  knownFor: "World-class beaches, boating, resort lifestyle",
};

const services = [
  {
    icon: Lightbulb,
    title: "Island Home Lighting",
    description: `Custom lighting solutions for Marco Island homes. Indoor elegance meets outdoor tropical ambiance.`,
  },
  {
    icon: Zap,
    title: "Marine Electrical Services",
    description: `Specialized electrical for Marco Island's waterfront homes and boat docks. Corrosion-resistant installations.`,
  },
  {
    icon: Car,
    title: "EV Charging Installation",
    description: `Charge your electric vehicle at your Marco Island home. We handle all permitting and installation.`,
  },
  {
    icon: Wrench,
    title: "Island Electrical Repairs",
    description: `Fast response electrical service throughout Marco Island. We understand island living's unique needs.`,
  },
  {
    icon: Building2,
    title: "Condo & Resort Services",
    description: `Electrical services for Marco Island condos and vacation properties. Maintenance plans available.`,
  },
];

const neighborhoods = ["Hideaway Beach", "Eagle Creek", "Key Marco", "The Estates", "Marco Beach", "Old Marco", "South Barfield", "Fiddlers Creek"];

const otherCities = [
  { name: "Sarasota", slug: "sarasota" },
  { name: "Venice", slug: "venice" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Bonita Springs", slug: "bonita-springs" },
  { name: "Naples", slug: "naples" },
];

export default function MarcoIslandPage() {
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
            src="/images/marco-island-hero.jpg"
            alt="Marco Island Florida"
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
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">{city.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Electrician in {city.name}, FL</h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">{city.description}. Professional electrical services for island homes and properties.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl">
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
              <span className="text-cyan-500 font-semibold tracking-wider uppercase text-sm">About {city.name}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">Electrical Services in {city.name}, Florida</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Marco Island is Southwest Florida's largest barrier island, offering residents and visitors a tropical paradise of white sand beaches, turquoise waters, and world-class amenities. Accessible by the Judge S.S. Jolley Bridge, this island gem combines natural beauty with sophisticated living.</p>
                <p>Carter Electric is proud to serve Marco Island's unique community. We understand the challenges of island living – from salt-air corrosion to the logistics of servicing a barrier island. Our team is experienced in marine-grade electrical installations that stand up to the harsh coastal environment.</p>
                <p>Whether you own a beachfront estate in Hideaway Beach, a condo with Gulf views, or a home along one of Marco's beautiful waterways, we bring the expertise and reliability you need. We also understand the importance of discretion and professionalism when working in Marco Island's luxury properties.</p>
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
            <span className="text-cyan-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Electrical Services in {city.name}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Your Marco Island Electrician</h2>
            <p className="text-white/90 text-lg mb-8">Professional electrical services for Marco Island homes and properties. We're just a bridge away.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-white text-sky-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all">
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
            {otherCities.map((city) => <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-white hover:bg-sky-50 px-6 py-3 rounded-full text-slate-700 hover:text-sky-600 transition-colors shadow-sm">{city.name}</Link>)}
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}