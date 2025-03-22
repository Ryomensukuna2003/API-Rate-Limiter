import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Auth/Layout";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import DashBoardLayout from "./Pages/DashBoardLayout";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import ApiKeysTable from "./Pages/ApiKeys";
import Errors from "./Pages/Errors";
import Logs from "./Pages/Logs";
import Settings from "./Pages/Settings";
import Dashboard from "./Pages/Dashboard";

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
    element: (
      <ProtectedRoutes>    
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/",
        element:<Dashboard />,  
      },
      {
        path: "/ApiKeys",
        element: <ApiKeysTable />,
      },
      {
        path: "/Errors",
        element:  <Errors />,
      },
      {
        path: "/Logs",
        element:  <Logs />,
      },
      {
        path: "/Settings",
        element:  <Settings />,
      },
    ],
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
