"use client";

// --- IMPORTS FOR THE PAGE ---
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientsPreview from "@/components/home-preview/ClientsPreview";
import FeaturedClients from "@/components/clients-components/FeaturedClients";
import ArchitecturalDivider from "@/components/StructuralDivider";
// --- 1. IMPORT THE CTA COMPONENT ---
import ExpertiseCTA from "@/components/expertise-components/ExpertiseCTA"; // Assuming this is the correct path

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* SECTION 1: "TRUST" (Black) 
        Logo Marquee + Testimonials
      */}
      <ClientsPreview />

      {/* --- DIVIDER: BLACK-TO-WHITE --- */}
      <ArchitecturalDivider direction="black-to-white" />

      {/* SECTION 2: "DETAIL" (Light) 
        Featured Client Cards
      */}
      <FeaturedClients />

      {/* --- 2. ADD THE FINAL DIVIDER & CTA --- */}
      {/* --- DIVIDER: WHITE-TO-BLACK --- */}
      <ArchitecturalDivider direction="white-to-black" />

      {/* SECTION 3: "CALL TO ACTION" (Black) */}
      <ExpertiseCTA />

      <Footer />
    </main>
  );
}
