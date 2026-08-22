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
            <p className="text-[11px] font-bold text-[--text-primary]">9 Countries</p>
          </div>
          <div className="flex -space-x-1.5">
            {["IN", "NP", "PK", "BD", "LK", "EG", "PH", "NG", "ZA"].map((f, i) => (
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10 sm:mb-12"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link href="#download-android" className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2 bg-white border border-slate-800 rounded-lg text-slate-900 hover:bg-slate-50 transition-all active:scale-95 w-full sm:w-[170px]">
                  <Play className="fill-slate-900 w-7 h-7 stroke-none" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-semibold tracking-wide uppercase">Get it on</span>
                    <span className="text-[1.05rem] font-bold tracking-tight mt-[1px]">Google Play</span>
                  </div>
                </Link>
                
                <Link href="#download-ios" className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2 bg-white border border-slate-800 rounded-lg text-slate-900 hover:bg-slate-50 transition-all active:scale-95 w-full sm:w-[170px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170" className="w-7 h-7 fill-slate-900"><path d="M129.6 86.8c-.2-17.7 14.5-28.1 15.2-28.6-8.2-12-21-13.8-25.6-14-11-.1-21.5 7.5-27.1 7.5-5.6 0-14.2-7.4-23.3-7.2-11.9.2-23 6.9-29.2 17.5-12.4 21.6-3.2 53.6 8.9 71 6 8.5 12.8 17.9 22.1 17.5 8.9-.4 12.4-5.8 23.2-5.8 10.7 0 13.8 5.8 23.3 5.6 9.7-.2 15.6-8.6 21.5-17.2 6.8-9.8 9.6-19.3 9.7-19.8-.2-.1-18.4-7-18.7-26.5zM103 26.6C107.9 20.7 111.1 12.5 110.2 4c-7.3.3-16 4.9-21.1 10.8-4.5 5.2-8.3 13.6-7.2 21.9 8.2.6 16.2-4.1 21.1-10.1z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-semibold tracking-wide">Download on the</span>
                    <span className="text-[1.05rem] font-bold tracking-tight mt-[1px]">App Store</span>
                  </div>
                </Link>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link href="#how-it-works" className="btn-ghost w-full sm:w-auto py-3.5 px-7 text-base rounded-full bg-white hover:bg-slate-50">
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

