import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddToFind from "./pages/AddToFind";
import Header from "./components/Header";
import BrowsListing from "./pages/BrowsListing";

export const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Header,
      },
      {
        path: "/add-to-find",
        Component: AddToFind,
      },
      {
        path: "/brows-listing",
        loader: () => fetch("http://localhost:3000/users"),
        Component: BrowsListing,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
