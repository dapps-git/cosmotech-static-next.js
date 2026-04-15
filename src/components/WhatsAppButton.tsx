"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
          >
            <p className="text-sm font-semibold text-dark whitespace-nowrap">
              Chat with us!
            </p>
            <p className="text-xs text-muted">{COMPANY.phone[0]}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Cosmotech!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} className="text-white" />
      </motion.a>
    </div>
  );
}
