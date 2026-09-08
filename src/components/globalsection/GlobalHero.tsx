"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";
import {
  Globe2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  MapPin,
  Sparkles,
  Zap
} from "lucide-react";

export default function GlobalHero() {
  const stats = [
    { value: "9", label: "Countries & Territories", icon: Globe2 },
    { value: "99.9%", label: "Instant Delivery Rate", icon: Zap }
  ];

  return (
    <section className="relative w-full pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#f4f7fa]">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[650px] h-[650px] rounded-full bg-blue-300/20 blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-[130px] animate-pulse-slow" />
        <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-purple-300/15 blur-[110px]" />
      </div>

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-blue-50/90 border border-blue-200/80 rounded-full px-4 py-1.5 shadow-sm"
            >
              <Globe2 size={14} className="text-[#217bc6]" />
              <span className="text-[0.75rem] font-bold text-[#217bc6] tracking-wide uppercase">
                Global Infrastructure & Payout Network
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]"
            >
              Connect with loved ones in{" "}
              <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
                9 countries
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              ImproPay powers borderless financial freedom with real-time settlement, bank-grade encryption, and zero hidden markups.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] text-white font-bold rounded-2xl px-8 py-4 text-[0.9375rem] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Money Globally
                <ArrowRight size={18} />
              </Link>
              <a
                href="#country-explorer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl px-8 py-4 text-[0.9375rem] hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Countries & Corridors
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80"
            >
              {stats.map((stat, sIdx) => {
                const Icon = stat.icon;
                return (
                  <div key={sIdx} className="text-left">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 3D Holographic Globe Image Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-3">
              <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                <Image
                  src="/images/global_presence_map.png"
                  alt="Impropay Global Presence 3D Network Map"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Status Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-xs font-bold text-white">Live Global Network</div>
                      <div className="text-[10px] text-white/60">3,400+ Transfers Per Minute</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-lg text-xs font-bold">
                    100% Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

