import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { Separator } from "@/components/ui/separator";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const NAV = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

const SERVICES = [
  "Tekne Bakım ve Onarım",
  "Mekanik Servis",
  "Elektrik / Elektronik",
  "Boya ve Gövde İşleri",
  "Periyodik Kontrol",
  "Yedek Parça",
];

const SOCIAL = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy-950)] text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              DK Marin; bakım, onarım, refit ve periyodik servis alanlarında
              uzmanlaşmış premium marine çözüm ortağınız.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/8 text-white/75 ring-1 ring-white/10 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
              Hızlı Linkler
            </div>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
              Hizmetler
            </div>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
              İletişim
            </div>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[color:var(--sand)]" />
                <span>
                  Evliya Çelebi Mah. Fersah Sk. No: 26
                  <br />
                  34944 Tuzla / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[color:var(--sand)]" />
                <Link
                  href="tel:+902164462446"
                  className="transition-colors hover:text-white"
                >
                  +90 216 446 24 46
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-[color:var(--sand)]" />
                <Link
                  href="mailto:info@dkmarin.com"
                  className="transition-colors hover:text-white"
                >
                  info@dkmarin.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-14 bg-white/10" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/55 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} DK Marin. Tüm hakları saklıdır.</div>
          <div className="flex gap-5">
            <Link href="#" className="transition-colors hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
