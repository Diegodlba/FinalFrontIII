import React from "react";
import { useState } from "react";
import "../styles/form.css";

const initialState = {
  name: "",
  email: "",
};
const Form = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [input, setInput] = useState();
  const [validation, setvalidation] = useState(undefined);

  const { name, email } = formValues;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(input.name.length);

    if (input.name.trim().length < 5) {
      setvalidation(false);
      return;
    }
    if (/\S+@\S+\.\S+/.test(email)) {
      setvalidation(false);
      return;
    }
    if (!input.email.includes(".")) {
      setvalidation(false);
      return;
    }

    setFormValues(input);
    setvalidation(true);
    document.getElementById("Formulario").reset();
  };

  return (
    <form onSubmit={onSubmit} id="Formulario" className="form">
      <input
        type="text"
        name="name"
        id={name}
        placeholder="Nombre Completo"
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        id={email}
        placeholder="Email"
        onChange={onChange}
      />
      <button type="submit">Enviar</button>
      {validation ? (
        <div>
          Gracias {name}, te contactaremos al email {email}
        </div>
      ) : undefined}
      {validation === false ? (
        <small style={{color: "red"}}>Por favor verifique los datos</small>
      ) : undefined}
    </form>
  );
};

export default Form;
