"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ShieldCheck, Zap, Eye, Sparkles } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Your funds and personal data are protected by bank-level encryption, segregated Tier-1 accounts, and real-time fraud monitoring systems.",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    glowColor: "rgba(139, 92, 246, 0.22)",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.18) 0%, transparent 60%)",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description:
      "Time is money. We've built direct routing networks to ensure your international transfers arrive in seconds, not days.",
    gradient: "from-[#0ea5e9] to-[#2563eb]",
    glowColor: "rgba(14, 165, 233, 0.22)",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(14,165,233,0.18) 0%, transparent 60%)",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No hidden fees, zero markup on exchange rates. You see the live mid-market rate and every penny accounted for upfront.",
    gradient: "from-[#10b981] to-[#059669]",
    glowColor: "rgba(16, 185, 129, 0.22)",
    liquidMesh: "radial-gradient(circle at 85% 15%, rgba(16,185,129,0.18) 0%, transparent 60%)",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      <div className="container-main relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(33,123,198,0.12)]">
            <Sparkles size={14} className="text-[#217bc6]" />
            <span className="text-[0.78rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono">
              What Drives Us
            </span>
          </div>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Our Core{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              Values
            </span>
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} custom={i} variants={fadeUp} className="group relative">
                {/* Exterior Glow */}
                <div
                  className="absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none -z-10"
                  style={{ background: `radial-gradient(circle, ${v.glowColor} 0%, transparent 70%)` }}
                />

                {/* Liquid Glass Card */}
                <div className="relative rounded-3xl p-8 overflow-hidden transition-all duration-500 bg-white/60 hover:bg-white/85 backdrop-blur-2xl border border-white/80 hover:border-white shadow-[0_8px_32px_rgba(33,123,198,0.06),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_48px_rgba(33,123,198,0.12),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-2 h-full flex flex-col justify-between">
                  {/* Liquid Mesh */}
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                    style={{ background: v.liquidMesh }}
                  />
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white`}>
                        <Icon size={22} />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#217bc6] transition-colors">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-[0.9375rem]">{v.description}</p>
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
