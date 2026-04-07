"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { services, serviceAreas } from "./data";

export default function SimpleNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-20 sm:w-48 sm:h-24">
              <img
                src="/images/carter-electric-logo.png"
                alt="Carter Electric Logo"
                className="object-contain w-full h-full"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-medium transition-colors ${
              scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}>
              Home
            </Link>
            
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

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+19413366811" className={`flex items-center space-x-2 transition-colors ${
              scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1 941-336-6811</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white hover:text-sky-300'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in bg-white rounded-b-2xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-slate-700 hover:text-sky-600 font-medium py-2">Home</Link>
              <Link href="/about" className="text-slate-700 hover:text-sky-600 font-medium py-2">About Us</Link>
              <a href="tel:+19413366811" className="flex items-center space-x-2 text-slate-600 hover:text-sky-600 py-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+1 941-336-6811</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}