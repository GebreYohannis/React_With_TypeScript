import { ListGroup } from "./ListGroup";

function App() {
  return (
    <>
      <ListGroup>List Countries</ListGroup>
      <ListGroup children="List Groups" />
    </>
  );
}

export default App;
