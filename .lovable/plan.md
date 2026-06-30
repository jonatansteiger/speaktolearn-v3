## Objetivo
Manter o carrossel e o balão verde (estilo WhatsApp) como estão hoje, e ajustar apenas o **fundo do card** para reproduzir o layout das imagens de referência: a palavra "feedback" em itálico serifado repetida **uma embaixo da outra**, alinhadas à esquerda, ocupando toda a altura do card.

## Mudança
Editar somente `src/components/site/Testimonials.tsx`, função `FeedbackCard`:

- Substituir o bloco atual de fundo (4 linhas alternando esquerda/direita com `justify-between`) por uma **coluna empilhada de várias linhas "feedback"**, todas alinhadas à esquerda, com espaçamento vertical apertado (line-height ~0.95) cobrindo toda a altura do card.
- Manter a fonte serifada itálica (`font-serif italic`), a cor levemente esmaecida sobre o bege, o tamanho grande responsivo e o `overflow-hidden` no `<article>` para cortar o que passar das bordas.
- Não alterar: estrutura do carrossel, navegação, dots, autoplay, balão verde, tail, texto, horário nem os checks azuis.

## Detalhes técnicos
```tsx
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 flex select-none flex-col font-serif italic"
  style={{
    color: "color-mix(in oklab, white 55%, var(--cream))",
    fontSize: "clamp(44px, 8vw, 64px)",
    lineHeight: 0.95,
    letterSpacing: "-0.02em",
  }}
>
  {Array.from({ length: 8 }).map((_, i) => (
    <span key={i} className="px-5">feedback</span>
  ))}
</div>
```
A quantidade (~8) garante preenchimento vertical sem espaço vazio; o `overflow-hidden` do article corta o excedente.
