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
import FavoritesContextProvider from "./contexts/FavoritesContext.jsx";
import StarWarsPage from "./pages/StarWarsPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      {
        path: "starwars",
        element: <StarWarsPage />,
      },
    ],
  },
]);

//const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <QueryClientProvider client={new QueryClient()}>
      <DarkModeContextProvider>
        <FavoritesContextProvider>
          <RouterProvider router={browserRouter} />
        </FavoritesContextProvider>
        {/* <App /> */}
        {/* <Movies /> */}
      </DarkModeContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
