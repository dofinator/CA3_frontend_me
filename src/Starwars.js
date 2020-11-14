import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
function Starwars() {
  let obj = {
    peopleName: "",
    planetName: "",
    speciesName: "",
    starshipName: "",
    vehicleName: "",
    filmName: "",

  }

  const [dataFromServer, setDataFromServer] = useState(obj);

  useEffect(() => {
    facade.fetchStarwars().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div>
      <p>people: {dataFromServer.peopleName}</p>
      <p>planet: {dataFromServer.planetName}</p>
      <p>species: {dataFromServer.speciesName}</p>
      <p>starship: {dataFromServer.starshipName}</p>
      <p>vehicle: {dataFromServer.vehicleName}</p>
      <p>film: {dataFromServer.filmName}</p>
    </div>
  );
}

export default Starwars;
