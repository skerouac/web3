import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import NotFoundPage from "./pages/NotFoundPage";
import MoviesPage from "./pages/MoviesPage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import FavoritesContextProvider from "./context/FavoritesContext";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavoritesContextProvider>
      <RouterProvider router={browserRouter} />
      {/* <Movies /> */}
    </FavoritesContextProvider>
  </StrictMode>
);
