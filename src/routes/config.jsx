import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "pages/404";
const Home = lazy(() => import("../pages/home/Home"));

export const pageRoutes = createBrowserRouter([
  {
    path: "/currency_exchange",
    element: (
      <Suspense fallback={<div>...Loading</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
