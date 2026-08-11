"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FlagIcon from "@/components/ui/FlagIcon";

const offices = [
  {
    city: "London, UK",
    code: "gb",
    role: "Global Headquarters",
    district: "Canary Wharf",
  },
  {
    city: "New York, USA",
    code: "us",
    role: "Americas Hub",
    district: "Manhattan",
  },
  {
    city: "Singapore",
    code: "sg",
    role: "APAC Headquarters",
    district: "Marina Bay",
  },
  {
    city: "Dubai, UAE",
    code: "ae",
    role: "MENA Hub",
    district: "DIFC",
  },
];

export default function GlobalOffices() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="container-main">
        <div>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-12 text-center"
          >
            Our Global{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              Presence
            </span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {offices.map((off, idx) => (
              <motion.div
                key={off.city}
                custom={idx}
                variants={fadeUp}
                className="group relative rounded-2xl p-6 bg-white/70 hover:bg-white backdrop-blur-xl border border-slate-200/80 hover:border-[#217bc6]/40 hover:shadow-[0_12px_32px_rgba(33,123,198,0.1)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-8 rounded-lg overflow-hidden shadow-xs border border-black/10 bg-slate-100 mb-4 group-hover:scale-105 group-hover:shadow-sm transition-all">
                  <FlagIcon code={off.code} className="w-full h-full object-cover" alt={`${off.city} flag`} />
                </div>
                <h3 className="font-extrabold text-lg mb-1 text-slate-900 group-hover:text-[#217bc6] transition-colors">{off.city}</h3>
                <p className="text-[#217bc6] text-xs font-bold uppercase tracking-wider mb-1 font-mono">{off.role}</p>
                <p className="text-slate-500 text-sm font-medium">{off.district}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
