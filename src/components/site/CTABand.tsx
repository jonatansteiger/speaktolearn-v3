import { ClipboardCheck, Layers, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ClipboardCheck, text: "Avaliação gratuita e personalizada" },
  { icon: Layers, text: "Planos flexíveis e acessíveis" },
  { icon: Users, text: "Para todos os níveis e necessidades" },
];

export function CTABand() {
  return (
    <section id="cta" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[24px] px-7 py-10 sm:px-12 sm:py-12"
            style={{ background: "var(--blue-deep)", color: "var(--cream)", boxShadow: "var(--shadow-lift)" }}
          >
            <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/8" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-32 h-[300px] w-[300px] rounded-full border border-white/6" />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr_auto] lg:gap-12">
              <div>
                <h2 className="text-balance font-serif text-3xl leading-[1.1] sm:text-4xl" style={{ color: "var(--cream)" }}>
                  Seu próximo nível começa{" "}
                  <span style={{ color: "var(--gold)" }}>agora.</span>
                </h2>
                <p className="mt-4 max-w-md text-sm text-white/70">
                  Fale com um de nossos consultores e descubra o plano ideal para você ou sua empresa.
                </p>
              </div>

              <ul className="space-y-4">
                {items.map((i) => (
                  <li key={i.text} className="flex items-center gap-3 text-sm text-white/85">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-md"
                      style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", color: "var(--gold)" }}
                    >
                      <i.icon size={15} strokeWidth={1.6} />
                    </span>
                    {i.text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start gap-2 lg:items-end">
                <a href="#" className="btn-gold">Quero aprender inglês</a>
                <p className="text-xs text-white/55">Sem compromisso. 100% online.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
