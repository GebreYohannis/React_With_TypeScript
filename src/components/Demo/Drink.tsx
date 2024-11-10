import { useState } from "react";
import Button from "../Button";

function Drink() {
  const [drink, setDrink] = useState({
    title: "Juice",
    price: 5,
  });
  const handleClick: () => void = () => {
    setDrink({ ...drink, price: (drink.price += 1) });
  };
  return (
    <>
      <span>{drink.price}</span>
      <Button onClick={handleClick}>Click Me</Button>
    </>
  );
}

export default Drink;
