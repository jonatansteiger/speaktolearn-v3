import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  "Avaliação gratuita e personalizada",
  "Planos flexíveis e acessíveis",
  "Para todos os níveis e necessidades",
];

export function CTABand() {
  return (
    <section id="cta" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-7 py-14 sm:px-14 sm:py-20"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, color-mix(in oklab, var(--blue) 65%, var(--blue-deep)) 0%, var(--blue-deep) 60%)",
              color: "var(--cream)",
              boxShadow: "var(--shadow-lift)",
            }}
          >
            {/* decorative arcs */}
            <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-white/10" />
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/10" />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 bottom-[-120px] h-[320px] w-[320px] rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 55%, transparent), transparent)" }}
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="eyebrow" style={{ color: "var(--gold)" }}>Próximo nível</span>
                <h2 className="mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[46px]" style={{ color: "var(--cream)" }}>
                  Seu próximo nível começa{" "}
                  <span className="italic" style={{ color: "var(--gold)" }}>agora</span>.
                </h2>
                <p className="mt-5 max-w-lg text-base text-white/75">
                  Fale com um de nossos consultores e descubra o plano ideal para você ou sua empresa.
                </p>

                <ul className="mt-7 space-y-3">
                  {items.map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/85">
                      <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: "color-mix(in oklab, var(--gold) 22%, transparent)", color: "var(--gold)" }}>
                        <Check size={13} strokeWidth={2.4} />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 lg:items-center lg:text-center">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">Comece em minutos</div>
                <div className="font-serif text-3xl leading-tight" style={{ color: "var(--cream)" }}>
                  30 minutos de avaliação
                  <span className="block italic" style={{ color: "var(--gold)" }}>com um especialista</span>
                </div>
                <a href="#" className="btn-gold mt-2">Agende sua avaliação</a>
                <p className="text-xs text-white/55">Sem compromisso. 100% online.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
