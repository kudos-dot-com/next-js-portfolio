import React from "react";
import Form from "react-bootstrap/Form";
function Form1() {
  const message="We'll never share your email with anyone else.";
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={(e) => localStorage.setItem("name", e.target.value)}
            type="email"
            placeholder="Enter full name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => localStorage.setItem("email", e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            {message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => localStorage.setItem("number", e.target.value)}
            type="text"
            placeholder="Enter contact no"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Form1;
