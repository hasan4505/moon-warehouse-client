import React from "react";
import Banner from "../../../images/banner/banner1.png";
import useService from "../../../hooks/useWarehouse";
import ManageInventory from "../../ManageInventory/ManageInventory";

const Home = () => {
  const [services, setServices] = useService();
  return (
    <div className="container">
      <div className="d-flex align-items-center mx-auto mt-5">
        <div className="col-lg-6">
          <h1 className="text-primary">GYM ESSENTIALS</h1>
          <h3>Believe In Yourself</h3>
          <p className="me-5">
            Hi, I am a professional gym trainer for you. See my services and get
            your favorite package.
          </p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid" src={Banner} alt="" />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center text-primary mb-4">My Awesome Services</h1>
        <div className="row">
          <div className="row">
            {services.map((service) => (
              <ManageInventory
                key={service.id}
                service={service}
              ></ManageInventory>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
