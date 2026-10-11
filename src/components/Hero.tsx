import Button from "@/components/Button";
import Container from "@/components/Container";
import HeroVideo from "@/components/HeroVideo";
import { telHref, whatsappHref } from "@/lib/links";
import type { SiteContent } from "@/types/content";

export default function Hero({ content }: { content: SiteContent }) {
  const { business, hero } = content;

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5 [background-image:linear-gradient(#F7F3EA_1px,transparent_1px),linear-gradient(90deg,#F7F3EA_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-11 py-10 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <p className="animate-rise mb-4 flex items-center gap-2.5 text-[13.5px] font-bold uppercase tracking-wide text-amber">
            <span className="h-0.5 w-6.5 bg-amber" aria-hidden="true" />
            {hero.kicker}
          </p>
          <h1 className="animate-rise text-[30px] leading-tight text-white [animation-delay:80ms] md:text-[42px]">
            {hero.headingLead}
            <br />
            <span className="text-amber">{hero.headingAccent}</span>
          </h1>
          <p className="animate-rise mt-4.5 max-w-[48ch] text-base text-[#C9D3DE] normal-case tracking-normal [animation-delay:160ms]">
            {hero.body}
          </p>
          <div className="animate-rise mt-7 flex flex-wrap gap-3 [animation-delay:240ms]">
            <Button href={whatsappHref(business, business.whatsappDefaultMessage)} variant="whatsapp" icon="whatsapp" size="lg" external>
              {hero.ctaWhatsapp}
            </Button>
            <Button href={telHref(business)} variant="line" icon="phone" size="lg" shine>
              {hero.ctaCall}
            </Button>
            <Button href={business.mapsUrl} variant="steel" icon="directions" size="lg" external>
              {hero.ctaDirections}
            </Button>
          </div>
          <dl className="animate-rise mt-8 flex flex-wrap border border-cream/20 [animation-delay:320ms]">
            {hero.priceStrip.map((item) => (
              <div key={item.label} className="flex-1 basis-1/2 border-r border-b border-cream/20 px-4 py-3.5 last:border-r-0 sm:basis-auto sm:border-b-0">
                <dd className="font-heading text-lg text-amber">{item.value}</dd>
                <dt className="text-[11.5px] text-[#9CA8B8]">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative animate-rise overflow-hidden rounded border-[5px] border-cream/10">
          <HeroVideo src="/intro.mp4" label={hero.photoAlt} />
          <p className="absolute bottom-3 left-3 bg-amber px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-navy-deep">
            {hero.photoTag}
          </p>
        </div>
      </Container>
    </section>
  );
}
