import {
  Calendar,
  Zap,
  BookMarked,
  Smile,
  Clock,
  CalendarDays,
  BookOpen,
  MessageCircle,
  Users2,
  Hourglass,
  Brain,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

export function Classes() {
  return (
    <section id="turmas" className="bg-[var(--blue-deep)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--gold)" }}
            >
              Nossas Turmas
            </span>
            <h2 className="mt-3 text-balance text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[42px]">
              Encontre a turma ideal para o seu momento
            </h2>
            <p className="mt-4 text-base text-white/70">
              Cada formato é desenhado para um objetivo específico — escolha aquele
              que combina com a sua rotina.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-10">
          {/* GRADUAL */}
          <TurmaCard
            tag="EVOLUÇÃO SÓLIDA"
            tagIcon={Calendar}
            title="Turma Gradual"
            description={
              <>
                Aulas <strong className="text-white">duas vezes por semana</strong>, no ritmo certo para
                construir uma base consistente e chegar do <strong className="text-white">Básico ao Avançado</strong>{" "}
                sem pressa.
              </>
            }
            items={[
              { icon: Clock, label: "Duração:", value: "6 meses por nível / 1 hora por aula" },
              { icon: CalendarDays, label: "Rotina:", value: "2 aulas por semana" },
              { icon: BookOpen, label: "Material:", value: "English by the Natural Method" },
            ]}
            highlight={{
              icon: Brain,
              title: "O Diferencial: Consistência",
              text: (
                <>
                  Aprender um idioma é um hábito. A frequência regular cria{" "}
                  <strong className="text-white">memória de longo prazo</strong> e permite que cada conteúdo
                  seja absorvido com profundidade.
                </>
              ),
              quote:
                '"O caminho mais sólido até a fluência: passo a passo, semana após semana, sem atalhos."',
            }}
          />

          {/* INTENSIVA */}
          <TurmaCard
            tag="ACELERAÇÃO"
            tagIcon={Zap}
            title="Turma Intensiva"
            description={
              <>
                Aulas todos os dias para resultados acelerados. Conclua{" "}
                <strong className="text-white">1 Nível inteiro</strong> em menos da metade do tempo.
              </>
            }
            items={[
              { icon: Clock, label: "Duração:", value: "3 meses (50 aulas no total) / 1 hora por dia" },
              { icon: CalendarDays, label: "Rotina:", value: "Aulas todos os dias, de segunda a sexta" },
              { icon: BookOpen, label: "Material:", value: "English by the Natural Method" },
            ]}
            highlight={{
              icon: MessageCircle,
              title: "O Diferencial: Conversação",
              text: (
                <>
                  O foco aqui é respirar inglês. Ao final de cada semana, realizamos uma{" "}
                  <strong className="text-white">aula exclusiva só de conversação</strong>. O tema será
                  proposto pela turma em conjunto.
                </>
              ),
              quote:
                '"Sexta-feira chegou? A nossa aula será inteiramente focada no debate do tema escolhido pela turma, aplicando tudo o que foi estudado na prática."',
            }}
          />

          {/* READING THE WEST */}
          <TurmaCard
            tag="LITERATURA"
            tagIcon={BookMarked}
            title="Reading The West"
            description={
              <>
                O inglês através das grandes ideias. A sala de aula transformada num{" "}
                <strong className="text-white">clube de leitura avançado</strong>.
              </>
            }
            items={[
              { icon: Hourglass, label: "Duração:", value: "6 meses (Ementa) / 1h30 por aula" },
              { icon: Users2, label: "Dinâmica:", value: "Leitura prévia em casa, aula 100% debate" },
              { icon: BookOpen, label: "Foco:", value: "Argumentação, literatura e vocabulário avançado" },
            ]}
            highlight={{
              icon: BookMarked,
              title: "O Diferencial: Profundidade",
              text: (
                <>
                  Compreensão literária, ampliação drástica de vocabulário e{" "}
                  <strong className="text-white">conversação de alto nível</strong> através de textos
                  clássicos.
                </>
              ),
              quote:
                '"Consulte a nossa equipe para solicitar a ementa com a lista de livros deste semestre."',
            }}
          />

          {/* KIDS */}
          <TurmaCard
            tag="INFANTIL"
            tagIcon={Smile}
            title="Turmas Kids"
            description={
              <>
                Adaptação lúdica ao idioma. Inglês para crianças com{" "}
                <strong className="text-white">estímulos dinâmicos</strong> e progressão contínua.
              </>
            }
            items={[
              { icon: Clock, label: "Duração:", value: "1 hora por aula" },
              { icon: CalendarDays, label: "Progressão:", value: "Contínua, no ritmo da criança" },
              { icon: BookOpen, label: "Material:", value: "Moderado — foco em jogos e interação" },
            ]}
            highlight={{
              icon: Smile,
              title: "O Diferencial: Leveza",
              text: (
                <>
                  Para crianças que precisam de <strong className="text-white">estímulos dinâmicos</strong>{" "}
                  para manter o engajamento, com aprendizado através de brincadeiras e histórias.
                </>
              ),
              quote:
                '"O inglês como segunda língua natural, aprendido com a mesma alegria de brincar."',
            }}
          />
        </div>

      </div>
    </section>
  );
}


type Item = { icon: typeof Clock; label: string; value: string };
type Highlight = {
  icon: typeof Clock;
  title: string;
  text: ReactNode;
  quote: string;
};

function TurmaCard({
  tag,
  tagIcon: TagIcon,
  title,
  description,
  items,
  highlight,
}: {
  tag: string;
  tagIcon: typeof Clock;
  title: string;
  description: ReactNode;
  items: Item[];
  highlight: Highlight;
}) {
  const HIcon = highlight.icon;
  return (
    <Reveal>
      <article
        className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 p-7 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12"
        style={{ background: "color-mix(in oklab, white 4%, transparent)" }}
      >
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ background: "var(--cream)", color: "var(--blue-deep)" }}
          >
            <TagIcon size={13} /> {tag}
          </span>

          <h3 className="mt-5 font-serif text-4xl text-white sm:text-[44px]">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} style={{ color: "var(--gold)" }} className="italic">
                  {w}
                </span>
              ) : (
                <span key={i}>{w} </span>
              ),
            )}
          </h3>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">{description}</p>

          <ul className="mt-7 space-y-3.5">
            {items.map((it) => (
              <li key={it.label} className="flex items-start gap-3 text-sm text-white/85">
                <span
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--gold) 22%, transparent)", color: "var(--gold)" }}
                >
                  <it.icon size={13} strokeWidth={1.75} />
                </span>
                <span>
                  <strong className="text-white">{it.label}</strong> {it.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl border border-white/10 p-6 sm:p-7"
          style={{ background: "color-mix(in oklab, white 3%, transparent)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="grid h-9 w-9 place-items-center rounded-full"
              style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", color: "var(--gold)" }}
            >
              <HIcon size={16} />
            </span>
            <h4 className="font-serif text-xl text-white">{highlight.title}</h4>
          </div>

          <p className="mt-4 text-[14.5px] leading-relaxed text-white/80">{highlight.text}</p>

          <div
            className="mt-5 rounded-xl border border-white/10 px-5 py-4 text-[13.5px] italic leading-relaxed text-white/70"
            style={{ background: "color-mix(in oklab, black 18%, transparent)" }}
          >
            {highlight.quote}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
