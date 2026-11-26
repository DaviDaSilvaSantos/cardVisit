import styles from "./Secao.module.css";

export function Secao({ id, numero, titulo, children }) {
  const idTitulo = `${id}-titulo`;

  return (
    <section id={id} className={styles.secao} aria-labelledby={idTitulo}>
      <div className={styles.conteudo}>
        <header className={styles.cabecalho}>
          <span className={styles.numero} aria-hidden="true">
            {numero}
          </span>
          <h2 id={idTitulo} className={styles.titulo}>
            {titulo}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
