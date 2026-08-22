"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp } from "@/lib/animations";

const stats = [
  {
    value: 8,
    suffix: "+",
    label: "Countries",
    sub: "Worldwide reach",
    icon: "🌍",
  },
  {
    value: 8,
    suffix: "+",
    label: "Currencies",
    sub: "Local payouts",
    icon: "💱",
  },
  {
    value: 5,
    suffix: "k",
    label: "Customers",
    sub: "And growing daily",
    icon: "👥",
  },
  {
    value: 20,
    suffix: "s",
    label: "Avg. Speed",
    sub: "Most corridors",
    icon: "⚡",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Dark strip */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#131c31]" />
      {/* Glowing line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      {/* Subtle radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,123,198,0.08)_0%,transparent_70%)]" />

      <div className="container-main relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-[0.75rem] font-bold tracking-widest text-cyan-400 uppercase font-mono mb-3 block">
            By the Numbers
          </span>
          <h2 className="section-heading text-white mb-4">
            Trusted by millions globally
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our numbers speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 text-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full">
                <span className="text-2xl md:text-3xl mb-3 block">{s.icon}</span>
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-[#398ddb] bg-clip-text text-transparent mb-1">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white font-bold text-sm mb-0.5">{s.label}</p>
                <p className="text-slate-500 text-xs">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
