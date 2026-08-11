"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Transparent Pricing",
    subtitle: "No Hidden Fees",
    description: "Know exactly what you pay before every transfer. Transparent pricing means no hidden charges or unexpected costs, just honest, upfront fees.",
  },
  {
    num: "02",
    title: "Competitive Exchange Rates",
    subtitle: "Get More from Every Transfer",
    description: "Benefit from competitive, real-time exchange rates that help more of your money reach the people who matter most.",
  },
  {
    num: "03",
    title: "Fast International Transfers",
    subtitle: "Money That Moves Quickly",
    description: "Send money across borders in minutes with reliable processing and real-time tracking from start to finish.",
  },
  {
    num: "04",
    title: "Bank-Grade Security",
    subtitle: "Your Money, Protected",
    description: "Every transaction is secured with advanced encryption, fraud protection, and strict compliance standards to keep your funds safe.",
  },
  {
    num: "05",
    title: "Global Reach",
    subtitle: "Transfer Across the World",
    description: "Send money to multiple countries through a growing global network designed for fast, secure, and reliable international payments.",
  },
  {
    num: "06",
    title: "24/7 Customer Support",
    subtitle: "Help Whenever You Need It",
    description: "Our dedicated support team is available around the clock to assist you with every step of your international transfer.",
  },
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState<number | null>(1); // Index 1 (2nd card) active by default

  return (
    <section className="py-14 md:py-20 bg-[#FAFBFE]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono">
            Why ImproPay
          </span>
          <h2 className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight">
            Money that moves <br className="hidden sm:block" />
            the way families do.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, index) => {
            const isActive = activeIdx === index;
            return (
              <div
                key={feature.num}
                onMouseEnter={() => setActiveIdx(index)}
                onMouseLeave={() => setActiveIdx(1)} // Revert to 2nd card active on mouse leave
                className={`relative h-full rounded-[24px] p-6 sm:p-8 border transition-all duration-300 cursor-default flex flex-col justify-between ${
                  isActive
                    ? "bg-gradient-to-br from-[#217bc6] to-[#3a91db] text-white border-[#217bc6] shadow-[0_20px_40px_rgba(33,123,198,0.15)] scale-[1.02]"
                    : "bg-white text-[--text-primary] border-slate-200/60 shadow-sm hover:border-[#217bc6]/30"
                }`}
              >
                <div className="flex flex-col gap-2">
                  {/* Number Badge */}
                  <span
                    className={`text-[0.8125rem] font-bold font-mono tracking-wider block mb-1 ${
                      isActive ? "text-white/80" : "text-[#217bc6]"
                    }`}
                  >
                    {feature.num}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-[1.25rem] font-extrabold tracking-tight mb-1 ${
                      isActive ? "text-white" : "text-[--text-primary]"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <h4
                    className={`text-[0.9375rem] font-bold mb-2 ${
                      isActive ? "text-white/80" : "text-[--text-primary]/70"
                    }`}
                  >
                    {feature.subtitle}
                  </h4>

                  {/* Description */}
                  <p
                    className={`text-[0.875rem] font-medium leading-relaxed ${
                      isActive ? "text-white/90" : "text-[--text-body]"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
