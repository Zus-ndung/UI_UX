import React from "react";
import { Navigate } from "react-router-dom";
// layout
import AuthLayout from "./layouts/auth";
import WorkerLayout from "./layouts/worker";
import ManagerLayout from "./layouts/manager";

// page
import SignInPage from "./pages/auth/Signin";
import ManagerDashboard from "./pages/manager/ManagerDashBoard";
import ListTask from "./pages/manager/ListTask";
import WorkerDashBorad from "./pages/worker";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import ListKPI from "./pages/manager/ListKPI";
import ListWorker from "./pages/manager/ListWorker";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/manager/Home";

const routes = [
  {
    path: "/",
    element: <Navigate to="/auth" />,
  },
  {
    path: "/auth/*",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
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
  {
    path: "/manager/*",
    element: <ManagerLayout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/manager",
        element: <ManagerDashboard />
      },
      {
        path: "/tasklist",
        element: <ListTask/>
      },
      {
        path: "/kpi-list",
        element: <ListKPI/>
      },
      {
        path: "/worker-list",
        element: <ListWorker/>
      },
    ]
  },
];

export default routes;