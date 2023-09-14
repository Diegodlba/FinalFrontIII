import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usecontextGlobal } from "../Components/utils/GlobalContext";
import "../styles/detail.css";

const Detail = () => {
  const { dentistState, dentistDispatch } = usecontextGlobal();

  const params = useParams();

  console.log(params.id);

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      dentistDispatch({ type: "GET_DENTIST", payload: res.data });
    });
  }, [url]);

  return (
    <div className="detail">
      <table>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Sitio web</td>
          </tr>
          <tr>
            <td>
              <h3>{dentistState.dentist.name}</h3>
            </td>
            <td>
              <h3>{dentistState.dentist.email}</h3>
            </td>
            <td>
              <h3>{dentistState.dentist.website}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
