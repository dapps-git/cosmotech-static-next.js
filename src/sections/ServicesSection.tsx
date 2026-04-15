"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Comprehensive engineering solutions covering telecom infrastructure, civil works,
            electrical systems, and more.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
