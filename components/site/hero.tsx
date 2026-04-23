import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Clock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const TRUST_METRICS = [
  { icon: Award, label: "Uzman Teknik Ekip" },
  { icon: Clock, label: "Zamanında Teslim" },
  { icon: ShieldCheck, label: "Kaliteli Hizmet" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[color:var(--navy-950)] text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=2400&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-[color:var(--navy-950)]/85 via-[color:var(--navy-950)]/70 to-[color:var(--navy-950)]" />
      <div
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,111,115,0.25),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          <span className="eyebrow text-[color:var(--sand)]">
            Premium Marine Servisi
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tekne ve Yatlar İçin{" "}
            <span className="text-[color:var(--sand)]">Güvenilir</span> Bakım,
            Onarım ve Teknik Servis
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            DK Marin; bakım, onarım, teknik destek, refit ve periyodik servis
            alanlarında uzmanlaşmış kadrosuyla denizcilik sektörünün güvenilir
            çözüm ortağıdır. Teknenizin her detayını profesyonel ellere emanet
            edin.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-7 text-[color:var(--navy-950)] hover:bg-white/90"
            >
              <Link href="#hizmetler">
                Hizmetlerimizi İncele
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#iletisim">Teklif Al</Link>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3">
            {TRUST_METRICS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border-t border-white/15 pt-5"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/15">
                  <Icon className="size-4.5 text-[color:var(--sand)]" />
                </span>
                <dt className="text-sm font-medium text-white/90">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
