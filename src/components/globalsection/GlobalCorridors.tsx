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
    from: { country: "United States", code: "USD" },
    to: { country: "India", code: "INR" },
    rate: "1 USD = 83.45 INR",
    speed: "Instant (<90 secs)",
    volume: "$4.2B+ Volume",
    methods: "UPI & All Major Banks",
    fee: "$0 Transfer Fee"
  },
  {
    from: { country: "United Kingdom", code: "GBP" },
    to: { country: "Nigeria", code: "NGN" },
    rate: "1 GBP = 1,935 NGN",
    speed: "Instant (<2 mins)",
    volume: "$1.8B+ Volume",
    methods: "Direct Bank & Mobile Money",
    fee: "$0 Transfer Fee"
  },
  {
    from: { country: "United Arab Emirates", code: "AED" },
    to: { country: "Philippines", code: "PHP" },
    rate: "1 AED = 15.33 PHP",
    speed: "Under 60 Seconds",
    volume: "$2.1B+ Volume",
    methods: "GCash, Maya & BDO",
    fee: "$0 Transfer Fee"
  },
  {
    from: { country: "Canada", code: "CAD" },
    to: { country: "Jamaica", code: "JMD" },
    rate: "1 CAD = 114.80 JMD",
    speed: "Under 5 mins",
    volume: "$650M+ Volume",
    methods: "NCB, JN Bank & Cash Pickup",
    fee: "$0 Transfer Fee"
  },
  {
    from: { country: "Eurozone", code: "EUR" },
    to: { country: "Pakistan", code: "PKR" },
    rate: "1 EUR = 301.20 PKR",
    speed: "Instant (<2 mins)",
    volume: "$1.2B+ Volume",
    methods: "1Link, Raast & JazzCash",
    fee: "$0 Transfer Fee"
  },
  {
    from: { country: "Australia", code: "AUD" },
    to: { country: "Vietnam", code: "VND" },
    rate: "1 AUD = 16,740 VND",
    speed: "Instant (<2 mins)",
    volume: "$900M+ Volume",
    methods: "Napas247 & MoMo",
    fee: "$0 Transfer Fee"
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
              className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
                  href="/"
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
