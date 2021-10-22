import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import { Link } from "react-router-dom"
import { Redirect } from 'react-router';
import Homepage from "./Homepage";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location = '/Homepage';
  }


  return (
    
    <div className="Login">

<div className="WishListTitle">
  <h1>Welcome to the Wishlist page!</h1>
    </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />


        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>

      <div className="LinkforReg">
          <Link to="/Register">Don't have an account? Register by clicking this link</Link>
      </div>

      <div className="LinkforAdminLogin">
          <Link to="/AdminLogin">Admin? Log in here</Link>
      </div>
    </div>

    
  );


}