"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  slug,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="h-full"
    >
      <Link href={`/services/${slug}`} className="group block h-full">
        <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-40 sm:h-52 overflow-hidden shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-4 h-full">
              <div className="flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-sm sm:text-lg text-dark group-hover:text-primary transition-colors duration-300 mb-1 sm:mb-2 line-clamp-1">
                  {title}
                </h3>
                <p className="text-muted text-[10px] sm:text-sm leading-relaxed line-clamp-3 lg:line-clamp-4 flex-1">
                  {description}
                </p>
              </div>
              <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 mt-auto">
                <HiArrowRight
                  className="text-primary group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5"
                  size={18}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
