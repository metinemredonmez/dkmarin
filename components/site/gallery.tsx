import Image from "next/image";

const PROJECTS = [
  {
    src: "/tekne-bakim.webp",
    title: "Tekne Bakımı",
    tag: "Bakım",
    className: "lg:col-span-2 lg:row-span-2 aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80",
    title: "Motor Servisi",
    tag: "Mekanik",
    className: "aspect-[4/3]",
  },
  {
    src: "/elektronik-sistemler.jpeg",
    title: "Elektronik Sistemler",
    tag: "Elektronik",
    className: "aspect-[4/3]",
  },
  {
    src: "/boya-polisaj.jpg",
    title: "Boya ve Polisaj",
    tag: "Gövde",
    className: "aspect-[4/3]",
  },
  {
    src: "/periyodik-kontrol.avif",
    title: "Periyodik Kontrol",
    tag: "Servis",
    className: "aspect-[4/3]",
  },
];

export function Gallery() {
  return (
    <section id="galeri" className="section-y bg-[color:var(--soft-gray)]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Projeler</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--navy-950)] sm:text-4xl lg:text-[44px]">
              Tamamladığımız Çalışmalardan Seçkiler
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--muted-foreground)] md:text-right">
            Her projede detaylara verdiğimiz önem, sonuçlara yansıyor.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-[color:var(--border)] ${project.className}`}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-950)]/85 via-[color:var(--navy-950)]/10 to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="mb-2 inline-flex w-fit rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
                  {project.tag}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
