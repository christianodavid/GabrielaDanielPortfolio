import styles from "./SectionParagraph.module.css";

const SectionParagraph = ({ className, children }) => {
  return (
    <p className={`${styles.section_paragraph} ${className}`}>{children}</p>
  );
};

export default SectionParagraph;
