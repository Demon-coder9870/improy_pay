"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "London → Mumbai",
    quote:
      "I used to lose so much on exchange rates when sending money to my parents. ImproPay literally saves me hundreds of pounds every year. The transfers are instant too!",
    rating: 5,
    initials: "PS",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "James Okonkwo",
    location: "Toronto → Lagos",
    quote:
      "As a small business owner, I need reliable international payments. ImproPay's transparent fees and real-time tracking give me complete peace of mind.",
    rating: 5,
    initials: "JO",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "Maria Santos",
    location: "Dubai → Manila",
    quote:
      "I switched from my bank to ImproPay and I'll never go back. What used to take 3-5 days now arrives in seconds. My family loves the instant notifications.",
    rating: 5,
    initials: "MS",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    name: "Ahmed Al-Rashid",
    location: "Riyadh → Cairo",
    quote:
      "The app is so easy to use. I set up recurring transfers to my parents and everything just works. The rate alerts feature has saved me a lot of money.",
    rating: 5,
    initials: "AR",
    gradient: "from-amber-500 to-orange-400",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f4f7fa] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono mb-2 block">
            Customer Love
          </span>
          <h2 className="section-heading mb-4">
            Real stories from <span className="text-[#217bc6]">real people</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from customers who've made the switch.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="group">
              <div className="card p-7 md:p-8 bg-white/90 backdrop-blur-sm border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full relative">
                {/* Quote icon */}
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-100 transition-colors duration-300"
                />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="mb-4">
                    <StarRating count={t.rating} />
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-600 leading-relaxed text-[0.9375rem] mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            "4.8★ on App Store",
            "4.7★ on Google Play",
            "Trustpilot Excellent",
            "FCA Regulated",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500"
            >
              <div className="w-2 h-2 rounded-full bg-green-400" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
