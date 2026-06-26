import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { Benefits } from "@/components/site/Benefits";
import { Teachers } from "@/components/site/Teachers";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABand } from "@/components/site/CTABand";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speak To Learn — Inglês premium, ao vivo e personalizado" },
      { name: "description", content: "Aprenda inglês de forma natural com um método premium, aulas ao vivo e professores experientes. Agende sua avaliação gratuita." },
      { property: "og:title", content: "Speak To Learn — Inglês premium" },
      { property: "og:description", content: "Método natural e estruturado, com aulas ao vivo e foco em resultados reais." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Method />
      <Benefits />
      <Teachers />
      <Testimonials />
      <CTABand />
      <FAQ />
      <Footer />
    </main>
  );
}
