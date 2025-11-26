"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced brightness and parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/expertise-images/AfiTower.PNG")',
          y,
        }}
      />

      {/* Reduced overlay opacity from 60% to 40% */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Additional brightness/contrast filter on the image */}
      <div className="absolute inset-0 brightness-110 contrast-105" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              OUR PROJECTS
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6"
          >
            A LEGACY OF
            <br />
            <span className="text-orange-500">LANDMARKS</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our portfolio of architectural and engineering marvels. This
            is the proof of our commitment to excellence.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-sm font-inter"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>
    </section>
  );
}
