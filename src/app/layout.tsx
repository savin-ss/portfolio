import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020205",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Savin S S | AI/ML Engineer & Data Analyst Portfolio",
  description: "AI/ML Engineer and Data Analyst specializing in computer vision, explainable AI (XAI) clinical systems, predictive deep learning, and interactive data telemetry platforms.",
  keywords: [
    "Savin S S",
    "AI/ML Engineer",
    "Data Analyst",
    "Computer Vision Engineer",
    "Explainable AI",
    "Python Developer",
    "Deep Learning",
    "AWS Architect",
    "DevOps"
  ],
  authors: [{ name: "Savin S S" }],
  openGraph: {
    type: "website",
    title: "Savin S S | AI/ML Engineer & Data Analyst Portfolio",
    description: "Explore advanced Computer Vision, Explainable AI (XAI) clinical systems, IoT platforms, and data telemetry solutions.",
    images: [
      {
        url: "/assets/images/savin_new.png",
        width: 1200,
        height: 630,
        alt: "Savin S S Portfolio Logo",
      },
    ],
  },
  icons: {
    icon: "/assets/images/savin_new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-main">
        {children}
      </body>
    </html>
  );
}
