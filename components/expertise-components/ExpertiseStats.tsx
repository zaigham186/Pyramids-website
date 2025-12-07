"use client";

import { motion, useInView as useFramerInView } from "framer-motion";
import { useRef, useEffect } from "react";

const statsData = [
  {
    value: "50+",
    label: "Projects Completed",
    description: "Successfully delivered architectural and engineering marvels",
  },
  {
    value: "20+",
    label: "Years Experience",
    description:
      "Established track record in engineering excellence since 2003",
  },
  {
    value: "8+",
    label: "Major Clients",
    description: "Trusted by leading organizations and developers",
  },
  {
    value: "145MW",
    label: "Hydro Capacity",
    description: "Renewable energy expertise in large-scale power projects",
  },
];

// --- FIXED COUNTER COMPONENT ---
const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  // This creates a separate InView trigger just for this number
  const isInView = useFramerInView(ref, { once: true, margin: "-50px" });

  // Extract number and suffix
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView && ref.current) {
      // Animate from 0 to the number
      const controls = {
        value: 0,
      };

      // We manually handle the animation frame to ensure it writes to the DOM
      const duration = 2000; // 2 seconds
      const start = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutExpo) for premium feel
        const ease = 1 - Math.pow(2, -10 * progress);

        const current = Math.floor(ease * numericValue);

        if (ref.current) {
          ref.current.textContent = current.toString();
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure it ends on the exact number
          if (ref.current) ref.current.textContent = numericValue.toString();
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  return (
    <span className="inline-flex items-baseline tabular-nums tracking-tight">
      {/* The ref span gets updated directly by the function above */}
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
};

const ExpertiseStats = () => {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Premium wave accent at top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-center cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:border-orange-300"
            >
              {/* Icon-like accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500/20 rounded-full group-hover:scale-150 transition-transform duration-500" />

              {/* Main stat value - NOW ANIMATED */}
              <div className="font-oswald text-5xl lg:text-6xl font-bold text-orange-500 mb-3">
                <AnimatedCounter value={stat.value} />
              </div>

              {/* Stat label */}
              <h3 className="font-oswald text-xl lg:text-2xl font-medium text-gray-900 uppercase mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="font-inter text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent group-hover:via-orange-500/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium wave accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
};

export default ExpertiseStats;
