import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contactsection/ContactHero";
import ContactMethods from "@/components/contactsection/ContactMethods";
import ContactForm from "@/components/contactsection/ContactForm";
import OfficeLocations from "@/components/contactsection/OfficeLocations";
import ContactFeatures from "@/components/contactsection/ContactFeatures";

export const metadata = {
  title: "Contact Us | ImproPay",
  description: "Get in touch with ImproPay's support team. We're here to help you 24/7 with your international money transfers.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden w-full pt-28 sm:pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#185ea6] via-[#217bc6] to-[#185ea6] text-white">
        {/* Ambient Fluid Glow Orbs on Blue Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
          <div className="absolute -top-32 left-1/4 w-[700px] h-[600px] bg-cyan-400/20 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[150px]" />
          <div className="absolute -bottom-24 left-1/3 w-[650px] h-[550px] bg-indigo-400/20 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,transparent_65%)]" />
        </div>

        <div className="container-main relative z-10">
          <ContactHero />
          <ContactMethods />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-20">
            <ContactForm />
            <OfficeLocations />
          </div>

          <ContactFeatures />
        </div>
      </main>
      <Footer />
    </>
  );
}
