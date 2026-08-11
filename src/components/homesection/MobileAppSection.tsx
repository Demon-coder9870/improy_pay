"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, scaleUp } from "@/lib/animations";

const stepsData = [
  {
    title: "Create & verify",
    description: "Sign up in minutes and confirm your identity with secure, guided verification.",
    image: "/images/login-screen.png"
  },
  {
    title: "Check exchange rates",
    description: "Get real-time, competitive exchange rates for your destination currency.",
    image: "/images/dashboard screen.jpeg"
  },
  {
    title: "Add recipient details",
    description: "Enter the bank details or mobile wallet of the person you're sending money to.",
    image: "/images/send-money.jpeg"
  },
  {
    title: "Pay securely",
    description: "Fund your transfer using your preferred payment method quickly and safely.",
    image: "/images/add-receipt.jpeg"
  },
  {
    title: "Track transfer",
    description: "Monitor your money in real-time until it successfully reaches its destination.",
    image: "/images/transaction-successful.jpeg"
  }
];

export default function MobileAppSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set up Intersection Observer for scroll tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        // Trigger when the step enters the middle 40% of the screen
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-[#050A15] relative">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      <div className="container-main relative">
        <div className="max-w-xl mb-8 overflow-hidden">
          <motion.p
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-[#60A5FA] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
            className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[42px] font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.15]"
          >
            Impropay <br /> transaction flow
          </motion.h2>
          <motion.div 
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-[1px] bg-white/[0.08]" 
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">

          {/* Left Content - Scrollable Steps */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="pb-[10vh] md:pb-[30vh]">
              {stepsData.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      if (el) stepRefs.current[index] = el;
                    }}
                    data-index={index}
                    className={`min-h-[20vh] md:min-h-[25vh] py-6 md:py-8 flex flex-col justify-center cursor-pointer transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-50'}`}
                    onClick={() => {
                      stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Step Number */}
                      <div className="relative shrink-0">
                        <div className={`w-12 h-14 md:w-14 md:h-16 rounded-xl flex flex-col items-center justify-center font-bold transition-all duration-500 ${isActive ? 'bg-[#217bc6] text-white shadow-[0_0_30px_rgba(33,123,198,0.4)] scale-110' : 'bg-white/5 text-white/30 scale-100'}`}>
                          <span className="text-lg md:text-xl leading-none">{String(index + 1).padStart(2, '0')}</span>
                          {isActive && <span className="text-[9px] md:text-[10px] text-white/70 mt-1">05</span>}
                        </div>
                      </div>

                      {/* Step Text */}
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold mb-1.5 md:mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Inline image for mobile */}
                    {isActive && (
                      <div className="lg:hidden mt-6 w-full max-w-[240px] mx-auto">
                        <div className="relative w-full aspect-[9/16] bg-[#111827] rounded-[32px] p-1.5 shadow-xl border border-white/10 overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover rounded-[26px]"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://placehold.co/400x800/0B1120/ffffff?text=Step+${index + 1}`;
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Phone Mockup - Sticky */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 hidden lg:flex sticky top-32 justify-center lg:justify-end pb-20"
          >
            {/* Background decorative elements for phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-[100px]" />
            </div>

            {/* Phone Frame */}
            <div className="relative z-10 w-[280px] md:w-[320px] h-[600px] md:h-[650px] bg-[#111827] rounded-[48px] p-2 md:p-3 shadow-2xl border border-white/10 ring-4 ring-white/5">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                <div className="w-36 h-7 bg-[#111827] rounded-b-3xl"></div>
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full bg-[#0B1120] rounded-[36px] overflow-hidden flex flex-col shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={stepsData[activeStep].image}
                    alt={stepsData[activeStep].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if the actual image file is missing
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x1200/0B1120/ffffff?text=Step+${activeStep + 1}+Image`;
                    }}
                  />
                </AnimatePresence>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-20" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

