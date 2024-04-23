import styles from "./SectionHeading.module.css";

const SectionHeading = ({ className, children }) => {
  return (
    <h3 className={`${styles.section_heading} ${className}`}>{children}</h3>
  );
};

export default SectionHeading;
