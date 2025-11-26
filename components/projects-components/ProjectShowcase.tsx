"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/projectData";

export default function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  // Filter out features that repeat the stat
  const uniqueFeatures = project.features.filter(
    (feature) =>
      !feature.toLowerCase().includes(project.stat.toLowerCase().split(" ")[0])
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={inView ? { width: 16 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-4 bg-orange-500 mr-3" 
            />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase"
            >
              FEATURED PROJECTS
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-oswald text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-4"
          >
            OUR PORTFOLIO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-inter text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our landmark projects that define architectural excellence
            and engineering innovation
          </motion.p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevProject}
            aria-label="Previous project"
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-orange-500 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          >
            ←
          </motion.button>
          <motion.button
            onClick={nextProject}
            aria-label="Next project"
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-orange-500 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          >
            →
          </motion.button>

          {/* Project Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]"
            >
              {/* Project Image */}
              <div className="relative h-64 lg:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Project Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase">
                    {project.stat}
                  </span>
                  <span
                    className={`text-sm font-semibold px-4 py-2 rounded-full uppercase ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : project.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </motion.div>

                {/* Project Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-oswald text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-4"
                >
                  {project.title}
                </motion.h3>

                {/* Project Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-inter text-gray-600 text-lg leading-relaxed mb-8"
                >
                  {project.description}
                </motion.p>

                {/* Specifications Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <div>
                    <div className="font-inter text-gray-500 text-sm uppercase tracking-wide">
                      Location
                    </div>
                    <div className="font-inter font-semibold text-gray-900">
                      {project.location}
                    </div>
                  </div>
                  <div>
                    <div className="font-inter text-gray-500 text-sm uppercase tracking-wide">
                      Area
                    </div>
                    <div className="font-inter font-semibold text-gray-900">
                      {project.area}
                    </div>
                  </div>
                  <div>
                    <div className="font-inter text-gray-500 text-sm uppercase tracking-wide">
                      Year
                    </div>
                    <div className="font-inter font-semibold text-gray-900">
                      {project.year}
                    </div>
                  </div>
                  <div>
                    <div className="font-inter text-gray-500 text-sm uppercase tracking-wide">
                      Category
                    </div>
                    <div className="font-inter font-semibold text-gray-900">
                      {project.category}
                    </div>
                  </div>
                </motion.div>

                {/* Key Features - NOW WITH UNIQUE CONTENT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {uniqueFeatures.slice(0, 4).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center font-inter text-gray-700"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CLEAN PROJECT COUNTER (No dots - more premium) */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-inter">
            {currentProject + 1} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
}
