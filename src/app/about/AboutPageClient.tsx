"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { ABOUT_CONTENT, MISSION_CONTENT, COMPANY } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiGlobe,
  HiShieldCheck,
  HiTrendingUp,
  HiStar,
} from "react-icons/hi";

const missionIcons = [
  HiLightningBolt,
  HiGlobe,
  HiShieldCheck,
  HiTrendingUp,
  HiStar,
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="About Cosmotech"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary/20 text-primary-light text-sm font-semibold rounded-full mb-6"
          >
            Know More About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            About <span className="text-primary">Cosmotech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            An independent tower company established in {COMPANY.established} by
            Cosmos Group, providing integrated telecom infrastructure services.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection direction="left">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-black text-dark mb-8">
                  Who We <span className="text-primary">Are</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  {ABOUT_CONTENT.intro}
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-3 mb-6 bg-primary/5 rounded-r-xl">
                  <p className="text-dark/80 italic text-lg leading-relaxed">
                    &ldquo;{ABOUT_CONTENT.vision}&rdquo;
                  </p>
                </blockquote>
                <p className="text-muted text-base leading-relaxed mb-6">
                  {ABOUT_CONTENT.history}
                </p>
                <p className="text-muted text-base leading-relaxed mb-6">
                  {ABOUT_CONTENT.expertise}
                </p>
                <p className="text-muted text-base leading-relaxed">
                  {ABOUT_CONTENT.commitment}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-engineers.png"
                    alt="Cosmotech engineering team"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-3xl -z-10" />
              </div>
            </AnimatedSection>
          </div>

          {/* Mission */}
          <div>
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-dark">
                What Drives <span className="text-primary">Us Forward</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MISSION_CONTENT.map((item, i) => {
                const Icon = missionIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300 group ${
                      i === MISSION_CONTENT.length - 1 &&
                      MISSION_CONTENT.length % 2 !== 0
                        ? "md:col-span-2 md:max-w-2xl md:mx-auto"
                        : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        className="text-primary group-hover:text-white transition-colors"
                        size={24}
                      />
                    </div>
                    <p className="text-muted leading-relaxed">{item}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
