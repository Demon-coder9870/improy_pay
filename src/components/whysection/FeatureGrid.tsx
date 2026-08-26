"use client";

import {
  ShieldCheck,
  Zap,
  DollarSign,
  Globe2,
  Clock,
  Smartphone,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: DollarSign,
    badge: "Best Rates",
    title: "Transparent Fees",
    description:
      "We use the real, mid-market rate and charge a small, transparent fee upfront. No hidden charges ever.",
    gradient: "from-[#0ea5e9] to-[#2563eb]",
    glowColor: "rgba(14, 165, 233, 0.22)",
    dotColor: "bg-cyan-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(14,165,233,0.18) 0%, transparent 60%)",
  },
  {
    icon: Zap,
    badge: "< 20 Seconds",
    title: "Lightning Fast",
    description:
      "Over 70% of our transfers arrive instantly — under 20 seconds. When you need to send money urgently, we deliver.",
    gradient: "from-[#10b981] to-[#059669]",
    glowColor: "rgba(16, 185, 129, 0.22)",
    dotColor: "bg-emerald-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(16,185,129,0.18) 0%, transparent 60%)",
  },
  {
    icon: ShieldCheck,
    badge: "Bank Grade",
    title: "Bank-level Security",
    description:
      "Regulated by financial authorities worldwide with 256-bit encryption and advanced fraud prevention.",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    glowColor: "rgba(139, 92, 246, 0.22)",
    dotColor: "bg-purple-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.18) 0%, transparent 60%)",
  },
  {
    icon: Globe2,
    badge: "8+ Currencies",
    title: "Global Reach",
    description:
      "Send money to 9 countries in 8+ currencies. Family in India or a partner in Europe — we connect the world.",
    gradient: "from-[#f59e0b] to-[#ea580c]",
    glowColor: "rgba(245, 158, 11, 0.22)",
    dotColor: "bg-amber-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.18) 0%, transparent 60%)",
  },
  {
    icon: Clock,
    badge: "Always On",
    title: "Dedicated Support",
    description:
      "Our dedicated support team is available around the clock. Need help with a transfer? We're just a message away.",
    gradient: "from-[#06b6d4] to-[#0284c7]",
    glowColor: "rgba(6, 182, 212, 0.22)",
    dotColor: "bg-sky-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.18) 0%, transparent 60%)",
  },
  {
    icon: Smartphone,
    badge: "Top Rated",
    title: "Easy to Use App",
    description:
      "Manage transfers, track rates, and add recipients from our top-rated mobile app. Your global wallet in your pocket.",
    gradient: "from-[#f43f5e] to-[#e11d48]",
    glowColor: "rgba(244, 63, 94, 0.22)",
    dotColor: "bg-rose-500",
    liquidMesh: "radial-gradient(circle at 80% 20%, rgba(244,63,94,0.18) 0%, transparent 60%)",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      {/* Ambient Liquid Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-20 right-1/4 w-[600px] h-[500px] bg-gradient-to-br from-blue-400/20 via-cyan-300/15 to-transparent rounded-full blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-purple-400/15 via-pink-400/15 to-transparent rounded-full blur-[130px] animate-float" />
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
              Core Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Everything you need,{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              nothing you don&apos;t
            </span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-slate-600">
            A comprehensive platform designed for speed, security, and simplicity.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-[2rem] p-[1px] transition-all duration-500 flex flex-col"
              >
                {/* Liquid Outer Glass Ring */}
                <div 
                  className="absolute inset-0 rounded-[2rem] transition-opacity duration-500 opacity-60 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.85) 100%)`
                  }}
                />

                {/* Liquid Glass Body */}
                <div className="relative z-10 w-full h-full rounded-[31px] p-7 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 backdrop-blur-2xl backdrop-saturate-[190%] bg-gradient-to-b from-white/75 via-white/50 to-white/65 hover:from-white/85 hover:via-white/60 hover:to-white/80 shadow-[0_10px_35px_-8px_rgba(15,23,42,0.06),inset_0_1.5px_2px_0_rgba(255,255,255,0.9),inset_0_-1px_1.5px_0_rgba(0,0,0,0.03)]">
                  {/* Subtle Inner Liquid Mesh Glow Layer */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: f.liquidMesh,
                      filter: "blur(20px)"
                    }}
                  />

                  {/* Top Specular Rim Reflection Bar */}
                  <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

                  {/* Liquid Diagonal Light Sweep */}
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  <div className="relative z-20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-b from-white/90 via-white/40 to-white/10 shadow-[0_6px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        <div className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white relative overflow-hidden shadow-inner`}>
                          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-[14px] pointer-events-none" />
                          <Icon size={22} className="relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.03)] text-slate-700 text-[11px] font-bold group-hover:bg-white/90 transition-all duration-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${f.dotColor} shadow-[0_0_6px_currentColor]`} />
                        <span>{f.badge}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#217bc6] transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal mb-4">
                      {f.description}
                    </p>
                  </div>

                  <div className="relative z-20 mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#217bc6] group-hover:translate-x-1 transition-transform duration-300">
                      Learn more <ArrowRight size={13} />
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

