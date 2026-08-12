"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";
import Faq from "./Faq";
import { serviceFaq } from "../seo-data";
import { allAreaLinks } from "../content/areas";
import type { ServicePageData } from "../content/services";

const iconMap = {
  lightbulb: Lightbulb,
  home: Home,
  car: Car,
  wrench: Wrench,
  zap: Zap,
  building: Building2,
} as const;

const allServices = [
  { name: "Indoor Lighting", slug: "indoor-lighting", icon: Lightbulb },
  { name: "Outdoor Lighting", slug: "outdoor-lighting", icon: Home },
  { name: "EV Charger Installation", slug: "ev-charger-installation", icon: Car },
  { name: "Electrical Repairs", slug: "electrical-repairs", icon: Wrench },
  { name: "Panel Upgrades", slug: "panel-upgrades", icon: Zap },
  { name: "Commercial Services", slug: "commercial-services", icon: Building2 },
];

export default function ServiceLocalPage({ data }: { data: ServicePageData }) {
  const openChat = () => {
    (window as any).leadConnector?.chatWidget?.openWidget();
  };

  const Icon = iconMap[data.iconHint as keyof typeof iconMap] ?? Lightbulb;
  const otherServices = allServices.filter((s) => s.slug !== data.slug);
  const faq = serviceFaq[data.slug] ?? [];

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={openChat} />

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.heroAlt}
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
              <Icon className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{data.h1}</h1>
            <p className="text-xl text-slate-300 max-w-3xl">{data.heroBlurb}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.introTitle}</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                  {data.intro.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </AnimatedSection>

              {data.sections.map((section) => (
                <AnimatedSection key={section.title}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{section.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-4">{section.body}</p>
                  {section.bullets && (
                    <ul className="space-y-3">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AnimatedSection>
              ))}

              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{data.processTitle}</h2>
                <div className="space-y-6">
                  {data.process.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{step.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{data.whyTitle}</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {data.why.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openChat}
                  className="mt-8 inline-flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <span>Get Your Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6 sticky top-28">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-6">
                    Contact us today for a free consultation and quote on {data.shortName.toLowerCase()}.
                  </p>
                  <div className="space-y-4 mb-6">
                    <a
                      href="tel:+19413366811"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5 text-amber-400" />
                      <span>(941) 336-6811</span>
                    </a>
                    <a
                      href="mailto:contact@carterelectricflorida.com"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-amber-400" />
                      <span>contact@carterelectricflorida.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Clock className="w-5 h-5 text-amber-400" />
                      <span>Mon-Fri: 7AM-6PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <span>Sarasota to Naples</span>
                    </div>
                  </div>
                  <button
                    onClick={openChat}
                    className="w-full bg-orange-500 hover:bg-orange-700 text-white py-3 rounded-full font-semibold transition-all"
                  >
                    Request a Quote
                  </button>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Other Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-orange-500" />
                        <span className="text-slate-700 group-hover:text-orange-700">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-bold">Licensed & Insured</span>
                  </div>
                  <p className="text-sm text-white/90">
                    Full state licensing and comprehensive insurance for your peace of mind.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {data.shortName} Across Southwest Florida
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{data.areasNote}</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {allAreaLinks.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-white hover:bg-orange-50 px-5 py-2.5 rounded-full text-slate-700 hover:text-orange-700 transition-colors shadow-sm text-sm font-medium"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faq}
        title={`${data.shortName} FAQs`}
        subtitle={`Common questions about ${data.shortName.toLowerCase()} in Southwest Florida.`}
      />
      <Footer onOpenContact={openChat} />
    </main>
  );
}
