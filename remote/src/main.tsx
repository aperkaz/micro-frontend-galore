import React from "react";
import ReactDOM from "react-dom/client";
import Message from "./components/message.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Message text="This a random message!" />
  </React.StrictMode>
);
