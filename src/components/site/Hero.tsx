import {
  Mic, Video, MoreHorizontal, PhoneOff, Sparkles, Users, TrendingUp,
} from "lucide-react";
import { Reveal } from "./Reveal";
import videoCall from "@/assets/video-call.jpg";

const differentiators = [
  { icon: Sparkles, label: "Método natural e estruturado" },
  { icon: Users, label: "Aulas ao vivo com professores experientes" },
  { icon: TrendingUp, label: "Resultados reais e progressivos" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[112px] pb-16 sm:pt-[136px] lg:pb-24">
      {/* soft ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 35%, transparent), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--blue) 40%, transparent), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <div>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-1 w-6 bg-[var(--gold)]" /> Inglês premium para resultados reais
            </span>

            <h1 className="mt-6 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[64px]">
              Aprenda inglês de forma{" "}
              <span className="italic" style={{ color: "var(--blue)" }}>natural</span>, com um{" "}
              <span style={{ color: "var(--blue-deep)" }}>método premium</span> que acelera sua evolução.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Aulas ao vivo, personalizadas e focadas no que realmente importa para você ganhar fluência no dia a dia e no mundo profissional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#cta" className="btn-primary">Agende sua avaliação gratuita</a>
              <a href="#metodo" className="btn-ghost">Saiba mais</a>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {differentiators.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full"
                    style={{ background: "color-mix(in oklab, var(--blue) 10%, transparent)", color: "var(--blue-deep)" }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm leading-snug text-foreground/80">{label}</span>
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
      {/* gold offset frame */}
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[28px]"
        style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%)" }}
      />
      <div
        className="relative overflow-hidden rounded-[24px] border border-border bg-card"
        style={{ boxShadow: "var(--shadow-lift)" }}
      >
        {/* fake browser top */}
        <div className="flex items-center justify-between border-b border-border/70 bg-[color-mix(in_oklab,var(--cream)_70%,white)] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--ink)_15%,white)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--ink)_15%,white)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--ink)_15%,white)]" />
          </div>
          <span className="text-[11px] tracking-wide text-muted-foreground">live.speaktolearn.com</span>
          <span className="w-10" />
        </div>

        <div className="relative aspect-[4/5] w-full">
          <img
            src={videoCall}
            alt="Aula ao vivo entre professor e aluno"
            width={1024}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* LIVE badge */}
          <div
            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wider text-white"
            style={{ background: "rgba(15,34,61,0.78)", backdropFilter: "blur(6px)" }}
          >
            <span className="live-dot h-2 w-2 rounded-full bg-[var(--gold)]" />
            LIVE
          </div>

          {/* picture-in-picture self view */}
          <div
            className="absolute right-4 top-4 h-20 w-28 overflow-hidden rounded-xl border border-white/30"
            style={{ background: "linear-gradient(135deg, #2a3a55, #0F223D)" }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gold)] font-serif text-sm font-semibold text-[var(--blue-deep)]">
                A
              </span>
            </div>
          </div>

          {/* caption */}
          <div className="absolute inset-x-4 bottom-24 flex justify-center">
            <span
              className="rounded-full px-3 py-1.5 text-[12px] text-white"
              style={{ background: "rgba(15,34,61,0.65)", backdropFilter: "blur(6px)" }}
            >
              “Tell me about your weekend in English.”
            </span>
          </div>

          {/* call bar */}
          <div className="absolute inset-x-4 bottom-4">
            <div
              className="flex items-center justify-between rounded-2xl px-3 py-2.5"
              style={{ background: "rgba(15,34,61,0.85)", backdropFilter: "blur(10px)" }}
            >
              <div className="flex items-center gap-2 text-[11px] text-white/80">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold)] live-dot" />
                </span>
                <span className="hidden sm:block">Melissa • 28:14</span>
              </div>
              <div className="flex items-center gap-2">
                <CallBtn><Mic size={15} /></CallBtn>
                <CallBtn><Video size={15} /></CallBtn>
                <CallBtn><MoreHorizontal size={15} /></CallBtn>
                <CallBtn danger><PhoneOff size={15} /></CallBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating stat chips */}
      <div
        className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] sm:block"
      >
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Evolução média</div>
        <div className="mt-0.5 font-serif text-xl text-[var(--blue-deep)]">+1 nível CEFR</div>
      </div>
      <div
        className="absolute -top-4 -right-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: "color-mix(in oklab, var(--green) 18%, transparent)", color: "var(--green)" }}>
            <TrendingUp size={15} />
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Satisfação</div>
            <div className="font-serif text-lg text-[var(--blue-deep)]">98%</div>
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
      style={{ background: danger ? "#c0392b" : "rgba(255,255,255,0.12)" }}
    >
      {children}
    </span>
  );
}
