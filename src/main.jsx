import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./Error.jsx";
import Blog from "./Blog.jsx";
import Article from "./Article.jsx";
import Features from "./Features.jsx";
import Contact from "./Contact.jsx";
import UserAuthentication from "./Auth.jsx";
import UserProfile from "./UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
    children: [
      {
        path: "/blog/:id",
        element: <Article />,
      },
    ],
  },
  {
    path: "/Login",
    element: <UserAuthentication />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
