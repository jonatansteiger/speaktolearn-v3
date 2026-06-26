import { Globe2, Compass, BookOpen, UserCheck, Target, Repeat } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

const items = [
  { icon: Globe2, title: "Inglês real e contextual", text: "Conteúdos vivos e atualizados, espelhando situações do mundo real." },
  { icon: Compass, title: "Imersão guiada", text: "Trilhas conduzidas por professores para você não se perder no caminho." },
  { icon: BookOpen, title: "Vocabulário ativo", text: "Aprenda palavras úteis e use desde a primeira aula, sem decorar listas." },
  { icon: UserCheck, title: "Personalizado", text: "Aulas moldadas aos seus objetivos, tempo disponível e nível atual." },
  { icon: Target, title: "Foco em objetivos", text: "Carreira, viagem, certificações: cada plano com metas claras." },
  { icon: Repeat, title: "Prática constante", text: "Material de reforço e exercícios entre encontros para acelerar resultados." },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-28">
      {/* subtle band */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Foco no Todo"
            title="Aprenda de forma completa e integrada"
            description="Um sistema pensado para o aluno avançar com método, prática e acompanhamento próximo do início ao fim."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <article className="card-elevated card-elevated-hover group h-full p-7">
                <div className="flex items-start justify-between">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl"
                    style={{ background: "color-mix(in oklab, var(--blue) 9%, transparent)", color: "var(--blue-deep)" }}
                  >
                    <it.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest"
                    style={{ background: "color-mix(in oklab, var(--green) 14%, transparent)", color: "var(--green)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                    INCLUSO
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl text-[var(--blue-deep)]">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{it.text}</p>

                <div
                  className="mt-6 h-px w-full"
                  style={{ background: "linear-gradient(90deg, color-mix(in oklab, var(--green) 35%, transparent), transparent)" }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
