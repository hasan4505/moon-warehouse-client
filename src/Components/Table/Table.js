import React, { useEffect } from "react";
import useWarehouse from "../../hooks/useWarehouse";

const Table = ({ product }) => {
  const [products, setProducts] = useWarehouse();
  return (
    <div>
      <h1>table</h1>
      <tr>
        <td>{product.img}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  );
};

export default Table;
