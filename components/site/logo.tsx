import { Anchor } from "lucide-react";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="#home"
      className="group inline-flex items-center gap-2.5"
      aria-label="DK Marin ana sayfa"
    >
      <span
        className={`flex size-9 items-center justify-center rounded-md ${
          light
            ? "bg-white/10 text-white ring-1 ring-white/20"
            : "bg-[color:var(--navy-950)] text-white"
        }`}
      >
        <Anchor className="size-5" strokeWidth={2.25} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-semibold tracking-tight ${
            light ? "text-white" : "text-[color:var(--navy-950)]"
          }`}
        >
          DK Marin
        </span>
        <span
          className={`mt-0.5 text-[10px] uppercase tracking-[0.28em] ${
            light ? "text-white/60" : "text-[color:var(--muted-foreground)]"
          }`}
        >
          Marine Services
        </span>
      </span>
    </Link>
  );
}
