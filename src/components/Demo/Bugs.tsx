import { useState } from "react";
import { produce } from "immer";
import Button from "../Button";

function Bugs() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick: () => void = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <>
      {bugs.map((bug) => (
        <section key={bug.id}>
          {bug.fixed ? (
            <span>✅{bug.title} Fixed</span>
          ) : (
            <span>{bug.title} New Bug</span>
          )}
        </section>
      ))}
      <Button onClick={handleClick}>Fix Bug</Button>
    </>
  );
}

export default Bugs;
