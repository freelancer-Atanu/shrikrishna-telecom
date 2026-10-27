import type { IconName } from "@/lib/icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface PriceItem {
  value: string;
  label: string;
}

export interface Brand {
  name: string;
  logoSlug?: string;
  /** Brand promoted with an accent treatment (priority brands for the shop). */
  featured?: boolean;
}

export interface BrandGroup {
  label: string;
  brands: Brand[];
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  price: string;
}

export interface ProductItem {
  image: string;
  alt: string;
  title: string;
  meta: string;
}

export interface DealItem {
  title: string;
  /** Starting price, e.g. "₹80". */
  price: string;
  description: string;
}

export interface NewArrivalItem {
  image: string;
  alt: string;
  brand: string;
  model: string;
  /** Short spec callouts, e.g. battery, camera sensor, processor. */
  highlights: string[];
  badge: string;
}

export interface ReviewItem {
  rating: number;
  quote: string;
  authorName: string;
}

export interface SiteContent {
  locale: string;
  business: {
    name: string;
    shortName: string;
    tagline: string;
    ownerName: string;
    establishedLabel: string;
    establishedYear: number;
    phoneDisplay: string;
    phoneTel: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    addressLine: string;
    landmark: string;
    addressRegion: string;
    hoursSchedule: { days: string; times: string[] }[];
    mapsUrl: string;
    reviewUrl: string;
  };
  topbar: {
    hoursAndLocation: string;
  };
  nav: NavLink[];
  header: {
    callLabel: string;
    whatsappLabel: string;
    menuLabel: string;
  };
  hero: {
    kicker: string;
    headingLead: string;
    headingAccent: string;
    body: string;
    ctaWhatsapp: string;
    ctaCall: string;
    ctaDirections: string;
    priceStrip: PriceItem[];
    photoAlt: string;
    photoTag: string;
  };
  brandStrip: {
    label: string;
    sub: string;
    featuredNote: string;
    groups: BrandGroup[];
  };
  services: {
    label: string;
    heading: string;
    body: string;
    items: ServiceItem[];
  };
  products: {
    label: string;
    heading: string;
    body: string;
    deals: {
      heading: string;
      body: string;
      pricePrefix: string;
      ctaLabel: string;
      items: DealItem[];
    };
    newArrivals: {
      heading: string;
      body: string;
      ctaLabel: string;
      items: NewArrivalItem[];
    };
    popularHeading: string;
    items: ProductItem[];
  };
  owner: {
    photoAlt: string;
    quote: string;
    roleLabel: string;
  };
  reviews: {
    label: string;
    heading: string;
    body: string;
    items: ReviewItem[];
    ctaText: string;
    ctaButton: string;
  };
  contact: {
    heading: string;
    body: string;
    ctaWhatsapp: string;
    ctaCall: string;
    ctaDirections: string;
    card: {
      shopLabel: string;
      ownerLabel: string;
      phoneLabel: string;
      locationLabel: string;
      establishedFieldLabel: string;
      hoursFieldLabel: string;
    };
  };
  footer: {
    hoursHeading: string;
    copyright: string;
    disclaimer: string;
  };
  stickyBar: {
    call: string;
    whatsapp: string;
    directions: string;
  };
}
