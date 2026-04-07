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
  name: "Bonita Springs",
  slug: "bonita-springs",
  description: "Gateway to the Gulf with pristine beaches",
  county: "Lee & Collier Counties",
  population: "53,000+",
  founded: "1999",
  knownFor: "Bonita Beach, Barefoot Beach, and natural beauty",
};

const services = [
  {
    icon: Lightbulb,
    title: "Luxury Home Lighting",
    description: `Custom lighting design for Bonita Springs' luxury homes. Elegant solutions that enhance your living spaces.`,
  },
  {
    icon: Zap,
    title: "Coastal Electrical",
    description: `Specialized electrical services for beachfront and coastal properties. Salt-air resistant installations.`,
  },
  {
    icon: Car,
    title: "EV Charging",
    description: `EV charger installation for your Bonita Springs home. Compatible with Tesla, ChargePoint, and all major brands.`,
  },
  {
    icon: Wrench,
    title: "Home Electrical",
    description: `Complete electrical services for Bonita Springs homes. From new construction to renovations and repairs.`,
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: `Electrical services for Bonita Springs businesses along US-41 and throughout the community.`,
  },
];

const neighborhoods = ["Bonita Beach", "Barefoot Beach", "Palmira", "Vasari", "Highland Woods", "Spanish Wells", "The Brooks", "Worthington"];

const otherCities = [
  { name: "Sarasota", slug: "sarasota" },
  { name: "Venice", slug: "venice" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Naples", slug: "naples" },
  { name: "Marco Island", slug: "marco-island" },
];

export default function BonitaSpringsPage() {
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
            src="/images/bonita-springs-hero.jpg"
            alt="Bonita Springs Florida"
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
              <MapPin className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 font-medium">{city.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Electrician in {city.name}, FL</h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">{city.description}. Premium electrical services for Bonita Springs homes and businesses.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="tel:+19413366811" className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
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
              <span className="text-rose-500 font-semibold tracking-wider uppercase text-sm">About {city.name}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">Electrical Services in {city.name}, Florida</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Bonita Springs is a beautiful coastal city situated between Fort Myers and Naples, offering residents the perfect blend of natural beauty and upscale living. With pristine beaches like Barefoot Beach and Bonita Beach, plus numerous golf communities and nature preserves, it's one of Southwest Florida's most desirable locations.</p>
                <p>Carter Electric provides premium electrical services tailored to Bonita Springs' luxury homes and high-end developments. We understand the expectations of discerning homeowners and deliver workmanship that matches the quality of your property.</p>
                <p>Our coastal electrical expertise is especially valuable in Bonita Springs, where many homes are exposed to salt air and coastal conditions. We use marine-grade materials and proven techniques to ensure your electrical systems remain safe and reliable for years to come.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{city.name} at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between"><span className="text-slate-600">Population</span><span className="font-semibold text-slate-900">{city.population}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Founded</span><span className="font-semibold text-slate-900">{city.founded}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Counties</span><span className="font-semibold text-slate-900">{city.county}</span></div>
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
            <span className="text-rose-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Electrical Services in {city.name}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-rose-500" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Expert Electricians in {city.name}</h2>
            <p className="text-white/90 text-lg mb-8">Contact Carter Electric for premium electrical services throughout Bonita Springs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-white text-sky-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                <span>Schedule Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="tel:+19413366811" className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
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