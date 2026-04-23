import Link from "next/link";
import {
  Wrench,
  Cog,
  Zap,
  Paintbrush,
  ClipboardCheck,
  PackageSearch,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    title: "Tekne Bakım ve Onarım",
    desc: "Gövde, iç mekan ve donanım bakımları; yapısal onarım ve yenileme çalışmaları.",
  },
  {
    icon: Cog,
    title: "Mekanik Servis",
    desc: "Motor, şanzıman, pervane ve şaft sistemlerinde uzman mekanik müdahale.",
  },
  {
    icon: Zap,
    title: "Elektrik / Elektronik",
    desc: "Gemi elektriği, seyir cihazları, batarya ve akü sistemleri kurulum ve onarımı.",
  },
  {
    icon: Paintbrush,
    title: "Boya ve Gövde İşleri",
    desc: "Antifouling, yüzey hazırlığı, jelkot, profesyonel boya ve polisaj uygulamaları.",
  },
  {
    icon: ClipboardCheck,
    title: "Periyodik Kontrol",
    desc: "Planlı bakım takvimi ile sistemlerin düzenli kontrolü ve performans raporlaması.",
  },
  {
    icon: PackageSearch,
    title: "Yedek Parça Desteği",
    desc: "Orijinal yedek parça tedariği, garantili montaj ve satış sonrası teknik destek.",
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="section-y bg-[color:var(--soft-gray)]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Hizmetlerimiz</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--navy-950)] sm:text-4xl lg:text-[44px]">
              Teknenize Özel Uçtan Uca Marine Çözümleri
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--muted-foreground)] md:text-right">
            Küçük onarımlardan kapsamlı refit projelerine kadar, işinizi
            baştan sona profesyonelce yönetiyoruz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <Link
              href="#iletisim"
              key={title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[color:var(--navy-950)]/20 hover:shadow-[0_30px_50px_-30px_rgba(11,31,51,0.35)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-[color:var(--navy-950)] text-white transition-colors group-hover:bg-[color:var(--teal)]">
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <ArrowUpRight className="size-5 text-[color:var(--muted-foreground)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--navy-950)]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[color:var(--navy-950)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
