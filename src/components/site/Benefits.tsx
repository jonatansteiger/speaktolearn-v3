import { Ear, Headphones, BookOpen, UserRound, Target, RefreshCw } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

const items = [
  { icon: Ear, title: "Inglês real e contextual", text: "Aprenda o inglês que você realmente usa." },
  { icon: Headphones, title: "Imersão guiada", text: "Conteúdo exclusivo e aulas ao vivo que conectam teoria e prática." },
  { icon: BookOpen, title: "Vocabulário ativo", text: "Expanda seu vocabulário com expressões úteis e aplicáveis." },
  { icon: UserRound, title: "Personalizado", text: "Material e sugestões alinhados aos seus objetivos e ao seu momento." },
  { icon: Target, title: "Foco em objetivos", text: "Do dia a dia ao corporativo, você aprende o que realmente precisa." },
  { icon: RefreshCw, title: "Prática constante", text: "Mais contato com o inglês, mais confiança para se comunicar." },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Foco no Todo" title="Aprenda de forma completa e integrada" align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <article className="card-elevated card-elevated-hover h-full p-7">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: "color-mix(in oklab, var(--blue) 8%, transparent)", color: "var(--blue-deep)" }}
                >
                  <it.icon size={22} strokeWidth={1.5} />
                </span>

                <h3 className="mt-5 font-serif text-xl text-[var(--blue-deep)]">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{it.text}</p>

                <div
                  className="mt-6 h-px w-12"
                  style={{ background: "var(--green)" }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
