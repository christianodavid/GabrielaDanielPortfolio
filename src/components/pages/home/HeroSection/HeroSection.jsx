import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.section_hero}>
      <div className={styles.section_hero__heading_container}>
        <h2 className={styles.section_hero__heading01}>Portfolio</h2>
        <h2 className={styles.section_hero__heading02}>Jornalístico</h2>
      </div>
      <p className={styles.section_hero__subheading}>Gabriela Daniel</p>
    </section>
  );
};

export default HeroSection;
