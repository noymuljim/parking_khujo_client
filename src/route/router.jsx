import { createBrowserRouter } from "react-router";
import rootLayout from "../layout/rootLayout";
import Home from "../pages/Home/Home/Home";
import authLayout from "../layout/authLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BecomePartner from "../pages/Home/BecomePartner/BecomePartner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
       {
        path: 'becomePartner',
        // Component: BeDecorator,
        element:<PrivateRoute><BecomePartner></BecomePartner></PrivateRoute>,

      }
    ]
  },
  {
    path: '/',
    Component: authLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }

]);