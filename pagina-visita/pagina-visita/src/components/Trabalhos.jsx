import { useState } from "react";
import { certificados } from "../data/certificados";
import { projetos } from "../data/projetos";
import { Abas } from "./Abas";
import { ItemPortfolio } from "./ItemPortfolio";
import { Secao } from "./Secao";
import styles from "./Trabalhos.module.css";

const abas = [
  {
    id: "projetos",
    rotulo: "Projetos",
    itens: projetos,
    vazio: "Os projetos serão publicados aqui em breve.",
  },
  {
    id: "certificados",
    rotulo: "Certificados",
    itens: certificados,
    vazio: "Os certificados serão publicados aqui em breve.",
  },
];

const abasParaBotoes = abas.map((aba) => ({
  id: aba.id,
  rotulo: aba.rotulo,
  total: aba.itens.length,
}));

export function Trabalhos() {
  const [idAtiva, setIdAtiva] = useState("projetos");
  const atual = abas.find((aba) => aba.id === idAtiva);
  const vazio = atual.itens.length === 0;

  return (
    <Secao id="trabalhos" numero="03" titulo="Trabalhos">
      <Abas
        rotulo="Projetos e certificados"
        abas={abasParaBotoes}
        ativa={idAtiva}
        aoMudar={setIdAtiva}
        idBase="trabalhos"
      />

      <div
        key={idAtiva}
        role="tabpanel"
        id="trabalhos-painel"
        aria-labelledby={`trabalhos-aba-${idAtiva}`}
        tabIndex={vazio ? 0 : undefined}
        className={styles.painel}
      >
        {vazio ? (
          <p className={styles.vazio}>{atual.vazio}</p>
        ) : (
          <ul className={styles.lista}>
            {atual.itens.map((item, indice) => {
              const destaque = idAtiva === "projetos" && indice === 0;

              return (
                <li key={item.id} className={destaque ? styles.destaque : ""}>
                  <ItemPortfolio
                    numero={String(indice + 1).padStart(2, "0")}
                    titulo={item.titulo}
                    meta={item.meta}
                    descricao={item.descricao}
                    tecnologias={item.tecnologias}
                    links={item.links}
                    imagem={item.imagem}
                    destaque={destaque}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Secao>
  );
}
