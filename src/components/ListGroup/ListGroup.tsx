import styles from "./ListGroup.module.css";
import { useState } from "react";

interface Props {
  items: string[];
  children: string;
  onSelectitem: (items: string) => void;
}

const ListGroup = ({ children, items, onSelectitem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listItems = items;
  // const listItems = ["Ethiopa", "Kenya", "Sudan", "Somale", "Egypt"];
  return (
    <>
      <h2 className={styles.title}>{children}</h2>
      {/* {listItems.length === 0 ? <p>List not found</p> : null}
      {listItems.length === 0 && <p>No item found!</p>} */}
      {listItems.length === 0 ? (
        <p>No item found!</p>
      ) : (
        <ul className={styles.listGroup}>
          {listItems.map((item, index) => (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? [styles.listGroupItem, styles.active].join(" ")
                  : [styles.listGroupItem].join("")
              }
              id={index.toString()}
              onClick={() => {
                setSelectedIndex(index);
                onSelectitem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export { ListGroup };
