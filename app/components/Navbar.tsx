"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  { name: "Indoor Lighting", slug: "indoor-lighting" },
  { name: "Outdoor Lighting", slug: "outdoor-lighting" },
  { name: "EV Charger Installation", slug: "ev-charger-installation" },
  { name: "Electrical Repairs", slug: "electrical-repairs" },
  { name: "Panel Upgrades", slug: "panel-upgrades" },
  { name: "Commercial Services", slug: "commercial-services" },
];

export default function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Carter Electric Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg font-bold leading-tight transition-colors ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Carter Electric
              </h1>
              <p className={`text-xs transition-colors ${
                scrolled ? 'text-slate-500' : 'text-white/80'
              }`}>of Southwest Florida</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`nav-link font-medium transition-colors ${
              scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="dropdown relative">
              <button className={`nav-link flex items-center space-x-1 font-medium transition-colors ${
                scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white hover:text-sky-300'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Locations Dropdown */}
            <div className="dropdown relative">
              <button className={`nav-link flex items-center space-x-1 font-medium transition-colors ${
                scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white hover:text-sky-300'
              }`}>
                <span>Where We Service</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className={`nav-link font-medium transition-colors ${
              scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}>
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:9415550100" className={`flex items-center space-x-2 transition-colors ${
              scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="font-medium">(941) 555-0100</span>
            </a>
            <button
              onClick={onOpenContact}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-sky-500/25"
            >
              Contact Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in bg-white rounded-b-2xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-sky-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full text-slate-700 hover:text-sky-600 font-medium py-2"
                >
                  <span>Where We Service</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="block text-sm text-slate-600 hover:text-sky-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-slate-700 hover:text-sky-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <a
                href="tel:9415550100"
                className="flex items-center space-x-2 text-slate-600 hover:text-sky-600 py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(941) 555-0100</span>
              </a>

              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium transition-all w-full"
              >
                Contact Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
