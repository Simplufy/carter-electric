"use client";

import { useState } from "react";
import Link from "next/link";
import { Lightbulb, Zap, Car, Wrench, Building2, ArrowRight, Phone, MapPin, Star, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../../components/AnimatedSection";

const city = {
  name: "Venice",
  slug: "venice",
  description: "The City on the Gulf with old Florida charm",
  county: "Sarasota County",
  population: "23,000+",
  founded: "1925",
  knownFor: "Venice Beach, shark tooth hunting, Italian architecture",
};

const services = [
  {
    icon: Lightbulb,
    title: "Indoor Lighting",
    description: `From Mediterranean Revival homes to modern beachfront condos, we design lighting that complements Venice's unique architectural heritage.`,
  },
  {
    icon: Zap,
    title: "Outdoor & Landscape Lighting",
    description: `Showcase your Venice home's landscaping with professional outdoor lighting. Perfect for evening entertaining and enhanced security.`,
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: `More Venice residents are going electric. We install Level 2 EV chargers that get you back on the road quickly.`,
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: `Fast, reliable electrical repairs throughout Venice. From the historic downtown to the beaches, we're just a phone call away.`,
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: `Supporting Venice businesses with reliable electrical services. From restaurants on Venice Avenue to beachfront hotels.`,
  },
];

const neighborhoods = ["Historic Downtown", "Venice Island", "South Venice", "Venice Gardens", "Eastgate", "Nokomis", "Plantation", "Jacaranda West", "Capri Isles", "Cypress Falls"];

const otherCities = [
  { name: "Sarasota", slug: "sarasota" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Bonita Springs", slug: "bonita-springs" },
  { name: "Naples", slug: "naples" },
  { name: "Marco Island", slug: "marco-island" },
];

export default function VenicePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">{city.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Electrician in {city.name}, FL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">
              {city.description}. Trusted electrical services for Venice homes and businesses. From historic downtown to the beaches of Venice Island.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl">
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
              <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm">About {city.name}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Electrical Services in {city.name}, Florida
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {city.name} is a charming coastal city known as "The City on the Gulf." Famous for its Italian Renaissance-style architecture, world-class shark tooth hunting at Venice Beach, and pristine Gulf of Mexico waters, Venice offers residents a unique blend of history and natural beauty.
                </p>
                <p>
                  Carter Electric has been serving Venice homeowners and businesses for over 15 years. We understand the specific needs of Venice properties, from the historic homes in the downtown district to modern developments throughout the area. Our experience with Venice's coastal environment means we know how to protect your electrical systems from salt air and humidity.
                </p>
                <p>
                  Whether you're renovating a Mediterranean Revival home, upgrading the electrical in your beachfront condo, or installing landscape lighting to showcase your tropical garden, our licensed electricians bring expertise and attention to detail to every project.
                </p>
                <p>
                  Venice residents appreciate our commitment to quality workmanship and customer service. We treat every home as if it were our own, ensuring all work meets the highest standards of safety and reliability.
                </p>
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
                    {neighborhoods.map((neighborhood) => (
                      <span key={neighborhood} className="text-xs bg-white px-2 py-1 rounded-full text-slate-600 shadow-sm">{neighborhood}</span>
                    ))}
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
            <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Electrical Services in {city.name}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Comprehensive electrical solutions tailored for Venice homes and businesses.</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready for Expert Electrical Service in {city.name}?</h2>
            <p className="text-white/90 text-lg mb-8">Contact Carter Electric today for a free estimate. Serving all of Venice and surrounding areas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsContactOpen(true)} className="inline-flex items-center justify-center space-x-2 bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all">
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
            {otherCities.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-white hover:bg-emerald-50 px-6 py-3 rounded-full text-slate-700 hover:text-emerald-600 transition-colors shadow-sm">{city.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}