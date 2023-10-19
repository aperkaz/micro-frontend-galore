import { createBrowserRouter } from "react-router-dom";
import Index from "./index";
import Image from "./image";
import Weather from "./weather";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/image",
    element: <Image />,
  },
]);
