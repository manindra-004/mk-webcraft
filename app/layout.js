import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./smooth-scroll";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MK Webcraft | Digital Design & Brand Development Agency",
  description:
    "We create digital designs that help brands move faster and convert better. Digital design studio — UX/UI, development, branding, and ongoing support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} h-full scroll-smooth overflow-x-hidden`}>
      <body className="min-h-full overflow-x-hidden bg-white font-sans text-[#0c0c0c] antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
