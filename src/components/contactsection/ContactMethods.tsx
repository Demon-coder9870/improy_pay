"use client";

import { Mail, Lock, Clock, MessageCircle, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ContactMethods() {
  return (
    <motion.div 
      variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20"
    >
      {/* Email Support */}
      <motion.div
        variants={fadeUp}
        className="group relative rounded-3xl p-7 bg-white/95 hover:bg-white backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <div className="w-12 h-12 bg-blue-50 text-[#217bc6] border border-blue-100/80 rounded-2xl flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
            <Mail size={22} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">Email support</h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed sm:h-11">For general queries, business inquiries, or transfer issues.</p>
        </div>
        <a
          href="mailto:Support@impropay.global"
          className="inline-flex items-center gap-1.5 text-sm text-[#217bc6] font-extrabold group-hover:text-[#1d6fc2] hover:underline"
        >
          <span>Support@impropay.global</span>
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Privacy & Data */}
      <motion.div
        variants={fadeUp}
        className="group relative rounded-3xl p-7 bg-white/95 hover:bg-white backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <div className="w-12 h-12 bg-slate-100 text-slate-700 border border-slate-200/80 rounded-2xl flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
            <Lock size={22} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">Privacy & data</h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed sm:h-11">For data access requests, KYC compliance, or privacy questions.</p>
        </div>
        <a
          href="mailto:Contact@impropay.global"
          className="inline-flex items-center gap-1.5 text-sm text-[#217bc6] font-extrabold group-hover:text-[#1d6fc2] hover:underline"
        >
          <span>Contact@impropay.global</span>
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Support Hours */}
      <motion.div
        variants={fadeUp}
        className="group relative rounded-3xl p-7 bg-white/95 hover:bg-white backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 border border-amber-100 rounded-2xl flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
            <Clock size={22} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">Support hours</h3>
          <div className="space-y-2 text-sm mt-3">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-slate-500 font-medium">Mon – Friday</span>
              <span className="font-bold text-slate-800 font-mono text-xs">9:00 AM – 7:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-slate-500 font-medium">Sat, Sun & Hols</span>
              <span className="font-bold text-slate-400 font-mono text-xs">Closed</span>
            </div>
          </div>
        </div>
        <div className="text-[11px] font-medium text-slate-400 pt-3 border-t border-slate-100 mt-2">
          UAE time (GMT+4)
        </div>
      </motion.div>

      {/* Prefer to Chat Card */}
      <motion.div
        variants={fadeUp}
        className="group relative rounded-3xl p-7 bg-white/15 hover:bg-white/20 backdrop-blur-2xl text-white shadow-[0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between border border-white/30"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <MessageCircle size={22} />
          </div>
          <h3 className="text-xl font-extrabold mb-2 text-white tracking-tight">Prefer to chat?</h3>
          <p className="text-blue-100 text-sm mb-6 sm:h-11 leading-relaxed">Chat directly with our specialists in-app for real-time priority support.</p>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-bold border border-white/35 text-white shadow-xs">
            <Zap size={14} className="text-amber-300" />
            Coming Soon
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
