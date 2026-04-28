"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text Content */}
          <AnimatedSection direction="left">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] lg:text-sm font-semibold rounded-full mb-4 lg:mb-6">
                About Us
              </span>
              <h2 className="font-heading text-lg lg:text-4xl font-black text-dark leading-tight mb-4 lg:mb-6">
                <span className="text-primary uppercase">Comprehensive</span>
                <br />
                <span className="text-primary uppercase">Engineering</span>
                <br />
                SOLUTIONS
              </h2>
              <p className="text-muted text-xs lg:text-lg leading-relaxed mb-4">
                {ABOUT_CONTENT.intro}
              </p>
              <blockquote className="border-l-2 lg:border-l-4 border-primary pl-4 lg:pl-6 py-1 mb-4">
                <p className="text-dark/80 text-xs lg:text-base leading-relaxed">
                  &ldquo;{ABOUT_CONTENT.vision}&rdquo;
                </p>
              </blockquote>
              <p className="text-muted text-xs lg:text-base leading-relaxed mb-4">
                {ABOUT_CONTENT.history}
              </p>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl shadow-primary/10">
                <Image
                  src="/images/about-engineers.png"
                  alt="Engineering excellence"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-2 -right-2 lg:bottom-6 lg:right-6 bg-white rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-xl border border-primary/10">
                <div className="text-center">
                  <span className="text-xl lg:text-3xl font-heading font-black text-primary block">
                    3+
                  </span>
                  <span className="text-[8px] lg:text-xs font-medium text-muted uppercase tracking-wider">
                    Years
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
