import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import Movie from "../components/Movie";

const FavoritesPage = () => {
  // Context gebruiken
  const { favorites } = useFavorites();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-8 justify-items-center">
      <Movie movies={favorites} />
    </div>
  );
};

export default FavoritesPage;
