import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { useAuth } from "./auth/use-auth";

const ProtectedRoute = () => {
  const { accessToken } = useAuth();
  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "login",
        lazy: async () => ({
          Component: (await import("@/pages/auth/login")).default
        }),
      },
      {
        path: "dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            lazy: async () => ({
              Component: (await import("@/pages/dashboard")).default
            }),
          }
        ]
      },
    ]
  },
]);
