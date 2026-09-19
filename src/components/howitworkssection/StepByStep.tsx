"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  UserCheck,
  Calculator,
  Users,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  ShieldCheck,
  Zap,
  Globe2,
  Clock,
  Sparkles,
  Smartphone,
  CreditCard,
  Building2,
  Wallet,
  BadgeCheck,
  ChevronRight,
  Layers,
  ListOrdered,
  Lock,
  RefreshCw
} from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";

interface StepData {
  id: number;
  badge: string;
  title: string;
  shortDesc: string;
  estimatedTime: string;
  icon: any;
  accentColor: string;
  bgGradient: string;
  highlights: string[];
}

const STEPS: StepData[] = [
  {
    id: 1,
    badge: "Step 01",
    title: "Create Your Free Account",
    shortDesc: "Sign up in under 2 minutes with bank-level identity verification and biometric security.",
    estimatedTime: "2 mins",
    icon: UserCheck,
    accentColor: "from-blue-600 to-cyan-500",
    bgGradient: "bg-blue-500/10",
    highlights: [
      "Instant sign-up using email",
      "Automated 90-second biometric KYC verification",
      "256-bit AES encryption & ISO 27001 certified",
      "Zero registration fees, zero maintenance charges"
    ]
  },
  {
    id: 2,
    badge: "Step 02",
    title: "Enter Amount & Delivery Mode",
    shortDesc: "Choose your destination currency and payout method with live guaranteed exchange rates.",
    estimatedTime: "1 min",
    icon: Calculator,
    accentColor: "from-cyan-500 to-blue-600",
    bgGradient: "bg-cyan-500/10",
    highlights: [
      "Real-time mid-market exchange rates updated every 3 seconds",
      "100% transparent pricing — 0 AED hidden markup or surprise fees",
      "Delivery options: Direct Bank or Cash Pickup"
    ]
  },
  {
    id: 3,
    badge: "Step 03",
    title: "Add Recipient Information",
    shortDesc: "Enter bank details in one tap.",
    estimatedTime: "30 secs",
    icon: Users,
    accentColor: "from-indigo-600 to-blue-500",
    bgGradient: "bg-indigo-500/10",
    highlights: [
      "Auto-validation for IBAN, SWIFT/BIC, Routing & UPI numbers",
      "1-click selection from recent or favourite recipients",
      "Automatic recipient currency and network compatibility check",
      "Free real-time SMS notification alerts to receiver"
    ]
  },
  {
    id: 4,
    badge: "Step 04",
    title: "Pay & Track in Real-Time",
    shortDesc: "Pay securely via your preferred method and watch your transfer move in real time.",
    estimatedTime: "Instant",
    icon: Send,
    accentColor: "from-emerald-500 to-teal-600",
    bgGradient: "bg-emerald-500/10",
    highlights: [
      "Pay with debit/credit card or bank wire",
      "Live 4-stage tracking dashboard from send to delivery",
      "Instant push notifications the moment funds are received",
      "Downloadable transfer receipt for your records"
    ]
  }
];

export default function StepByStep() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"wizard" | "timeline">("timeline");

  // Step 2 interactive currency selector
  const [selectedCurrency, setSelectedCurrency] = useState<"EUR" | "INR" | "PHP" | "USD">("EUR");
  const [sendAmount, setSendAmount] = useState<number>(1000);

  // Step 3 interactive recipient selector
  const [selectedRecipient, setSelectedRecipient] = useState<number>(0);

  // Step 4 interactive payment method
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | "apple">("card");

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== "wizard") return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, viewMode]);

  const rates: Record<string, { rate: number; code: string; symbol: string; country: string }> = {
    EUR: { rate: 0.25, code: "eu", symbol: "€", country: "Eurozone" },
    INR: { rate: 22.75, code: "in", symbol: "₹", country: "India" },
    PHP: { rate: 15.33, code: "ph", symbol: "₱", country: "Philippines" },
    USD: { rate: 0.27, code: "us", symbol: "$", country: "USA" }
  };

  const recipients = [
    { name: "Maria Santos", bank: "GCash Wallet", code: "PH", id: "0917-***-4921", badge: "Verified" },
    { name: "Rajesh Kumar", bank: "HDFC Bank (A/C **8912)", code: "IN", id: "HDFC000124", badge: "Instant Payout" },
    { name: "Sarah Jenkins", bank: "Barclays UK (IBAN **401)", code: "GB", id: "GB29BARC...", badge: "Saved Contact" }
  ];

  return (
    <section id="step-wizard-section" className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <Sparkles size={14} className="text-[#217bc6]" />
              <span className="text-[0.75rem] font-bold text-[#217bc6] uppercase tracking-wider">
                Interactive Walkthrough
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Move money across borders in{" "}
              <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
                4 simple steps
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed">
              Fast, transparent, and designed for peace of mind. Experience a seamless international money transfer journey in just four easy steps...
            </p>
          </div>

          {/* View Toggle (Wizard vs Timeline) */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode("wizard")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "wizard"
                  ? "bg-[#217bc6] text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Layers size={15} />
              Interactive Wizard
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "timeline"
                  ? "bg-[#217bc6] text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <ListOrdered size={15} />
              Full Roadmap
            </button>
          </div>
        </div>

        {/* ================= MODE 1: INTERACTIVE WIZARD ================= */}
        {viewMode === "wizard" && (
          <div className="space-y-8">
            {/* Top Navigation Step Tabs */}
            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
                {STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  const isCompleted = activeStep > idx;

                  return (
                    <button
                      key={step.id}
                      onClick={() => {
                        setActiveStep(idx);
                        setIsAutoPlaying(false);
                      }}
                      className={`relative flex flex-col p-4 md:p-5 rounded-2xl text-left transition-all duration-300 border ${
                        isActive
                          ? "bg-white border-[#217bc6] shadow-xl shadow-blue-500/10 ring-2 ring-[#217bc6]/20"
                          : isCompleted
                          ? "bg-blue-50/70 border-blue-200 hover:bg-white hover:border-blue-300"
                          : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                            isActive
                              ? "bg-[#217bc6] text-white shadow-md shadow-blue-500/30 scale-105"
                              : isCompleted
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                        </div>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                            isActive
                              ? "bg-blue-100 text-[#217bc6]"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <Clock size={10} />
                          {step.estimatedTime}
                        </span>
                      </div>

                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                        {step.badge}
                      </div>
                      <div
                        className={`text-sm md:text-base font-bold transition-colors line-clamp-1 ${
                          isActive ? "text-[#217bc6]" : "text-slate-800"
                        }`}
                      >
                        {step.title}
                      </div>

                      {/* Active indicator bar on mobile */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="lg:hidden absolute bottom-0 left-4 right-4 h-1 bg-[#217bc6] rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Step Content Box */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid lg:grid-cols-12 gap-8 p-6 md:p-10 items-center"
                >
                  {/* Left Column: Step Details & Highlights */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-[#217bc6] text-xs font-bold uppercase tracking-wider">
                        {STEPS[activeStep].badge}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                        <Clock size={13} className="text-[#217bc6]" />
                        Estimated Time: {STEPS[activeStep].estimatedTime}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                      {STEPS[activeStep].title}
                    </h3>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {STEPS[activeStep].shortDesc}
                    </p>

                    {/* Step Highlight Bullets */}
                    <div className="space-y-3.5 pt-2">
                      {STEPS[activeStep].highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-[#217bc6] flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={13} className="stroke-[2.5]" />
                          </div>
                          <span className="text-sm md:text-[0.9375rem] font-medium text-slate-700">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Security or Speed Callout */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {activeStep === 0 && "Bank-Grade Encryption & Privacy Protected"}
                          {activeStep === 1 && "Guaranteed Real-Time Exchange Rates"}
                          {activeStep === 2 && "Direct Automated Bank & Wallet Verification"}
                          {activeStep === 3 && "Real-Time GPS Tracking with Delivery Alerts"}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Regulated by financial authorities in 30+ jurisdictions worldwide.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Mockup Simulator */}
                  <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-6 md:p-8 text-white relative shadow-2xl overflow-hidden border border-slate-800">
                    {/* Glowing ambient background orbs */}
                    <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                    {/* ================= STEP 1 SIMULATOR ================= */}
                    {activeStep === 0 && (
                      <div className="space-y-5 relative z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#217bc6] flex items-center justify-center font-bold text-white text-xs">
                              IP
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">Instant Onboarding</div>
                              <div className="text-[10px] text-white/50">KYC Status: Verified</div>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                            <CheckCircle2 size={11} /> 90s Verification
                          </span>
                        </div>

                        {/* ID Verification Card */}
                        <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#217bc6] to-cyan-400 flex items-center justify-center text-white font-bold text-sm ring-4 ring-white/10">
                                JD
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white">John Doe</div>
                                <div className="text-xs text-white/60">john.doe@example.com</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-blue-500/20 text-[#60A5FA] px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-blue-500/30">
                              <BadgeCheck size={13} /> Tier 2 Account
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 pt-1">
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                              <div className="text-[10px] text-white/40 uppercase font-medium">Daily Transfer Limit</div>
                              <div className="text-sm font-bold text-white mt-0.5">$50,000.00</div>
                            </div>
                            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                              <div className="text-[10px] text-white/40 uppercase font-medium">2FA Protection</div>
                              <div className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
                                <Lock size={12} /> Active
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Sign-In Option Badges */}
                        <div className="space-y-2">
                          <div className="text-[11px] font-semibold text-white/60">Supported Instant Auth:</div>
                          <div className="grid grid-cols-3 gap-2">
                            {["Google Account", "Apple ID", "Passkey / Face ID"].map((auth) => (
                              <div
                                key={auth}
                                className="bg-white/[0.04] border border-white/[0.08] rounded-xl py-2 px-2.5 text-center text-[10px] font-medium text-white/80"
                              >
                                {auth}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ================= STEP 2 SIMULATOR ================= */}
                    {activeStep === 1 && (
                      <div className="space-y-5 relative z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div className="flex items-center gap-2">
                            <Zap size={16} className="text-yellow-400" />
                            <span className="text-xs font-bold text-white">Live Rate Calculator Demo</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                            <RefreshCw size={10} className="animate-spin" /> Live Mid-Market
                          </span>
                        </div>

                        {/* Currency Selector Buttons */}
                        <div className="flex items-center gap-2">
                          {(["EUR", "INR", "PHP", "USD"] as const).map((curr) => (
                            <button
                              key={curr}
                              onClick={() => setSelectedCurrency(curr)}
                              className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                                selectedCurrency === curr
                                  ? "bg-[#217bc6] border-cyan-400 text-white shadow-lg shadow-blue-500/30"
                                  : "bg-white/[0.05] border-white/10 text-white/70 hover:bg-white/10"
                              }`}
                            >
                              <FlagIcon code={curr} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                              <span>{curr}</span>
                            </button>
                          ))}
                        </div>

                        {/* Send Amount Input Simulation */}
                        <div className="bg-black/40 rounded-2xl p-4 border border-white/10 space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-white/60 font-medium">You Send (AED)</span>
                            <span className="text-[#60A5FA] font-bold">AED 0 Transfer Fee</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-black text-white">AED 1,000.00</span>
                            <span className="px-2.5 py-1 bg-white/10 rounded-lg text-xs font-bold text-white flex items-center gap-1.5">
                              <FlagIcon code="AED" className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                              AED
                            </span>
                          </div>

                          <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs">
                            <span className="text-white/60 font-medium">
                              Recipient Gets ({rates[selectedCurrency].country})
                            </span>
                            <span className="text-white/40 text-[10px]">
                              1 AED = {rates[selectedCurrency].rate} {selectedCurrency}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-black text-emerald-400">
                              {rates[selectedCurrency].symbol}{" "}
                              {(sendAmount * rates[selectedCurrency].rate).toLocaleString(undefined, {
                                maximumFractionDigits: 2
                              })}
                            </span>
                            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold flex items-center gap-1.5">
                              <FlagIcon code={selectedCurrency} className="w-4 h-3 rounded-[2px] object-cover shadow-sm" />
                              {selectedCurrency}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-white/60 px-1">
                          <span>⚡ Delivery: <strong>Instant Transfers</strong></span>
                          <span>🔒 Guaranteed Rate for: <strong>23h 59m</strong></span>
                        </div>
                      </div>
                    )}

                    {/* ================= STEP 3 SIMULATOR ================= */}
                    {activeStep === 2 && (
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-xs font-bold text-white">Choose or Add Recipient</span>
                          <span className="text-[10px] text-blue-400 font-semibold">+ Add New</span>
                        </div>

                        {/* Interactive Recipient Selectors */}
                        <div className="space-y-2.5">
                          {recipients.map((rec, rIdx) => {
                            const isSelected = selectedRecipient === rIdx;
                            return (
                              <div
                                key={rIdx}
                                onClick={() => setSelectedRecipient(rIdx)}
                                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                                  isSelected
                                    ? "bg-blue-600/30 border-[#217bc6] ring-1 ring-cyan-400/40"
                                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08]"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center p-1 overflow-hidden border border-white/10">
                                    <FlagIcon code={rec.code} className="w-6 h-4 rounded-sm object-cover shadow-sm" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                      {rec.name}
                                      {isSelected && <CheckCircle2 size={12} className="text-emerald-400" />}
                                    </div>
                                    <div className="text-[10px] text-white/50">{rec.bank}</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-md">
                                    {rec.badge}
                                  </span>
                                  <div className="text-[10px] text-white/40 mt-1 font-mono">{rec.id}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-2.5 text-xs text-emerald-300">
                          <CheckCircle2 size={15} className="shrink-0" />
                          <span>Recipient bank details verified with 100% accuracy match.</span>
                        </div>
                      </div>
                    )}

                    {/* ================= STEP 4 SIMULATOR ================= */}
                    {activeStep === 3 && (
                      <div className="space-y-5 relative z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-xs font-bold text-white">Live Payment & GPS Tracker</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold animate-pulse">
                            ● In Flight
                          </span>
                        </div>

                        {/* Payment Method Selector */}
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "card", label: "Debit Card", icon: CreditCard },
                            { id: "bank", label: "Bank Wire", icon: Building2 },
                            { id: "apple", label: "Apple Pay", icon: Wallet }
                          ].map((pm) => {
                            const Icon = pm.icon;
                            const isChosen = paymentMethod === pm.id;
                            return (
                              <button
                                key={pm.id}
                                onClick={() => setPaymentMethod(pm.id as any)}
                                className={`p-2.5 rounded-xl border text-center transition-all ${
                                  isChosen
                                    ? "bg-[#217bc6] border-cyan-400 text-white"
                                    : "bg-white/[0.04] border-white/10 text-white/60 hover:bg-white/10"
                                }`}
                              >
                                <Icon size={16} className="mx-auto mb-1" />
                                <span className="text-[10px] font-bold block">{pm.label}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Live 4-Stage Tracker Simulation */}
                        <div className="bg-black/40 rounded-2xl p-4 border border-white/10 space-y-3">
                          <div className="text-[11px] font-bold text-white/70 uppercase tracking-wider mb-2">
                            Transfer ID: #IMP-8942910
                          </div>

                          <div className="relative pl-6 space-y-3.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-500/40">
                            {[
                              { title: "Transfer Initiated", time: "10:14 AM", done: true },
                              { title: "Payment Confirmed (AED 1,000.00)", time: "10:15 AM", done: true },
                              { title: "Converted to €925.00 EUR", time: "10:16 AM", done: true },
                              { title: "Delivered to Recipient Bank", time: "10:17 AM (Instant)", done: true, current: true }
                            ].map((stage, sIdx) => (
                              <div key={sIdx} className="relative flex items-center justify-between text-xs">
                                <div className="absolute -left-6 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[9px] text-white">
                                  ✓
                                </div>
                                <span className={stage.current ? "font-bold text-emerald-400" : "text-white/80"}>
                                  {stage.title}
                                </span>
                                <span className="text-[10px] text-white/40">{stage.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Wizard Bottom Action Controls */}
              <div className="bg-slate-50/90 border-t border-slate-200 px-6 py-4 md:px-10 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Previous Button */}
                  <button
                    onClick={() => {
                      setActiveStep((prev) => Math.max(0, prev - 1));
                      setIsAutoPlaying(false);
                    }}
                    disabled={activeStep === 0}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      activeStep === 0
                        ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200"
                        : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-sm"
                    }`}
                  >
                    <ArrowLeft size={16} />
                    Previous Step
                  </button>

                  {/* Autoplay Play/Pause Toggle */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 shadow-sm transition-all"
                    title={isAutoPlaying ? "Pause Auto-walkthrough" : "Play Auto-walkthrough"}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause size={14} className="text-[#217bc6]" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play size={14} className="text-[#217bc6]" />
                        <span>Auto-play</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Step Indicator Dots */}
                <div className="flex items-center gap-2">
                  {STEPS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setActiveStep(dotIdx);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStep === dotIdx
                          ? "w-8 bg-[#217bc6]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Jump to step ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Next Step / Start Button */}
                <div className="flex items-center gap-3">
                  {activeStep < STEPS.length - 1 ? (
                    <button
                      onClick={() => {
                        setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1));
                        setIsAutoPlaying(false);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
                    >
                      Next Step: {STEPS[activeStep + 1].title.split(" ")[0]}
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
                    >
                      Start Sending Money
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= MODE 2: FULL ROADMAP TIMELINE ================= */}
        {viewMode === "timeline" && (
          <div className="max-w-5xl mx-auto space-y-12 relative pt-6">
            {/* Center Connecting Spine */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-[#217bc6] via-cyan-400 to-emerald-500 -translate-x-1/2 rounded-full" />

            {STEPS.map((step, sIdx) => {
              const Icon = step.icon;
              const isEven = sIdx % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text card */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <span className="px-2.5 py-1 rounded-full bg-blue-100 text-[#217bc6] text-xs font-bold uppercase">
                          {step.badge}
                        </span>
                        <span className="text-slate-400 text-xs font-semibold">
                          ⏱ {step.estimatedTime}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {step.shortDesc}
                      </p>

                      <div className="space-y-2">
                        {step.highlights.slice(0, 3).map((h, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 text-xs font-medium text-slate-700 ${
                              isEven ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon Node */}
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-[#217bc6] to-cyan-400 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center font-bold text-xl shrink-0 ring-4 ring-white">
                    <Icon size={24} />
                  </div>

                  {/* Visual Preview Side */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 text-white shadow-md">
                      <div className="flex items-center justify-between text-xs text-white/70 mb-3 border-b border-white/10 pb-2">
                        <span className="font-semibold text-cyan-400">Preview: {step.title}</span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">Automated</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {step.highlights[0]} — complete with real-time feedback and military-grade encryption.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
