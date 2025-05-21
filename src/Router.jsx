import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddToFind from "./pages/AddToFind";
import Header from "./components/Header";
import BrowsListing from "./pages/BrowsListing";
import Details from "./pages/Details";
import PrivateRouter from "./Layout/PrivateRouter";

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
      {
        path: "/details/:id",
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        element: <PrivateRouter> <Details></Details> </PrivateRouter>
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
  }, {
    path: '/'
  }
]);
