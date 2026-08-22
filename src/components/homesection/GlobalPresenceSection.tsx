"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FlagIcon from "@/components/ui/FlagIcon";

const offices = [
  {
    country: "UAE",
    code: "AE",
    role: "Regional Operations Hub",
    address: "Supporting seamless international transfers from one of the world's leading financial gateways.",
    emoji: "🇦🇪",
  },
  {
    country: "India",
    code: "IN",
    role: "Technology & Innovation Center",
    address: "Building secure payment technology that powers fast and reliable global money transfers.",
    emoji: "🇮🇳",
  },
  {
    country: "South Africa",
    code: "ZA",
    role: "Regional Headquarters",
    address: "Expanding financial access with trusted cross-border payment solutions across Africa.",
    emoji: "🇿🇦",
  },
  {
    country: "Nigeria",
    code: "NG",
    role: "Regional Operations",
    address: "Strengthening payment connectivity and enabling faster remittances throughout West Africa.",
    emoji: "🇳🇬",
  },
];

export default function GlobalPresenceSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12 md:mb-16"
        >
          <p className="text-[0.65rem] font-bold text-[#217bc6] uppercase tracking-[0.15em] mb-4">
            Global Presence
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B1120] tracking-tight leading-[1.1] mb-4">
            GLOBAL NETWORK
          </h2>
          <p className="text-slate-500 text-[1.05rem] leading-relaxed">
            ImproPay connects people and businesses through a growing international payment network, making cross-border transfers fast, secure, and reliable across key global corridors.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {offices.map((office, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <FlagIcon code={office.code} className="w-8 h-6 rounded object-cover shadow-sm shrink-0 border border-slate-200" alt={office.country} />
                <span className="font-bold text-slate-900 text-sm">{office.country}</span>
              </div>

              <h3 className="font-bold text-slate-900 text-[1.1rem] mb-2">{office.role}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                {office.address}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
