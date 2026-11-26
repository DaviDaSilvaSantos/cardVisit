import { useEffect, useRef, useState } from "react";
import { perfil } from "../data/perfil";
import styles from "./Header.module.css";

export function Header({ links, cta }) {
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef(null);

  // Fecha o menu móvel com Escape e devolve o foco ao botão
  useEffect(() => {
    if (!aberto) return;

    function aoTeclar(evento) {
      if (evento.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    }

    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  const classesNav = `${styles.nav} ${aberto ? styles.navAberto : ""}`;

  return (
    <header id="topo" className={styles.header}>
      <div className={styles.barra}>
        <a className={styles.marca} href="#topo">
          {perfil.nome}
        </a>
        <button
          ref={botaoRef}
          type="button"
          className={styles.botaoMenu}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto(!aberto)}
        >
          Menu
        </button>
        <nav id="menu-principal" className={classesNav} aria-label="Principal">
          <ul className={styles.lista}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.link}
                  href={link.href}
                  onClick={() => setAberto(false)}
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
            {cta && (
              <li>
                <a
                  className={styles.cta}
                  href={cta.href}
                  onClick={() => setAberto(false)}
                >
                  {cta.rotulo}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
