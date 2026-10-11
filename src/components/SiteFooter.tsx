import Container from "@/components/Container";
import type { SiteContent } from "@/types/content";

export default function SiteFooter({ content }: { content: SiteContent }) {
  const { footer } = content;

  return (
    <footer className="bg-navy-deep py-6 text-[12.5px] text-[#9CA8B8]">
      <Container>
        <div className="mb-5 border-b border-white/10 pb-5">
          <h3 className="mb-2.5 text-[13px] font-bold tracking-wide text-cream uppercase">{footer.hoursHeading}</h3>
          <ul className="space-y-1.5">
            {content.business.hoursSchedule.map((row) => (
              <li key={row.days} className="flex flex-wrap gap-x-4">
                <span className="w-40 shrink-0">{row.days}</span>
                <span className="font-bold text-cream">{row.times.join("  ·  ")}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2.5">{content.business.addressLine} — {content.business.landmark}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5">
          <span>{footer.copyright}</span>
          <span>{footer.disclaimer}</span>
        </div>
      </Container>
    </footer>
  );
}
