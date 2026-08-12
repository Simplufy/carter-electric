"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Lightbulb,
  Phone,
  MapPin,
  Shield,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import Faq from "./Faq";
import { areaFaq } from "../seo-data";
import { allAreaLinks, type AreaPageData } from "../content/areas";

const iconBySlug: Record<string, typeof Lightbulb> = {
  "indoor-lighting": Lightbulb,
  "outdoor-lighting": Zap,
  "ev-charger-installation": Car,
  "electrical-repairs": Wrench,
  "panel-upgrades": Zap,
  "commercial-services": Building2,
};

const whyIcons = [Shield, Clock, Star, CheckCircle2];

export default function AreaLocalPage({ data }: { data: AreaPageData }) {
  const openChat = () => {
    (window as any).leadConnector?.chatWidget?.openWidget();
  };

  const otherCities = allAreaLinks.filter((c) => c.slug !== data.slug);
  const faq = areaFaq[data.slug] ?? [];

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
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">{data.county}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Electrician in {data.name}, FL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-8">{data.heroBlurb}</p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openChat}
                className="inline-flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+19413366811"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>(941) 336-6811</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
                About {data.name}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Electrical Services in {data.name}, Florida
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {data.about.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{data.name} at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Population</span>
                    <span className="font-semibold text-slate-900">{data.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Founded</span>
                    <span className="font-semibold text-slate-900">{data.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">County</span>
                    <span className="font-semibold text-slate-900 text-right ml-4">{data.county}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-slate-600">Known For</span>
                    <p className="font-semibold text-slate-900 mt-1">{data.knownFor}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Neighborhoods We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.neighborhoods.map((n) => (
                      <span
                        key={n}
                        className="text-xs bg-white px-2 py-1 rounded-full text-slate-600 shadow-sm"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed">{data.neighborhoodNote}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Electrical Services We Offer in {data.name}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Full-service residential and commercial electrical work—each service links to a dedicated page with more detail.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service) => {
              const Icon = iconBySlug[service.slug] ?? Wrench;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full group"
                  >
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-orange-500 font-semibold text-sm">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
              Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              {data.localNeedsTitle}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {data.localNeeds.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="border border-slate-200 rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
              Why {data.name} Chooses Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Your Local {data.name} Electrician
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChoose.map((item, index) => {
              const Icon = whyIcons[index % whyIcons.length];
              return (
                <AnimatedSection key={item.title} delay={index * 0.1} className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need an Electrician in {data.name}?
            </h2>
            <p className="text-white/90 text-lg mb-8">{data.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openChat}
                className="inline-flex items-center justify-center space-x-2 bg-white text-orange-700 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <span>Schedule Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+19413366811"
                className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>(941) 336-6811</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-slate-900 mb-8">We Also Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="bg-white hover:bg-orange-50 px-6 py-3 rounded-full text-slate-700 hover:text-orange-700 transition-colors shadow-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faq}
        title={`Electrician in ${data.name} FAQs`}
        subtitle={`Common questions about electrical service in ${data.name}, FL.`}
      />
      <Footer onOpenContact={openChat} />
    </main>
  );
}
