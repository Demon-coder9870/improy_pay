"use client";

interface FlagIconProps {
  code: string; // ISO 2-letter country code (e.g., "us", "in", "gb") OR currency code (e.g., "USD", "INR", "GBP")
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  alt?: string;
}

const currencyToCountry: Record<string, string> = {
  USD: "us",
  EUR: "eu",
  GBP: "gb",
  AED: "ae",
  INR: "in",
  AUD: "au",
  CAD: "ca",
  SGD: "sg",
  SAR: "sa",
  NGN: "ng",
  PKR: "pk",
  PHP: "ph",
  BDT: "bd",
  VND: "vn",
  IDR: "id",
  KES: "ke",
  GHS: "gh",
  EGP: "eg",
  MXN: "mx",
  BRL: "br",
  COP: "co",
  PLN: "pl",
  JMD: "jm",
  JPY: "jp",
  CNY: "cn",
  HKD: "hk",
  NZD: "nz",
  CHF: "ch",
  SEK: "se",
  NOK: "no",
  ZAR: "za",
  TRY: "tr",
  THB: "th",
  MYR: "my"
};

const sizeClasses = {
  sm: "w-4 h-3 rounded-[2px]",
  md: "w-6 h-4 rounded-sm",
  lg: "w-8 h-5 rounded-md",
  xl: "w-10 h-7 rounded-md"
};

export default function FlagIcon({
  code,
  className,
  size = "md",
  alt
}: FlagIconProps) {
  if (!code) return null;

  const normalized = code.trim().toUpperCase();
  // Check if it's a 3-letter currency code or 2-letter ISO country code
  const countryCode = (
    currencyToCountry[normalized] ||
    (normalized.length === 2 ? normalized.toLowerCase() : "us")
  ).toLowerCase();

  const baseClass = className || `${sizeClasses[size]} object-cover shadow-sm border border-black/5 shrink-0 inline-block align-middle`;

  return (
    <img
      src={`https://flagcdn.com/w80/${countryCode}.png`}
      srcSet={`https://flagcdn.com/w160/${countryCode}.png 2x`}
      alt={alt || `${code} flag`}
      className={baseClass}
      loading="lazy"
      onError={(e) => {
        // Fallback if flag fails to load
        (e.target as HTMLElement).style.display = "none";
      }}
    />
  );
}
