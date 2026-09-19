"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Shield,
  Globe,
  Sparkles,
  Lock,
  Star,
} from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.12 },
  }),
};

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 } as any}
      className="relative flex justify-center"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#217bc6]/10 blur-[80px] pointer-events-none" />

      {/* Phone Frame */}
      <div className="relative z-10 w-[260px] xs:w-[280px] sm:w-[300px] md:w-[320px] h-[520px] xs:h-[560px] md:h-[600px] bg-[#111827] rounded-[40px] xs:rounded-[48px] p-2 md:p-3 shadow-2xl border border-white/10 ring-4 ring-white/5 animate-float">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 xs:h-7 flex justify-center z-20">
          <div className="w-28 xs:w-36 h-6 xs:h-7 bg-[#111827] rounded-b-2xl xs:rounded-b-3xl"></div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#0B1120] rounded-[32px] xs:rounded-[36px] overflow-hidden flex flex-col shadow-inner">
          <img
            src="/images/home-screen.jpeg"
            alt="ImproPay App Home Screen"
            className="w-full h-full object-cover"
          />

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-20" />
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute -left-4 md:-left-16 top-[30%] z-20 hidden md:block"
      >
        <div className="bg-white rounded-2xl shadow-elevated p-3.5 w-[160px] border border-black/[0.04]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 size={13} className="text-green-600" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[--text-primary]">Sent!</p>
              <p className="text-[9px] text-[--text-muted]">Just now</p>
            </div>
          </div>
          <p className="text-[10px] text-[--text-body] flex items-center gap-1">AED 500 → India <FlagIcon code="IN" className="w-3.5 h-2.5 rounded-[2px] object-cover shadow-[0_0_2px_rgba(0,0,0,0.1)] border border-black/5" /></p>
          <div className="flex items-center gap-0.5 mt-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Sparkles key={s} size={8} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute -right-2 md:-right-12 bottom-[35%] z-20 hidden md:block"
      >
        <div className="bg-white rounded-2xl shadow-elevated p-3.5 w-max pr-5 border border-black/[0.04]">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
              <Globe size={12} className="text-blue-600" />
            </div>
            <p className="text-[11px] font-bold text-[--text-primary]">8 Countries</p>
          </div>
          <div className="flex -space-x-1.5">
            {["IN", "NP", "PK", "BD", "LK", "EG", "PH", "NG"].map((f, i) => (
              <FlagIcon key={i} code={f} className="w-5 h-5 rounded-full ring-1 ring-white object-cover shadow-sm bg-white" />
            ))}
            <span className="text-[9px] font-bold text-[--text-muted] bg-gray-50 rounded-full w-5 h-5 flex items-center justify-center ring-1 ring-white z-10 relative">+</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const stats = [
  { value: "9", label: "Countries", icon: Globe },
  { value: "10M+", label: "Happy Users", icon: Shield },
  { value: "99.9%", label: "Uptime", icon: TrendingUp },
];

export default function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-[#217bc6]/[0.04] blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-[#60A5FA]/[0.03] blur-[100px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="container-main relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left">
            <motion.h1
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="heading-xl mb-4 sm:mb-6 font-extrabold text-[--text-primary]"
            >
              Global Payments.
              <br />
              Local Peace of
              <br />
              <span className="text-[#217bc6]">Mind.</span>
            </motion.h1>

            <motion.p
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="body-lg mb-8 sm:mb-10 max-w-[480px] mx-auto lg:mx-0 text-[--text-body]"
            >
              Transfer money internationally with confidence through secure technology, honest pricing, and real-time updates every step of the way.
            </motion.p>

            <motion.div
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link href="https://play.google.com/store/apps/details?id=com.app.forex.impronics" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] hover:opacity-90 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md shadow-blue-500/25 w-full sm:w-auto">
                  Download the app <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link href="#how-it-works" className="flex items-center justify-center font-bold text-slate-800 bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50 py-3.5 px-8 rounded-full transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-full sm:w-auto">
                  See how it works
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap items-center gap-y-3 text-[0.875rem] text-[--text-muted]"
            >
              <div className="flex items-center gap-2 mr-6">
                <div className="flex items-center gap-0.5">
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                </div>
                <span className="font-bold text-[--text-primary] ml-1">4.8</span>
                <span>rated by senders</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block mr-6" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-slate-100 border border-slate-200/50 flex items-center justify-center text-slate-500">
                  <Lock size={12} />
                </div>
                <span>Bank-grade encryption</span>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

