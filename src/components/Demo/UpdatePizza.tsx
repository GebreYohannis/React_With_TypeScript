import { produce } from "immer";
import { useState } from "react";

function UpdatePizza() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick: () => void = () => {
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };
  return (
    <>
      <p>{pizza.name}</p>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default UpdatePizza;
