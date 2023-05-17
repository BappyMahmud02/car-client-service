import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Bookservice from "../Pages/Bookservice/Bookservice";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path:'book/:id',
          element: <PrivateRoute><Bookservice></Bookservice></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
         path:'bookings',
         element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router