"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { COMPANY } from "@/lib/constants";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

export default function MapSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
            Our Location
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-4xl font-black text-dark leading-tight mb-4">
            Find <span className="text-primary">Us Here</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <AnimatedSection className="lg:col-span-2" direction="left">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border/50 h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d75.92!3d10.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b1a0e2c8f8dd%3A0x1234567890abcdef!2sTirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cosmotech Engineering Solutions Location"
              />
            </div>
          </AnimatedSection>

          {/* Contact Info Cards */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex flex-col gap-6 h-full justify-center">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-dark mb-1">
                      Office Address
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {COMPANY.address.full}
                    </p>
                    <a
                      href={COMPANY.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary text-sm font-medium hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <HiPhone className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-dark mb-1">
                      Call Us
                    </h3>
                    {COMPANY.phone.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-muted text-sm hover:text-primary transition-colors block"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-dark mb-1">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-muted text-sm hover:text-primary transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                    <p className="text-muted text-xs mt-1">
                      {COMPANY.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
