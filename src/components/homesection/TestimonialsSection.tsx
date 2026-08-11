"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amara O.",
    route: "London → Abuja",
    content: "Landed in two minutes. I could track every step. It finally feels like the money is respected."
  },
  {
    name: "Maria D.",
    route: "Dubai → Manila",
    content: "One honest fee. I send my family's school fees every month and I always know the exact amount."
  },
  {
    name: "Rahul S.",
    route: "Dubai → Gurugram",
    content: "The rate I locked was exactly what my mum received. No surprises, no hidden cut."
  },
  {
    name: "Amara O.",
    route: "London → Abuja",
    content: "Landed in two minutes. I could track every step. It finally feels like the money is respected."
  },
  {
    name: "Maria D.",
    route: "Dubai → Manila",
    content: "One honest fee. I send my family's school fees every month and I always know the exact amount."
  }
];

export default function TestimonialsSection() {
  // Duplicate list to ensure a smooth, seamless scrolling loop
  const displayItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-14 md:py-20 bg-[#FAFBFE] overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[0.75rem] font-bold tracking-widest text-[#217bc6] uppercase font-mono block mb-4">
            Loved by Senders
          </span>
          <h2 className="section-heading mt-3 mb-4 font-extrabold text-[--text-primary] tracking-tight">
            Trusted with what matters most.
          </h2>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="w-full overflow-hidden py-4 relative">
        {/* Fading overlay edges for smooth visual transition */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFBFE] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFBFE] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {displayItems.map((t, i) => (
            <div
              key={i}
              className="inline-block bg-white rounded-[24px] border border-slate-200/60 p-5 sm:p-7 w-[280px] sm:w-[320px] md:w-[360px] mx-3 sm:mx-4 shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-normal"
            >
              {/* Star Rating */}
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-[0.9rem] font-medium leading-relaxed text-slate-600 mb-6 min-h-[72px]">
                &quot;{t.content}&quot;
              </p>

              {/* User details */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#217bc6]/10 flex items-center justify-center text-[#217bc6] text-xs font-extrabold">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-[0.875rem] text-[--text-primary] leading-none">
                    {t.name}
                  </p>
                  <p className="text-[0.6875rem] font-bold font-mono text-slate-400 mt-1.5 leading-none">
                    {t.route}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
