import { createBrowserRouter } from "react-router";
import rootLayout from "../layout/rootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import authLayout from "../layout/authLayout";
import DashboardLayout from "../layout/DashboardLayout";
import BecomePartner from "../pages/Others/BecomePartner/BecomePartner";
import ApplyPartnerApplication from "../pages/Others/ApplyPartnerApplication/ApplyPartnerApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        index: true,
        Component: Home
      },

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
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>
    )
  },
  {
    path:'BecomePartner',
    element:<PrivateRoute><BecomePartner></BecomePartner></PrivateRoute>
  },
  {
    path:'ApplyPartnerApplication',
    element:<PrivateRoute><ApplyPartnerApplication></ApplyPartnerApplication></PrivateRoute>
  }


]);