import React from "react";
import movies from "../utils/films.json";
import Movie from "./Movie";

const Movies = () => {
  return (
    <>
      {/* <div className="flex flex-wrap space-evenly"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-8 justify-items-center">
        <Movie movies={movies} />
      </div>
    </>
  );
};

export default Movies;
