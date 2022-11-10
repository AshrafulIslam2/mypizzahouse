import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Addreviews from "../pages/AddReviews/Addreviews";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Service from "../pages/Home/Service/Service";
import SigleService from "../pages/Home/Service/sigleserviedetails/SigleService";
import Login from "../pages/Login/Login";
import Myreview from "../pages/MyReview/Myreview";
import ReviewTable from "../pages/MyReview/ReviewTable";
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
        path: "/blog",
        element: <Blogs></Blogs>,
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
          fetch(
            `https://my-pizza-house-server-side.vercel.app/api/services/${params.id}`
          ),
        element: <SigleService></SigleService>,
      },
      {
        path: "/addservice",
        element: (
          <PriveteRoute>
            <AddService></AddService>
          </PriveteRoute>
        ),
      },
      {
        path: "/addreviews/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-pizza-house-server-side.vercel.app/api/services/${params.id}`
          ),
        element: (
          <PriveteRoute>
            <Addreviews></Addreviews>
          </PriveteRoute>
        ),
      },
      {
        path: "/myreview",
        element: (
          <PriveteRoute>
            <Myreview></Myreview>
          </PriveteRoute>
        ),
      },
      {
        path: "/reviewtable",
        element: (
          <PriveteRoute>
            <ReviewTable></ReviewTable>
          </PriveteRoute>
        ),
      },
    ],
  },
]);
export default router;
