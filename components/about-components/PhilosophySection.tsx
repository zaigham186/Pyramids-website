"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function PhilosophySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      number: "01.",
      image: "/efficiencyExpertise.PNG",
      title: "EFFICIENCY",
      description:
        "We leverage proven technical and management skills, staying current with the latest developments to ensure your project runs smoothly, on time, and on budget.",
    },
    {
      number: "02.",
      image: "/commitmentExpertise.PNG",
      title: "COMMITMENT",
      description:
        "We are fully committed to our clients' success. Our hardworking team is dedicated to seeing your vision through from the first concept to the final, completed structure.",
    },
    {
      number: "03.",
      image: "/honestyExpertise.PNG",
      title: "HONESTY",
      description:
        "Our business is built on a foundation of integrity. We operate professionally and honestly, ensuring total transparency and building lasting trust with all our partners.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Headline */}
            <div>
              {/* OUR PHILOSOPHY label with square */}
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-orange-500 mr-3" />
                <span className="text-orange-500 font-medium text-sm tracking-widest uppercase font-inter">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight">
                PRINCIPLES THAT
                <br />
                GUIDE EVERY PROJECT
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="flex items-start">
              <p className="font-inter text-gray-700 leading-relaxed max-w-md">
                Our philosophy is built on three core pillars. This foundation
                of efficiency, commitment, and honesty guides every decision we
                make, from initial design to final execution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Grid Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              {/* Number */}
              <span className="font-oswald text-7xl font-bold text-gray-200 mb-4 block">
                {pillar.number}
              </span>

              {/* Image */}
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6 relative h-64 overflow-hidden rounded-lg cursor-pointer group"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Orange overlay on hover */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-500" />
              </motion.div>

              {/* Sub-Heading */}
              <h3 className="font-oswald text-xl font-medium uppercase tracking-wider text-gray-900 mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
