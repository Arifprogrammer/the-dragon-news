// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [checked, setChecked] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("you've created your account successfully");
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="w-50 px-5">
      <h1 className="text-center mb-5 pb-5">Register your account</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter your photo url"
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleChecked}
            type="checkbox"
            label={
              <>
                Accept <Link>terms & conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className="w-100"
          disabled={!checked}
        >
          Register
        </Button>
        <p className="text-secondary fs-6 fw-semibold text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <Form.Text className="text-success">{success}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
