"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { COMPANY } from "@/lib/constants";
import { HiMail, HiPhone, HiLocationMarker, HiGlobe } from "react-icons/hi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: "Phone",
      details: COMPANY.phone,
      href: `tel:${COMPANY.phone[0]}`,
    },
    {
      icon: HiMail,
      title: "Email",
      details: [COMPANY.email],
      href: `mailto:${COMPANY.email}`,
    },
    {
      icon: HiLocationMarker,
      title: "Address",
      details: [COMPANY.address.full],
      href: COMPANY.mapLink,
    },
    {
      icon: HiGlobe,
      title: "Website",
      details: [COMPANY.website],
      href: `https://${COMPANY.website}`,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-light text-xs font-semibold rounded-full mb-4 lg:mb-6">
            Contact Us
          </span>
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight mb-3 lg:mb-4 lg:whitespace-nowrap">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-white/60 text-xs lg:text-lg max-w-2xl mx-auto px-4 lg:px-0">
            Have a project in mind? Let&apos;s discuss how we can help you achieve
            your infrastructure goals.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-white/70 mb-1 sm:mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-white/70 mb-1 sm:mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium text-white/70 mb-1 sm:mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-white/70 mb-1 sm:mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-primary text-white font-heading font-semibold text-sm sm:text-base rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                    ? "✓ Message Sent!"
                    : status === "error"
                      ? "Failed — Try Again"
                      : "Send Message"}
              </motion.button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-3 lg:space-y-6 flex flex-col justify-center">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.title === "Address" || item.title === "Website" ? "_blank" : undefined}
                  rel={item.title === "Address" || item.title === "Website" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 block cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 border border-white/5">
                      <item.icon
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                        size={20}
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-sm sm:text-base lg:text-lg text-white mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      {item.details.map((detail, j) => (
                        <p key={j} className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
