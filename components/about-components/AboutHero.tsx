"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Variants } from "framer-motion";
import { useRef } from "react";

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

const AboutHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
      // CHANGED: Replaced min-h-[] with h-screen to fill the sticky wrapper
    >
      {/* LAYER 1: BACKGROUND IMAGE */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/expertise-images/saifMall.png"
          alt="Pyramids Architectural Project - Saif Mall & Residency"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />

        {/* ASYMMETRICAL GRADIENT OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />

        {/* Subtle vignette for extra depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </motion.div>

      {/* LAYER 2: FOREGROUND CONTENT */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full"
      >
        <motion.div
          ref={ref}
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Orange Accent Label */}
          <motion.div
            className="flex items-center mb-6"
            variants={itemVariants}
          >
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              ABOUT PYRAMIDS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-oswald text-5xl md:text-6xl lg:text-7xl font-medium uppercase leading-tight tracking-tight"
            variants={itemVariants}
          >
            Dynamic,
            <br />
            Multidimensional
            <br />& Proven
          </motion.h1>

          {/* Brand Description Text */}
          <motion.p
            className="font-inter text-lg lg:text-xl text-gray-200 mt-10 max-w-md leading-relaxed"
            variants={itemVariants}
          >
            Established in 2006, Pyramids is a dynamic, fast-growing
            organization providing multidimensional engineering and
            architectural services, from preliminary planning to detailed
            execution.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
