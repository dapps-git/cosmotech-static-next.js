"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LEADERSHIP } from "@/lib/constants";
import { HiArrowLeft } from "react-icons/hi";

export default function LeadershipPage() {
  const leadershipCards = [LEADERSHIP.chairman, ...LEADERSHIP.members];
  const topRowCards = leadershipCards.slice(0, 3);
  const remainingCards = leadershipCards.slice(3);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white shadow-sm text-gray-700 hover:text-primary transition-all rounded-full text-xs font-bold border border-gray-200"
          >
            <HiArrowLeft size={14} />
            Back
          </Link>
        </div>
        {/* Top Leadership Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center items-end mb-6 lg:mb-10">
          {topRowCards.map((member, i) => {
            const isChairman = i === 0;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-sm cursor-pointer w-full ${isChairman
                  ? "max-w-[310px]"
                  : "max-w-[270px] self-end"
                  }`}
              >
                <div
                  className="relative w-full overflow-hidden aspect-[4/5]"
                >


                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = "/images/about-engineers.png";
                    }}
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-100 transition-opacity duration-500 ${isChairman
                      ? "via-black/30 opacity-80"
                      : "via-black/20 opacity-70"
                      }`}
                  />

                  <div
                    className={`absolute bottom-0 left-0 right-0 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${isChairman
                      ? "p-5 lg:p-6"
                      : "p-3 sm:p-4"
                      }`}
                  >
                    <h2
                      className={`font-heading text-white leading-tight ${isChairman
                        ? "font-black text-xl lg:text-2xl mb-2"
                        : "font-bold text-sm sm:text-lg"
                        }`}
                    >
                      {member.name}
                    </h2>

                    <p
                      className={`font-medium ${isChairman
                        ? "text-white/80 text-sm mb-3 line-clamp-2"
                        : "text-gray-300 text-xs sm:text-sm line-clamp-2"
                        }`}
                    >
                      {member.role}
                    </p>

                    {isChairman && (
                      <p className="text-white/80 text-sm mb-4 line-clamp-2 max-w-xs">
                        {member.bio}
                      </p>
                    )}

                    <div
                      className={`bg-white/20 overflow-hidden ${isChairman
                        ? "w-16 h-1 rounded-full"
                        : "w-full h-[2px] mt-3"
                        }`}
                    >
                      <div
                        className={`h-full bg-primary transition-transform duration-500 ease-out ${isChairman
                          ? "origin-left scale-x-0 group-hover:scale-x-100"
                          : "w-full -translate-x-full group-hover:translate-x-0"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Remaining Leadership Members */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center items-start">
          {remainingCards.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer max-w-[270px] w-full"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = "/images/about-engineers.png";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h2 className="font-heading font-bold text-white text-sm sm:text-lg leading-tight mb-1">
                    {member.name}
                  </h2>

                  <p className="text-gray-300 text-xs sm:text-sm font-medium line-clamp-2">
                    {member.role}
                  </p>

                  <div className="w-full h-[2px] bg-white/20 mt-3 overflow-hidden">
                    <div className="w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
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
            <span className="text-primary">Excellence </span>
          </h2>

          <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
            &ldquo;Our leadership team is committed to setting new benchmarks in
            engineering and telecommunications infrastructure, ensuring
            sustainable growth and technological advancement for all our
            partners&rdquo;
          </p>

          <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>
      </section>
    </main>
  );
}