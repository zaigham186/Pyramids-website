"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StructuralDivider from "@/components/StructuralDivider";
import ExpertiseCTA from "@/components/expertise-components/ExpertiseCTA";
import CertificatesHero from "@/components/certificates-components/CertificatesHero";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Section 1: Hero (Black) */}
      <CertificatesHero />

      {/* --- DIVIDER: BLACK-TO-WHITE --- */}
      <StructuralDivider direction="black-to-white" />

      {/* Section 2: Certificates Content (White) */}
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

          {/* Certificates Grid - Placeholder for now */}
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

      {/* Section 3: Call to Action (Black) */}
      <ExpertiseCTA />

      <Footer />
    </main>
  );
}
