import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import star_wars_logo from "../../img/swlogo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light mb-3">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={star_wars_logo} style={{ height: "5rem" }} />
          </span>
        </Link>
        <div className="ml-auto">
          <button
            type="button"
            className="btn btn-outline-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="far fa-heart"></i> {store.favorites.length}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.map((favorite, index) => (
              <li
                className="dropdown-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {favorite}
                <button
                  className="btn btn-link p-0 text-danger ms-2"
                  onClick={() => {
                    actions.deleteFavorites(favorite);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
