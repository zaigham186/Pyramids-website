// components/about-components/SheltonPartnershipSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";
import Image from "next/image";

const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const SheltonPartnershipSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* Premium Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0)}
          >
            {/* Badge */}
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-orange-500 mr-3" />
              <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
                PYRAMIDS DEVELOPERS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-white leading-tight mb-6">
              Crafting
              <br />
              <span className="text-orange-500">Luxury Destinations</span>
            </h2>

            {/* Project Teaser */}
            <div className="mb-8">
              <h3 className="font-oswald text-2xl text-white mb-3">
                LaVita Malam Jabba
              </h3>
              <p className="font-inter text-lg text-gray-300 leading-relaxed mb-4">
                In partnership with <strong>Shelton Group</strong>, we're
                bringing luxury hotel-style living to Swat's premier mountain
                destination. Fully serviced apartments with world-class
                amenities.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>🏔️ Mountain Views</span>
                <span>⭐ 5-Star Amenities</span>
                <span>💰 Investment Ready</span>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.3)}
              className="flex items-center space-x-4"
            >
              <motion.a
                href="/developments"
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-orange-500 text-black font-bold uppercase px-8 py-4 rounded-lg font-inter text-sm border-2 border-orange-500 hover:bg-white transition-colors duration-300 inline-flex items-center space-x-3"
              >
                <span>Explore Developments</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>

              {/* Partnership Badge */}
              <div className="hidden sm:flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm" />
                </div>
                <span className="font-inter text-xs text-gray-300">
                  Shelton Group
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Premium Visual */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.4)}
          >
            {/* Actual LaVita Image */}
            <Image
              src="/expertise-images/LavitaMalamJabba.png"
              alt="LaVita Malam Jabba - Luxury Hotel Apartments in Swat"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

            {/* Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="font-oswald text-xl text-white mb-1">
                  LaVita Malam Jabba
                </h3>
                <p className="font-inter text-gray-300 text-sm">
                  Luxury Hotel Suites • Swat
                </p>
              </div>
            </div>

            {/* Interactive Hover Effect */}
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SheltonPartnershipSection;
