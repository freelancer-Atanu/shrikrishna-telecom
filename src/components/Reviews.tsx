import Button from "@/components/Button";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import type { SiteContent } from "@/types/content";

function Stars({ rating }: { rating: number }) {
  return (
    <p className="mb-3 text-amber" aria-label={`Rated ${rating} out of 5 stars`}>
      <span aria-hidden="true" className="tracking-widest">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </span>
    </p>
  );
}

export default function Reviews({ content }: { content: SiteContent }) {
  const { business, reviews } = content;

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-15">
      <Container>
        <SectionHeading headingId="reviews-heading" label={reviews.label} heading={reviews.heading} body={reviews.body} />
        <ul className="grid grid-cols-1 gap-4.5 md:grid-cols-3">
          {reviews.items.map((review) => (
            <li key={review.authorName} className="rounded border border-line bg-white p-5.5 transition-all hover:-translate-y-1 hover:shadow-lg">
              <Stars rating={review.rating} />
              <p className="mb-4 text-sm text-[#3E453F]">&ldquo;{review.quote}&rdquo;</p>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream font-heading text-[13px] font-bold text-steel" aria-hidden="true">
                  {review.authorName.charAt(0)}
                </span>
                <span className="text-[13px] font-bold">{review.authorName}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6.5 flex flex-wrap items-center justify-between gap-5 border border-line bg-white px-5.5 py-4.5">
          <p className="max-w-[46ch] text-[13.5px] text-muted">
            <Icon name="google" className="mr-1.5 text-amber" />
            {reviews.ctaText}
          </p>
          <Button href={business.mapsUrl} variant="outline" icon="star" external>
            {reviews.ctaButton}
          </Button>
        </div>
      </Container>
    </section>
  );
}
