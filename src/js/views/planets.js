import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Planets = () => {
  const { store } = useContext(Context);
  const { idCard } = useParams();
  const planetsDetails = store.planetsInfo.find(
    (planet) => planet.uid === idCard
  );

  const imageToDisplay =
    idCard === "1"
      ? `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`
      : `https://starwars-visualguide.com/assets/img/planets/${idCard}.jpg`;

  if (!planetsDetails) {
    return <div className="text-center text-light display-1">Loading...</div>;
  }

  return (
    <div className="jumbotron container pb-3">
      <div className="lead mt-5 d-flex">
        <img
          src={imageToDisplay}
          className="rounded img-planet mx-2"
          alt={`Image of ${planetsDetails.name}`}
        />
        <div className="mx-2 text-center">
          <h1 className="details-text mt-0 display-4">{planetsDetails.name}</h1>
          <p className="TextoStarWars">Planets de Star Wars</p>
        </div>
      </div>
      <hr />
      <div className="lead">
        <table className="table table-borderless table-responsive mt-4">
          <thead>
            <tr>
              <th className="TextoStarWars">Nombre</th>
              <th className="TextoStarWars">Cantidad</th>
              <th className="TextoStarWars">Clima</th>
              <th className="TextoStarWars">Terreno</th>
              <th className="TextoStarWars">Gravedad</th>
              <th className="TextoStarWars">Periodo Orbital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="TextoStarWars">{planetsDetails.name}</td>
              <td className="TextoStarWars">{planetsDetails.population}</td>
              <td className="TextoStarWars">{planetsDetails.climate}</td>
              <td className="TextoStarWars">{planetsDetails.terrain}</td>
              <td className="TextoStarWars">{planetsDetails.gravity}</td>
              <td className="TextoStarWars">{planetsDetails.orbital_period}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Planets;
