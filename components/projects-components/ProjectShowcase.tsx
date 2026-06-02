"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/projectData";

// Individual Project Card Component
interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    stat: string;
    status: string;
    location: string;
    area: string;
    year: string;
    category: string;
    features: string[];
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  // Filter out features that repeat the stat
  const uniqueFeatures = project.features.filter(
    (feature) =>
      !feature.toLowerCase().includes(project.stat.toLowerCase().split(" ")[0])
  );

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.3) }}
        className={`grid grid-cols-1 lg:grid-cols-2 min-h-[550px] bg-gray-50 rounded-3xl overflow-hidden ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        {/* Project Image */}
        <div
          className={`relative h-64 lg:h-full ${
            isEven ? "lg:col-start-1" : "lg:col-start-2"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
        </div>

        {/* Project Details */}
        <div
          className={`p-8 md:p-12 flex flex-col justify-center ${
            isEven ? "lg:col-start-2" : "lg:col-start-1"
          }`}
        >
          {/* Project Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-oswald text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-4"
          >
            {project.title}
          </motion.h3>

          {/* Project Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-inter text-gray-600 text-lg leading-relaxed mb-8"
          >
            {project.description}
          </motion.p>

          {/* Specifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {uniqueFeatures.slice(0, 4).map((feature, idx) => (
                <div
                  key={idx}
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

      {/* Divider between projects (except after last project) */}
      {index < projects.length - 1 && (
        <div className="my-16 border-t border-gray-300"></div>
      )}
    </>
  );
}

// Main ProjectShowcase Component
export default function ProjectShowcase() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        {/* All Projects - Stacked Vertically */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
