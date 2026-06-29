import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

type Item = { text: string; time: string };

// Placeholders — serão substituídos pelos depoimentos reais do cliente.
const all: Item[] = [
  {
    text:
      "O curso Intensivo foi sensacional! Em 2 meses conseguimos aprender uma quantidade enorme de expressões, palavras novas, melhoramos a fala e a escuta, melhoramos a leitura e a habilidade de interpretar as histórias do livro que estávamos usando, e também entender oque funciona e oque não funciona na prática em uma conversa. E tudo isso pelo método natural, oque com certeza foi oque fez com que nosso aprendizado fosse tão proveitoso em pouco tempo. Aprendemos os significados das palavras como um nativo realmente aprende, sem traduções.",
    time: "16:06",
  },
  {
    text:
      "Estou gostando muito das aulas. Creio que são as melhores aulas de inglês que já tive. O método, as conversas e os materiais estão me ajudando muito.",
    time: "09:42",
  },
  {
    text:
      "Em poucas semanas já percebi diferença na minha conversação. As aulas são leves, mas extremamente produtivas.",
    time: "20:18",
  },
  {
    text:
      "O Reading the West mudou completamente minha relação com o inglês. Hoje leio clássicos e debato com confiança.",
    time: "14:30",
  },
  {
    text:
      "Recomendo de olhos fechados. Professores atenciosos, método claro e resultados reais.",
    time: "11:05",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = Math.max(1, all.length - perView + 1);

  useEffect(() => {
    if (index > pages - 1) setIndex(0);
  }, [pages, index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % pages), 7000);
    return () => clearInterval(id);
  }, [pages]);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + pages) % pages);

  return (
    <section id="depoimentos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Depoimentos"
            title="Alunos que transformam seus resultados"
            align="center"
          />
        </Reveal>

        <div className="relative mt-14">
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary sm:grid lg:-left-6"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary sm:grid lg:-right-6"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(calc(${index} * -${100 / perView}%))` }}
            >
              {all.map((t, idx) => (
                <div key={idx} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                  <FeedbackCard item={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 24 : 8,
                background:
                  i === index ? "var(--blue-deep)" : "color-mix(in oklab, var(--ink) 18%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeedbackCard({ item }: { item: Item }) {
  // beige card with large repeating "feedback" lettering and a WhatsApp green bubble
  return (
    <article
      className="relative h-[460px] overflow-hidden rounded-[28px] border border-border"
      style={{ background: "var(--cream)" }}
    >
      {/* repeated 'feedback' lettering */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none flex-col justify-between py-6 font-serif italic"
        style={{
          color: "color-mix(in oklab, white 55%, var(--cream))",
          fontSize: "clamp(48px, 9vw, 72px)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
        }}
      >
        <span className="px-4">feedback</span>
        <span className="px-4 text-right">feedback</span>
        <span className="px-4">feedback</span>
        <span className="px-4 text-right">feedback</span>
      </div>

      {/* WhatsApp message bubble */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          className="relative max-w-[88%] rounded-[10px] px-3.5 py-2.5 text-[12.5px] leading-[1.45] text-[#111b21] shadow-[0_1px_2px_rgba(11,20,26,0.13),0_2px_5px_rgba(11,20,26,0.07)]"
          style={{ background: "#d9fdd3" }}
        >
          {/* tail */}
          <span
            aria-hidden
            className="absolute -left-1.5 top-0 h-3 w-3"
            style={{
              background: "#d9fdd3",
              clipPath: "polygon(100% 0, 100% 100%, 0 0)",
            }}
          />
          <p className="whitespace-pre-line">{item.text}</p>
          <div className="mt-1 flex items-center justify-end gap-1 text-[10.5px] text-[#667781]">
            <span>{item.time}</span>
            <svg width="14" height="10" viewBox="0 0 16 11" fill="none" aria-hidden>
              <path
                d="M11.07.65 5.16 6.56 3.5 4.9 2.45 5.95l2.71 2.71L12.12 1.7zM15.02.65 9.11 6.56 7.93 5.4l-1.06 1.06 2.24 2.24L16.07 1.7z"
                fill="#53bdeb"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
