import styles from "./ContactSection.module.css";
import Section from "../../../ui/Section/Section";
import SectionTitle from "../../../ui/SectionTitle/SectionTitle";
import ContactData from "./data/ContactData";
import ContactItems from "./ContactItems/ContactItems";

const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="contact">
      <SectionTitle>Contato</SectionTitle>
      <div className={styles.section_contact__container}>
        {ContactData.map((data, index) => (
          <ContactItems key={index} data={data} />
        ))}
        <footer className={styles.footer}>
          © {currentYear} por CHRISTIANO DAVID
        </footer>
      </div>
    </Section>
  );
};

export default ContactSection;
