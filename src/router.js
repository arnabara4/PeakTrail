import React from "react";
import { createBrowserRouter} from "react-router-dom";
import Home from "./Home/Home";
import School from "./School/School";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/school",
    element: <School />,
  },
]);

export default router;
