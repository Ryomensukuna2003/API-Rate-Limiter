import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const { token, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth(); // Ensure token is loaded on refresh
  }, []);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
