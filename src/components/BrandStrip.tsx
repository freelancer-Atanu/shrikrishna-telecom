import Container from "@/components/Container";
import type { SiteContent } from "@/types/content";

export default function BrandStrip({ content }: { content: SiteContent }) {
  const { brandStrip } = content;

  return (
    <div className="border-b border-line bg-white py-6.5">
      <Container>
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">{brandStrip.label}</span>
          <span className="text-[12.5px] text-muted">{brandStrip.sub}</span>
        </div>
        {brandStrip.groups.map((group) => (
          <div key={group.label} className="mb-4 last:mb-0">
            <span className="mb-2.5 block text-[11px] font-bold uppercase tracking-wide text-steel">{group.label}</span>
            <ul className="flex flex-wrap items-center gap-3">
              {group.brands.map((brand) => (
                <li
                  key={brand.name}
                  className="flex h-9 items-center gap-2 border border-line px-4 font-heading text-[14.5px] font-semibold normal-case tracking-normal text-charcoal transition-colors hover:border-steel hover:text-steel"
                >
                  {brand.logoSlug && (
                    // eslint-disable-next-line @next/next/no-img-element -- small decorative brand glyph, next/image adds no benefit
                    <img src={`https://cdn.simpleicons.org/${brand.logoSlug}`} alt="" width={16} height={16} className="h-4 w-auto max-w-16 object-contain" />
                  )}
                  {brand.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
}
