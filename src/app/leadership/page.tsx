"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LEADERSHIP } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import { HiArrowLeft, HiMail } from "react-icons/hi";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors mb-4 group text-xs font-bold"
          >
            <HiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            BACK
          </Link>

          <AnimatedSection>
            <h1 className="font-heading text-lg lg:text-3xl font-black text-dark leading-tight">
              THE PEOPLE BEHIND <span className="text-primary italic">COSMOTECH</span>
            </h1>
          </AnimatedSection>
        </div>

        {/* Leadership Grid - Ultra Compact */}
        <section className="max-w-4xl mx-auto">
          {/* Chairman */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-[160px] lg:max-w-[240px]"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-primary/20 text-center">
                <div className="relative w-full h-40 lg:h-56 overflow-hidden">
                  <Image
                    src={LEADERSHIP.chairman.image}
                    alt={LEADERSHIP.chairman.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-heading font-black text-xs lg:text-lg text-dark truncate">
                    {LEADERSHIP.chairman.name}
                  </h3>
                  <span className="text-primary font-bold text-[8px] lg:text-xs uppercase block">
                    CHAIRMAN
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Other Members - Grid 3 columns */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
            {LEADERSHIP.members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 text-center flex flex-col h-full">
                  <div className="relative h-24 sm:h-24 lg:h-48 bg-stone-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover object-center ${member.name === "Dilshad" ? "object-[50%_35%] scale-[1.3]" : ""}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/about-engineers.png";
                      }}
                    />
                  </div>

                  <div className="p-1 lg:p-3 flex-1 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-[8px] lg:text-sm text-dark leading-tight truncate">
                      {member.name}
                    </h3>
                    <span className="text-primary font-bold text-[6px] lg:text-[10px] uppercase block truncate tracking-tighter">
                      {member.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Philosophy Section */}
      <section className="py-8 bg-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-lg sm:text-xl font-black mb-3">
              Guided by Integrity & <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-white/60 text-[10px] lg:text-base leading-relaxed mb-4 italic">
              "Our leadership team is committed to setting new benchmarks in the engineering
              and telecommunications infrastructure industry, ensuring sustainable growth
              and technological advancement for all our partners."
            </p>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
