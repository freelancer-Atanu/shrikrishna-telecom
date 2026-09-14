import { en } from "@/content/en";
import type { SiteContent } from "@/types/content";

/** Single entry point for page content. Swap/extend when additional locales are added. */
export function getSiteContent(): SiteContent {
  return en;
}
