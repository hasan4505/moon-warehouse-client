import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWarehouse from "../../hooks/useWarehouse";
import Items from "../Items/Items";

const ManageItems = () => {
  const [products, setProducts] = useWarehouse();
  return (
    <div className="text-center m-5">
      <div className="text-center m-5">
        <h1>Manage Inventory Items</h1>
        <Link to="/addItems" className="btn btn-primary">
          Add New Item
        </Link>
      </div>
      <div>
        <Table striped bordered hover responsive>
          <thead></thead>
          <tbody>
            {products.slice(0, 6).map((product) => (
              <Items key={product._id} product={product}></Items>
            ))}

            <button className="btn btn-warning bg-warning text-white text-decoration-none mx-2">
              Update Stock
            </button>
            <button className="btn btn-danger bg-danger text-white text-decoration-none">
              Delete
            </button>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageItems;
