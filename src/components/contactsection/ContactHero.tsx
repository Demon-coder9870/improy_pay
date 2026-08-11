"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Sparkles } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-sm"
      >
        <Sparkles size={14} className="text-cyan-300" />
        <span className="text-[0.78rem] font-bold tracking-widest uppercase font-mono text-cyan-100">
          Get In Touch
        </span>
      </motion.div>
      <motion.h1 
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
      >
        How can we{" "}
        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          help you today?
        </span>
      </motion.h1>
      <motion.p 
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-xl text-blue-100/90 max-w-xl mx-auto leading-relaxed font-normal"
      >
        Need help with a transfer, business account, or custom partnership? Our dedicated global support team is ready 24/7.
      </motion.p>
    </div>
  );
}
