"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { SISTER_COMPANIES, CLIENTS } from "@/lib/constants";

export default function PartnershipsSection() {
  return (
    <section id="partners" className="py-20 lg:py-32 bg-cream border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs lg:text-sm font-semibold rounded-full mb-4 lg:mb-6">
            Corporate Relations
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-4xl font-black text-dark leading-tight mb-4 animate-fade-in">
            Sister Concerns Companies & <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted text-sm max-w-3xl mx-auto px-2 lg:px-0">
            Our synergy with sister concerns and partnerships with industry leaders empower us to deliver world-class infrastructure and services.
          </p>
        </AnimatedSection>

        {/* Sister Concerns Subsection */}
        <div className="mb-20">


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {SISTER_COMPANIES.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-card rounded-2xl p-4 flex flex-col items-center justify-between border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-40 lg:h-48 flex items-center justify-center bg-white rounded-xl overflow-hidden p-2">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    sizes="(max-w-768px) 50vw, 25vw"
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center w-full">
                  <h4 className="font-heading font-bold text-xs lg:text-sm text-dark line-clamp-2 min-h-[2.5rem] flex items-center justify-center px-1">
                    {company.name}
                  </h4>
                  <span className="inline-block mt-2 text-[10px] lg:text-xs text-primary font-semibold px-2 py-0.5 bg-primary/5 rounded-full">
                    {company.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clients Subsection */}
        <div>
          <AnimatedSection className="text-center mb-12">
            <h3 className="font-heading text-xl lg:text-2xl font-black text-dark relative inline-block">
              Valued Clients
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full translate-y-2" />
            </h3>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="w-72 bg-card rounded-2xl p-4 flex flex-col items-center justify-between border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-32 lg:h-36 flex items-center justify-center bg-white rounded-xl overflow-hidden p-2">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center w-full">
                  <h4 className="font-heading font-bold text-xs lg:text-sm text-dark">
                    {client.name}
                  </h4>
                  <span className="inline-block mt-2 text-[10px] lg:text-xs text-muted font-medium px-2.5 py-0.5 bg-cream rounded-full border border-border/40">
                    {client.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
