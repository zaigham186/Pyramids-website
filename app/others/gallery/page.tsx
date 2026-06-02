"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StructuralDivider from "@/components/StructuralDivider"; // Fixed import name
import ExpertiseCTA from "@/components/expertise-components/ExpertiseCTA";
import GalleryHero from "@/components/gallery-components/GalleryHero";
import GalleryGrid from "@/components/gallery-components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      {/* Section 1: Hero (Black) */}
      <GalleryHero />
      {/* --- DIVIDER: BLACK-TO-WHITE --- */}
      <StructuralDivider direction="black-to-white" />{" "}
      {/* Fixed component name */}
      {/* Section 2: The Gallery (Light) */}
      <GalleryGrid />
      {/* --- DIVIDER: WHITE-TO-BLACK --- */}
      <StructuralDivider direction="white-to-black" />{" "}
      {/* Fixed component name */}
      {/* Section 3: Call to Action (Black) */}
      <ExpertiseCTA />
      <Footer />
    </main>
  );
}
