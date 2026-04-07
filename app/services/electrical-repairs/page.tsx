"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Zap,
  Car,
  Home,
  Building2,
  Shield
} from "lucide-react";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

const otherServices = [
  { name: "Indoor Lighting", slug: "indoor-lighting", icon: Lightbulb },
  { name: "Outdoor Lighting", slug: "outdoor-lighting", icon: Home },
  { name: "EV Charger Installation", slug: "ev-charger-installation", icon: Car },
  { name: "Panel Upgrades", slug: "panel-upgrades", icon: Zap },
  { name: "Commercial Services", slug: "commercial-services", icon: Building2 },
];

const services = [
  "Circuit breaker repairs and replacement",
  "Outlet and switch repairs",
  "GFCI outlet installation",
  "Ceiling fan installation",
  "Lighting fixture repairs",
  "Electrical troubleshooting",
  "Code violation corrections",
  "Surge protection",
];

export default function ElectricalRepairsPage() {
  const openChat = () => { (window as any).leadConnector?.chatWidget?.openWidget(); };

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={openChat} />
      

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9504.JPG"
            alt="Electrical repairs and troubleshooting"
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
              <Wrench className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Electrical Repairs & Troubleshooting
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Fast, reliable troubleshooting and repairs for any electrical issue. 24/7 emergency service available.
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
                  Professional Electrical Repair Services
                </h2>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-6">
                    Electrical problems can be frustrating and potentially dangerous. Our licensed electricians provide fast, reliable repairs for any electrical issue in your home or business. From flickering lights to complete power outages, we have the expertise to diagnose and fix the problem safely.
                  </p>

                  <div className="bg-sky-50 border-l-4 border-sky-500 p-6 mb-8 rounded-r-xl">
                    <h3 className="text-xl font-bold text-sky-900 mb-2">24/7 Emergency Service</h3>
                    <p className="text-sky-800">
                      Electrical emergencies don't wait for business hours. We offer round-the-clock emergency service for urgent issues like power outages, sparking outlets, and burning smells.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Repair Services We Offer
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Common Electrical Problems We Fix
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Flickering Lights</h4>
                      <p className="text-sm">Often caused by loose wiring, faulty switches, or circuit overloads.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Dead Outlets</h4>
                      <p className="text-sm">Can result from tripped GFCI, bad wiring, or failed outlets.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Circuit Breaker Tripping</h4>
                      <p className="text-sm">Usually indicates overloaded circuits or faulty breakers.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Burning Smells</h4>
                      <p className="text-sm">Serious issue requiring immediate attention. Call us right away.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Our Repair Process
                  </h3>

                  <p className="mb-4">
                    We start with a thorough diagnosis to identify the root cause of your electrical issue. Our electricians use professional-grade testing equipment to safely troubleshoot your system. Once we identify the problem, we provide a clear explanation and upfront pricing before any work begins.
                  </p>

                  <p>
                    All repairs are completed to code using quality materials. We stand behind our work with a satisfaction guarantee.
                  </p>
                </div>

                <button
                  onClick={openChat}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Schedule Electrical Repair</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* Contact Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Need Electrical Repair?</h3>
                  <p className="text-slate-300 mb-6">Contact us for fast, reliable electrical service.</p>
                  
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
                      <span>24/7 Emergency Available</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-sky-400" />
                      <span>Sarasota to Naples</span>
                    </div>
                  </div>

                  <button
                    onClick={openChat}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full font-semibold transition-all"
                  >
                    Request Service
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
                <div className="mt-6 bg-sky-500 rounded-2xl p-6 text-white">
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

      <Footer onOpenContact={openChat} />
    </main>
  );
}

