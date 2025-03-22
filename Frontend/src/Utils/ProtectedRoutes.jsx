import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";
import DashBoardLayout from "../Pages/DashBoardLayout"

const ProtectedRoutes = () => {
  const { token, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth(); // Ensure token is loaded on refresh
  }, []);

  return token ?( <DashBoardLayout> <Outlet /></DashBoardLayout> ): <Navigate to="/login" />;
};

export default ProtectedRoutes;
