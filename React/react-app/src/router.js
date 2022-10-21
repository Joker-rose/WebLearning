// createBrowserRouter, createHashRouter
import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Index from "./pages/Index";
import About from "./pages/About";
import Main from "./pages/main/Main";
import Module1 from "./pages/main/modules/Module1";
import Module2 from "./pages/main/modules/Module2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "main",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "main-module1",
        element: <Module1 />,
        errorElement: <Error />,
      },
      {
        path: "main-module2",
        element: <Module2 />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;
