import { anoAtual, canais, destaques, perfil, stack } from "../data/perfil";
import { BotaoLink } from "./BotaoLink";
import styles from "./Hero.module.css";

export function Hero() {
  const [primeiroNome, ...sobrenome] = perfil.nome.split(" ");

  return (
    <section className={styles.hero} aria-labelledby="hero-titulo">
      <p className={styles.rotulo}>
        <span>Portfólio</span>
        <span>{anoAtual}</span>
      </p>

      <h1 id="hero-titulo" className={styles.titulo}>
        <span className={styles.primeiro}>{primeiroNome}</span>{" "}
        <em className={styles.sobrenome}>{sobrenome.join(" ")}</em>
      </h1>

      <div className={styles.corpo}>
        <div className={styles.texto}>
          <p className={styles.cargo}>{perfil.cargo}</p>

          <ul className={styles.stack} aria-label="Tecnologias">
            {stack.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>

          <div className={styles.acoes}>
            <BotaoLink href="#trabalhos">Ver trabalhos</BotaoLink>
            {canais.length > 0 && (
              <BotaoLink href="#contato" variante="secundario">
                Contato
              </BotaoLink>
            )}
          </div>
        </div>

        <dl className={styles.meta}>
          {destaques.map((item) => (
            <div key={item.rotulo}>
              <dt>{item.rotulo}</dt>
              <dd>{item.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
