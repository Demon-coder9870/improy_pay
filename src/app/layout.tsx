import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "@/components/ui/AnimatedCursor";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ImproPay — Send Money Worldwide with Confidence",
  description:
    "Fast, secure, and affordable international money transfers with competitive exchange rates and real-time tracking. Send money to 8 countries with ImproPay.",
  keywords: [
    "money transfer",
    "international transfer",
    "send money",
    "exchange rate",
    "fintech",
    "ImproPay",
    "remittance",
    "global payments",
  ],
  authors: [{ name: "ImproPay" }],
  creator: "ImproPay",
  publisher: "ImproPay",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://impropay.com",
    title: "ImproPay — Send Money Worldwide with Confidence",
    description:
      "Fast, secure, and affordable international money transfers. Send money to 8 countries with the best exchange rates.",
    siteName: "ImproPay",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImproPay — Send Money Worldwide with Confidence",
    description:
      "Fast, secure, and affordable international money transfers. Send money to 8 countries with the best exchange rates.",
    creator: "@impropay",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#217bc6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] font-sans">
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}

