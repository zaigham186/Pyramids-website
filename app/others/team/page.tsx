"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeamHero from "@/components/team-components/TeamHero";
import ArchitecturalDivider from "@/components/StructuralDivider";
import ExpertiseCTA from "@/components/expertise-components/ExpertiseCTA";
// --- 1. IMPORT THE NEW COMPONENT ---
import TeamShowcase from "@/components/team-components/TeamShowcase";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Section 1: Hero (Black) */}
      <TeamHero />

      {/* --- DIVIDER: BLACK-TO-WHITE --- */}
      <ArchitecturalDivider direction="black-to-white" />

      {/* --- 2. ADD THE NEW SHOWCASE SECTION --- */}
      <TeamShowcase />

      {/* --- DIVIDER: WHITE-TO-BLACK --- */}
      <ArchitecturalDivider direction="white-to-black" />

      {/* Section 3: Careers CTA (Black) */}
      <ExpertiseCTA />

      <Footer />
    </main>
  );
}
