import styles from "./MagazineSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionParagraph from "../../../ui/SectionParagraph/SectionParagraph";
import ProjectLink from "../../../ui/ProjectLink/ProjectLink";

const MagazineSection = () => {
  return (
    <Section id="magazine">
      <SectionTitle>Revista</SectionTitle>
      <div className={styles.section_magazine__container}>
        <div className={styles.section_magazine__container_text}>
          <SectionHeading>Gralha</SectionHeading>
          <SectionParagraph>
            Revista experimental resultante da disciplina Editoriais Impressos:
            Textos Políticos e Econômicos ministrada para os alunos do 3º e 4º
            período do curso de Jornalismo da Universidade Tuiuti do Paraná
            (UTP) durante o 2º semestre de 2023.
          </SectionParagraph>
          <ProjectLink href="https://www.calameo.com/books/007550797d83551832935">
            Leia a revista completa aqui
          </ProjectLink>
        </div>
        <div className={styles.section_magazine__container_image}></div>
      </div>
    </Section>
  );
};

export default MagazineSection;
