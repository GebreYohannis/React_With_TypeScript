import { useState } from "react";
import { produce } from "immer";
import DemoNavBar from "./DemoNavBar";
import { Cart } from "./Cart";

function LiftingUpTheState() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  const handleClick: () => void = () => {
    setCartItems(
      produce((draft) => {
        // draft.push("Product " + (cartItems.length + 1));
        draft.pop();
      })
    );
  };
  return (
    <div>
      <DemoNavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClick} />
    </div>
  );
}

export default LiftingUpTheState;
