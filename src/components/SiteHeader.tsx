import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import { telHref, whatsappHref } from "@/lib/links";
import type { SiteContent } from "@/types/content";

export default function SiteHeader({ content }: { content: SiteContent }) {
  const { business, nav, header } = content;

  return (
    <header className="sticky top-0 z-30 bg-cream">
      <Container className="relative flex items-center justify-between gap-2.5 py-3.5">
        <a href="#top" className="flex min-w-0 flex-1 items-center gap-3">
          <Image
            src="/favicon.webp"
            alt={business.name}
            width={40}
            height={40}
            priority
            className="h-9 w-9 shrink-0 object-contain sm:h-10.5 sm:w-10.5"
          />
          <span className="min-w-0 truncate text-[15px] font-semibold tracking-wide normal-case sm:text-lg">
            {business.shortName}
            <span className="block truncate font-body text-[10.5px] font-medium normal-case tracking-normal text-steel sm:text-[11.5px]">
              {business.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden shrink-0 gap-6.5 text-sm font-semibold uppercase tracking-wide md:flex">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-steel">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <Button href={telHref(business)} variant="outline" icon="phone" hideLabelOnNarrow ariaLabel={header.callLabel}>
            {header.callLabel}
          </Button>
          <Button href={whatsappHref(business)} variant="amber" icon="whatsapp" external hideLabelOnNarrow ariaLabel={header.whatsappLabel}>
            {header.whatsappLabel}
          </Button>
          <MobileNav links={nav} menuLabel={header.menuLabel} />
        </div>
      </Container>
    </header>
  );
}
