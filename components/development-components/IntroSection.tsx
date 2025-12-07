"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const IntroSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section
            ref={ref}
            className="relative w-full bg-white text-black py-20 lg:py-32 overflow-hidden"
        >
            {/* Subtle Decorative Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Main Heading - Clean & Bold */}
                    <motion.h2
                        className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-center leading-tight mb-16"
                        variants={itemVariants}
                    >
                        <span className="text-gray-900">Pyramids</span>{" "}
                        <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                            Developers
                        </span>
                    </motion.h2>

                    {/* Clean Content - No Glass Effect */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                    >
                        {/* Simple Clean Card */}
                        <div className="relative bg-white rounded-2xl p-10 lg:p-16 shadow-lg border border-gray-100">
                            {/* Minimal Corner Accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500/20 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-500/20 rounded-br-2xl" />

                            {/* Description Text */}
                            <div className="space-y-8 relative z-10">
                                <p className="font-inter text-xl lg:text-2xl text-gray-800 leading-relaxed text-center">
                                    With a{" "}
                                    <span className="font-semibold text-gray-900">
                                        strong foundation in engineering
                                    </span>
                                    , we have expanded our expertise into real estate development.
                                    At Pyramids, we are committed to delivering projects that combine{" "}
                                    <span className="font-semibold text-orange-600">
                                        structural integrity
                                    </span>
                                    ,{" "}
                                    <span className="font-semibold text-orange-600">
                                        architectural beauty
                                    </span>
                                    , and{" "}
                                    <span className="font-semibold text-orange-600">
                                        lasting value
                                    </span>
                                    .
                                </p>

                                {/* Premium Icon Divider */}
                                <div className="flex items-center justify-center py-6">
                                    <div className="relative">
                                        {/* Subtle Circle Background */}
                                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                                            {/* Building/Architecture Icon */}
                                            <svg
                                                className="w-6 h-6 text-orange-500"
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
                                        </div>
                                        {/* Subtle Pulse Effect */}
                                        <div className="absolute inset-0 w-12 h-12 rounded-full bg-orange-500/5 animate-ping" />
                                    </div>
                                </div>

                                <p className="font-inter text-xl lg:text-2xl text-gray-800 leading-relaxed text-center">
                                    From{" "}
                                    <span className="font-semibold text-gray-900">concept to completion</span>
                                    , we ensure{" "}
                                    <span className="font-bold text-orange-600 text-2xl lg:text-3xl">
                                        excellence at every stage
                                    </span>{" "}
                                    making us a{" "}
                                    <span className="font-semibold text-gray-900">
                                        trusted choice for investors and partners alike
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Clean Decorative Line */}
                    <motion.div
                        className="mt-16 flex justify-center items-center gap-6"
                        variants={itemVariants}
                    >
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-500 to-orange-500/50" />
                        <div className="w-2.5 h-2.5 bg-orange-500 rotate-45" />
                        <div className="h-px w-32 bg-gradient-to-l from-transparent via-orange-500 to-orange-500/50" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntroSection;
