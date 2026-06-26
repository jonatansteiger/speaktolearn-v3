import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

const faqs = [
  { q: "Para quem o curso de inglês Speak To Learn é indicado?", a: "Para profissionais, estudantes e empresas que buscam inglês de verdade — do iniciante ao avançado — com acompanhamento próximo e foco em fluência aplicada ao dia a dia." },
  { q: "Como são as aulas ao vivo?", a: "Aulas individuais ou em pequenos grupos, conduzidas por professores experientes em nossa plataforma, sempre dinâmicas e com material exclusivo." },
  { q: "Qual o nível do curso?", a: "Trabalhamos com todos os níveis do CEFR (A1 ao C2). Sua trilha é definida a partir da avaliação inicial e ajustada conforme você evolui." },
  { q: "Posso fazer o curso pelo celular ou tablet?", a: "Sim. A plataforma é totalmente responsiva. Você pode estudar e participar das aulas pelo computador, tablet ou celular." },
  { q: "Como funciona o plano corporativo?", a: "Desenhamos planos sob medida para empresas, com gestão de turmas, relatórios de evolução e foco nos objetivos do seu time." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Dúvidas Frequentes" title="Perguntas frequentes" align="center" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:opacity-80"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm leading-snug text-[var(--blue-deep)] sm:text-[15px]">
                      {f.q}
                    </span>
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-300"
                      style={{
                        color: "var(--blue-deep)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus size={18} strokeWidth={1.5} />
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 pr-12 text-sm leading-relaxed text-foreground/70">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
