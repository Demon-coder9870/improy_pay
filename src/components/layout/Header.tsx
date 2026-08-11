"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Zap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";

const navItems = [
  { label: "Why ImproPay", href: "/why" },
  { label: "How it works", href: "/howitworks" },
  { label: "Help & FAQs", href: "/faq" },
  { label: "Global", href: "/global" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(10);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_1px_0_rgba(0,0,0,0.04)] border-b border-white/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-[68px]" aria-label="Main">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image 
              src="/images/impropay-logo.png" 
              alt="ImproPay Logo" 
              width={180} 
              height={50} 
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-[0.8125rem] font-medium text-[--text-body] hover:text-[--text-primary] rounded-lg hover:bg-black/[0.03] transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">

            <Link
              href="#"
              className="primary-button text-[0.9rem] py-2.5 px-5 rounded-full"
            >
              Start a transfer
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 rounded-xl text-[--text-body] hover:text-[--text-primary] hover:bg-black/[0.03] transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-black/[0.04] overflow-hidden"
          >
            <div className="container-main py-4 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[0.9375rem] font-medium text-[--text-primary] hover:bg-black/[0.03] rounded-xl transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 mt-2 border-t border-[--border]">

                <Link
                  href="#"
                  className="primary-button flex-1 justify-center text-[0.875rem] py-2.5 rounded-full"
                >
                  Start a transfer
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
