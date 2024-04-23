import styles from "./SkillsSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionParagraph from "../../../ui/SectionParagraph/SectionParagraph";
import SectionButton from "../../../ui/SectionButton/SectionButton";

const SkillsSection = () => {
  return (
    <>
      <Section>
        <SectionTitle>Sobre</SectionTitle>
        <div className={styles.section_skills__container}>
          <div className={styles.section_skills__container_content}>
            <SectionHeading className="dark_cyan_colour">
              Últimas Experiências
            </SectionHeading>
            <div>
              <SectionParagraph className="font_bold">
                Estagiária de Jornalismo
              </SectionParagraph>
              <SectionParagraph>Grupo RIC - Afiliada RecordTV</SectionParagraph>
              <SectionParagraph>Agosto 2023 | Abril 2024</SectionParagraph>
            </div>
            <SectionButton
              target="_blank"
              href="/documents/curriculo_GabrielaDaniel.pdf"
              download
            >
              Download Currículo
            </SectionButton>
          </div>
          <div className={styles.section_skills__container_content}>
            <SectionHeading className="dark_cyan_colour">
              Habilidades
            </SectionHeading>
            <ul className={styles.container_skills__info}>
              <li>
                <SectionParagraph>
                  Pautas jornalísticas e hard news
                </SectionParagraph>
              </li>
              <li>
                <SectionParagraph>Produção de rádio</SectionParagraph>
              </li>
              <li>
                <SectionParagraph>Entrevistas</SectionParagraph>
              </li>
              <li>
                <SectionParagraph>Edição de imagens e vídeos</SectionParagraph>
              </li>
              <li>
                <SectionParagraph>Follow-up</SectionParagraph>
              </li>
            </ul>
            <SectionButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gabrielasdaniel"
            >
              Mais informações
            </SectionButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SkillsSection;
