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
          className="object-cover object-center scale-105"
        />

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        {/* Animated Grid Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 107, 53, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 107, 53, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              animation: 'gridPulse 8s ease-in-out infinite'
            }}
          />
        </div>

        {/* Luxury Glow Effect */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      {/* LAYER 2: FOREGROUND CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Premium Accent Label */}
          <motion.div
            className="flex items-center mb-8 group"
            variants={itemVariants}
          >
            <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-orange-600 mr-4 group-hover:h-16 transition-all duration-300" />
            <div>
              <span className="font-inter text-orange-400 font-semibold text-xs tracking-[0.3em] uppercase block mb-1">
                PREMIUM OPPORTUNITIES
              </span>
              <div className="h-px w-32 bg-gradient-to-r from-orange-500/50 to-transparent" />
            </div>
          </motion.div>

          {/* Main Headline - Enhanced Typography */}
          <motion.h1
            className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-8"
            variants={itemVariants}
          >
            <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Premium
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Real Estate
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />
            <p className="font-inter text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed pl-6">
              Exclusive investment opportunities in{" "}
              <span className="text-white font-semibold">luxury developments</span>{" "}
              that redefine premium living and deliver{" "}
              <span className="text-orange-400 font-semibold">exceptional returns</span>.
            </p>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="mt-12 flex items-center gap-4"
            variants={itemVariants}
          >
            <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
            <div className="w-2 h-2 bg-orange-500 rotate-45" />
            <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};

export default HeroDevelopment;
