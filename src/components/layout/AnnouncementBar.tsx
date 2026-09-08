"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="announcement-gradient text-white relative z-50"
        >
          <div className="container-main flex items-center justify-center py-2.5 gap-4 text-[0.8125rem] font-medium tracking-wide">
            <span className="hidden sm:inline opacity-90">
              🚀 Introducing instant transfers to 9 countries
            </span>
            <span className="sm:hidden opacity-90 text-xs">
              🚀 Instant transfers to 9 countries
            </span>
            <Link
              href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              Learn more
              <ArrowRight size={10} />
            </Link>
          </div>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close announcement"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/15 transition-colors duration-200"
          >
            <X size={13} strokeWidth={2.5} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
