import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Characters = () => {
  const { store } = useContext(Context);
  const { idCard } = useParams();
  const characterDetails = store.peopleInfo.find(
    (character) => character.uid === idCard
  );

  if (!characterDetails) {
    return <div className="text-center text-light display-1">Loading...</div>;
  }

  const { image, name, birth_year, gender, hair_color, eye_color, height } =
    characterDetails;

  const characterAttributes = [
    { label: "Nombre", value: name },
    { label: "Cumpleaños", value: birth_year },
    { label: "Género", value: gender },
    { label: "Color de Cabello", value: hair_color },
    { label: "Color de Ojos", value: eye_color },
    { label: "Estatura", value: height },
  ];

  return (
    <div className="jumbotron container pb-3">
      <div className="lead mt-5 d-flex">
        <img
          src={image}
          className="rounded img-character mx-2"
          style={{ width: "18rem" }}
          alt={`${name} - Cool looking character`}
        />
        <div className="mx-2 text-center">
          <h1 className="details-text mt-0 display-4 TextoStarWars">{name}</h1>
          <p className="character-description TextoStarWars">
            Personajes de Star Wars
          </p>
        </div>
      </div>
      <hr />
      <div className="lead">
        <table className="table table-borderless table-responsive mt-4">
          <thead>
            <tr>
              {characterAttributes.map((attr) => (
                <th key={attr.label} className="TextoStarWars">
                  {attr.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {characterAttributes.map((attr) => (
                <td key={attr.label} className="TextoStarWars">
                  {attr.value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Characters;
