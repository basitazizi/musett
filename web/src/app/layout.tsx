import type { Metadata } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
  IM_Fell_English,
} from "next/font/google";
import "./globals.css";
import IntroShellHost from "./intro-shell-host";

const display = Cinzel_Decorative({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const caps = Cinzel({
  variable: "--font-caps",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const accent = IM_Fell_English({
  variable: "--font-accent",

  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "YourMuse Tattoo | Sacred Ink Atelier",
  description: "Gothic luxury tattoo studio landing experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${caps.variable} ${accent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--ink)] text-[var(--paper)]">
        <IntroShellHost>{children}</IntroShellHost>
      </body>
    </html>
  );
}
