import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ParkingsListPage from "./pages/ParkingsListPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParkingsMapPage from "./pages/ParkingsMapPage.jsx";
import AddParkingPage from "./pages/AddParkingPage.jsx";
import AddParkingsFormikPage from "./pages/AddParkingsFormikPage.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ParkingsListPage /> */}
      {/* <ParkingsMapPage /> */}
      {/* <AddParkingPage /> */}
      <AddParkingsFormikPage />
    </QueryClientProvider>
  </StrictMode>
);
