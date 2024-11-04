import { PropsWithChildren } from "react";
import { IMovie } from "./Movies";
import React from "react";

interface MovieProps extends PropsWithChildren {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <div className="relative shadow-lg rounded-xl overflow-clip text-center cursor-pointer transition hover:scale-105">
      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url).href}
      />
      <p className="my-4 font-bold">{movie.title}</p>
      <p className="text-slate-500 italic mb-4">{movie.genres.join(", ")}</p>
    </div>
  );
};

export default IMovie;
