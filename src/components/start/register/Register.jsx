import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h2 className="title">REGISTER</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="username"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="password"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="repeat password"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          REGISTER
        </Button>
      </Form>
      <Form>
        <Form.Text>
          Already registered ? <Link to="/">Login</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;
