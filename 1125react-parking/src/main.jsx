import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ParkingsListPage from "./pages/ParkingsListPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParkingsMapPage from "./pages/ParkingsMapPage.jsx";
import AddParkingPage from "./pages/AddParkingPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddParkingsFormikPage from "./pages/AddParkingsFormikPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const queryClient = new QueryClient();

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AddParkingsFormikPage />,
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}
      <RouterProvider router={browserRouter} />
      {/* <ParkingsListPage /> */}
      {/* <ParkingsMapPage /> */}
      {/* <AddParkingPage /> */}
      {/* <AddParkingsFormikPage />
      </AuthContextProvider> */}
    </QueryClientProvider>
  </StrictMode>
);
