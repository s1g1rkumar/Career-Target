import React from "react";
import "../CSS/Footer.css";
// import {Link,BrowserRouter as Router} from 'react-router-dom';
import "../CSS/Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid pt-5 pb-3 bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* <Router> */}
              <div className="row">
                <div className="col-md-2 col-sm-12">
                  <a href="/">Home</a>
                </div>
                <div className="col-md-2 col-sm-12">
                  <a href="/services">Services</a>
                </div>
                <div className="col-md-2 col-sm-12">
                  <a href="/about">About Us</a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="/contact">Contact Us</a>
                </div>
              </div>
              {/* </Router> */}
            </div>

            <div className="col-md-6 col-sm-12">
              <input type="text" placeholder="Enter Email" className="mail" />
              <button className="btn-danger ml-2 subs">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="row pt-2">
          <p className="text-center">&#169;Career Target 2021</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
