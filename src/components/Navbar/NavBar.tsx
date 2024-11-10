import { Component } from "react";
import styles from "./NavBar.module.css";
import MenuIcon from "../Icons/MenuIcon";

interface NavBarState {
  toggle: boolean;
}
class NavBar extends Component {
  state: NavBarState = {
    toggle: false,
  };

  handleClick = () => {
    let { toggle } = this.state;
    toggle = !toggle;
    // console.log("Clicked");
    this.setState({ toggle: toggle });
  };
  render() {
    return (
      <nav onClick={this.handleClick} className={[styles.nav].join(" ")}>
        <a className={styles.nav__link} href="#">
          Navbar
        </a>
        <MenuIcon onClick={this.handleClick} />
        <ul
          className={
            this.state.toggle
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
    );
  }
}

export default NavBar;
