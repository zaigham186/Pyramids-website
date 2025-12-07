"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define TypeScript interfaces
interface ClientLogo {
  name: string;
  logo: string;
  type: "horizontal" | "vertical";
  featured?: boolean;
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

// Move testimonials array to the top, before any hooks that use it
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with Pyramids has been a seamless experience. Their professionalism, attention to detail, and commitment to quality set them apart in every project.",
    author: "Saif Associates",
    company: "Peshawar",
  },
  {
    id: 2,
    quote:
      "Pyramids has been a trusted partner throughout our project. Their expertise and customer-focused approach made a real difference.",
    author: "Danish Red Cross",
    company: "International",
  },
  {
    id: 3,
    quote:
      "Pyramids consistently deliver outstanding service with reliability and integrity. Their team is knowledgeable, responsive, and a pleasure to work with.",
    author: "German Red Cross",
    company: "International",
  },
  {
    id: 4,
    quote:
      "Our experience with Pyramids has been exceptional. Their dedication to excellence and timely delivery exceeded our expectations.",
    author: "Canadian Red Cross",
    company: "International",
  },
  {
    id: 5,
    quote:
      "We truly value our partnership with Pyramids. Their professionalism and commitment to delivering high-quality work have been remarkable.",
    author: "Reach Out to Asia",
    company: "International",
  },
];

export default function ClientsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const clientLogos = [
    {
      name: "Danish Red Cross",
      logo: "/clients/danish.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "Saif Associates",
      logo: "/clients/saifLogo.png",
      type: "vertical",
      featured: true,
    },
    {
      name: "Rabbani Associates",
      logo: "/clients/rabani-logo.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "Canadian Red Cross",
      logo: "/clients/canadian-logo.png",
      type: "horizontal",
      featured: false,
    },
    {
      name: "German Red Cross",
      logo: "/clients/germanLogo.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "DHA Peshawar",
      logo: "/clients/Dha-logo.png",
      type: "vertical",
      featured: true,
    },
    {
      name: "Reachout to Asia",
      logo: "/clients/asia-logo.png",
      type: "horizontal",
      featured: false,
    },
  ];

  // Filter featured clients and duplicate for seamless loop
  const featuredClients = clientLogos.filter((client) => client.featured);
  const duplicatedLogos = [
    ...featuredClients,
    ...featuredClients,
    ...featuredClients,
  ];

  const nextTestimonial = () => {
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
    setCurrentTestimonial(index);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="clients"
      className="py-16 lg:py-24 bg-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SINGLE PREMIUM HEADER - FOR BOTH LOGOS & TESTIMONIALS */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
            <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-heading">
              Trusted Partnerships
            </span>
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-heading mb-6">
            Our <span className="text-orange-500">Prestigious</span> Clients
          </h2>

          {/* Thin Orange Accent Line */}
          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Trusted by leading organizations and institutions across Pakistan
            and internationally.
          </p>
        </motion.div>

        {/* INFINITE LOGO MARQUEE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Black gradient overlays */}
          <div className="absolute left-0 top-0 w-20 lg:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 lg:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

          {/* Marquee Container */}
          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee-fast">
              {duplicatedLogos.map((client, index) => (
                <div key={index} className="flex-shrink-0 group mx-4 lg:mx-6">
                  <div
                    className={`
                    flex items-center justify-center p-4 lg:p-6 
                    bg-neutral-900 border border-neutral-800 rounded-none
                    transition-all duration-500 ease-out
                    hover:border-orange-500 hover:bg-neutral-800
                    group-hover:shadow-lg group-hover:shadow-orange-500/20
                    ${isMobile ? "w-28 h-16" : "w-40 h-20"}
                  `}
                  >
                    {/* Logo Container - Centered */}
                    <div
                      className={`relative ${
                        isMobile ? "w-20 h-10" : "w-32 h-12"
                      } ${isMobile ? "grayscale-0" : "grayscale"} ${
                        isMobile ? "" : "group-hover:grayscale-0"
                      } transition-all duration-500`}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                        sizes="(max-width: 768px) 80px, 120px"
                        quality={100}
                        priority={index < 4}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BREATHING SPACE - CRITICAL FOR PREMIUM FEEL */}
        <div className="h-16 lg:h-20"></div>

        {/* TESTIMONIAL CAROUSEL - FINAL PERFECT VERSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* EXTERNAL NAVIGATION ARROWS - POSITIONED OUTSIDE CARD */}
          <motion.button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-none flex items-center justify-center transition-colors duration-300 shadow-lg hidden lg:flex"
          >
            <span className="text-white text-lg font-bold">←</span>
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-none flex items-center justify-center transition-colors duration-300 shadow-lg hidden lg:flex"
          >
            <span className="text-white text-lg font-bold">→</span>
          </motion.button>

          {/* TESTIMONIAL CARD - WITH GLASS EFFECT & CIRCULAR QUOTE */}
          <div
            className="bg-neutral-900 border border-white/10 rounded-none p-8 lg:p-12 relative overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)} // Pause on hover
            onMouseLeave={() => setIsAutoPlaying(true)} // Resume when not hovering
          >
            {/* Testimonial Content */}
            <div className="relative z-10">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote - Clean professional typography */}
                <blockquote className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-sans">
                  {testimonials[currentTestimonial].quote}
                </blockquote>

                {/* Author - Professional styling */}
                <div className="text-center border-t border-white/10 pt-6">
                  <div className="text-orange-500 font-semibold text-lg font-heading">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-400 text-sm font-sans uppercase tracking-wide mt-1">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* MOBILE NAVIGATION ARROWS */}
            <div className="flex justify-center space-x-4 mt-6 lg:hidden">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-none flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white font-bold">←</span>
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-none flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white font-bold">→</span>
              </button>
            </div>

            {/* CLEAN DOTS INDICATOR - MINIMAL NAVIGATION */}
            <div className="flex justify-center space-x-3 mt-8 lg:mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-orange-500 scale-110"
                      : "bg-neutral-600 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
