import { Ear, MessagesSquare, Briefcase, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", icon: Ear, title: "Ouvir e compreender", text: "Desenvolva sua escuta com contexto real desde as primeiras aulas." },
  { n: "02", icon: MessagesSquare, title: "Falar com confiança", text: "Pratique conversas guiadas para ganhar segurança e naturalidade." },
  { n: "03", icon: Briefcase, title: "Aplicar o que aprende", text: "Use o inglês em situações reais do dia a dia e do mundo profissional." },
  { n: "04", icon: LineChart, title: "Evoluir continuamente", text: "Receba feedbacks e trilhas personalizadas para acelerar sua evolução." },
];

export function Method() {
  return (
    <section id="metodo" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Nosso Método" title="Um caminho natural para a fluência" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className="card-elevated card-elevated-hover relative h-full p-7 pt-9">
                {/* gold number badge floating */}
                <div className="absolute -top-4 left-7">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-full font-serif text-sm font-semibold"
                    style={{ background: "var(--gold)", color: "var(--blue-deep)", boxShadow: "0 6px 14px -6px color-mix(in oklab, var(--gold) 80%, transparent)" }}
                  >
                    {s.n}
                  </span>
                </div>

                <span
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: "color-mix(in oklab, var(--blue) 10%, transparent)", color: "var(--blue-deep)" }}
                >
                  <s.icon size={22} strokeWidth={1.5} />
                </span>

                <h3 className="mt-5 font-serif text-xl text-[var(--blue-deep)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, description, align = "left",
}: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[44px]">{title}</h2>
      {description && <p className="mt-4 text-base text-foreground/70">{description}</p>}
    </div>
  );
}
