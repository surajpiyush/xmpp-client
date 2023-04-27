import {client}  from "@xmpp/client";

const Client = new client({
  service: "ws://localhost:3001/xmpp-websocket",
  domain: "192.168.1.114",
  username: "piyush.kumar@bentsys.com",
  password: "Pibent123#",
});

Client.on("error", (err) => {
  console.error(err);
});

Client.on("offline", () => {
  console.log("Client is offline");
});

Client.on("online", () => {
  console.log("Client is online");
});

Client.start().catch((err) => {
  console.error(err);
});

export default Client;
