import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import SingleChefs from "../pages/SingleChefs/SingleChefs";
import Details from "../layouts/Details";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivetRoutes from "../pages/Routes/PrivetRoutes";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "details",
        element: (
          <PrivetRoutes>
            <Details></Details>
          </PrivetRoutes>
        ),
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
