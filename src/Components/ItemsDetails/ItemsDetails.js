import React from "react";
import { Link, useParams } from "react-router-dom";
import useItemDetail from "../../hooks/useItemDetail";

const ItemsDetails = () => {
  const { productId } = useParams();
  const [product] = useItemDetail(productId);

  return (
    <div className="text-center">
      <h2>Is already shipment/deliver: {product.name}</h2>
      <div className="text-center">
        <Link to={`/deliver/${productId}`}>
          <button className="btn btn-primary m-3">Delivered</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemsDetails;
