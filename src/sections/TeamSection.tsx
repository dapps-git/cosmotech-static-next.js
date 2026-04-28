"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { RESPONSIBILITIES, SAFETY_POLICY } from "@/lib/constants";
import {
  HiUserGroup,
  HiShieldCheck,
  HiCheckCircle,
  HiBadgeCheck,
  HiArrowRight,
} from "react-icons/hi";

const teamMembers = [
  "Architects",
  "Engineers",
  "Technicians",
  "Quality Analysts",
  "Sales & Marketing Professionals",
  "Skilled Workers",
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 lg:py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Header */}
        <AnimatedSection className="text-center mb-8 lg:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs lg:text-sm font-semibold rounded-full mb-4 lg:mb-6">
            Our Team
          </span>
          <h2 className="font-heading text-xl lg:text-3xl font-black text-dark leading-tight mb-3 lg:mb-4">
            Expert <span className="text-primary">Team Work</span>
          </h2>
          <p className="text-muted text-sm lg:text-md max-w-3xl mx-auto">
            Our team of experts and professional engineers including architects,
            designers, civil engineers, and other specialists bring years of experience
            in the field of civil and telecom engineering.
          </p>
        </AnimatedSection>
 
        {/* Team Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 mb-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl lg:rounded-2xl p-2 lg:p-4 text-center shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full flex flex-col items-center justify-center min-h-[80px] lg:min-h-[110px]"
            >
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 shrink-0">
                <HiUserGroup className="text-primary" size={18} />
              </div>
              <span className="text-[9px] lg:text-sm font-semibold text-dark leading-tight">{member}</span>
            </motion.div>
          ))}
        </div>

        {/* Meet Leadership Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
          >
            Meet Our Leadership Team
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Responsibilities & Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Responsibilities */}
          <AnimatedSection direction="left">
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <HiCheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-dark">
                  Our Responsibilities
                </h3>
              </div>
              <ul className="space-y-3">
                {RESPONSIBILITIES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Safety Policy */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <HiShieldCheck className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-dark">
                  Safety Policy
                </h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {SAFETY_POLICY.intro}
              </p>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-sm text-dark mb-3 flex items-center gap-2">
                  <HiBadgeCheck className="text-primary" size={18} />
                  Certifications
                </h4>
                <div className="space-y-2">
                  {SAFETY_POLICY.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="bg-primary/5 rounded-xl px-4 py-3 text-sm text-dark/80 font-medium"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Environmental */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-dark mb-3">
                  Environmental Conservation
                </h4>
                <ul className="space-y-2">
                  {SAFETY_POLICY.environmental.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span className="text-muted text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
