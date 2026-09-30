import Container from "@/components/Container";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/types/content";

export default function Services({ content }: { content: SiteContent }) {
  const { services } = content;

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-15">
      <Container>
        <SectionHeading headingId="services-heading" label={services.label} heading={services.heading} body={services.body} />
        <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
          {services.items.map((item) => (
            <li key={item.title} className="bg-cream p-6.5 transition-colors hover:bg-white">
              <span className="mb-4 flex h-10 w-10 items-center justify-center bg-navy text-[17px] text-amber">
                <Icon name={item.icon} />
              </span>
              <h3 className="mb-2 text-base normal-case tracking-normal">{item.title}</h3>
              <p className="mb-2.5 text-[13.5px] normal-case tracking-normal text-muted">{item.description}</p>
              <p className="text-[12.5px] font-bold text-steel">{item.price}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
