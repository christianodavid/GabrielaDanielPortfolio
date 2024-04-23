import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import MenuLink from "../../../ui/MenuLink/MenuLink";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -50;
      const topPos = element.offsetTop + offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
    setIsActive(false);
  };

  return (
    <header>
      <nav className={`${styles.navbar} ${isFixed ? styles.fixed : ""}`}>
        <a className={styles.navbar_logo}>Gabi</a>
        <ul
          className={`${styles.navbar_menu} ${isActive ? styles.active : ""}`}
        >
          <li>
            <MenuLink onClick={() => scrollToSection("hero")}>Início</MenuLink>
          </li>
          <li>
            <MenuLink onClick={() => scrollToSection("about")}>Sobre</MenuLink>
          </li>
          <li>
            <MenuLink onClick={() => scrollToSection("texts")}>Textos</MenuLink>
          </li>
          <li>
            <MenuLink onClick={() => scrollToSection("chronicles")}>
              Crônicas
            </MenuLink>
          </li>
          <li>
            <MenuLink onClick={() => scrollToSection("magazine")}>
              Revista
            </MenuLink>
          </li>
          <li>
            <MenuLink onClick={() => scrollToSection("audiovisuals")}>
              Projetos Audiovisuais
            </MenuLink>
          </li>
          <li>
            <MenuLink onClick={() => scrollToSection("contact")}>
              Contato
            </MenuLink>
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
