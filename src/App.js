import React, { useEffect, useState } from "react";
import client from "./Xmpp";

function App() {
  const [status, setStatus] = useState("offline");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    client.send(recipient, message);
    setMessage("");
  };

  useEffect(() => {
    const updateStatus = () => {
      setStatus(client.status);
    };
    client.on("status", updateStatus);
    updateStatus();
    return () => {
      client.removeListener("status", updateStatus);
    };
  }, []);

  return (
    <div>
      <div>XMPP status: {status}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Recipient:
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">submit</button>
        </form>
        </div>
        )
}
export default App