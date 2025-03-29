import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { useAuth } from "./auth/AuthProvider";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export const router = createBrowserRouter([
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
  }
]);
