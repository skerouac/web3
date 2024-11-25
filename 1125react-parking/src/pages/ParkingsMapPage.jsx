import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { fetchParkings } from "../api";
import { useQuery } from "@tanstack/react-query";

const ParkingsMapPage = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["fetchParkings"], //unieke key om een cache bij te houden, zodat requests kunnen gecached worden en niet eindeloos herhaald
    queryFn: fetchParkings,
    refetchInterval: 5 * 60 * 1000, //5 minuten aangezien het ook zo is ingesteld bij de API van stad Gent
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);
  //state voorzien om de coördinaten bij te houden en eventueel een marker te zetten

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MapContainer className="flex-grow" zoom={15} center={[51.053, 3.719]}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.data.results.map((p) => {
          return (
            <Marker key={p.id} position={[p.location.lat, p.location.lon]} />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ParkingsMapPage;
