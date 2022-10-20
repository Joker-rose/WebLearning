import App from "./components/App/App";
import Button from "./components/Button/Button";
import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <Button />,
  },
]);

export default router;