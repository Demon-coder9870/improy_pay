import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorksHero from "@/components/howitworkssection/HowItWorksHero";
import StepByStep from "@/components/howitworkssection/StepByStep";
import FeaturesBenefits from "@/components/howitworkssection/FeaturesBenefits";
import DeliveryOptions from "@/components/howitworkssection/DeliveryOptions";
import HowItWorksCTA from "@/components/howitworkssection/HowItWorksCTA";

export const metadata = {
  title: "How It Works | ImproPay",
  description: "Discover how easy it is to send money internationally with ImproPay in 4 simple steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HowItWorksHero />
        <StepByStep />
        <FeaturesBenefits />
        <DeliveryOptions />
        <HowItWorksCTA />
      </main>
      <Footer />
    </>
  );
}
