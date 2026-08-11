"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function MissionVision() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="container-main">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeUp} className="card p-10 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To make moving money across borders completely frictionless, transparent, and accessible to everyone on the planet, regardless of where they live or what currency they use.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="card p-10 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              A world where money flows as freely as information. We envision a globally integrated financial ecosystem where borders do not dictate economic opportunity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
