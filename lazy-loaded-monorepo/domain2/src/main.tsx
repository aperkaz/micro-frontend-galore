import React from "react";
import ReactDOM from "react-dom/client";
import WeatherWidget from "./components/WeatherWidget";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeatherWidget />
  </React.StrictMode>
);
