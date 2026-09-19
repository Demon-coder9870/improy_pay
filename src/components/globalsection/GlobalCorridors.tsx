"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FlagIcon from "@/components/ui/FlagIcon";

const CORRIDORS = [
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "India", code: "INR" },
    rate: "1 AED = 22.75 INR",
    speed: "Instant Transfers",
    volume: "AED 15B+ Volume",
    methods: "UPI & All Major Banks",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Sri Lanka", code: "LKR" },
    rate: "1 AED = 83.20 LKR",
    speed: "Instant Transfers",
    volume: "AED 2B+ Volume",
    methods: "Bank Transfer",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Nepal", code: "NPR" },
    rate: "1 AED = 36.35 NPR",
    speed: "Instant Transfers",
    volume: "AED 1.5B+ Volume",
    methods: "Bank Transfer & Cash",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Bangladesh", code: "BDT" },
    rate: "1 AED = 32.10 BDT",
    speed: "Instant Transfers",
    volume: "AED 2.4B+ Volume",
    methods: "bKash & Bank Transfer",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Egypt", code: "EGP" },
    rate: "1 AED = 13.15 EGP",
    speed: "Instant Transfers",
    volume: "AED 3.3B+ Volume",
    methods: "Bank Transfer & Cash",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Pakistan", code: "PKR" },
    rate: "1 AED = 75.80 PKR",
    speed: "Instant Transfers",
    volume: "AED 4.4B+ Volume",
    methods: "1Link, Raast & JazzCash",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Philippines", code: "PHP" },
    rate: "1 AED = 15.33 PHP",
    speed: "Instant Transfers",
    volume: "AED 7.7B+ Volume",
    methods: "GCash, Maya & BDO",
    fee: "0 AED Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Nigeria", code: "NGN" },
    rate: "1 AED = 414.00 NGN",
    speed: "Instant Transfers",
    volume: "AED 6.6B+ Volume",
    methods: "Direct Bank & Mobile Money",
    fee: "0 AED Transfer Fee"
  }
];

export default function GlobalCorridors() {
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
            <Sparkles size={14} className="text-[#217bc6]" />
            <span className="text-[0.75rem] font-bold text-[#217bc6] uppercase tracking-wider">
              High-Speed Global Corridors
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Popular remittance{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              routes & benchmarks
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed">
            Direct banking integrations across major international corridors ensure your funds arrive with zero intermediaries and guaranteed mid-market rates.
          </p>
        </motion.div>

        {/* Corridor Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CORRIDORS.map((corridor, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Route Header (From -> To) */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <FlagIcon
                      code={corridor.from.code}
                      className="w-7 h-5 rounded-md object-cover shadow-sm border border-slate-200"
                      alt={corridor.from.country}
                    />
                    <span className="font-bold text-sm text-slate-800">{corridor.from.code}</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-2">
                    <div className="w-full h-0.5 bg-blue-200 relative flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#217bc6]">
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-sm text-slate-800">{corridor.to.code}</span>
                    <FlagIcon
                      code={corridor.to.code}
                      className="w-7 h-5 rounded-md object-cover shadow-sm border border-slate-200"
                      alt={corridor.to.country}
                    />
                  </div>
                </div>

                {/* Corridor Details */}
                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Guaranteed Rate</span>
                    <span className="text-xs font-bold font-mono text-slate-900">{corridor.rate}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Delivery Speed</span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Zap size={11} /> {corridor.speed}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Payout Network</span>
                    <span className="text-xs font-semibold text-slate-700">{corridor.methods}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] font-bold text-[#217bc6] bg-blue-50 px-2.5 py-1 rounded-lg">
                  {corridor.fee}
                </span>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#217bc6] transition-colors"
                >
                  Send Now <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
