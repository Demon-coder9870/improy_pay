"use client";

import { Shield, Zap, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Shield,
    title: "Secure & Regulated",
    desc: "Bank-grade 256-bit encryption & strict regulatory compliance.",
    color: "text-cyan-300",
    bgColor: "bg-cyan-400/20 border-cyan-300/30",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Dedicated support team answering within 24 business hours.",
    color: "text-amber-300",
    bgColor: "bg-amber-400/20 border-amber-300/30",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Licensed operations serving 9 countries worldwide.",
    color: "text-blue-200",
    bgColor: "bg-blue-300/20 border-blue-200/30",
  },
  {
    icon: Users,
    title: "Dedicated Specialists",
    desc: "Expert account managers for seamless money transfers.",
    color: "text-emerald-300",
    bgColor: "bg-emerald-400/20 border-emerald-300/30",
  },
];

export default function ContactFeatures() {
  return (
    <motion.div 
      variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {features.map((feat, idx) => {
        const Icon = feat.icon;
        return (
          <motion.div
            key={feat.title}
            custom={idx}
            variants={fadeUp}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative rounded-3xl p-7 bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/35 text-center text-white shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <div className={`w-12 h-12 mx-auto rounded-2xl ${feat.bgColor} border flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={22} className={feat.color} />
            </div>
            <h4 className="font-extrabold text-white text-base md:text-lg mb-2 tracking-tight">
              {feat.title}
            </h4>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              {feat.desc}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
