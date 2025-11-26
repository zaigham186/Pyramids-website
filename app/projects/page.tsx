import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArchitecturalDivider from "@/components/StructuralDivider";

// Import Projects components - Premium animated components
import ProjectsHero from "@/components/projects-components/ProjectsHero";
import ProjectShowcase from "@/components/projects-components/ProjectShowcase";
import ProjectsCTA from "@/components/projects-components/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero (z-0) */}
      <div className="sticky top-0 h-screen z-0">
        <ProjectsHero />
      </div>

      {/* Scrollable Content (z-10) */}
      <div className="relative z-10 bg-transparent">
        {/* SECTION 2: WHITE - Project Showcase */}
        <ProjectShowcase />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 3: CTA with parallax effect */}
        <ProjectsCTA />

        <Footer />
      </div>
    </main>
  );
}
