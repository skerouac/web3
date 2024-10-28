import React from "react";
import { useParams } from "react-router-dom";
import movies from "../utils/films.json";
import Movie from "../components/Movie";

const DetailsPage = () => {
  //ID komt vanuit de parameters van uit onze route (de parameter id)
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number.parseInt(id));

  //if kan hier wel om te rekenen - enkel in de return is het .jsx
  //if(movie === undefined){}
  if(!movie){
    <p>Geen film gevonden!</p>
  }

  return <div>{movie ? movie.title : "geen film gevonden"}</div>;
  // return <div>{movie?.title}</div>;
};

export default DetailsPage;
