import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-5 p-5 bg-light text-center">
      <div>
        <h4>Hello</h4>
        <p>This is</p>
        <h1 className="text-primary">Hassan</h1>

        <p>
          Wanna know about me... <br />
          Please contact me: +880171111111
        </p>
      </div>

      <Link
        to="/home"
        variant="primary"
        type="button"
        className="btn btn-primary text-decoration-none"
      >
        Go to homepage
      </Link>
    </div>
  );
};

export default About;
