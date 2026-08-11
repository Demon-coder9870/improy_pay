"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  Globe2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FlagIcon from "@/components/ui/FlagIcon";

const OFFICES = [
  {
    city: "London",
    country: "United Kingdom",
    code: "GB",
    role: "Global Headquarters",
    address: "25 Canada Square, Canary Wharf, London E14 5LB",
    license: "FCA Regulated #928190",
    timezone: "GMT / UTC+0"
  },
  {
    city: "New York",
    country: "United States",
    code: "US",
    role: "Americas Headquarters",
    address: "1 World Trade Center, Suite 8500, New York, NY 10007",
    license: "FinCEN MSB #3100021",
    timezone: "EST / UTC-5"
  },
  {
    city: "Singapore",
    country: "Singapore",
    code: "SG",
    role: "APAC Regional Hub",
    address: "Marina Bay Financial Centre, Tower 2, Singapore 018983",
    license: "MAS Major Payment Institution",
    timezone: "SGT / UTC+8"
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    code: "AE",
    role: "MENA Regional Hub",
    address: "Gate Precinct 4, DIFC, Dubai, UAE",
    license: "DFSA / Central Bank of UAE",
    timezone: "GST / UTC+4"
  },
  {
    city: "Toronto",
    country: "Canada",
    code: "CA",
    role: "North America Hub",
    address: "100 King Street West, Toronto, ON M5X 1A9",
    license: "FINTRAC Registered #M210984",
    timezone: "EST / UTC-5"
  },
  {
    city: "Sydney",
    country: "Australia",
    code: "AU",
    role: "Oceania Operations",
    address: "200 George Street, Sydney NSW 2000",
    license: "AUSTRAC Registered #100874",
    timezone: "AEST / UTC+10"
  }
];

export default function GlobalOfficesSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Building2 size={14} className="text-[#217bc6]" />
            <span className="text-[0.75rem] font-bold text-[#217bc6] uppercase tracking-wider">
              International Headquarters & Hubs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Local presence,{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              worldwide expertise
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed">
            Our global teams and licensed regional operational centers ensure round-the-clock compliance, banking relations, and customer support.
          </p>
        </motion.div>

        {/* Centerpiece Image & Headquarters Feature */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900">
              <Image
                src="/images/global_headquarters.png"
                alt="Impropay International Financial Headquarters"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs font-bold text-white">Global Financial Headquarters</div>
                  <div className="text-[11px] text-white/60">Canary Wharf, London & Manhattan, NYC</div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold">
                  24/7 Operations
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Regulated and licensed across Tier-1 financial jurisdictions
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Impropay maintains direct local regulatory authorization with the UK Financial Conduct Authority (FCA), US FinCEN, Monetary Authority of Singapore (MAS), and the UAE Financial Services Authority.
            </p>

            <div className="space-y-3.5 pt-2">
              {[
                "Direct local clearing integrations with central banks",
                "Segregated client money accounts held at tier-1 international banks",
                "24/7 localized support teams across multiple timezones in 10+ languages"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#217bc6] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={13} className="stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {OFFICES.map((office, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/80 hover:bg-white hover:border-[#217bc6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FlagIcon
                    code={office.code}
                    className="w-9 h-6 rounded-md object-cover shadow-sm border border-slate-200"
                    alt={office.country}
                  />
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#217bc6] text-[10px] font-extrabold uppercase">
                    {office.role}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  {office.city}, {office.country}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex items-start gap-1.5">
                  <MapPin size={14} className="shrink-0 text-slate-400 mt-0.5" />
                  <span>{office.address}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-semibold text-[#217bc6]">{office.license}</span>
                <span className="text-slate-400 font-mono">{office.timezone}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
