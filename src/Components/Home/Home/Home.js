import React from "react";
import Banner from "../../../images/banner/banner1.png";
import ManageInventory from "../../ManageInventory/ManageInventory";
import useWarehouse from "../../../hooks/useWarehouse";

const Home = () => {
  const [products, setProducts] = useWarehouse();
  return (
    <div className="container">
      <div className="d-flex align-items-center mx-auto mt-5">
        <div className="col-lg-6">
          <h1 className="text-danger">
            MOON <span className="text-info">Warehouse</span>{" "}
          </h1>
          <h3 className="text-success">Delivery of goods from Warehouse</h3>
          <p className="me-5 text-warning">
            This is a Warehouse Management Software. Here you find all Products
            and updated the stock of all Items at instantly.....
          </p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid" src={Banner} alt="" />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center text-primary mb-4">Inventory Items</h1>
        <div className="row">
          <div className="row">
            {products.slice(0, 6).map((product) => (
              <ManageInventory
                key={product.id}
                product={product}
              ></ManageInventory>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-primary mb-4">Sale up to 30% off</h1>
      </div>
      <div>
        <h1 className="text-center text-primary mb-4">What's client say ?</h1>
      </div>
    </div>
  );
};

export default Home;
