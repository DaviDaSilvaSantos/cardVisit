import styles from "./CardCompetencias.module.css";

export function CardCompetencias({ numero, titulo, subtitulo, descricao }) {
  return (
    <article className={styles.cartao}>
      {numero && (
        <span className={styles.numero} aria-hidden="true">
          {numero}
        </span>
      )}
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.subtitulo}>{subtitulo}</p>
      <p className={styles.descricao}>{descricao}</p>
    </article>
  );
}
