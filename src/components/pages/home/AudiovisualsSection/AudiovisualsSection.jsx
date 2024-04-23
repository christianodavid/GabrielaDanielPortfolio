import styles from "./AudiovisualsSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import ProjectLink from "../../../ui/ProjectLink/ProjectLink";
import AudiovisualsImage00 from "/images/audiovisual00.png";
import AudiovisualsImage01 from "/images/audiovisual01.png";

const AudiovisualsSection = () => {
  return (
    <Section id="audiovisuals">
      <SectionTitle>Projetos Audiovisuais</SectionTitle>
      <div className={styles.section_audiovisuals__container}>
        <div className={styles.container_content}>
          <img
            className={styles.container_content__image}
            src={AudiovisualsImage00}
            alt="iPad com print do vídeo"
          />
          <SectionHeading>Curta-Metragem</SectionHeading>
          <ProjectLink href="https://www.youtube.com/embed/R074c8QcALE?si=1FpnhEMwqnhk2Xsb">
            Assista aqui
          </ProjectLink>
        </div>
        <div className={styles.container_content}>
          <img
            className={styles.container_content__image}
            src={AudiovisualsImage01}
            alt="iPad com print do vídeo"
          />
          <SectionHeading>Reportagem</SectionHeading>
          <ProjectLink href="https://www.linkedin.com/posts/gabrielasdaniel_utp-tuiuti-jornalismo-activity-7066160628813508608-CW5A/?utm_source=share&utm_medium=member_desktop">
            Assista aqui
          </ProjectLink>
        </div>
      </div>
    </Section>
  );
};

export default AudiovisualsSection;
