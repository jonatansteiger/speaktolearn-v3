import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "O Método", href: "#metodo" },
  { label: "Cursos", href: "#beneficios" },
  { label: "Para Empresas", href: "#cta" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const heroBtn = document.querySelector("#top .btn-primary");
      if (heroBtn) {
        const rect = heroBtn.getBoundingClientRect();
        setShowFloatingCTA(rect.bottom < 0);
      } else {
        setShowFloatingCTA(window.scrollY > 400);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "oklch(1 0 0 / 0.72)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#cta" className="btn-primary text-sm">Quero aprender inglês</a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#cta"
            className="btn-primary text-xs px-3.5 py-2 transition-all duration-500"
            style={{
              opacity: showFloatingCTA ? 1 : 0,
              transform: showFloatingCTA ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.9)",
              pointerEvents: showFloatingCTA ? "auto" : "none",
            }}
          >
            Quero aprender inglês
          </a>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-sm text-foreground/80 last:border-b-0"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full text-sm">
              Quero aprender inglês
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
