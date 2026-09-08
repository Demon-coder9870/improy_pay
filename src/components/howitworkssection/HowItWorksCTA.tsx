"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HowItWorksCTA() {
  return (
    <section className="py-14 md:py-20 bg-[#FAFBFE] relative overflow-hidden">
      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-elevated"
        >
          {/* Subtle Ambient glow */}
          <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[350px] h-[350px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] bg-cyan-300/15 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 max-w-[640px] mx-auto">
            <span className="text-[0.75rem] font-bold tracking-widest text-white/80 uppercase font-mono block mb-5">
              Ready in minutes
            </span>
            
            <h2 className="text-[2.25rem] md:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
              Send money across borders
              <br />
              in 4 easy steps.
            </h2>
            
            <p className="text-[0.95rem] md:text-[1.0625rem] text-blue-50/90 mb-10 max-w-lg mx-auto leading-relaxed">
              Join over 2 million customers worldwide moving money with guaranteed exchange rates and zero hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#217bc6] font-bold text-[0.875rem] px-8 py-3.5 rounded-full shadow-md hover:bg-slate-50 transition-all"
                >
                  Send money now
                  <ArrowRight size={15} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/faq"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-[0.875rem] px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  See how it works FAQs
                </Link>
              </motion.div>
            </div>
            
            <p className="text-white/60 text-[0.6875rem] font-bold font-mono tracking-wider mt-8 uppercase">
              FCA & FINCEN REGULATED • INSTANT DELIVERY GUARANTEE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
