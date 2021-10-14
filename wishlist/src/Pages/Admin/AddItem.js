import React, { useState, Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/Admin.css";
import FormGroup from "react-bootstrap/esm/FormGroup";

export default function Register() {
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        url: "",
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

    function handleSubmit(event) {

    }

    function validateForm() {
        return formValues.name.length > 0;
    }

    return (
        <div className="AddItem">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="name">
              <Form.Label>Item Name: </Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="description">
              <Form.Label>Description: </Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="url">
              <Form.Label>Image URL: </Form.Label>
              <Form.Control
                type="text"
                name="url"
                value={formValues.url}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
            Add Item
            </Button>
          </Form>
        </div>
    );
}