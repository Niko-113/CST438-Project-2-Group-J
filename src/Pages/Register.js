import React, { useState, Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Register.css";
import { Link } from "react-router-dom"

export default function Register() {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");
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
    axios.post("http://localhost:8000/polls/create/", formValues)
    //console.log(axios.get("http://localhost:8000/polls"))
  }

  return (
    <div className="Register">

<div className="WishListTitle">
  <h1>Registration</h1>
    </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>New Username: </Form.Label>
          <Form.Control
            autoFocus
            type="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Create a Password: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password2">
          <Form.Label>Re-type Password: </Form.Label>
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
      <div className="LinkforLogin">
          <Link to="/Login">Go back to login</Link>
      </div>
    </div>
  );
}