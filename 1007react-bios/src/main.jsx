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
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

//ROUTER
//STAP 1: Nieuwe browserrouter aanmaken (haal je startapp uit de createRoot en zet het hierin)

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <MoviesPage />,
      },
      {
        path: "details",
        children: [
          {
            path: "test",
            element: <App />,
          },
          {
            //best practice: alle dynamische paden onderaan in hun scope
            path: ":id",
            element: <DetailsPage />,
          },
        ],
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
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
