"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Scale,
  Award,
  Globe2,
  CheckCircle2
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const REGULATORS = [
  { name: "FCA", country: "United Kingdom", desc: "Authorized Payment Institution (API)", badge: "Ref #928190" },
  { name: "FinCEN", country: "United States", desc: "Registered Money Services Business", badge: "MSB #3100021" },
  { name: "MAS", country: "Singapore", desc: "Major Payment Institution License", badge: "MPI Licensed" },
  { name: "AUSTRAC", country: "Australia", desc: "Remittance Service Provider", badge: "Reg #100874" },
  { name: "FINTRAC", country: "Canada", desc: "Money Services Business Registered", badge: "MSB #M210984" },
  { name: "BaFin", country: "Germany & EEA", desc: "European Passporting Authorization", badge: "EEA Passport" }
];

const SECURITY_PILLARS = [
  { icon: Lock, title: "256-Bit SSL & TLS 1.3", desc: "End-to-end encryption for all in-transit and at-rest transactional data." },
  { icon: ShieldCheck, title: "Segregated Accounts", desc: "Client funds are ring-fenced separately from corporate capital at Tier-1 banks." },
  { icon: FileCheck2, title: "ISO 27001 & SOC 2", desc: "Internationally audited enterprise security operations and controls." },
  { icon: Scale, title: "Automated AML / CFT", desc: "Continuous algorithmic screening against global sanctions & watchlist databases." }
];

export default function GlobalCompliance() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden border-t border-slate-100">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <ShieldCheck size={14} className="text-[#217bc6]" />
            <span className="text-[0.75rem] font-bold text-[#217bc6] uppercase tracking-wider">
              Regulatory Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Security & licensing you can{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              count on
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed">
            Impropay operates under strict supervisory frameworks worldwide, protecting millions of transactions every month with full transparency.
          </p>
        </motion.div>

        {/* Regulators Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {REGULATORS.map((reg, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-black text-slate-900">{reg.name}</span>
                  <span className="text-xs text-slate-400">• {reg.country}</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">{reg.desc}</p>
              </div>

              <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200/60 shrink-0">
                {reg.badge}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Pillars Cards */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-10 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Institutional-Grade Security Standards</h3>
            <p className="text-xs text-slate-500 mt-1">Every transfer adheres to stringent banking safeguards.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_PILLARS.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div key={pIdx} className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#217bc6] flex items-center justify-center font-bold">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{pillar.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

