import Container from "@/components/Container";
import type { SiteContent } from "@/types/content";

export default function SiteFooter({ content }: { content: SiteContent }) {
  const { footer } = content;

  return (
    <footer className="bg-navy-deep py-6 text-[12.5px] text-[#9CA8B8]">
      <Container className="flex flex-wrap justify-between gap-2.5">
        <span>{footer.copyright}</span>
        <span>{footer.disclaimer}</span>
      </Container>
    </footer>
  );
}
