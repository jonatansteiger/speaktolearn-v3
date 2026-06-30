import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";

const Method = lazy(() => import("@/components/site/Method").then(m => ({ default: m.Method })));
const Classes = lazy(() => import("@/components/site/Classes").then(m => ({ default: m.Classes })));
const Benefits = lazy(() => import("@/components/site/Benefits").then(m => ({ default: m.Benefits })));
const Teachers = lazy(() => import("@/components/site/Teachers").then(m => ({ default: m.Teachers })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const CTABand = lazy(() => import("@/components/site/CTABand").then(m => ({ default: m.CTABand })));
const FAQ = lazy(() => import("@/components/site/FAQ").then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

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
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Method />
        <Classes />
        <Benefits />
        <Teachers />
        <Testimonials />
        <CTABand />
        <FAQ />
        <Footer />
      </Suspense>
    </main>
  );
}
