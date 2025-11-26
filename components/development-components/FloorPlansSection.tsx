"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

interface FloorPlan {
  id: string;
  title: string;
  floor: string;
  image: string;
  suites: {
    type: string;
    size: string;
    rooms: string[];
  }[];
  features: string[];
}

const FloorPlansSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadBrochure = () => {
    setIsDownloading(true);

    try {
      // Use absolute path from public folder
      const link = document.createElement("a");
      link.href = "/data/Designs.pdf"; // This should work if file is in public/data/
      link.download = "LaVita-Designs-Brochure.pdf"; // Better filename

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Brochure downloaded successfully");
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const floorPlans: FloorPlan[] = [
    {
      id: "ground-floor",
      title: "Multifunctional Hall & Dining",
      floor: "Ground Floor",
      image: "/development-images/ground.png",
      suites: [
        {
          type: "Multifunctional Hall",
          size: "Spacious Area",
          rooms: ["Event Space", "Dining Area", "Reception"],
        },
      ],
      features: ["Main Entrance", "Reception", "Dining Area", "Event Space"],
    },
    {
      id: "fourth-floor",
      title: "Deluxe & Executive Suites",
      floor: "Fourth Floor",
      image: "/development-images/fourth.png",
      suites: [
        {
          type: "Deluxe Suite",
          size: "625-660 SFT",
          rooms: ["Studio Room", "Bath", "Balcony"],
        },
        {
          type: "Executive Suite",
          size: "1104-1237 SFT",
          rooms: ["Bed Room", "Lounge", "Bath", "Balcony"],
        },
      ],
      features: [
        "Studio Rooms",
        "Private Balconies",
        "Lounge Areas",
        "Premium Bathrooms",
      ],
    },
    {
      id: "eighth-floor",
      title: "Stargazing Floor", // Based on "Stargazing" labels on the plan [cite: 818, 828]
      floor: "Eighth Floor", // Source: "8TH FLOOR PLAN" [cite: 832]
      image: "/development-images/eighth.png",
      suites: [
        {
          type: "Stargazing Studio", // Source: "STARGAZING STUDIO ROOM"
          size: "450-500 SFT", // Based on dimensions 18'-3" x 25'-3" [cite: 804]
          rooms: ["Spacious Bedroom", "Attached Bath", "Panoramic View"],
        },
        {
          type: "Standard Studio", // Source: "STUDIO ROOM" [cite: 836]
          size: "350-400 SFT", // Based on dimensions 13'-1" x 14'-8" [cite: 836]
          rooms: ["Studio Space", "Attached Bath", "Services Access"],
        },
      ],
      features: [
        "Top Floor Elevation", // Inferred from "8TH FLOOR PLAN" [cite: 832]
        "Stargazing Views", // Source: "STARGAZING" labels
        "Direct Roof Access",
        "Private & Exclusive",
      ],
    },
  ];

  const suiteTypes = [
    { type: "Studio Room", size: "23'-9\" X 12'-6\"", category: "Deluxe" },
    { type: "Deluxe Suite", size: "625-710 SFT", category: "Deluxe" },
    { type: "Executive Suite", size: "1104-1237 SFT", category: "Executive" },
    { type: "Stargazing Suite", size: "540-914 SFT", category: "Premium" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white overflow-hidden py-20 lg:py-28"
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
              ARCHITECTURAL DESIGN
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-white leading-tight mb-6">
            Floor Plans &
            <br />
            <span className="text-orange-500">Suite Types</span>
          </h2>

          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the meticulously designed floor plans and luxury suite
            options available at LaVita Malam Jabba. Each space is crafted for
            comfort and elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Floor Plan Selector */}
          {floorPlans.map((plan, index) => (
            <motion.button
              key={plan.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.2 + index * 0.1)}
              onClick={() => setSelectedPlan(index)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                selectedPlan === index
                  ? "bg-gray-900 shadow-lg border-2 border-orange-500"
                  : "bg-gray-800 border-2 border-transparent hover:border-orange-500/30"
              }`}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-3 h-3 rounded-full mr-3 ${
                    selectedPlan === index ? "bg-orange-500" : "bg-gray-400"
                  }`}
                />
                <h3 className="font-oswald text-xl uppercase text-white">
                  {plan.floor}
                </h3>
              </div>
              <p className="font-inter text-gray-300 text-sm">{plan.title}</p>
            </motion.button>
          ))}
        </div>

        {/* Selected Floor Plan Details */}
        <motion.div
          key={selectedPlan}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.5)}
          className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Floor Plan Image */}
            <div className="relative h-80 lg:h-96 bg-gray-700">
              <Image
                src={floorPlans[selectedPlan].image}
                alt={floorPlans[selectedPlan].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                <span className="font-oswald text-sm">
                  {floorPlans[selectedPlan].floor}
                </span>
              </div>
            </div>

            {/* Floor Plan Details */}
            <div className="p-6 lg:p-8">
              <h3 className="font-oswald text-2xl uppercase text-white mb-4">
                {floorPlans[selectedPlan].title}
              </h3>

              {/* Suites */}
              <div className="mb-6">
                <h4 className="font-oswald text-lg uppercase text-white mb-3">
                  Suite Types
                </h4>
                <div className="space-y-3">
                  {floorPlans[selectedPlan].suites.map((suite, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-4 py-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-oswald text-white">
                            {suite.type}
                          </h5>
                          <p className="font-inter text-orange-500 text-sm">
                            {suite.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {suite.rooms.map((room, roomIndex) => (
                          <span
                            key={roomIndex}
                            className="px-2 py-1 bg-gray-800 rounded text-xs font-inter text-gray-300"
                          >
                            {room}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-oswald text-lg uppercase text-white mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {floorPlans[selectedPlan].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      <span className="font-inter text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Brochure Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  y: -2,
                  boxShadow: "0 15px 30px rgba(249, 115, 22, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={handleDownloadBrochure}
                disabled={isDownloading}
                className="w-full bg-orange-500 text-black font-bold uppercase py-3 rounded-lg mt-6 font-inter text-sm border-2 border-orange-500 hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Complete Brochure
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Suite Types Overview */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.7)}
          className="mt-16"
        >
          <h3 className="font-oswald text-2xl uppercase text-white text-center mb-8">
            Suite Categories & Sizes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suiteTypes.map((suite, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 text-center"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                    suite.category === "Deluxe"
                      ? "bg-orange-500/20"
                      : suite.category === "Executive"
                      ? "bg-blue-500/20"
                      : "bg-purple-500/20"
                  }`}
                >
                  <svg
                    className={`w-6 h-6 ${
                      suite.category === "Deluxe"
                        ? "text-orange-500"
                        : suite.category === "Executive"
                        ? "text-blue-500"
                        : "text-purple-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h4 className="font-oswald text-lg text-white mb-2">
                  {suite.type}
                </h4>
                <p className="font-inter text-orange-500 text-sm mb-2">
                  {suite.size}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-medium ${
                    suite.category === "Deluxe"
                      ? "bg-orange-500/20 text-orange-300"
                      : suite.category === "Executive"
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-purple-500/20 text-purple-300"
                  }`}
                >
                  {suite.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
