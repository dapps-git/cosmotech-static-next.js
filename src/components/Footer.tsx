"use client";

import Link from "next/link";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light rounded-lg rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-heading font-black text-lg">
                  C
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block leading-tight">
                  COSMOTECH
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary-light">
                  Engineering Solutions
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering connectivity through cutting-edge telecom infrastructure
              solutions. Established by Cosmos Group in 2023.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, href: COMPANY.socialLinks.facebook },
                { Icon: FaInstagram, href: COMPANY.socialLinks.instagram },
                { Icon: FaLinkedinIn, href: COMPANY.socialLinks.linkedin },
                { Icon: FaTwitter, href: COMPANY.socialLinks.twitter },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" size={16} />
                <p className="text-white/60 text-sm leading-relaxed">
                  {COMPANY.address.full}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary shrink-0" size={14} />
                <div className="text-sm">
                  <a
                    href={`tel:${COMPANY.phone[0]}`}
                    className="text-white/60 hover:text-primary transition-colors block"
                  >
                    {COMPANY.phone[0]}
                  </a>
                  <a
                    href={`tel:${COMPANY.phone[1]}`}
                    className="text-white/60 hover:text-primary transition-colors block"
                  >
                    {COMPANY.phone[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary shrink-0" size={14} />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            A{" "}
            <span className="text-primary">Cosmos Group</span> Venture
          </p>
        </div>
      </div>
    </footer>
  );
}
