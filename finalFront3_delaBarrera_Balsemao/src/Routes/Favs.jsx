import React from "react";
import Card from "../Components/Card";

import { usecontextGlobal } from "../Components/utils/GlobalContext";
function Favs() {
  const { dentistState } = usecontextGlobal();

  return (
    <>
      <h1>Odontologos Favoritos</h1>
      <div>
        {dentistState.dentistLike.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </>
  );
}

export default Favs;
