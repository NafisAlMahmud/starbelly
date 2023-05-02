import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import SingleChefs from "../pages/SingleChefs/SingleChefs";
import Details from "../layouts/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "details",
        element: <Details></Details>,
        children: [
          {
            path: ":id",
            element: <SingleChefs></SingleChefs>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/chefs/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default router;
