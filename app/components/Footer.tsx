"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Social media icons as SVG since lucide-react doesn't include them
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const serviceAreas = [
  { name: "Sarasota", slug: "sarasota" },
  { name: "Venice", slug: "venice" },
  { name: "Englewood", slug: "englewood" },
  { name: "Port Charlotte", slug: "port-charlotte" },
  { name: "Punta Gorda", slug: "punta-gorda" },
  { name: "Cape Coral", slug: "cape-coral" },
  { name: "Fort Myers", slug: "fort-myers" },
  { name: "Bonita Springs", slug: "bonita-springs" },
  { name: "Naples", slug: "naples" },
  { name: "Marco Island", slug: "marco-island" },
];

const services = [
  "Indoor Lighting Installation",
  "Outdoor & Landscape Lighting",
  "EV Charger Installation",
  "Electrical Repairs",
  "Panel Upgrades",
  "Commercial Services",
];

export default function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="relative w-48 h-24 mb-4">
              <Image
                src="/images/carter-electric-logo.png"
                alt="Carter Electric Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm mb-4">
              We've been operating in Florida since 2026, but have ran electrical companies for 15+ years, starting in the Chicagoland area. Licensed, insured, and committed to your safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => {
                      const lcw = (window as any).lcw;
                      if (lcw?.open) lcw.open();
                    }}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+19413366811" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    (941) 555-0100
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@carterelectricflorida.com" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    contact@carterelectricflorida.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-slate-400 text-sm">Southwest Florida<br />Sarasota to Naples</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-slate-400 text-sm">Mon-Fri: 7AM-6PM<br />Sat: 8AM-4PM<br />24/7 Emergency</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Carter Electric of Southwest Florida. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/about" className="text-slate-500 hover:text-sky-400 transition-colors">
              About Us
            </Link>
            <button 
              onClick={() => {
                const lcw = (window as any).lcw;
                if (lcw?.open) lcw.open();
              }} 
              className="text-slate-500 hover:text-sky-400 transition-colors"
            >
              Contact
            </button>
            <Link href="/privacy-policy" className="text-slate-500 hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-slate-500 hover:text-sky-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}