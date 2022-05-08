import React from "react";
import { Link } from "react-router-dom";
import useWarehouse from "../../hooks/useWarehouse";
import Items from "../Items/Items";

const Inventory = () => {
  const [products, setProducts] = useWarehouse();

  return (
    <div className="m-5 g-5">
      <h2 className="text-center">Total Inventory Items: {products.length}</h2>

      <div className="row shadow-lg">
        <div className="row">
          {products.map((product) => (
            <Items key={product.id} product={product}></Items>
          ))}
        </div>
      </div>
      <div className="text-center m-3">
        <Link to="/manageItems" className="btn btn-primary text-center m-3">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
