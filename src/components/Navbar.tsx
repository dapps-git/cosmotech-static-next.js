"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLeadershipPage = pathname === "/leadership";

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.sectionId).filter(Boolean);
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent, link: typeof NAV_LINKS[0]) => {
    setMobileOpen(false);
    if (link.href.startsWith("/#") && isHome) {
      e.preventDefault();
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isHome
          ? scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
          : "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-16 w-64 lg:h-24 lg:w-[400px] transition-all duration-300">
                <Image
                  src="/images/Cosmo logo.webp"
                  alt="COSMOTECH Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isHome
                    ? activeSection === link.sectionId
                      ? scrolled ? "text-primary" : "text-white"
                      : scrolled ? "text-dark/70 hover:text-primary" : "text-white/70 hover:text-white"
                    : activeSection === link.sectionId
                      ? "text-primary"
                      : "text-dark/70 hover:text-primary"
                    }`}
                >
                  {link.label}
                  {activeSection === link.sectionId && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-primary text-white font-heading font-semibold text-sm rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Toggle */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl transition-colors text-black"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX size={28} color="#000" />
              ) : (
                <HiMenu size={28} color="#000" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-heading font-bold text-lg text-dark">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-cream transition-colors"
                  aria-label="Close menu"
                >
                  <HiX size={24} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${activeSection === link.sectionId
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-dark/70 hover:bg-cream hover:text-dark"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto p-6 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-6 py-3 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-colors"
                >
                  Get In Touch
                </Link>
                <div className="mt-4 text-center text-sm text-muted">
                  <p>{COMPANY.phone[0]}</p>
                  <p>{COMPANY.email}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
