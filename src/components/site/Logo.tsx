export function Logo({ variant = "ink" }: { variant?: "ink" | "cream" }) {
  const color = variant === "cream" ? "var(--cream)" : "var(--blue-deep)";
  const gold = "var(--gold)";
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Speak To Learn">
      <span
        className="grid h-10 w-9 place-items-center"
        style={{
          background: color,
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
        }}
      >
        <span className="font-serif text-base font-bold leading-none -mt-1" style={{ color: gold }}>S</span>
      </span>
      <span className="flex flex-col leading-[1.05]">
        <span className="font-serif text-[13px] font-semibold tracking-[0.05em]" style={{ color }}>
          SPEAK
        </span>
        <span className="font-serif text-[13px] font-semibold tracking-[0.05em]" style={{ color }}>
          TO LEARN
        </span>
      </span>
    </a>
  );
}
