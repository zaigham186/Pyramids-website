import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArchitecturalDivider from "@/components/StructuralDivider";

// Import the components we ACTUALLY have
import ExpertiseHero from "@/components/expertise-components/ExpertiseHero";
import ExpertiseShowcase from "@/components/expertise-components/ExpertiseShowcase";
import ServiceCategoryGrid from "@/components/expertise-components/ServiceCategoryGrid";
import ExpertiseStats from "@/components/expertise-components/ExpertiseStats";
import FullScopeSection from "@/components/expertise-components/FullScopeSection";
import ExpertiseCTA from "@/components/expertise-components/ExpertiseCTA";

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Sticky Hero (z-0) */}
      <div className="sticky top-0 h-screen z-0">
        <ExpertiseHero />
      </div>

      {/* Scrollable Content (z-10) */}
      <div className="relative z-10 bg-transparent">
        {/* SECTION 2: WHITE */}
        <ExpertiseShowcase />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 3: DYNAMIC - Starts white, becomes black on scroll */}
        <ServiceCategoryGrid />

        {/* --- DIVIDER: BLACK-TO-WHITE --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* SECTION 4: WHITE */}
        <ExpertiseStats />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 5: BLACK */}
        <FullScopeSection />

        {/* REMOVED DIVIDER: Creates seamless flow into CTA */}
        {/* The CTA's dark background will blend perfectly with FullScopeSection's black */}

        {/* SECTION 6: CTA with parallax effect */}
        <ExpertiseCTA />

        <Footer />
      </div>
    </main>
  );
}
