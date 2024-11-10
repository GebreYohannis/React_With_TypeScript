import { useState } from "react";
import Alert from "./";
import Button from "../Button/";

function ShowAlert() {
  const [alertVisible, setAlertvisiblity] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertvisiblity(false)}>Hello world</Alert>
      )}

      <Button onClick={() => setAlertvisiblity(true)}>Notify</Button>
    </>
  );
}

export default ShowAlert;
