import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";
import  "../styles/navbar.css"

import { usecontextGlobal } from "../Components/utils/GlobalContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { dentistDispatch, dentistState } = usecontextGlobal();

  return (
    <div className="navbar">
      <h3 onClick={() => navigate(-1)}>↩Regresar</h3>
      <Link to={routes.home}>
        <h4>Principal</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favoritos</h4>
      </Link>

      {dentistState.dentistTheme ? (
        <button
          style={{
            backgroundColor: "pink",
            color: "white",
            borderRadius: "10px",
            padding: "3px",
            border: "none"
          }}
          onClick={() =>
            dentistDispatch({
              type: "THEME",
              payload: dentistState.dentistTheme ? false : true,
            })
          }
        >
          Cambiar tema
        </button>
      ) : (
        <button
          className="dark"
          style={{
            backgroundColor: "white",
            color: "pink",
            borderRadius: "10px",
            border: "none",
            padding: "3px"
          }}
          onClick={() =>
            dentistDispatch({
              type: "THEME",
              payload: dentistState.dentistTheme ? false : true,
            })
          }
        >
          Cambiar tema
        </button>
      )}
    </div>
  );
};

export default Navbar;
