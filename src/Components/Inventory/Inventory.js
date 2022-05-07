import React from "react";
import ManageInventory from "../ManageInventory/ManageInventory";
import useWarehouse from "../../hooks/useWarehouse";

const Inventory = () => {
  const [products, setProducts] = useWarehouse();

  return (
    <div className="review-container">
      <h2>Total ManageInventory ({products.length})</h2>
      <div className="review-card">
        {products.map((product) => (
          <ManageInventory key={product.id} product={product}></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
