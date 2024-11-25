import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../contexts/FavoritesContext";

//Statische image importeren
//import duneImg from "../assets/dune_poster.jpg";

const Movie = ({ movies }) => {
  // Hook om te kunnen navigeren in code -> useNavigate();

  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const isInFavorite = (movie) => favorites.some((f) => f.id === movie.id);

  // const checkFavorite = (movie) => {
  //   if (favorites.find(movie)) {
  //     return true;
  //   } else return false;
  // };

  return movies.map((m) => (
    // <div
    //   key={m.id}
    //   className="object-fill text-center m-5 rounded-lg border-solid border-2 border-slate-200"
    // >

    <div
      key={m.id}
      className="relative shadow-lg rounded-xl overflow-clip text-center cursor-pointer transition hover:scale-105"
      onClick={() => navigate(`/details/${m.id}`)}
    >
      <button
        // className="absolute top-4 right-4 rounded-full p-2 text-2xl text-white bg-emerald-900"
        className={`absolute top-4 right-4 rounded-full p-2 text-2xl text-white ${
          isInFavorite(m) ? "bg-red-600" : "bg-emerald-900"
        } `}
        onClick={(event) => {
          toggleFavorite(m);
          event.stopPropagation();
        }}
      >
        {isInFavorite(m) ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
      {/* <img src={duneImg} /> STATISCH */}
      <img src={new URL(`../assets/${m.poster_path}`, import.meta.url).href} />
      <p className="my-4 font-bold">{m.title}</p>
      <p className="text-slate-500 italic mb-4">{m.genres.join(", ")}</p>
    </div>
  ));
};

export default Movie;
