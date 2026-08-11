import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqHero from "@/components/faqsection/FaqHero";
import FaqAccordion from "@/components/faqsection/FaqAccordion";
import FaqCTA from "@/components/faqsection/FaqCTA";

/**
 * FAQ Page – Provides a vibrant, animated FAQ section with hero, accordion, and CTA.
 */
export const metadata = {
  title: "FAQ & Help Center | ImproPay",
  description: "Find answers to frequently asked questions about sending money, exchange rates, and using your ImproPay account.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden w-full pt-24 pb-16 min-h-screen bg-[#f4f7fa]">
        {/* Dynamic Background – subtle gradient and pulsing blobs for premium feel */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-white/40 to-transparent"></div>
          <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-blue-300/10 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
          <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-purple-300/5 blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
        </div>
        <div className="container-main relative z-10 space-y-16">
          <FaqHero />
          <FaqAccordion />
          <FaqCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
