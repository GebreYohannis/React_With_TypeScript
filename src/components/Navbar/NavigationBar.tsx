import { useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import styles from ".//NavBar.module.css";
function NavigationBar() {
  const [toggle, setToggle] = useState(false);
  const handleClick: () => void = (): void => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={[styles.nav].join(" ")}>
        <a className={styles.nav__link} href="#">
          Navbar
        </a>
        <MenuIcon onClick={handleClick} />
        <ul
          className={
            toggle
              ? [styles.list, styles.listInline, styles.displayBlock].join(" ")
              : [
                  styles.list,
                  styles.listInline,
                  styles.displayBlock,
                  styles.displayNone,
                ].join(" ")
          }
        >
          <li className={styles.list__item}>Home</li>
          <li className={styles.list__item}>About</li>
          <li className={styles.list__item}>Services</li>
          <li className={styles.list__item}>Company</li>
          <li className={styles.list__item}>Sign up</li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
