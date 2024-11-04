import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const StarWarsPage = () => {
  //   // Methode 1: fetch API
  //   // automatisch een get request
  //   const [films, setFilms] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState();
  //   //   const [isRefresh, setIsRefresh] = useState(false);

  //   const fetchMovies = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("https://swapi.dev/api/films");
  //       const responseData = await response.json();
  //       setFilms(responseData.results);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   // Methode 2: met axios API
  //   const fetchMoviesWithAxios = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await Axios.get("https://swapi.dev/api/films");
  //       setFilms(response.data.results);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   //   useEffect(() => {
  //   //     // fetchMovies();
  //   //     fetchMoviesWithAxios();
  //   //   }, []);

  //   useEffect(() => {
  //     (async () => {
  //       setIsLoading(true);
  //       try {
  //         const response = await Axios.get("https://swapi.dev/api/films");
  //         setFilms(response.data.results);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     })(),
  //       [];
  //   });

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["fetchMovies"],
    queryFn: () => Axios.get("https://swapi.dev/api/films"),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
        {/* <button
          onClick={() => {
            fetchMovies();
          }}
        >
          Ververs pagina
        </button> */}
        {/* <button onClick={fetchMoviesWithAxios}>Ververs pagina</button> */}
      </div>
    );
  }

  return (
    <div>
      {data.data.results.map((f) => (
        <p key={f.episode_id}>{f.title}</p>
      ))}
    </div>
  );
};

export default StarWarsPage;
