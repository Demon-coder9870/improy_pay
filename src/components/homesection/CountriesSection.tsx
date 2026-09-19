"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";

const countries = [
  { name: "India", code: "IN", currency: "INR", rate: "22.75", transfers: "2M+ monthly" },
  { name: "Sri Lanka", code: "LK", currency: "LKR", rate: "83.20", transfers: "800K+ monthly" },
  { name: "Nepal", code: "NP", currency: "NPR", rate: "36.35", transfers: "600K+ monthly" },
  { name: "Bangladesh", code: "BD", currency: "BDT", rate: "32.10", transfers: "1.5M+ monthly" },
  { name: "Egypt", code: "EG", currency: "EGP", rate: "13.15", transfers: "500K+ monthly" },
  { name: "Pakistan", code: "PK", currency: "PKR", rate: "75.80", transfers: "400K+ monthly" },
  { name: "Philippines", code: "PH", currency: "PHP", rate: "15.33", transfers: "350K+ monthly" },
  { name: "Nigeria", code: "NG", currency: "NGN", rate: "414.00", transfers: "700K+ monthly" },

];

export default function CountriesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="label-sm mb-4">Global Reach</p>
          <h2 className="section-heading mb-4">Countries We Support</h2>
          <p className="body-lg mx-auto text-center max-w-[500px]">
            Send money to 8 countries. Here are our most popular destinations.
          </p>
        </motion.div>

        {/* Network hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="bg-[--bg] rounded-[28px] p-5 sm:p-8 md:p-12 mb-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2.5 bg-white border-2 border-[#217bc6]/20 rounded-full px-5 py-2.5 shadow-card">
              <div className="w-2.5 h-2.5 rounded-full bg-[#217bc6] animate-pulse-ring" />
              <span className="font-bold text-[#217bc6] text-[0.8125rem]">ImproPay Network</span>
              <span className="text-[--text-muted] text-[0.75rem] hidden sm:inline">• 8 Countries</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onHoverStart={() => setHovered(country.name)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className={`flex items-center gap-3 bg-white rounded-2xl border px-5 py-3.5 cursor-pointer transition-all duration-300 ${hovered === country.name
                    ? "border-[#217bc6]/30 shadow-card-hover"
                    : "border-[--border] hover:border-[--text-muted]/20 shadow-card"
                  }`}>
                  <FlagIcon
                    code={country.code}
                    className="w-8 h-6 rounded-md object-cover shadow-sm border border-slate-200"
                    alt={country.name}
                  />
                  <div>
                    <p className="font-bold text-[--text-primary] text-[0.875rem]">{country.name}</p>
                    <p className="text-[--text-muted] text-[0.75rem]">{country.currency}</p>
                  </div>
                </div>

                {hovered === country.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 bg-[#0B1120] text-white rounded-2xl px-4 py-3 w-[180px] shadow-xl z-30 pointer-events-none"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">1 AED =</span>
                      <span className="text-[0.875rem] font-extrabold">{country.rate} {country.currency}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-green-400 font-semibold">
                      <TrendingUp size={9} />
                      {country.transfers}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#0B1120]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <Link href="/global">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost"
            >
              View All 8 Countries
              <ArrowRight size={14} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

