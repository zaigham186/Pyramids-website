"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StructuralDivider from "@/components/StructuralDivider";
import ExpertiseCTA from "@/components/expertise-components/ExpertiseCTA";
import CertificatesHero from "@/components/certificates-components/CertificatesHero";
import {
  Building2,
  Droplets,
  School,
  SunMedium,
  Award,
  MapPin,
  Calendar,
  FileCheck,
  Download,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Project Completion Certificates Data
const completionCertificates = [
  {
    id: 1,
    icon: School,
    org: "IRDO — Islamabad",
    title: "19 Govt. Primary & Middle Schools",
    description: "Structural drawings and analysis reports for 19 government primary and middle schools in Mansehra and Rawalakot. Drawings approved by NESPAK and ERRA.",
    tags: [
      { icon: MapPin, text: "Mansehra & Rawalakot" },
      { icon: Award, text: "NESPAK Approved" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0001.jpg",
  },
  {
    id: 2,
    icon: Droplets,
    org: "German Red Cross",
    title: "MMP 2015 — Schools, Water & Roads",
    description: "Feasibility, design and estimates of Micro Mitigation Project: 2 Primary + 1 Middle School (Kohistan), 2 Water Supply Schemes, 2 PCC Roads, 3 Irrigation Projects, 2 Pedestrian Bridges.",
    tags: [
      { icon: MapPin, text: "Shangla & Kohistan" },
      { icon: Calendar, text: "Jan 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0002.jpg",
  },
  {
    id: 3,
    icon: Droplets,
    org: "German Red Cross",
    title: "12 Schemes — MMP 2016",
    description: "2 Water Supply Schemes (Shangla), 2 PCC Roads, 3 Irrigation & Water Supply Schemes (Kohistan), 2 Pedestrian Suspension Bridges (Shangla), 3 Government Primary Schools (Shangla & Kohistan).",
    tags: [
      { icon: MapPin, text: "Shangla & Kohistan" },
      { icon: Calendar, text: "2016" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0003.jpg",
  },
  {
    id: 4,
    icon: Droplets,
    org: "German Red Cross",
    title: "MMP 2017 — 5 Water + 3 Schools",
    description: "Feasibility and design of Micro Mitigation Project: 5 water supply schemes and 3 Government Primary Schools successfully completed and acknowledged.",
    tags: [
      { icon: MapPin, text: "Shangla & Kohistan" },
      { icon: Calendar, text: "Aug 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0004.jpg",
  },
  {
    id: 5,
    icon: Droplets,
    org: "Danish Red Cross",
    title: "Micro Mitigation Projects 2016",
    description: "Technical assessments, feasibility and design of gravity flow water supply schemes, pedestrian bridge and retaining walls. Quality maintained throughout.",
    tags: [
      { icon: MapPin, text: "Mansehra District" },
      { icon: Calendar, text: "Aug 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0005.jpg",
  },
  {
    id: 6,
    icon: Building2,
    org: "Danish Red Cross",
    title: "Infrastructure Projects 2017",
    description: "Technical assessments, feasibility and design: gravity flow water supply schemes, pedestrian bridges, jeep-able bridges and civil dispensary in Mansehra District.",
    tags: [
      { icon: MapPin, text: "Mansehra District" },
      { icon: Calendar, text: "Aug 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0006.jpg",
  },
  {
    id: 7,
    icon: Droplets,
    org: "German Red Cross",
    title: "Kundia Valley Irrigation Schemes",
    description: "Survey, design, feasibility and construction monitoring of Birthee and Karavo Irrigation and Water Supply Gravity Flow Schemes including intake chambers and storage tanks.",
    tags: [
      { icon: MapPin, text: "Kundia Valley, Kohistan" },
      { icon: Calendar, text: "Jan 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0007.jpg",
  },
  {
    id: 8,
    icon: SunMedium,
    org: "Canadian Red Cross",
    title: "Solar Powered Water Pumps (SPWP)",
    description: "Feasibility study of 10 wells, technical specifications and design of 10 Solar Powered Water Pumps, and bid review for SPWP project in Tharparkar district.",
    tags: [
      { icon: MapPin, text: "Tharparkar, Sindh" },
      { icon: Calendar, text: "Dec 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0008.jpg",
  },
  {
    id: 9,
    icon: School,
    org: "Medair — Switzerland",
    title: "11 Schools Construction Supervision",
    description: "Site supervision and consultant engineering for 8 primary and 3 middle schools. All construction activities carried out as per ERRA/NASPAK approved drawings with quality controls.",
    tags: [
      { icon: MapPin, text: "Poonch, AJK" },
      { icon: Calendar, text: "2006" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0009.jpg",
  },
  {
    id: 10,
    icon: FileCheck,
    org: "Medair — Switzerland",
    title: "Full Design Package — 11 Schools",
    description: "Architectural, Structural, Electrical and Plumbing drawings plus Structural Report, Soil Testing Report, Bill of Quantities and Certificate of Stability. Approved by ERRA/NESPAK (NOC received 31st July 2006).",
    tags: [
      { icon: MapPin, text: "Poonch, AJK" },
      { icon: Award, text: "ERRA/NESPAK NOC" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0010.jpg",
  },
  {
    id: 11,
    icon: Building2,
    org: "Saif Associates — Town Heights",
    title: "Town Heights — 11 & 12 Story Blocks",
    description: "Structural work of 11-story Block-1 (132,000 sft) completed under detailed supervision and construction management. Design review of 12-story Block-2 (192,000 sft) completed. Ongoing construction management.",
    tags: [
      { icon: MapPin, text: "Peshawar" },
      { icon: Calendar, text: "Since Jan 2016" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0011.jpg",
  },
  {
    id: 12,
    icon: Building2,
    org: "Saif Associates",
    title: "Saif Heights — 9-Story (98,000 sft)",
    description: "Complete design package: Architectural design with Exterior & Interior 3Ds and Animations, Structural Design, Electrical Design, Plumbing, Fire Detection Alarms and Fighting Systems. Design fee PKR 2.2 Million.",
    tags: [
      { icon: MapPin, text: "Arbab Road, Peshawar" },
      { icon: Calendar, text: "Aug 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0012.jpg",
  },
  {
    id: 13,
    icon: Building2,
    org: "Saif Associates",
    title: "Town Residency — 12-Story (213,000 sft)",
    description: "Full design consultancy: Architectural, Structural, Electrical, Plumbing, Fire Detection and Fighting Systems. Total estimated building cost PKR 400 Million. Design fee PKR 4 Million.",
    tags: [
      { icon: MapPin, text: "University Town, Peshawar" },
      { icon: Calendar, text: "Aug 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0013.jpg",
  },
  {
    id: 14,
    icon: Building2,
    org: "Saif Associates",
    title: "City Center — 13-Story (90,000 sft)",
    description: "Full design package: Geotechnical investigation, Architectural design with 3Ds & Animations, Structural, Electrical, Water Supply, Fire Detection and Alarm Systems. Design fee PKR 4 Million.",
    tags: [
      { icon: MapPin, text: "University Road, Peshawar" },
      { icon: Calendar, text: "Jan 2018" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0014.jpg",
  },
  {
    id: 15,
    icon: Building2,
    org: "Saif Associates",
    title: "Marina Heights — 11-Story (100,000 sft)",
    description: "Full design package: Geotechnical investigation, Architectural design, Structural, Electrical, Water Supply and Sewerage, Fire Detection Alarm and Fighting Systems. Design fee PKR 6 Million.",
    tags: [
      { icon: MapPin, text: "University Town, Peshawar" },
      { icon: Calendar, text: "May 2018" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0015.jpg",
  },
  {
    id: 16,
    icon: Building2,
    org: "Saif Associates",
    title: "20-Story Commercial Building (230,000 sft)",
    description: "Full design consultancy: Detailed Architectural Design including Exterior & Interior 3Ds and Animations, Structural, Electrical, Plumbing, Fire Detection Alarms and Fighting Systems.",
    tags: [
      { icon: MapPin, text: "Arbab Road, Peshawar" },
      { icon: Calendar, text: "Oct 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0016.jpg",
  },
  {
    id: 17,
    icon: Building2,
    org: "Khwaja Khan",
    title: "DIR Heights — 6-Story (20,000 sft)",
    description: "Complete design: Architectural including detailed drawings, Structural Design, Electrical Design, Water Supply and Sewerage Design, Fire Detection, Fire Alarm and Firefighting System. Design fee PKR 2 Million.",
    tags: [
      { icon: MapPin, text: "Upper Dir" },
      { icon: Calendar, text: "May 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0017.jpg",
  },
  {
    id: 18,
    icon: Building2,
    org: "Swabi Enterprises",
    title: "Pyramids Plaza — 5-Story (22,000 sft)",
    description: "Full design: Geotechnical investigation, Architectural design with detailed drawings, Structural, Electrical, Water Supply and Sewerage, Fire Detection, Alarm and Firefighting System. Design fee PKR 2.5 Million.",
    tags: [
      { icon: MapPin, text: "Rawalpindi" },
      { icon: Calendar, text: "Feb 2018" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0018.jpg",
  },
  {
    id: 19,
    icon: Building2,
    org: "Murree Safari / Shokat Khan",
    title: "Safari Tower — 7-Story (75,000 sft)",
    description: "Full design package: Geotechnical investigation, Architectural design with detailed drawings, Structural, Electrical, Water Supply and Sewerage, Fire Detection, Alarm and Firefighting System.",
    tags: [
      { icon: MapPin, text: "Murree" },
      { icon: Calendar, text: "May 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0019.jpg",
  },
  {
    id: 20,
    icon: Building2,
    org: "JS Builders & Developers",
    title: "Satellite Tower — 12-Story (150,000 sft)",
    description: "Complete design: Geotechnical investigation, Architectural design, Structural, Electrical, Water Supply and Sewerage, Fire Detection, Fire Alarm and Firefighting System.",
    tags: [
      { icon: MapPin, text: "Satellite Town, Nowshera" },
      { icon: Calendar, text: "Jan 2017" },
    ],
    image: "/Certificates/All Projects' Completion Certificates_page-0020.jpg",
  },
];

// Performance Certificates Data
const performanceCertificates = [
  {
    id: 1,
    org: "Saif Associates",
    title: "Town Residency — 11-Story Residential & Commercial, Peshawar",
    contract: "PKR 3.8 Million",
    duration: "Jan – Jul 2017",
    remarks: "We are satisfied with the professional attitude and quality of work done by Pyramids Consulting Engineers.",
    image: "/Certificates/All Performance Certificates_page-0001.jpg",
  },
  {
    id: 2,
    org: "Saif Associates",
    title: "Saif Heights — Detailed Design, Peshawar",
    contract: "PKR 2.2 Million",
    duration: "Started Jul 2017",
    remarks: "We are satisfied with the professional attitude and quality of work done by Pyramids Consulting Engineers.",
    image: "/Certificates/All Performance Certificates_page-0002.jpg",
  },
  {
    id: 3,
    org: "Danish Red Cross",
    title: "Feasibility, Design & Monitoring — 8 Water Supply Schemes, Manoor Valley, Mansehra",
    contract: "PKR 1,800,000",
    duration: "Mar – Dec 2016",
    remarks: "We are satisfied with the quality of work provided by Pyramids Consulting Engineers.",
    image: "/Certificates/All Performance Certificates_page-0003.jpg",
  },
  {
    id: 4,
    org: "Danish Red Cross",
    title: "Surveying, Valuation & Assessment — Jeepable Bridges, Check Dams, Foot Tracks, Water Supply Schemes, Retaining Walls, Manoor Valley",
    contract: "PKR 180,000",
    duration: "Mar – Dec 2016",
    remarks: "We are satisfied with the work assignment completed by the Pyramids Consulting Engineers.",
    image: "/Certificates/All Performance Certificates_page-0004.jpg",
  },
  {
    id: 5,
    org: "German Red Cross",
    title: "Micro Mitigation Projects — 2 Water Supply, 2 PCC Roads, 3 Irrigation, 2 Bridges, 3 Schools, Shangla & Kohistan",
    contract: "PKR 1.2 Million",
    duration: "Jun – Dec 2016",
    remarks: "GRC is extremely satisfied with the professional competencies and quality of work of your firm.",
    image: "/Certificates/All Performance Certificates_page-0003.jpg",
  },
  {
    id: 6,
    org: "German Red Cross",
    title: "Feasibility & Design — 5 Water Supply Schemes + 3 Govt. Primary Schools, Shangla & Kohistan",
    contract: "PKR 1,110,600",
    duration: "May – Jul 2017",
    remarks: "GRC is extremely satisfied with the professional competencies and quality of work of your firm.",
    image: "/Certificates/All Performance Certificates_page-0004.jpg",
  },
  {
    id: 7,
    org: "Danish Red Cross",
    title: "Feasibility & Design — 7 Water Supply, 2 Foottracks, 1 Jeep-able Bridge, 2 Pedestrian Bridges, 1 Dispensary, Manoor Valley, Mansehra",
    contract: "PKR 3,000,000",
    duration: "Jan 2017 onwards",
    remarks: "We are satisfied with the quality of services provided.",
    image: "/Certificates/All Performance Certificates_page-0007.jpg",
  },
  {
    id: 8,
    org: "Canadian Red Cross",
    title: "SPWP — Solar Powered Water Pumps Project, Tharparkar, Sindh",
    contract: "6,500 CAD",
    duration: "Jul 2016 – Mar 2017",
    remarks: "The work provided by Pyramids Consulting Engineers is satisfactory.",
    image: "/Certificates/All Performance Certificates_page-0008.jpg",
  },
];

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<"completion" | "performance">("completion");

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentGallery = selectedGallery === "completion" ? completionCertificates : performanceCertificates;

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : currentGallery.length - 1));
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < currentGallery.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Section 1: Hero (Black) */}
      <CertificatesHero />

      {/* --- DIVIDER: BLACK-TO-WHITE --- */}
      <StructuralDivider direction="black-to-white" />

      {/* Section 2: Professional Certifications (White) - KEEP AS-IS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Our team holds industry-leading certifications that ensure the highest standards of quality and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-gray-900 mb-3">
                ISO Certified
              </h3>
              <p className="font-inter text-gray-600">
                International Organization for Standardization certification for quality management systems.
              </p>
            </div>

            {/* Certificate Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-gray-900 mb-3">
                PEC Registered
              </h3>
              <p className="font-inter text-gray-600">
                Pakistan Engineering Council registration for professional engineering services.
              </p>
            </div>

            {/* Certificate Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-gray-900 mb-3">
                Safety Standards
              </h3>
              <p className="font-inter text-gray-600">
                Compliance with international safety and construction standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DIVIDER: WHITE-TO-BLACK --- */}
      <StructuralDivider direction="white-to-black" />

      {/* ========== SECTION: PROJECT COMPLETION CERTIFICATES (IMAGES ONLY) ========== */}
      <section ref={ref1} className="py-16 lg:py-24 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            {/* Orange Accent Line */}
            <div className="w-16 h-1 bg-orange-500 mb-4" />
            
            <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-gray-900 uppercase mb-3">
              Project Completion Certificates
            </h2>
            <p className="font-inter text-base text-gray-600 max-w-2xl">
              Certified project completions across humanitarian, infrastructure, and commercial engineering sectors
            </p>
          </div>

          {/* Grid with Certificate Images Only */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {completionCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="aspect-[3/4] bg-white border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl"
                onClick={() => {
                  setSelectedImage(index);
                  setSelectedGallery("completion");
                }}
              >
                {/* Certificate Image */}
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-10 h-10 text-orange-500" />
                </div>

                {/* Number Badge */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    {String(cert.id).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION: PERFORMANCE CERTIFICATES (IMAGES ONLY) ========== */}
      <section ref={ref2} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            {/* Navy Accent Line */}
            <div className="w-16 h-1 bg-[#1A2340] mb-4" />
            
            <h2 className="font-oswald text-3xl lg:text-4xl font-bold text-gray-900 uppercase mb-3">
              Performance Certificates
            </h2>
            <p className="font-inter text-base text-gray-600 max-w-2xl">
              Verified quality and performance recognized by leading national and international organizations
            </p>
          </div>

          {/* Grid with Certificate Images Only */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {performanceCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="aspect-[3/4] bg-white border-2 border-gray-200 hover:border-[#1A2340] transition-all duration-300 relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl"
                onClick={() => {
                  setSelectedImage(index);
                  setSelectedGallery("performance");
                }}
              >
                {/* Certificate Image */}
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-10 h-10 text-[#1A2340]" />
                </div>

                {/* Number Badge */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-[#1A2340] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    {String(cert.id).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 text-orange-500 hover:text-orange-400 transition-colors z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 text-orange-500 hover:text-orange-400 transition-colors z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image Container */}
            <div
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentGallery[selectedImage].image}
                  alt={currentGallery[selectedImage].title}
                  width={800}
                  height={1067}
                  className="object-contain max-h-[80vh]"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  {currentGallery[selectedImage].title}
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  {selectedImage + 1} / {currentGallery.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Divider */}
      <div className="h-px bg-[#1a1a1a]" />

      {/* ========== NEW SECTION 4: DOWNLOAD BAR ========== */}
      <section ref={ref4} className="bg-[#0a0a0a]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          className="bg-gray-900 gap-px grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Download Button 1 */}
          <motion.a
            variants={itemVariants}
            href="/Certificates/All Projects' Completion Certificates.pdf"
            download
            target="_blank"
            className="bg-[#0d0d0d] hover:bg-[#111] transition-all duration-300 px-8 py-7 flex items-center gap-6 group"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-white" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-['Barlow_Condensed'] uppercase text-white font-bold text-lg mb-1">
                COMPLETION CERTIFICATES
              </h3>
              <p className="text-gray-500 text-xs">
                All 20 project completion certificates — PDF
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          {/* Download Button 2 */}
          <motion.a
            variants={itemVariants}
            href="/Certificates/All Performance Certificates.pdf"
            download
            target="_blank"
            className="bg-[#0d0d0d] hover:bg-[#111] transition-all duration-300 px-8 py-7 flex items-center gap-6 group"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-white" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-['Barlow_Condensed'] uppercase text-white font-bold text-lg mb-1">
                PERFORMANCE CERTIFICATES
              </h3>
              <p className="text-gray-500 text-xs">
                All 8 performance certificates — PDF
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-[#1a1a1a]" />

      {/* Section 3: Call to Action (Black) */}
      <ExpertiseCTA />

      <Footer />
    </main>
  );
}
