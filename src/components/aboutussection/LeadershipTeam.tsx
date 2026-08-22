"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-main">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="section-heading mb-4">Meet the Leadership Team</h2>
          <p className="body-md">Our team consists of industry veterans from top tech and financial companies, united by a single goal.</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { 
              name: "Sarah Jenkins", 
              role: "Chief Executive Officer", 
              bio: "Former VP at global banking giants, leading the charge for borderless finance.",
              img: "https://i.pravatar.cc/150?img=47" 
            },
            { 
              name: "Michael Chang", 
              role: "Chief Technology Officer", 
              bio: "Pioneer in distributed systems and scalable infrastructure from Silicon Valley.",
              img: "https://i.pravatar.cc/150?img=11" 
            },
            { 
              name: "Elena Rodriguez", 
              role: "Chief Operations Officer", 
              bio: "Expert in global compliance and scaling financial networks across 9 countries.",
              img: "https://i.pravatar.cc/150?img=5" 
            },
            { 
              name: "David Kim", 
              role: "Chief Financial Officer", 
              bio: "Two decades of experience optimizing cross-border capital flows and liquidity.",
              img: "https://i.pravatar.cc/150?img=68" 
            },
          ].map((member, i) => (
            <motion.div variants={fadeUp} whileHover={{ y: -8, scale: 1.02 }} key={i} className="group flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-200 hover:border-[#217bc6]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent -z-10"></div>
              
              <div className="relative w-28 h-28 mx-auto mb-6">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-[#217bc6] font-bold text-sm tracking-wide uppercase mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {member.bio}
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#217bc6] hover:text-white transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

