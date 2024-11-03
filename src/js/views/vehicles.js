import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Vehicles = () => {
  const { store } = useContext(Context);
  const { idCard } = useParams();
  const vehiclesDetails = store.vehiclesInfo.find(
    (vehicle) => vehicle.uid === idCard
  );

  if (!vehiclesDetails) {
    return <div className="text-center text-light display-1">Loading...</div>;
  }

  const {
    image,
    name,
    vehicle_class,
    manufacturer,
    max_atmosphering_speed,
    cargo_capacity,
    length,
  } = vehiclesDetails;

  return (
    <div className="jumbotron container pb-3">
      <div className="lead mt-5 d-flex">
        <img
          src={image}
          className="rounded img-vehicle mx-2"
          alt={`Image of ${name}`}
        />
        <div className="mx-2 text-center">
          <h1 className="text-light mt-0 TextoStarWars">{name}</h1>
          <p className="character-description TextoStarWars">
            Vehículos de Star Wars
          </p>
        </div>
      </div>
      <hr />
      <div className="lead">
        <table className="table table-borderless table-responsive mt-4">
          <thead>
            <tr>
              <th className="TextoStarWars">Modelo</th>
              <th className="TextoStarWars">Clase</th>
              <th className="TextoStarWars">Fabricante</th>
              <th className="TextoStarWars">Máxima Velocidad</th>
              <th className="TextoStarWars">Capacidad</th>
              <th className="TextoStarWars">Largo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="TextoStarWars">{name}</td>
              <td className="TextoStarWars">{vehicle_class}</td>
              <td className="TextoStarWars">{manufacturer}</td>
              <td className="TextoStarWars">{max_atmosphering_speed}</td>
              <td className="TextoStarWars">{cargo_capacity}</td>
              <td className="TextoStarWars">{length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehicles;
