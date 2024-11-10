import { useState } from "react";
import Button from "../Button";

function CuustomerInfo() {
  const [customer, setCustomer] = useState({
    name: "Demis",
    address: {
      country: "Ethiopia",
      city: "Addis Ababa",
    },
  });
  const handleClick: () => void = () => {
    // updating objects
    setCustomer({
      ...customer,
      address: { ...customer.address, country: "US", city: "San Francisco" },
    });
  };
  return (
    <>
      <label>Name: {customer.name}</label>
      <address>
        <section>Country: {customer.address.country}</section>
        <section>City: {customer.address.city}</section>
      </address>
      <Button onClick={handleClick}>Click Me</Button>
    </>
  );
}

export default CuustomerInfo;
