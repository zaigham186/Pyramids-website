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

const ContactDev = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offices = [
    {
      city: "PESHAWAR",
      address:
        "Office 333, 3rd floor, Uhad tower, phase 3 chowk, near Jalil Kabab, Peshawar",
      type: "Main Office",
    },
    {
      city: "SWAT SITE OFFICE",
      address: "LAVITA malam jabba, main malam chowk, malam jabba, Swat",
      type: "Site Office",
    },
    {
      city: "ISLAMABAD",
      address: "Office 30, 2nd floor, Aslam Business Square, E11/2, Islamabad",
      type: "Branch Office",
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Call Us",
      details: ["0335 8080802", "0332 8080806"],
      link: "tel:03358080802",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email Us",
      details: ["info@pyramids.pk"],
      link: "imran514@hotmail.com",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
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
      label: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-white text-black overflow-hidden py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight mb-6">
            Start Your
            <br />
            <span className="text-orange-500">Investment Journey</span>
          </h2>

          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to explore premium investment opportunities? Contact our team
            for personalized consultations, site visits, and detailed project
            information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information - WRAPPED IN GRAY CARD */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.2)}
            className="bg-gray-50 p-8 border border-gray-200"
          >
            <h3 className="font-oswald text-2xl uppercase text-gray-900 mb-8">
              Contact Information
            </h3>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn(0.3 + index * 0.1)}
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start space-x-4 p-4 bg-white border border-gray-200 hover:border-orange-500/30 transition-colors duration-300 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <div className="text-orange-500">{contact.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-oswald text-lg uppercase text-gray-900 mb-2">
                      {contact.label}
                    </h4>
                    {contact.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="font-inter text-gray-600 hover:text-orange-500 transition-colors block"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="font-inter text-gray-600">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Offices */}
            <div>
              <h4 className="font-oswald text-xl uppercase text-gray-900 mb-6">
                Our Offices
              </h4>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeIn(0.5 + index * 0.1)}
                    className="border-l-4 border-orange-500 pl-4 py-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-oswald text-lg text-gray-900">
                          {office.city}
                        </h5>
                        <p className="font-inter text-gray-600 text-sm mt-1">
                          {office.address}
                        </p>
                      </div>
                      <span className="font-inter text-orange-500 text-xs uppercase tracking-wider bg-orange-500/10 px-2 py-1">
                        {office.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PREMIUM CTA SECTION */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.4)}
            className="relative min-h-[400px] flex items-center justify-center overflow-hidden"
          >
            {/* Parallax Background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/cta.png")',
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6 font-oswald leading-tight"
                >
                  Ready to Invest in
                  <br />
                  <span className="text-orange-500">Premium Real Estate?</span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ 
                      scale: 1.08, 
                      y: -4,
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block bg-orange-500 text-black font-bold uppercase px-12 py-4 shadow-2xl hover:bg-white transition-colors duration-300 cursor-pointer font-inter text-lg border-2 border-orange-500 hover:border-white"
                  >
                    START YOUR INVESTMENT
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactDev;
