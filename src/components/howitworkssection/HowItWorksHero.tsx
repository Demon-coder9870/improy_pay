"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden w-full pt-20 pb-16 md:pt-28 md:pb-24 text-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#f4f7fa] -z-20"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-white/40 to-transparent"></div>
        <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-blue-300/10 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-purple-300/5 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
      </div>

      <div className="container-main relative z-10">
        <div className="text-left max-w-3xl mb-16">
          <motion.span 
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono block"
          >
            SIMPLE & SECURE
          </motion.span>
          <motion.h1 
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight capitalize"
          >
            Built for the way you pay. Simplified by <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">ImproPay</span>.
          </motion.h1>
          <motion.p 
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="body-md text-[--text-body] max-w-2xl"
          >
            Send money across the globe in a few taps. ImproPay makes international money transfers as easy as sending cash to a friend with real bank-grade security and transparent pricing behind every transfer.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
