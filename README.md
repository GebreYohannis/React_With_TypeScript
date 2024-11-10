# React + Vite + TypeScript Learning Journey

## Welcome to my React + Vite + TypeScript learning repository! 🚀

- This project is a collection of my experiments, projects, and notes as I explore the powerful trio of React, Vite, and TypeScript. Here, you'll find various examples, best practices, and tips that I’ve picked up along the way.

**Goals**:

- Master the basics of React for building dynamic UIs.

- Learn how Vite enhances development speed and experience.

- Understand and implement TypeScript for type safety and better code quality.

**Check out the following compenents for example**

```tsx
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <AiFillHeart color="red" size={30} onClick={toggle} />;
  return <AiOutlineHeart color="red" size={30} onClick={toggle} />;
};

export default Like;
```

```tsx
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
```
