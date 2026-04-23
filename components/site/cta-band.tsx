import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--navy-950)] px-8 py-14 text-white md:px-14 md:py-20">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,111,115,0.35),transparent_60%)]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-20 -top-20 size-72 rounded-full bg-[color:var(--teal)]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow text-[color:var(--sand)]">
                Teklif Al
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[44px]">
                Tekneniz İçin Profesyonel Servis Desteği Alın
              </h2>
              <p className="mt-5 max-w-xl text-white/75 md:text-lg">
                İhtiyacınızı bizimle paylaşın; teknik inceleme ve şeffaf
                tekliflendirme süreciyle size en uygun çözümü sunalım.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-7 text-[color:var(--navy-950)] hover:bg-white/90"
              >
                <Link href="#iletisim">
                  Teklif Talep Edin
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="tel:+902164462446">
                  <Phone className="size-4" />
                  Bizi Arayın
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
