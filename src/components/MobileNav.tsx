"use client";

import { useEffect, useId, useState } from "react";
import Icon from "@/components/Icon";
import type { NavLink } from "@/types/content";

export default function MobileNav({ links, menuLabel }: { links: NavLink[]; menuLabel: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : menuLabel}
        onClick={() => setOpen((value) => !value)}
        className="flex flex-col gap-[5px] p-1.5"
      >
        <Icon name="bars" className="text-lg text-navy" />
      </button>
      {open && (
        <nav id={panelId} aria-label="Primary" className="absolute inset-x-0 top-full flex flex-col border-b-2 border-navy bg-cream px-6 pb-4.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-sm font-semibold uppercase last:border-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
