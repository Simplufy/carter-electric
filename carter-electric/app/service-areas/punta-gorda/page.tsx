"use client";

import { useState } from "react";
import Link from "next/link";
import { Lightbulb, Zap, Car, Wrench, Building2, ArrowRight, Phone, MapPin } from "lucide-react";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../../components/AnimatedSection";

const city = {
  name: "Punta Gorda",
  slug: "punta-gorda",
  description: "Historic waterfront charm with modern amenities",
  county: "Charlotte County",
  population: "20,000+",
  founded: "1882",
  knownFor: "Historic downtown, waterfront district, and harbor views",
};

const services = [
  {
    icon: Lightbulb,
    title: "Historic Home Electrical",
    description: `Specialized electrical work for Punta Gorda's historic homes. We preserve character while adding modern safety and convenience.`,
  },
  {
    icon: Zap,
    title: "Outdoor Lighting",
    description: `Beautiful landscape and architectural lighting for Punta Gorda's stunning waterfront properties and historic homes.`,
  },
  {
    icon: Car,
    title: "EV Charging",
    description: `EV charger installation throughout Punta Gorda. Perfect for your home or downtown business location.`,
  },
  {
    icon: Wrench,
    title: "Electrical Service",
    description: `Complete electrical services for Punta Gorda homes and businesses. Licensed, insured, and local.`,
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description: `Supporting Punta Gorda's vibrant downtown businesses with professional electrical services and maintenance.`,
  },
];

const neighborhoods = ["Historic Downtown", "The Avenues", "Burnt Store Isles", "Charlotte Park", "Harborview", "Riviera Lagoons", "Cleveland", "Tropical Gulf Acres"];

const otherCities = [
  { name: "Sarasota", slug: "sarasota" },
  { name: "Venice", slug: "venice" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Bonita Springs", slug: "bonita-springs" },
  { name: "Naples", slug: "naples" },
  { name: "Marco Island", slug: "marco-island" },
];

export default function PuntaGordaPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-medium">{city.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Electrician in {city.name}, FL</h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">{city.description}. Trusted electrical services for Punta Gorda's historic homes and modern developments.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl">
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
              <span className="text-teal-500 font-semibold tracking-wider uppercase text-sm">About {city.name}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">Electrical Services in {city.name}, Florida</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Punta Gorda, meaning "Fat Point" in Spanish, is a charming waterfront city that perfectly blends historic character with modern living. The beautifully restored historic downtown district, with its brick-lined streets and unique shops, draws visitors from across Southwest Florida.</p>
                <p>Carter Electric has been serving Punta Gorda for over 15 years, and we understand the unique challenges of working on historic homes. Our electricians are experienced in updating century-old electrical systems while preserving the architectural integrity that makes these homes special.</p>
                <p>We also serve the newer developments throughout Punta Gorda, from Burnt Store Isles to the Avenues. Whether you need a panel upgrade for your historic home or landscape lighting for your waterfront property, our team brings expertise and respect for Punta Gorda's unique character.</p>
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
            <span className="text-teal-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Electrical Services in {city.name}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Your {city.name} Electrician</h2>
            <p className="text-white/90 text-lg mb-8">Contact Carter Electric for all your electrical needs in Punta Gorda and surrounding areas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-white text-teal-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all">
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
            {otherCities.map((city) => <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-white hover:bg-teal-50 px-6 py-3 rounded-full text-slate-700 hover:text-teal-600 transition-colors shadow-sm">{city.name}</Link>)}
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}