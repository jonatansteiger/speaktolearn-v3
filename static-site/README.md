# Speak To Learn — Versão estática (Hostinger)

Landing page 100% estática. Sem Node.js, sem build, sem banco de dados.

## Estrutura
```
static-site/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── aula-speaktolearn.jpg
    ├── logo-book.png
    ├── testimonial-lead.png
    └── usa-flag.png
```

## Como subir na Hostinger (plano básico)

1. Selecione a pasta `static-site/` e crie um `.zip` com o conteúdo dela (não a pasta em si — os arquivos ficam na raiz do zip).
2. No hPanel da Hostinger, abra **Arquivos → Gerenciador de Arquivos** e entre em `public_html`.
3. Envie o `.zip` e clique com o botão direito → **Extrair**. Ou envie os arquivos direto por FTP.
4. Acesse seu domínio — o site já estará no ar.

> Alternativa por FTP: use um cliente como FileZilla e envie o conteúdo da pasta para `public_html`.

## Testar localmente
Abra `index.html` direto no navegador (duplo clique). As fontes vêm do Google Fonts e as imagens são locais.

Se preferir servir por HTTP local (para o cache funcionar como em produção), você pode usar qualquer servidor estático — por exemplo, o embutido do Python:

```bash
cd static-site
python3 -m http.server 8000
# abra http://localhost:8000
```

## O que essa versão inclui
- Header fixo com scroll (mostra CTA flutuante no mobile)
- Hero com imagem da aula ao vivo e badge LIVE
- Seções: Método, Turmas, Benefícios, Depoimentos (carrossel WhatsApp), CTA, FAQ, Footer
- Reveal-on-scroll, accordion do FAQ e carrossel com autoplay/swipe — tudo em JavaScript puro
- SEO básico: title, meta description, Open Graph, Twitter Card

## Editar textos
Todos os textos ficam em `index.html` (exceto os depoimentos, que estão em `script.js` no array `testimonials`).
