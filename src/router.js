import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import School from "./School/School";
import College from "./College/College";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/school",
    element: <School />,
  },
  {
    path: "/college",
    element: <College />,
  },
]);

export default router;
