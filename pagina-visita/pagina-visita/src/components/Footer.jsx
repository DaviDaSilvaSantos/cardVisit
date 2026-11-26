import { anoAtual, canais, perfil } from "../data/perfil";
import { BotaoLink } from "./BotaoLink";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <p className={styles.assinatura}>
          Desenvolvido por <b>{perfil.nome}</b> · © {anoAtual}
        </p>

        {canais.length > 0 && (
          <ul className={styles.links}>
            {canais.map((canal) => (
              <li key={canal.id}>
                <BotaoLink
                  href={canal.href}
                  variante="texto"
                  externo={canal.externo}
                >
                  {canal.rotulo}
                </BotaoLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
