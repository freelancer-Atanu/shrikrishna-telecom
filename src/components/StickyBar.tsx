import Icon from "@/components/Icon";
import { telHref, whatsappHref } from "@/lib/links";
import type { SiteContent } from "@/types/content";

export default function StickyBar({ content }: { content: SiteContent }) {
  const { business, stickyBar } = content;

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-cream/15 bg-navy px-3.5 py-2.5 sm:hidden"
    >
      <a href={telHref(business)} className="flex flex-col items-center gap-1 text-cream transition-transform hover:-translate-y-0.5">
        <Icon name="phone" className="text-xl text-amber" />
        <span className="text-[11px] font-bold uppercase tracking-wide">{stickyBar.call}</span>
      </a>
      <a
        href={whatsappHref(business)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-cream transition-transform hover:-translate-y-0.5"
      >
        <Icon name="whatsapp" className="text-xl text-[#25D366]" />
        <span className="text-[11px] font-bold uppercase tracking-wide">{stickyBar.whatsapp}</span>
      </a>
      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-cream transition-transform hover:-translate-y-0.5"
      >
        <Icon name="directions" className="text-xl text-amber" />
        <span className="text-[11px] font-bold uppercase tracking-wide">{stickyBar.directions}</span>
      </a>
    </nav>
  );
}
