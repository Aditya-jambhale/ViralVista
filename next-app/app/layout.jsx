import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevFlow Social",
  description: "Social Media Analytics Dashboard for professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="preload" href="/favicon.ico" as="image" />
      <link rel="icon" href="/favicon.ico" />
      <title>DevFlow Social</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="DevFlow Social is an advanced analytics dashboard that provides insights into social media performance for professionals."
        />
        <meta
          name="keywords"
          content="social media, analytics, dashboard, insights, DevFlow Social"
        />
        <meta name="author" content="Your Name or Company" />
        <meta property="og:title" content="DevFlow Social" />
        <meta
          property="og:description"
          content="Track and analyze your social media metrics with DevFlow Social."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevFlow Social" />
        <meta
          name="twitter:description"
          content="Analyze your social media performance with DevFlow Social."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.png"
        />
        
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
