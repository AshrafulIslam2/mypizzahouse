import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Addreviews from "../pages/AddReviews/Addreviews";
import AddService from "../pages/AddService/AddService";
import Home from "../pages/Home/Home";
import Service from "../pages/Home/Service/Service";
import SigleService from "../pages/Home/Service/sigleserviedetails/SigleService";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import PriveteRoute from "../privetroute/PriveteRoute";

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
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },

      {
        path: "/profile",
        element: (
          <PriveteRoute>
            <Profile></Profile>
          </PriveteRoute>
        ),
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/api/services/${params.id}`),
        element: <SigleService></SigleService>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/addreviews/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/api/services/${params.id}`),
        element: <Addreviews></Addreviews>,
      },
    ],
  },
]);
export default router;
