import React from "react";
import "./ManageInventory.css";

const ManageInventory = ({ product }) => {
  const { img, description, name, price } = product;

  return (
    <div className="all-reviews">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h3>$ {price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
