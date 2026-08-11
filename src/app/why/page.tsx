import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhyHero from "@/components/whysection/WhyHero";
import FeatureHighlights from "@/components/whysection/FeatureHighlights";
import StatsSection from "@/components/whysection/StatsSection";
import FeatureGrid from "@/components/whysection/FeatureGrid";
import ComparisonSection from "@/components/whysection/ComparisonSection";
import TestimonialsSection from "@/components/homesection/TestimonialsSection";
import WhyCTA from "@/components/whysection/WhyCTA";

export const metadata: Metadata = {
  title: "Why ImproPay – Fast, Fair & Secure Global Transfers",
  description:
    "Discover why ImproPay is the smart choice for international money transfers. Transparent fees, instant speed, bank-level security, and 150+ countries.",
  openGraph: {
    title: "Why ImproPay",
    description:
      "Explore the benefits of ImproPay — transparent fees, instant transfers, and trusted by millions worldwide.",
    type: "website",
  },
};

export default function WhyImpropayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f4f7fa]">
        <WhyHero />
        <FeatureHighlights />
        <StatsSection />
        <FeatureGrid />
        <ComparisonSection />
        <TestimonialsSection />
        <WhyCTA />
      </main>
      <Footer />
    </>
  );
}
