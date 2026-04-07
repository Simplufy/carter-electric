"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
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
  Wrench,
  Shield
} from "lucide-react";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

const otherServices = [
  { name: "Indoor Lighting", slug: "indoor-lighting", icon: Lightbulb },
  { name: "Outdoor Lighting", slug: "outdoor-lighting", icon: Home },
  { name: "EV Charger Installation", slug: "ev-charger-installation", icon: Car },
  { name: "Electrical Repairs", slug: "electrical-repairs", icon: Wrench },
  { name: "Panel Upgrades", slug: "panel-upgrades", icon: Zap },
];

const services = [
  "Commercial lighting design and installation",
  "Office and retail electrical",
  "Condo and apartment complex services",
  "Maintenance contracts",
  "Emergency repairs",
  "Code compliance updates",
  "Energy efficiency consulting",
  "Generator installations",
];

const industries = [
  { name: "Property Management", desc: "Reliable service for apartment complexes and condos" },
  { name: "Retail Stores", desc: "Attractive lighting and reliable power for your business" },
  { name: "Restaurants", desc: "Kitchen electrical, lighting, and code compliance" },
  { name: "Offices", desc: "Modern lighting and power solutions for workspaces" },
];

export default function CommercialServicesPage() {
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
            src="/images/IMG_9507.jpeg"
            alt="Commercial electrical services"
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
              <Building2 className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Commercial Electrical Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Specialized electrical services for condos, apartments, and commercial properties. Bulk pricing and maintenance plans available.
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
                  Commercial & Multi-Family Electrical Services
                </h2>
                
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-6">
                    Carter Electric provides comprehensive electrical services for commercial properties and multi-family residences throughout Southwest Florida. We understand the unique needs of property managers, business owners, and HOAs, and we deliver reliable, cost-effective solutions that keep your properties running smoothly.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Industries We Serve
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {industries.map((industry, index) => (
                      <div key={index} className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-2">{industry.name}</h4>
                        <p className="text-sm">{industry.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Commercial Services We Offer
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
                    Maintenance Plans
                  </h3>

                  <p className="mb-4">
                    Keep your properties in top condition with our commercial maintenance plans. Regular inspections and preventive maintenance help avoid costly emergency repairs and ensure code compliance.
                  </p>

                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-8 rounded-r-xl">
                    <h4 className="text-xl font-bold text-sky-900 mb-2">Bulk Pricing Available</h4>
                    <p className="text-sky-800">
                      Property managers and HOAs receive special pricing for multi-unit projects and ongoing maintenance contracts.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Why Commercial Clients Choose Us
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Minimal Disruption</h4>
                        <p className="text-sm">We work around your schedule to minimize impact on tenants and customers.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Fast Response</h4>
                        <p className="text-sm">24/7 emergency service for urgent commercial electrical issues.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Code Compliance</h4>
                        <p className="text-sm">All work meets current commercial electrical codes and safety standards.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Discuss Your Commercial Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* Contact Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Commercial Inquiries</h3>
                  <p className="text-slate-300 mb-6">Contact us for commercial quotes and maintenance plans.</p>
                  
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
                      <span>24/7 Emergency Available</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-sky-400" />
                      <span>Sarasota to Naples</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-full font-semibold transition-all"
                  >
                    Request Commercial Quote
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
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-cyan-50 transition-colors group"
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
