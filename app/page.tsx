"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Lightbulb, 
  Zap, 
  Car, 
  Wrench, 
  Building2, 
  Home as HomeIcon,
  Shield,
  Clock,
  DollarSign,
  Users,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import AnimatedSection, { AnimatedCard, StaggerContainer, StaggerItem } from "./components/AnimatedSection";

const services = [
  {
    icon: Lightbulb,
    title: "Indoor Lighting",
    description: "Transform your home with custom indoor lighting solutions. From recessed lighting to statement fixtures, we bring your vision to life.",
    color: "from-sky-400 to-sky-500",
    image: "/images/service-indoor.jpg",
  },
  {
    icon: HomeIcon,
    title: "Outdoor Lighting",
    description: "Enhance curb appeal and security with professional landscape lighting, pathway lights, and architectural illumination.",
    color: "from-sky-400 to-sky-500",
    image: "/images/service-outdoor.jpg",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: "Future-proof your home with professional EV charger installation. Compatible with all major electric vehicle brands.",
    color: "from-sky-400 to-sky-500",
    image: "/images/service-ev.jpg",
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Fast, reliable troubleshooting and repairs for any electrical issue. 24/7 emergency service available for urgent problems.",
    color: "from-sky-400 to-sky-500",
    image: "/images/service-repairs.jpg",
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    description: "Modernize your electrical system with panel upgrades and rewiring. Ensure your home can handle today's power demands.",
    color: "from-sky-400 to-sky-500",
    image: "/images/service-panel.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Specialized electrical services for condos, apartments, and commercial properties. Bulk pricing and maintenance plans available.",
    color: "from-sky-400 to-sky-500",
    image: "/images/service-commercial.jpg",
  },
];

const serviceAreas = [
  { name: "Sarasota", slug: "sarasota", description: "Historic charm meets modern electrical solutions" },
  { name: "Venice", slug: "venice", description: "Beautiful beach town electrical services" },
  { name: "Englewood", slug: "englewood", description: "Quiet coastal community expertise" },
  { name: "Port Charlotte", slug: "port-charlotte", description: "Growing harbor area specialists" },
  { name: "Punta Gorda", slug: "punta-gorda", description: "Historic waterfront district services" },
  { name: "Cape Coral", slug: "cape-coral", description: "Canal city electrical experts" },
  { name: "Fort Myers", slug: "fort-myers", description: "City of palms electrical solutions" },
  { name: "Bonita Springs", slug: "bonita-springs", description: "Gateway to the gulf services" },
  { name: "Naples", slug: "naples", description: "Luxury home electrical specialists" },
  { name: "Marco Island", slug: "marco-island", description: "Island paradise electrical services" },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full state licensing and comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day service available. Emergency repairs 24/7. We respect your time.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Transparent, upfront quotes with no hidden fees. Competitive rates for quality work.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Local family business treating every customer like family. 15+ years of trusted service.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Sarasota",
    text: "Carter Electric installed our outdoor lighting and it completely transformed our backyard. Professional, punctual, and the work is flawless!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Naples",
    text: "Best EV charger installation experience. They handled everything from permits to installation. Highly recommend for any electrical work!",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Fort Myers",
    text: "Our condo association has used Carter Electric for years. Reliable, responsive, and always fairly priced. True professionals.",
    rating: 5,
  },
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openChat = () => {
    const lcw = (window as any).lcw;
    if (lcw?.open) lcw.open();
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const currentCity = serviceAreas[currentAreaIndex].name;
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentCity.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentCity.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentAreaIndex((prev) => (prev + 1) % serviceAreas.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentAreaIndex]);

  return (
    <main className="min-h-screen">
      <Navbar onOpenContact={openChat} />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Centered Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Icon */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 pt-8 sm:pt-0">
              <Image
                src="/images/logo-icon.png"
                alt="Carter Electric"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              Southwest Florida's Trusted
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">Electrical Contractor</span>
            </h1>
            
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-10 max-w-4xl mx-auto text-center flex flex-wrap justify-center items-center gap-x-1"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
            >
              <span>Family-owned electrical contractor operating in </span>
              <span className="text-sky-300 min-w-28">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openChat}
                className="inline-flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:shadow-2xl hover:shadow-sky-500/40 drop-shadow-lg"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <a
                href="tel:+19413366811"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-slate-900 px-10 py-5 rounded-full font-bold text-xl transition-all drop-shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span>+1 941-336-6811</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 justify-center mt-10">
              <div 
                className="flex items-center space-x-2 text-white font-medium text-base"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
              >
                <Shield className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div 
                className="flex items-center space-x-2 text-white font-medium text-base"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
              >
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency</span>
              </div>
              <div 
                className="flex items-center space-x-2 text-white font-medium text-base"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
              >
                <MapPin className="w-5 h-5" />
                <span>Sarasota to Naples</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fade to White */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid (Bento Box) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Complete Electrical Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From simple repairs to complex installations, we handle all your electrical needs with precision and care.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <div 
                  className="bento-card service-card relative rounded-2xl overflow-hidden h-full min-h-64 group"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/60 transition-colors duration-300" />
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className={`card-icon w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center mb-6 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/80 leading-relaxed flex-grow">{service.description}</p>
                    <button
                      onClick={() => openChat}
                      className="mt-6 inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              The Carter Electric Difference
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              For over 15 years, families and businesses across Southwest Florida have trusted us with their electrical needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Service Areas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Serving All of Southwest Florida
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From Sarasota to Naples, we're your local electrical experts. Click on your area to learn more.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <StaggerItem key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group block bg-slate-50 hover:bg-sky-50 rounded-xl p-6 transition-all hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-600">
                    {area.description}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Our Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Quality Electrical Work
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              See examples of our professional electrical installations and repairs throughout Southwest Florida.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/images/IMG_9500.jpeg',
              '/images/IMG_9501.jpeg',
              '/images/IMG_9503.jpeg',
              '/images/IMG_9504.JPG',
              '/images/IMG_9505.JPG',
              '/images/IMG_9507.jpeg',
              '/images/IMG_9509.JPG',
              '/images/IMG_9510.JPG',
            ].map((img, index) => (
              <StaggerItem key={index}>
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image
                    src={img}
                    alt={`Electrical work example ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what homeowners and businesses across Southwest Florida have to say.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={testimonial.name} delay={index * 0.1}>
                <div className="bg-slate-800 rounded-2xl p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sky-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Power Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your electrical project. Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openChat}
                className="inline-flex items-center justify-center space-x-2 bg-white text-sky-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+19413366811"
                className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+1 941-336-6811</span>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Free Estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer onOpenContact={() => openChat} />
    </main>
  );
}