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
  "Mobile, laptop and home appliance sales and service in Onda, Bankura. Repairs, recharge, accessories, passport photo and Xerox — open all days, 9:30 AM to 8:30 PM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${content.business.shortName}`,
  },
  description,
  keywords: [
    "mobile repair Onda",
    "mobile shop Bankura",
    "laptop repair Onda",
    "Sri Krishna Telecom",
    "phone recharge Onda Bazar",
    "passport photo Onda",
  ],
  authors: [{ name: content.business.ownerName }],
  alternates: { canonical: "/" },
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-charcoal-deep"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
