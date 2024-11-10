import Button from "./Button";
function ButtonDemo() {
  const handleClick = () => console.log("clicked");
  return (
    <>
      <Button children={"Like"} onClick={handleClick} />
      <Button onClick={handleClick}>Sign Up</Button>
      <Button onClick={handleClick}>Sign in</Button>
      <Button onClick={handleClick}>Register</Button>
      <Button
        color="Secondary"
        children="Like"
        onClick={() => console.log("clicked")}
      />
      <Button
        color="Success"
        children="Like"
        onClick={() => console.log("clicked")}
      />
      <Button
        color="Danger"
        children="Like"
        onClick={() => console.log("clicked")}
      />
      <Button
        color="Black"
        children="Like"
        onClick={() => console.log("clicked")}
      />
      <Button children="Like" onClick={() => console.log("clicked")} />
    </>
  );
}

export default ButtonDemo;
