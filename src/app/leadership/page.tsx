"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LEADERSHIP } from "@/lib/constants";
import { HiArrowLeft } from "react-icons/hi";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white shadow-md text-gray-700 hover:text-primary transition-all rounded-full text-xs font-bold border border-gray-200"
        >
          <HiArrowLeft size={14} />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="pt-24 lg:pt-32 pb-6 lg:pb-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            Our Core Team
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Chairman - Highlighted & Larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="group relative w-full max-w-xs sm:max-w-sm overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={LEADERSHIP.chairman.image}
                alt={LEADERSHIP.chairman.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
                  {LEADERSHIP.chairman.role}
                </span>
                <h2 className="font-heading font-black text-white text-2xl lg:text-3xl leading-tight mb-2">
                  {LEADERSHIP.chairman.name}
                </h2>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {LEADERSHIP.chairman.bio}
                </p>
                <div className="w-16 h-1 bg-primary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {LEADERSHIP.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-500 rounded-sm cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = "/images/about-engineers.png";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading font-bold text-white text-[13px] sm:text-lg lg:text-xl leading-tight mb-1 line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-[10px] sm:text-xs lg:text-sm font-medium line-clamp-2">
                    {member.role}
                  </p>
                  <div className="w-full h-[2px] bg-white/20 mt-3 sm:mt-4 overflow-hidden">
                    <div className="w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Quote */}
      <section className="py-12 lg:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-xl lg:text-3xl font-black text-gray-900 mb-4">
            Guided by Integrity &{" "}
            <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-gray-500 text-sm lg:text-base leading-relaxed italic">
            &ldquo;Our leadership team is committed to setting new benchmarks in engineering
            and telecommunications infrastructure, ensuring sustainable growth
            and technological advancement for all our partners.&rdquo;
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>
      </section>
    </main>
  );
}
