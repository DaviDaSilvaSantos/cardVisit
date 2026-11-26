import { competencias } from "../data/competencias";
import { CardCompetencias } from "./CardCompetencias";
import { Secao } from "./Secao";
import styles from "./Competencias.module.css";

export function Competencias() {
  return (
    <Secao id="competencias" numero="02" titulo="Competências">
      <ul className={styles.lista}>
        {competencias.map((competencia, indice) => (
          <li key={competencia.id}>
            <CardCompetencias
              numero={String(indice + 1).padStart(2, "0")}
              titulo={competencia.titulo}
              subtitulo={competencia.subtitulo}
              descricao={competencia.descricao}
            />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
