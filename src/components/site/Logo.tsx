import logoBook from "@/assets/logo-book.png";

export function Logo({ variant = "ink" }: { variant?: "ink" | "cream" }) {
  const color = variant === "cream" ? "var(--cream)" : "var(--blue-deep)";
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Speak To Learn">
      <span className="grid h-10 w-10 place-items-center">
        <img src={logoBook} alt="Speak To Learn" className="h-9 w-9 object-contain" />
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
