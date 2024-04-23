import styles from "./ProjectLink.module.css";

const ProjectLink = ({ href, children }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={styles.project_link}
    >
      {children}
    </a>
  );
};

export default ProjectLink;
