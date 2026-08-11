import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import AboutHero from "@/components/aboutussection/AboutHero";
import OurStory from "@/components/aboutussection/OurStory";
import MissionVision from "@/components/aboutussection/MissionVision";
import Stats from "@/components/aboutussection/Stats";
import LeadershipTeam from "@/components/aboutussection/LeadershipTeam";
import CoreValues from "@/components/aboutussection/CoreValues";
import GlobalOffices from "@/components/aboutussection/GlobalOffices";
import CareersCTA from "@/components/aboutussection/CareersCTA";
export const metadata = {
  title: "About Us | ImproPay",
  description: "Learn about ImproPay's mission to make international money transfers faster, safer, and more transparent.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        <AboutHero />
        <OurStory />
        <MissionVision />
        <Stats />
        <LeadershipTeam />
        <CoreValues />
        <GlobalOffices />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}
