"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function OurStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono mb-2 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Born from frustration, <br/> built for everyone.</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 2018, Impropay started with a simple observation: the international banking system was fundamentally broken for everyday people. Hidden fees, terrible exchange rates, and days-long delays were the norm.
              </p>
              <p>
                Our founders experienced this firsthand when trying to send money back home to their families. The frustration of losing hard-earned money to opaque banking fees led them to create a better way.
              </p>
              <p>
                Today, Impropay is a leading global payments platform serving millions of customers worldwide, helping them support their families, pay for services, and grow their businesses without the burden of excessive fees.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#217bc6]/10 rounded-3xl blur-[40px] transform rotate-3"></div>
            <div className="card p-8 bg-slate-50 border border-slate-100 shadow-xl relative z-10 rounded-[32px] min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <p className="text-slate-500 font-medium">Connecting the world financially</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
