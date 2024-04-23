import styles from "./AboutSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import SectionParagraph from "../../../ui/SectionParagraph/SectionParagraph";

const AboutSection = () => {
  return (
    <>
      <Section id="about">
        <SectionTitle>Sobre</SectionTitle>
        <div className={styles.section_about__container}>
          <div className={styles.section_about__container_text}>
            <div className={styles.container_text__heading}>
              <p className={styles.container_text__heading01}>Oie,</p>
              <p className={styles.container_text__heading02}>Aqui é a Gabi</p>
            </div>
            <div className={styles.container_text__content}>
              <SectionParagraph>
                Sou uma jornalista em formação pela Universidade Tuiuti do
                Paraná
              </SectionParagraph>
              <SectionParagraph>
                Me considero uma pessoa criativa, comunicativa, que adora ouvir
                histórias e escrever sobre elas
              </SectionParagraph>
            </div>
          </div>
          <div className={styles.section_about__container_image}></div>
        </div>
      </Section>
    </>
  );
};

export default AboutSection;
