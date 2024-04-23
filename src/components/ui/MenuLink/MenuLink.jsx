import styles from "./MenuLink.module.css";

const MenuLink = ({ target, rel, href, onClick, children }) => {
  return (
    <>
      <a
        target={target}
        rel={rel}
        href={href}
        className={styles.menu_link}
        onClick={onClick}
      >
        {children}
      </a>
    </>
  );
};

export default MenuLink;
