"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Banknote,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  BarChart3,
  Fingerprint,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

const highlights = [
  {
    icon: Banknote,
    title: "Save up to 8× on fees",
    description:
      "Banks add hidden markups to exchange rates. With ImproPay, you always get the real mid-market rate with zero markup.",
    stat: "8×",
    statLabel: "cheaper fees",
    gradient: "from-[#10b981] to-[#059669]",
    glowColor: "rgba(16, 185, 129, 0.25)",
    dotColor: "bg-emerald-500",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(16,185,129,0.2) 0%, transparent 60%)",
  },
  {
    icon: Rocket,
    title: "Instant global settlement",
    description:
      "Over 70% of our transfers arrive in under 20 seconds. No waiting days for obsolete SWIFT legacy hops.",
    stat: "70%",
    statLabel: "under 20s",
    gradient: "from-[#0ea5e9] to-[#2563eb]",
    glowColor: "rgba(14, 165, 233, 0.25)",
    dotColor: "bg-cyan-500",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(14,165,233,0.2) 0%, transparent 60%)",
  },
  {
    icon: ShieldCheck,
    title: "Tier-1 regulated security",
    description:
      "Licensed across major global jurisdictions with 256-bit TLS encryption, strict segregated client accounts, and AI fraud watch.",
    stat: "256-bit",
    statLabel: "encryption",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    glowColor: "rgba(139, 92, 246, 0.25)",
    dotColor: "bg-purple-500",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.2) 0%, transparent 60%)",
  },
  {
    icon: HeartHandshake,
    title: "Built for real people",
    description:
      "Whether you're supporting family back home or paying international remote teams — crafted for human convenience.",
    stat: "9",
    statLabel: "countries",
    gradient: "from-[#f43f5e] to-[#e11d48]",
    glowColor: "rgba(244, 63, 94, 0.25)",
    dotColor: "bg-rose-500",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(244,63,94,0.2) 0%, transparent 60%)",
  },
  {
    icon: Sparkles,
    title: "Always-on human support",
    description:
      "No bots or endless menus. Connect with our dedicated, multilingual support experts whenever you need help.",
    stat: "Dedicated",
    statLabel: "live support",
    gradient: "from-[#f59e0b] to-[#ea580c]",
    glowColor: "rgba(245, 158, 11, 0.25)",
    dotColor: "bg-amber-500",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(245,158,11,0.2) 0%, transparent 60%)",
  },
  {
    icon: Fingerprint,
    title: "Frictionless AI verification",
    description:
      "Verify your identity in under 3 minutes with biometric AI document matching. Zero tedious paperwork or branch queues.",
    stat: "< 3 mins",
    statLabel: "fast onboarding",
    gradient: "from-[#06b6d4] to-[#0284c7]",
    glowColor: "rgba(6, 182, 212, 0.25)",
    dotColor: "bg-sky-500",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(6,182,212,0.2) 0%, transparent 60%)",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      {/* Ambient Liquid Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 left-1/4 w-[600px] h-[500px] bg-gradient-to-br from-blue-400/15 via-cyan-300/10 to-transparent rounded-full blur-[130px] animate-pulse-slow" />
        <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-gradient-to-tl from-purple-400/15 via-indigo-300/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 left-1/3 w-[500px] h-[450px] bg-gradient-to-tr from-emerald-300/15 via-blue-300/10 to-transparent rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-5 bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(33,123,198,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-white/90">
            <Sparkles size={14} className="text-[#217bc6]" />
            <span className="text-[0.78rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono">
              Why It Matters
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Every feature, built with{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              purpose
            </span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-slate-600">
            We obsess over the architectural details that make global money transfers effortless, fair, and lightning fast.
          </p>
        </motion.div>

        {/* Liquid Glass Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={idx}
                variants={fadeUp}
                className="group relative"
              >
                {/* Exterior Liquid Glow on Hover */}
                <div
                  className="absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none -z-10"
                  style={{
                    background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Glass Card Container */}
                <div className="relative rounded-3xl p-7 md:p-8 overflow-hidden transition-all duration-500 bg-white/60 hover:bg-white/85 backdrop-blur-2xl border border-white/80 hover:border-white shadow-[0_8px_32px_rgba(33,123,198,0.06),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_48px_rgba(33,123,198,0.12),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-2 h-full flex flex-col justify-between">
                  {/* Liquid Mesh Inner Refraction */}
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                    style={{ background: item.liquidMesh }}
                  />

                  {/* Specular Highlight on Card Top */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

                  {/* Card Content Top Row */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between mb-6">
                      {/* Frosted Liquid Glass Icon Container */}
                      <div className="relative p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(33,123,198,0.18)] transition-all duration-500">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-sm`}
                        >
                          <Icon size={20} strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Stat Pill Badge */}
                      <div className="flex flex-col items-end">
                        <span
                          className={`text-xl md:text-2xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent tracking-tight`}
                        >
                          {item.stat}
                        </span>
                        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                          {item.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#217bc6] transition-colors duration-300 flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-slate-300 group-hover:text-[#217bc6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </h3>
                    <p className="text-sm md:text-[0.9375rem] text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Indicator Bar */}
                  <div className="relative z-10 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.dotColor} animate-pulse`} />
                      <span className="text-xs font-semibold text-slate-500">
                        Guaranteed Protection
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#217bc6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more →
                    </span>
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

