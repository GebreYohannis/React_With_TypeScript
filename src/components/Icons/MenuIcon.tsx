import styles from "./MenuIcon.module.css";

interface Props {
  onClick: () => void;
}
const MenuIcon = ({ onClick }: Props) => {
  return (
    <span
      className={[styles.icon, styles.iconMenu, styles.displayNone].join(" ")}
      onClick={onClick}
    >
      <span className={[styles.menu, styles.menuBorder].join(" ")}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </span>
    </span>
  );
};

export default MenuIcon;
