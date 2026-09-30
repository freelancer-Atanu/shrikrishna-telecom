import Image from "next/image";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { whatsappHref } from "@/lib/links";
import type { SiteContent } from "@/types/content";

export default function Products({ content }: { content: SiteContent }) {
  const { business, products } = content;
  const { deals, newArrivals } = products;

  return (
    <section id="products" aria-labelledby="products-heading" className="py-15">
      <Container>
        <SectionHeading headingId="products-heading" label={products.label} heading={products.heading} body={products.body} />

        <div className="mb-12 rounded bg-navy p-6 text-cream md:p-8">
          <h3 className="mb-1 flex items-center gap-2 text-lg normal-case tracking-normal text-white">
            <span className="text-amber">
              <Icon name="tag" />
            </span>
            {deals.heading}
          </h3>
          <p className="mb-5 text-sm normal-case tracking-normal text-[#C9D3DE]">{deals.body}</p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {deals.items.map((item) => (
              <li key={item.title} className="rounded border border-cream/20 p-4 transition-colors hover:border-amber">
                <p className="text-[11px] font-bold tracking-wide text-[#9CA8B8] uppercase">{deals.pricePrefix}</p>
                <p className="mb-1 font-heading text-3xl text-amber">{item.price}</p>
                <h4 className="mb-1 text-[15px] normal-case tracking-normal text-white">{item.title}</h4>
                <p className="mb-3 text-[13px] normal-case tracking-normal text-[#C9D3DE]">{item.description}</p>
                <a
                  href={whatsappHref(business, `Hi, I'd like ${item.title.toLowerCase()} for my phone. Model: `)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-amber hover:text-white"
                >
                  <Icon name="whatsapp" />
                  {deals.ctaLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="mb-1 text-lg normal-case tracking-normal">{newArrivals.heading}</h3>
          <p className="mb-5 text-sm normal-case tracking-normal text-muted">{newArrivals.body}</p>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            {newArrivals.items.map((item) => (
              <li
                key={item.model}
                className="group relative overflow-hidden rounded border-2 border-amber/30 bg-cream transition-all hover:-translate-y-1 hover:border-amber hover:shadow-lg"
              >
                <span className="absolute top-0 left-0 z-10 bg-amber px-3 py-1 text-[11px] font-bold tracking-wide text-navy-deep uppercase">
                  {item.badge}
                </span>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4">
                  <span className="text-[11px] font-bold tracking-wide text-steel uppercase">{item.brand}</span>
                  <h4 className="mt-0.5 mb-1.5 text-[15px] normal-case tracking-normal">{item.model}</h4>
                  <ul className="mb-2.5 space-y-1 text-[13px] normal-case tracking-normal text-muted">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-1.5">
                      <span className="text-amber" aria-hidden="true">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                  <p className="mb-3 font-heading text-base text-amber">{item.price}</p>
                  <a
                    href={whatsappHref(business, `Hi, I'd like to check availability of the ${item.brand} ${item.model}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-steel hover:text-navy"
                  >
                    <Icon name="whatsapp" />
                    {newArrivals.ctaLabel}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mb-5 text-lg normal-case tracking-normal">{products.popularHeading}</h3>
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
