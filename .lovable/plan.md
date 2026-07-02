# Versão estática para Hostinger (plano básico)

## Objetivo
Criar uma versão 100% estática da landing page atual, sem Node.js, sem build e sem dependências de servidor. O usuário poderá baixar a pasta `/static-site` e subir direto no `public_html` da Hostinger via File Manager/FTP.

O projeto TanStack atual continua intocado — a versão estática vive em paralelo.

## O que será entregue

Nova pasta na raiz do projeto:

```text
static-site/
├── index.html          (página única com todas as seções)
├── styles.css          (CSS puro, sem Tailwind)
├── script.js           (menu mobile, FAQ accordion, carrossel de depoimentos, reveal on scroll)
├── assets/
│   ├── aula-speaktolearn.jpg
│   ├── usa-flag.png
│   ├── testimonial-lead.png
│   └── (demais imagens usadas hoje)
└── README.md           (instruções curtas de como subir na Hostinger)
```

## Seções replicadas (mesma ordem e conteúdo de hoje)
1. Header (com menu mobile)
2. Hero (com imagem da aula + badge "LIVE")
3. Method ("Aprenda pelo método natural")
4. Classes (turmas Kids / Teens / Adults)
5. Benefits
6. Testimonials (carrossel WhatsApp com balão verde + fundo "feedback feedback…")
7. CTA Band
8. FAQ (accordion)
9. Footer

Todos os textos atuais serão preservados exatamente como estão nos componentes React.

## Detalhes técnicos

### Sem framework, sem build
- HTML semântico único (`index.html`) com `<section>` para cada bloco.
- CSS puro em `styles.css`, replicando os tokens do `src/styles.css` atual (cores bege, verde WhatsApp, tipografia serifada Cormorant Garamond + Inter) via variáveis CSS `:root { --cream, --primary, ... }`.
- Fontes carregadas via `<link>` do Google Fonts direto no `<head>` (Cormorant Garamond + Inter) — permitido em HTML puro, não passa por Tailwind.
- Ícones: SVGs inline (mesmos que o lucide-react usa hoje) para não depender de biblioteca.
- Responsividade via media queries e CSS grid/flex — mesmos breakpoints do Tailwind (`640px`, `768px`, `1024px`).

### JavaScript vanilla (`script.js`)
- Toggle do menu mobile do Header.
- Accordion do FAQ (abrir/fechar via `classList.toggle` + `max-height`).
- Carrossel de depoimentos: autoplay + dots + swipe touch (equivalente ao Embla atual, mas em ~40 linhas de JS puro).
- IntersectionObserver para reveal-on-scroll (substitui o componente `<Reveal>`).
- Sem nenhuma dependência externa. Zero `<script src="cdn...">`.

### CTAs
Todos os botões continuam como `<a href="...">` para WhatsApp/âncoras internas, exatamente como hoje. Nenhum backend necessário.

### SEO e metadados
- `<title>`, `<meta description>`, Open Graph e Twitter Card copiados do `__root.tsx` e `routes/index.tsx` atuais.
- `<html lang="pt-BR">`, viewport responsivo, favicon.
- Uma única `<h1>` no Hero, hierarquia semântica correta.

## Como subir na Hostinger (incluído no README)
1. Baixar/zipar a pasta `static-site/`.
2. No hPanel da Hostinger → File Manager → `public_html`.
3. Fazer upload do zip e extrair, ou subir os arquivos via FTP.
4. Acessar o domínio — pronto, sem configuração adicional.

## Fora de escopo
- Não vou remover nem alterar o projeto TanStack atual.
- Não vou adicionar formulários com backend (o usuário confirmou que mantém links WhatsApp).
- Não vou instalar Astro, Vite, nem qualquer toolchain novo — HTML/CSS/JS puros conforme escolhido.
