import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store } = useContext(Context);

  // Función para renderizar secciones de tarjetas
  const renderSection = (title, items, category) => (
    <>
      <h1 className="details-title">{title}</h1>
      <div className="d-flex overflow-auto pt-3">
        {items.map((item) => (
          <div className="text-center mx-auto mb-4" key={item.uid}>
            <Card uid={item.uid} character={item} category={category} />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container my-4">
      {renderSection("Personajes", store.peopleInfo, "people")}
      {renderSection("Planetas", store.planetsInfo, "planets")}
      {renderSection("Vehículos", store.vehiclesInfo, "vehicles")}
    </div>
  );
};
