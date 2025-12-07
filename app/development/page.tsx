import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArchitecturalDivider from "@/components/StructuralDivider";

// Development page components
import HeroDevelopment from "@/components/development-components/HeroDevelopment";
import IntroSection from "@/components/development-components/IntroSection";
import ProjectShowcaseSection from "@/components/development-components/ProjectShowcaseSection";
import FloorPlansSection from "@/components/development-components/FloorPlansSection";
import InvestAdvantages from "@/components/development-components/InvestAdvantages";
import ContactDev from "@/components/development-components/ContactDev";

export default function DevelopmentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen z-0">
        <HeroDevelopment />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 bg-transparent">
        {/* INTRO: WHITE - Company Introduction */}
        <IntroSection />

        {/* SECTION 1: WHITE - Projects Showcase */}
        <ProjectShowcaseSection />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 2: BLACK - Floor Plans */}
        <div className="bg-black">
          <FloorPlansSection />
        </div>

        {/* --- DIVIDER: BLACK-TO-WHITE --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* SECTION 3: WHITE - Investment Advantages */}
        <InvestAdvantages />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 4: BLACK - Contact CTA */}
        <div className="bg-black">
          <ContactDev />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
