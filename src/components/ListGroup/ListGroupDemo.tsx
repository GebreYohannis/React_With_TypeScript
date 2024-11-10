import ListGroup from "./";

function ListGroupDemo() {
  const listItems = ["Ethiopa", "Kenya", "Sudan", "Somale", "Egypt"];
  const handleSelectItem = (items: string) => console.log(items);

  return (
    <>
      <ListGroup items={listItems} onSelectitem={handleSelectItem}>
        Countries
      </ListGroup>
    </>
  );
}

export default ListGroupDemo;
