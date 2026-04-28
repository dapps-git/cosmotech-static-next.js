"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { MISSION_CONTENT } from "@/lib/constants";
import { HiLightningBolt, HiGlobe, HiShieldCheck, HiTrendingUp } from "react-icons/hi";

const missionIcons = [HiLightningBolt, HiGlobe, HiShieldCheck, HiTrendingUp, HiGlobe];

export default function MissionSection() {
  return (
    <section className="py-10 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 lg:mb-16">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary-light text-[10px] lg:text-sm font-semibold rounded-full mb-4 lg:mb-6">
            Our Mission
          </span>
          <h2 className="font-heading text-lg lg:text-5xl font-black text-white leading-tight">
            Driving <span className="text-primary uppercase">Innovation</span> in
            <br className="hidden lg:block" /> Telecommunications
          </h2>
        </AnimatedSection>
 
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6">
          {MISSION_CONTENT.map((item, i) => {
            const Icon = missionIcons[i] || HiGlobe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:bg-white/10 ${
                  i === MISSION_CONTENT.length - 1 && MISSION_CONTENT.length % 2 !== 0
                    ? "col-span-2 md:col-span-1 lg:max-w-none"
                    : ""
                }`}
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl bg-primary/20 flex items-center justify-center mb-3 lg:mb-5 group-hover:bg-primary transition-all duration-300">
                  <Icon className="text-primary-light group-hover:text-white transition-colors" size={16} />
                </div>
                <p className="text-white/70 leading-relaxed text-[10px] lg:text-base group-hover:text-white/90 transition-colors duration-300">
                  {item}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
