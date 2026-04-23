import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Hangi hizmetleri sunuyorsunuz?",
    a: "Tekne ve yatlar için bakım, onarım, mekanik servis, elektrik/elektronik sistemler, boya ve gövde işleri, periyodik kontroller ve yedek parça desteği dahil uçtan uca marine hizmet veriyoruz.",
  },
  {
    q: "Teklif süreci nasıl ilerliyor?",
    a: "İletişim formu veya telefon üzerinden ihtiyacınızı paylaştığınızda teknik ekibimiz değerlendirme yapıyor, gerekirse yerinde inceleme sonrası net ve kalem kalem bir yazılı teklif sunuyoruz.",
  },
  {
    q: "Periyodik bakım hizmetiniz var mı?",
    a: "Evet, teknenizin tip ve kullanım yoğunluğuna göre planlı bakım programları oluşturuyor; düzenli kontrol, raporlama ve önleyici bakım hizmetleri sunuyoruz.",
  },
  {
    q: "Servis süresi neye göre değişir?",
    a: "Hizmetin kapsamı, yedek parça temin süresi ve sezon yoğunluğu servis süresini etkiler. Teklif aşamasında gerçekçi bir süre planı ile iş programını paylaşıyoruz.",
  },
  {
    q: "Yedek parça desteği sağlıyor musunuz?",
    a: "Anlaşmalı tedarikçilerimiz üzerinden orijinal yedek parça tedariği yapıyor, garantili montaj ve satış sonrası teknik destek sunuyoruz.",
  },
];

export function Faq() {
  return (
    <section className="section-y">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <span className="eyebrow">Sıkça Sorulanlar</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--navy-950)] sm:text-4xl lg:text-[42px]">
            Merak Edilenler
          </h2>
          <p className="mt-5 text-[color:var(--muted-foreground)]">
            Süreç ve hizmetlerimiz hakkında en sık alınan soruları bir araya
            getirdik. Farklı bir sorunuz olursa ekibimiz memnuniyetle
            yardımcı olur.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-b border-[color:var(--border)] last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-[color:var(--navy-950)] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[color:var(--muted-foreground)] leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
