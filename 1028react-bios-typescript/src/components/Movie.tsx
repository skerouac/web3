import { PropsWithChildren, ReactNode } from "react";
import { IMovie } from "./Movies";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

interface MovieProps extends PropsWithChildren {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps): ReactNode => {
  const navigate: NavigateFunction = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const isInFavorite = (movie: IMovie): boolean =>
    favorites.some((f) => f.id === movie.id);

  return (
    <div
      className="relative shadow-lg rounded-xl overflow-clip text-center cursor-pointer transition hover:scale-105"
      onClick={() => navigate(`/details/${movie.id}`)}
    >
      <button
        className={`absolute top-4 right-4 rounded-full p-2 text-2xl text-white bg-emerald-900 `}
        onClick={(event) => {
          toggleFavorite(movie);
          event.stopPropagation();
        }}
      >
        {isInFavorite(movie) ? (
          <MdOutlineFavorite />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </button>
      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url).href}
      />
      <p className="my-4 font-bold">{movie.title}</p>
      <p className="text-slate-500 italic mb-4">{movie.genres.join(", ")}</p>
    </div>
  );
};

export default Movie;
