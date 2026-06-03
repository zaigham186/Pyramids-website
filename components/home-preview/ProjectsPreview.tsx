"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function ProjectsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const featuredProjects = [
    {
      name: "Saif Mall & Residency",
      location: "Peshawar",
      image: "/expertise-images/saifMall.png",
      aspect: "850/545",
    },
    {
      name: "Capital Grand Heights",
      location: "Islamabad",
      image: "/DiamondMall-2.PNG",
      aspect: "850/545",
    },
    {
      name: "Diamond mall",
      location: "Peshawar",
      image: "/CapitalHeights.PNG",
      aspect: "850/545",
    },
     {
      name: "Burj Rabbani",
      location: "Peshawar",
      image: "/expertise-images/burj-rabbani.jpg",
      aspect: "850/545",
    },
     {
      name: "LaVita",
      location:"Malamjabba",
      image: "/expertise-images/lavita.png",
      aspect: "850/545",
    },
     {
      name: "Rabbani Medical Complex",
      location: "Peshawar",
      image: "/expertise-images/rabbani-medical.png",
      aspect: "850/545",
    },
  ];

  // Optimized auto-play with animation protection
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length, isAnimating]);

  const navigateProject = useCallback(
    (newDirection: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setDirection(newDirection);
      setCurrentProject((prev) => {
        const newIndex =
          (prev + newDirection + featuredProjects.length) %
          featuredProjects.length;
        return newIndex;
      });

      setTimeout(() => setIsAnimating(false), 500);
    },
    [featuredProjects.length, isAnimating]
  );

  const nextProject = useCallback(() => navigateProject(1), [navigateProject]);
  const prevProject = useCallback(() => navigateProject(-1), [navigateProject]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section id="projects" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Layout */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
        >
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
                <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-heading whitespace-nowrap">
                  Featured Projects
                </span>
                <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight font-heading">
                Engineering <span className="text-orange-500">Excellence</span>{" "}
                in Action
              </h2>

              <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Discover our landmark architectural projects that redefine
                Pakistan's skyline with structural precision and innovative
                design.
              </p>
            </div>

            {/* CTA Button - DESKTOP ONLY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-orange-500 hover:text-black transition-all duration-300 border-2 border-black font-heading tracking-wide"
                >
                  Explore Full Portfolio
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - PREMIUM IMAGE CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div
              className="relative bg-black rounded-none border-2 border-gray-800 overflow-hidden group hover:border-orange-500 transition-all duration-500 h-[300px] sm:h-[350px] lg:h-[400px]"
              role="region"
              aria-label="Featured projects carousel"
            >
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={currentProject}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute inset-0"
                >
                  {/* Project Image with PREMIUM ENHANCEMENTS */}
                  <div
                    className="relative overflow-hidden w-full h-full"
                    style={{
                      aspectRatio: featuredProjects[currentProject].aspect,
                    }}
                  >
                    {isLoading && (
                      <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* PREMIUM IMAGE - REMOVED DULL EFFECTS */}
                    <Image
                      src={featuredProjects[currentProject].image}
                      alt={featuredProjects[currentProject].name}
                      fill
                      className="object-cover brightness-105 saturate-110 contrast-105" // ENHANCED: Added brightness, saturation, contrast
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={currentProject === 0}
                      quality={90} // ENHANCED: Better quality
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                    />

                    {/* LIGHTER GRADIENT OVERLAY - Reduced opacity for brighter images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Clean Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                      <div className="mb-2">
                        <h3 className="text-xl lg:text-3xl font-bold mb-2 lg:mb-3 leading-tight font-heading drop-shadow-lg">
                          {featuredProjects[currentProject].name}
                        </h3>
                        <p className="text-gray-200 text-sm lg:text-lg flex items-center gap-2 font-sans drop-shadow-md">
                          <span className="w-2 h-2 bg-orange-500 rounded-none"></span>
                          {featuredProjects[currentProject].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Premium Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 lg:mt-6">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isAnimating}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-black text-white rounded-none border-2 border-black hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} className="lg:w-5 lg:h-5" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2 lg:gap-3">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setDirection(index > currentProject ? 1 : -1);
                        setCurrentProject(index);
                      }
                    }}
                    disabled={isAnimating}
                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-none transition-all duration-300 ${
                      index === currentProject
                        ? "bg-orange-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    } ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}
                    aria-label={`View project ${index + 1}`}
                    aria-current={index === currentProject ? "true" : "false"}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isAnimating}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-black text-white rounded-none border-2 border-black hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next project"
              >
                <ChevronRight size={18} className="lg:w-5 lg:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button - MOBILE ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:hidden mt-8 text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-orange-500 hover:text-black transition-all duration-300 border-2 border-black font-heading tracking-wide w-full justify-center"
            >
              Explore Full Portfolio
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
