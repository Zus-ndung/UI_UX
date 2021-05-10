import React from "react";
import { Navigate } from "react-router-dom";
// layout
import AuthLayout from "./layouts/auth";
import WorkerLayout from "./layouts/worker";


// page
import SignInPage from "./pages/auth/Signin";
import WorkerDashBorad from "./pages/worker";


const routes = [
  {
    path: "/",
    element: <Navigate to="/auth/signin" />,
  },
  {
    path: "/auth/*",
    element: <AuthLayout />,
    children: [
      {
        path: "/signin",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/worker/dashborad",
    element: <WorkerLayout />,
    children:[
      {
        path: "/",
        element: <WorkerDashBorad />
      }
    ]
  },
];

export default routes;