import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import type { IconName } from "@/lib/icons";

export type ButtonVariant = "amber" | "outline" | "whatsapp" | "line" | "white" | "steel";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  amber: "bg-amber text-navy-deep hover:bg-[#ce6b0a]",
  outline: "border-navy text-navy hover:bg-navy hover:text-cream",
  whatsapp: "bg-[#25D366] text-[#06280F] hover:bg-[#1fb958]",
  line: "border-cream/50 text-cream hover:bg-white/10",
  white: "bg-white text-navy hover:bg-[#eee7d6]",
  steel: "bg-steel text-white hover:bg-[#115075]",
};

interface ButtonProps {
  href: string;
  variant: ButtonVariant;
  icon: IconName;
  children: ReactNode;
  size?: "base" | "lg";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  hideLabelOnNarrow?: boolean;
  /** Continuous diagonal sheen sweep, for the one CTA that should draw the eye. */
  shine?: boolean;
}

export default function Button({
  href,
  variant,
  icon,
  children,
  size = "base",
  external = false,
  className = "",
  ariaLabel,
  hideLabelOnNarrow = false,
  shine = false,
}: ButtonProps) {
  const sizeClasses =
    size === "lg" ? "px-[22px] py-[13px] text-sm" : "px-[11px] py-[9px] text-[13.5px] sm:px-[18px] sm:py-[10px]";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-2 border font-bold uppercase tracking-wide transition-transform duration-150 ease-out hover:-translate-y-0.5 ${shine ? "relative overflow-hidden" : ""} ${sizeClasses} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <Icon name={icon} />
      <span className={hideLabelOnNarrow ? "hidden sm:inline" : undefined}>{children}</span>
      {shine && (
        <span
          aria-hidden="true"
          className="animate-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-white/50 to-transparent"
        />
      )}
    </a>
  );
}
