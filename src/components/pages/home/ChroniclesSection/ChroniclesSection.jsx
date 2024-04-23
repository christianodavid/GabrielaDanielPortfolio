import styles from "./ChroniclesSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionParagraph from "../../../ui/SectionParagraph/SectionParagraph";
import ProjectLink from "../../../ui/ProjectLink/ProjectLink";

const ChroniclesSection = ({ data }) => {
  return (
    <Section id="chronicles">
      <SectionTitle>Crônicas</SectionTitle>
      <div className={styles.section_chronicles__container}>
        <div className={styles.container_content}>
          <SectionHeading>Crônica {data.id}</SectionHeading>
          <SectionParagraph>{data.title}</SectionParagraph>
          <ProjectLink href={data.link}>
            Acesse o texto completo aqui
          </ProjectLink>
        </div>
        <img
          className={styles.container_image}
          src={data.backgroundImage}
          alt={data.alt}
        />
      </div>
    </Section>
  );
};

export default ChroniclesSection;
