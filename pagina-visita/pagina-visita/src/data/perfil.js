// Dados pessoais usados em todo o site.
// Preencha contato.email, contato.github e contato.linkedin para que a
// seção "Contato" e os atalhos de contato apareçam. Campos vazios são
// ignorados: nada é exibido para eles.
export const perfil = {
  nome: "Davi da Silva Santos",
  cargo: "Desenvolvedor Web",
  resumo: [
    "Sou desenvolvedor web. Trabalho com o ciclo completo de uma aplicação web: a interface com HTML, CSS, JavaScript e React, o servidor com Node.js, Express e Nunjucks, e os dados com SQLite. Também uso Python e Java para resolver problemas e praticar lógica e orientação a objetos.",
    "Este portfólio reúne minhas competências, os projetos que desenvolvi e os certificados que conquistei.",
  ],
  contato: {
    email: "contatodavidasilvasantos@gmail.com",
    github: "https://github.com/DaviDaSilvaSantos",
    linkedin: "https://www.linkedin.com/in/davi-da-silva-santos/",
  },
};

// Ano calculado uma única vez, fora dos componentes.
export const anoAtual = new Date().getFullYear();

export const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Nunjucks",
  "SQLite",
  "Python",
  "Java",
];

export const destaques = [
  { rotulo: "Atuação", valor: "Front-end, back-end e banco de dados" },
  { rotulo: "Linguagens", valor: "JavaScript, Python e Java" },
];

const { email, github, linkedin } = perfil.contato;

function semProtocolo(url) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

export const canais = [
  email && {
    id: "email",
    rotulo: "E-mail",
    valor: email,
    href: `mailto:${email}`,
    externo: false,
  },
  github && {
    id: "github",
    rotulo: "GitHub",
    valor: semProtocolo(github),
    href: github,
    externo: true,
  },
  linkedin && {
    id: "linkedin",
    rotulo: "LinkedIn",
    valor: semProtocolo(linkedin),
    href: linkedin,
    externo: true,
  },
].filter(Boolean);
