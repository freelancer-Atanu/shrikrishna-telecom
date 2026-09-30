import Image from "next/image";
import Container from "@/components/Container";
import type { SiteContent } from "@/types/content";

export default function Owner({ content }: { content: SiteContent }) {
  const { business, owner } = content;

  return (
    <section id="owner" aria-label="About the proprietor" className="bg-navy py-15 text-cream">
      <Container className="grid grid-cols-1 items-center gap-11 md:grid-cols-[260px_1fr]">
        <div className="max-w-[220px] overflow-hidden rounded border-4 border-cream/15 md:max-w-none">
          <Image
            src="/images/taraknath-majumdar.webp"
            alt={owner.photoAlt}
            width={260}
            height={320}
            className="h-80 w-full object-cover"
          />
        </div>
        <div>
          <blockquote className="mb-4.5 font-heading text-xl font-medium normal-case leading-snug text-white">
            &ldquo;{owner.quote}&rdquo;
          </blockquote>
          <p className="text-[15px] font-bold">{business.ownerName}</p>
          <p className="mt-0.5 text-[13px] text-amber">{owner.roleLabel}</p>
        </div>
      </Container>
    </section>
  );
}
