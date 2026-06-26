import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";
import melissa from "@/assets/teacher-melissa.jpg";
import michael from "@/assets/teacher-michael.jpg";
import karen from "@/assets/teacher-karen.jpg";

const teachers = [
  { name: "Melissa", role: "Conversação & Pronúncia", bio: "10+ anos guiando alunos do A2 ao C1 com foco em fluência conversacional.", img: melissa },
  { name: "Michael", role: "Business English", bio: "Especialista em inglês corporativo, reuniões internacionais e negociações.", img: michael },
  { name: "Karen", role: "Preparatórios & Certificações", bio: "Mentora para IELTS, TOEFL e Cambridge, com taxa de aprovação acima de 95%.", img: karen },
];

export function Teachers() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Nossos Professores" title="Os melhores guiam seu aprendizado" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="card-elevated card-elevated-hover overflow-hidden">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={t.img}
                    alt={`Professor ${t.name}`}
                    width={768}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                  <span
                    className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full"
                    style={{ background: "rgba(244,235,221,0.92)", color: "var(--gold)" }}
                  >
                    <Sparkles size={15} />
                  </span>
                </div>
                <div className="border-t border-border p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-[var(--blue-deep)]">{t.name}</h3>
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Senior</span>
                  </div>
                  <p className="mt-1 text-sm font-medium" style={{ color: "var(--blue)" }}>
                    {t.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
