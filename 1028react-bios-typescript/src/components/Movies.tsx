import movies from "../utils/films.json";
import Movie from "./Movie";

export interface IShowtime {
  location_id: number;
  times: string[];
}

export interface IMovie {
  backdrop_path: string;
  genres: string[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  duration: number;
  vote_average: number;
  show_times: IShowtime[];
}

const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-8 justify-items-center">
      {movies.map((movie: IMovie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
