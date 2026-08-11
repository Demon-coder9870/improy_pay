"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden w-full pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#f4f7fa] -z-20"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-white/40 to-transparent"></div>
        <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-blue-300/10 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-purple-300/5 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
      </div>

      <div className="container-main relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.span 
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono block"
          >
            About Impropay
          </motion.span>
          <motion.h1 
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight"
          >
            Empowering global <br />
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">financial inclusion</span>
          </motion.h1>
          <motion.p 
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="body-md text-[--text-body] max-w-lg mx-auto"
          >
            We believe that sending money across borders should be as easy, fast, and affordable as sending a text message. Impropay is building the financial infrastructure for the future.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
