import { useState } from "react";
import styles from "./Navbar.module.css";
import MenuLink from "../../../ui/MenuLink/MenuLink";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <a className={styles.navbar_logo}>Gabi</a>
        <ul
          className={`${styles.navbar_menu} ${isActive ? styles.active : ""}`}
        >
          <li>
            <MenuLink>Início</MenuLink>
          </li>
          <li>
            <MenuLink>Sobre</MenuLink>
          </li>
          <li>
            <MenuLink>Textos</MenuLink>
          </li>
          <li>
            <MenuLink>Crônicas</MenuLink>
          </li>
          <li>
            <MenuLink>Revista</MenuLink>
          </li>
          <li>
            <MenuLink>Projetos Audiovisuais</MenuLink>
          </li>
          <li>
            <MenuLink>Contato</MenuLink>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={styles.hamburger_bar}></span>
          <span className={styles.hamburger_bar}></span>
          <span className={styles.hamburger_bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
