import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-5 p-5 bg-light text-center">
      <div>
        <h4>Hello</h4>
        <p>
          This is
          <span>
            <h1>Hassan</h1>
          </span>
        </p>

        <p>
          Wanna know about me... <br />
          Please contact me: +880171111111
        </p>
      </div>

      <Link to="/home" variant="primary" type="submit">
        Go to homepage
      </Link>
    </div>
  );
};

export default About;
