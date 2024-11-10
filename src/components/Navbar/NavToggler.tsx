import styles from "./NavBar.module.css";

export function Collapsible() {
  console.log("Clicked");
  const collapsibles = document.querySelector(styles.collapsible);
  collapsibles?.addEventListener("click", () => {
    collapsibles.classList.toggle("collapsibleExpanded");
  });
}
