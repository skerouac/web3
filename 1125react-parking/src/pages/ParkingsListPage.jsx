import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchParkings } from "../api";

const ParkingsListPage = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["fetchParkings"], //unieke key om een cache bij te houden, zodat requests kunnen gecached worden en niet eindeloos herhaald
    queryFn: fetchParkings,
    refetchInterval: 5 * 60 * 1000, //5 minuten aangezien het ook zo is ingesteld bij de API van stad Gent
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div>
      {/*Eerste data is die van react query, die erna is van Axios*/}
      {data.data.results.map((p) => (
        <div key={p.id}>
          <p>
            {p.name} - Total capacity: {p.occupation} / {p.totalcapacity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ParkingsListPage;
