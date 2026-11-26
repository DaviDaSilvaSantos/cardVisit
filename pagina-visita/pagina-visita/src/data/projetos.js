// Lista de projetos exibida na aba "Projetos".
// O primeiro item ganha destaque no layout.
//
// Formato de cada item (apenas id e titulo são obrigatórios):
// {
//   id: "meu-projeto",
//   titulo: "Nome do projeto",
//   meta: "2026 · Projeto pessoal",
//   descricao: "O que o projeto faz e qual problema resolve.",
//   tecnologias: ["React", "Node.js"],
//   links: [
//     { rotulo: "Código no GitHub", href: "https://github.com/..." },
//     { rotulo: "Demonstração", href: "https://..." },
//   ],
//   imagem: { src: "/projetos/meu-projeto.png", alt: "Descrição da imagem", largura: 1280, altura: 800 },
// }
// Coloque as imagens na pasta public/projetos/.
export const projetos = [
    {
        id: "baze",
        titulo: "Baze",
        meta: "2026 · Projeto pessoal",
        descricao: "Projeto que tinha como intuito principal auxiliar deficientes visuais a utilziarem o transporte público por ônibus. No momento, encontra-se em desenvolvimento e possíveis ajustes. Portanto, logo mais será disponível para download",
        tecnologias: ["Android", "Kotlin"], 
    },

    {
        id: "portfolio-pessoal",
        titulo: "Portfólio pessoal",
        meta: "2026 · Projeto pessoal",
        descricao: "Portfólio pessoal desenvolvido com React, Node.js, Express e Nunjucks. O projeto é responsivo, acessível e otimizado para SEO.",
        tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        links: [
            { rotulo: "Código no GitHub", href: "https://github.com/DaviDaSilvaSantos/cardVisit" },
        ],
    },
    {
        id: "totem-de-restaurante",
        titulo: "Totem de Restaurante",
        meta: "CEAP · 2026",
        descricao: "A partir do estudo de caso, eu e minha equipe precisávamos criar um sistema de totem de lanchonte estilo MC Donalds para que os clientes tivessem maior facilidade em fazer suas compras.",
        tecnologias: ["Java"],
        links: [
            { rotulo: "Código no GitHub", href: "https://github.com/DaviDaSilvaSantos/totemLanchonete"}
        ]
    },
    {
        id: "sistema-vendas",
        titulo: "Sistema de Vendas",
        titulo: "Caminho Suave",
        descricao: "Dado o estudo de caso, eu, juntamente com minha dupla, fomos desafiados a resolver o problema que nos era proposto: mau gerenciamento dos clientes.",
        tecnologias: ["Java"],
        links: [
            { rotulo: "Código no GitHub", href: "https://github.com/DaviDaSilvaSantos/sistemaVendas"}
        ]
    },
    {
        id: "site-feceap",
        titulo: "Site FeCEAP",
        titulo: "Caminho Suave",
        descricao: "Juntamente com o professor Alef Jesus, os alunos precisavam aprimorar o site respectivo è FeCEAP, que estava desatualizado e com problemas de responsividade. O site foi desenvolvido com o professor para treinar nossas habilidades em Nunjucsk, Express e outros atributos da áres",
        links: [
            { rotulo: "Código no GitHub", href: "https://github.com/DaviDaSilvaSantos/siteFeCEAP"}
        ]
    },
    {
        id: "caminho-suave",
        titulo: "Caminho Suave",
        meta: "CEAP · 2026",
        descricao: "Projeto que tem o intúito de auxiliar pessoas analfabeta.",
        tecnologias: ["Android", "MIT App Inventor"],
        links: [
            { rotulo: "Código no GitHub", href: "https://github.com/DaviDaSilvaSantos/caminhoSuave"}
        ]
    }
];
