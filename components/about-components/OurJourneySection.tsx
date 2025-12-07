"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

/*
  SPECIFICATION FOR: OurJourneySection (V11 - The "Squeeze" Fix)
  Fixes the timeline layout squeeze by adjusting internal spacing
  while maintaining the premium gray data zone design.
*/

// --- DATA ---
const statistics = [
  { value: "300+", label: "Projects Completed" },
  { value: "15+", label: "Skilled Professionals" },
  { value: "6+", label: "Sectors Served" },
];

const timelineEvents = [
  {
    year: "2006",
    title: "FOUNDATION & ACCREDITATION",
    description:
      "Pyramids is established and registered with the Pakistan Engineering Council (PEC).",
  },
  {
    year: "2016",
    title: "DIVERSIFIED PORTFOLIO",
    description:
      "Expanded into major NGO projects with international partners like the Danish and Canadian Red Cross.",
  },
  {
    year: "2020",
    title: "LANDMARK HIGH-RISES",
    description:
      "Began designing and supervising landmark projects like Saif Mall & Capital Grand Heights.",
  },
  {
    year: "TODAY",
    title: "ENGINEERING THE FUTURE",
    description:
      "Executing gigantic, turn-key projects and expanding our multidisciplinary expertise.",
  },
];

// Fixed Animation variants with proper typing
const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const OurJourneySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    if (inView) {
      const timers = statistics.map((stat, index) => {
        const target = parseInt(stat.value.replace(/\D/g, ''));
        const duration = 2000; // 2 seconds for smooth animation
        const steps = 60; // 60fps
        const increment = target / steps;
        let current = 0;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          current = Math.min(target, Math.floor(increment * step));
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
          if (step >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
        return timer;
      });
      return () => timers.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        {/* 40/60 "Magazine" Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT COLUMN (40%): Headline & Intro Text */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0)}
          >
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-orange-500 mr-3" />
              <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
                OUR JOURNEY
              </span>
            </div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight mb-6">
              OVER 25 YEARS OF
              <br />
              ENGINEERING EXCELLENCE
            </h2>
            <p className="font-inter text-base text-gray-700 leading-relaxed">
              Our legacy is defined by over two decades of unwavering
              dedication, technical prowess, and a relentless pursuit of
              engineering perfection. From initial concept to project
              completion, we consistently deliver solutions that stand the test
              of time.
            </p>
          </motion.div>

          {/* RIGHT COLUMN (60%): Data Zone with adjusted spacing */}
          {/* FIX 1: Reduced padding from p-8 lg:p-12 to p-6 lg:p-8 */}
          <div className="lg:col-span-3 bg-gray-50 rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
            {/* Stats Block */}
            <motion.div
              className="grid grid-cols-3 gap-8 mb-16"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.2)}
            >
              {statistics.map((stat, index) => (
                <div key={stat.label} className="text-left">
                  <span className="font-oswald text-4xl lg:text-5xl font-medium text-orange-500">
                    {counts[index]}{stat.value.replace(/\d+/g, '')}
                  </span>
                  <p className="font-inter text-xs uppercase text-gray-600 tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Premium Timeline */}
            <div className="relative w-full">
              {/* Horizontal Line */}
              <div className="absolute left-0 right-0 top-[3.2rem] h-0.5 bg-gray-300 hidden md:block" />

              {/* Timeline Items Grid */}
              {/* FIX 2: Reduced gap-x from gap-x-8 to gap-x-4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center group"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeIn(0.4 + index * 0.1)}
                  >
                    {/* Year (Above the line) */}
                    <span className="font-oswald text-xl font-medium text-gray-400">
                      {event.year}
                    </span>

                    {/* Dot (On the line) */}
                    <div className="relative z-10 w-5 h-5 bg-orange-500 rounded-full my-3 border-4 border-white transition-transform duration-300 group-hover:scale-110" />

                    {/* Premium Cards */}
                    {/* FIX 3: Reduced padding from p-6 to p-4 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md transition-all duration-300 w-full hover:shadow-lg hover:-translate-y-1">
                      <h3 className="font-oswald text-lg font-medium uppercase text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="font-inter text-sm text-gray-700">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
