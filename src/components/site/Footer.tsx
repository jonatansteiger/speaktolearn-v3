import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  { title: "Navegação", links: ["O Método", "Depoimentos", "FAQ", "Blog"] },
  { title: "Cursos", links: ["Inglês Geral", "Conversação", "Business English", "Preparatórios"] },
  { title: "Para empresas", links: ["Planos corporativos", "Estudos de caso", "Relatórios de evolução", "Fale com vendas"] },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--blue-deep)", color: "color-mix(in oklab, var(--cream) 86%, transparent)" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo variant="cream" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              Inglês de forma natural, com um método premium para quem busca resultados reais.
            </p>
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
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3"><MessageCircle size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> WhatsApp: (11) 99999-0000</li>
              <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> contato@speaktolearn.com.br</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> São Paulo, SP — 100% online</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
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
