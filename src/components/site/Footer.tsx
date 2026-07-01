import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer style={{ background: "var(--blue-deep)", color: "color-mix(in oklab, var(--cream) 86%, transparent)" }}>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Logo variant="cream" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Inglês de forma natural, com um método para quem busca resultados reais.
            </p>
          </div>

          <div className="text-xs text-white/55">
            © {new Date().getFullYear()} Speak To Learn. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
