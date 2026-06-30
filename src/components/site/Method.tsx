import { Ear, MessagesSquare, Briefcase, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { n: "1", icon: Ear, title: "Ouvir", text: "Desenvolva sua escuta com contexto real,\u00a0com estruturas, ritmos e vocabulário desde o primeiro encontro." },
  { n: "2", icon: MessagesSquare, title: "Imitar", text: "Repetição guiada, pronúncia modelada e segurança para se arriscar." },
  { n: "3", icon: Briefcase, title: "Praticar", text: "A turma vira laboratório de conversação com troca constante e contextual." },
  { n: "4", icon: LineChart, title: "Comunicar", text: "Falar com naturalidade em situações reais — não apenas acertar exercícios." },
];

export function Method() {
  return (
    <section id="metodo" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Nosso Método" title="Um caminho natural para a fluência" align="center" />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="card-elevated card-elevated-hover relative h-full px-6 pt-10 pb-7 text-left">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full font-serif text-base font-semibold"
                    style={{
                      background: "var(--gold)",
                      color: "var(--blue-deep)",
                      boxShadow: "0 8px 18px -8px color-mix(in oklab, var(--gold) 80%, transparent)",
                    }}
                  >
                    {s.n}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl"
                    style={{ background: "color-mix(in oklab, var(--blue) 8%, transparent)", color: "var(--blue-deep)" }}
                  >
                    <s.icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-[var(--blue-deep)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p>
                </div>
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
      <h2 className="mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[42px]">{title}</h2>
      {description && <p className="mt-4 text-base text-foreground/70">{description}</p>}
    </div>
  );
}
