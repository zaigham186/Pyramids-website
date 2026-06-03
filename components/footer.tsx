"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react"; // Removed Twitter, Linkedin, added Mail

interface FooterLink {
  name: string;
  href: string;
}

const footerLinks: { [key: string]: FooterLink[] } = {
  Services: [
    { name: "Architectural Design", href: "/expertise" },
    { name: "Structural Engineering", href: "/expertise" },
    { name: "Urban Planning", href: "/expertise" },
    { name: "Construction Management", href: "/expertise" },
  ],
  Expertise: [
    { name: "Sustainable Architecture", href: "/expertise" },
    { name: "Interior Design", href: "/expertise" },
    { name: "Project Oversight", href: "/expertise" },
    { name: "Technical Consulting", href: "/expertise" },
  ],
  Developments: [
    { name: "Capital Heights", href: "/development" },
    { name: "DHA Peshawar", href: "/development" },
    { name: "Lavita Malam Jabba", href: "/development" },
    { name: "View All Projects", href: "/development" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/others/team" },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/others/clients" },
    { name: "Gallery", href: "/others/gallery" },
    { name: "Careers", href: "/contact" },
  ],
};

// UPDATED SOCIAL LINKS WITH REAL BRAND PAGES
const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/PyramidsConsultants",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/pyramidspk/",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:imran514@hotmail.com?subject=Project Inquiry&body=Hello Pyramids, I would like to discuss a project.",
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12"
        >
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.png"
                alt="Pyramids Logo"
                className="h-14 w-auto"
                loading="lazy"
              />
              <div>
                <p className="text-base font-bold font-heading tracking-wide">
                  PYRAMIDS
                </p>
                <p className="text-xs opacity-75 font-sans">
                  ENGINEERS & ARCHITECTS
                </p>
              </div>
            </Link>
            <p className="text-sm opacity-75 leading-relaxed font-sans">
              Engineering excellence and architectural innovation for spaces
              that inspire.
            </p>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4 text-orange-500 font-heading uppercase tracking-wide text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-75 hover:opacity-100 hover:text-orange-500 transition-all duration-300 font-sans"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-orange-500/20 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm opacity-75 font-sans">
            © {currentYear} Pyramids Consulting Engineers & Architects. All
            rights reserved.
          </p>

          {/* UPDATED Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-none flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon
                      size={18}
                      className="text-white group-hover:text-black"
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Badge & CodeClub Credit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-800"
        >
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-none">
            <div className="w-2 h-2 bg-orange-500 rounded-none"></div>
            <span className="text-xs font-bold text-white tracking-widest uppercase font-heading">
              PEC Certified • ISO Standards • Trusted Since 2006
            </span>
            <div className="w-2 h-2 bg-orange-500 rounded-none"></div>
          </div>

          {/* CodeClub Credit */}
          <motion.a
            href="https://codeclub.tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
          >
            <span className="text-gray-400 text-sm font-sans group-hover:text-white">
              Designed & Developed by
            </span>
            <div className="flex items-center gap-2">
              <img
                alt="CodeClub"
                src="/code-club-logo.png"
                className="h-5 lg:h-10 w-auto" // Removed all filters
                loading="lazy"
              />
              <span className="text-white font-semibold text-sm group-hover:text-black">
                CodeClub
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
