import React, { useState } from "react";

const AddParkingPage = () => {
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <form action="http://localhost:3000" method="GET">
        {/*action met de link (url naar API), methode om te weten hoe of wat (GET/POST)*/}
        <label htmlFor="naam">Naam:</label>
        <input
          id="naam"
          className="px-4 py-2 border rounded-md block m-2"
          type="text"
          placeholder="Naam"
          required
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="age"
          className="px-4 py-2 border rounded-md block m-2"
          type="number"
          placeholder="Leeftijd"
        />
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default AddParkingPage;
