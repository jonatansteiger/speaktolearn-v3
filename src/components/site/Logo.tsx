export function Logo({ variant = "ink" }: { variant?: "ink" | "cream" }) {
  const color = variant === "cream" ? "var(--cream)" : "var(--blue-deep)";
  const gold = "var(--gold)";
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Speak To Learn">
      <span
        className="grid h-9 w-9 place-items-center rounded-full"
        style={{ background: color }}
      >
        <span
          className="font-serif text-base font-semibold leading-none"
          style={{ color: gold }}
        >
          S
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-serif text-[15px] font-semibold tracking-tight"
          style={{ color }}
        >
          Speak <span style={{ color: gold }}>To</span> Learn
        </span>
        <span
          className="mt-1 text-[10px] uppercase tracking-[0.28em]"
          style={{ color: variant === "cream" ? "rgba(244,235,221,0.6)" : "var(--muted-foreground)" }}
        >
          English School
        </span>
      </span>
    </a>
  );
}
