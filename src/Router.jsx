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
import Condition from "./pages/Condition";
import About from "./pages/About";
import DashboardLayout from "./Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch(`${import.meta.env.VITE_base_url}/users`),
        Component: Header,
      },
      {
        path: "/add-to-find",
        element: (
          <PrivateRouter>
            <AddToFind></AddToFind>
          </PrivateRouter>
        ),
      },
      {
        path: "/brows-listing",
        loader: () => fetch(`${import.meta.env.VITE_base_url}/users`),
        element: <BrowsListing></BrowsListing>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_base_url}/users/${params.id}`),
        element: (
          <PrivateRouter>
            {" "}
            <Details></Details>{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "/my-listing",
        // loader: () =>
        //   fetch("http://localhost:3000/users"),
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
          fetch(`${import.meta.env.VITE_base_url}/users/${params.id}`),
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
    path: '/dashboard',
    element: <PrivateRouter>
      <DashboardLayout></DashboardLayout>
    </PrivateRouter>,
    children: [
      {
        index: true,
        Component: MyListing
      },
      {
        path: '/dashboard/update/:id',
        Component: Update
      }, {
        path: 'details/:id',
        Component: Details
      }, {
        path: 'add-to-find',
        Component: AddToFind
      }
    ]
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
  {
    path: "/conditions",
    Component: Condition,
  },
]);
