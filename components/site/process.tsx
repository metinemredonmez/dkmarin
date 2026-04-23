import { ClipboardList, Search, FileText, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Talebinizi Alıyoruz",
    desc: "İletişim formu veya telefon üzerinden ihtiyacınızı değerlendiriyoruz.",
  },
  {
    icon: Search,
    title: "Teknik İnceleme",
    desc: "Tekneniz üzerinde detaylı inceleme ve yapılacak işlerin belirlenmesi.",
  },
  {
    icon: FileText,
    title: "Şeffaf Teklif",
    desc: "Net kalem kalem fiyatlandırma ve süre planıyla yazılı teklif sunuyoruz.",
  },
  {
    icon: CheckCircle2,
    title: "Uygulama ve Teslim",
    desc: "Planlanan sürede uygulama, kalite kontrolü ve sorunsuz teslim.",
  },
];

export function Process() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Süreç</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--navy-950)] sm:text-4xl lg:text-[44px]">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-5 text-[color:var(--muted-foreground)]">
            Baştan sona şeffaf, planlı ve takip edilebilir bir servis süreci
            yürütüyoruz.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative flex flex-col">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-[color:var(--navy-950)] text-white ring-8 ring-[color:var(--background)]">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <span className="font-display text-3xl font-semibold text-[color:var(--navy-950)]/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[color:var(--navy-950)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
