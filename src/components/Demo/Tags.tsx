import { useState } from "react";
import Button from "../Button";

function Tags() {
  const [tags, setTags] = useState(["JavaSctipt", "Python"]);
  const handleClick: () => void = () => {
    // Managing arrays
    // Add item
    // setTags([...tags, "Java"]);

    // Remove item
    // setTags(tags.filter((tag) => tag !== "Python"));

    // Update item
    setTags(tags.map((tag) => (tag === "Python" ? "Java" : tag)));
  };
  return (
    <>
      {tags.map((tag, index) => (
        <section key={index}>{tag}</section>
      ))}
      <Button onClick={handleClick}>Click Me</Button>
    </>
  );
}

export default Tags;
