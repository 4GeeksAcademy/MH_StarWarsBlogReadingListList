import React, { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Card = ({
  character: { name, description1, description2, description3 },
  uid,
  category,
}) => {
  const { actions } = useContext(Context);
  const { idCard } = useParams();
  const placeholderImg =
    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

  const imageToDisplay = useMemo(() => {
    return uid === "1" && category === "planets"
      ? placeholderImg
      : `https://starwars-visualguide.com/assets/img/${
          category === "people" ? "characters" : category
        }/${uid}.jpg`;
  }, [uid, category, placeholderImg]);

  const renderDescriptions = () => (
    <>
      <p className="card-text">{description1}</p>
      <p className="card-text">{description2}</p>
      <p className="card-text">{description3}</p>
    </>
  );

  return (
    <div className="card mb-2 mx-2 h-100" style={{ width: "18rem" }}>
      <img
        src={imageToDisplay}
        className="card-img-top"
        alt="A Picture "
        onError={(e) => {
          e.target.src = placeholderImg;
        }} // Manejo de error de imagen
      />
      <div className="card-body d-flex justify-content-between flex-column">
        <h4 className="card-title">{name}</h4>
        {renderDescriptions()}
        <div className="card-buttons d-flex justify-content-between">
          <Link to={`/${category}/${uid}`}>
            <button className="btn btn-dark text-warning btn-more">
              Leer Más!
            </button>
          </Link>
          <button
            className="btn btn-warning btn-add-favorite"
            onClick={() => actions.addFavorites(name)}
          >
            <i className="text-white far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description1: PropTypes.string,
    description2: PropTypes.string,
    description3: PropTypes.string,
  }).isRequired,
  uid: PropTypes.string.isRequired,
};

export default Card;
