"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function WhyHero() {
  return (
    <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Animated gradient orbs for light background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-300/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-cyan-300/20 blur-[100px]" />
      </div>

      {/* Grid pattern overlay (light mode) */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm"
          >
            <TrendingUp size={14} className="text-[#217bc6]" />
            <span className="text-[0.75rem] font-bold text-[#217bc6] tracking-wide uppercase">
              Trusted across 9 payment corridors
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            The smarter way to{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              move money
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            We&apos;re on a mission to bring fairness and transparency to global
            finance. See why individuals and businesses trust ImproPay over
            traditional banks.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] text-white font-bold rounded-2xl px-8 py-4 text-[0.9375rem] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Sending
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/howitworks"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl px-8 py-4 text-[0.9375rem] hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
            >
              See how it works
            </Link>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mt-16"
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
