"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Home, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Zap,
  Car,
  Wrench,
  Building2,
  Shield
} from "lucide-react";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

const otherServices = [
  { name: "Indoor Lighting", slug: "indoor-lighting", icon: Lightbulb },
  { name: "EV Charger Installation", slug: "ev-charger-installation", icon: Car },
  { name: "Electrical Repairs", slug: "electrical-repairs", icon: Wrench },
  { name: "Panel Upgrades", slug: "panel-upgrades", icon: Zap },
  { name: "Commercial Services", slug: "commercial-services", icon: Building2 },
];

const benefits = [
  "Landscape and garden lighting",
  "Security and motion-sensor lights",
  "Pathway and walkway illumination",
  "Deck and patio lighting",
  "Pool and spa lighting",
  "Architectural accent lighting",
  "Energy-efficient LED options",
  "Smart outdoor controls",
];

export default function OutdoorLightingPage() {
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
            src="/images/IMG_9501.jpeg"
            alt="Outdoor lighting installation"
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
              <Home className="w-6 h-6 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Outdoor & Landscape Lighting
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Enhance curb appeal and security with professional landscape lighting, pathway lights, and architectural illumination.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Professional Outdoor Lighting Services
                </h2>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-6">
                    Transform your outdoor spaces into stunning, functional areas that you can enjoy day and night. Our professional outdoor lighting solutions enhance your property's beauty, improve security, and extend your living space into the outdoors.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Our Outdoor Lighting Services
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Landscape Lighting</h4>
                      <p className="text-sm">Highlight trees, shrubs, and garden features with carefully placed uplights and downlights.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Security Lighting</h4>
                      <p className="text-sm">Motion-sensor and flood lights to keep your property safe and deter intruders.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Pathway Lighting</h4>
                      <p className="text-sm">Safe, elegant illumination for walkways, driveways, and stairs.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Pool & Water Feature Lighting</h4>
                      <p className="text-sm">Safe, waterproof lighting for pools, fountains, and ponds.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Benefits of Outdoor Lighting
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Why Choose Carter Electric?
                  </h3>

                  <p className="mb-4">
                    We understand Southwest Florida's unique climate challenges. Our outdoor lighting installations use marine-grade, corrosion-resistant materials that stand up to salt air and humidity. Plus, our hurricane-ready designs ensure your lights stay functional through Florida's storm season.
                  </p>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Get Your Free Outdoor Lighting Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* Contact Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-6">Contact us today for a free consultation and quote.</p>
                  
                  <div className="space-y-4 mb-6">
                    <a href="tel:9415550100" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <span>(941) 555-0100</span>
                    </a>
                    <a href="mailto:info@cartelectric.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-emerald-400" />
                      <span>info@cartelectric.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Clock className="w-5 h-5 text-emerald-400" />
                      <span>Mon-Fri: 7AM-6PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <span>Sarasota to Naples</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full font-semibold transition-all"
                  >
                    Request a Quote
                  </button>
                </div>

                {/* Other Services */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Other Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-emerald-50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-emerald-500" />
                        <span className="text-slate-700 group-hover:text-emerald-600">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-bold">Licensed & Insured</span>
                  </div>
                  <p className="text-sm text-white/90">Full state licensing and comprehensive insurance for your peace of mind.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}
