import { EB_Garamond, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ui = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata = {
  title: "Frame Studio — Monograph & Editorial Archive",
  description:
    "Fine art editorial and documentary commissions across weddings, artists, and architectural corporate houses. Honest light, timeless stillness, authentic human emotion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  );
}
