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
import ListWorker from "./pages/manager/ListWorker";
import ListKPI from "./pages/manager/ListKPI";
import DetailProcess from "./pages/manager/DetailProcess";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/manager/Home";
import KpiList from "./pages/manager/KpiConponent";
import KpiListWorker from "./pages/manager/KpiConponentWorker";
import KpiWorker from "./pages/manager/KpiWorker";
import UnitKPI from "./pages/manager/KPI/UnitKPI";
import WorkerKPI from "./pages/manager/KPI/WorkerKPI";

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
    children: [
      {
        path: "/",
        element: <WorkerDashBorad />,
      },
    ],
  },
  {
    path: "/manager/*",
    element: <ManagerLayout />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <ManagerDashboard />,
      },
      {
        path: "/tasklist",
        element: <ListTask />,
      },
      {
        path: "/kpi-dashborad",
        element: <ListKPI />,
      },
      {
        path: "/kpi-list",
        element: <KpiList />,
      },
      {
        path: "kpi-unit",
        element: <UnitKPI/>,
      },
      {
        path: "kpi-worker",
        element: <WorkerKPI/>,
      },
      {
        path: "/kpi-list-worker",
        children: [
          {
            path: "/",
            element: <KpiListWorker />,
          },
          {
            path: "/worker*",
            element: <KpiWorker />,
          },
        ],
      },
      {
        path: "/worker-list",
        element: <ListWorker />,
      },
      {
        path: "/dashboard/detail-process",
        element: <DetailProcess />,
      },
    ],
  },
];

export default routes;
