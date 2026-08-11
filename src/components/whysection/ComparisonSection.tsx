"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Exchange Rate",
    bank: "Hidden markup",
    impropay: "Real mid-market rate",
  },
  {
    feature: "Transfer Speed",
    bank: "1–5 business days",
    impropay: "Usually instant",
  },
  {
    feature: "Hidden Fees",
    bank: "Yes, always",
    impropay: "Never",
  },
  {
    feature: "Setup Time",
    bank: "Branch visit required",
    impropay: "100% online in minutes",
  },
  {
    feature: "24/7 Support",
    bank: "Office hours only",
    impropay: "Round the clock",
  },
  {
    feature: "Rate Alerts",
    bank: "Not available",
    impropay: "Free & instant",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono mb-3 block">
            Head to Head
          </span>
          <h2 className="section-heading mb-4">
            The old way vs the{" "}
            <span className="text-[#217bc6]">ImproPay</span> way
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-2">
            <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider pl-4 py-3">
              Feature
            </div>
            <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider text-center py-3">
              Traditional Banks
            </div>
            <div className="text-xs md:text-sm font-bold text-[#217bc6] uppercase tracking-wider text-center py-3 bg-blue-50/50 rounded-t-xl">
              ImproPay
            </div>
          </div>

          {/* Table rows */}
          <div className="space-y-1.5">
            {rows.map((row, i) => (
              <motion.div
                key={row.feature}
                custom={i}
                variants={fadeUp}
                className="grid grid-cols-3 gap-3 md:gap-6 group"
              >
                <div className="flex items-center gap-2 pl-4 py-4 rounded-l-xl bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <span className="font-semibold text-sm md:text-base text-slate-700">
                    {row.feature}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 py-4 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <X
                    size={16}
                    className="text-red-400 shrink-0 hidden md:block"
                  />
                  <span className="text-sm md:text-base text-slate-400">
                    {row.bank}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 py-4 bg-blue-50/50 rounded-r-xl group-hover:bg-blue-50 transition-colors">
                  <Check
                    size={16}
                    className="text-emerald-500 shrink-0 hidden md:block"
                  />
                  <span className="text-sm md:text-base text-slate-800 font-semibold">
                    {row.impropay}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
