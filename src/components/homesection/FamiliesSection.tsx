"use client";

import { Check, Clock, GraduationCap } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";

const cards = [
  {
    image: "/images/dubai_worker.png", // Construction/skyline worker
    title: "Sent from Dubai",
    flagCode: "AED",
    time: "Today, 09:02",
    amount: "AED 5,000",
    icon: <Clock size={14} className="text-[#217bc6]" />,
    iconBg: "bg-blue-50",
  },
  {
    image: "/images/happy_family.png", // Smiling family
    title: "Delivered to family",
    flagCode: "INR",
    time: "2 min ago",
    amount: "₹1,31,408",
    amountColor: "text-emerald-600",
    icon: <Check size={14} className="text-emerald-500" />,
    iconBg: "bg-emerald-50",
  },
  {
    image: "/images/school_fees.png", // Education fees context
    title: "School fees",
    flagCode: "INR",
    time: "Due today",
    amount: "₹40,000",
    icon: <GraduationCap size={14} className="text-indigo-500" />,
    iconBg: "bg-indigo-50",
  },
];

export default function FamiliesSection() {
  return (
    <section className="py-14 md:py-20 bg-[#FAFBFE]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono">
            Your Money, Reimagined
          </span>
          <h2 className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight">
            Built for the families <br className="hidden sm:block" />
            who move the world.
          </h2>
          <p className="body-md text-[--text-body] max-w-lg mx-auto">
            No matter where life takes you, staying connected with family is simple. Send money with competitive exchange rates, real-time tracking, and trusted security—all from one easy-to-use app.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[28px] overflow-hidden shadow-card group hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-slate-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Badge/Status Bar */}
              <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-[4px] rounded-[20px] p-4 flex items-center justify-between shadow-elevated border border-white/40">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${card.iconBg} flex items-center justify-center shrink-0`}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.875rem] font-bold text-[--text-primary] leading-tight flex items-center gap-1.5">
                      <span>{card.title}</span>
                      <FlagIcon code={card.flagCode} className="w-3.5 h-2.5 rounded-sm object-cover shadow-sm" />
                    </h4>
                    <p className="text-[0.75rem] text-[--text-muted] mt-0.5">
                      {card.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[0.875rem] font-extrabold font-mono ${card.amountColor || "text-[--text-primary]"}`}>
                    {card.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
