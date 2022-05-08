import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageItems = () => {
  return (
    <div className="text-center m-5">
      <div className="text-center m-5">
        <h1>Manage Inventory Items</h1>
        <Link to="/addItems" className="btn btn-primary">
          Add New Item
        </Link>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Supplier Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Update Stock/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>12</td>
              <td>1200</td>
              <td>
                <button className="btn btn-warning bg-warning text-white text-decoration-none mx-2">
                  Update Stock
                </button>
                <button className="btn btn-danger bg-danger text-white text-decoration-none">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>20</td>
              <td>1600</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageItems;
