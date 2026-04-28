"use client";

import { useEffect, useRef } from "react";
import { motion, animate, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut", delay: 1 });
    }
  }, [inView, value, count]);

  return <motion.span ref={ref} className="text-xl lg:text-2xl font-heading font-black text-white">{rounded}</motion.span>;
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-start lg:items-center overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-8 sm:pt-44 sm:pb-12 lg:pt-48 lg:pb-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mt-2 lg:mt-4 px-2 py-1 text-primary-light text-[8px] lg:text-sm font-medium mb-4 lg:mb-4 font-body border border-primary/20 rounded-lg">
              Est. 2023 — A Cosmos Group Venture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-5xl font-black leading-[0.9] mb-3 lg:mb-4"
          >
            <span className="text-white">COSMOTECH</span>
            <br />
            <span className="text-primary uppercase">Engineering</span>
            <br />
            <span className="text-white uppercase text-2xl lg:text-6xl">Solutions</span>
            <span className="text-primary ml-1 lg:ml-2 text-xl sm:text-4xl lg:text-5xl font-bold align-top">
              LLP
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-xs sm:text-lg max-w-xl leading-relaxed mb-6 font-body"
          >
            Building tomorrow&apos;s connectivity today. Premier telecom<br></br>
            infrastructure and engineering solutions across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/#contact"
              className="group px-4 py-2.5 lg:px-8 lg:py-4 bg-primary text-white font-heading font-semibold text-sm lg:text-base rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
            >
              Get Started
              <HiArrowDown className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#services"
              className="px-4 py-2.5 lg:px-8 lg:py-4 bg-white/10 text-white font-heading font-semibold text-sm lg:text-base rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
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
          className="mt-12 lg:mt-16 grid grid-cols-4 gap-0.5 p-0.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-max"
        >
          {[
            { value: 500, suffix: "+", label: "Towers Built" },
            { value: 50, suffix: "+", label: "Team Members" },
            { value: 6, suffix: "", label: "Service Areas" },
            { value: 100, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col px-1 lg:px-4 py-2 rounded-lg lg:rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-baseline gap-0.5">
                <Counter value={stat.value} />
                <span className="text-[10px] lg:text-sm font-heading font-bold text-primary">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-[6px] sm:text-[8px] lg:text-[10px] text-white/40 uppercase tracking-tight sm:tracking-widest font-medium mt-0.5 group-hover:text-white/60 transition-colors whitespace-nowrap">
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
