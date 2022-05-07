import React from "react";
import { Link } from "react-router-dom";
// import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="text-center m-4">
      <div>
        <img
          height={300}
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        />
      </div>
      <h1>Oops!</h1>
      <p>
        The page you're looking for might have been removed, had it's name
        changed or is temporarily unavailable.
      </p>
      <div>
        <Link
          to="/home"
          variant="primary"
          type="button"
          className="btn btn-primary text-decoration-none"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
