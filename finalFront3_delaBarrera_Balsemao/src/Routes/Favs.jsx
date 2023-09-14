import React from "react";
import Card from "../Components/Card";
import "../styles/favs.css"

import { usecontextGlobal } from "../Components/utils/GlobalContext";
function Favs() {
  const { dentistState } = usecontextGlobal();

  return (
    <div className="favs">
      <h1>Odontologos Favoritos</h1>
      <div>
        {dentistState.dentistLike.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </div>
  );
}

export default Favs;
