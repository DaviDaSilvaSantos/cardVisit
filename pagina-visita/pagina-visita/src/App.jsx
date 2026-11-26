import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";
import { Competencias } from "./components/Competencias";
import { Trabalhos } from "./components/Trabalhos";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { canais } from "./data/perfil";
import styles from "./App.module.css";

const temContato = canais.length > 0;

const links = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#competencias", rotulo: "Competências" },
  { href: "#trabalhos", rotulo: "Trabalhos" },
];

const cta = temContato ? { href: "#contato", rotulo: "Contato" } : null;

export function App() {
  return (
    <div className={styles.app}>
      <a className={styles.pular} href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header links={links} cta={cta} />
      <main id="conteudo" className={styles.main} tabIndex={-1}>
        <Hero />
        <Sobre />
        <Competencias />
        <Trabalhos />
        {temContato && <Contato />}
      </main>
      <Footer />
    </div>
  );
}
