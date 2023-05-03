import MainLayout from "components/shared/layouts/MainLayout";
import { constants } from "config/constants";
import withLoader from "hoc/withLoader";
import NotFoundPage from "pages/NotFoundPage";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const ComponentLifeCyclePage = withLoader(
  lazy(() => import("../../features/ReactComponentLifeCycle/pages/ComponentLifeCyclePage")),
);
const ComponentStateManagementPage = withLoader(
  lazy(
    () =>
      import("../../features/ComponentPropsWithStateManagement/pages/ComponentStateManagementPage"),
  ),
);
const UsersPage = withLoader(lazy(() => import("../../features/Users/pages/UsersPage")));

export const appRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Navigate to={constants.url.COMPONENT_LIFECYCLE} />,
        index: true,
      },
      {
        path: constants.url.COMPONENT_LIFECYCLE,
        element: <ComponentLifeCyclePage />,
      },
      {
        path: constants.url.COMPONENT_WITH_STATE_MANAGEMENT,
        element: <ComponentStateManagementPage />,
      },
      {
        path: constants.url.USERS,
        element: <UsersPage />,
      },
      {
        path: constants.url[404],
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={constants.url[404]} />,
  },
];
