"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Shield,
  Zap,
  Globe2,
  BadgePercent,
  Headphones,
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

const BENEFITS = [
  {
    icon: Shield,
    badge: "256-Bit Security",
    title: "Bank-Grade Encryption",
    description:
      "Your personal information and funds are protected with TLS 1.3 encryption and round-the-clock fraud monitoring, so every transfer stays private and secure.",
    gradient: "from-[#0ea5e9] to-[#2563eb]",
    glowColor: "rgba(14, 165, 233, 0.22)",
    accentColor: "text-cyan-600",
    dotColor: "bg-cyan-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(14,165,233,0.18) 0%, transparent 60%)",
  },
  {
    icon: Zap,
    badge: "Under 2 Minutes",
    title: "Lightning-Fast Delivery",
    description:
      "Most transfers arrive in under 2 minutes, sent directly to bank accounts or mobile wallets with instant delivery confirmation.",
    gradient: "from-[#10b981] to-[#059669]",
    glowColor: "rgba(16, 185, 129, 0.22)",
    accentColor: "text-emerald-600",
    dotColor: "bg-emerald-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(16,185,129,0.18) 0%, transparent 60%)",
  },
  {
    icon: Globe2,
    badge: "9 Countries",
    title: "Global Payout Network",
    description:
      "Send money to 9 countries at guaranteed, competitive mid-market exchange rates.",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    glowColor: "rgba(139, 92, 246, 0.22)",
    accentColor: "text-purple-600",
    dotColor: "bg-purple-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.18) 0%, transparent 60%)",
  },
  {
    icon: BadgePercent,
    badge: "$0 Hidden Fees",
    title: "Zero Hidden Markups",
    description:
      "What you see at checkout is what your recipient gets — transparent pricing with no inflated exchange-rate margins.",
    gradient: "from-[#f59e0b] to-[#ea580c]",
    glowColor: "rgba(245, 158, 11, 0.22)",
    accentColor: "text-amber-600",
    dotColor: "bg-amber-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.18) 0%, transparent 60%)",
  },
  {
    icon: Smartphone,
    badge: "iOS & Android",
    title: "Mobile App Convenience",
    description:
      "Track transfers, save frequent recipients, and send money on the go — secured with biometric Face ID authentication.",
    gradient: "from-[#06b6d4] to-[#0284c7]",
    glowColor: "rgba(6, 182, 212, 0.22)",
    accentColor: "text-sky-600",
    dotColor: "bg-sky-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.18) 0%, transparent 60%)",
  },
  {
    icon: Headphones,
    badge: "24/7 Support",
    title: "Dedicated Human Support",
    description:
      "Reach a real person anytime via live chat, WhatsApp, or phone, whenever you need help with a transfer.",
    gradient: "from-[#f43f5e] to-[#e11d48]",
    glowColor: "rgba(244, 63, 94, 0.22)",
    accentColor: "text-rose-600",
    dotColor: "bg-rose-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(244,63,94,0.18) 0%, transparent 60%)",
  }
];

export default function FeaturesBenefits() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      {/* Dynamic Fluid Liquid Background Mesh Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Ambient Top Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-br from-blue-400/20 via-cyan-300/15 to-purple-400/10 rounded-full blur-[140px] animate-pulse-slow" />
        
        {/* Floating Fluid Liquid Blobs */}
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-indigo-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-purple-400/20 via-pink-400/15 to-rose-400/10 rounded-full blur-[130px] animate-float-delayed" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[450px] bg-gradient-to-r from-emerald-400/15 via-teal-300/15 to-blue-400/10 rounded-full blur-[130px]" />
        
        {/* Subtle Liquid Specular Caustic Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(33, 123, 198, 0.8) 1px, transparent 1px), radial-gradient(rgba(99, 102, 241, 0.6) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px"
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          {/* Liquid Glass Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-5 bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(33,123,198,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-white/90">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#217bc6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#217bc6]" />
            </span>
            <Sparkles size={14} className="text-[#217bc6]" />
            <span className="text-[0.78rem] font-bold tracking-widest text-[#217bc6] uppercase">
              The Impropay Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Confidence in every send.{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent drop-shadow-sm">
              Clarity in every step.
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Your money deserves more than speed. It deserves trusted security, transparent pricing, and a platform built to protect every transfer.
          </p>
        </motion.div>

        {/* Feature Cards Grid with Liquid Glass Aesthetic */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-[2rem] p-[1px] transition-all duration-500 flex flex-col"
              >
                {/* Liquid Outer Glass Ring / Dynamic Border Sheen */}
                <div 
                  className="absolute inset-0 rounded-[2rem] transition-opacity duration-500 opacity-60 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.85) 100%)`
                  }}
                />

                {/* Liquid Glass Body */}
                <div 
                  className="relative z-10 w-full h-full rounded-[31px] p-7 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 backdrop-blur-2xl backdrop-saturate-[190%] bg-gradient-to-b from-white/75 via-white/50 to-white/65 hover:from-white/85 hover:via-white/60 hover:to-white/80 shadow-[0_10px_35px_-8px_rgba(15,23,42,0.06),inset_0_1.5px_2px_0_rgba(255,255,255,0.9),inset_0_-1px_1.5px_0_rgba(0,0,0,0.03)]"
                  style={{
                    boxShadow: undefined
                  }}
                >
                  {/* Subtle Inner Liquid Mesh Glow Layer */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: benefit.liquidMesh,
                      filter: "blur(20px)"
                    }}
                  />

                  {/* Top Specular Rim Reflection Bar */}
                  <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

                  {/* Liquid Diagonal Light Sweep Reflection on Hover */}
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  <div className="relative z-20">
                    {/* Header Row: Icon Pod + Frosted Pill Badge */}
                    <div className="flex items-center justify-between mb-6">
                      {/* 3D Liquid Droplet Icon Container */}
                      <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-b from-white/90 via-white/40 to-white/10 shadow-[0_6px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        <div 
                          className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white relative overflow-hidden shadow-inner`}
                        >
                          {/* Top bubble highlight */}
                          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-[14px] pointer-events-none" />
                          <Icon size={22} className="relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Frosted Glass Pill Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.03)] text-slate-700 text-[11px] font-bold group-hover:bg-white/90 transition-all duration-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${benefit.dotColor} shadow-[0_0_6px_currentColor]`} />
                        <span>{benefit.badge}</span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#217bc6] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Liquid Card Bottom Sub-bar */}
                  <div className="relative z-20 mt-7 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shadow-sm">
                        <CheckCircle2 size={12} className="stroke-[2.5]" />
                      </div>
                      <span className="tracking-tight">Guaranteed with every transfer</span>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-slate-400 group-hover:text-[#217bc6] group-hover:bg-white group-hover:border-blue-200 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-sm">
                      <ArrowUpRight size={13} className="stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

