"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Car,
  Home,
  Wrench,
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
  { name: "Electrical Repairs", slug: "electrical-repairs", icon: Wrench },
  { name: "Commercial Services", slug: "commercial-services", icon: Building2 },
];

const benefits = [
  "Increased home safety",
  "Higher electrical capacity",
  "Support for modern appliances",
  "EV charger readiness",
  "Whole-house surge protection",
  "Code compliance",
  "Higher home resale value",
  "Lower insurance premiums",
];

export default function PanelUpgradesPage() {
  const openChat = () => { const lcw = (window as any).lcw; if (lcw?.open) lcw.open(); };

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={openChat} />
      

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9505.JPG"
            alt="Panel upgrades and electrical work"
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
              <Zap className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Panel Upgrades & Rewiring
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Modernize your electrical system with panel upgrades and rewiring. Ensure your home can handle today's power demands.
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
                  Professional Panel Upgrade Services
                </h2>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-6">
                    Your electrical panel is the heart of your home's electrical system. If you're experiencing frequent breaker trips, flickering lights, or planning to add major appliances, it may be time for a panel upgrade. Carter Electric specializes in safe, code-compliant panel upgrades that bring your home's electrical system into the modern era.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Signs You Need a Panel Upgrade
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Frequent Breaker Trips</h4>
                      <p className="text-sm">If your breakers trip often, your panel may be overloaded.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Fuse Panel</h4>
                      <p className="text-sm">Old fuse panels are outdated and may not meet modern safety standards.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Adding Major Appliances</h4>
                      <p className="text-sm">New AC units, EV chargers, or hot tubs may require more power.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Home Renovation</h4>
                      <p className="text-sm">Major remodels often require additional circuits and capacity.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Benefits of a Panel Upgrade
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Panel Sizes We Install
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-24 flex-shrink-0 font-bold text-sky-600">200 Amp</div>
                      <div>
                        <p className="text-sm">Standard for most modern homes. Supports AC, electric appliances, and EV charging.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-24 flex-shrink-0 font-bold text-sky-600">400 Amp</div>
                      <div>
                        <p className="text-sm">For large homes or properties with high power demands.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-24 flex-shrink-0 font-bold text-sky-600">Sub-Panels</div>
                      <div>
                        <p className="text-sm">Additional panels for garages, workshops, or additions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={openChat}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Get Your Panel Upgrade Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* Contact Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Ready to Upgrade?</h3>
                  <p className="text-slate-300 mb-6">Contact us for a free panel assessment and quote.</p>
                  
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
                    onClick={openChat}
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

