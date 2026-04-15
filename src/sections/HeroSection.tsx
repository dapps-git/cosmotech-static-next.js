"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Telecommunications tower at sunset"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/70 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-light text-sm font-medium rounded-full border border-primary/30 mb-6">
              Est. 2023 — A Cosmos Group Venture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6"
          >
            <span className="text-white">COSMOTECH</span>
            <br />
            <span className="text-primary">ENGINEERING</span>
            <br />
            <span className="text-white">SOLUTIONS</span>
            <span className="text-primary ml-2 text-3xl sm:text-4xl lg:text-5xl font-bold align-top">
              LLP
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 font-body"
          >
            Building tomorrow&apos;s connectivity today. Premier telecom infrastructure
            and engineering solutions across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
            >
              Get Started
              <HiArrowDown className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#services"
              className="px-8 py-4 bg-white/10 text-white font-heading font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 flex flex-wrap gap-8 sm:gap-16"
        >
          {[
            { value: "500+", label: "Towers Built" },
            { value: "50+", label: "Team Members" },
            { value: "6", label: "Service Areas" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-heading font-black text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/50 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="text-white/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
