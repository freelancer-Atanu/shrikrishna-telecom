import Container from "@/components/Container";
import type { SiteContent } from "@/types/content";

export default function SiteFooter({ content }: { content: SiteContent }) {
  const { footer } = content;

  return (
    <footer className="bg-charcoal-deep py-6 text-[12.5px] text-[#9BA69F]">
      <Container className="flex flex-wrap justify-between gap-2.5">
        <span>{footer.copyright}</span>
        <span>{footer.disclaimer}</span>
      </Container>
    </footer>
  );
}
