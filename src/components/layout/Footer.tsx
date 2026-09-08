"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, Play, Mail } from "lucide-react";

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
);
const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const AppleLogoIcon = (props: any) => (
  <svg viewBox="0 0 384 512" fill="currentColor" {...props}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 pr-4">
            <Link href="/" className="flex items-center mb-6 group inline-flex">
              <Image 
                src="/images/impropay-logo.png" 
                alt="ImproPay Logo" 
                width={180} 
                height={50} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[0.875rem] leading-relaxed mb-8 max-w-[320px] text-slate-400">
              Fast, secure, and transparent cross-border remittance for the people who move the world forward.
            </p>
            
            {/* App Download Links */}
            <div>
              <p className="text-[0.6875rem] font-bold font-mono tracking-widest text-slate-500 uppercase mb-4">
                Get the app · Coming soon
              </p>
              <div className="flex flex-wrap gap-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.forex.impronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 hover:bg-white/[0.08] transition-colors"
                >
                  <Play size={16} className="text-white fill-white shrink-0" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] block text-slate-500 uppercase font-bold">Get it on</span>
                    <span className="text-[0.8125rem] font-extrabold text-white">Google Play</span>
                  </div>
                </a>
                
                {/* App Store */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 hover:bg-white/[0.08] transition-colors"
                >
                  <AppleLogoIcon className="text-white w-4 h-4 shrink-0" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] block text-slate-500 uppercase font-bold">Download on</span>
                    <span className="text-[0.8125rem] font-extrabold text-white">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {/* Column 1: Platform */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-[0.75rem] mb-5 tracking-widest uppercase font-mono">Platform</h4>
            <ul className="space-y-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "How it works", href: "/howitworks" },
                { label: "Why ImproPay", href: "/why" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[0.875rem] hover:text-[#217bc6] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-[0.75rem] mb-5 tracking-widest uppercase font-mono">Company</h4>
            <ul className="space-y-3.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Global presence", href: "/global" },
                { label: "Contact", href: "/contact" },
                { label: "Support@impropay.global", href: "mailto:Support@impropay.global" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[0.875rem] hover:text-[#217bc6] transition-colors duration-200 break-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-[0.75rem] mb-5 tracking-widest uppercase font-mono">Follow Us</h4>
            <ul className="space-y-3.5">
              {[
                { label: "Instagram", href: "https://www.instagram.com/impropay_global/", icon: InstagramIcon },
                { label: "Facebook", href: "https://www.facebook.com/impronicstechnologies?mibextid=wwXIfr", icon: FacebookIcon },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/impropay/about/", icon: LinkedinIcon },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-2 text-[0.875rem] hover:text-[#217bc6] transition-colors duration-200 break-all">
                      <Icon className="shrink-0 w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[0.8125rem] text-slate-500">
            © 2026 ImproPay · A product of Impronics Group. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            {[
              { label: "Terms of Service", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Help & FAQs", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
