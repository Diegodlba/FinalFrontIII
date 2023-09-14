import React from "react";
import { Link } from "react-router-dom";

import { usecontextGlobal } from "../Components/utils/GlobalContext";

const Card = ({ dentist }) => {
  const { dentistState, dentistDispatch } = usecontextGlobal();

  const findFav = dentistState.dentistLike.find((fav) => fav.id === dentist.id);

  const addFav = () => {
    if (!findFav) {
      dentistDispatch({ type: "DENTIST_LIKE", payload: dentist });
    } else {
      const filteredFavs = dentistState.dentistLike.filter(
        (fav) => fav.id !== dentist.id
      );
      dentistDispatch({ type: "DENTIST_DELETE", payload: filteredFavs });
    }
  };

  return (
    <div>
      <Link
        key={dentist.id}
        to={"/detalle/" + dentist.id}
        style={{ textDecoration: "none" }}
      >
        <img src="../src/assets/doctor.jpg" alt="Doctor" />
        <h1>{dentist.name}</h1>
        <h2>{dentist.username}</h2>
      </Link>
      <button onClick={addFav}>{findFav ? "❤️ " : "🤍"}</button>
    </div>
  );
};

export default Card;
