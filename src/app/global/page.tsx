import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalHero from "@/components/globalsection/GlobalHero";
import GlobalExplorer from "@/components/globalsection/GlobalExplorer";

import GlobalCTA from "@/components/globalsection/GlobalCTA";

export const metadata: Metadata = {
  title: "Global Presence & Supported Countries – ImproPay",
  description:
    "Explore ImproPay's worldwide payout corridors across 9 countries. Fast, secure, and regulated international money transfers.",
  openGraph: {
    title: "Global Presence & Supported Countries | ImproPay",
    description:
      "Send money to 9 countries with guaranteed mid-market exchange rates, bank-grade encryption, and instant delivery.",
    type: "website",
  },
};

export default function GlobalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f4f7fa]">
        <GlobalHero />
        <GlobalExplorer />

        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}

