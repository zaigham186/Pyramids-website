"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Variants } from "framer-motion";

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

const HeroDevelopment = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white h-screen flex items-center overflow-hidden"
    >
      {/* LAYER 1: BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/expertise-images/MalamJabbaLavita.PNG"
          alt="Premium Real Estate Developments"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* LAYER 2: FOREGROUND CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-36 w-full">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Premium Accent Label */}
          <motion.div
            className="flex items-center mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 mr-2 sm:mr-3" />
            <span className="font-inter text-orange-500 font-medium text-xs sm:text-sm tracking-widest uppercase">
              Developments
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium uppercase leading-tight tracking-tight mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Invest in
            <br />
            Premium
            <br />
            Properties
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="font-inter text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            Explore our exclusive residential and commercial developments. From Malam Jabba to Islamabad, we create spaces that combine luxury living with smart investment potential.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroDevelopment;
