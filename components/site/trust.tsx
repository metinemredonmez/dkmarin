import { Gauge, LifeBuoy, Wrench, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Wrench,
    title: "Uzman Teknik Servis",
    desc: "Deneyimli kadromuz ile teknenizin tüm sistemlerine uçtan uca teknik müdahale.",
  },
  {
    icon: Gauge,
    title: "Periyodik Bakım",
    desc: "Planlı bakım programları ile teknenizin performansını ve güvenliğini koruyun.",
  },
  {
    icon: LifeBuoy,
    title: "Hızlı Müdahale",
    desc: "Arıza ve acil durumlarda zaman kaybetmeden sahada veya tersanede müdahale.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir İşçilik",
    desc: "Her projede şeffaf süreç, kaliteli malzeme ve sorumluluk bilinci.",
  },
];

export function Trust() {
  return (
    <section className="relative -mt-12 md:-mt-20 z-10">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[color:var(--border)] shadow-[0_30px_60px_-30px_rgba(11,31,51,0.25)] ring-1 ring-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-3 bg-white p-7 transition-colors hover:bg-[color:var(--soft-gray)]"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-[color:var(--navy-950)] text-white transition-colors group-hover:bg-[color:var(--teal)]">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="font-display text-lg font-semibold text-[color:var(--navy-950)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
