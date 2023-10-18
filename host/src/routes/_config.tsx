import { createBrowserRouter } from "react-router-dom";
import Index from "./index";
import About, { loader as AboutLoader } from "./about";

// Its worth investing some time to generate this object dynamically form the file system, as in Remix
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
    loader: AboutLoader,
  },
]);
