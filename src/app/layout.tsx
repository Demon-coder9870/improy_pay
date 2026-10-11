import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
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
  verification: {
    google: "IJ8oq9Ssu7TO-FgggUwtD5B5Inu0wqQ4ntXSiK_OwxM",
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0HTPJCTZN0"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0HTPJCTZN0');
            `,
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ylrc7zqwib");
            `,
          }}
        />
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}

