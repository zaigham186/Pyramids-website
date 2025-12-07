"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building,
  Trees,
  GalleryVerticalEnd,
  Map,
  Cog,
  Home,
} from "lucide-react";

// --- CUSTOM COMPOSITE ICON ---
const ExteriorDesignIcon = (props: { strokeWidth?: number }) => (
  <div className="relative w-12 h-12">
    <Home
      className="absolute top-0 left-0 w-12 h-12 text-white"
      strokeWidth={props.strokeWidth || 1}
    />
    <Cog
      className="absolute bottom-0 right-0 w-6 h-6 bg-neutral-900 text-white"
      strokeWidth={props.strokeWidth || 1}
    />
  </div>
);

// --- DATA ARRAY ---
const specializationData = [
  {
    icon: Building,
    title: "Architecture",
    description:
      "Development of innovative and functional architectural designs.",
  },
  {
    icon: Trees,
    title: "Landscape Design",
    description:
      "Creative and sustainable site landscaping and urban planning.",
  },
  {
    icon: ExteriorDesignIcon,
    title: "Exterior Design",
    description:
      "Detailed facade planning and exterior aesthetic design with structural precision.",
  },
  {
    icon: Map,
    title: "Site Planning",
    description: "Comprehensive site work planning and service integration.",
  },
];

// --- ANIMATION VARIANTS ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- COMPONENT ---
export default function SpecializationPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative w-full bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* COLUMN 1: THE "WHY" - CLEAN & SCANNABLE */}
          <motion.div
            ref={ref}
            variants={fadeIn}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* HEADER */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-orange-500 mr-3" />
                <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
                  WELCOME TO PYRAMIDS
                </span>
              </div>

              <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-4">
                Where We Build
                <br />
                <span className="text-orange-500">Your Visions</span>
              </h2>

              {/* Thin Orange Accent Line */}
              <div className="w-20 h-0.5 bg-orange-500 mb-6" />
            </div>

            {/* CLEAN BRAND STORY - BULLET POINTS ONLY */}
            <div className="space-y-4">
              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                Established in 2006, Pyramids delivers comprehensive engineering
                and architectural services with professional excellence.
              </p>

              {/* KEY FEATURES - SCANNABLE & PREMIUM */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start font-inter text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Comprehensive project lifecycle management from concept to
                    completion
                  </span>
                </div>
                <div className="flex items-start font-inter text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Multidisciplinary expertise across architecture,
                    engineering, and planning
                  </span>
                </div>
                <div className="flex items-start font-inter text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>
                    Professional service delivery with integrity and innovative
                    solutions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: THE "WHAT" - SPECIALIZATION GRID */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {specializationData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)"
                  }}
                  className={`relative flex flex-col justify-start p-6 
                              bg-neutral-900 rounded-none 
                              border border-neutral-800
                              transition-all duration-300 ease-in-out
                              hover:border-orange-500 
                              cursor-pointer`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent
                      className="w-12 h-12 text-white mb-4"
                      strokeWidth={1}
                    />
                  </motion.div>

                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
