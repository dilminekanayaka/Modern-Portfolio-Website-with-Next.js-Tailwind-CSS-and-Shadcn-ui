import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dilmin Ekanayaka - Portfolio",
  description:
    "Modern Portfolio Website with Next.js, Tailwind CSS and Shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} font-primary bg-primary text-white`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
