import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

const all = [
  {
    text: "Em seis meses passei a conduzir reuniões internacionais em inglês com naturalidade. O método é leve e os professores são excepcionais.",
    name: "Camila Andrade", role: "Gerente de Produto, fintech", img: s1,
  },
  {
    text: "O acompanhamento personalizado fez toda a diferença. Saí do intermediário travado para falar com clientes nos Estados Unidos sem medo.",
    name: "Rafael Mendes", role: "Diretor Comercial", img: s2,
  },
  {
    text: "Foi a primeira escola onde eu realmente vi evolução. As aulas ao vivo me obrigaram a praticar e os feedbacks aceleraram tudo.",
    name: "Larissa Pires", role: "Analista de Marketing", img: s3,
  },
  {
    text: "Estudo entre viagens e o time da Speak To Learn adaptou meu plano por completo. Recomendo para qualquer executivo.",
    name: "Eduardo Lima", role: "CFO, indústria", img: s2,
  },
  {
    text: "Cheguei nas certificações com muito mais segurança. A Karen é simplesmente sensacional na preparação para o IELTS.",
    name: "Isabela Rocha", role: "Médica, residente no exterior", img: s3,
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
    const id = setInterval(() => setIndex((i) => (i + 1) % pages), 6000);
    return () => clearInterval(id);
  }, [pages]);

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + pages) % pages);

  return (
    <section id="depoimentos" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Depoimentos" title="Alunos que transformam seus resultados" />
            <div className="hidden gap-2 sm:flex">
              <button onClick={() => go(-1)} aria-label="Anterior" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => go(1)} aria-label="Próximo" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(calc(${index} * -${100 / perView}%))` }}
          >
            {all.map((t) => (
              <div key={t.name + t.text} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                <article className="card-elevated card-elevated-hover h-full p-7">
                  <Quote size={36} strokeWidth={1} style={{ color: "var(--gold)" }} />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="var(--gold)" stroke="var(--gold)" />
                    ))}
                  </div>
                  <p className="mt-5 font-serif text-lg leading-snug text-[var(--blue-deep)]">“{t.text}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <img src={t.img} alt={t.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-[var(--blue-deep)]">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
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
                width: i === index ? 28 : 10,
                background: i === index ? "var(--blue-deep)" : "color-mix(in oklab, var(--ink) 18%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
