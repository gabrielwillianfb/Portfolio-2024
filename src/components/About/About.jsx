import styles from "./About.module.css";
import { getImageUrl } from "../../utils.js";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mim</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Ícone de Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-end</h3>
              <p>
                Sou um desenvolvedor front-end em formação, com foco em criar sites responsivos e
                otimizados.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Ícone de Servidor" />
            <div className={styles.aboutItemText}>
              <h3>Estudante de Back-end</h3>
              <p>
                Estou começando a explorar o desenvolvimento de back-end com Node.js, sempre em
                busca de aprender mais.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
