import { useEffect, useState } from "react";
import { canais, perfil } from "../data/perfil";
import { BotaoLink } from "./BotaoLink";
import { Secao } from "./Secao";
import styles from "./Contato.module.css";

const mensagens = {
  copiado: "E-mail copiado.",
  erro: "Não foi possível copiar. Copie manualmente.",
};

export function Contato() {
  const [status, setStatus] = useState("");
  const { email } = perfil.contato;
  const podeCopiar = Boolean(email) && Boolean(navigator.clipboard);

  // Limpa a mensagem de feedback depois de alguns segundos
  useEffect(() => {
    if (!status) return;
    const temporizador = setTimeout(() => setStatus(""), 3000);
    return () => clearTimeout(temporizador);
  }, [status]);

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copiado");
    } catch {
      setStatus("erro");
    }
  }

  return (
    <Secao id="contato" numero="04" titulo="Contato">
      <p className={styles.chamada}>
        Quer conversar sobre um projeto ou uma oportunidade? Estes são os
        canais para falar comigo.
      </p>

      {email && (
        <div className={styles.acoes}>
          <BotaoLink href={`mailto:${email}`}>Enviar e-mail</BotaoLink>
          {podeCopiar && (
            <button
              type="button"
              className={styles.copiar}
              onClick={copiarEmail}
            >
              Copiar e-mail
            </button>
          )}
          <span role="status" className={styles.status}>
            {mensagens[status] ?? ""}
          </span>
        </div>
      )}

      <ul className={styles.canais}>
        {canais.map((canal) => (
          <li key={canal.id} className={styles.canal}>
            <span className={styles.rotulo}>{canal.rotulo}</span>
            <BotaoLink
              href={canal.href}
              variante="canal"
              externo={canal.externo}
            >
              {canal.valor}
            </BotaoLink>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
