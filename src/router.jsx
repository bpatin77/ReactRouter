import { createBrowserRouter } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // You can define multiple paths to the same element
      {
        path: "/blue",
        element: <Blue />,
      },
      {
        path: "/red",
        element: <Red />,
      },
    ],
  },
]);

export default router;
