"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function FaqHero() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <motion.span 
        custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono block"
      >
        Support Center
      </motion.span>
      <motion.h1 
        custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight"
      >
        Help & FAQ
      </motion.h1>
      <motion.p 
        custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="body-md text-[--text-body] max-w-lg mx-auto"
      >
        Find answers to the most common questions about using Impropay.
      </motion.p>
    </div>
  );
}
