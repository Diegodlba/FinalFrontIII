import React from "react";
import Card from "../Components/Card";
import "../styles/home.css";
import { usecontextGlobal } from "../Components/utils/GlobalContext.jsx";

const Home = () => {
  const { dentistState } = usecontextGlobal();
  return (
    <main className="main">
      <h1>Principal</h1>
      <div>
        {dentistState.dentistsList.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
