"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <AnimatedSection direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                About Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-6">
                <span className="text-primary">COMPREHENSIVE</span>
                <br />
                <span className="text-primary">ENGINEERING</span>
                <br />
                SOLUTIONS
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
                {ABOUT_CONTENT.intro}
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 mb-6">
                <p className="text-dark/80 italic text-base leading-relaxed">
                  &ldquo;{ABOUT_CONTENT.vision}&rdquo;
                </p>
              </blockquote>
              <p className="text-muted text-base leading-relaxed mb-6">
                {ABOUT_CONTENT.history}
              </p>
              <p className="text-muted text-base leading-relaxed">
                {ABOUT_CONTENT.commitment}
              </p>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/about-engineers.png"
                  alt="Cosmotech engineers working on telecommunications infrastructure"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-3xl -z-10" />
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <span className="text-3xl font-heading font-black text-primary block">
                    3+
                  </span>
                  <span className="text-xs font-medium text-muted uppercase tracking-wider">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
