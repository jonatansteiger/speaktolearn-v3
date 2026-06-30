import type { ReactNode } from "react";
import { Mic, Video, MoreHorizontal, PhoneOff, Sparkles, Users, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import videoCall from "@/assets/video-call.jpg";
import usaFlagAsset from "@/assets/usa-flag.png.asset.json";

const differentiators = [
  { icon: Sparkles, label: "Método natural e estruturado" },
  { icon: Users, label: "Aulas ao vivo com professores experientes" },
  { icon: TrendingUp, label: "Resultados reais e progressivos" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[104px] pb-16 sm:pt-[128px] lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 35%, transparent), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--blue) 40%, transparent), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <Reveal>
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide"
              style={{
                background: "color-mix(in oklab, var(--cream) 65%, white)",
                borderColor: "color-mix(in oklab, var(--gold) 35%, transparent)",
                color: "var(--blue-deep)",
              }}
            >
              <span className="live-dot h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
              Professores brasileiros nos EUA
              <img src={usaFlagAsset.url} alt="Bandeira dos EUA animada" className="h-4 w-4 rounded-full object-cover" />
            </span>
            <h1 className="mt-5 text-balance text-[40px] leading-[1.05] sm:text-5xl lg:text-[58px]">
              Aprenda inglês de forma <span className="italic" style={{ color: "var(--green)" }}>natural</span>,
              <br />
              com um <span style={{ color: "var(--gold)" }}>método único</span> que acelera sua evolução.
            </h1>


            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/70">
              Aulas ao vivo, personalizadas e focadas no que realmente importa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#cta" className="btn-primary">Quero aprender inglês</a>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {differentiators.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md"
                    style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)", color: "var(--blue-deep)" }}
                  >
                    <Icon size={14} strokeWidth={1.75} />
                  </span>
                  <span className="text-xs leading-snug text-foreground/75">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <VideoCallCard />
        </Reveal>
      </div>
    </section>
  );
}

function VideoCallCard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[28px]"
        style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--gold) 28%, transparent), transparent 60%)" }}
      />
      <div
        className="relative overflow-hidden rounded-[22px]"
        style={{ background: "var(--blue-deep)", boxShadow: "var(--shadow-lift)" }}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px]">
          <img
            src={videoCall}
            alt="Aula ao vivo entre professor e aluno"
            width={1280}
            height={720}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* center divider */}
          <div aria-hidden className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 sm:block" />

          {/* LIVE badge */}
          <div
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider text-white"
            style={{ background: "rgba(15,34,61,0.78)", backdropFilter: "blur(6px)" }}
          >
            <span className="live-dot h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
            LIVE
          </div>

          {/* call bar */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5">
            <div
              className="flex items-center gap-2 rounded-full px-3 py-2"
              style={{ background: "rgba(15,34,61,0.85)", backdropFilter: "blur(10px)" }}
            >
              <CallBtn><Mic size={15} /></CallBtn>
              <CallBtn><Video size={15} /></CallBtn>
              <CallBtn><MoreHorizontal size={15} /></CallBtn>
              <CallBtn danger><PhoneOff size={15} /></CallBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallBtn({ children, danger }: { children: ReactNode; danger?: boolean }) {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-full text-white"
      style={{ background: danger ? "#c0392b" : "rgba(255,255,255,0.14)" }}
    >
      {children}
    </span>
  );
}
