import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const CHECKLIST = [
  {
    title: "Deneyimli ekip",
    desc: "Alanında uzman teknik kadro ve deneyim birikimi.",
  },
  {
    title: "Uygun süreç yönetimi",
    desc: "Her aşamada planlı, ölçülebilir ve takip edilebilir iş akışı.",
  },
  {
    title: "Şeffaf tekliflendirme",
    desc: "Net fiyatlandırma, sürpriz maliyet bırakmayan iş tanımı.",
  },
  {
    title: "Kaliteli malzeme ve işçilik",
    desc: "Orijinal parçalar, standartlara uygun uygulama.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="section-y">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <div>
          <span className="eyebrow">Hakkımızda</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--navy-950)] sm:text-4xl lg:text-[44px]">
            Denizcilik Sektöründe{" "}
            <span className="text-[color:var(--teal)]">Güvenilir</span> Çözüm
            Ortağınız
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-lg">
            DK Marin olarak, tekne ve yat sahiplerine premium düzeyde bakım,
            onarım ve teknik servis hizmeti sunuyoruz. Yılların getirdiği
            deneyimi disiplinli süreç yönetimiyle birleştirerek işlerinizi
            zamanında ve kaliteli şekilde teslim ediyoruz.
          </p>

          <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)]">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <div className="font-semibold text-[color:var(--navy-950)]">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-sm text-[color:var(--muted-foreground)]">
                    {item.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="mt-10 h-11 rounded-full bg-[color:var(--navy-950)] px-6 text-white hover:bg-[color:var(--navy-900)]"
          >
            <Link href="#hizmetler">
              Hizmetlerimizi İncele
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-[color:var(--border)]">
            <Image
              src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1600&q=80"
              alt="Marine teknik servis"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl bg-[color:var(--navy-950)] p-5 text-white shadow-xl sm:block">
            <div className="font-display text-3xl font-semibold leading-none">
              15+
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
              Yıllık deneyim
            </div>
          </div>
          <div className="absolute -top-6 -right-6 hidden w-56 rounded-xl border border-[color:var(--border)] bg-white p-5 shadow-xl sm:block">
            <div className="font-display text-3xl font-semibold leading-none text-[color:var(--navy-950)]">
              500+
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Tamamlanan proje
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
