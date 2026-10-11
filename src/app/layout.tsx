import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/lib/fontawesome";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { getSiteContent } from "@/content";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const content = getSiteContent();

const title = `${content.business.name} — Onda, Bankura`;
const description =
  "Trusted mobile shop in Onda, Bankura since 2010 — all brands, with the full realme & Vivo range in stock. Screen glass from ₹80, back covers from ₹100, flip covers from ₹100, home electronics, any-brand laptops on order, plus repair, recharge, passport photo and Xerox — open Mon–Fri 9 AM to 9 PM, Sat–Sun 9 AM to 1:30 PM and 5 PM to 9 PM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${content.business.shortName}`,
  },
  description,
  keywords: [
    "mobile shop Onda",
    "realme store Onda",
    "Vivo mobile shop Bankura",
    "mobile shop Bankura",
    "mobile accessories Onda",
    "mobile repair Onda",
    "laptop order Bankura",
    "Sri Krishna Telecom",
    "phone recharge Onda Bazar",
    "passport photo Onda",
  ],
  authors: [{ name: content.business.ownerName }],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.webp", type: "image/webp" }],
    apple: "/favicon.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: content.business.name,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col pb-14 sm:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-deep"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
