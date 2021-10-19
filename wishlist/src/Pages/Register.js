import React, { useState, Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Register.css";
import FormGroup from "react-bootstrap/esm/FormGroup";

export default function Register() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    password2: "",
  });

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function validateForm() {
    var alphanum = /^([0-9]|[a-z])+([0-9a-z]+)$/i
    return formValues.username.length > 0 && formValues.password.length > 5 && formValues.password2.length > 5 
    && formValues.username.length < 21 && formValues.password.length < 21
    && formValues.password.match(alphanum) 
    && formValues.password == formValues.password2;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8000/polls/create/", formValues).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        document.querySelector("#registerError").innerHTML = "Username " + formValues.username + " already exists!";
        document.querySelector("#registerError").style.color = "red"
      }
    });
    document.querySelector("#registerError").innerHTML = "Account successfully created!";
    document.querySelector("#registerError").style.color = "green";
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            autoFocus
            type="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div id="registerError"></div>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password2">
          <Form.Label>Repeat Password: </Form.Label>
          <Form.Control
            type="password"
            name="password2"
            value={formValues.password2}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
        Register
        </Button>
      </Form>
    </div>
  );
}