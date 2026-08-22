"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Smartphone,
  MapPin,
  CheckCircle2,
  Zap,
  Globe2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const DELIVERY_METHODS = [
  {
    id: "bank",
    title: "Direct Bank Deposit",
    tagline: "Direct to 100+ major global banking networks",
    icon: Building2,
    speed: "Instant to Same-Day",
    coverage: "9 Countries",
    fee: "$0 Hidden Fees",
    accent: "from-blue-600 to-cyan-500",
    description:
      "Funds are deposited directly into the receiver's local checking or savings bank account with automated IBAN/SWIFT verification.",
    keyBenefits: [
      "Compatible with ACH, SEPA, IMPS, NEFT, and Faster Payments",
      "Instant confirmation once funds credit recipient's bank",
      "High daily transfer limits for family support or business"
    ],
    partners: ["JPMorgan", "Barclays", "HDFC Bank", "BNP Paribas", "Deutsche Bank"]
  },
  {
    id: "mobile",
    title: "Digital Wallets & Mobile Apps",
    tagline: "Lightning-fast transfers directly to digital accounts",
    icon: Smartphone,
    speed: "Instant Transfer",
    coverage: "40+ E-Wallets",
    fee: "$0 Hidden Fees",
    accent: "from-emerald-500 to-teal-600",
    description:
      "Send money straight to digital wallets and mobile phone numbers. The recipient gets an instant push notification and SMS alert.",
    keyBenefits: [
      "Supported on GCash, M-Pesa, Paytm, MoMo, Maya, and Orange Money",
      "Zero paperwork required for the recipient",
      "Available 24/7, 365 days a year including weekends & bank holidays"
    ],
    partners: ["GCash", "M-Pesa", "Paytm", "Maya", "MoMo"]
  },
  {
    id: "cash",
    title: "In-Person Cash Collection",
    tagline: "Collect cash instantly at our trusted local partners",
    icon: MapPin,
    speed: "Ready in Minutes",
    coverage: "350,000+ Agents",
    fee: "$0 Hidden Fees",
    accent: "from-purple-600 to-pink-500",
    description:
      "Recipients can collect physical cash at thousands of trusted local partner outlets, retail stores, post offices, and exchange houses.",
    keyBenefits: [
      "No bank account or smartphone needed for the receiver",
      "Secured with an encrypted 8-digit pickup code & photo ID check",
      "Convenient locations in city centres, airports, and rural towns"
    ],
    partners: ["Global Exchange", "PostNet", "QuickCash", "MetroBank Agents"]
  }
];

export default function DeliveryOptions() {
  const [activeMethod, setActiveMethod] = useState<number>(0);
  const current = DELIVERY_METHODS[activeMethod];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Globe2 size={14} className="text-[#217bc6]" />
            <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase">
              Flexible Payout Channels
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How your recipient can{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              receive funds
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Choose the payout method that best suits your recipient: direct bank deposit or instant mobile wallet transfer.
          </p>
        </motion.div>

        {/* Interactive Layout: Left Tabs & Info / Right High-res Generated Image Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Interactive Payout Cards */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 space-y-4"
          >
            {DELIVERY_METHODS.map((method, idx) => {
              const Icon = method.icon;
              const isSelected = activeMethod === idx;

              return (
                <div
                  key={method.id}
                  onClick={() => setActiveMethod(idx)}
                  className={`p-5 sm:p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-white border-[#217bc6] shadow-xl shadow-blue-500/10 ring-2 ring-[#217bc6]/20 scale-[1.02]"
                      : "bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                          isSelected
                            ? `bg-gradient-to-br ${method.accent} text-white shadow-md shadow-blue-500/20`
                            : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          {method.title}
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#217bc6] text-[10px] font-extrabold uppercase">
                              Active
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">{method.tagline}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                        <Zap size={11} /> {method.speed}
                      </span>
                    </div>
                  </div>

                  {/* Expanded description on active selection */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 mt-4 border-t border-slate-100 space-y-3"
                    >
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {method.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-2 pt-1">
                        {method.keyBenefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: High-Resolution Delivery Methods Illustration & Metrics */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-gradient-to-b from-slate-900 to-slate-950 p-2 sm:p-3">
              {/* High-res generated delivery image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/howitworks_delivery.png"
                  alt="Global money delivery options - Bank, Mobile Money, and Cash Pickup"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                      <Globe2 size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Global Payout Coverage</div>
                      <div className="text-[11px] text-white/60">350,000+ Agent & Bank Networks</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-extrabold text-emerald-400">99.9% Success</div>
                    <div className="text-[10px] text-white/50">Real-time settlement</div>
                  </div>
                </div>
              </div>

              {/* Quick Partner Badges Bar Below Image */}
              <div className="px-4 py-3 bg-slate-900/60 rounded-xl mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
                <span className="font-semibold text-white/40 uppercase text-[10px] tracking-wider">
                  Supported Networks:
                </span>
                {current.partners.map((partner, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2.5 py-0.5 rounded-lg bg-white/[0.06] text-white/80 font-medium text-[11px] border border-white/5"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
