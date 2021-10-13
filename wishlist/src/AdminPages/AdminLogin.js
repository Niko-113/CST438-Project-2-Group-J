import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"

export default function AdminLogin() {
  const [adminUsername, setadminUsername] = useState("");
  const [adminPassword, setadminPassword] = useState("");

  function validateForm() {
    return adminUsername.length > 0 && adminPassword.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="AdminLogin">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="adminUsername">
          <Form.Label>Admin Username</Form.Label>
          <Form.Control
            autoFocus
            type="adminUsername"
            value={adminUsername}
            onChange={(e) => setadminUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="adminPassword">
          <Form.Label>Admin Password</Form.Label>
          <Form.Control
            type="adminPassword"
            value={adminPassword}
            onChange={(e) => setadminPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>

      <div className="LinkforAdminLogin">
          <Link to="/Login">Back to Landing Page</Link>
      </div>

    </div>

    
  );


}