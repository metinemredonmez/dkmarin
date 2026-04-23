"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";

const NAV_LINKS = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,31,51,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Logo light={!scrolled} />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[color:var(--navy-950)]/80 hover:text-[color:var(--navy-950)]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="tel:+902164462446"
            className={`hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? "text-[color:var(--navy-950)]/80 hover:text-[color:var(--navy-950)]"
                : "text-white/85 hover:text-white"
            }`}
          >
            <Phone className="size-4" />
            <span className="hidden xl:inline">+90 216 446 24 46</span>
          </Link>
          <Button
            asChild
            size="lg"
            className="hidden sm:inline-flex h-10 bg-[color:var(--navy-950)] text-white hover:bg-[color:var(--navy-900)] rounded-full px-5"
          >
            <Link href="#iletisim">Teklif Al</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${
                  scrolled
                    ? "text-[color:var(--navy-950)] hover:bg-[color:var(--soft-gray)]"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Menüyü aç"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-white">
              <SheetHeader className="border-b border-[color:var(--border)] pb-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-sm font-medium text-[color:var(--navy-950)] hover:bg-[color:var(--soft-gray)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="mt-4 bg-[color:var(--navy-950)] text-white hover:bg-[color:var(--navy-900)] rounded-full"
                >
                  <Link href="#iletisim" onClick={() => setOpen(false)}>
                    Teklif Al
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
