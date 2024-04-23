import styles from "./TextCard.module.css";
import ProjectLink from "../../../../ui/ProjectLink/ProjectLink";

const TextCard = ({ data }) => {
  return (
    <div className={styles.text_card}>
      <img
        className={styles.text_card__image}
        src={data.backgroundImage0}
        alt={data.alt}
      />
      <div className={styles.text_card__content}>
        <h3 className={styles.text_card__content_title}>{data.title}</h3>
        <p className={styles.text_card__content_paragraph}>{data.paragraph}</p>
        <ProjectLink href={data.link}>Leia Aqui</ProjectLink>
      </div>
    </div>
  );
};

export default TextCard;
