import { Ear, Headphones, BookOpen, UserRound, MessageCircle, RefreshCw } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

const items = [
  { icon: Ear, title: "Inglês real e contextual", text: "Você aprende palavras, frases e expressões dentro de situações reais, não de forma isolada." },
  { icon: Headphones, title: "Imersão guiada", text: "As aulas ao vivo conduzem o aluno passo a passo, conectando teoria, prática e conversação." },
  { icon: BookOpen, title: "Vocabulário ativo", text: "Você não apenas conhece novas palavras. Você aprende a usar essas palavras em frases, respostas e conversas." },
  { icon: UserRound, title: "Acompanhamento próximo", text: "Os professores acompanham sua evolução e orientam seus próximos passos dentro da jornada de aprendizado." },
  { icon: MessageCircle, title: "Foco na conversação real", text: "Mesmo nos primeiros níveis, o aluno é estimulado a falar, responder e participar ativamente." },
  { icon: RefreshCw, title: "Prática constante", text: "Quanto mais contato com o inglês, mais natural se torna entender, responder e se comunicar." },
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
