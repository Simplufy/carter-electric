"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Car, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Zap,
  Home,
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
  { name: "Outdoor Lighting", slug: "outdoor-lighting", icon: Home },
  { name: "Electrical Repairs", slug: "electrical-repairs", icon: Wrench },
  { name: "Panel Upgrades", slug: "panel-upgrades", icon: Zap },
  { name: "Commercial Services", slug: "commercial-services", icon: Building2 },
];

const benefits = [
  "Compatible with all EV brands",
  "Level 2 charging (up to 40 miles per hour)",
  "Permit handling included",
  "Professional installation",
  "Load calculation and panel assessment",
  "Smart charger options",
  "Outdoor-rated installations",
  "Warranty on all work",
];

export default function EVChargerPage() {
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
            src="/images/IMG_9503.jpeg"
            alt="EV charger installation"
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
              <Car className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              EV Charger Installation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Future-proof your home with professional EV charger installation. Compatible with all major electric vehicle brands.
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
                  Professional EV Charger Installation
                </h2>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-6">
                    As electric vehicles become increasingly popular, having a home charging station is essential. Carter Electric specializes in professional EV charger installation, ensuring you can charge your vehicle safely, efficiently, and conveniently at home.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    EV Chargers We Install
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Tesla Wall Connector</h4>
                      <p className="text-sm">Tesla's official home charging solution with up to 44 miles of range per hour.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">ChargePoint Home Flex</h4>
                      <p className="text-sm">Universal charger compatible with all EV brands. Smart features included.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">JuiceBox Pro</h4>
                      <p className="text-sm">Smart charger with WiFi connectivity and energy monitoring.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">ClipperCreek</h4>
                      <p className="text-sm">Reliable, rugged chargers made in USA. Perfect for outdoor installation.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Our Installation Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Home Assessment</h4>
                        <p className="text-sm">We evaluate your electrical panel and determine the best installation location.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Load Calculation</h4>
                        <p className="text-sm">We ensure your electrical system can handle the EV charger load safely.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Permit & Installation</h4>
                        <p className="text-sm">We handle all permits and install your charger to code.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Testing & Setup</h4>
                        <p className="text-sm">We test everything and show you how to use your new charger.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Why Professional Installation Matters
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Get Your Free EV Charger Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* Contact Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Go Electric?</h3>
                  <p className="text-slate-300 mb-6">Contact us today for a free EV charger consultation.</p>
                  
                  <div className="space-y-4 mb-6">
                    <a href="tel:+19413366811" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                      <Phone className="w-5 h-5 text-sky-400" />
                      <span>(941) 555-0100</span>
                    </a>
                    <a href="mailto:contact@carterelectric.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-sky-400" />
                      <span>contact@carterelectric.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Clock className="w-5 h-5 text-sky-400" />
                      <span>Mon-Fri: 7AM-6PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-sky-400" />
                      <span>Sarasota to Naples</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full font-semibold transition-all"
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
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-sky-50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-sky-500" />
                        <span className="text-slate-700 group-hover:text-sky-600">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-2xl p-6 text-white">
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
