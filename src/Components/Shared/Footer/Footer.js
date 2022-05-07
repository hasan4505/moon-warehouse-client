import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer">
      <div className="row d-flex p-3">
        <div className="col-6">
          <h2>CONTACT ME</h2>
          <p>
            Address: <span>155/12, Fake street, USA</span>
          </p>
          <p>
            Phone: <span> (08) 8827 633354</span>
          </p>
          <p>
            Mail: <span>contact@yoursite.com</span>
          </p>
        </div>
        <div className="col-6">
          <h2>INFORMATION</h2>
          <p>About us</p>
          <p>Legal Notice</p>
          <p>Payment</p>
        </div>
      </div>

      <p>
        <small>Copyright @ {year} Gym Essentials. All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
