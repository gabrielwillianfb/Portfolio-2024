import styles from "./Perfil.module.css";
import { getImageUrl } from "../../utils.js";

export const Perfil = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Gabriel</h1>

        <p className={styles.description}>
          Estudante dedicado de desenvolvimento web com quase 2 anos de estudos, apaixonado por
          front-end e agora explorando o mundo do backend, através do Next.js e Node.js. Sempre em
          busca de novos aprendizados e desafios.
        </p>
        <a href="mailto:gabriel.beck03@gmail.com" className={styles.contactBtn}>
          Envie um e-mail
        </a>
      </div>
      <img
        className={styles.perfilImage}
        src={getImageUrl("perfil/perfilImage.png")}
        alt="Imagem de perfil"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
