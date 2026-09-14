import type { SiteContent } from "@/types/content";

type Business = SiteContent["business"];

export function telHref(business: Business): string {
  return `tel:${business.phoneTel}`;
}

export function whatsappHref(business: Business, message?: string): string {
  const text = message ?? business.whatsappDefaultMessage;
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${business.whatsappNumber}${query}`;
}
