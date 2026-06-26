import { GraduationCap, Briefcase, Plane } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Method";
import melissa from "@/assets/teacher-melissa.jpg";
import michael from "@/assets/teacher-michael.jpg";
import karen from "@/assets/teacher-karen.jpg";

type Teacher = { name: string; bio: string; img: string; icon: LucideIcon };

const teachers: Teacher[] = [
  { name: "Melissa", bio: "Mais de 10 anos de experiência e especialista em inglês para negócios.", img: melissa, icon: GraduationCap },
  { name: "Michael", bio: "Focado em conversação para comunicação no dia a dia.", img: michael, icon: Briefcase },
  { name: "Karen",   bio: "Inglês para viagens e cultura, com aulas leves e personalizadas.", img: karen,   icon: Plane },
];

export function Teachers() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="Nossos Professores" title="Os melhores guiam seu aprendizado" align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="card-elevated card-elevated-hover overflow-hidden">
                <div className="flex h-full">
                  <div className="relative w-2/5 shrink-0 overflow-hidden">
                    <img
                      src={t.img}
                      alt={`Professor ${t.name}`}
                      width={768}
                      height={896}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex w-3/5 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-serif text-2xl" style={{ color: "var(--green)" }}>{t.name}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-foreground/75">{t.bio}</p>
                    </div>
                    <div className="mt-5 flex justify-end">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-full"
                        style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)", color: "var(--blue-deep)" }}
                      >
                        <t.icon size={15} strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
