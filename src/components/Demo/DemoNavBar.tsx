interface Props {
  //   readonly cartItems: string[]; // only use here if you need to use the actual item.
  readonly cartItemsCount: number;
}

const DemoNavBar = ({ /*cartItems,*/ cartItemsCount }: Props) => {
  return (
    <nav>
      <h2 style={{ background: "dodgerblue", color: "#fff" }}>
        Navbar{" "}
        <span
          style={{
            color: "white",
            background: "red",
            borderRadius: "100%",
            padding: "0 1rem",
            verticalAlign: "center",
            textAlign: "center",
          }}
        >
          {cartItemsCount}
        </span>
      </h2>
    </nav>
  );
};

export default DemoNavBar;
