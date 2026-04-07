"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Lightbulb, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Home,
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
  { name: "Outdoor Lighting", slug: "outdoor-lighting", icon: Home },
  { name: "EV Charger Installation", slug: "ev-charger-installation", icon: Car },
  { name: "Electrical Repairs", slug: "electrical-repairs", icon: Wrench },
  { name: "Panel Upgrades", slug: "panel-upgrades", icon: Zap },
  { name: "Commercial Services", slug: "commercial-services", icon: Building2 },
];

const benefits = [
  "Custom lighting design tailored to your space",
  "Energy-efficient LED options",
  "Recessed and overhead lighting",
  "Under-cabinet and accent lighting",
  "Smart lighting controls",
  "Chandelier and fixture installation",
  "Dimmer switches and controls",
  "Outdoor lighting expertise",
];

export default function IndoorLightingPage() {
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
            src="/images/IMG_9500.jpeg"
            alt="Indoor lighting installation"
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
              <Lightbulb className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Indoor Lighting Installation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Transform your home with custom indoor lighting solutions. From recessed lighting to statement fixtures, we bring your vision to life.
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
                  Professional Indoor Lighting Services
                </h2>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-6">
                    Lighting is one of the most important aspects of your home's interior design. It sets the mood, highlights architectural features, and makes your space functional and inviting. At Carter Electric, we specialize in creating custom indoor lighting solutions that perfectly match your style and needs.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Our Indoor Lighting Services
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Recessed Lighting</h4>
                      <p className="text-sm">Modern, sleek ceiling lights that provide even illumination throughout any room.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Chandeliers & Pendants</h4>
                      <p className="text-sm">Statement pieces that add elegance and become the focal point of your space.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Under-Cabinet Lighting</h4>
                      <p className="text-sm">Perfect for kitchens, providing task lighting and ambient glow.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-slate-900 mb-2">Accent & Track Lighting</h4>
                      <p className="text-sm">Highlight artwork, architectural features, or specific areas.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Why Choose Carter Electric?
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
                    The Carter Electric Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Free Consultation</h4>
                        <p className="text-sm">We visit your home to understand your vision and assess your space.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Custom Design</h4>
                        <p className="text-sm">We create a lighting plan tailored to your needs and budget.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Expert Installation</h4>
                        <p className="text-sm">Our licensed electricians install everything with precision and care.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Final Walkthrough</h4>
                        <p className="text-sm">We ensure everything is perfect and show you how to use your new lighting.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Get Your Free Lighting Quote</span>
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
                      <Phone className="w-5 h-5 text-sky-400" />
                      <span>(941) 555-0100</span>
                    </a>
                    <a href="mailto:info@cartelectric.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-sky-400" />
                      <span>info@cartelectric.com</span>
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
