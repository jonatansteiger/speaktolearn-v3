import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

const all = [
  { text: "O método me ajudou a destravar minha conversação e conquistar novas oportunidades.", name: "Rafael S.", role: "Gerente de Projetos", img: s2 },
  { text: "As aulas ao vivo fazem toda a diferença. Aprendi de verdade e com muito mais confiança.", name: "Juliana N.", role: "Advogada", img: s1 },
  { text: "Hoje me comunico com mais segurança no trabalho e em viagens.", name: "Gerson L.", role: "Empresário", img: s2 },
  { text: "Cheguei nas certificações muito mais preparada. Equipe excepcional.", name: "Isabela R.", role: "Médica", img: s3 },
  { text: "Plano flexível e atendimento próximo. Recomendo para qualquer executivo.", name: "Eduardo L.", role: "CFO", img: s2 },
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
    <section id="depoimentos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Depoimentos" title="Alunos que transformam seus resultados" align="center" />
        </Reveal>

        <div className="relative mt-14">
          {/* arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary sm:grid lg:-left-6"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary sm:grid lg:-right-6"
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
                  <article className="card-elevated card-elevated-hover flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <Quote size={28} strokeWidth={1.25} style={{ color: "var(--gold)" }} />
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={13} fill="var(--gold)" stroke="var(--gold)" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 grow text-[13.5px] leading-relaxed text-foreground/80">{t.text}</p>
                    <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                      <img src={t.img} alt={t.name} width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
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
                background: i === index ? "var(--blue-deep)" : "color-mix(in oklab, var(--ink) 18%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
