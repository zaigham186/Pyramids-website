"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Variants } from "framer-motion";
import { useState, useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ExpertiseHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageError, setImageError] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black text-white h-screen flex items-center overflow-hidden"
    >
      {/* LAYER 1: BACKGROUND IMAGE WITH FALLBACK */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Try to load the schematic image */}
        {!imageError ? (
          <Image
            src="/expertise-images/hero-Expertise.png"
            alt="Architectural Engineering Schematic"
            fill
            priority
            quality={100}
            className="object-cover object-center brightness-110 contrast-105"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback: Pure generative background (like original design)
          <>
            {/* Faint Architectural Grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, transparent 95%, #f97316 95%),
                  linear-gradient(0deg, transparent 95%, #f97316 95%)
                `,
                backgroundSize: "40px 40px",
                backgroundPosition: "center center",
              }}
            />

            {/* Additional Engineering Grid for depth */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, transparent 99%, #f97316 99%),
                  linear-gradient(0deg, transparent 99%, #f97316 99%)
                `,
                backgroundSize: "20px 20px",
                backgroundPosition: "center center",
              }}
            />

            {/* Blueprint-style Elements */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border border-orange-500"></div>
              <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full border border-orange-500"></div>
              <div className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full border border-orange-500"></div>
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full border border-orange-500"></div>
            </div>
          </>
        )}

        {/* LIGHT GRADIENT OVERLAY - KEEPING IMAGE BRIGHT */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        {/* Subtle vignette for extra depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </motion.div>

      {/* LAYER 2: FOREGROUND CONTENT - POSITIONED 1-1.5 INCHES LOWER */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* ADJUSTED POSITION: Added mt-16 (4rem) to move content down ~1.5 inches */}
        <motion.div
          ref={ref}
          className="max-w-2xl mt-8 sm:mt-12 md:mt-16 lg:mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Orange Accent Label */}
          <motion.div
            className="flex items-center mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 mr-2 sm:mr-3" />
            <span className="font-inter text-orange-500 font-medium text-xs sm:text-sm tracking-widest uppercase">
              Our Expertise
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium uppercase leading-tight tracking-tight mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Full-Service
            <br />
            Design &
            <br />
            Engineering
          </motion.h1>

          {/* Brand Description Text */}
          <motion.p
            className="font-inter text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            From structural engineering to architectural design, we handle every aspect of your project. One team, unified vision, seamless execution—that's how we deliver results that last.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR - FOR STICKY HERO PATTERN */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden md:block absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white text-xs font-inter tracking-widest uppercase opacity-70">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 md:h-3 bg-white rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExpertiseHero;
