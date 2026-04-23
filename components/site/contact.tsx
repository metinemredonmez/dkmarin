"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SERVICES = [
  "Tekne Bakım ve Onarım",
  "Mekanik Servis",
  "Elektrik / Elektronik",
  "Boya ve Gövde İşleri",
  "Periyodik Kontrol",
  "Yedek Parça Desteği",
  "Diğer",
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.381239812808!2d29.29386267639685!3d40.84155287137438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc48a99fa633%3A0x7d8ba2d1e4e2c83b!2sDk%20Marin!5e0!3m2!1str!2str!4v1776957955274!5m2!1str!2str";

const INFO = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["Evliya Çelebi Mah. Fersah Sk. No: 26", "34944 Tuzla / İstanbul"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+90 216 446 24 46"],
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: ["info@dkmarin.com"],
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    lines: ["Pazartesi – Cumartesi", "09:00 – 18:00"],
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Mesaj gönderilemedi.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  }

  return (
    <section id="iletisim" className="section-y bg-[color:var(--soft-gray)]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">İletişim</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--navy-950)] sm:text-4xl lg:text-[44px]">
            Bizimle İletişime Geçin
          </h2>
          <p className="mt-5 text-[color:var(--muted-foreground)]">
            İhtiyacınızı bize iletin; ekibimiz en kısa sürede dönüş yaparak
            teknik değerlendirme ve teklif sürecini başlatsın.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[color:var(--border)] bg-white p-6 md:p-10"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Adınız ve soyadınız"
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+90 ___ ___ __ __"
                  className="h-11"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@eposta.com"
                  className="h-11"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="service">Hizmet Türü</Label>
                <select
                  id="service"
                  name="service"
                  required
                  className="flex h-11 w-full rounded-md border border-[color:var(--input)] bg-white px-3 text-sm text-[color:var(--navy-950)] shadow-xs outline-none transition-colors focus-visible:border-[color:var(--ring)] focus-visible:ring-[3px] focus-visible:ring-[color:var(--ring)]/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seçiniz
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tekneniz ve ihtiyacınız hakkında kısa bilgi verir misiniz?"
                />
              </div>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[color:var(--muted-foreground)]">
                Formu göndererek gizlilik koşullarını kabul etmiş olursunuz.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="h-11 rounded-full bg-[color:var(--navy-950)] px-6 text-white hover:bg-[color:var(--navy-900)]"
              >
                <Send className="size-4" />
                {status === "loading" ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </div>

            {status === "success" && (
              <p className="mt-5 rounded-md border border-[color:var(--teal)]/30 bg-[color:var(--teal)]/10 px-4 py-3 text-sm text-[color:var(--teal)]">
                Teşekkürler. Talebiniz alındı, ekibimiz en kısa sürede dönüş
                yapacaktır.
              </p>
            )}
            {status === "error" && (
              <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMsg || "Mesaj gönderilemedi. Lütfen tekrar deneyin."}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INFO.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[color:var(--border)] bg-white p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-[color:var(--navy-950)] text-white">
                    <Icon className="size-4.5" strokeWidth={2} />
                  </span>
                  <div className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    {title}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--navy-950)]">
                    {lines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex-1 min-h-[280px] overflow-hidden rounded-2xl border border-[color:var(--border)]">
              <iframe
                src={MAP_EMBED_SRC}
                title="DK Marin konum"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
