import Button from "@/components/Button";
import Container from "@/components/Container";
import { telHref, whatsappHref } from "@/lib/links";
import type { SiteContent } from "@/types/content";

export default function Contact({ content }: { content: SiteContent }) {
  const { business, contact } = content;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-steel text-white">
      <Container className="grid grid-cols-1 gap-11 py-13 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 id="contact-heading" className="text-2xl text-white">
            {contact.heading}
          </h2>
          <p className="mt-2.5 max-w-[42ch] text-[15px] normal-case tracking-normal text-[#D6E4EC]">{contact.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={whatsappHref(business)} variant="white" icon="whatsapp" size="lg" external>
              {contact.ctaWhatsapp}
            </Button>
            <Button href={telHref(business)} variant="line" icon="phone" size="lg" shine>
              {contact.ctaCall}
            </Button>
            <Button href={business.mapsUrl} variant="line" icon="directions" size="lg" external>
              {contact.ctaDirections}
            </Button>
          </div>
        </div>
        <dl className="rounded bg-white/10 p-6 text-sm">
          <div className="flex justify-between border-b border-white/20 py-2.5">
            <dt>{contact.card.shopLabel}</dt>
            <dd className="font-bold">{business.name}</dd>
          </div>
          <div className="flex justify-between border-b border-white/20 py-2.5">
            <dt>{contact.card.ownerLabel}</dt>
            <dd className="font-bold">{business.ownerName}</dd>
          </div>
          <div className="flex justify-between border-b border-white/20 py-2.5">
            <dt>{contact.card.phoneLabel}</dt>
            <dd className="font-bold">{business.phoneDisplay}</dd>
          </div>
          <div className="flex justify-between border-b border-white/20 py-2.5">
            <dt>{contact.card.locationLabel}</dt>
            <dd className="font-bold">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {business.addressLine}, {business.addressRegion}
              </a>
            </dd>
          </div>
          <div className="flex justify-between border-b border-white/20 py-2.5">
            <dt>{contact.card.establishedFieldLabel}</dt>
            <dd className="font-bold">{business.establishedLabel}</dd>
          </div>
          <div className="flex justify-between py-2.5">
            <dt>{contact.card.hoursFieldLabel}</dt>
            <dd className="font-bold">{business.hoursLabel}</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
