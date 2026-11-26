import { BotaoLink } from "./BotaoLink";
import styles from "./ItemPortfolio.module.css";

export function ItemPortfolio({
  numero,
  titulo,
  meta,
  descricao,
  tecnologias = [],
  links = [],
  imagem,
  destaque = false,
}) {
  return (
    <article className={`${styles.item} ${destaque ? styles.destaque : ""}`}>
      {imagem && (
        <img
          className={styles.imagem}
          src={imagem.src}
          alt={imagem.alt}
          width={imagem.largura}
          height={imagem.altura}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className={styles.corpo}>
        <p className={styles.meta}>
          <span aria-hidden="true">{numero}</span>
          {meta && <span>{meta}</span>}
        </p>
        <h3 className={styles.titulo}>{titulo}</h3>
        {descricao && <p className={styles.descricao}>{descricao}</p>}
        {tecnologias.length > 0 && (
          <ul className={styles.tags} aria-label="Tecnologias">
            {tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        )}
        {links.length > 0 && (
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <BotaoLink href={link.href} variante="texto" externo>
                  {link.rotulo}
                </BotaoLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
