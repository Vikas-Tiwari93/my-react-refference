import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";

const Routerme = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error page</div>,
    children: [{ path: "" }],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default function Router() {
  return (
    <>
      <RouterProvider router={Routerme} />
    </>
  );
}
