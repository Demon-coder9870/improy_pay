"use client";

import { useState } from "react";
import { ArrowRight, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    transferRef: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send your message. Please try again.");
      }

      setStatus({
        type: "success",
        message: data.message || "Your message has been sent successfully! Our team will respond shortly.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        transferRef: "",
        message: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="lg:col-span-3 rounded-3xl p-6 sm:p-9 md:p-10 bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.14),inset_0_1px_2px_rgba(255,255,255,1)] text-slate-900"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#217bc6] flex items-center justify-center border border-blue-100 shadow-xs">
          <Send size={18} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Send us a message</h2>
      </div>
      <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
        Fill in the details below and our team will get back to you within 24 business hours.
      </p>

      {/* Status Notifications */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className={`mb-6 p-4 rounded-2xl flex items-start gap-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                : "bg-rose-50 border border-rose-200 text-rose-800"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle size={20} className="text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="font-bold text-sm">{status.type === "success" ? "Success!" : "Submission issue"}</p>
              <p className="mt-0.5 leading-relaxed">{status.message}</p>
            </div>
            <button
              onClick={() => setStatus(null)}
              className="text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1 rounded"
              type="button"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              First name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g. Alex"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g. Morgan"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone number (optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 50 000 0000"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Topic</label>
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-700 text-sm font-medium cursor-pointer"
          >
            <option value="">Select a topic...</option>
            <option value="International Money Transfer">International Money Transfer</option>
            <option value="Business & Enterprise API">Business & Enterprise API</option>
            <option value="Account Verification / KYC">Account Verification / KYC</option>
            <option value="Exchange Rates & Pricing">Exchange Rates & Pricing</option>
            <option value="Partnership Inquiry">Partnership Inquiry</option>
            <option value="Other Inquiry">Other Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Transfer reference number (optional)
          </label>
          <input
            type="text"
            name="transferRef"
            value={formData.transferRef}
            onChange={handleChange}
            placeholder="e.g. TXN-2026-XXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe your question or inquiry in detail..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#217bc6] focus:ring-2 focus:ring-[#217bc6]/20 transition-all bg-slate-50/70 focus:bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#1d6fc2] via-[#217bc6] to-[#398ddb] shadow-[0_8px_20px_rgba(33,123,198,0.25)] hover:shadow-[0_12px_28px_rgba(33,123,198,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              <span>Sending message...</span>
            </>
          ) : (
            <>
              <span>Send message</span>
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
