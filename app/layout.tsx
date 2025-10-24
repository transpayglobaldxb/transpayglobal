import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "TransPay Global - Complete Financial Ecosystem for Global Opportunities",
  description:
    "Access premium financial services worldwide with TransPay Global. Get loans, credit cards, visa assistance, scholarships, AI trading, health consultancy, legal services, travel perks, and global job opportunities - all in one secure platform.",
  keywords:
    "financial services, global banking, international loans, credit cards, visa services, scholarships, AI trading, cryptocurrency, health consultancy, legal services, travel booking, job opportunities, financial ecosystem, cross-border payments, international money transfer",
  authors: [{ name: "TransPay Global Team" }],
  creator: "TransPay Global",
  publisher: "TransPay Global",
  applicationName: "TransPay Global",
  metadataBase: new URL("https://transpayglobal.com"),
  openGraph: {
    title:
      "TransPay Global - Complete Financial Ecosystem for Global Opportunities",
    description:
      "Access premium financial services worldwide. Loans, credit cards, visa assistance, scholarships, AI trading, health & legal consultancy, travel perks, and global jobs.",
    type: "website",
    locale: "en_US",
    siteName: "TransPay Global",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TransPay Global - Your Complete Financial Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TransPay Global - Complete Financial Ecosystem",
    description:
      "Access premium financial services worldwide. Loans, scholarships, trading, health & legal services, travel perks, and global jobs.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#213E63" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="TransPay Global" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
