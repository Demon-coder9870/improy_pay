"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Globe2,
  Building2,
  Smartphone,
  MapPin,
  Zap,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
  CheckCircle2
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import FlagIcon from "@/components/ui/FlagIcon";

interface CountryInfo {
  name: string;
  code: string;
  currency: string;
  region: "apac" | "europe" | "north_america" | "mena" | "latam";
  rateVsAED: string;
  speed: "Instant (<2 min)" | "Under 5 mins" | "Same-Day";
  methods: ("bank" | "mobile" | "cash")[];
  popular?: boolean;
}

const COUNTRIES_DATA: CountryInfo[] = [
  // APAC
  { name: "India", code: "IN", currency: "INR", region: "apac", rateVsAED: "22.75", speed: "Instant (<2 min)", methods: ["bank"], popular: true },
  { name: "Sri Lanka", code: "LK", currency: "LKR", region: "apac", rateVsAED: "83.20", speed: "Instant (<2 min)", methods: ["bank"] },
  { name: "Nepal", code: "NP", currency: "NPR", region: "apac", rateVsAED: "36.35", speed: "Instant (<2 min)", methods: ["bank"] },
  { name: "Bangladesh", code: "BD", currency: "BDT", region: "apac", rateVsAED: "32.10", speed: "Instant (<2 min)", methods: ["bank"] },
  { name: "Pakistan", code: "PK", currency: "PKR", region: "apac", rateVsAED: "75.80", speed: "Instant (<2 min)", methods: ["bank"], popular: true },
  { name: "Philippines", code: "PH", currency: "PHP", region: "apac", rateVsAED: "15.33", speed: "Instant (<2 min)", methods: ["bank"], popular: true },

  // MENA & Africa
  { name: "Egypt", code: "EG", currency: "EGP", region: "mena", rateVsAED: "13.15", speed: "Under 5 mins", methods: ["bank", "cash"], popular: true },
  { name: "Nigeria", code: "NG", currency: "NGN", region: "mena", rateVsAED: "414.00", speed: "Instant (<2 min)", methods: ["bank", "mobile"], popular: true },
  { name: "South Africa", code: "ZA", currency: "ZAR", region: "mena", rateVsAED: "5.10", speed: "Instant (<2 min)", methods: ["bank"] },
];

const REGIONS = [
  { id: "all", label: "All Regions" },
  { id: "apac", label: "Asia-Pacific (APAC)" },
  { id: "mena", label: "Middle East & Africa" }
];

export default function GlobalExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((country) => {
      const matchesRegion = selectedRegion === "all" || country.region === selectedRegion;
      const matchesSearch =
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <section id="country-explorer" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Globe2 size={14} className="text-[#217bc6]" />
            <span className="text-[0.75rem] font-bold text-[#217bc6] uppercase tracking-wider">
              Country & Currency Directory
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore our worldwide{" "}
            <span className="bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] bg-clip-text text-transparent">
              payout corridors
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed">
            Search any country, view live mid-market rates against AED, and see available payout methods in each destination.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Bar Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country or currency (e.g., India, PHP, Euro, Nigeria, AED)..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#217bc6] focus:bg-white shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-1 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedRegion === region.id
                    ? "bg-[#217bc6] text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        {/* Country Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredCountries.map((country) => (
              <motion.div
                key={country.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-5 hover:bg-white hover:border-[#217bc6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Flag & Popular Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FlagIcon
                        code={country.code}
                        className="w-10 h-7 rounded-lg object-cover shadow-sm border border-slate-200"
                        alt={`${country.name} flag`}
                      />
                      <div>
                        <h3 className="font-bold text-base text-slate-900 group-hover:text-[#217bc6] transition-colors">
                          {country.name}
                        </h3>
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {country.currency} ({country.code})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rate Card */}
                  <div className="bg-white rounded-2xl p-3 border border-slate-200/60 my-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-medium text-slate-500">1 AED =</span>
                      <span className="text-sm font-extrabold text-slate-900">
                        {country.rateVsAED} {country.currency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-500">Delivery:</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold flex items-center gap-1">
                        <Zap size={10} /> {country.speed}
                      </span>
                    </div>
                  </div>

                  {/* Supported Methods */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Payout Methods:
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {country.methods.includes("bank") && (
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold flex items-center gap-1">
                          <Building2 size={10} /> Bank
                        </span>
                      )}
                      {country.methods.includes("mobile") && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                          <Smartphone size={10} /> Wallet
                        </span>
                      )}
                      {country.methods.includes("cash") && (
                        <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-semibold flex items-center gap-1">
                          <MapPin size={10} /> Cash
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Send Button Link */}
                <Link
                  href="/"
                  className="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-[#217bc6] text-slate-700 group-hover:text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Send to {country.name}
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300 mt-6">
            <Globe2 size={36} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No countries matched &quot;{searchQuery}&quot;</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching for a different country name or ISO currency code.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#217bc6] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
