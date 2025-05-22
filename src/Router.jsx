import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddToFind from "./pages/AddToFind";
import Header from "./components/Header";
import BrowsListing from "./pages/BrowsListing";
import Details from "./pages/Details";
import PrivateRouter from "./Layout/PrivateRouter";
import MyListing from "./pages/MyListing";
import Update from "./pages/Update";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://roommate-finder-server-khaki.vercel.app/users"),
        Component: Header,
      },
      {
        path: "/add-to-find",
        Component: AddToFind,
      },
      {
        path: "/brows-listing",
        loader: () =>
          fetch("https://roommate-finder-server-khaki.vercel.app/users"),
        Component: BrowsListing,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-khaki.vercel.app/users/${params.id}`
          ),
        element: (
          <PrivateRouter>
            {" "}
            <Details></Details>{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "/my-listing",
        loader: () =>
          fetch("https://roommate-finder-server-khaki.vercel.app/users"),
        element: (
          <PrivateRouter>
            {" "}
            <MyListing></MyListing>{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-khaki.vercel.app/${params.id}`),
        element: (
          <PrivateRouter>
            {" "}
            <Update></Update>{" "}
          </PrivateRouter>
        ),
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
  {
    path: "*",
    Component: Error,
  },
]);
