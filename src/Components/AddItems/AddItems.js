import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="card w-50 mx-auto mt-5 p-5 shadow">
      <h2 className="fw-normal text-center text-primary">Add New Items</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Product Name
          </label>
          <input
            className="form-control fs-5"
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Supplier Name
          </label>
          <input
            className="form-control fs-5"
            type="text"
            placeholder="Supplier Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Description
          </label>
          <textarea
            className="form-control fs-5"
            type="text"
            placeholder="Description"
            {...register("description")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Price
          </label>
          <input
            className="form-control fs-5"
            placeholder="Price"
            type="number"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Image
          </label>
          <input
            className="form-control fs-5"
            placeholder="Photo URL"
            type="text"
            {...register("img")}
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
