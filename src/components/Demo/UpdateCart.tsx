import { produce } from "immer";
import { useState } from "react";

function UpdateCart() {
  const [cart, setCart] = useState({
    discoutn: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick: () => void = () => {
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity += 1;
      })
    );
  };
  return (
    <>
      <p>Cart</p>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} : {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default UpdateCart;
