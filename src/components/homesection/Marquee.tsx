"use client";

import { useState, useEffect, useCallback } from "react";
import FlagIcon from "@/components/ui/FlagIcon";

interface RateItem {
  from: string;
  to: string;
  type: "rate";
}

interface TextItem {
  label: string;
  type: "text";
}

type TickerItem = RateItem | TextItem;

const tickerConfig: TickerItem[] = [
  { from: "GBP", to: "NGN", type: "rate" },
  { from: "EUR", to: "PKR", type: "rate" },
  { label: "SECURE & CONFIDENTIAL", type: "text" },
  { label: "GLOBAL OPERATIONS", type: "text" },
  { from: "AED", to: "INR", type: "rate" },
  { from: "AED", to: "PHP", type: "rate" },
];

// Fallback rates (AED base) shown while loading or if API fails
const fallbackRates: Record<string, number> = {
  AED: 1, USD: 0.27, GBP: 0.22, NGN: 430, EUR: 0.25, PKR: 75.8,
  INR: 22.75, PHP: 15.33,
};

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY || "8dc667bfc14b4f8679a75507";

function computeRate(
  rates: Record<string, number>,
  from: string,
  to: string
): string {
  const fromRate = rates[from] || 1;
  const toRate = rates[to] || 1;
  const crossRate = toRate / fromRate;

  // Format: show 2 decimals for small rates, 0 decimals for large rates
  if (crossRate >= 100) {
    return crossRate.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  return crossRate.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Marquee() {
  const [rates, setRates] = useState<Record<string, number>>(fallbackRates);

  const fetchRates = useCallback(async () => {
    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/AED`
      );
      const data = await res.json();
      if (data.result === "success") {
        setRates(data.conversion_rates);
      }
    } catch {
      // Keep using fallback rates
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  // Build display items with computed live rates
  const tickerItems = tickerConfig.map((item) => {
    if (item.type === "rate") {
      return { ...item, value: computeRate(rates, item.from, item.to) };
    }
    return item;
  });

  // Duplicate list to create a seamless looping effect
  const displayItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#e8eff6] border-y border-slate-200/50 overflow-hidden py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 mx-8 font-mono text-[0.75rem] md:text-[0.8125rem] tracking-wider font-extrabold"
          >
            {item.type === "rate" ? (
              <span className="text-[#1e3a5f] flex items-center gap-2">
                <FlagIcon code={item.from} className="w-4 h-3 rounded-sm shadow-sm" />
                <span>{item.from}</span>
                <span className="text-slate-400">→</span>
                <FlagIcon code={item.to} className="w-4 h-3 rounded-sm shadow-sm" />
                <span>{item.to}</span>
                <span className="text-[#10b981] ml-1">{item.value}</span>
              </span>
            ) : (
              <span className="text-[#217bc6]">{item.label}</span>
            )}
            <span className="text-[#217bc6] text-[10px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
