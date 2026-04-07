"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Award, Heart, Users, Lightbulb, Shield, Clock, Star, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection, { AnimatedCard } from "../components/AnimatedSection";

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "5,000+", label: "Projects Completed" },
  { value: "10", label: "Cities Served" },
  { value: "100%", label: "Licensed & Insured" },
];

const values = [
  {
    icon: Heart,
    title: "Family First",
    description: "As a family-owned business, we treat every customer like family. Your home's safety is our top priority.",
  },
  {
    icon: Shield,
    title: "Safety Above All",
    description: "We never compromise on safety. All work meets or exceeds local electrical codes and industry standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay current with the latest electrical technologies, from smart home systems to EV charging solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our commitment to quality workmanship has earned us a reputation as Southwest Florida's trusted electricians.",
  },
];

const team = [
  {
    name: "Jeff Carter",
    role: "Founder & Master Electrician",
    description: "Licensed master electrician with 37 years of experience who started A&J Electric in Sycamore, Illinois in 2009. After 18 successful years, Jeff brought his expertise to Southwest Florida to combine his passion for quality electrical work with his love of scuba diving.",
  },
  {
    name: "Sarah Carter",
    role: "Operations Manager",
    description: "Sarah keeps everything running smoothly, from scheduling to customer service. Her attention to detail ensures every project exceeds expectations.",
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Electrician",
    description: "Mike brings 30+ years of commercial and residential experience. He specializes in complex installations and loves solving challenging electrical puzzles.",
  },
  {
    name: "Emily Chen",
    role: "Service Coordinator",
    description: "Emily is often the first voice you'll hear when you call. She's dedicated to ensuring every customer gets the right solution for their needs.",
  },
];

const milestones = [
  { year: "2009", event: "A&J Electric founded in Sycamore, Illinois" },
  { year: "2012", event: "Expanded service area throughout Northern Illinois" },
  { year: "2015", event: "Achieved Master Electrician certification" },
  { year: "2018", event: "Added EV charger installation services" },
  { year: "2026", event: "Started Carter Electric of Southwest Florida" },
];

export default function AboutPage() {
  const openChat = () => {
    (window as any).leadConnector?.chatWidget?.openWidget();
  };

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={openChat} />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-header.png"
            alt="Carter Electric"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              From Illinois to Southwest Florida
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A story of passion, expertise, and following your dreams to the sunshine state
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                18 Years of Excellence, Now in Paradise
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>A&J Electric was founded in 2009 in Sycamore, Illinois</strong> by Jeff Carter, a master electrician with a vision of providing honest, reliable electrical services to his community. For 18 successful years, A&J Electric built a reputation for quality workmanship and exceptional customer service throughout Northern Illinois.
                </p>
                <p>
                  But Jeff had a dream beyond the Midwest winters. An avid scuba diving enthusiast, he longed to combine his professional expertise with his passion for underwater exploration. In 2026, Jeff made the life-changing decision to move to Southwest Florida, bringing his decades of electrical experience to the sunshine state.
                </p>
                <p>
                  <strong>Carter Electric of Southwest Florida</strong> was born from this dream - a company that delivers the same top-quality electrical work Jeff perfected in Illinois, while allowing him to spend his free time exploring the beautiful waters of the Gulf Coast.
                </p>
                <p>
                  Today, we're proud to serve homeowners and businesses from Sarasota to Naples, bringing that same dedication to excellence that made A&J Electric successful for nearly two decades.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Journey</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 text-sky-500 font-bold">{milestone.year}</div>
                      <div className="flex-grow pb-6 border-l-2 border-slate-200 pl-4 relative">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-sky-500 rounded-full" />
                        <p className="text-slate-700">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-sky-500 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              These core values guide everything we do, from the way we answer the phone to the way we finish every job.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Local Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                We Know Southwest Florida
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Living and working in Southwest Florida means we understand the unique challenges our region presents. From hurricane-season preparedness to salt-air corrosion concerns, we know what it takes to keep your electrical systems running safely year-round.
                </p>
                <p>
                  We're familiar with local building codes across all 10 cities we serve, and we have established relationships with local inspectors and permitting offices. This local knowledge translates to smoother projects and faster turnaround times for our customers.
                </p>
                <p>
                  Most importantly, we're your neighbors. When you call Carter Electric, you're not just getting an electrician – you're getting a local business owner who cares about the community we all share.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['Sarasota', 'Venice', 'Englewood', 'Port Charlotte', 'Punta Gorda', 'Cape Coral', 'Fort Myers', 'Bonita Springs', 'Naples', 'Marco Island'].map((city) => (
                  <span key={city} className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                    <MapPin className="w-3 h-3 text-sky-500" />
                    {city}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-slate-600">5.0 Rating on Google</span>
                </div>
                <blockquote className="text-slate-700 italic mb-6">
                  "Working with Carter Electric was a breath of fresh air. They treated our home like it was their own, explained everything clearly, and the work was perfect. It's rare to find this level of professionalism these days."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-sky-600">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">James D.</div>
                    <div className="text-slate-500 text-sm">Homeowner in Naples</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience the Carter Electric Difference?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join thousands of satisfied customers across Southwest Florida. We'd love to add you to our family of happy clients.
            </p>
            <button
              onClick={openChat}
              className="inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
            >
              <span>Get Your Free Quote</span>
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer onOpenContact={openChat} />
    </main>
  );
}
