"use client";

import Link from "next/link";
import Image from "next/image";

export default function SimpleFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="relative w-40 h-24 mb-4">
              <Image
                src="/images/carter-electric-logo.png"
                alt="Carter Electric Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm">
              We've been operating in Florida since 2026, but have ran electrical companies for 15+ years, starting in the Chicagoland area. Licensed, insured, and committed to your safety.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-slate-400 text-sm mb-2">+1 941-336-6811</p>
            <p className="text-slate-400 text-sm">contact@carterelectricflorida.com</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-slate-400 hover:text-sky-400">About Us</Link>
              <Link href="/privacy-policy" className="text-slate-400 hover:text-sky-400">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-slate-400 hover:text-sky-400">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Carter Electric of Southwest Florida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}