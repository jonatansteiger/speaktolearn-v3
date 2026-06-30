import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";

type Item = { text: string; time: string };

const all: Item[] = [
  {
    text:
      "O curso Intensivo foi sensacional!\nEm 2 meses conseguimos aprender uma quantidade enorme de expressões, palavras novas, melhoramos a fala e a escuta, melhoramos a leitura e a habilidade de interpretar as histórias do livro que estávamos usando, e também entender oque funciona e oque não funciona na prática em uma conversa.\nE tudo isso pelo método natural, oque com certeza foi oque fez com que nosso aprendizado fosse tão proveitoso em pouco tempo. Aprendemos os significados das palavras como um nativo realmente aprende, sem traduções.",
    time: "16:06",
  },
  {
    text:
      "Estou gostando muito das aulas!\nCreio que são as melhores aulas de inglês que já tive.\nO método, as conversações, estão me ajudando muito!",
    time: "09:31",
  },
  {
    text:
      "Gostaria de dar o meu feedback sobre o curso e dizer que achei muito legal e proveitoso.\nO uso do livro 'English by Nature Method' foi um ponto super positivo, pois ele ensina por níveis e sem tradução, tudo direto na língua que estávamos aprendendo, o inglês. Além disso, o ambiente e o compromisso de ter as aulas regularmente dão muito ânimo para estudar, ainda mais compartilhando a jornada com outras pessoas. Para completar, a professora, por morar atualmente nos EUA, conseguiu nos dar muitas dicas valiosas, já que ela mesma passou por esse processo de aprender inglês.",
    time: "08:20",
  },
  {
    text:
      "Está sendo uma experiência muito legal!\nO professor e os colegas são excelentes.\nE o livro utilizado em aula é muito instrutivo.\nEu penso que é uma aula excelente para qualquer nível, desde quem sabe pouco até quem tem um inglês consolidado.",
    time: "10:12",
  },
  {
    text:
      "Tanto as aulas do professor Marco, quanto da professora Nicole, têm sido muito boas para o meu inglês:\nÉ perceptível a mudança na minha pronúncia e uma facilidade maior em se expressar; e também pude ver a mesma evolução nos meus colegas de ambas as turmas.\nSão abordagens diferentes de cada professor, mas elas se complementaram muito bem para mim.",
    time: "18:42",
  },
  {
    text:
      "As aulas são muito boas.\nO que mais está ajudando é o professor Pedro nos estimular a conversar.\nEu inclusive falei para o prof. que entrei na aula com o intuito de melhorar o inglês, colocar de uma forma mais prática.\nE o professor nos coloca para conversar e isso é muito bom!",
    time: "15:55",
  },
  {
    text:
      "Oi, boa tarde!\nEu estou gostando muito das aulas, do professor e da turma! 😁",
    time: "09:41",
  },
  {
    text:
      "É a primeira vez que estou acessando o inglês pelo Método Natural, que é proposto pela Speak To Learn. Tanto o método como o material são ótimos. A professora ministra as aulas com excelência e didática.\nEstou amando o curso!",
    time: "16:14",
  },
  {
    text:
      "Minha experiência tem sido excelente, superando minhas expectativas desde o início.\nFico muito feliz em perceber minha evolução em tão pouco tempo.\nA professora Marya é extremamente atenciosa, e estou realmente encantada com a turma.",
    time: "15:48",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = all.length;
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const dx = touchDeltaX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section id="depoimentos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Depoimentos"
            title="Alunos que transformam seus resultados"
            align="center"
          />
          <p className="mx-auto mt-5 max-w-2xl whitespace-pre-line text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            Aprender inglês não precisa ser uma experiência travada, solitária ou frustrante.{"\n\n\n\n"}
            Veja o que os alunos dizem sobre a evolução com o Método Natural da Speak To Learn.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary min-[641px]:grid lg:-left-6"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary min-[641px]:grid lg:-right-6"
          >
            <ChevronRight size={18} />
          </button>

          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {all.map((t, idx) => (
                <div key={idx} className="w-full shrink-0 px-3">
                  <div className="mx-auto w-full max-w-[420px]">
                    <FeedbackCard item={t} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {all.map((_, i) => (
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
  return (
    <article
      className="relative overflow-hidden rounded-[28px] border border-border"
      style={{
        background: "var(--cream)",
        height: "clamp(440px, 62vh, 540px)",
      }}
    >
      {/* repeated 'feedback' lettering — fills the whole card height */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none flex-col font-serif italic"
        style={{
          color: "color-mix(in oklab, white 55%, var(--cream))",
          fontSize: "clamp(40px, 12vw, 60px)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="px-5">feedback</span>
        ))}
      </div>

      {/* WhatsApp message bubble */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          className="relative max-w-[88%] rounded-[10px] px-3.5 py-2.5 text-[12.5px] leading-[1.45] text-[#111b21] shadow-[0_1px_2px_rgba(11,20,26,0.13),0_2px_5px_rgba(11,20,26,0.07)]"
          style={{ background: "#d9fdd3" }}
        >
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
