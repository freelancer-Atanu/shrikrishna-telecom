import Icon from "@/components/Icon";
import { telHref } from "@/lib/links";
import type { SiteContent } from "@/types/content";

export default function TopBar({ content }: { content: SiteContent }) {
  const { business, topbar } = content;

  return (
    <div className="bg-navy-deep text-[13px] text-[#B7C2CE]">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-1.5 px-6 py-2">
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <Icon name="location" className="mr-1.5 text-amber" />
          {topbar.hoursAndLocation}
        </a>
        <a href={telHref(business)} className="hover:text-white">
          <Icon name="phone" className="mr-1.5 text-amber" />
          {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
