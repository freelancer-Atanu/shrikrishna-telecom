import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/types/content";

export default function Products({ content }: { content: SiteContent }) {
  const { products } = content;

  return (
    <section id="products" aria-labelledby="products-heading" className="py-15">
      <Container>
        <SectionHeading headingId="products-heading" label={products.label} heading={products.heading} body={products.body} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {products.items.map((item) => (
            <li key={item.title} className="overflow-hidden rounded border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
              <Image src={item.image} alt={item.alt} width={500} height={130} className="h-32.5 w-full object-cover" />
              <div className="p-3.5">
                <h4 className="mb-1 text-[13.5px] font-bold normal-case">{item.title}</h4>
                <span className="text-xs text-muted">{item.meta}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
