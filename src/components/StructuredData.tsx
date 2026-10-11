import { SITE_URL } from "@/lib/seo";
import type { SiteContent } from "@/types/content";

export default function StructuredData({ content }: { content: SiteContent }) {
  const { business, reviews } = content;
  const averageRating = reviews.items.reduce((sum, review) => sum + review.rating, 0) / reviews.items.length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: business.name,
    url: SITE_URL,
    telephone: business.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine,
      addressRegion: business.addressRegion,
      addressCountry: "IN",
    },
    openingHours: ["Mo-Fr 09:00-21:00", "Sa-Su 09:00-13:30", "Sa-Su 17:00-21:00"],
    founder: business.ownerName,
    foundingDate: String(business.establishedYear),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.items.length,
    },
    review: reviews.items.map((review) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
      author: { "@type": "Person", name: review.authorName },
      reviewBody: review.quote,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
