import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Auth/Layout";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import DashBoard from "./Pages/DashBoard";
import ProtectedRoutes from "./Utils/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
  {
    path: "/",
    element: <ProtectedRoutes />, // Protect routes
    children: [{ path: "/", element: <DashBoard /> }],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
