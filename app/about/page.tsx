"use client";

import { useState } from "react";
import { Award, Heart, Users, Lightbulb, Shield, Clock, Star, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import AnimatedSection, { AnimatedCard } from "../components/AnimatedSection";

const stats = [
  { value: "15+", label: "Years Experience" },
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
    name: "John Carter",
    role: "Founder & Master Electrician",
    description: "Licensed master electrician with over 20 years of experience. John founded Carter Electric in 2009 with a vision of providing honest, reliable electrical services to Southwest Florida families.",
  },
  {
    name: "Sarah Carter",
    role: "Operations Manager",
    description: "Sarah keeps everything running smoothly, from scheduling to customer service. Her attention to detail ensures every project exceeds expectations.",
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Electrician",
    description: "Mike brings 15 years of commercial and residential experience. He specializes in complex installations and loves solving challenging electrical puzzles.",
  },
  {
    name: "Emily Chen",
    role: "Service Coordinator",
    description: "Emily is often the first voice you'll hear when you call. She's dedicated to ensuring every customer gets the right solution for their needs.",
  },
];

const milestones = [
  { year: "2009", event: "Carter Electric founded in Sarasota" },
  { year: "2012", event: "Expanded service area to include Naples" },
  { year: "2015", event: "Achieved Master Electrician certification" },
  { year: "2018", event: "Added EV charger installation services" },
  { year: "2021", event: "Now serving all of Southwest Florida" },
  { year: "2024", event: "5,000th project completed" },
];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Your Trusted Family Electrician
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              For over 15 years, Carter Electric has been powering homes and businesses across Southwest Florida with integrity, expertise, and a personal touch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                From One Truck to Southwest Florida's Trusted Name
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Carter Electric began in 2009 when John Carter decided to bring his passion for electrical work and commitment to customer service to his hometown of Sarasota. Starting with just one truck and a toolbox, John built the business on a simple principle: treat every customer like family.
                </p>
                <p>
                  What started as a one-man operation has grown into a team of skilled electricians serving all of Southwest Florida. But despite our growth, we've never lost that family-owned feeling. Sarah joined in 2012 to handle operations, and together we've built a company that puts people first.
                </p>
                <p>
                  Today, we're proud to be the go-to electricians for thousands of families and businesses from Sarasota to Naples. Whether it's installing a single light fixture or wiring an entire apartment complex, we bring the same dedication and attention to detail to every job.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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

      {/* Team Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Meet the Carter Electric Family
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Behind every successful project is a dedicated team of professionals who truly care about their craft.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <AnimatedCard key={member.name} delay={index * 0.1}>
                <div className="bg-slate-800 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sky-400 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-300 leading-relaxed">{member.description}</p>
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
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
            >
              <span>Get Your Free Quote</span>
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </main>
  );
}