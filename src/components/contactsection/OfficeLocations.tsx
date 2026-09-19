"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FlagIcon from "@/components/ui/FlagIcon";

const offices = [
  {
    country: "United Arab Emirates",
    code: "ae",
    role: "Operations Hub",
    address: "Meydan Grandstand, 6th Floor; Meydan Road, Nad Al Sheba, Dubai, UAE",
  },
  {
    country: "India",
    code: "in",
    role: "Technology Center",
    address: "6th Floor, Unitech Trade Center, Sector 43, Gurugram, Haryana",
  },

  {
    country: "United Kingdom",
    code: "gb",
    role: "Regional Office",
    address: "London, United Kingdom",
  },
];

export default function OfficeLocations() {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      className="lg:col-span-2"
    >
      <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-extrabold text-white mb-8 flex items-center gap-3 tracking-tight">
        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm">
          <Globe size={22} />
        </div>
        <span>Global Presence</span>
      </motion.h2>
      
      <div className="space-y-4">
        {offices.map((office, idx) => (
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5, scale: 1.02 }}
            key={idx}
            className="group relative rounded-2xl p-5 md:p-6 bg-white/95 hover:bg-white backdrop-blur-2xl border border-white/90 hover:border-white shadow-[0_12px_32px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Crisp Flag Image Container */}
              <div className="relative shrink-0 mt-0.5 w-11 h-8 rounded-lg overflow-hidden shadow-xs border border-black/10 bg-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-sm transition-all duration-300">
                <FlagIcon
                  code={office.code}
                  className="w-full h-full object-cover"
                  alt={`${office.country} flag`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h4 className="font-extrabold text-slate-900 text-base md:text-lg group-hover:text-[#217bc6] transition-colors">
                    {office.country}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#217bc6] px-2.5 py-0.5 bg-blue-50 border border-blue-100 rounded-full font-mono">
                    {office.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {office.address}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
