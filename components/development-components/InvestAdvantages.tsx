"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";

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

const InvestAdvantages = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const investmentAdvantages = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Higher Capital Appreciation",
      description:
        "Prime locations and premium developments ensure significant property value growth over time.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Prime Location Advantage",
      description:
        "Strategic locations in high-demand areas with excellent accessibility and surrounding infrastructure.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      title: "High Return on Investment",
      description:
        "Premium developments deliver exceptional rental yields and long-term investment returns.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Timely Project Delivery",
      description:
        "Proven track record of completing projects on schedule with uncompromised quality standards.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Professional Property Management",
      description:
        "Comprehensive management services ensuring your investment is well-maintained and profitable.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Ease of Investment",
      description:
        "Streamlined investment process with flexible payment plans and comprehensive documentation support.",
    },
  ];

  const pricePlan = [
    { floor: "Ground Floor", price: "PKR 18,000" },
    { floor: "1st Floor", price: "PKR 18,000" },
    { floor: "2nd Floor", price: "PKR 18,000" },
    { floor: "3rd Floor", price: "PKR 18,000" },
    { floor: "4th Floor", price: "PKR 18,000" },
    { floor: "5th Floor", price: "PKR 18,000" },
    { floor: "6th Floor", price: "PKR 18,000" },
    { floor: "7th Floor", price: "PKR 18,000" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white overflow-hidden py-20 lg:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0)}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              INVESTMENT BENEFITS
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-white leading-tight mb-6">
            Smart Investment
            <br />
            <span className="text-orange-500">Opportunities</span>
          </h2>

          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Invest with confidence in premium real estate developments that
            offer exceptional returns, professional management, and lasting
            value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Investment Advantages Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.2)}
          >
            <h3 className="font-oswald text-2xl uppercase text-white mb-8">
              Why Invest With Us
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {investmentAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn(0.3 + index * 0.1)}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(249, 115, 22, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start space-x-4 p-4 border border-white/10 bg-gray-900/50 hover:border-orange-500/50 transition-colors duration-300 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <div className="text-orange-500">{advantage.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-oswald text-lg uppercase text-white mb-2">
                      {advantage.title}
                    </h4>
                    <p className="font-inter text-gray-400 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Price Plan & Special Offer */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.4)}
          >
            <div className="bg-gray-900 border border-gray-800 p-8 sticky top-8">
              {/* Price Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-oswald text-2xl uppercase text-white mb-2">
                  Price Plan
                </h3>
                <p className="font-inter text-gray-400 text-sm">
                  LaVita Malam Jabba - Per Square Foot
                </p>
              </div>

              {/* Price Table */}
              <div className="space-y-3 mb-8">
                {pricePlan.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0"
                  >
                    <span className="font-inter text-gray-300">
                      {item.floor}
                    </span>
                    <span className="font-oswald text-orange-500 text-lg font-medium">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 p-6 border border-orange-500/30 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 text-orange-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="font-inter text-orange-500 font-medium text-sm uppercase tracking-wider">
                      Special Offer
                    </span>
                  </div>
                  <h4 className="font-oswald text-xl text-white mb-2">
                    GET 10% DISCOUNT
                  </h4>
                  <p className="font-inter text-gray-300 text-sm">
                    On 100% Payment
                  </p>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="/contact"
                whileHover={{ 
                  scale: 1.03, 
                  y: -2,
                  boxShadow: "0 15px 30px rgba(249, 115, 22, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="block w-full bg-orange-500 text-black font-bold uppercase py-4 text-center font-inter text-sm border-2 border-orange-500 hover:bg-white transition-colors duration-300"
              >
                Schedule Investment Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestAdvantages;
