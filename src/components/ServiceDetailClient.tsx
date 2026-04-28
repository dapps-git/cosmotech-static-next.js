"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import {
  HiCheckCircle,
  HiArrowRight,
  HiPhone,
} from "react-icons/hi";
import TrustedMarquee from "@/components/TrustedMarquee";

interface ServiceDetailProps {
  serviceSlug: string;
}

export default function ServiceDetailClient({ serviceSlug }: ServiceDetailProps) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const otherServices = SERVICES.filter((s) => s.slug !== serviceSlug);

  if (!service) return null;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-6"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-primary-light">{service.title}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <AnimatedSection>
                <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection delay={0.1}>
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">
                  Our <span className="text-primary">{service.title}</span> Services
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-12">
                  {service.description} Our experienced team delivers high-quality solutions
                  with a focus on safety, efficiency, and long-term reliability. We work closely
                  with our clients to understand their specific needs and deliver tailored solutions
                  that exceed expectations.
                </p>
              </AnimatedSection>

              {/* Features */}
              <div className="space-y-6">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary transition-colors duration-300">
                        <HiCheckCircle className="text-primary group-hover:text-white transition-colors" size={22} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <AnimatedSection delay={0.3} className="mt-12">
                <div className="bg-dark rounded-3xl p-8 lg:p-12 text-center">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-white/60 mb-8 max-w-lg mx-auto">
                    Contact us today to discuss your {service.title.toLowerCase()} requirements.
                    Our team is ready to help.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/contact"
                      className="px-8 py-3.5 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2"
                    >
                      Contact Us
                      <HiArrowRight />
                    </Link>
                    <a
                      href="tel:+918089401777"
                      className="px-8 py-3.5 bg-white/10 text-white font-heading font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                    >
                      <HiPhone />
                      Call Now
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Other Services */}
                <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
                  <h3 className="font-heading font-bold text-lg text-dark mb-4 pb-4 border-b border-border/50">
                    Other Services
                  </h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
                      >
                        <HiArrowRight
                          className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all"
                          size={16}
                        />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 text-white">
                  <h3 className="font-heading font-bold text-lg mb-3">
                    Need Help?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our team is available to answer your questions and provide expert guidance.
                  </p>
                  <a
                    href="tel:+918089401777"
                    className="flex items-center gap-2 text-white font-semibold hover:underline"
                  >
                    <HiPhone size={18} />
                    +91 8089401777
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustedMarquee />
    </>
  );
}
