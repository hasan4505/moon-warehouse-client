import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer">
      <div className="row d-flex p-3">
        <div className="col-4">
          <h2>CONTACT ME</h2>
          <p>
            Address: <span>144/13, Fake street, USA</span>
          </p>
          <p>
            Phone: <span> (08) 8820 6333333</span>
          </p>
          <p>
            Mail: <span>moon06@gmail.com</span>
          </p>
        </div>
        <div className="col-4">
          <h2>INFORMATION</h2>
          <p>About us</p>
          <p>Legal Notice</p>
          <p>Payment</p>
        </div>
        <div className="col-4">
          <h2>SOCIAL</h2>
          <p>Facebook</p>
          <p>Pinterest</p>
          <p>Twitter</p>
        </div>
      </div>

      <p>
        <small>Copyright @ {year} moon warehouse. All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
