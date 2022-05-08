import React from "react";
import { Link } from "react-router-dom";

const Items = ({ product }) => {
  const { img, description, name, price } = product;

  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 ">
      <div
        className="card  shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">
            <span>
              <b>Description: </b>
            </span>{" "}
            {description}
          </p>
          <h3>Price: ${price}</h3>
          <Link to="/items" className="btn btn-primary">
            Update Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
