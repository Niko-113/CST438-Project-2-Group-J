import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";

export default function Login() {

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
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
    return formValues.username.length > 0 && formValues.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8000/polls/login/", formValues).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        document.querySelector("#loginError").innerHTML = "Invalid username or password";
        document.querySelector("#loginError").style.color = "red"
      }
    });
    document.querySelector("#loginError").innerHTML = "Login successful!";
    document.querySelector("#loginError").style.color = "green";
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div id="loginError"></div>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}