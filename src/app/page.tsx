import BrandStrip from "@/components/BrandStrip";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Owner from "@/components/Owner";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyBar from "@/components/StickyBar";
import StructuredData from "@/components/StructuredData";
import TopBar from "@/components/TopBar";
import { getSiteContent } from "@/content";

export default function Home() {
  const content = getSiteContent();

  return (
    <>
      <StructuredData content={content} />
      <TopBar content={content} />
      <SiteHeader content={content} />
      <main id="main-content">
        <Hero content={content} />
        <BrandStrip content={content} />
        <Services content={content} />
        <Products content={content} />
        <Owner content={content} />
        <Reviews content={content} />
        <Contact content={content} />
      </main>
      <SiteFooter content={content} />
      <StickyBar content={content} />
    </>
  );
}
