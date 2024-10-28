import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

//Statische image importeren
//import duneImg from "../assets/dune_poster.jpg";

const Movie = ({ movies }) => {
  // Hook om te kunnen navigeren in code -> useNavigate();

  const navigate = useNavigate();

  const favorites = [];

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
        className="absolute top-4 right-4 rounded-full p-2 text-2xl text-white bg-emerald-900"
        onClick={() => {
          favorites.push(m);
          event.stopPropagation();
        }}
      >
        <MdOutlineFavoriteBorder />
      </button>
      {/* <img src={duneImg} /> STATISCH */}
      <img src={new URL(`../assets/${m.poster_path}`, import.meta.url).href} />
      <p className="my-4 font-bold">{m.title}</p>
      <p className="text-slate-500 italic mb-4">{m.genres.join(", ")}</p>
    </div>
  ));
};

export default Movie;
