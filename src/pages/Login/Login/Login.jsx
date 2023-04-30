// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { logInUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/categories/0";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        setSuccess("you've logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="w-50 px-5">
      <h1 className="text-center mb-5 pb-5">Login your account</h1>
      <Form onSubmit={handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
        <Button variant="secondary" type="submit" className="w-100">
          Login
        </Button>
        <p className="text-secondary fs-6 fw-semibold text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <Form.Text className="text-success">{success}</Form.Text>
      </Form>
    </div>
  );
};

export default Login;
