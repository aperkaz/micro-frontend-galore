import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../lib/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*@ts-ignore */}
    <App />
  </StrictMode>
);
