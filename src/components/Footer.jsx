import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <div className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>RUTH ABOSEDE ART</h4>
              </div>

              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="" className="nav-link p-0 text-white">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    >
                      <button
                        className="btn btn-primary rounded-pill px-4"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </input>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>@ 2022 Company, Inc.All right reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a
                    className="link-light"
                    href="https//:facebook.com/RuthAbosede"
                  >
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="link-light"
                    href="https//:instagram/RuthAbosede"
                  >
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-light" href="https//twiter/RuthAbosede">
                    <i className="fa fa-twiter fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
