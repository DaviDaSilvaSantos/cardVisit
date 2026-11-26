// Lista de certificados exibida na aba "Certificados".
//
// Formato de cada item (apenas id e titulo são obrigatórios):
// {
//   id: "nome-do-curso",
//   titulo: "Nome do curso ou certificação",
//   meta: "Instituição · 2026",
//   descricao: "O que foi estudado (opcional).",
//   tecnologias: ["JavaScript"],
//   links: [{ rotulo: "Ver certificado", href: "https://..." }],
//   imagem: { src: "/certificados/nome.png", alt: "Certificado do curso X", largura: 1200, altura: 850 },
// }
// Coloque as imagens na pasta public/certificados/.
export const certificados = [
    {
        id: "java-programming-english",
        titulo: "Java Programming - English",
        meta: "Oracle · 2026",
        descricao: "Formação Técnica que auxiliou no conhecimento de lógica de programação, algoritmos, estruturas de dados e programação orientada a objetos.",
        tecnologias: ["Java"],
        links: [{ rotulo: "Ver certificado", href: "https://www.linkedin.com/in/davi-da-silva-santos/overlay/Certifications/1983449968/treasury/?profileId=ACoAAF_2pdUBMB5WlgZgOcEpSGzPamURY32j7wE" }],
        imagem: { src: "/image-projects/javaProgramming.jpg", alt: "Certificado de Java Programming - English", largura: 1200, altura: 850 },
    },

    {
        id: "java-foundation-portuguese",
        titulo: "Java Foundation - Portuguese",
        meta: "Oracle · 2026",
        descricao: "Formação Técnica que aprofundou o conhecimento de lógica e introduziu interface gráfica",
        tecnologias: ["Java"],
        links: [{ rotulo: "Ver certificado", href: "https://www.linkedin.com/in/davi-da-silva-santos/overlay/Certifications/1983408404/treasury/?profileId=ACoAAF_2pdUBMB5WlgZgOcEpSGzPamURY32j7wE" }],
        imagem: { src: "/image-projects/javaFoundations.jpg", alt: "Certificado de Java Foundation - Portuguese", largura: 1200, altura: 850 },
    },

    {
        id: "oracle certfied java associate",
        titulo: "Java SE 8 Programmer",
        meta: "Oracle · 2026",
        descricao: "Certificação que comprova o conhecimento de Java e programação orientada a objetos.",
        tecnologias: ["Java"],
        links: [{ rotulo: "Ver certificado", href: "https://www.linkedin.com/in/davi-da-silva-santos/overlay/Certifications/1983357488/treasury/?profileId=ACoAAF_2pdUBMB5WlgZgOcEpSGzPamURY32j7wE" }],
        imagem: { src: "/image-projects/oracleCertifiedAssociate.jpg", alt: "Certificado de Java SE 8 Programmer", largura: 1200, altura: 850 },
    },

    {
        id: "site-simples-com-html-css-e-javascript",
        titulo: "Site simples com HTML, CSS e JavaScript",
        meta: "Bradesco · 2026",
        descricao: "Formação que introduziu os conceitos básicos de HTML, CSS e JavaScript.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        links: [{ rotulo: "Ver certificado", href: "https://www.linkedin.com/in/davi-da-silva-santos/overlay/Certifications/2087181192/treasury/?profileId=ACoAAF_2pdUBMB5WlgZgOcEpSGzPamURY32j7wE" }],
        imagem: { src: "/image-projects/siteSimples.jpg", alt: "Certificado de Site simples com HTML, CSS e JavaScript", largura: 1200, altura: 850 },
    }
];
