import { createBrowserRouter } from "react-router";
import rootLayout from "../layout/rootLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:rootLayout,
    children:[
      {
        index:true,
        Component: Home
      }
    ]
  },
]);