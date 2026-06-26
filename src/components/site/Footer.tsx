import { MessageCircle, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  { title: "Navegação", links: ["O Método", "Cursos", "Para Empresas", "Depoimentos", "FAQ"] },
  { title: "Cursos", links: ["Inglês Geral", "Inglês para Negócios", "Conversação", "Viagens", "Preparatórios"] },
  { title: "Para Empresas", links: ["Soluções", "Benefícios", "Cases", "Fale com um consultor"] },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--blue-deep)", color: "color-mix(in oklab, var(--cream) 86%, transparent)" }}>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <Logo variant="cream" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Inglês de forma natural, com um método premium para quem busca resultados reais.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Contato</div>
            <ul className="mt-5 space-y-3.5 text-sm text-white/75">
              <li className="flex items-start gap-3"><MessageCircle size={15} className="mt-0.5 shrink-0 text-[var(--gold)]" /> WhatsApp: (11) 98765-4321</li>
              <li className="flex items-start gap-3"><Mail size={15} className="mt-0.5 shrink-0 text-[var(--gold)]" /> contato@speaktolearn.com.br</li>
              <li className="flex items-start gap-3"><MapPin size={15} className="mt-0.5 shrink-0 text-[var(--gold)]" /> São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Speak To Learn. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
