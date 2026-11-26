import { perfil } from "../data/perfil";
import { Secao } from "./Secao";
import styles from "./Sobre.module.css";

export function Sobre() {
  const [destaque, ...demais] = perfil.resumo;

  return (
    <Secao id="sobre" numero="01" titulo="Sobre">
      <div className={styles.texto}>
        <p className={styles.destaque}>{destaque}</p>
        <div className={styles.demais}>
          {demais.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>
      </div>
    </Secao>
  );
}
