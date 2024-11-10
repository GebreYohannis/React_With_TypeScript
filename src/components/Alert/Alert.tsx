import { ReactNode } from "react";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className={styles.alertContainer}>
        <p>{children}</p>
        <span className={styles.btnClose} onClick={onClose}>
          X
        </span>
      </div>
    </>
  );
};

export default Alert;
