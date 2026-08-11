import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/homesection/HeroSection";
import Marquee from "@/components/homesection/Marquee";
import FamiliesSection from "@/components/homesection/FamiliesSection";
import ExchangeCalculator from "@/components/homesection/ExchangeCalculator";
import WhyChooseUs from "@/components/homesection/WhyChooseUs";
import CountriesSection from "@/components/homesection/CountriesSection";
import MobileAppSection from "@/components/homesection/MobileAppSection";
import SecuritySection from "@/components/homesection/SecuritySection";
import TestimonialsSection from "@/components/homesection/TestimonialsSection";
import CTASection from "@/components/homesection/CTASection";
import GlobalPresenceSection from "@/components/homesection/GlobalPresenceSection";

export const metadata = {
  title: "Home | ImproPay",
  description: "Send money across the globe in a few taps. Real bank-grade security and transparent pricing.",
};

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <Marquee />
        <ExchangeCalculator />
        <FamiliesSection />
        <WhyChooseUs />
        <CountriesSection />
        <MobileAppSection />
        <SecuritySection />
        <TestimonialsSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
