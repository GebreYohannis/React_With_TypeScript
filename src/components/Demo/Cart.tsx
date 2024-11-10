import Button from "../Button";

type Props = {
  readonly cartItems: string[];
  readonly onClear: () => void;
};

export const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button onClick={onClear}>Clear</Button>
    </>
  );
};
