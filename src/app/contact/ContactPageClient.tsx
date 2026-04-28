"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { COMPANY } from "@/lib/constants";
import Image from "next/image";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiGlobe,
} from "react-icons/hi";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Contact Cosmotech"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-border/50">
                <h2 className="font-heading text-2xl font-bold text-dark mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border border-border rounded-xl px-4 py-3.5 text-dark placeholder-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-cream-light"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-dark mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-border rounded-xl px-4 py-3.5 text-dark placeholder-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-cream-light"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-border rounded-xl px-4 py-3.5 text-dark placeholder-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-cream-light"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-border rounded-xl px-4 py-3.5 text-dark placeholder-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none bg-cream-light"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white font-heading font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60"
                  >
                    {status === "loading"
                      ? "Sending..."
                      : status === "success"
                      ? "✓ Message Sent Successfully!"
                      : status === "error"
                      ? "Failed — Try Again"
                      : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info + Map */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                {[
                  {
                    icon: HiLocationMarker,
                    title: "Office Address",
                    content: COMPANY.address.full,
                    href: COMPANY.mapLink,
                    target: "_blank",
                  },
                  {
                    icon: HiPhone,
                    title: "Call Us",
                    content: COMPANY.phone.join(" / "),
                    href: `tel:${COMPANY.phone[0]}`,
                  },
                  {
                    icon: HiMail,
                    title: "Email Us",
                    content: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                  },
                  {
                    icon: HiGlobe,
                    title: "Website",
                    content: COMPANY.website,
                    href: `https://${COMPANY.website}`,
                    target: "_blank",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.target}
                    rel={item.target ? "noopener noreferrer" : undefined}
                    className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300 group block cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <item.icon
                          className="text-primary group-hover:text-white transition-colors"
                          size={22}
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-dark mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted text-sm group-hover:text-dark/70 transition-colors">
                          {item.content}
                        </p>
                        {item.title === "Office Address" && (
                          <span className="text-primary text-sm font-medium hover:underline mt-1 inline-block">
                            Get Directions →
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                ))}

                {/* Map */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d75.92!3d10.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b1a0e2c8f8dd%3A0x1234567890abcdef!2sTirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cosmotech Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
