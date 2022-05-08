import React from "react";

const AddItems = () => {
  return (
    <div className="card w-50 mx-auto mt-5 p-5 shadow">
      <h1 className="fw-normal text-center text-primary">Add New Items</h1>
      <form>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Product Name
          </label>
          <input
            className="form-control fs-5"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Supplier Name
          </label>
          <input
            className="form-control fs-5"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Price
          </label>
          <input
            className="form-control fs-5"
            type="number"
            name="number"
            required
          />
        </div>
        <input
          className="btn btn-primary w-100 btn-lg fs-4"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItems;
