"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const expertiseProjects: {
  title: string;
  image: string;
  fallback?: string;
  span: string;
}[] = [
  {
    title: "Saif Defence Mall, DHA Peshawar",
    image: "/expertise-images/SaifDefence.png",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "La Vita, Malam Jabba",
    // try the original PNG first (if present on the server). fall back to the svg placeholder we added.
    image: "/expertise-images/MalamJabbaLavita.PNG",
    fallback: "/expertise-images/MalamJabbaLavita.svg",
    span: "lg:col-span-2",
  },
  {
    title: "Capital Heights, Islamabad",
    image: "/CapitalHeights.PNG",
    span: "lg:col-span-1",
  },
  {
    title: "AFI Tower, Peshawar",
    image: "/expertise-images/AfiTower.PNG",
    fallback: "/expertise-images/AFITower.svg",
    span: "lg:col-span-1",
  },
];

const fadeIn: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExpertiseShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // track which items failed to load their primary image and should use the fallback
  const [failedImages, setFailedImages] = React.useState<
    Record<number, boolean>
  >({});

  return (
    <section className="relative w-full bg-white py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-10"
        >
          <h2 className="font-oswald text-4xl lg:text-5xl font-bold uppercase text-black leading-tight">
            LANDMARK ARCHITECTURE & HIGH-RISE DESIGN
          </h2>
          <p className="font-inter text-lg text-gray-600 mt-2">
            Showcasing our engineering excellence in landmark construction
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 min-h-[80vh]"
        >
          {expertiseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25)"
              }}
              className={`${project.span} relative rounded-none overflow-hidden group border border-gray-100/50 
                          transition-all duration-300 ease-in-out
                          hover:border-orange-400 cursor-pointer`}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={
                    failedImages[index] && project.fallback
                      ? project.fallback
                      : project.image
                  }
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 250px"
                  unoptimized={true}
                  priority={index === 0}
                  onError={() => {
                    if (project.fallback && !failedImages[index]) {
                      setFailedImages((prev) => ({ ...prev, [index]: true }));
                    }
                  }}
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <h3 className="font-oswald text-xl text-white uppercase leading-snug">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
