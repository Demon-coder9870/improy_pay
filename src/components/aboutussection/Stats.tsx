"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Stats() {
  return (
    <section className="py-16">
      <div className="container-main">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeUp} className="card p-6 text-center hover:-translate-y-2 transition-transform duration-300 bg-white">
            <div className="text-gradient-blue text-4xl font-bold mb-2">190+</div>
            <div className="body-md font-medium">Countries Supported</div>
          </motion.div>
          <motion.div variants={fadeUp} className="card p-6 text-center hover:-translate-y-2 transition-transform duration-300 bg-white">
            <div className="text-gradient-blue text-4xl font-bold mb-2">5M+</div>
            <div className="body-md font-medium">Active Users</div>
          </motion.div>
          <motion.div variants={fadeUp} className="card p-6 text-center hover:-translate-y-2 transition-transform duration-300 bg-white">
            <div className="text-gradient-blue text-4xl font-bold mb-2">$10B</div>
            <div className="body-md font-medium">Transferred Annually</div>
          </motion.div>
          <motion.div variants={fadeUp} className="card p-6 text-center hover:-translate-y-2 transition-transform duration-300 bg-white">
            <div className="text-gradient-blue text-4xl font-bold mb-2">24/7</div>
            <div className="body-md font-medium">Customer Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
