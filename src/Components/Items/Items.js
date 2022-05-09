import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Items = ({ product }) => {
  const { _id, img, description, name, price, supplier } = product;
  const navigate = useNavigate();

  const navigateToItemDetail = (_id) => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className="g-4 col-sm-12 col-md-6 col-lg-4 ">
      <div
        className="card  shadow-lg p-2 mb-5 bg-body rounded"
        style={{ width: "24rem" }}
      >
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h4 className="card-title">Name: {name}</h4>
          <h6 className="card-title">Supplier: {supplier}</h6>
          <p className="card-text">
            <span>
              <b>Description: </b>
            </span>
            {description}
          </p>
          <h3>Price: ${price}</h3>
        </div>
        <div>
          <Link to="/items" className="btn btn-primary mx-2">
            All Item
          </Link>
          <button
            onClick={() => navigateToItemDetail(_id)}
            className="btn btn-primary"
          >
            Delivered
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
