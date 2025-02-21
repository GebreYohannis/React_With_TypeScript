import { useEffect } from "react";

const connect = () => console.log("Connecting...");
const disconnect = () => console.log("Disconnecting..");

const CleanupCode = () => {
  useEffect(() => {
    connect();
    return () => disconnect(); // clean up
  });
  return <div>CleanupCode</div>;
};

export default CleanupCode;
