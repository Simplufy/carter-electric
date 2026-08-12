"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Home, Shield, Star } from "lucide-react";
import QuoteForm from "./QuoteForm";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Full Florida licensing & comprehensive insurance",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    desc: "Most quotes same day, 24/7 emergency service",
  },
  {
    icon: Home,
    title: "Family Owned & Local",
    desc: "Proudly serving Southwest Florida",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Carter Electric electrician shaking hands with a homeowner in Southwest Florida"
          fill
          className="object-cover object-right"
          priority
          quality={85}
        />
        {/* Navy gradient overlays for readability (left-weighted like reference) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Trust badges pill */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur border border-white/15 rounded-full px-5 py-2 mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-widest text-white">LICENSED</span>
            <span className="text-xs font-semibold tracking-widest text-white">INSURED</span>
            <span className="text-xs font-semibold tracking-widest text-white">LOCAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-5">
            Electrical Contractor in
            <br />
            <span className="text-orange-500">Southwest Florida</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8">
            Expert lighting, EV charger installation, panel upgrades and repairs for homes and
            businesses from Sarasota to Naples.
          </p>

          <QuoteForm />

          {/* Ratings row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">5.0 Rating</span>
            </div>
            <span className="text-slate-400 text-sm">
              Trusted by homeowners across Southwest Florida
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom feature bar */}
      <div className="relative z-10 border-t border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <feature.icon className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">{feature.title}</p>
                <p className="text-slate-400 text-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
