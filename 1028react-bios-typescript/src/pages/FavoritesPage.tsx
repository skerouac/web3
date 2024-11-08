import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import Movie from "../components/Movie";
import { IMovie } from "../components/Movies";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-8 justify-items-center">
      {favorites.map((movie: IMovie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default FavoritesPage;
