import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";


export const router = createBrowserRouter([
  {
    path: "/",
        Component: MainLayout,
    
  }, {
    path: '/login',
    Component:Login
  }, {
    path: '/register',
    Component: Register
  }
]);