"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple, Play } from "lucide-react";
import { scaleUp, fadeUp } from "@/lib/animations";

export default function CTASection() {
  return (
    <section id="contact" className="py-10 md:py-14 bg-[#FAFBFE] relative overflow-hidden">
      <div className="container-main relative">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] rounded-[24px] sm:rounded-[32px] p-8 md:p-12 lg:p-14 text-center relative overflow-hidden shadow-elevated"
        >
          {/* Subtle Ambient glow */}
          <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[350px] h-[350px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-[700px] mx-auto">
            <span className="text-[0.75rem] font-bold tracking-widest text-white/80 uppercase font-mono block mb-5">
              Start today
            </span>
            
            <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              The people you love
              <br className="hidden sm:block" />
              are waiting.
            </h2>
            
            <p className="text-[0.9375rem] md:text-[1rem] text-blue-50/90 mb-8 max-w-lg mx-auto leading-relaxed">
              Free to join. No hidden fees. A guaranteed rate on every transfer. Get the app now and start sending money instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="#download-ios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0B1120] px-5 py-2.5 rounded-[16px] shadow-xl hover:shadow-2xl transition-all"
              >
                <Apple size={24} className="mb-0.5" />
                <div className="text-left">
                  <div className="text-[8px] uppercase font-extrabold text-slate-500 leading-none mb-1 tracking-wider">Download on the</div>
                  <div className="text-[14px] font-extrabold leading-none tracking-tight">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="#download-android"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1120] text-white px-5 py-2.5 rounded-[16px] shadow-xl hover:shadow-2xl transition-all border border-white/10"
              >
                <Play size={20} className="ml-0.5 fill-white" />
                <div className="text-left ml-1">
                  <div className="text-[8px] uppercase font-extrabold text-white/70 leading-none mb-1 tracking-wider">Get it on</div>
                  <div className="text-[14px] font-extrabold leading-none tracking-tight">Google Play</div>
                </div>
              </motion.a>
            </div>
            
            <p className="text-white/70 text-[0.75rem] font-bold tracking-wide mt-10 uppercase">
              Response &lt; 24h • support@impropay.global
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
