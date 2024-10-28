import React from "react";

//Statische image importeren
//import duneImg from "../assets/dune_poster.jpg";

const Movie = ({ movies }) => {
  return movies.map((m) => (
    // <div
    //   key={m.id}
    //   className="object-fill text-center m-5 rounded-lg border-solid border-2 border-slate-200"
    // >
    <div key={m.id} className="shadow-lg rounded-xl overflow-clip text-center">
      {/* <img src={duneImg} /> STATISCH */}
      <img src={new URL(`../assets/${m.poster_path}`, import.meta.url).href} />
      <p className="my-4 font-bold">{m.title}</p>
      <p className="text-slate-500 italic mb-4">{m.genres.join(", ")}</p>
    </div>
  ));
};

export default Movie;
