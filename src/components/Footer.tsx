"use client";

import Link from "next/link";
import Image from "next/image";
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
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
          {/* Company Info */}
          <div className="flex flex-col col-span-1 lg:col-span-5 pr-0 lg:pr-12">
            <div className="flex flex-col mb-2 lg:mb-3">
              <div className="relative h-14 w-32 sm:h-16 sm:w-40 lg:h-24 lg:w-80 mb-1">
                <Image
                  src="/images/Cosmo logo.webp"
                  alt="COSMOTECH Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[7px] sm:text-[9px] font-bold tracking-widest uppercase text-primary-light lg:-mt-1 ml-0.5 whitespace-nowrap">
                Est.2023 Cosmos Group Venture
              </span>
            </div>
            <p className="text-white/60 text-[10px] sm:text-xs lg:text-sm leading-tight lg:leading-relaxed mb-3 lg:mb-4">
              Empowering connectivity through cutting-edge <br></br>telecom infrastructure solutions.
              <br></br> Established by Cosmos Group in 2023.
            </p>
            <div className="flex gap-2 lg:gap-3">
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
                  className="w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={10} className="lg:size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-heading font-semibold text-sm lg:text-lg mb-3 lg:mb-6 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-4 lg:w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-1.5 lg:space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-[11px] sm:text-xs lg:text-sm flex items-center gap-1 lg:gap-2"
                  >
                    <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary/40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-heading font-semibold text-sm lg:text-lg mb-3 lg:mb-6 relative">
              Services
              <span className="absolute -bottom-1 left-0 w-4 lg:w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-1.5 lg:space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-[11px] sm:text-xs lg:text-sm flex items-center gap-1 lg:gap-2 group"
                  >
                    <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary/40" />
                    {service.title.split(' ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="font-heading font-semibold text-sm lg:text-lg mb-3 lg:mb-6 relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-4 lg:w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <div className="flex items-start gap-1.5 lg:gap-3">
                <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0 text-[10px] lg:text-sm" />
                <p className="text-white/60 text-[11px] sm:text-xs lg:text-sm leading-tight text-balance">
                  Tirur, Malappuram
                </p>
              </div>
              <div className="flex items-center gap-1.5 lg:gap-3">
                <FaPhone className="text-primary shrink-0 text-[10px] lg:text-sm" />
                <a href={`tel:${COMPANY.phone[0]}`} className="text-white/60 text-[11px] sm:text-xs lg:text-sm">
                  {COMPANY.phone[0].slice(-10)}
                </a>
              </div>
              <div className="flex items-center gap-1.5 lg:gap-3">
                <FaEnvelope className="text-primary shrink-0 text-[10px] lg:text-sm" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/60 text-[11px] sm:text-xs lg:text-sm truncate"
                >
                  Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6 flex flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-[10px] sm:text-xs lg:text-sm">
            &copy; 2026 {COMPANY.name}
          </p>
          <p className="text-white/40 text-[10px] sm:text-xs lg:text-sm">
            A <span className="text-primary">Cosmos Group</span> Venture
          </p>
        </div>
      </div>
    </footer>
  );
}
