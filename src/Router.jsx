import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "./Layout/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
        Component: MainLayout,
    
  },
]);