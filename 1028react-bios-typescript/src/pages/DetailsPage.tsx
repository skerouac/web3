import React, { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../components/Movies";
import movies from "../utils/films.json";

const DetailsPage = (): ReactNode => {
  const { id } = useParams<{ id: string }>();
  let movie: IMovie | undefined;

  if (id) {
    movie = movies.find((m: IMovie) => m.id === Number.parseInt(id));
  }

  if (!movie) {
    <p>Geen film gevonden!</p>;
  }

  return <div>{movie ? movie.title : "Geen film gevonden"}</div>;
};

export default DetailsPage;
