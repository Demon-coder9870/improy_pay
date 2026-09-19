"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowUpDown, ChevronDown, Zap, TrendingUp, RefreshCw } from "lucide-react";
import FlagIcon from "@/components/ui/FlagIcon";

const currencies = [
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", symbol: "₹" },
  { code: "LKR", name: "Sri Lankan Rupee", flag: "🇱🇰", symbol: "Rs" },
  { code: "NPR", name: "Nepalese Rupee", flag: "🇳🇵", symbol: "Rs" },
  { code: "BDT", name: "Bangladeshi Taka", flag: "🇧🇩", symbol: "৳" },
  { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬", symbol: "£" },
  { code: "PKR", name: "Pakistani Rupee", flag: "🇵🇰", symbol: "Rs" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", symbol: "₱" },
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", symbol: "₦" },

];

// Fallback rates (AED base) used if the API is unreachable
const fallbackRates: Record<string, number> = {
  AED: 1, INR: 22.75, LKR: 81.5, NPR: 36.4, BDT: 32.5, EGP: 13.3, PKR: 75.8, PHP: 15.6, NGN: 410.5,
};

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState("5,000");
  const [fromCurrency, setFromCurrency] = useState("AED");
  const [toCurrency, setToCurrency] = useState("INR");
  const [liveRates, setLiveRates] = useState<Record<string, number> | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch live rates from Impropay API (AED base)
  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://prod.impropay.global/api/kyc/lulu/exchange-rate");
      const result = await res.json();
      if (result.status === true && Array.isArray(result.data)) {
        const newRates: Record<string, number> = { AED: 1 };
        result.data.forEach((item: { to_currency: string; rate: number }) => {
          newRates[item.to_currency] = item.rate;
        });
        setLiveRates(newRates);
        
        // Use current time as update time
        const date = new Date();
        setLastUpdated(
          date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
        );
      } else {
        throw new Error("Failed to fetch valid rates data");
      }
    } catch {
      // Silently fall back to hardcoded rates
      console.warn("API unavailable, using fallback rates");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  // Use live rates if available, otherwise fallback
  const rates = liveRates ?? fallbackRates;
  const fromRate = rates[fromCurrency] || 1;
  const toRate = rates[toCurrency] || 1;
  const exchangeRate = toRate / fromRate;

  // Clean comma formatting for math calculation
  const cleanAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const recipientGets = cleanAmount * exchangeRate;



  const handleAmountChange = (val: string) => {
    // Only allow numbers and commas
    const clean = val.replace(/[^0-9.]/g, "");
    // Format with commas
    if (clean === "") {
      setAmount("");
      return;
    }
    const num = parseFloat(clean);
    if (isNaN(num)) {
      setAmount(clean);
    } else {
      // Keep trailing decimal if editing
      if (clean.endsWith(".")) {
        setAmount(clean);
      } else {
        setAmount(num.toLocaleString("en-US"));
      }
    }
  };

  return (
    <section id="calculator" className="py-14 md:py-20 bg-white relative">
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50" />
      <div className="container-main relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 text-[#217bc6] text-[0.75rem] font-bold uppercase tracking-widest mb-6">
              See it for yourself
            </div>
            <h2 className="section-heading mb-5 leading-tight tracking-tight font-extrabold text-[--text-primary]">
              Banks hide their cut.
              <br />
              We show every number.
            </h2>
            <p className="body-md mb-8 text-[--text-body] max-w-md">
              The rate you see is the rate they get. Move the amount and watch exactly how much more makes it home.
            </p>

            <div className="space-y-4">
              {[
                "Guaranteed rate, locked before you pay",
                "One transparent fee — no checkout surprises",
                "Real-time tracking until it lands",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-[#217bc6] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[0.875rem] font-semibold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[32px] border border-slate-200/80 p-6 md:p-8 shadow-elevated relative overflow-hidden max-w-xl mx-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[0.75rem] font-bold text-[#217bc6] tracking-widest uppercase">
                  {liveRates ? "Live Rate" : "Rate"}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1 text-[0.75rem] font-bold text-slate-500">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                      {liveRates && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${liveRates ? "bg-emerald-500" : "bg-amber-400"}`}></span>
                    </div>
                    <span>{isLoading ? "Updating…" : lastUpdated ?? "Offline"}</span>
                  </div>
                  <button
                    onClick={fetchRates}
                    disabled={isLoading}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors disabled:opacity-50"
                    aria-label="Refresh rates"
                  >
                    <RefreshCw size={12} className={`text-slate-500 ${isLoading ? "animate-spin" : ""}`} />
                  </button>
                </div>
              </div>

              {/* You Send Box */}
              <div className="bg-[#f8fafc] border border-slate-200/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex-1">
                  <label htmlFor="send-amount" className="block text-[11px] font-bold text-slate-400 mb-1">You send</label>
                  <input
                    id="send-amount"
                    type="text"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className="bg-transparent border-none text-xl sm:text-2xl font-extrabold text-[--text-primary] focus:outline-none p-0 w-full"
                  />
                </div>
                
                {/* Fixed Currency Display */}
                <div className="relative shrink-0 ml-4">
                  <div className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-3.5 py-1.5 font-bold text-[0.875rem] text-[--text-primary]">
                    <FlagIcon code={fromCurrency} size="sm" className="w-5 h-3.5 rounded-[3px] object-cover shadow-xs border border-black/10" />
                    <span>{fromCurrency}</span>
                  </div>
                </div>
              </div>

              {/* Middle Rate Separator */}
              <div className="relative flex items-center justify-center my-5">
                <div className="absolute inset-x-0 h-px bg-slate-200/80" />
                <div className="relative bg-white border border-slate-100 shadow-sm rounded-full px-4 py-1.5 text-[0.75rem] font-bold text-[#217bc6] font-mono">
                  1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                </div>
              </div>

              {/* They Receive Box */}
              <div className="bg-[#f0f7ff]/30 border border-blue-100 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">They receive</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#217bc6] mt-1 font-mono break-all sm:break-normal">
                    {recipientGets > 0 ? recipientGets.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"} {toCurrency}
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 sm:ml-4">
                  <span className="text-[9px] font-extrabold text-[#217bc6] tracking-wider">GUARANTEED</span>
                  {/* Custom Currency Dropdown */}
                  <div className="relative">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-3.5 py-1.5 cursor-pointer font-bold text-[0.875rem] text-[--text-primary] hover:border-[#217bc6]/40 transition-colors">
                      <FlagIcon code={toCurrency} size="sm" className="w-5 h-3.5 rounded-[3px] object-cover shadow-xs border border-black/10" />
                      <span>{toCurrency}</span>
                      <ChevronDown size={14} className="text-slate-400" />
                    </div>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full"
                    >
                      {currencies.map((c) => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Savings Banner */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3.5 flex items-center gap-2 mt-4 text-[0.8125rem] text-slate-600 font-medium">
                <span className="text-emerald-600 font-bold">📈</span>
                <span>
                  ≈ <span className="text-emerald-600 font-extrabold font-mono">{(recipientGets * 0.045).toLocaleString("en-US", { maximumFractionDigits: 0 })} {toCurrency}</span> more than most banks
                </span>
              </div>

              {/* CTA Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button flex justify-center items-center w-full py-4 text-[0.9375rem] rounded-full mt-5 font-bold"
              >
                Start this transfer →
              </a>

              {/* Disclaimer */}
              <p className="text-center text-[10px] text-slate-400 font-bold tracking-wide uppercase mt-4">
                IMPRO fee from 7 AED · No hidden charges. Ever.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
