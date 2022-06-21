import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="login">
      <h2 className="title">
        <span className="login-permanent-title">LOGIN</span>
      </h2>
      <Form className="form">
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Username"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          LOGIN
        </Button>
      </Form>
      <Form>
        <Form.Text>
          Not registered yet? <Link to="register">Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
