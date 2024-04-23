import styles from "./SectionButton.module.css";

const SectionButton = ({
  target,
  rel,
  href,
  className,
  download,
  children,
}) => {
  return (
    <>
      <a
        target={target}
        rel={rel}
        href={href}
        className={`${styles.section_button} ${className}`}
        download={download}
      >
        {children}
      </a>
    </>
  );
};

export default SectionButton;
