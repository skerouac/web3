import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Movies from "../src/components/Movies.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import "./index.css";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import RootLayout from "./pages/RootLayout.jsx";

//ROUTER
//STAP 1: Nieuwe browserrouter aanmaken (haal je startapp uit de createRoot en zet het hierin)

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <RouterProvider router={browserRouter} />
      {/* <App /> */}
      {/* <Movies /> */}
    </DarkModeContextProvider>
  </StrictMode>
);
