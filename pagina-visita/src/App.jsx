import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CardCompetencias } from "./components/CardCompetencias";
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.card}>
        <CardCompetencias
          titulo="HTML"
          subtitulo="Linguagem de Marcação"
          descricao="Sla"
        />
        <CardCompetencias
          titulo="HTML"
          subtitulo="Linguagem de Marcação"
          descricao="Sla"
        />
        <CardCompetencias
          titulo="HTML"
          subtitulo="Linguagem de Marcação"
          descricao="Sla"
        />
        <CardCompetencias
          titulo="HTML"
          subtitulo="Linguagem de Marcação"
          descricao="Sla"
        /> 
      </div>
      <Footer />
    </div>
  );
}
