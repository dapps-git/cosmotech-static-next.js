"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { PARTNERS } from "@/lib/constants";

// Generate color maps for partner logos
const partnerColors = [
  "from-blue-500 to-blue-700",
  "from-orange-500 to-red-600",
  "from-green-500 to-teal-600",
  "from-purple-500 to-indigo-600",
  "from-cyan-500 to-blue-600",
  "from-yellow-500 to-orange-600",
];

export default function PartnershipsSection() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
            Our Network
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-4">
            Trusted Partnerships with
            <br />
            <span className="text-primary">Leading MNCs</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            COSMOTECH ENGINEERING SOLUTIONS L.L.P takes immense pride in our strong
            affiliation with renowned multinational corporations through our parent
            conglomerate, the &quot;Cosmos Group.&quot;
          </p>
        </AnimatedSection>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-card rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-lg border border-border/50 transition-shadow duration-300 cursor-pointer group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partnerColors[i]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white font-heading font-black text-xl">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <span className="font-heading font-semibold text-sm text-dark text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            These esteemed partnerships stand as a testament to our credibility,
            expertise, and commitment to delivering exceptional services.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
