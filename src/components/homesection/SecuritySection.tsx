"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Countries reachable" },
  { value: "9", label: "Live global corridors" },
  { value: "4", label: "Continents, one team" },
  { value: "4.8★", label: "Loved by senders" },
];

const partners = [
  {
    status: "ACTIVE SDK",
    statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    title: "LuLu Exchange",
    desc: "Our app runs on LuLu Exchange's secure, regulated payment rails — fast, compliant transfers end to end.",
  },
  {
    status: "ON THE ROADMAP",
    statusColor: "bg-slate-100 text-slate-600 border border-slate-200/50",
    title: "Remittance network",
    desc: "Direct cross-border payouts scaling toward 196 corridors as we grow our internal reach.",
  },
];

export default function SecuritySection() {
  const [activeStatIdx, setActiveStatIdx] = useState<number | null>(1); // 2nd card active by default

  return (
    <section className="py-14 md:py-20 bg-[#FAFBFE] overflow-hidden">
      <div className="container-main">
        
        {/* Stats Row (Top) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const isActive = activeStatIdx === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveStatIdx(i)}
                onMouseLeave={() => setActiveStatIdx(1)}
                className={`rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 text-center border transition-all duration-300 cursor-default ${
                  isActive
                    ? "bg-gradient-to-br from-[#217bc6] to-[#3a91db] text-white border-[#217bc6] shadow-[0_15px_30px_rgba(33,123,198,0.15)] scale-[1.03]"
                    : "bg-white text-[--text-primary] border-slate-200/60 shadow-sm hover:border-[#217bc6]/30"
                }`}
              >
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 font-mono">
                {stat.value}
              </h3>
              <p className={`text-[0.75rem] md:text-[0.8125rem] font-bold tracking-wide ${
                isActive ? "text-white/80" : "text-slate-400"
              }`}>
                {stat.label}
              </p>
            </div>
            );
          })}
        </div>

        {/* Info & Partners Section (Bottom) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Heading and text */}
          <div className="lg:col-span-5 max-w-md">
            <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono block mb-4">
              Trusted Rails
            </span>
            <h2 className="section-heading mb-5 font-extrabold text-[--text-primary] tracking-tight leading-tight">
              Powered by partners you already know.
            </h2>
            <p className="body-md text-[--text-body]">
              A reliable, compliant network under the hood — so speed and security are never a trade-off.
            </p>
          </div>

          {/* Right: Partner Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 w-full">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-[24px] border border-slate-200/60 p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
              >
                {/* Status Badge */}
                <span className={`text-[0.6875rem] font-extrabold tracking-wider rounded-md px-2 py-1 mb-5 uppercase ${partner.statusColor}`}>
                  {partner.status}
                </span>
                
                {/* Title */}
                <h3 className="text-[1.125rem] font-extrabold text-[--text-primary] mb-3 tracking-tight">
                  {partner.title}
                </h3>
                
                {/* Description */}
                <p className="text-[0.8125rem] font-medium leading-relaxed text-slate-500">
                  {partner.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

