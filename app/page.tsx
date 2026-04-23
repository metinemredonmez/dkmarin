import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Trust } from "@/components/site/trust";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Gallery } from "@/components/site/gallery";
import { CtaBand } from "@/components/site/cta-band";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Trust />
        <About />
        <Services />
        <Process />
        <Gallery />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
