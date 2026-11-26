import styles from "./Abas.module.css";

export function Abas({ rotulo, abas, ativa, aoMudar, idBase }) {
  function aoTeclar(evento, indice) {
    const ultimo = abas.length - 1;
    const destinos = {
      ArrowRight: indice === ultimo ? 0 : indice + 1,
      ArrowLeft: indice === 0 ? ultimo : indice - 1,
      Home: 0,
      End: ultimo,
    };

    if (!Object.hasOwn(destinos, evento.key)) return;

    evento.preventDefault();
    const proxima = abas[destinos[evento.key]];
    aoMudar(proxima.id);
    document.getElementById(`${idBase}-aba-${proxima.id}`)?.focus();
  }

  return (
    <div role="tablist" aria-label={rotulo} className={styles.abas}>
      {abas.map((aba, indice) => {
        const selecionada = aba.id === ativa;

        return (
          <button
            key={aba.id}
            type="button"
            role="tab"
            id={`${idBase}-aba-${aba.id}`}
            aria-selected={selecionada}
            aria-controls={`${idBase}-painel`}
            tabIndex={selecionada ? 0 : -1}
            className={`${styles.aba} ${selecionada ? styles.abaAtiva : ""}`}
            onClick={() => aoMudar(aba.id)}
            onKeyDown={(evento) => aoTeclar(evento, indice)}
          >
            {aba.rotulo}
            <span className={styles.total}>{aba.total}</span>
          </button>
        );
      })}
    </div>
  );
}
