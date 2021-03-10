import React, { useState } from "react";
import {
  DivForm,
  Form,
  Input,
  StyledFieldset,
  StyledTextArea,
  Error,
  Button,
} from "./Form.styled";

const initalState = {
  name: "",
  email: "",
  message: "",
  gender: "",
};

function Formulario() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    console.log("Succeeded!!!");
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <DivForm>
        <Form onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={state.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={state.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <Error>
              <p>{error}</p>
            </Error>
          )}
          <Button type="submit">Send Message</Button>
        </Form>
      </DivForm>
    </>
  );
}

export default Formulario;
