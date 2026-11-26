# Portfólio — Davi da Silva Santos

Portfólio pessoal feito com React 19 + Vite, CSS Modules e JavaScript.
Sem dependências além das do template: sem biblioteca de animação, de UI ou de fontes.

## Comandos

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento
npm run build   # build de produção (pasta dist/)
npm run preview # visualiza o build localmente
npm run lint    # ESLint
```

## Onde editar o conteúdo

Todo o conteúdo fica em `src/data/`. Os componentes não precisam ser alterados.

| Arquivo | O que controla |
|---|---|
| `perfil.js` | Nome, cargo, texto "Sobre", stack da Hero e **contato** (e-mail, GitHub, LinkedIn) |
| `competencias.js` | Cards da seção Competências |
| `projetos.js` | Aba "Projetos" (o primeiro item ganha destaque) |
| `certificados.js` | Aba "Certificados" |

- A seção **Contato**, o botão de contato do menu e os links do rodapé só aparecem quando
  pelo menos um campo de `perfil.contato` está preenchido.
- O formato de cada projeto/certificado está documentado em comentário no topo de
  `projetos.js` e `certificados.js`. Imagens vão em `public/projetos/` e `public/certificados/`.
- O título, a descrição e as tags Open Graph ficam em `index.html`.

## Estrutura

```
src/
  data/          conteúdo (perfil, competências, projetos, certificados)
  components/    Header, Hero, Sobre, Competencias, Trabalhos, Contato, Footer
                 + Secao, Abas, ItemPortfolio, CardCompetencias, BotaoLink
  index.css      tokens de design (cores, tipografia, espaçamento) e estilos globais
  App.jsx        composição da página
```

Cada componente tem seu próprio `.module.css`. Todas as cores, tamanhos e espaçamentos
vêm das variáveis CSS definidas em `:root` no `index.css`.

## Acessibilidade e movimento

Link "pular para o conteúdo", menu móvel com `aria-expanded` e fechamento por Escape,
abas navegáveis por setas/Home/End, foco visível e animações desativadas para quem usa
`prefers-reduced-motion: reduce`.
